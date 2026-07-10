'use client';

import { useLens } from '@/components/lens/useLens';
import { LENS_VARIANTS } from '@/components/lens/types';
import InterlinearReader from '@/components/manuscripts/InterlinearReader';
import { Eyebrow, KeystoneDivider } from '@/components/ornament';
import type { ManuscriptPassage } from '@/data/manuscripts/types';
import type { GreekChapter } from '@/data/bible';

interface Props {
  bookName: string;
  chapterNum: number;
  greekChapter: GreekChapter;
}

export default function ChapterGreekPanel({ bookName, chapterNum, greekChapter }: Props) {
  const { lens, hydrated } = useLens();
  const showGreekHebrew = hydrated && LENS_VARIANTS[lens].showGreekHebrew;

  const passage: ManuscriptPassage = {
    title: `${bookName} ${chapterNum}`,
    reference: `${bookName} ${chapterNum}`,
    notes: '',
    verses: greekChapter.verses.map((v) => ({
      reference: `${bookName} ${chapterNum}:${v.verse}`,
      originalText: v.originalText,
      words: v.words,
    })),
  };

  return (
    <>
      <KeystoneDivider className="my-8" />
      <div className="mb-6">
        <Eyebrow className="mb-1">KOINE GREEK SEMANTICS</Eyebrow>
        <p className="t-meta text-xs" style={{ color: 'var(--color-text-muted)' }}>
          Word-by-word Greek, transliteration, gloss, and Strong's number for every word in this chapter. Source: STEPBible.org / Tyndale House Cambridge (CC BY 4.0).
        </p>
      </div>

      {showGreekHebrew ? (
        <InterlinearReader passages={[passage]} script="greek" />
      ) : (
        <div className="p-4" style={{ border: '1px solid var(--color-border)', background: 'rgba(212,168,83,0.03)' }}>
          <p className="t-meta text-xs" style={{ color: 'var(--color-text-muted)' }}>
            The interactive Greek interlinear is available in Defender and Researcher reading modes. Use the <strong>reading mode toggle</strong> in the top navigation to switch.
          </p>
        </div>
      )}
    </>
  );
}
