'use client';

import { useParams } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { getCultCategoryInfo, getCultObjectionsByCategory, type CultCategory } from '@/data/cults';
import { Eyebrow, KeystoneDivider } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function CultCategoryPage() {
  const params = useParams();
  const category = params.category as CultCategory;
  const catInfo = getCultCategoryInfo(category);
  const objections = getCultObjectionsByCategory(category);

  if (!catInfo) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center t-meta">
        Movement not found. <Link href="/defend/cults" style={{ color: 'var(--color-accent-gold)' }}>← Back</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="t-meta flex items-center gap-2 mb-8" style={{ color: 'var(--color-text-muted)' }}>
        <Link href="/defend/cults">Cults & Heresies</Link>
        <span>/</span>
        <span style={{ color: 'var(--color-text-secondary)' }}>{catInfo.name}</span>
      </div>

      {/* Header */}
      <RevealOnScroll>
        <Eyebrow className="mb-3">DEFEND · CULTS · {catInfo.name.toUpperCase()}</Eyebrow>
        <h1 className="t-h1 mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>{catInfo.name}</h1>
        <p className="t-body mb-8" style={{ color: 'var(--color-text-secondary)', maxWidth: 640 }}>{catInfo.description}</p>
      </RevealOnScroll>

      <KeystoneDivider className="mb-10" />

      {/* Objections List */}
      <div className="space-y-6">
        {objections.map((obj, i) => (
          <RevealOnScroll key={obj.id} delay={i * 0.07}>
            <Link href={`/defend/cults/${category}/${obj.slug}`} className="block group">
              <CodexCard>
                <h2 className="t-caps text-sm mb-2" style={{ color: 'var(--color-text-primary)' }}>{obj.name}</h2>
                <p className="t-body text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>{obj.shortDescription}</p>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="t-caps text-xs inline-flex items-center gap-1.5" style={{ color: 'var(--color-accent-gold)' }}>
                    Read full analysis <ArrowRight size={12} />
                  </span>
                  <span className="t-meta" style={{ color: 'var(--color-text-muted)' }}>·</span>
                  <span className="t-meta" style={{ color: 'var(--color-text-muted)' }}>{obj.semanticDefenseIds.length} semantic refutations</span>
                </div>
              </CodexCard>
            </Link>
          </RevealOnScroll>
        ))}
      </div>

      {/* Empty state */}
      {objections.length === 0 && (
        <div className="codex-card p-12 text-center">
          <p className="t-body" style={{ color: 'var(--color-text-muted)' }}>Analyzed objections for this movement are coming soon.</p>
          <Link href="/defend/cults" className="inline-flex items-center gap-2 mt-4 t-caps text-xs" style={{ color: 'var(--color-accent-gold)' }}>
            <ArrowLeft size={12} /> Back to all movements
          </Link>
        </div>
      )}
    </div>
  );
}
