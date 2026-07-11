import { BibleBook, BibleChapter, Testament } from './types';
import { bibleBooks, allBibleBooks, deuterocanonicalBooks, getBookBySlug, getBooksByTestament, getDeuterocanonicalBooks } from './books';

export type { BibleBook, BibleChapter, BibleVerse, Testament, BibleCanon } from './types';
export { bibleBooks, allBibleBooks, deuterocanonicalBooks, getBookBySlug, getBooksByTestament, getDeuterocanonicalBooks };

/**
 * Full King James Version text (public domain) is available for all 66
 * Protestant-canon books, sourced from the aruljohn/Bible-kjv dataset and
 * verified against the standard KJV totals (1,189 chapters / 31,102 verses).
 * The Catholic Deuterocanon / Orthodox Anagignoskomena books (tagged with
 * `canon` in books.ts) are not yet transcribed.
 */
export function isBookFullyAvailable(book: BibleBook): boolean {
  return !book.canon;
}

export function getAvailableChapterNumbers(bookId: string): number[] {
  const book = getBookBySlug(bookId);
  if (!book || !isBookFullyAvailable(book)) return [];
  return Array.from({ length: book.chapterCount }, (_, i) => i + 1);
}

export function isChapterAvailable(bookId: string, chapter: number): boolean {
  const book = getBookBySlug(bookId);
  if (!book || !isBookFullyAvailable(book)) return false;
  return chapter >= 1 && chapter <= book.chapterCount;
}

export function getTotalAvailableChapters(): number {
  return bibleBooks.reduce((sum, b) => sum + b.chapterCount, 0);
}

/** Loads full chapter text for a canonical book. Server-side/async only — the
 * per-book JSON files (in ./kjv/) are not bundled into the client. */
export async function getChapter(bookId: string, chapter: number): Promise<BibleChapter | undefined> {
  const book = getBookBySlug(bookId);
  if (!book || !isBookFullyAvailable(book)) return undefined;
  if (chapter < 1 || chapter > book.chapterCount) return undefined;
  try {
    const mod = await import(`./kjv/${bookId}.json`);
    const chapters = mod.default as { chapter: number; verses: { verse: number; text: string }[] }[];
    const found = chapters.find((c) => c.chapter === chapter);
    if (!found) return undefined;
    return { book: bookId, chapter, verses: found.verses };
  } catch {
    return undefined;
  }
}

/**
 * Books with a full Koine Greek interlinear available (word-by-word Greek,
 * transliteration, gloss, Strong's number, and morphological parsing),
 * sourced from the STEPBible TAGNT dataset (Tyndale House, CC BY 4.0).
 * Covers the entire New Testament — the Old Testament is Hebrew, not Greek,
 * and is not covered by this dataset.
 */
export const GREEK_INTERLINEAR_BOOKS = new Set([
  'matthew', 'mark', 'luke', 'john', 'acts', 'romans', '1corinthians', '2corinthians',
  'galatians', 'ephesians', 'philippians', 'colossians', '1thessalonians', '2thessalonians',
  '1timothy', '2timothy', 'titus', 'philemon', 'hebrews', 'james', '1peter', '2peter',
  '1john', '2john', '3john', 'jude', 'revelation',
]);

export function hasGreekInterlinear(bookId: string): boolean {
  return GREEK_INTERLINEAR_BOOKS.has(bookId);
}

export interface GreekWord {
  original: string;
  transliteration: string;
  gloss: string;
  strongs?: string;
  parsing?: string;
}

export interface GreekVerse {
  verse: number;
  originalText: string;
  words: GreekWord[];
}

export interface GreekChapter {
  chapter: number;
  verses: GreekVerse[];
}

/** Loads the Greek interlinear for one chapter of a New Testament book. Server-side/async only. */
export async function getGreekChapter(bookId: string, chapter: number): Promise<GreekChapter | undefined> {
  if (!hasGreekInterlinear(bookId)) return undefined;
  try {
    const mod = await import(`./greek/${bookId}.json`);
    const chapters = mod.default as GreekChapter[];
    return chapters.find((c) => c.chapter === chapter);
  } catch {
    return undefined;
  }
}

/**
 * Old Testament books whose Septuagint (LXX) text — a Greek translation of
 * the Hebrew OT, c. 3rd–2nd century BC — is available as plain text (no
 * word-by-word morphology/gloss/Strong's, unlike the NT interlinear), sourced
 * from Swete's edition (public domain) via nathans/lxx-swete (CC BY-SA 4.0).
 * Five OT books are deliberately excluded because their LXX book division or
 * versification doesn't map 1:1 onto the Protestant canon used elsewhere in
 * this app: Psalms (LXX numbering is offset from Hebrew/English numbering),
 * Ezra and Nehemiah (combined into one book in the LXX tradition), Ecclesiastes
 * (absent from this dataset), and Daniel (two competing Greek versions exist —
 * Old Greek and Theodotion's — and choosing between them isn't done here).
 * See scripts/fetch-lxx-swete.mjs for the full rationale.
 */
export const SEPTUAGINT_BOOKS = new Set([
  'genesis', 'exodus', 'leviticus', 'numbers', 'deuteronomy', 'joshua', 'judges', 'ruth',
  '1samuel', '2samuel', '1kings', '2kings', '1chronicles', '2chronicles', 'esther', 'job',
  'proverbs', 'songofsolomon', 'isaiah', 'jeremiah', 'lamentations', 'ezekiel',
  'hosea', 'joel', 'amos', 'obadiah', 'jonah', 'micah', 'nahum', 'habakkuk',
  'zephaniah', 'haggai', 'zechariah', 'malachi',
]);

export function hasSeptuagint(bookId: string): boolean {
  return SEPTUAGINT_BOOKS.has(bookId);
}

/** Loads the Septuagint (Greek) text for one chapter of an OT book. Plain
 * text only — server-side/async only. */
export async function getSeptuagintChapter(bookId: string, chapter: number): Promise<BibleChapter | undefined> {
  if (!hasSeptuagint(bookId)) return undefined;
  try {
    const mod = await import(`./lxx/${bookId}.json`);
    const chapters = mod.default as { chapter: number; verses: { verse: number; text: string }[] }[];
    const found = chapters.find((c) => c.chapter === chapter);
    if (!found) return undefined;
    return { book: bookId, chapter, verses: found.verses };
  } catch {
    return undefined;
  }
}

export function getAdjacentChapter(bookId: string, chapter: number, direction: 'next' | 'prev'): { book: string; chapter: number } | null {
  const book = getBookBySlug(bookId);
  if (!book) return null;
  const delta = direction === 'next' ? 1 : -1;
  const targetChapter = chapter + delta;
  if (targetChapter >= 1 && targetChapter <= book.chapterCount) {
    return { book: bookId, chapter: targetChapter };
  }
  // Deuterocanonical/Anagignoskomena books aren't part of the strict 66-book
  // sequence, so there's no well-defined "next/previous book" to jump to.
  if (book.canon) return null;
  const books = getBooksByTestament(book.testament);
  const idx = books.findIndex((b) => b.id === bookId);
  const nextBook = direction === 'next' ? books[idx + 1] : books[idx - 1];
  if (nextBook && isBookFullyAvailable(nextBook)) {
    return { book: nextBook.id, chapter: direction === 'next' ? 1 : nextBook.chapterCount };
  }
  return null;
}
