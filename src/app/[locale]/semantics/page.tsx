'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { semanticDefenses } from '@/data/semantic-defense';
import SemanticDefenseSlideshow from '@/components/semantic/SemanticDefenseSlideshow';
import { BookType, BookOpen, ShieldAlert, ArrowRight } from 'lucide-react';
import { Eyebrow, KeystoneDivider } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';

export default function SemanticsDashboard() {
  // Separate the tutorial out from the rest of the arguments
  const tutorial = semanticDefenses.find(sd => sd.id === 'sd-tutorial');
  const argumentsList = semanticDefenses.filter(sd => sd.id !== 'sd-tutorial');

  const [activeDefenseId, setActiveDefenseId] = useState<string | null>(null);

  const activeDefense = semanticDefenses.find(sd => sd.id === activeDefenseId);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <RevealOnScroll>
        <div className="text-center mb-12">
          <Eyebrow className="mb-4">SEMANTIC STUDIES</Eyebrow>
          <h1 className="t-h1 mb-4" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}>Interactive Grammar & Exegesis</h1>
          <p className="t-body max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)', fontSize: '1.0625rem' }}>
            Explore the exact Koine Greek structure of the most debated Biblical passages.
          </p>
        </div>
      </RevealOnScroll>
      <KeystoneDivider className="mb-10" />

      {/* Tutorial Banner */}
      {tutorial && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12 codex-card p-6 md:p-8 cursor-pointer"
          style={{ borderLeft: '4px solid var(--color-accent-gold)' }}
          onClick={() => setActiveDefenseId(tutorial.id)}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-accent-gold/10 flex items-center justify-center border border-accent-gold/20">
                <BookOpen size={20} className="text-accent-gold" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent-gold">Recommended Primer</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold mb-2">{tutorial.title}</h2>
                <p className="text-text-secondary font-serif text-sm md:text-base leading-relaxed max-w-2xl">
                  {tutorial.description}
                </p>
              </div>
            </div>
            
            <button className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 rounded-xl bg-accent-gold text-bg-primary font-medium hover:bg-accent-gold-light transition-all shrink-0">
              Start Tutorial <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {argumentsList.map((arg, i) => (
          <motion.div
            key={arg.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + (i * 0.1) }}
            onClick={() => setActiveDefenseId(arg.id)}
            className="codex-card cursor-pointer group flex flex-col h-full overflow-hidden"
          >
            <div className="p-6 sm:p-8 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-accent-gold px-2 py-1 bg-accent-gold/10 rounded-md border border-accent-gold/20">
                  {arg.baselineVerse.reference}
                </span>
                <span className="text-xs text-text-muted flex items-center gap-1">
                  <BookType size={12} /> {arg.steps.length} Steps
                </span>
              </div>
              
              <h3 className="text-lg font-bold mb-2 group-hover:text-accent-gold transition-colors">{arg.title}</h3>
              <p className="text-sm font-serif text-text-secondary line-clamp-3 mb-4 flex-1">
                {arg.description}
              </p>
              
              <div className="mt-auto border-t border-border/50 pt-4 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs text-text-secondary">
                  <ShieldAlert size={14} className="text-accent-red" /> 
                  <span className="font-semibold">Neutralizes:</span> 
                  <span className="truncate">{arg.objectionTarget}</span>
                </div>
              </div>
            </div>
            <div className="h-1 w-full bg-border group-hover:bg-accent-gold transition-colors" />
          </motion.div>
        ))}
      </div>

      {/* Semantic Slide Show Modal */}
      <AnimatePresence>
        {activeDefense && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-bg-primary/95 backdrop-blur-sm"
          >
            <div className="w-full max-w-5xl h-full flex items-center justify-center relative shadow-2xl">
              <SemanticDefenseSlideshow 
                defense={activeDefense}
                onClose={() => setActiveDefenseId(null)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
