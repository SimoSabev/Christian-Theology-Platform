'use client';

import { useParams } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { getBookBySlug, getAvailableChapterNumbers } from '@/data/bible';
import { Eyebrow, KeystoneDivider } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import { ArrowLeft, BookOpen } from 'lucide-react';

export default function BookChapterListPage() {
  const params = useParams();
  const slug = params.book as string;
  const book = getBookBySlug(slug);

  if (!book) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center t-meta">
        Book not found. <Link href="/read" style={{ color: 'var(--color-accent-gold)' }}>← Back to Scripture</Link>
      </div>
    );
  }

  const available = new Set(getAvailableChapterNumbers(book.id));
  const chapters = Array.from({ length: book.chapterCount }, (_, i) => i + 1);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="t-meta flex items-center gap-2 mb-8" style={{ color: 'var(--color-text-muted)' }}>
        <Link href="/read">Scripture</Link>
        <span>/</span>
        <span style={{ color: 'var(--color-text-secondary)' }}>{book.name}</span>
      </div>

      <RevealOnScroll>
        <Eyebrow className="mb-3">{book.testament === 'old' ? 'OLD TESTAMENT' : 'NEW TESTAMENT'} · {book.genre.toUpperCase()}</Eyebrow>
        <h1 className="t-h1 mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>{book.name}</h1>
        <p className="t-body mb-6" style={{ color: 'var(--color-text-secondary)', maxWidth: 640 }}>{book.summary}</p>
        {book.canon && (
          <div className="mb-10 p-4 max-w-xl" style={{ border: '1px solid rgba(212,168,83,0.3)', background: 'rgba(212,168,83,0.04)', borderLeft: '3px solid var(--color-accent-gold)' }}>
            <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              {book.canon.includes('catholic') && book.canon.includes('orthodox') && (
                <>Recognized as <strong style={{ color: 'var(--color-accent-gold)' }}>Deuterocanonical</strong> Scripture by Catholics and as part of the <strong style={{ color: 'var(--color-accent-gold)' }}>Anagignoskomena</strong> by the Eastern Orthodox. Not part of the Protestant canon.</>
              )}
              {!book.canon.includes('catholic') && book.canon.includes('orthodox') && (
                <>Recognized as part of the <strong style={{ color: 'var(--color-accent-gold)' }}>Anagignoskomena</strong> (Eastern Orthodox Old Testament) but not by the Catholic or Protestant canons.</>
              )}
              {book.canon.includes('orthodox-appendix') && (
                <>Printed as a non-liturgical <strong style={{ color: 'var(--color-accent-gold)' }}>appendix</strong> in Slavonic Bibles — read for edification, not used in Orthodox worship, and not part of the Catholic or Protestant canons.</>
              )}
            </p>
          </div>
        )}
      </RevealOnScroll>

      <KeystoneDivider className="mb-10" />

      <div className="mb-6"><Eyebrow>CHAPTERS · {available.size} OF {book.chapterCount} AVAILABLE</Eyebrow></div>

      <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2 mb-10">
        {chapters.map((num) => {
          const isAvailable = available.has(num);
          return isAvailable ? (
            <Link
              key={num}
              href={`/read/${book.slug}/${num}`}
              className="flex items-center justify-center aspect-square t-caps text-sm"
              style={{ border: '1px solid var(--color-accent-gold)', color: 'var(--color-accent-gold)', background: 'rgba(212,168,83,0.06)' }}
            >
              {num}
            </Link>
          ) : (
            <span
              key={num}
              className="flex items-center justify-center aspect-square t-caps text-sm"
              style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-muted)', opacity: 0.4 }}
              title="Not yet available"
            >
              {num}
            </span>
          );
        })}
      </div>

      {available.size === 0 && (
        <div className="p-8 text-center" style={{ border: '1px solid var(--color-border)' }}>
          <BookOpen size={20} className="mx-auto mb-3" style={{ color: 'var(--color-text-muted)' }} />
          <p className="t-body text-sm mb-4" style={{ color: 'var(--color-text-muted)' }}>
            No chapters of {book.name} are transcribed yet. This book is on the roadmap for the reading library.
          </p>
          <Link href="/read" className="inline-flex items-center gap-2 t-caps text-xs" style={{ color: 'var(--color-accent-gold)' }}>
            <ArrowLeft size={12} /> Back to all books
          </Link>
        </div>
      )}
    </div>
  );
}
