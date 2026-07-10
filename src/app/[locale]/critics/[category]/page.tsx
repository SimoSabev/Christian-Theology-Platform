'use client';

import { useParams } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { getCritiqueCategoryInfo, getCritiquesByCategory, type CritiqueCategory } from '@/data/critiques';
import { Eyebrow, KeystoneDivider } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function CritiqueCategoryPage() {
  const params = useParams();
  const category = params.category as CritiqueCategory;
  const catInfo = getCritiqueCategoryInfo(category);
  const objections = getCritiquesByCategory(category);

  if (!catInfo) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center t-meta">
        Category not found. <Link href="/critics" style={{ color: 'var(--color-accent-gold)' }}>← Back</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="t-meta flex items-center gap-2 mb-8" style={{ color: 'var(--color-text-muted)' }}>
        <Link href="/critics">Critics</Link>
        <span>/</span>
        <span style={{ color: 'var(--color-text-secondary)' }}>{catInfo.name}</span>
      </div>

      <RevealOnScroll>
        <Eyebrow className="mb-3">CRITICS · {catInfo.name.toUpperCase()}</Eyebrow>
        <h1 className="t-h1 mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>{catInfo.name}</h1>
        <p className="t-body mb-8" style={{ color: 'var(--color-text-secondary)', maxWidth: 640 }}>{catInfo.description}</p>
      </RevealOnScroll>

      <KeystoneDivider className="mb-10" />

      <div className="space-y-6">
        {objections.map((obj, i) => (
          <RevealOnScroll key={obj.id} delay={i * 0.07}>
            <Link href={`/critics/${category}/${obj.slug}`} className="block group">
              <CodexCard>
                <h2 className="t-caps text-sm mb-2" style={{ color: 'var(--color-text-primary)' }}>{obj.name}</h2>
                <p className="t-body text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>{obj.shortDescription}</p>
                <span className="t-caps text-xs inline-flex items-center gap-1.5" style={{ color: 'var(--color-accent-gold)' }}>
                  Read the objection and response <ArrowRight size={12} />
                </span>
              </CodexCard>
            </Link>
          </RevealOnScroll>
        ))}
      </div>

      {objections.length === 0 && (
        <div className="codex-card p-12 text-center">
          <p className="t-body" style={{ color: 'var(--color-text-muted)' }}>Objections in this domain are coming soon.</p>
          <Link href="/critics" className="inline-flex items-center gap-2 mt-4 t-caps text-xs" style={{ color: 'var(--color-accent-gold)' }}>
            <ArrowLeft size={12} /> Back to all domains
          </Link>
        </div>
      )}
    </div>
  );
}
