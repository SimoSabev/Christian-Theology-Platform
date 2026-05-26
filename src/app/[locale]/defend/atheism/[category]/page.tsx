'use client';

import { useParams } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { getArgumentsByCategory, getCategoryInfo, type ArgumentCategory } from '@/data/arguments';
import { Eyebrow, KeystoneDivider } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLens } from '@/components/lens/useLens';

export default function CategoryPage() {
  const params = useParams();
  const category = params.category as ArgumentCategory;
  const catInfo = getCategoryInfo(category);
  const args = getArgumentsByCategory(category);
  const { lens, hydrated } = useLens();
  const isSimplified = lens === 'seeker';

  if (!catInfo) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center t-meta">
        Category not found. <Link href="/defend" style={{ color: 'var(--color-accent-gold)' }}>← Back</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="t-meta flex items-center gap-2 mb-8" style={{ color: 'var(--color-text-muted)' }}>
        <Link href="/defend">Defend</Link>
        <span>/</span>
        <span style={{ color: 'var(--color-text-secondary)' }}>{catInfo.name}</span>
      </div>

      {/* Header */}
      <RevealOnScroll>
        <Eyebrow className="mb-3">DEFEND · ATHEISM · {catInfo.name.toUpperCase()}</Eyebrow>
        <h1 className="t-h1 mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>{catInfo.name}</h1>
        <p className="t-body mb-6" style={{ color: 'var(--color-text-secondary)', maxWidth: 640 }}>{catInfo.description}</p>
        {hydrated && isSimplified && (
          <div
            className="mb-8 p-4"
            style={{ border: '1px solid rgba(212,168,83,0.3)', background: 'rgba(212,168,83,0.04)', borderLeft: '3px solid var(--color-accent-gold)' }}
          >
            <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              <strong style={{ color: 'var(--color-accent-gold)' }}>Seeker mode:</strong> Click any argument to read a plain-language overview. The formal logical structure is hidden for clarity — switch to Student or Defender mode to see it.
            </p>
          </div>
        )}
      </RevealOnScroll>

      <KeystoneDivider className="mb-10" />

      {/* Arguments List */}
      <div className="space-y-6">
        {args.map((arg, i) => (
          <RevealOnScroll key={arg.id} delay={i * 0.07}>
            <Link href={`/defend/atheism/${category}/${arg.slug}`} className="block group">
              <CodexCard>
                <h2 className="t-caps text-sm mb-2" style={{ color: 'var(--color-text-primary)' }}>{arg.name}</h2>
                <p className="t-body text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>{arg.shortDescription}</p>

                {/* Mini formal statement */}
                {(!hydrated || !isSimplified) && (
                  <div className="mb-4 text-sm space-y-1" style={{ borderLeft: '2px solid var(--color-border)', paddingLeft: 12 }}>
                    {arg.premises.map((p, pi) => (
                      <p key={p.id} className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                        <span style={{ color: 'var(--color-accent-gold)' }}>P{pi + 1}.</span> {p.text}
                      </p>
                    ))}
                    <p className="t-body text-sm" style={{ color: 'var(--color-accent-gold)', marginTop: 4 }}>
                      ∴ {arg.conclusion}
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-3">
                  <span className="t-caps text-xs inline-flex items-center gap-1.5" style={{ color: 'var(--color-accent-gold)' }}>
                    Read full argument <ArrowRight size={12} />
                  </span>
                  <span className="t-meta" style={{ color: 'var(--color-text-muted)' }}>·</span>
                  <span className="t-meta" style={{ color: 'var(--color-text-muted)' }}>{arg.objections.length} objections addressed</span>
                  <span className="t-meta" style={{ color: 'var(--color-text-muted)' }}>·</span>
                  <span className="t-meta" style={{ color: 'var(--color-text-muted)' }}>{arg.proponents.length} key proponents</span>
                </div>
              </CodexCard>
            </Link>
          </RevealOnScroll>
        ))}
      </div>

      {/* Empty state */}
      {args.length === 0 && (
        <div className="codex-card p-12 text-center">
          <p className="t-body" style={{ color: 'var(--color-text-muted)' }}>Arguments for this category are coming soon.</p>
          <Link href="/defend" className="inline-flex items-center gap-2 mt-4 t-caps text-xs" style={{ color: 'var(--color-accent-gold)' }}>
            <ArrowLeft size={12} /> Back to all categories
          </Link>
        </div>
      )}
    </div>
  );
}
