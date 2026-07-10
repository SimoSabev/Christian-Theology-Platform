'use client';

import { Link } from '@/i18n/navigation';
import { historicalEvents, keyFigures } from '@/data/history';
import { Eyebrow, KeystoneDivider } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';

function formatYearRange(startYear: number, endYear?: number): string {
  if (!endYear) return `${startYear} AD`;
  return `${startYear}–${endYear} AD`;
}

export default function HistoryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="t-meta flex items-center gap-2 mb-8" style={{ color: 'var(--color-text-muted)' }}>
        <Link href="/sources">Sources</Link>
        <span>/</span>
        <span style={{ color: 'var(--color-text-secondary)' }}>Church History</span>
      </div>

      <RevealOnScroll>
        <Eyebrow className="mb-3">SOURCES · CHURCH HISTORY</Eyebrow>
        <h1 className="t-h1 mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>Church History</h1>
        <p className="t-body mb-8" style={{ color: 'var(--color-text-secondary)' }}>
          The pivotal events, revivals, and figures that shaped two thousand years of the Christian church.
        </p>
      </RevealOnScroll>

      <KeystoneDivider className="mb-10" />

      {/* Events timeline */}
      <section className="mb-16">
        <Eyebrow className="mb-6">HISTORICAL EVENTS</Eyebrow>
        <div className="relative">
          <div className="absolute start-6 top-0 bottom-0 w-0.5" style={{ background: 'var(--color-border)' }} />
          <div className="space-y-8">
            {historicalEvents.map((event, i) => (
              <RevealOnScroll key={event.id} delay={i * 0.07}>
                <div className="relative ps-16">
                  <div className="absolute start-4 top-6 w-5 h-5 z-10" style={{ borderRadius: '50%', background: 'var(--color-accent-gold)', border: '4px solid var(--color-bg-primary)' }} />

                  <CodexCard>
                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                      <div>
                        <h2 className="t-caps text-sm mb-1" style={{ color: 'var(--color-text-primary)' }}>{event.name}</h2>
                        <p className="t-eyebrow" style={{ color: 'var(--color-accent-gold)' }}>
                          {formatYearRange(event.startYear, event.endYear)} · {event.location.join(', ')}
                        </p>
                      </div>
                      <span className="t-meta px-2 py-0.5 capitalize" style={{ border: '1px solid var(--color-border)', borderRadius: 2 }}>{event.category}</span>
                    </div>
                    <p className="t-body text-sm mb-4" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.85 }}>{event.description}</p>

                    <div className="mb-3">
                      <Eyebrow className="mb-2">KEY FIGURES</Eyebrow>
                      <ul className="space-y-1.5">
                        {event.keyFigures.map((f) => (
                          <li key={f.name} className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                            <span style={{ color: 'var(--color-accent-gold)' }}>{f.name}</span>
                            {f.dates ? ` (${f.dates})` : ''} — {f.role}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {event.theologicalImpact && (
                      <div className="mb-3">
                        <Eyebrow className="mb-2">THEOLOGICAL IMPACT</Eyebrow>
                        <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{event.theologicalImpact}</p>
                      </div>
                    )}

                    <div className="mb-3">
                      <Eyebrow className="mb-2">SIGNIFICANCE</Eyebrow>
                      <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{event.significance}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {event.sources.map((s) => (
                        <span key={s} className="t-meta px-2 py-1" style={{ border: '1px solid var(--color-border)', borderRadius: 2, color: 'var(--color-text-muted)', fontSize: '0.65rem' }}>{s}</span>
                      ))}
                    </div>
                  </CodexCard>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <KeystoneDivider className="mb-10" />

      {/* Key figures grid */}
      <section>
        <Eyebrow className="mb-6">KEY FIGURES</Eyebrow>
        <div className="grid md:grid-cols-2 gap-5">
          {keyFigures.map((figure, i) => (
            <RevealOnScroll key={figure.id} delay={i * 0.06}>
              <CodexCard className="h-full">
                <h2 className="t-caps text-sm mb-1" style={{ color: 'var(--color-text-primary)' }}>{figure.name}</h2>
                <p className="t-eyebrow mb-3" style={{ color: 'var(--color-accent-gold)' }}>
                  {figure.birthYear}–{figure.deathYear} · {figure.tradition}
                </p>
                <p className="t-body text-sm mb-4" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>{figure.theologicalContribution}</p>

                <Eyebrow className="mb-2">KEY WORKS</Eyebrow>
                <div className="space-y-1 mb-4">
                  {figure.keyWorks.map((w) => (
                    <p key={w} className="t-body text-sm" style={{ color: 'var(--color-text-muted)' }}>{w}</p>
                  ))}
                </div>

                <Eyebrow className="mb-2">SIGNIFICANCE</Eyebrow>
                <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{figure.significance}</p>
              </CodexCard>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </div>
  );
}
