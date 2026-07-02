'use client';

import { Link } from '@/i18n/navigation';
import { worldviews } from '@/data/worldviews';
import { Eyebrow, KeystoneDivider, SectionMark } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';
import { ArrowLeft } from 'lucide-react';

const CATEGORY_LABELS: Record<string, string> = {
  religion: 'World Religion',
  secular: 'Secular Worldview',
};

function WorldviewCard({ worldview, index }: { worldview: (typeof worldviews)[number]; index: number }) {
  return (
    <RevealOnScroll delay={index * 0.06}>
      <CodexCard as="article">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
          <div>
            <div className="t-eyebrow mb-2" style={{ fontSize: '0.6rem', color: 'var(--color-accent-gold)' }}>
              {CATEGORY_LABELS[worldview.category] ?? worldview.category}
            </div>
            <h3 className="t-h2" style={{ fontSize: '1.15rem', color: 'var(--color-text-primary)' }}>{worldview.name}</h3>
          </div>
          <span className="t-meta text-right" style={{ color: 'var(--color-text-muted)' }}>
            {worldview.estimatedMembership}
          </span>
        </div>

        <p className="t-meta mb-6" style={{ color: 'var(--color-text-muted)' }}>
          Founded by {worldview.founder} &middot; {worldview.dateFounded}
        </p>

        {/* Structured belief grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div style={{ borderLeft: '2px solid var(--color-accent-gold)', paddingLeft: 14 }}>
            <div className="t-eyebrow mb-1" style={{ fontSize: '0.6rem', color: 'var(--color-accent-gold)' }}>ON GOD</div>
            <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{worldview.beliefs.god}</p>
          </div>
          <div style={{ borderLeft: '2px solid var(--color-border)', paddingLeft: 14 }}>
            <div className="t-eyebrow mb-1" style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>ON THE AFTERLIFE</div>
            <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{worldview.beliefs.afterlife}</p>
          </div>
          <div style={{ borderLeft: '2px solid var(--color-accent-gold)', paddingLeft: 14 }}>
            <div className="t-eyebrow mb-1" style={{ fontSize: '0.6rem', color: 'var(--color-accent-gold)' }}>ON SALVATION</div>
            <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{worldview.beliefs.salvation}</p>
          </div>
          <div style={{ borderLeft: '2px solid var(--color-border)', paddingLeft: 14 }}>
            <div className="t-eyebrow mb-1" style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>ON ETHICS</div>
            <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{worldview.beliefs.ethics}</p>
          </div>
        </div>

        {/* Sacred texts / branches / geography */}
        <div className="grid sm:grid-cols-3 gap-4 mb-6 pt-5" style={{ borderTop: '1px solid var(--color-border)' }}>
          <div>
            <div className="t-eyebrow mb-2" style={{ fontSize: '0.55rem', color: 'var(--color-text-muted)' }}>SACRED TEXTS</div>
            <ul className="space-y-0.5">
              {worldview.sacredTexts.map((txt, i) => (
                <li key={i} className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>&middot; {txt}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="t-eyebrow mb-2" style={{ fontSize: '0.55rem', color: 'var(--color-text-muted)' }}>MAJOR BRANCHES</div>
            <ul className="space-y-0.5">
              {worldview.majorBranches.map((b, i) => (
                <li key={i} className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>&middot; {b}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="t-eyebrow mb-2" style={{ fontSize: '0.55rem', color: 'var(--color-text-muted)' }}>GEOGRAPHIC CONCENTRATION</div>
            <ul className="space-y-0.5">
              {worldview.geographicConcentration.map((g, i) => (
                <li key={i} className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>&middot; {g}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key Differences from Christianity */}
        <div className="mb-6 pt-5" style={{ borderTop: '1px solid var(--color-border)' }}>
          <div className="t-eyebrow mb-3" style={{ fontSize: '0.6rem', color: 'var(--color-accent-gold)' }}>KEY DIFFERENCES FROM CHRISTIANITY</div>
          <div className="space-y-4">
            {worldview.keyDifferencesFromChristianity.map((diff, i) => (
              <div key={i}>
                <div className="t-caps mb-2" style={{ fontSize: '0.7rem', color: 'var(--color-text-primary)' }}>{diff.issue}</div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div style={{ borderLeft: '2px solid var(--color-accent-gold)', paddingLeft: 12 }}>
                    <span className="t-eyebrow" style={{ fontSize: '0.55rem', color: 'var(--color-accent-gold)' }}>CHRISTIANITY</span>
                    <p className="t-body text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>{diff.christianity}</p>
                  </div>
                  <div style={{ borderLeft: '2px solid var(--color-border)', paddingLeft: 12 }}>
                    <span className="t-eyebrow" style={{ fontSize: '0.55rem', color: 'var(--color-text-muted)' }}>{worldview.name.toUpperCase()}</span>
                    <p className="t-body text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>{diff.thisWorldview}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Apologetic Considerations */}
        {worldview.apologeticIssues && worldview.apologeticIssues.length > 0 && (
          <div className="mb-2 pt-5" style={{ borderTop: '1px solid var(--color-border)' }}>
            <div className="t-eyebrow mb-3" style={{ fontSize: '0.6rem', color: 'var(--color-accent-gold)' }}>APOLOGETIC CONSIDERATIONS</div>
            <div className="space-y-4">
              {worldview.apologeticIssues.map((issue, i) => (
                <div key={i} className="p-4" style={{ border: '1px solid var(--color-border)' }}>
                  <h4 className="t-caps text-xs mb-2" style={{ color: 'var(--color-text-primary)' }}>{issue.topic}</h4>
                  <div className="mb-3">
                    <span className="t-eyebrow" style={{ fontSize: '0.55rem', color: 'var(--color-text-muted)' }}>OBJECTION</span>
                    <p className="t-body text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>{issue.objection}</p>
                  </div>
                  <div>
                    <span className="t-eyebrow" style={{ fontSize: '0.55rem', color: 'var(--color-accent-gold)' }}>RESPONSE</span>
                    <p className="t-body text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>{issue.response}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sources */}
        <div className="pt-5" style={{ borderTop: '1px solid var(--color-border)' }}>
          <div className="t-eyebrow mb-2" style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>SOURCES</div>
          <ul className="space-y-0.5">
            {worldview.sources.map((s, i) => (
              <li key={i} className="t-meta" style={{ color: 'var(--color-text-muted)' }}>{s}</li>
            ))}
          </ul>
        </div>
      </CodexCard>
    </RevealOnScroll>
  );
}

export default function WorldviewsPage() {
  const religions = worldviews.filter((w) => w.category === 'religion');
  const secular = worldviews.filter((w) => w.category === 'secular');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="t-meta flex items-center gap-2 mb-8" style={{ color: 'var(--color-text-muted)' }}>
        <Link href="/defend">Defend</Link>
        <span>/</span>
        <span style={{ color: 'var(--color-text-secondary)' }}>World Religions &amp; Worldviews</span>
      </div>

      <RevealOnScroll>
        <Eyebrow className="mb-3">DEFEND · WORLDVIEWS</Eyebrow>
        <h1 className="t-h1 mb-4" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}>World Religions &amp; Worldviews</h1>
        <p className="t-body max-w-2xl" style={{ color: 'var(--color-text-secondary)', fontSize: '1.0625rem' }}>
          A comparative survey of the major world religions and secular worldviews — their core beliefs about
          God, the afterlife, salvation, and ethics — set alongside the historic Christian position, with the
          apologetic issues most often raised in dialogue.
        </p>
      </RevealOnScroll>

      <KeystoneDivider className="my-12" />

      {/* World Religions */}
      <section className="mb-16">
        <RevealOnScroll>
          <div className="flex items-center gap-3 mb-3">
            <SectionMark glyph="diamond" size={20} />
            <Eyebrow>WORLD RELIGIONS</Eyebrow>
          </div>
          <h2 className="t-h2 mb-8" style={{ fontSize: 'clamp(1.35rem, 3vw, 1.75rem)' }}>Comparative Religion</h2>
        </RevealOnScroll>

        <div className="space-y-8">
          {religions.map((w, i) => (
            <WorldviewCard key={w.id} worldview={w} index={i} />
          ))}
        </div>
      </section>

      <KeystoneDivider className="mb-16" />

      {/* Secular Worldviews */}
      <section>
        <RevealOnScroll>
          <div className="flex items-center gap-3 mb-3">
            <SectionMark glyph="section" size={20} />
            <Eyebrow>SECULAR WORLDVIEWS</Eyebrow>
          </div>
          <h2 className="t-h2 mb-8" style={{ fontSize: 'clamp(1.35rem, 3vw, 1.75rem)' }}>Non-Religious Alternatives</h2>
        </RevealOnScroll>

        <div className="space-y-8">
          {secular.map((w, i) => (
            <WorldviewCard key={w.id} worldview={w} index={i} />
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
