// Fetches the Koine Greek New Testament interlinear (word-by-word Greek,
// transliteration, gloss, Strong's number, morphology) from STEPBible's
// Translators Amalgamated Greek NT (TAGNT) dataset and writes it into
// src/data/bible/greek/<bookId>.json for use by the reading library.
//
// Source: https://github.com/STEPBible/STEPBible-Data
// Data by STEPBible.org, based on work at Tyndale House Cambridge — CC BY 4.0.
// Per the data maintainers' request, this dataset is NOT committed to this
// repository; run this script locally/in CI to (re)generate it. Attribution
// is shown in the app UI wherever this data is displayed.
//
// Usage: node scripts/fetch-greek-nt.mjs

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '..', 'src', 'data', 'bible', 'greek');

const SOURCE_FILES = [
  'https://raw.githubusercontent.com/STEPBible/STEPBible-Data/master/Translators%20Amalgamated%20OT%2BNT/TAGNT%20Mat-Jhn%20-%20Translators%20Amalgamated%20Greek%20NT%20-%20STEPBible.org%20CC-BY.txt',
  'https://raw.githubusercontent.com/STEPBible/STEPBible-Data/master/Translators%20Amalgamated%20OT%2BNT/TAGNT%20Act-Rev%20-%20Translators%20Amalgamated%20Greek%20NT%20-%20STEPBible.org%20CC-BY.txt',
];

const BOOK_MAP = {
  Mat: 'matthew', Mrk: 'mark', Luk: 'luke', Jhn: 'john', Act: 'acts',
  Rom: 'romans', '1Co': '1corinthians', '2Co': '2corinthians', Gal: 'galatians',
  Eph: 'ephesians', Php: 'philippians', Col: 'colossians',
  '1Th': '1thessalonians', '2Th': '2thessalonians', '1Ti': '1timothy', '2Ti': '2timothy',
  Tit: 'titus', Phm: 'philemon', Heb: 'hebrews', Jas: 'james',
  '1Pe': '1peter', '2Pe': '2peter', '1Jn': '1john', '2Jn': '2john', '3Jn': '3john',
  Jud: 'jude', Rev: 'revelation',
};

const REF_RE = /^([A-Za-z0-9]+)\.(\d+)\.(\d+)#(\d+)=/;

async function downloadText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return res.text();
}

async function parseSource(text, books) {
  const lines = text.split('\n');
  const seen = new Set();
  let dataRows = 0;
  for (const line of lines) {
    const cols = line.split('\t');
    const ref = cols[0];
    const m = ref && ref.match(REF_RE);
    if (!m) continue;
    const [, bookAbbr, chapterStr, verseStr, instanceStr] = m;
    const bookId = BOOK_MAP[bookAbbr];
    if (!bookId) continue;
    const key = `${bookAbbr}.${chapterStr}.${verseStr}#${instanceStr}`;
    if (seen.has(key)) continue;
    seen.add(key);

    const greekCol = (cols[1] || '').trim();
    const glossCol = (cols[2] || '').trim();
    const strongMorphCol = (cols[3] || '').trim();
    if (!greekCol) continue;

    const parenMatch = greekCol.match(/^(\S+)\s*\(([^)]+)\)/);
    const original = parenMatch ? parenMatch[1] : greekCol;
    const transliteration = parenMatch ? parenMatch[2] : '';

    let strongs, parsing;
    if (strongMorphCol.includes('=')) {
      const idx = strongMorphCol.indexOf('=');
      strongs = strongMorphCol.slice(0, idx).replace(/^([A-Z]\d+).*$/, '$1');
      parsing = strongMorphCol.slice(idx + 1);
    }

    const chapter = parseInt(chapterStr, 10);
    const verse = parseInt(verseStr, 10);

    if (!books[bookId]) books[bookId] = {};
    if (!books[bookId][chapter]) books[bookId][chapter] = {};
    if (!books[bookId][chapter][verse]) books[bookId][chapter][verse] = [];
    books[bookId][chapter][verse].push({ original, transliteration, gloss: glossCol, strongs, parsing });
    dataRows++;
  }
  return dataRows;
}

// Compares parsed verse counts against the known-good KJV verse counts for
// the same book/chapter. The TAGNT source can legitimately omit disputed
// passages (e.g. the Comma Johanneum, the Pericope Adulterae, the Longer
// Ending of Mark) — this doesn't fail the build, it just surfaces gaps in
// the build log so a silently under-populated chapter doesn't go unnoticed.
function checkCompleteness(books) {
  const kjvDir = path.join(__dirname, '..', 'src', 'data', 'bible', 'kjv');
  const missingBooks = [];
  const chapterGaps = [];

  for (const bookId of Object.values(BOOK_MAP)) {
    const kjvPath = path.join(kjvDir, `${bookId}.json`);
    if (!fs.existsSync(kjvPath)) continue;
    const kjvChapters = JSON.parse(fs.readFileSync(kjvPath, 'utf-8'));

    if (!books[bookId]) {
      missingBooks.push(bookId);
      continue;
    }

    for (const { chapter, verses } of kjvChapters) {
      const parsedVerseCount = Object.keys(books[bookId][chapter] || {}).length;
      if (parsedVerseCount < verses.length) {
        chapterGaps.push(`${bookId} ${chapter} (${parsedVerseCount}/${verses.length} verses)`);
      }
    }
  }

  if (missingBooks.length > 0) {
    console.warn(`Greek NT: no data parsed at all for: ${missingBooks.join(', ')}`);
  }
  if (chapterGaps.length > 0) {
    console.warn(`Greek NT: chapters with fewer parsed verses than KJV (may be expected for disputed passages): ${chapterGaps.join(', ')}`);
  }
  if (missingBooks.length === 0 && chapterGaps.length === 0) {
    console.log('Greek NT: verse counts match KJV for every book/chapter.');
  }
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const books = {};
  let total = 0;
  for (const url of SOURCE_FILES) {
    console.log(`Fetching ${url}...`);
    const text = await downloadText(url);
    total += await parseSource(text, books);
  }
  console.log(`Parsed ${total} word rows across ${Object.keys(books).length} books.`);
  checkCompleteness(books);

  for (const [bookId, chapters] of Object.entries(books)) {
    const chapterArr = Object.entries(chapters).map(([chNum, verses]) => {
      const verseArr = Object.entries(verses).map(([vNum, words]) => ({
        verse: parseInt(vNum, 10),
        originalText: words.map((w) => w.original).join(' '),
        words,
      })).sort((a, b) => a.verse - b.verse);
      return { chapter: parseInt(chNum, 10), verses: verseArr };
    }).sort((a, b) => a.chapter - b.chapter);
    fs.writeFileSync(path.join(OUT_DIR, `${bookId}.json`), JSON.stringify(chapterArr));
  }
  console.log(`Wrote ${Object.keys(books).length} book files to ${OUT_DIR}`);
}

main().catch((err) => {
  // Runs as `prebuild` before `next build` — a transient fetch failure here
  // (rate limit, network blip) must not fail the whole site build. The app
  // already degrades gracefully when this data is absent (see
  // `getGreekChapter` in src/data/bible/index.ts): the interlinear panel
  // simply doesn't render for that deploy. Exit 0 so `next build` still runs.
  console.error('Greek NT interlinear fetch failed — continuing without it:', err);
});
