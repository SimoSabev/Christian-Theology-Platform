import { Link } from '@/i18n/navigation';
import { getBookBySlug, getChapter, getAdjacentChapter, isChapterAvailable, getGreekChapter, hasGreekInterlinear, getSeptuagintChapter, hasSeptuagint } from '@/data/bible';
import { Eyebrow, KeystoneDivider } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import ActionToolbar from '@/components/reader/ActionToolbar';
import SeekerReadingTip from '@/components/reader/SeekerReadingTip';
import ChapterGreekPanel from '@/components/reader/ChapterGreekPanel';
import ChapterSeptuagintPanel from '@/components/reader/ChapterSeptuagintPanel';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface PageProps {
  params: Promise<{ book: string; chapter: string }>;
}

export default async function ChapterReaderPage({ params }: PageProps) {
  const { book: bookSlug, chapter: chapterParam } = await params;
  const chapterNum = parseInt(chapterParam, 10);
  const book = getBookBySlug(bookSlug);

  if (!book) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center t-meta">
        Book not found. <Link href="/read" style={{ color: 'var(--color-accent-gold)' }}>← Back to Scripture</Link>
      </div>
    );
  }

  const chapter = await getChapter(book.id, chapterNum);
  const prev = getAdjacentChapter(book.id, chapterNum, 'prev');
  const next = getAdjacentChapter(book.id, chapterNum, 'next');
  const greekChapter = hasGreekInterlinear(book.id) ? await getGreekChapter(book.id, chapterNum) : undefined;
  const septuagintChapter = hasSeptuagint(book.id) ? await getSeptuagintChapter(book.id, chapterNum) : undefined;

  if (!chapter) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
        <p className="t-body mb-6" style={{ color: 'var(--color-text-muted)' }}>
          {book.name} {chapterNum} is not yet transcribed in this reading library.
        </p>
        <Link href={`/read/${book.slug}`} className="inline-flex items-center gap-2 t-caps text-xs" style={{ color: 'var(--color-accent-gold)' }}>
          <ArrowLeft size={12} /> Back to {book.name}
        </Link>
      </div>
    );
  }

  const formattedChapter = `${book.name} ${chapterNum}\n\n${chapter.verses.map((v) => `${v.verse} ${v.text}`).join(' ')}`;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="t-meta flex items-center gap-2 mb-8 flex-wrap" style={{ color: 'var(--color-text-muted)' }}>
        <Link href="/read">Scripture</Link>
        <span>/</span>
        <Link href={`/read/${book.slug}`}>{book.name}</Link>
        <span>/</span>
        <span style={{ color: 'var(--color-text-secondary)' }}>Chapter {chapterNum}</span>
      </div>

      <RevealOnScroll>
        <Eyebrow className="mb-3">{book.testament === 'old' ? 'OLD TESTAMENT' : 'NEW TESTAMENT'} · KING JAMES VERSION</Eyebrow>
        <h1 className="t-h1 mb-6" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>{book.name} {chapterNum}</h1>
      </RevealOnScroll>

      {chapter.partial && (
        <div className="mb-8 p-4" style={{ border: '1px solid rgba(212,168,83,0.3)', background: 'rgba(212,168,83,0.04)', borderLeft: '3px solid var(--color-accent-gold)' }}>
          <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            <strong style={{ color: 'var(--color-accent-gold)' }}>Curated selection:</strong> this chapter shows a selection of key verses rather than every verse — verse numbers may skip.
          </p>
        </div>
      )}

      <SeekerReadingTip />

      <ActionToolbar argName={`${book.name} ${chapterNum}`} formattedArg={formattedChapter} className="mb-8" />

      <KeystoneDivider className="mb-8" />

      <div className="space-y-4 mb-12">
        {chapter.verses.map((v) => (
          <p key={v.verse} className="t-body" style={{ color: 'var(--color-text-primary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
            <sup className="t-caps mr-2" style={{ color: 'var(--color-accent-gold)', fontSize: '0.65rem' }}>{v.verse}</sup>
            {v.text}
          </p>
        ))}
      </div>

      {greekChapter ? (
        <ChapterGreekPanel bookName={book.name} chapterNum={chapterNum} greekChapter={greekChapter} />
      ) : hasGreekInterlinear(book.id) ? (
        <>
          <KeystoneDivider className="my-8" />
          <div className="p-4" style={{ border: '1px solid var(--color-border)', background: 'rgba(212,168,83,0.03)' }}>
            <p className="t-meta text-xs" style={{ color: 'var(--color-text-muted)' }}>
              The Greek interlinear for this chapter is temporarily unavailable on this deployment — it is regenerated from a separately-licensed dataset and was not bundled with this build.
            </p>
          </div>
        </>
      ) : null}

      {septuagintChapter ? (
        <ChapterSeptuagintPanel bookName={book.name} chapterNum={chapterNum} septuagintChapter={septuagintChapter} />
      ) : hasSeptuagint(book.id) ? (
        <>
          <KeystoneDivider className="my-8" />
          <div className="p-4" style={{ border: '1px solid var(--color-border)', background: 'rgba(212,168,83,0.03)' }}>
            <p className="t-meta text-xs" style={{ color: 'var(--color-text-muted)' }}>
              The Septuagint text for this chapter is temporarily unavailable on this deployment — it is regenerated from a separately-licensed dataset and was not bundled with this build.
            </p>
          </div>
        </>
      ) : null}

      <KeystoneDivider className="mb-8" />

      <div className="flex items-center justify-between">
        {prev ? (
          <Link href={`/read/${prev.book}/${prev.chapter}`} className="inline-flex items-center gap-2 t-caps text-xs" style={{ color: isChapterAvailable(prev.book, prev.chapter) ? 'var(--color-accent-gold)' : 'var(--color-text-muted)' }}>
            <ArrowLeft size={12} /> Previous Chapter
          </Link>
        ) : <span />}
        {next ? (
          <Link href={`/read/${next.book}/${next.chapter}`} className="inline-flex items-center gap-2 t-caps text-xs" style={{ color: isChapterAvailable(next.book, next.chapter) ? 'var(--color-accent-gold)' : 'var(--color-text-muted)' }}>
            Next Chapter <ArrowRight size={12} />
          </Link>
        ) : <span />}
      </div>
    </div>
  );
}
