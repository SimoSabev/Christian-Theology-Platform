'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { manuscripts, churchFathers, councils } from '@/data/sources';
import { Eyebrow, KeystoneDivider, SectionMark } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';

const CATEGORIES = [
  { id: 'manuscripts',    labelKey: 'manuscripts',   descKey: 'manuscriptsDesc',   glyph: 'section'  as const, count: () => manuscripts.length  },
  { id: 'church-fathers', labelKey: 'churchFathers', descKey: 'churchFathersDesc', glyph: 'cross'    as const, count: () => churchFathers.length },
  { id: 'councils',       labelKey: 'councils',      descKey: 'councilsDesc',      glyph: 'chiRho'   as const, count: () => councils.length      },
];

export default function SourcesPage() {
  const t = useTranslations('sources');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <RevealOnScroll>
        <div className="text-center mb-16">
          <Eyebrow className="mb-4">{t('eyebrow') ?? 'PRIMARY SOURCES'}</Eyebrow>
          <h1 className="t-h1 mb-4" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}>{t('title')}</h1>
          <p className="t-body max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)', fontSize: '1.0625rem' }}>{t('subtitle')}</p>
        </div>
      </RevealOnScroll>

      <KeystoneDivider className="mb-12" />

      <div className="grid md:grid-cols-3 gap-5">
        {CATEGORIES.map(({ id, labelKey, descKey, glyph, count }, i) => (
          <RevealOnScroll key={id} delay={i * 0.1}>
            <Link href={`/sources/${id}`} className="block">
              <CodexCard className="h-full" as="article">
                <div className="mb-4">
                  <SectionMark glyph={glyph} size={22} />
                </div>
                <h2 className="t-caps text-sm mb-2" style={{ color: 'var(--color-text-primary)' }}>{t(labelKey as Parameters<typeof t>[0])}</h2>
                <p className="t-body text-sm mb-4" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{t(descKey as Parameters<typeof t>[0])}</p>
                <div className="t-eyebrow" style={{ color: 'var(--color-accent-gold)' }}>{count()} items →</div>
              </CodexCard>
            </Link>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
