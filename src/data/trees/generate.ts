import type { Argument, ArgumentPremise, Objection, TreeNode } from '../arguments/types';

/**
 * Deterministic, pure tree generator.
 *
 * Turns an authored `Argument` into a `TreeNode` dialectical tree by
 * restructuring the argument's own premises, defenses, objections and
 * responses — no content is fabricated.
 */

const DEFENSE_MAX_CHARS = 200;
const RESPONSE_SENTENCE_COUNT = 2;

/**
 * Truncate a long block of prose at a sentence boundary near `maxChars`
 * so a tree node stays readable. Deterministic: always cuts at the last
 * sentence terminator at or before the limit; if none exists, cuts at the
 * limit and appends an ellipsis.
 */
function truncateAtSentence(text: string, maxChars: number): string {
  const trimmed = text.trim();
  if (trimmed.length <= maxChars) return trimmed;

  const window = trimmed.slice(0, maxChars);
  // Find the last sentence terminator within the window.
  const terminators = ['. ', '! ', '? ', '." ', '!" ', '?" '];
  let cut = -1;
  for (const term of terminators) {
    const idx = window.lastIndexOf(term);
    if (idx > cut) cut = idx + term.trimEnd().length;
  }
  if (cut > 0) return trimmed.slice(0, cut).trim();

  // No sentence boundary found — fall back to a hard cut with an ellipsis.
  return `${window.trim()}…`;
}

// Common abbreviations whose trailing period must NOT be treated as a
// sentence boundary (scripture references and honorifics that appear in the
// authored theology content).
const ABBREVIATIONS = new Set([
  'cor', 'matt', 'gen', 'ps', 'rom', 'jn', 'lk', 'mk', 'acts', 'heb', 'rev',
  'st', 'ch', 'chs', 'cf', 'e.g', 'i.e', 'vs', 'no', 'dr', 'mr', 'mrs',
  'trans', 'ed', 'vol', 'pp', 'p',
]);

/**
 * Split prose into trimmed sentences, preserving terminating punctuation.
 * Deterministic and whitespace-normalised. Guards against splitting inside
 * common abbreviations ("1 Cor. 15:4", "Matt. 28:13") and numeric references.
 */
export function splitSentences(text: string): string[] {
  const trimmed = text.trim().replace(/\s+/g, ' ');
  if (!trimmed) return [];

  const sentences: string[] = [];
  let start = 0;
  for (let i = 0; i < trimmed.length; i += 1) {
    const char = trimmed[i];
    if (char !== '.' && char !== '!' && char !== '?') continue;

    // Consume any run of terminators plus an optional closing quote.
    let end = i;
    while (end + 1 < trimmed.length && '.!?'.includes(trimmed[end + 1])) end += 1;
    if (end + 1 < trimmed.length && (trimmed[end + 1] === '"' || trimmed[end + 1] === "'")) {
      end += 1;
    }

    const next = trimmed[end + 1];
    // A real boundary is followed by end-of-string or whitespace + a capital
    // letter / quote. Otherwise it is punctuation inside the sentence.
    const isBoundary = next === undefined || next === ' ';
    if (!isBoundary) {
      i = end;
      continue;
    }

    if (char === '.' && end === i) {
      // Guard: don't break after a known abbreviation. Strip any leading
      // punctuation (e.g. "(Matt" -> "matt") before matching.
      const preceding = trimmed.slice(start, i);
      const rawWord = preceding.match(/(\S+)$/)?.[1] ?? '';
      const lastWord = rawWord.replace(/^[^\p{L}\p{N}]+/u, '').toLowerCase();
      if (ABBREVIATIONS.has(lastWord)) continue;

      // Guard: don't break before a bare number (scripture/citation refs such
      // as "(Matt. 28:13" or "15:4. 28:12-15"). A sentence rarely starts with a
      // digit, so treat "period + space + digit" as an in-reference period.
      if (next === ' ' && /\d/.test(trimmed[end + 2] ?? '')) continue;
    }

    sentences.push(trimmed.slice(start, end + 1).trim());
    start = end + 1;
    i = end;
  }

  const tail = trimmed.slice(start).trim();
  if (tail) sentences.push(tail);
  return sentences;
}

/**
 * Return the first `count` sentences of a block of prose, preserving their
 * terminating punctuation. Deterministic and whitespace-normalised.
 */
export function firstSentences(text: string, count: number): string {
  const sentences = splitSentences(text);
  if (sentences.length === 0) return text.trim();
  return sentences.slice(0, count).join(' ').trim();
}

/** Lowercase alphabetic tokens of length >= 4, deduplicated. */
function keywords(text: string): Set<string> {
  const tokens = text.toLowerCase().match(/[a-z]{4,}/g) ?? [];
  return new Set(tokens);
}

/** Count shared keywords between two texts (cheap relevance heuristic). */
function keywordOverlap(a: string, b: string): number {
  const aKeys = keywords(a);
  const bKeys = keywords(b);
  let shared = 0;
  for (const key of aKeys) {
    if (bKeys.has(key)) shared += 1;
  }
  return shared;
}

/** Build the response child node for an objection, if a response exists. */
function buildObjectionNode(slug: string, objection: Objection): TreeNode {
  const children: TreeNode[] = [];
  const responseText = firstSentences(objection.response, RESPONSE_SENTENCE_COUNT);
  if (responseText) {
    children.push({
      id: `${objection.id}-response`,
      type: 'response',
      text: responseText,
      sources: objection.sources,
    });
  }

  return {
    id: objection.id,
    type: 'objection',
    text: objection.title,
    status: 'contested',
    children,
  };
}

/** Build a premise node with its supporting defense child. */
function buildPremiseNode(premise: ArgumentPremise): TreeNode {
  const children: TreeNode[] = [];
  const defenseText = truncateAtSentence(premise.defense, DEFENSE_MAX_CHARS);
  if (defenseText) {
    children.push({
      id: `${premise.id}-support`,
      type: 'support',
      text: defenseText,
      sources: premise.sources,
    });
  }

  return {
    id: premise.id,
    type: 'premise',
    text: premise.text,
    status: 'defended',
    children,
  };
}

/**
 * Decide, for each objection, which premise (if any) it most relates to via
 * keyword overlap. Returns a map from premise index -> objections, plus a list
 * of objections that could not be confidently attached to any premise (which
 * are hung off the root after the premises).
 */
function distributeObjections(
  premises: ArgumentPremise[],
  objections: Objection[],
): { byPremise: Map<number, Objection[]>; unattached: Objection[] } {
  const byPremise = new Map<number, Objection[]>();
  const unattached: Objection[] = [];
  const MIN_OVERLAP = 2;

  for (const objection of objections) {
    const objText = `${objection.title} ${objection.description}`;
    let bestIndex = -1;
    let bestScore = 0;
    premises.forEach((premise, index) => {
      const score = keywordOverlap(objText, premise.text);
      if (score > bestScore) {
        bestScore = score;
        bestIndex = index;
      }
    });

    if (bestIndex >= 0 && bestScore >= MIN_OVERLAP) {
      const existing = byPremise.get(bestIndex) ?? [];
      existing.push(objection);
      byPremise.set(bestIndex, existing);
    } else {
      unattached.push(objection);
    }
  }

  return { byPremise, unattached };
}

/**
 * Generate a dialectical `TreeNode` from an authored argument.
 *
 * Structure:
 *   argument (root)
 *     premise (defended)
 *       support (defense, truncated)
 *       [objection (contested) -> response]  // if keyword-relevant
 *     ...more premises
 *     [objection (contested) -> response]     // unattached objections
 *     conclusion
 */
export function generateTree(arg: Argument): TreeNode {
  const { byPremise, unattached } = distributeObjections(arg.premises, arg.objections);

  const premiseNodes: TreeNode[] = arg.premises.map((premise, index) => {
    const node = buildPremiseNode(premise);
    const attached = byPremise.get(index);
    if (attached && attached.length > 0) {
      node.children = [
        ...(node.children ?? []),
        ...attached.map((objection) => buildObjectionNode(arg.slug, objection)),
      ];
    }
    return node;
  });

  const unattachedNodes: TreeNode[] = unattached.map((objection) =>
    buildObjectionNode(arg.slug, objection),
  );

  const conclusionNode: TreeNode = {
    id: `${arg.slug}-conclusion`,
    type: 'conclusion',
    text: arg.conclusion,
  };

  return {
    id: `${arg.slug}-root`,
    type: 'argument',
    text: arg.name,
    children: [...premiseNodes, ...unattachedNodes, conclusionNode],
  };
}
