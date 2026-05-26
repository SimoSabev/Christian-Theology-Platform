'use client';

import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { churchFathers } from '@/data/sources';
import { churchFatherQuotes, ALL_THEMES, getQuotesByTheme, getQuotesByAuthor } from '@/data/sources/quotes';
import { Eyebrow, KeystoneDivider } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';
import { useLens } from '@/components/lens/useLens';
import { LENS_VARIANTS } from '@/components/lens/types';

const ALL_AUTHORS = Array.from(new Set(churchFatherQuotes.map(q => q.author))).sort();

export default function ChurchFathersPage() {
  const [activeTheme, setActiveTheme] = useState<string | null>(null);
  const [activeAuthor, setActiveAuthor] = useState<string | null>(null);
  const { lens, hydrated } = useLens();
  const { showPatristicCitations } = LENS_VARIANTS[lens];

  const filteredQuotes = churchFatherQuotes.filter(q => {
    const themeMatch = !activeTheme || q.themes.includes(activeTheme);
    const authorMatch = !activeAuthor || q.author === activeAuthor;
    return themeMatch && authorMatch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="t-meta flex items-center gap-2 mb-8" style={{ color: 'var(--color-text-muted)' }}>
        <Link href="/sources">Sources</Link>
        <span>/</span>
        <span style={{ color: 'var(--color-text-secondary)' }}>Church Fathers</span>
      </div>

      <RevealOnScroll>
        <Eyebrow className="mb-3">SOURCES · PATRISTICS</Eyebrow>
        <h1 className="t-h1 mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>Church Fathers</h1>
        <p className="t-body mb-8" style={{ color: 'var(--color-text-secondary)' }}>The foundational writings of early Christianity</p>
        {hydrated && !showPatristicCitations && (
          <div
            className="mt-6 p-4"
            style={{ border: '1px solid rgba(212,168,83,0.3)', background: 'rgba(212,168,83,0.04)', borderLeft: '3px solid var(--color-accent-gold)' }}
          >
            <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              <strong style={{ color: 'var(--color-accent-gold)' }}>New to patristics?</strong> These are the words of the earliest Christian writers — people who knew the apostles or their direct students. Start with any quote that catches your eye. Switch to Student or Researcher mode to access the full document archive below.
            </p>
          </div>
        )}
      </RevealOnScroll>

      <KeystoneDivider className="mb-10" />

      {/* Quotes Section with Filters */}
      <section className="mb-16">
        <Eyebrow className="mb-4">PATRISTIC QUOTES — {filteredQuotes.length} ENTRIES</Eyebrow>

        {/* Author filter */}
        <div className="mb-4">
          <p className="t-meta mb-2" style={{ color: 'var(--color-text-muted)' }}>Filter by Author:</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveAuthor(null)}
              className="t-meta px-2 py-1"
              style={{
                border: '1px solid var(--color-border)',
                borderRadius: 2,
                background: !activeAuthor ? 'var(--color-accent-gold)' : 'transparent',
                color: !activeAuthor ? '#0a0e1a' : 'var(--color-text-muted)',
                cursor: 'pointer',
              }}
            >
              All
            </button>
            {ALL_AUTHORS.map(author => (
              <button
                key={author}
                onClick={() => setActiveAuthor(author === activeAuthor ? null : author)}
                className="t-meta px-2 py-1"
                style={{
                  border: '1px solid var(--color-border)',
                  borderRadius: 2,
                  background: activeAuthor === author ? 'rgba(212,168,83,0.15)' : 'transparent',
                  color: activeAuthor === author ? 'var(--color-accent-gold)' : 'var(--color-text-muted)',
                  cursor: 'pointer',
                }}
              >
                {author.split(' ').pop()}
              </button>
            ))}
          </div>
        </div>

        {/* Theme filter */}
        <div className="mb-6">
          <p className="t-meta mb-2" style={{ color: 'var(--color-text-muted)' }}>Filter by Theme:</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTheme(null)}
              className="t-meta px-2 py-1"
              style={{
                border: '1px solid var(--color-border)',
                borderRadius: 2,
                background: !activeTheme ? 'var(--color-accent-gold)' : 'transparent',
                color: !activeTheme ? '#0a0e1a' : 'var(--color-text-muted)',
                cursor: 'pointer',
              }}
            >
              All Themes
            </button>
            {ALL_THEMES.map(theme => (
              <button
                key={theme}
                onClick={() => setActiveTheme(theme === activeTheme ? null : theme)}
                className="t-meta px-2 py-1"
                style={{
                  border: '1px solid var(--color-border)',
                  borderRadius: 2,
                  background: activeTheme === theme ? 'rgba(212,168,83,0.15)' : 'transparent',
                  color: activeTheme === theme ? 'var(--color-accent-gold)' : 'var(--color-text-muted)',
                  cursor: 'pointer',
                }}
              >
                {theme}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredQuotes.map((quote, i) => (
            <RevealOnScroll key={quote.id} delay={i * 0.03}>
              <blockquote
                className="p-5"
                style={{ border: '1px solid var(--color-border)', borderLeft: '3px solid var(--color-accent-gold)' }}
              >
                <p className="t-body text-sm italic mb-3" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.85 }}>
                  &ldquo;{quote.quote}&rdquo;
                </p>
                <footer className="flex flex-wrap items-center justify-between gap-2">
                  <span className="t-meta" style={{ color: 'var(--color-accent-gold)' }}>
                    — {quote.author}, <em>{quote.work}</em>
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {quote.themes.map(theme => (
                      <span key={theme} className="t-meta px-2 py-0.5" style={{ border: '1px solid var(--color-border)', borderRadius: 2, fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>
                        {theme}
                      </span>
                    ))}
                  </div>
                </footer>
              </blockquote>
            </RevealOnScroll>
          ))}
          {filteredQuotes.length === 0 && (
            <p className="t-body text-center py-8" style={{ color: 'var(--color-text-muted)' }}>No quotes found for this filter.</p>
          )}
        </div>
      </section>

      {(!hydrated || showPatristicCitations) && (
        <>
          <KeystoneDivider className="mb-10" />
          <div className="space-y-6">
            {churchFathers.map((doc, i) => (
              <RevealOnScroll key={doc.id} delay={i * 0.07}>
                <CodexCard>
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Main content */}
                    <div className="flex-1">
                      <h2 className="t-caps text-sm mb-1" style={{ color: 'var(--color-text-primary)' }}>{doc.title}</h2>
                      <p className="t-eyebrow mb-3" style={{ color: 'var(--color-accent-gold)' }}>{doc.author} · {doc.date}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="t-meta px-2 py-0.5" style={{ border: '1px solid var(--color-border)', borderRadius: 2 }}>{doc.tradition}</span>
                        <span className="t-meta px-2 py-0.5" style={{ border: '1px solid var(--color-border)', borderRadius: 2 }}>{doc.genre}</span>
                        {doc.controversy && (
                          <span className="t-meta px-2 py-0.5" style={{ border: '1px solid var(--color-border)', borderRadius: 2, color: 'var(--color-text-muted)' }}>{doc.controversy}</span>
                        )}
                      </div>
                      <p className="t-body text-sm mb-4" style={{ color: 'var(--color-text-secondary)', whiteSpace: 'pre-line' }}>{doc.excerpt}</p>
                      <div className="flex flex-wrap gap-2">
                        {doc.doctrines.map((d) => (
                          <span key={d} className="t-meta px-2 py-1" style={{ border: '1px solid var(--color-border)', borderRadius: 2 }}>{d}</span>
                        ))}
                      </div>
                    </div>

                    {/* Annotations sidebar */}
                    <div className="lg:w-64 flex-shrink-0 p-4" style={{ border: '1px solid var(--color-border)', borderRadius: 2 }}>
                      <Eyebrow className="mb-3">CROSS-REFERENCES</Eyebrow>
                      <div className="space-y-1.5 mb-4">
                        {doc.crossRefs.map((ref) => (
                          <p key={ref} className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{ref}</p>
                        ))}
                      </div>
                      <Eyebrow className="mb-3">RELATED WORKS</Eyebrow>
                      <div className="space-y-1.5">
                        {doc.relatedWorks.map((w) => (
                          <p key={w} className="t-body text-sm" style={{ color: 'var(--color-text-muted)' }}>{w}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CodexCard>
              </RevealOnScroll>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
