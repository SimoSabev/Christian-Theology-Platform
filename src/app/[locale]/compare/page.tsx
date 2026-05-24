'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { traditions } from '@/data/comparisons';
import { denominations } from '@/data/denominations';
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
    </div>
  );
}
