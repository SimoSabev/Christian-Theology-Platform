'use client';

import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { getBooksByTestament, getAvailableChapterNumbers, getDeuterocanonicalBooks } from '@/data/bible';
import { Eyebrow, KeystoneDivider } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';
import { ChevronRight } from 'lucide-react';

type TabFilter = 'all' | 'old' | 'new' | 'deuterocanon';

export default function ReadIndexPage() {
  const [filter, setFilter] = useState<TabFilter>('all');

  const oldTestament = getBooksByTestament('old');
  const newTestament = getBooksByTestament('new');
  const catholicDeutero = getDeuterocanonicalBooks('catholic');
  const orthodoxOnly = getDeuterocanonicalBooks('orthodox').filter((b) => !b.canon?.includes('catholic'));
  const slavonicAppendix = getDeuterocanonicalBooks('orthodox-appendix');

  const tabStyle = (tab: TabFilter): React.CSSProperties => ({
    padding: '6px 16px',
    border: '1px solid var(--color-border)',
    background: filter === tab ? 'var(--color-accent-gold)' : 'transparent',
    color: filter === tab ? '#0a0e1a' : 'var(--color-text-secondary)',
    fontFamily: 'var(--font-display)',
    fontSize: '0.6rem',
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
    cursor: 'pointer',
  });

  const renderBookGrid = (books: ReturnType<typeof getBooksByTestament>) => (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
      {books.map((book, i) => {
        const availableChapters = getAvailableChapterNumbers(book.id);
        return (
          <RevealOnScroll key={book.id} delay={Math.min(i * 0.02, 0.4)}>
            <Link href={`/read/${book.slug}`} className="block group">
              <CodexCard>
                <div className="flex items-start justify-between mb-1">
                  <h3 className="t-caps text-sm" style={{ color: 'var(--color-text-primary)' }}>{book.name}</h3>
                  {availableChapters.length > 0 && (
                    <span className="t-meta px-2 py-0.5 ml-2 shrink-0" style={{ border: '1px solid rgba(212,168,83,0.3)', borderRadius: 2, fontSize: '0.6rem', color: 'var(--color-accent-gold)' }}>
                      {availableChapters.length} ch. available
                    </span>
                  )}
                </div>
                <p className="t-body text-xs mb-3" style={{ color: 'var(--color-text-secondary)' }}>{book.summary}</p>
                <div className="flex items-center justify-between">
                  <span className="t-meta" style={{ color: 'var(--color-text-muted)' }}>{book.chapterCount} chapters</span>
                  <ChevronRight size={14} style={{ color: 'var(--color-text-muted)' }} />
                </div>
              </CodexCard>
            </Link>
          </RevealOnScroll>
        );
      })}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <RevealOnScroll>
        <div className="text-center mb-10">
          <Eyebrow className="mb-4">HOLY SCRIPTURE</Eyebrow>
          <h1 className="t-h1 mb-4" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}>Read the Bible</h1>
          <p className="t-body max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            The complete 66 books of the Protestant canon (King James Version), plus the additional Old Testament books recognized by the Catholic and Eastern Orthodox traditions.
          </p>
        </div>
      </RevealOnScroll>

      <div
        className="max-w-2xl mx-auto mb-10 p-4 text-center"
        style={{ border: '1px solid rgba(212,168,83,0.3)', background: 'rgba(212,168,83,0.04)' }}
      >
        <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>
          All 66 books — every chapter, every verse (King James Version, public domain) — are fully readable now. The Catholic Deuterocanon and Orthodox Anagignoskomena books are listed for reference; their full text is on the roadmap.
        </p>
      </div>

      <KeystoneDivider className="mb-10" />

      <div className="flex items-center gap-2 mb-8 flex-wrap">
        <button style={tabStyle('all')} onClick={() => setFilter('all')}>All 66 Books</button>
        <button style={tabStyle('old')} onClick={() => setFilter('old')}>Old Testament</button>
        <button style={tabStyle('new')} onClick={() => setFilter('new')}>New Testament</button>
        <button style={tabStyle('deuterocanon')} onClick={() => setFilter('deuterocanon')}>Deuterocanon / Anagignoskomena</button>
      </div>

      {(filter === 'all' || filter === 'old') && (
        <>
          <div className="mb-6"><Eyebrow>OLD TESTAMENT · {oldTestament.length} BOOKS</Eyebrow></div>
          {renderBookGrid(oldTestament)}
        </>
      )}

      {(filter === 'all' || filter === 'new') && (
        <>
          <div className="mb-6"><Eyebrow>NEW TESTAMENT · {newTestament.length} BOOKS</Eyebrow></div>
          {renderBookGrid(newTestament)}
        </>
      )}

      {filter === 'deuterocanon' && (
        <>
          <RevealOnScroll>
            <div
              className="max-w-3xl mb-10 p-5"
              style={{ border: '1px solid var(--color-border)', background: 'rgba(212,168,83,0.03)' }}
            >
              <p className="t-body text-sm mb-3" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
                These Old Testament books are not part of the 66-book Protestant canon, but are recognized as Scripture by other major Christian traditions — under different names:
              </p>
              <ul className="t-body text-sm space-y-2" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                <li><strong style={{ color: 'var(--color-accent-gold)' }}>Catholics</strong> call them the <strong>Deuterocanonical</strong> books — literally "second canon," meaning their canonical status was formally settled later than the "protocanonical" books, not that they are lesser Scripture.</li>
                <li><strong style={{ color: 'var(--color-accent-gold)' }}>Eastern Orthodox</strong> Christians call this wider body the <strong>Anagignoskomena</strong> (Greek for "things that are read" / "worthy to be read"), and recognize a broader list than the Catholic seven.</li>
                <li><strong style={{ color: 'var(--color-accent-gold)' }}>Protestants</strong> historically call this same body of literature the <strong>Apocrypha</strong> ("hidden things") and do not treat it as canonical Scripture, though many older Protestant Bibles (including the original 1611 King James) printed it between the Testaments for historical reading.</li>
              </ul>
            </div>
          </RevealOnScroll>

          <div className="mb-6"><Eyebrow>CATHOLIC DEUTEROCANON · ALSO RECOGNIZED BY ORTHODOXY · {catholicDeutero.length} BOOKS</Eyebrow></div>
          {renderBookGrid(catholicDeutero)}

          <div className="mb-6"><Eyebrow>ADDITIONAL ORTHODOX ANAGIGNOSKOMENA · {orthodoxOnly.length} BOOKS</Eyebrow></div>
          {renderBookGrid(orthodoxOnly)}

          <div className="mb-6">
            <Eyebrow>SLAVONIC APPENDIX · NOT READ LITURGICALLY · {slavonicAppendix.length} BOOKS</Eyebrow>
          </div>
          {renderBookGrid(slavonicAppendix)}
        </>
      )}
    </div>
  );
}
