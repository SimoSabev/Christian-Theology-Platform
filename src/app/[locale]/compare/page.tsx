'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { traditions } from '@/data/comparisons';
import { denominations, schisms } from '@/data/denominations';
import type { TraditionCategory } from '@/data/denominations';
import { Eyebrow, KeystoneDivider, SectionMark } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';

const TRADITION_GLYPHS: Record<string, 'cross' | 'patee' | 'longCross'> = {
  orthodoxy:     'cross',
  catholicism:   'patee',
  protestantism: 'longCross',
};

const CATEGORY_LABELS: Record<TraditionCategory, string> = {
  eastern_orthodox:  'Eastern & Oriental Orthodox',
  oriental_orthodox: 'Oriental Orthodox',
  assyrian:          'Church of the East',
  roman_catholic:    'Roman Catholic',
  protestant:        'Protestant',
  anabaptist:        'Anabaptist',
  adventist:         'Adventist',
  restorationist:    'Restorationist',
  other:             'Other Traditions',
};

const CATEGORY_ORDER: TraditionCategory[] = [
  'eastern_orthodox',
  'oriental_orthodox',
  'assyrian',
  'roman_catholic',
  'protestant',
  'anabaptist',
  'adventist',
  'restorationist',
  'other',
];

export default function ComparePage() {
  const t = useTranslations('compare');

  const grouped = CATEGORY_ORDER.reduce<Record<string, typeof denominations>>(
    (acc, cat) => {
      const items = denominations.filter((d) => d.category === cat);
      if (items.length) acc[cat] = items;
      return acc;
    },
    {},
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <RevealOnScroll>
        <div className="text-center mb-12">
          <Eyebrow className="mb-4">{t('eyebrow') ?? 'TRADITIONS'}</Eyebrow>
          <h1 className="t-h1 mb-4" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}>{t('title')}</h1>
          <p className="t-body max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)', fontSize: '1.0625rem' }}>{t('subtitle')}</p>
        </div>
      </RevealOnScroll>

      {/* Overview cards — the three major families */}
      <div className="grid md:grid-cols-3 gap-5 mb-10">
        {traditions.map((trad, i) => (
          <RevealOnScroll key={trad.id} delay={i * 0.08}>
            <Link href={`/compare/${trad.id}`} className="block">
              <CodexCard className="h-full" as="article">
                <div className="mb-3">
                  <SectionMark glyph={TRADITION_GLYPHS[trad.id] ?? 'diamond'} size={20} />
                </div>
                <h2 className="t-caps text-sm mb-2" style={{ color: 'var(--color-text-primary)' }}>{trad.shortName}</h2>
                <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{trad.description.slice(0, 120)}…</p>
                <div className="t-eyebrow mt-3" style={{ color: 'var(--color-accent-gold)' }}>Doctrine overview →</div>
              </CodexCard>
            </Link>
          </RevealOnScroll>
        ))}
      </div>

      <KeystoneDivider className="mb-10" />

      {/* All denominations grouped by category */}
      <div className="space-y-10">
        {CATEGORY_ORDER.filter((cat) => grouped[cat]).map((cat) => (
          <section key={cat}>
            <RevealOnScroll>
              <Eyebrow className="mb-5">{CATEGORY_LABELS[cat]}</Eyebrow>
            </RevealOnScroll>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {grouped[cat].map((denom, i) => (
                <RevealOnScroll key={denom.id} delay={i * 0.06}>
                  <Link href={`/compare/${denom.slug}`} className="block h-full">
                    <CodexCard className="h-full" as="article">
                      <h3 className="t-caps text-xs mb-2" style={{ color: 'var(--color-text-primary)' }}>{denom.name}</h3>
                      {denom.yearFounded && (
                        <div className="t-eyebrow mb-2" style={{ color: 'var(--color-text-muted)', fontSize: '0.6rem' }}>
                          Est. {denom.yearFounded}
                        </div>
                      )}
                      {denom.category === 'other' && (
                        <div
                          className="t-eyebrow mb-2 px-2 py-0.5 inline-block"
                          style={{
                            fontSize: '0.55rem',
                            border: '1px solid var(--color-accent-gold)',
                            color: 'var(--color-accent-gold)',
                            borderRadius: 2,
                          }}
                        >
                          NOT RECOGNIZED AS CHRISTIAN
                        </div>
                      )}
                      <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                        {denom.estimatedMembership}
                      </p>
                      <div className="t-eyebrow mt-3" style={{ color: 'var(--color-accent-gold)' }}>Read more →</div>
                    </CodexCard>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          </section>
        ))}
      </div>

      <KeystoneDivider className="my-10" />

      {/* Great Schisms — the historic ruptures behind these traditions */}
      <section>
        <RevealOnScroll>
          <div className="flex items-center gap-3 mb-3">
            <SectionMark glyph="longCross" size={20} />
            <Eyebrow>RUPTURES IN THE BODY</Eyebrow>
          </div>
          <h2 className="t-h2 mb-3" style={{ fontSize: 'clamp(1.35rem, 3vw, 1.75rem)' }}>Great Schisms</h2>
          <p className="t-body mb-8" style={{ color: 'var(--color-text-secondary)', maxWidth: 640 }}>
            The traditions above did not emerge in isolation — each major branch of the church was shaped by
            a historic rupture. Here are the two most consequential schisms, their causes, and their unresolved
            questions.
          </p>
        </RevealOnScroll>

        <div className="space-y-8">
          {schisms.map((schism, i) => (
            <RevealOnScroll key={schism.id} delay={i * 0.08}>
              <CodexCard as="article">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-6">
                  <h3 className="t-h2" style={{ fontSize: '1.15rem', color: 'var(--color-text-primary)' }}>{schism.name}</h3>
                  <span
                    className="t-eyebrow px-2 py-1"
                    style={{ fontSize: '0.6rem', border: '1px solid var(--color-border)', color: 'var(--color-text-muted)' }}
                  >
                    {schism.year}
                  </span>
                </div>

                {/* Parties */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {schism.parties.map((party, pi) => (
                    <div
                      key={pi}
                      style={{ borderLeft: `2px solid ${pi === 0 ? 'var(--color-accent-gold)' : 'var(--color-border)'}`, paddingLeft: 14 }}
                    >
                      <div
                        className="t-eyebrow mb-2"
                        style={{ fontSize: '0.6rem', color: pi === 0 ? 'var(--color-accent-gold)' : 'var(--color-text-muted)' }}
                      >
                        {party.name}
                      </div>
                      <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{party.position}</p>
                    </div>
                  ))}
                </div>

                {/* Causes */}
                <div className="mb-6 pt-5" style={{ borderTop: '1px solid var(--color-border)' }}>
                  <div className="t-eyebrow mb-3" style={{ fontSize: '0.6rem', color: 'var(--color-accent-gold)' }}>CAUSES</div>
                  <ul className="space-y-1.5">
                    {schism.causes.map((cause, ci) => (
                      <li key={ci} className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>&middot; {cause}</li>
                    ))}
                  </ul>
                </div>

                {/* Resolution / Current Status */}
                <div className="grid sm:grid-cols-2 gap-5 mb-6 pt-5" style={{ borderTop: '1px solid var(--color-border)' }}>
                  {schism.resolution && (
                    <div>
                      <div className="t-eyebrow mb-2" style={{ fontSize: '0.6rem', color: 'var(--color-accent-gold)' }}>RESOLUTION</div>
                      <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{schism.resolution}</p>
                    </div>
                  )}
                  <div>
                    <div className="t-eyebrow mb-2" style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>CURRENT STATUS</div>
                    <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{schism.currentStatus}</p>
                  </div>
                </div>

                {/* Sources */}
                <div className="pt-5" style={{ borderTop: '1px solid var(--color-border)' }}>
                  <div className="t-eyebrow mb-2" style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>SOURCES</div>
                  <ul className="space-y-0.5">
                    {schism.sources.map((s, si) => (
                      <li key={si} className="t-meta" style={{ color: 'var(--color-text-muted)' }}>{s}</li>
                    ))}
                  </ul>
                </div>
              </CodexCard>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </div>
  );
}
