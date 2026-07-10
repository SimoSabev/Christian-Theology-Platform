'use client';

import { Link } from '@/i18n/navigation';
import { critiqueCategories } from '@/data/critiques';
import { Eyebrow, KeystoneDivider } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';
import { ChevronRight } from 'lucide-react';

export default function CriticsIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="t-meta flex items-center gap-2 mb-8" style={{ color: 'var(--color-text-muted)' }}>
        <span style={{ color: 'var(--color-text-secondary)' }}>Critics</span>
      </div>

      <RevealOnScroll>
        <div className="text-center mb-10">
          <Eyebrow className="mb-4">HONEST OBJECTIONS · HONEST ANSWERS</Eyebrow>
          <h1 className="t-h1 mb-4" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}>The Strongest Case Against Christianity</h1>
          <p className="t-body max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            This section presents the most serious philosophical, moral, scientific, historical, and existential objections to Christian faith — stated in their strongest form, by their leading proponents — followed by substantive Christian responses. Nothing here is a straw man.
          </p>
        </div>
      </RevealOnScroll>

      <KeystoneDivider className="mb-10" />

      <div className="mb-6">
        <Eyebrow>EXPLORE OBJECTIONS BY DOMAIN</Eyebrow>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {critiqueCategories.map((cat, i) => (
          <RevealOnScroll key={cat.id} delay={i * 0.07}>
            <Link href={`/critics/${cat.id}`} className="block group">
              <CodexCard>
                <h2 className="t-caps text-sm mb-2" style={{ color: 'var(--color-text-primary)' }}>{cat.name}</h2>
                <p className="t-body text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>{cat.description}</p>
                <div className="flex items-center justify-between">
                  <span className="t-meta" style={{ color: 'var(--color-text-muted)' }}>{cat.objectionCount} objections examined</span>
                  <ChevronRight size={14} style={{ color: 'var(--color-text-muted)' }} />
                </div>
              </CodexCard>
            </Link>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
