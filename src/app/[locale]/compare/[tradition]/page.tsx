'use client';

import { useParams } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { traditions, doctrineComparisons } from '@/data/comparisons';
import { Eyebrow, KeystoneDivider, SectionMark } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';

const TRAD_GLYPHS: Record<string, 'cross' | 'patee' | 'longCross'> = {
  orthodoxy:     'cross',
  catholicism:   'patee',
  protestantism: 'longCross',
};

export default function TraditionPage() {
  const { tradition } = useParams() as { tradition: string };
  const trad = traditions.find((t) => t.id === tradition);

  if (!trad) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center t-meta">
        Tradition not found. <Link href="/compare" style={{ color: 'var(--color-accent-gold)' }}>← Back</Link>
      </div>
    );
  }

  const tradDocs = doctrineComparisons.map((doc) => ({ ...doc, info: doc.traditions[trad.id] }));

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="t-meta flex items-center gap-2 mb-8" style={{ color: 'var(--color-text-muted)' }}>
        <Link href="/compare">Compare</Link>
        <span>/</span>
        <span style={{ color: 'var(--color-text-secondary)' }}>{trad.name}</span>
      </div>

      <RevealOnScroll>
        <div className="flex items-center gap-3 mb-4">
          <SectionMark glyph={TRAD_GLYPHS[trad.id] ?? 'diamond'} size={28} />
          <Eyebrow>{trad.shortName.toUpperCase()}</Eyebrow>
        </div>
        <h1 className="t-h1 mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>{trad.name}</h1>
        <p className="t-body mb-10" style={{ color: 'var(--color-text-secondary)', maxWidth: 640 }}>{trad.description}</p>
      </RevealOnScroll>

      <KeystoneDivider className="mb-8" />

      <RevealOnScroll>
        <section className="mb-10">
          <Eyebrow className="mb-4">KEY BELIEFS</Eyebrow>
          <ul className="space-y-2">
            {trad.keyBeliefs.map((b) => (
              <li key={b} className="flex items-start gap-2 t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                <span style={{ color: 'var(--color-accent-gold)', flexShrink: 0 }}>•</span> {b}
              </li>
            ))}
          </ul>
        </section>
      </RevealOnScroll>

      <KeystoneDivider className="mb-8" />

      <section>
        <Eyebrow className="mb-6">DOCTRINAL POSITIONS</Eyebrow>
        <div className="space-y-5">
          {tradDocs.map((doc, i) => (
            <RevealOnScroll key={doc.id} delay={i * 0.06}>
              <CodexCard>
                <h3 className="t-caps text-xs mb-2" style={{ color: 'var(--color-accent-gold)' }}>{doc.name}</h3>
                {doc.info && (
                  <>
                    <div className="t-eyebrow mb-2" style={{ color: 'var(--color-text-muted)', fontSize: '0.6rem' }}>{doc.info.position}</div>
                    <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{doc.info.details}</p>
                    {doc.info.keySources.length > 0 && (
                      <div className="mt-3 pt-3" style={{ borderTop: '1px solid var(--color-border)' }}>
                        <div className="t-eyebrow mb-1">SOURCES</div>
                        <div className="flex flex-wrap gap-2">
                          {doc.info.keySources.map((s) => (
                            <span key={s} className="t-meta px-2 py-0.5" style={{ border: '1px solid var(--color-border)', borderRadius: 2 }}>{s}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </CodexCard>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </div>
  );
}
