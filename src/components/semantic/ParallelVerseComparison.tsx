import React from 'react';
import { ParallelVerse } from '@/data/semantic-defense/types';
import InterlinearVerse from './InterlinearVerse';
import { motion } from 'framer-motion';
import { GitCompare } from 'lucide-react';

interface ParallelVerseComparisonProps {
  baselineVerse: ParallelVerse;
  parallelVerse: ParallelVerse;
  activeWordIds: string[];
}

export default function ParallelVerseComparison({ baselineVerse, parallelVerse, activeWordIds }: ParallelVerseComparisonProps) {
  return (
    <div className="flex flex-col xl:flex-row items-stretch gap-6 w-full">
      
      {/* Baseline Verse Side */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex-1 bg-surface-glass border border-border rounded-xl p-6"
      >
        <div className="text-xs uppercase tracking-widest text-text-muted mb-4 font-semibold pb-2 border-b border-border">
          Focal Text
        </div>
        <InterlinearVerse 
          verse={baselineVerse} 
          activeWordIds={activeWordIds} 
        />
      </motion.div>
      
      {/* Comparison Divider */}
      <div className="hidden xl:flex flex-col items-center justify-center opacity-50">
        <div className="w-px h-full bg-gradient-to-b from-transparent via-border to-transparent min-h-[100px]"></div>
        <div className="w-10 h-10 rounded-full bg-bg-secondary border border-border flex items-center justify-center shadow-md z-10 my-[-20px]">
          <GitCompare size={18} className="text-accent-gold" />
        </div>
        <div className="w-px h-full bg-gradient-to-b from-transparent via-border to-transparent min-h-[100px]"></div>
      </div>
      
      <div className="flex xl:hidden justify-center items-center my-2 opacity-50">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent"></div>
        <div className="w-10 h-10 mx-[-20px] rounded-full bg-bg-secondary border border-border flex items-center justify-center shadow-md z-10 shrink-0">
          <GitCompare size={18} className="text-accent-gold" />
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent"></div>
      </div>
      
      {/* Parallel Verse Side */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex-1 bg-surface-glass border border-border rounded-xl p-6 relative"
      >
        <div className="text-xs uppercase tracking-widest text-text-muted mb-4 font-semibold pb-2 border-b border-border">
          Semantic Parallel
        </div>
        <InterlinearVerse 
          verse={parallelVerse} 
          activeWordIds={activeWordIds} 
        />
      </motion.div>
      
    </div>
  );
}
