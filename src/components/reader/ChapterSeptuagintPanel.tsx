import { Eyebrow, KeystoneDivider } from '@/components/ornament';
import type { BibleChapter } from '@/data/bible';

interface Props {
  bookName: string;
  chapterNum: number;
  septuagintChapter: BibleChapter;
}

export default function ChapterSeptuagintPanel({ bookName, chapterNum, septuagintChapter }: Props) {
  return (
    <>
      <KeystoneDivider className="my-8" />
      <div className="mb-6">
        <Eyebrow className="mb-1">SEPTUAGINT (LXX)</Eyebrow>
        <p className="t-meta text-xs" style={{ color: 'var(--color-text-muted)' }}>
          A Greek translation of the Hebrew text, made in the 3rd–2nd century BC and quoted extensively by the New
          Testament writers. Plain text — no word-by-word interlinear tool for this book yet. Source: Swete&apos;s
          edition (1909–1930), digitized via the Open Greek and Latin Project (CC BY-SA 4.0).
        </p>
      </div>
      <div className="space-y-3">
        {septuagintChapter.verses.map((v) => (
          <p key={v.verse} className="t-body" style={{ color: 'var(--color-text-primary)', lineHeight: 1.9, fontSize: '1.05rem', fontFamily: 'var(--font-serif, serif)' }}>
            <sup className="t-caps mr-2" style={{ color: 'var(--color-accent-gold)', fontSize: '0.65rem' }}>{v.verse}</sup>
            {v.text}
          </p>
        ))}
      </div>
      <p className="t-meta text-xs mt-4" style={{ color: 'var(--color-text-muted)' }}>
        {bookName} {chapterNum} — Septuagint verse numbering matches the Hebrew/English numbering used elsewhere on
        this page for this book.
      </p>
    </>
  );
}
