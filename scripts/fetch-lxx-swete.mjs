// Fetches the Septuagint (LXX) — a Greek translation of the Hebrew Old
// Testament dating to the 3rd–2nd century BC — from Henry Barclay Swete's
// critical edition (1909–1930), via the nathans/lxx-swete repository, and
// writes it into src/data/bible/lxx/<bookId>.json for use by the reading
// library. This is PLAIN TEXT only (no word-by-word morphology, gloss, or
// Strong's numbers) — unlike the NT interlinear, no morphologically-tagged
// LXX dataset with clear, unrestricted licensing exists yet (STEPBible's own
// Greek OT dataset, "TAGOT", was not published as of this writing; other
// available datasets derive from CATSS with unclear/non-permissive terms).
//
// Source: https://github.com/nathans/lxx-swete (text digitized from Swete's
// edition via the Open Greek and Latin Project; Greek text CC BY-SA 4.0).
// Swete's edition source text is public domain (Swete died 1917). Per this
// dataset's ShareAlike license, this data is NOT committed to this
// repository — run this script locally/in CI to (re)generate it, same
// pattern as scripts/fetch-greek-nt.mjs. Attribution is shown in the app UI
// wherever this data is displayed.
//
// SCOPE: only books whose LXX book division and versification align
// cleanly with the Protestant 39-book canon already used elsewhere in this
// app are included. Five OT books are deliberately excluded because they
// don't have a clean 1:1 mapping and would risk silently mislabeling verses:
//   - Psalms: LXX psalm numbering is offset from the Hebrew/English
//     numbering used elsewhere in this app (e.g. LXX Ps 9 = Heb Ps 9+10
//     combined); needs a dedicated renumbering table, not done here.
//   - Ezra, Nehemiah: the LXX tradition combines these into one continuous
//     book ("Esdras B"); splitting it at the correct chapter requires
//     further verification and isn't done here.
//   - Ecclesiastes: not present in this dataset at all as of this writing.
//   - Daniel: the LXX tradition has two competing Greek versions (the Old
//     Greek and Theodotion's); which one to present is an editorial
//     decision not made here.
// These can be added later once each is individually researched and mapped.
//
// Usage: node scripts/fetch-lxx-swete.mjs

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '..', 'src', 'data', 'bible', 'lxx');
const KJV_DIR = path.join(__dirname, '..', 'src', 'data', 'bible', 'kjv');
const RAW_BASE = 'https://raw.githubusercontent.com/nathans/lxx-swete/master/data';

// bookId (matches src/data/bible/books.ts) -> source filename (without .txt)
const BOOK_FILES = {
  genesis: '01.Genesis',
  exodus: '02.Exodus',
  leviticus: '03.Leviticus',
  numbers: '04.Numeri',
  deuteronomy: '05.Deuteronomium',
  joshua: '06.Josue',
  judges: '08.Judices',
  ruth: '10.Ruth',
  '1samuel': '11.Regnorum_I',
  '2samuel': '12.Regnorum_II',
  '1kings': '13.Regnorum_III',
  '2kings': '14.Regnorum_IV',
  '1chronicles': '15.Paralipomenon_I',
  '2chronicles': '16.Paralipomenon_II',
  esther: '19.Esther',
  job: '32.Job',
  proverbs: '29.Proverbia',
  songofsolomon: '31.Canticum',
  isaiah: '48.Isaias',
  jeremiah: '49.Jeremias',
  lamentations: '51.Threni_seu_Lamentationes',
  ezekiel: '53.Ezechiel',
  hosea: '36.Osee',
  joel: '39.Joel',
  amos: '37.Amos',
  obadiah: '40.Abdias',
  jonah: '41.Jonas',
  micah: '38.Michaeas',
  nahum: '42.Nahum',
  habakkuk: '43.Habacuc',
  zephaniah: '44.Sophonias',
  haggai: '45.Aggaeus',
  zechariah: '46.Zacharias',
  malachi: '47.Malachias',
};

// Each line is "<book>.<chapter>.<verse> <greekWord>", one word per line,
// with the same ref repeated for every word in that verse. Verse "0" is a
// title/superscription line (e.g. "Vision of Obadiah") preceding verse 1 —
// skipped here so verse numbers line up with the KJV numbering used
// elsewhere in this app.
const LINE_RE = /^\d+\.(\d+)\.(\d+)\s+(.+)$/;

async function downloadText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return res.text();
}

function parseBookText(text) {
  const chapters = {};
  for (const line of text.split('\n')) {
    const m = line.match(LINE_RE);
    if (!m) continue;
    const chapter = parseInt(m[1], 10);
    const verse = parseInt(m[2], 10);
    const word = m[3].trim();
    if (verse === 0 || !word) continue;
    if (!chapters[chapter]) chapters[chapter] = {};
    if (!chapters[chapter][verse]) chapters[chapter][verse] = [];
    chapters[chapter][verse].push(word);
  }
  return Object.entries(chapters)
    .map(([chNum, verses]) => ({
      chapter: parseInt(chNum, 10),
      verses: Object.entries(verses)
        .map(([vNum, words]) => ({ verse: parseInt(vNum, 10), text: words.join(' ') }))
        .sort((a, b) => a.verse - b.verse),
    }))
    .sort((a, b) => a.chapter - b.chapter);
}

// Compares parsed verse counts against the KJV verse counts for the same
// book/chapter — a divergence would flag either a parsing bug or a genuine
// LXX/MT versification difference in a book we assumed was clean.
function checkCompleteness(bookId, chapters) {
  const kjvPath = path.join(KJV_DIR, `${bookId}.json`);
  if (!fs.existsSync(kjvPath)) return;
  const kjvChapters = JSON.parse(fs.readFileSync(kjvPath, 'utf-8'));
  const gaps = [];
  for (const { chapter, verses } of kjvChapters) {
    const parsed = chapters.find((c) => c.chapter === chapter);
    const parsedCount = parsed ? parsed.verses.length : 0;
    if (parsedCount < verses.length) {
      gaps.push(`ch.${chapter} (${parsedCount}/${verses.length} verses)`);
    }
  }
  if (gaps.length > 0) {
    console.warn(`LXX ${bookId}: fewer parsed verses than KJV — ${gaps.join(', ')}`);
  }
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  let written = 0;
  for (const [bookId, filename] of Object.entries(BOOK_FILES)) {
    const url = `${RAW_BASE}/${encodeURIComponent(filename)}.txt`;
    console.log(`Fetching ${bookId} (${filename})...`);
    const text = await downloadText(url);
    const chapters = parseBookText(text);
    checkCompleteness(bookId, chapters);
    fs.writeFileSync(path.join(OUT_DIR, `${bookId}.json`), JSON.stringify(chapters));
    written++;
  }
  console.log(`Wrote ${written} Septuagint book files to ${OUT_DIR}`);
}

main().catch((err) => {
  // Same rationale as scripts/fetch-greek-nt.mjs: this runs as `prebuild`
  // before `next build`, and a fetch failure here must not fail the whole
  // site build. The reader already degrades gracefully when this data is
  // absent — the Septuagint panel simply doesn't render for that deploy.
  console.error('Septuagint fetch failed — continuing without it:', err);
});
