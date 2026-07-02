'use client';

import { Link } from '@/i18n/navigation';
import { christianScientists, scienceFaithConflicts } from '@/data/science-faith';
import { Eyebrow, KeystoneDivider, SectionMark } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';
import { ArrowLeft } from 'lucide-react';

function lifespan(scientist: (typeof christianScientists)[number]): string {
  if (scientist.deathYear) return `${scientist.birthYear}–${scientist.deathYear}`;
  return `b. ${scientist.birthYear}`;
}

export default function SciencePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="t-meta flex items-center gap-2 mb-8" style={{ color: 'var(--color-text-muted)' }}>
        <Link href="/defend">Defend</Link>
        <span>/</span>
        <span style={{ color: 'var(--color-text-secondary)' }}>Science &amp; Faith</span>
      </div>

      <RevealOnScroll>
        <Eyebrow className="mb-3">DEFEND · SCIENCE &amp; FAITH</Eyebrow>
        <h1 className="t-h1 mb-4" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}>Science &amp; Faith</h1>
        <p className="t-body max-w-2xl" style={{ color: 'var(--color-text-secondary)', fontSize: '1.0625rem' }}>
          The "warfare" narrative between science and Christian faith is a modern myth. This page surveys
          believing scientists whose faith shaped their pursuit of nature, and re-examines the historical
          episodes most often cited as proof of conflict.
        </p>
      </RevealOnScroll>

      <KeystoneDivider className="my-12" />

      {/* Christian Scientists Gallery */}
      <section className="mb-16">
        <RevealOnScroll>
          <div className="flex items-center gap-3 mb-3">
            <SectionMark glyph="plusCircle" size={20} />
            <Eyebrow>BELIEVING SCIENTISTS</Eyebrow>
          </div>
          <h2 className="t-h2 mb-8" style={{ fontSize: 'clamp(1.35rem, 3vw, 1.75rem)' }}>A Gallery of Faith and Discovery</h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-5">
          {christianScientists.map((s, i) => (
            <RevealOnScroll key={s.id} delay={i * 0.06}>
              <CodexCard as="article" className="h-full">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="t-caps text-sm" style={{ color: 'var(--color-text-primary)' }}>{s.name}</h3>
                  <span className="t-meta" style={{ color: 'var(--color-text-muted)' }}>{lifespan(s)}</span>
                </div>
                <div className="t-eyebrow mb-3" style={{ fontSize: '0.6rem', color: 'var(--color-accent-gold)' }}>
                  {s.field}
                </div>
                <p className="t-body text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>{s.keyContribution}</p>

                <div className="t-meta mb-3" style={{ color: 'var(--color-text-muted)' }}>
                  Faith tradition: {s.faithTradition}
                </div>

                {s.faithStatement && (
                  <blockquote
                    className="t-quote text-sm"
                    style={{ borderLeft: '2px solid var(--color-accent-gold)', paddingLeft: 12, color: 'var(--color-text-secondary)' }}
                  >
                    {s.faithStatement}
                  </blockquote>
                )}

                <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
                  <span
                    className="t-eyebrow px-2 py-0.5 inline-block"
                    style={{ fontSize: '0.55rem', border: '1px solid var(--color-border)', color: 'var(--color-text-muted)' }}
                  >
                    {s.era === 'historical' ? 'HISTORICAL' : 'CONTEMPORARY'}
                  </span>
                </div>
              </CodexCard>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <KeystoneDivider className="mb-16" />

      {/* Science-Faith Conflicts */}
      <section>
        <RevealOnScroll>
          <div className="flex items-center gap-3 mb-3">
            <SectionMark glyph="section" size={20} />
            <Eyebrow>ALLEGED CONFLICTS</Eyebrow>
          </div>
          <h2 className="t-h2 mb-3" style={{ fontSize: 'clamp(1.35rem, 3vw, 1.75rem)' }}>Popular Narrative vs. Actual History</h2>
          <p className="t-body mb-8" style={{ color: 'var(--color-text-secondary)', maxWidth: 640 }}>
            The most frequently cited episodes of "science versus religion" collapse under historical
            scrutiny. Each is examined here against the primary sources.
          </p>
        </RevealOnScroll>

        <div className="space-y-6">
          {scienceFaithConflicts.map((c, i) => (
            <RevealOnScroll key={c.id} delay={i * 0.07}>
              <CodexCard as="article">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-5">
                  <h3 className="t-caps text-sm" style={{ color: 'var(--color-text-primary)' }}>{c.name}</h3>
                  <span className="t-meta" style={{ color: 'var(--color-text-muted)' }}>{c.dateRange}</span>
                </div>

                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <div style={{ borderLeft: '2px solid var(--color-border)', paddingLeft: 14 }}>
                    <div className="t-eyebrow mb-2" style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>POPULAR NARRATIVE</div>
                    <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{c.popularNarrative}</p>
                  </div>
                  <div style={{ borderLeft: '2px solid var(--color-accent-gold)', paddingLeft: 14 }}>
                    <div className="t-eyebrow mb-2" style={{ fontSize: '0.6rem', color: 'var(--color-accent-gold)' }}>ACTUAL HISTORY</div>
                    <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{c.actualHistory}</p>
                  </div>
                </div>

                <div className="pt-5 mb-3" style={{ borderTop: '1px solid var(--color-border)' }}>
                  <div className="t-eyebrow mb-2" style={{ fontSize: '0.6rem', color: 'var(--color-accent-gold)' }}>CHRISTIAN RESPONSE</div>
                  <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{c.christianResponse}</p>
                </div>

                {c.resolution && (
                  <div className="mb-3">
                    <div className="t-eyebrow mb-2" style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>RESOLUTION</div>
                    <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{c.resolution}</p>
                  </div>
                )}
              </CodexCard>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <div className="mt-16 text-center">
        <Link href="/defend" className="inline-flex items-center gap-2 t-caps text-xs" style={{ color: 'var(--color-accent-gold)' }}>
          <ArrowLeft size={12} /> Back to Defend
        </Link>
      </div>
    </div>
  );
}
