'use client';

import { useParams } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { getCritiqueBySlug, getCritiqueCategoryInfo } from '@/data/critiques';
import { Eyebrow, KeystoneDivider } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';
import CitationList from '@/components/reader/CitationList';
import ActionToolbar from '@/components/reader/ActionToolbar';
import { useLens } from '@/components/lens/useLens';
import { LENS_VARIANTS } from '@/components/lens/types';
import { ShieldAlert, CheckCircle } from 'lucide-react';

export default function CritiqueObjectionPage() {
  const params = useParams();
  const slug = params.objection as string;
  const objection = getCritiqueBySlug(slug);
  const { lens, hydrated } = useLens();
  const lensVariant = LENS_VARIANTS[lens];
  const isSimplified = hydrated && lensVariant.argumentDepth === 'simplified';

  if (!objection) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center t-meta">
        Objection not found. <Link href="/critics" style={{ color: 'var(--color-accent-gold)' }}>← Back</Link>
      </div>
    );
  }

  const catInfo = getCritiqueCategoryInfo(objection.category);
  const formattedObjection = `${objection.name}\n\nOBJECTION:\n${objection.skepticPosition}\n\nRESPONSE:\n${objection.christianResponse}`;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="t-meta flex items-center gap-2 mb-8 flex-wrap" style={{ color: 'var(--color-text-muted)' }}>
        <Link href="/critics">Critics</Link>
        <span>/</span>
        <Link href={`/critics/${objection.category}`}>{catInfo?.name}</Link>
        <span>/</span>
        <span style={{ color: 'var(--color-text-secondary)' }}>{objection.name}</span>
      </div>

      <RevealOnScroll>
        <Eyebrow className="mb-3">CRITICS · {catInfo?.name?.toUpperCase()}</Eyebrow>
        <h1 className="t-h1 mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>{objection.name}</h1>
        <p className="t-body mb-8" style={{ color: 'var(--color-text-secondary)' }}>{objection.shortDescription}</p>
      </RevealOnScroll>

      {isSimplified && (
        <div
          className="mb-8 p-4"
          style={{ border: '1px solid rgba(212,168,83,0.3)', background: 'rgba(212,168,83,0.04)', borderLeft: '3px solid var(--color-accent-gold)' }}
        >
          <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            <strong style={{ color: 'var(--color-accent-gold)' }}>Seeker mode:</strong> the objection and response below are shown in full — this is honest territory, not simplified. Switch to Student, Defender, or Researcher mode for additional sourcing detail.
          </p>
        </div>
      )}

      <ActionToolbar argName={objection.name} formattedArg={formattedObjection} className="mb-8" />

      <KeystoneDivider className="my-8" />

      <RevealOnScroll>
        <section className="mb-10">
          <Eyebrow className="mb-4">ORIGIN OF THE OBJECTION</Eyebrow>
          <p className="t-body" style={{ color: 'var(--color-text-secondary)', whiteSpace: 'pre-line' }}>{objection.background}</p>
        </section>
      </RevealOnScroll>

      <KeystoneDivider className="my-8" />

      <RevealOnScroll>
        <section className="mb-10">
          <Eyebrow className="mb-4">THE OBJECTION AND THE RESPONSE</Eyebrow>
          <div className="space-y-6">
            <CodexCard style={{ borderLeft: '3px solid rgba(239,68,68,0.5)' }}>
              <div className="flex items-center gap-2 mb-3">
                <ShieldAlert size={16} style={{ color: 'rgba(239,68,68,0.8)' }} />
                <span className="t-caps text-xs" style={{ color: 'rgba(239,68,68,0.8)' }}>THE STRONGEST FORM OF THE OBJECTION</span>
              </div>
              <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>{objection.skepticPosition}</p>
            </CodexCard>

            <CodexCard style={{ borderLeft: '3px solid rgba(34,197,94,0.5)' }}>
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle size={16} style={{ color: 'rgba(34,197,94,0.8)' }} />
                <span className="t-caps text-xs" style={{ color: 'rgba(34,197,94,0.8)' }}>THE CHRISTIAN RESPONSE</span>
              </div>
              <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>{objection.christianResponse}</p>
            </CodexCard>
          </div>
        </section>
      </RevealOnScroll>

      {objection.keyCases && objection.keyCases.length > 0 && (
        <>
          <KeystoneDivider className="my-8" />
          <RevealOnScroll>
            <section className="mb-10">
              <Eyebrow className="mb-4">SPECIFIC CASES EXAMINED</Eyebrow>
              <div className="space-y-4">
                {objection.keyCases.map((kc, i) => (
                  <div key={i} className="p-4" style={{ border: '1px solid var(--color-border)' }}>
                    <p className="t-caps text-xs mb-2" style={{ color: 'var(--color-accent-gold)' }}>{kc.claim}</p>
                    <p className="t-meta text-xs mb-2" style={{ color: 'var(--color-text-muted)' }}>Source: {kc.source}</p>
                    <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{kc.response}</p>
                  </div>
                ))}
              </div>
            </section>
          </RevealOnScroll>
        </>
      )}

      {objection.pastoralNote && (
        <>
          <KeystoneDivider className="my-8" />
          <RevealOnScroll>
            <section className="mb-10">
              <div className="p-5 rounded-sm" style={{ border: '1px solid rgba(212,168,83,0.3)', background: 'rgba(212,168,83,0.04)' }}>
                <Eyebrow className="mb-3">PASTORAL NOTE</Eyebrow>
                <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, fontStyle: 'italic' }}>
                  {objection.pastoralNote}
                </p>
              </div>
            </section>
          </RevealOnScroll>
        </>
      )}

      <KeystoneDivider className="my-8" />

      <RevealOnScroll>
        <section className="mb-10">
          <Eyebrow className="mb-4">SOURCES ON BOTH SIDES</Eyebrow>
          {hydrated && !lensVariant.showFootnotes ? (
            <div className="p-4" style={{ border: '1px solid rgba(212,168,83,0.3)', background: 'rgba(212,168,83,0.04)' }}>
              <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                Citations hidden in this reading mode — switch to Student, Defender, or Researcher mode to see sources.
              </p>
            </div>
          ) : (
            <CitationList sources={objection.keySources} />
          )}
        </section>
      </RevealOnScroll>
    </div>
  );
}
