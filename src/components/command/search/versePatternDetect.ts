const VERSE_RE = /^(\d\s+)?[A-Za-z]+\.?\s+\d+:\d+(-\d+)?$/;

export type ParsedVerse = {
  ref: string;
  book: string;
  chapter: number;
  verseStart: number;
  verseEnd: number | null;
};

export function isVerseQuery(query: string): boolean {
  return VERSE_RE.test(query.trim());
}

export function parseVerseRef(query: string): ParsedVerse | null {
  const match = query.trim().match(/^((?:\d\s+)?[A-Za-z]+\.?)\s+(\d+):(\d+)(?:-(\d+))?$/);
  if (!match) return null;
  return {
    ref: query.trim(),
    book: match[1]!.trim(),
    chapter: parseInt(match[2]!, 10),
    verseStart: parseInt(match[3]!, 10),
    verseEnd: match[4] ? parseInt(match[4], 10) : null,
  };
}
