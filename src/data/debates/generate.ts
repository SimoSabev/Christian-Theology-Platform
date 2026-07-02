import type {
  Argument,
  ArgumentPremise,
  Debate,
  DebateRound,
  Objection,
} from '../arguments/types';
import { firstSentences, splitSentences } from '../trees/generate';

/**
 * Deterministic, pure debate generator.
 *
 * Builds a dialectical ladder from an authored `Argument` using only its own
 * premises, defenses, objections and responses — nothing is fabricated. The
 * "for" side states and defends the argument; the "against" side raises the
 * authored objections; the "for" side answers with the authored responses.
 */

const MAX_ROUNDS = 4;
const MIN_ROUNDS = 2;
const MAX_EVIDENCE_PER_SIDE = 3;
const CLAIM_SENTENCES = 3;
const EVIDENCE_SENTENCES = 2;

type Evidence = DebateRound['forSide']['evidence'][number];
type Strength = Evidence['strength'];

const DEFENDER_CATEGORIES = new Set(['historical', 'existential']);

function labelsFor(category: Argument['category']): { forLabel: string; againstLabel: string } {
  if (DEFENDER_CATEGORIES.has(category)) {
    return { forLabel: 'Defender', againstLabel: 'Skeptic' };
  }
  return { forLabel: 'Theist', againstLabel: 'Atheist' };
}

/** First source of a premise, falling back to the argument's key sources. */
function premiseSource(premise: ArgumentPremise, arg: Argument): string {
  return premise.sources[0] ?? arg.keySources[0] ?? '';
}

/** First source of an objection, falling back to key sources. */
function objectionSource(objection: Objection, arg: Argument): string {
  return objection.sources[0] ?? arg.keySources[0] ?? '';
}

/**
 * Build the opening "for" claim: a concise statement of the argument. Prefer
 * the authored short description; append the conclusion when it adds signal.
 */
function openingClaim(arg: Argument): string {
  const desc = arg.shortDescription.trim();
  const conclusion = arg.conclusion.trim();
  if (!desc) return conclusion;
  if (!conclusion) return desc;
  return `${desc} ${conclusion}`;
}

/** Up to N evidence entries drawn from premise defenses (strong). */
function premiseEvidence(arg: Argument): Evidence[] {
  return arg.premises.slice(0, MAX_EVIDENCE_PER_SIDE).map((premise) => ({
    text: firstSentences(premise.defense, EVIDENCE_SENTENCES),
    strength: 'strong' as Strength,
    source: premiseSource(premise, arg),
  }));
}

/**
 * Evidence entries drawn from an objection's own description sentences. The
 * first is 'moderate', later ones 'contested', reflecting a weakening thread.
 */
function objectionEvidence(objection: Objection, arg: Argument): Evidence[] {
  const sentences = splitSentences(objection.description).slice(0, 2);
  const source = objectionSource(objection, arg);
  if (sentences.length === 0) {
    return [{ text: objection.description.trim(), strength: 'moderate', source }];
  }
  return sentences.map((text, index) => ({
    text,
    strength: (index === 0 ? 'moderate' : 'contested') as Strength,
    source,
  }));
}

/**
 * Evidence entries for a "for" side response: sentences of the authored
 * response, first 'strong' then 'moderate'.
 */
function responseEvidence(objection: Objection, arg: Argument): Evidence[] {
  const sentences = splitSentences(objection.response).slice(0, 2);
  const source = objectionSource(objection, arg);
  if (sentences.length === 0) {
    return [{ text: objection.response.trim(), strength: 'strong', source }];
  }
  return sentences.map((text, index) => ({
    text,
    strength: (index === 0 ? 'strong' : 'moderate') as Strength,
    source,
  }));
}

function forObjectionResponse(objection: Objection): { claim: string; evidence: Evidence[] } {
  return {
    claim: firstSentences(objection.response, CLAIM_SENTENCES),
    evidence: [],
  };
}

function againstObjection(objection: Objection, arg: Argument) {
  return {
    claim: firstSentences(objection.description, CLAIM_SENTENCES) || objection.title,
    evidence: objectionEvidence(objection, arg),
  };
}

/**
 * Build a concession-or-standoff summary for the final "against" turn, drawn
 * from the last objection's description (contested). Does not invent new
 * arguments — it restates the residual force of the strongest objection.
 */
function finalStandoff(objection: Objection, arg: Argument) {
  const summary = firstSentences(objection.description, 2) || objection.title;
  return {
    claim: summary,
    evidence: [
      {
        text: summary,
        strength: 'contested' as Strength,
        source: objectionSource(objection, arg),
      },
    ],
  };
}

/**
 * Generate a `Debate` from an authored argument.
 *
 * Requires at least one authored objection (guaranteed for all current
 * arguments). Round count is `min(objections + 1, 4)`, floored at 2.
 */
export function generateDebate(arg: Argument): Debate {
  const { forLabel, againstLabel } = labelsFor(arg.category);
  const objections = arg.objections;

  // Number of dialectical rounds. Each new objection adds a round; capped.
  const roundCount = Math.max(
    MIN_ROUNDS,
    Math.min(objections.length + 1, MAX_ROUNDS),
  );

  const rounds: DebateRound[] = [];

  // Round 1: statement of the argument vs. the first objection.
  rounds.push({
    round: 1,
    forSide: {
      claim: openingClaim(arg),
      evidence: premiseEvidence(arg),
    },
    againstSide: againstObjection(objections[0], arg),
  });

  // Middle + final rounds. Round k (>= 2) answers objection[k-2] and, unless
  // it is the final round, raises objection[k-1].
  for (let round = 2; round <= roundCount; round += 1) {
    const answeredObjection = objections[round - 2];
    const responded = forObjectionResponse(answeredObjection);
    responded.evidence = responseEvidence(answeredObjection, arg);

    const isFinal = round === roundCount;
    const nextObjection = objections[round - 1];

    let against: DebateRound['againstSide'];
    if (!isFinal && nextObjection) {
      against = againstObjection(nextObjection, arg);
    } else {
      // Final round: concede-or-standoff from the last raised objection.
      const lastObjection = nextObjection ?? answeredObjection;
      against = finalStandoff(lastObjection, arg);
    }

    rounds.push({
      round,
      forSide: responded,
      againstSide: against,
    });
  }

  return {
    id: `${arg.slug}-debate`,
    argumentId: arg.slug,
    title: arg.name,
    forLabel,
    againstLabel,
    rounds,
  };
}
