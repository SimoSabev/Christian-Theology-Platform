'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { categories } from '@/data/arguments';
import { Eyebrow, KeystoneDivider, SectionMark } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';

const CATEGORY_GLYPHS: Record<string, 'cross' | 'patee' | 'longCross' | 'plusCircle' | 'chiRho' | 'section' | 'diamond'> = {
  cosmological: 'plusCircle',
  ontological:  'chiRho',
  teleological: 'cross',
  moral:        'patee',
  historical:   'longCross',
};

export default function DefendPage() {
  const t = useTranslations('defend');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <RevealOnScroll>
        <div className="text-center mb-16">
          <Eyebrow className="mb-4">{t('eyebrow') ?? 'APOLOGETICS'}</Eyebrow>
          <h1 className="t-h1 mb-4" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}>{t('title')}</h1>
          <p className="t-body max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)', fontSize: '1.0625rem' }}>{t('subtitle')}</p>
        </div>
      </RevealOnScroll>

      <KeystoneDivider className="mb-12" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {categories.map((cat, i) => (
          <RevealOnScroll key={cat.id} delay={i * 0.08}>
            <Link href={`/defend/atheism/${cat.id}`} className="block">
              <CodexCard className="h-full" as="article">
                <div className="mb-4">
                  <SectionMark glyph={CATEGORY_GLYPHS[cat.id] ?? 'diamond'} size={22} />
                </div>
                <h2 className="t-caps text-sm mb-2" style={{ color: 'var(--color-text-primary)' }}>{cat.name}</h2>
                <p className="t-body text-sm mb-4" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{cat.description}</p>
                <div className="t-eyebrow" style={{ color: 'var(--color-accent-gold)' }}>
                  {cat.argumentCount} {cat.argumentCount === 1 ? 'argument' : 'arguments'} →
                </div>
              </CodexCard>
            </Link>
          </RevealOnScroll>
        ))}
      </div>

      <KeystoneDivider />

      <RevealOnScroll>
        <div className="mt-12 text-center">
          <Eyebrow className="mb-3">ALSO</Eyebrow>
          <Link
            href="/defend/cults"
            className="inline-block px-6 py-3 t-caps text-xs border"
            style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}
          >
            Against Cults & Heresies
          </Link>
        </div>
      </RevealOnScroll>
    </div>
  );
}
