'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { traditions } from '@/data/comparisons';
import { Eyebrow, KeystoneDivider, SectionMark } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';
import CompareViewSwitcher from '@/components/compare/CompareViewSwitcher';
import DoctrinalMatrix from '@/components/compare/DoctrinalMatrix';
import TriptychPanels from '@/components/compare/TriptychPanels';
import DoctrineDiff from '@/components/compare/DoctrineDiff';

type View = 'matrix' | 'triptych' | 'diff';

const TRADITION_GLYPHS: Record<string, 'cross' | 'patee' | 'longCross'> = {
  orthodoxy:     'cross',
  catholicism:   'patee',
  protestantism: 'longCross',
};

export default function ComparePage() {
  const t = useTranslations('compare');
  const [view, setView] = useState<View>('matrix');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <RevealOnScroll>
        <div className="text-center mb-12">
          <Eyebrow className="mb-4">{t('eyebrow') ?? 'TRADITIONS'}</Eyebrow>
          <h1 className="t-h1 mb-4" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}>{t('title')}</h1>
          <p className="t-body max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)', fontSize: '1.0625rem' }}>{t('subtitle')}</p>
        </div>
      </RevealOnScroll>

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
                <div className="t-eyebrow mt-3" style={{ color: 'var(--color-accent-gold)' }}>Read more →</div>
              </CodexCard>
            </Link>
          </RevealOnScroll>
        ))}
      </div>

      <KeystoneDivider className="mb-8" />

      <div className="flex justify-center mb-8">
        <CompareViewSwitcher view={view} onChange={setView} />
      </div>

      {view === 'matrix'   && <DoctrinalMatrix />}
      {view === 'triptych' && <TriptychPanels />}
      {view === 'diff'     && <DoctrineDiff />}
    </div>
  );
}
