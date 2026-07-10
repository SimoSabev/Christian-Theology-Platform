export type Testament = 'old' | 'new';

/**
 * Books outside the 66-book Protestant canon are recognized by wider traditions
 * under different names for the same body of literature:
 * - Catholics call them the "Deuterocanonical" books ("second canon" — canonical,
 *   but their status was settled later than the "protocanonical" books).
 * - Eastern Orthodox Christians call them the "Anagignoskomena" (Greek for
 *   "things that are read/worthy to be read").
 * - Protestants historically call this same body of books the "Apocrypha"
 *   ("hidden things") and do not treat them as canonical Scripture.
 * 'orthodox-appendix' marks books printed in Slavonic Bibles as a non-liturgical
 * appendix (2 Esdras / 4 Ezra, 4 Maccabees) — included for completeness but not
 * read in Orthodox worship the way the other Anagignoskomena are.
 */
export type BibleCanon = 'catholic' | 'orthodox' | 'orthodox-appendix';

export interface BibleBook {
  id: string; // 'genesis', 'matthew'
  slug: string; // same as id, used in URLs
  name: string;
  testament: Testament;
  chapterCount: number;
  order: number; // canonical order 1-66; deuterocanonical books use 100+
  genre: 'law' | 'history' | 'wisdom' | 'prophecy' | 'gospel' | 'epistle' | 'apocalyptic';
  summary: string;
  /** Present only for books outside the 66-book Protestant canon. Absent = universally recognized. */
  canon?: BibleCanon[];
}

export interface BibleVerse {
  verse: number;
  text: string;
}

export interface BibleChapter {
  book: string; // book id
  chapter: number;
  verses: BibleVerse[];
  /** true if only a curated selection of verses is shown, not the complete chapter */
  partial?: boolean;
}
