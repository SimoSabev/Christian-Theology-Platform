'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Play } from 'lucide-react';
import { semanticTutorial } from '@/data/semantic-defense/tutorial';
import SemanticDefenseSlideshow from './SemanticDefenseSlideshow';

export default function SemanticsTutorialModule() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6 md:p-8 border-l-4 border-l-accent-gold relative overflow-hidden group"
      >
        {/* Background decorative element */}
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl group-hover:bg-accent-gold/10 transition-colors duration-500"></div>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="flex items-start gap-4">
            <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-accent-gold/10 flex items-center justify-center border border-accent-gold/20">
              <BookOpen size={20} className="text-accent-gold" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-accent-gold">Recommended</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold mb-2">How to Read Semantic Defenses</h2>
              <p className="text-text-secondary font-serif text-sm md:text-base leading-relaxed max-w-2xl">
                Before exploring cult refutations, take our 2-minute interactive crash course on reading Koine Greek interlinears. Learn about Strong&apos;s numbers, morphology, and basic grammatical rules used to defend Christian orthodoxy.
              </p>
            </div>
          </div>
          
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 rounded-xl bg-bg-secondary border border-border text-accent-gold hover:bg-surface-glass hover:border-accent-gold/50 transition-all font-medium whitespace-nowrap shadow-sm group/btn"
          >
            <Play size={16} className="text-accent-gold group-hover/btn:scale-110 transition-transform" />
            Launch Tutorial
          </button>
        </div>
      </motion.div>

      {/* Tutorial Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-bg-primary/95 backdrop-blur-sm"
          >
            <div className="w-full max-w-5xl h-full flex items-center justify-center relative">
              <SemanticDefenseSlideshow 
                defense={semanticTutorial}
                onClose={() => setIsOpen(false)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
