'use client';

import { useParams } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { traditions, doctrineComparisons } from '@/data/comparisons';
import { denominations } from '@/data/denominations';
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

  // Check denominations data first
  const denom = denominations.find((d) => d.slug === tradition);
  if (denom) {
    const isNonChristian = denom.category === 'other';

    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="t-meta flex items-center gap-2 mb-8" style={{ color: 'var(--color-text-muted)' }}>
          <Link href="/compare">Compare</Link>
          <span>/</span>
          <span style={{ color: 'var(--color-text-secondary)' }}>{denom.name}</span>
        </div>

        {isNonChristian && (
          <RevealOnScroll>
            <div
              className="mb-10 p-5"
              style={{
                border: '1px solid var(--color-accent-gold)',
                borderLeft: '4px solid var(--color-accent-gold)',
                background: 'color-mix(in srgb, var(--color-accent-gold) 6%, transparent)',
                borderRadius: 3,
              }}
            >
              <div className="t-eyebrow mb-3" style={{ color: 'var(--color-accent-gold)' }}>CLASSIFICATION NOTICE</div>
              <p className="t-body text-sm mb-3" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
                <strong style={{ color: 'var(--color-text-primary)' }}>{denom.name}</strong> is not
                recognized as a Christian denomination by the Roman Catholic Church, the Eastern Orthodox
                Church, or the historic Protestant traditions. This is not a social or cultural judgment —
                it is a doctrinal boundary with a specific technical meaning.
              </p>
              <p className="t-body text-sm mb-3" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
                Historic Christianity defines itself by the ecumenical creeds — principally the
                Nicene-Constantinopolitan Creed (381 AD) — which declare that Jesus Christ is{' '}
                <em>fully God and fully man</em>, the second Person of one eternal, undivided Trinity.
                Any movement that departs from this Trinitarian and Christological foundation is
                classified by the historic churches as outside the boundaries of Christianity, regardless
                of how the movement identifies itself.
              </p>
              <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
                The profile below is presented for <strong style={{ color: 'var(--color-text-primary)' }}>educational purposes</strong>,
                so that students of theology can understand what these groups teach, why mainstream
                Christianity regards them as departures from apostolic faith, and how to engage their
                claims with informed clarity.
              </p>
            </div>
          </RevealOnScroll>
        )}

        <RevealOnScroll>
          <Eyebrow className="mb-3">{denom.category.replace(/_/g, ' ').toUpperCase()}</Eyebrow>
          <h1 className="t-h1 mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>{denom.name}</h1>
          <div className="flex flex-wrap gap-4 mb-6 t-meta" style={{ color: 'var(--color-text-muted)' }}>
            {denom.yearFounded && <span>Est. {denom.yearFounded}</span>}
            {denom.founder && <span>Founder: {denom.founder}</span>}
            <span>{denom.estimatedMembership}</span>
          </div>
          {denom.geographicConcentration.length > 0 && (
            <p className="t-body mb-8" style={{ color: 'var(--color-text-secondary)', maxWidth: 640 }}>
              {denom.geographicConcentration.join(' · ')}
            </p>
          )}
        </RevealOnScroll>

        <KeystoneDivider className="mb-8" />

        {denom.reasonForSplit && (
          <RevealOnScroll>
            <section className="mb-8">
              <Eyebrow className="mb-3">HISTORICAL BACKGROUND</Eyebrow>
              <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{denom.reasonForSplit}</p>
            </section>
            <KeystoneDivider className="mb-8" />
          </RevealOnScroll>
        )}

        <RevealOnScroll>
          <section className="mb-8">
            <Eyebrow className="mb-4">KEY THEOLOGICAL DISTINCTIVES</Eyebrow>
            <ul className="space-y-2">
              {denom.keyTheologicalDistinctives.map((b) => (
                <li key={b} className="flex items-start gap-2 t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  <span style={{ color: 'var(--color-accent-gold)', flexShrink: 0 }}>•</span> {b}
                </li>
              ))}
            </ul>
          </section>
        </RevealOnScroll>

        {denom.keyDocuments && denom.keyDocuments.length > 0 && (
          <>
            <KeystoneDivider className="mb-8" />
            <RevealOnScroll>
              <section className="mb-8">
                <Eyebrow className="mb-4">KEY DOCUMENTS</Eyebrow>
                <ul className="space-y-1">
                  {denom.keyDocuments.map((doc) => (
                    <li key={doc} className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      <span style={{ color: 'var(--color-accent-gold)' }}>—</span> {doc}
                    </li>
                  ))}
                </ul>
              </section>
            </RevealOnScroll>
          </>
        )}

        {denom.subBranches && denom.subBranches.length > 0 && (
          <>
            <KeystoneDivider className="mb-8" />
            <section>
              <Eyebrow className="mb-5">SUB-BRANCHES</Eyebrow>
              <div className="grid sm:grid-cols-2 gap-4">
                {denom.subBranches.map((branch, i) => (
                  <RevealOnScroll key={branch.name} delay={i * 0.05}>
                    <CodexCard>
                      <h3 className="t-caps text-xs mb-1" style={{ color: 'var(--color-text-primary)' }}>{branch.name}</h3>
                      {branch.year && (
                        <div className="t-eyebrow mb-1" style={{ color: 'var(--color-text-muted)', fontSize: '0.6rem' }}>{branch.year}</div>
                      )}
                      {branch.membership && (
                        <div className="t-meta mb-1" style={{ color: 'var(--color-accent-gold)' }}>{branch.membership}</div>
                      )}
                      {branch.notes && (
                        <p className="t-body text-xs" style={{ color: 'var(--color-text-secondary)' }}>{branch.notes}</p>
                      )}
                    </CodexCard>
                  </RevealOnScroll>
                ))}
              </div>
            </section>
          </>
        )}

        {denom.sources.length > 0 && (
          <>
            <KeystoneDivider className="my-8" />
            <section>
              <Eyebrow className="mb-3">SOURCES</Eyebrow>
              <div className="flex flex-wrap gap-2">
                {denom.sources.map((s) => (
                  <span key={s} className="t-meta px-2 py-0.5" style={{ border: '1px solid var(--color-border)', borderRadius: 2 }}>{s}</span>
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    );
  }

  // Fall back to the three-tradition comparison data (orthodoxy / catholicism / protestantism)
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
