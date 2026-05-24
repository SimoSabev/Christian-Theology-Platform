'use client';

import { Link } from '@/i18n/navigation';
import { churchFathers } from '@/data/sources';
import { Eyebrow, KeystoneDivider } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';

export default function ChurchFathersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="t-meta flex items-center gap-2 mb-8" style={{ color: 'var(--color-text-muted)' }}>
        <Link href="/sources">Sources</Link>
        <span>/</span>
        <span style={{ color: 'var(--color-text-secondary)' }}>Church Fathers</span>
      </div>

      <RevealOnScroll>
        <Eyebrow className="mb-3">SOURCES · PATRISTICS</Eyebrow>
        <h1 className="t-h1 mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>Church Fathers</h1>
        <p className="t-body mb-8" style={{ color: 'var(--color-text-secondary)' }}>The foundational writings of early Christianity</p>
      </RevealOnScroll>

      <KeystoneDivider className="mb-10" />

      <div className="space-y-6">
        {churchFathers.map((doc, i) => (
          <RevealOnScroll key={doc.id} delay={i * 0.07}>
            <CodexCard>
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Main content */}
                <div className="flex-1">
                  <h2 className="t-caps text-sm mb-1" style={{ color: 'var(--color-text-primary)' }}>{doc.title}</h2>
                  <p className="t-eyebrow mb-3" style={{ color: 'var(--color-accent-gold)' }}>{doc.author} · {doc.date}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="t-meta px-2 py-0.5" style={{ border: '1px solid var(--color-border)', borderRadius: 2 }}>{doc.tradition}</span>
                    <span className="t-meta px-2 py-0.5" style={{ border: '1px solid var(--color-border)', borderRadius: 2 }}>{doc.genre}</span>
                    {doc.controversy && (
                      <span className="t-meta px-2 py-0.5" style={{ border: '1px solid var(--color-border)', borderRadius: 2, color: 'var(--color-text-muted)' }}>{doc.controversy}</span>
                    )}
                  </div>
                  <p className="t-body text-sm mb-4" style={{ color: 'var(--color-text-secondary)', whiteSpace: 'pre-line' }}>{doc.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {doc.doctrines.map((d) => (
                      <span key={d} className="t-meta px-2 py-1" style={{ border: '1px solid var(--color-border)', borderRadius: 2 }}>{d}</span>
                    ))}
                  </div>
                </div>

                {/* Annotations sidebar */}
                <div className="lg:w-64 flex-shrink-0 p-4" style={{ border: '1px solid var(--color-border)', borderRadius: 2 }}>
                  <Eyebrow className="mb-3">CROSS-REFERENCES</Eyebrow>
                  <div className="space-y-1.5 mb-4">
                    {doc.crossRefs.map((ref) => (
                      <p key={ref} className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{ref}</p>
                    ))}
                  </div>
                  <Eyebrow className="mb-3">RELATED WORKS</Eyebrow>
                  <div className="space-y-1.5">
                    {doc.relatedWorks.map((w) => (
                      <p key={w} className="t-body text-sm" style={{ color: 'var(--color-text-muted)' }}>{w}</p>
                    ))}
                  </div>
                </div>
              </div>
            </CodexCard>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
