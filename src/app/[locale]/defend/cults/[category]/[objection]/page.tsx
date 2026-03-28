'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { getCultObjectionBySlug } from '@/data/cults';
import { getCultCategoryInfo } from '@/data/cults';
import { getSemanticDefense } from '@/data/semantic-defense';
import SemanticDefenseSlideshow from '@/components/semantic/SemanticDefenseSlideshow';
import { BookOpen, ShieldAlert, CheckCircle, BookType } from 'lucide-react';

export default function CultObjectionPage() {
  const params = useParams();
  const slug = params.objection as string;
  const objection = getCultObjectionBySlug(slug);
  const [activeSemanticDefenseId, setActiveSemanticDefenseId] = useState<string | null>(null);

  if (!objection) {
    return <div className="max-w-4xl mx-auto px-4 py-20 text-center text-text-muted">Objection not found</div>;
  }

  const catInfo = getCultCategoryInfo(objection.category);
  const semanticDefenses = objection.semanticDefenseIds
    .map(id => getSemanticDefense(id))
    .filter(sd => sd !== undefined);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-text-muted mb-8 flex-wrap">
        <Link href="/defend/cults" className="hover:text-accent-gold transition-colors">Cults & Heresies</Link>
        <span>/</span>
        <Link href={`/defend/cults/${objection.category}`} className="hover:text-accent-gold transition-colors">{catInfo?.name}</Link>
        <span>/</span>
        <span className="text-text-secondary">{objection.name}</span>
      </div>

      {/* Title */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 gold-gradient">{objection.name}</h1>
        <p className="text-text-secondary font-serif text-lg leading-relaxed mb-8">{objection.shortDescription}</p>
      </motion.div>

      {/* Action Buttons for Semantic Defenses */}
      {semanticDefenses.length > 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="flex flex-wrap gap-3 mb-10">
          <div className="w-full text-sm font-semibold text-text-muted mb-1 flex items-center gap-2">
            <BookType size={14} className="text-accent-gold" /> Available Interlinear Defenses
          </div>
          {semanticDefenses.map(sd => (
            <button
              key={sd!.id}
              onClick={() => setActiveSemanticDefenseId(sd!.id)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent-gold/5 border border-accent-gold/30 hover:bg-accent-gold/10 hover:border-accent-gold text-accent-gold rounded-lg text-sm font-medium transition-all shadow-[0_0_10px_rgba(212,168,83,0.1)] hover:shadow-[0_0_15px_rgba(212,168,83,0.2)]"
            >
              <BookOpen size={16} /> {sd!.title}
            </button>
          ))}
        </motion.div>
      )}

      {/* Historical Background */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mb-10">
        <h2 className="text-xl font-bold mb-4">Historical Background</h2>
        <p className="text-text-secondary font-serif leading-relaxed whitespace-pre-line">{objection.historicalBackground}</p>
      </motion.section>

      {/* Comparative View: Cult vs Orthodox */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-10">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6 border-l-4 border-l-accent-red">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-accent-red">
              <ShieldAlert size={20} />
              The Deviation
            </h3>
            <p className="text-text-secondary font-serif leading-relaxed">{objection.cultPosition}</p>
          </div>
          
          <div className="glass-card p-6 border-l-4 border-l-accent-green">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-accent-green">
              <CheckCircle size={20} />
              Orthodox Response
            </h3>
            <p className="text-text-secondary font-serif leading-relaxed">{objection.orthodoxResponse}</p>
          </div>
        </div>
      </motion.section>

      {/* Key Sources */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mb-10">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <BookOpen size={18} className="text-accent-gold" />
          Primary Sources Investigated
        </h2>
        <ul className="space-y-2">
          {objection.keySources.map((s) => (
            <li key={s} className="flex items-start gap-2 text-text-secondary text-sm font-serif">
              <span className="text-accent-gold mt-1">•</span> {s}
            </li>
          ))}
        </ul>
      </motion.section>

      {/* Semantic Defense Modal */}
      <AnimatePresence>
        {activeSemanticDefenseId && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-bg-primary/95 backdrop-blur-sm"
          >
            <div className="w-full max-w-5xl h-full flex items-center justify-center relative">
              <SemanticDefenseSlideshow 
                defense={semanticDefenses.find(sd => sd!.id === activeSemanticDefenseId)!}
                onClose={() => setActiveSemanticDefenseId(null)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
