'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { getCultObjectionBySlug, getCultCategoryInfo } from '@/data/cults';
import { getSemanticDefense } from '@/data/semantic-defense';
import SemanticDefenseSlideshow from '@/components/semantic/SemanticDefenseSlideshow';
import { Eyebrow, KeystoneDivider } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';
import CitationList from '@/components/reader/CitationList';
import { BookOpen, ShieldAlert, CheckCircle } from 'lucide-react';

export default function CultObjectionPage() {
  const params = useParams();
  const slug = params.objection as string;
  const objection = getCultObjectionBySlug(slug);
  const [activeSemanticDefenseId, setActiveSemanticDefenseId] = useState<string | null>(null);

  if (!objection) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center t-meta">
        Objection not found. <Link href="/defend/cults" style={{ color: 'var(--color-accent-gold)' }}>← Back</Link>
      </div>
    );
  }

  const catInfo = getCultCategoryInfo(objection.category);
  const semanticDefenses = objection.semanticDefenseIds
    .map((id) => getSemanticDefense(id))
    .filter((sd) => sd !== undefined);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="t-meta flex items-center gap-2 mb-8 flex-wrap" style={{ color: 'var(--color-text-muted)' }}>
        <Link href="/defend/cults">Cults & Heresies</Link>
        <span>/</span>
        <Link href={`/defend/cults/${objection.category}`}>{catInfo?.name}</Link>
        <span>/</span>
        <span style={{ color: 'var(--color-text-secondary)' }}>{objection.name}</span>
      </div>

      {/* Title */}
      <RevealOnScroll>
        <Eyebrow className="mb-3">DEFEND · CULTS · {catInfo?.name?.toUpperCase()}</Eyebrow>
        <h1 className="t-h1 mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>{objection.name}</h1>
        <p className="t-body mb-8" style={{ color: 'var(--color-text-secondary)' }}>{objection.shortDescription}</p>
      </RevealOnScroll>

      {/* Action Buttons for Semantic Defenses */}
      {semanticDefenses.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-10">
          <div className="w-full t-eyebrow mb-1" style={{ color: 'var(--color-text-muted)' }}>
            AVAILABLE INTERLINEAR DEFENSES
          </div>
          {semanticDefenses.map((sd) => (
            <button
              key={sd!.id}
              onClick={() => setActiveSemanticDefenseId(sd!.id)}
              className="t-caps text-xs inline-flex items-center gap-2 px-3 py-2 border"
              style={{ borderColor: 'var(--color-border)', color: 'var(--color-accent-gold)' }}
            >
              <BookOpen size={12} /> {sd!.title}
            </button>
          ))}
        </div>
      )}

      <KeystoneDivider className="my-8" />

      {/* Historical Background */}
      <RevealOnScroll>
        <section className="mb-10">
          <Eyebrow className="mb-4">HISTORICAL BACKGROUND</Eyebrow>
          <p className="t-body" style={{ color: 'var(--color-text-secondary)', whiteSpace: 'pre-line' }}>{objection.historicalBackground}</p>
        </section>
      </RevealOnScroll>

      <KeystoneDivider className="my-8" />

      {/* Comparative View */}
      <RevealOnScroll>
        <section className="mb-10">
          <Eyebrow className="mb-4">COMPARATIVE ANALYSIS</Eyebrow>
          <div className="grid md:grid-cols-2 gap-6">
            <CodexCard style={{ borderLeft: '3px solid rgba(239,68,68,0.5)' }}>
              <div className="flex items-center gap-2 mb-3">
                <ShieldAlert size={16} style={{ color: 'rgba(239,68,68,0.8)' }} />
                <span className="t-caps text-xs" style={{ color: 'rgba(239,68,68,0.8)' }}>THE DEVIATION</span>
              </div>
              <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{objection.cultPosition}</p>
            </CodexCard>

            <CodexCard style={{ borderLeft: '3px solid rgba(34,197,94,0.5)' }}>
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle size={16} style={{ color: 'rgba(34,197,94,0.8)' }} />
                <span className="t-caps text-xs" style={{ color: 'rgba(34,197,94,0.8)' }}>ORTHODOX RESPONSE</span>
              </div>
              <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{objection.orthodoxResponse}</p>
            </CodexCard>
          </div>
        </section>
      </RevealOnScroll>

      <KeystoneDivider className="my-8" />

      {/* Key Sources */}
      <RevealOnScroll>
        <section className="mb-10">
          <Eyebrow className="mb-4">PRIMARY SOURCES INVESTIGATED</Eyebrow>
          <CitationList sources={objection.keySources} />
        </section>
      </RevealOnScroll>

      {/* Semantic Defense Modal */}
      <AnimatePresence>
        {activeSemanticDefenseId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-12"
            style={{ background: 'rgba(10,14,26,0.95)' }}
          >
            <SemanticDefenseSlideshow
              defense={semanticDefenses.find((sd) => sd!.id === activeSemanticDefenseId)!}
              onClose={() => setActiveSemanticDefenseId(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
