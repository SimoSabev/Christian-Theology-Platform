'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Eyebrow, KeystoneDivider, SectionMark } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';

const TOOLS = [
  { id: 'argument-tree', glyph: 'cross'      as const, tKey: 'argumentTree' },
  { id: 'debate-mode',   glyph: 'patee'      as const, tKey: 'debateMode'   },
  { id: 'timeline',      glyph: 'plusCircle' as const, tKey: 'timeline'      },
];

export default function ExplorePage() {
  const t = useTranslations('explore');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <RevealOnScroll>
        <div className="text-center mb-16">
          <Eyebrow className="mb-4">{t('eyebrow') ?? 'TOOLS'}</Eyebrow>
          <h1 className="t-h1 mb-4" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}>{t('title')}</h1>
          <p className="t-body max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)', fontSize: '1.0625rem' }}>{t('subtitle')}</p>
        </div>
      </RevealOnScroll>

      <KeystoneDivider className="mb-12" />

      <div className="grid md:grid-cols-3 gap-5">
        {TOOLS.map(({ id, glyph, tKey }, i) => (
          <RevealOnScroll key={id} delay={i * 0.1}>
            <Link href={`/explore/${id}`} className="block">
              <CodexCard className="h-full text-center" as="article">
                <div className="mb-4 flex justify-center">
                  <SectionMark glyph={glyph} size={28} />
                </div>
                <h2 className="t-caps text-sm mb-2" style={{ color: 'var(--color-text-primary)' }}>{t(`${tKey}.title` as Parameters<typeof t>[0])}</h2>
                <p className="t-body text-sm mb-5" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{t(`${tKey}.desc` as Parameters<typeof t>[0])}</p>
                <span className="t-eyebrow" style={{ color: 'var(--color-accent-gold)' }}>Launch →</span>
              </CodexCard>
            </Link>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
