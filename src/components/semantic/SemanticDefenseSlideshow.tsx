'use client';

import React, { useState } from 'react';
import { SemanticDefense } from '@/data/semantic-defense/types';
import InterlinearVerse from './InterlinearVerse';
import ParallelVerseComparison from './ParallelVerseComparison';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, BookOpen, ChevronRight, X } from 'lucide-react';

interface SemanticDefenseSlideshowProps {
  defense: SemanticDefense;
  onClose?: () => void;
}

export default function SemanticDefenseSlideshow({ defense, onClose }: SemanticDefenseSlideshowProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  
  const step = defense.steps[currentStepIndex];
  const progressPercentage = ((currentStepIndex + 1) / defense.steps.length) * 100;
  
  const handleNext = () => {
    if (currentStepIndex < defense.steps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    }
  };
  
  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  return (
    <div className="flex flex-col h-full bg-bg-primary text-text-primary rounded-2xl overflow-hidden border border-border shadow-2xl max-h-[90vh]">
      
      {/* Header */}
      <div className="flex items-center justify-between p-4 md:px-6 md:py-4 border-b border-border bg-bg-secondary/50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-accent-gold/10 flex items-center justify-center">
            <BookOpen size={16} className="text-accent-gold" />
          </div>
          <div>
            <h2 className="font-bold text-lg md:text-xl text-text-primary">{defense.title}</h2>
            <div className="flex items-center gap-2 text-xs text-text-muted mt-0.5">
              <span>vs</span>
              <span className="text-accent-red font-medium tracking-wide uppercase">{defense.objectionTarget}</span>
            </div>
          </div>
        </div>
        
        {onClose && (
          <button 
            onClick={onClose}
            className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-glass transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        )}
      </div>
      
      {/* Progress Bar */}
      <div className="w-full h-1 bg-surface-glass">
        <motion.div 
          className="h-full bg-accent-gold"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 md:p-8 flex flex-col space-y-8 no-scrollbar scroll-smooth">
        
        {/* Interlinear Section */}
        <div className="w-full flex justify-center">
          {defense.parallelVerses && defense.parallelVerses.length > 0 ? (
            <ParallelVerseComparison 
              baselineVerse={defense.baselineVerse}
              parallelVerse={defense.parallelVerses[0]}
              activeWordIds={step.focusWordIds}
            />
          ) : (
            <div className="w-full bg-surface-glass border border-border rounded-xl p-6 md:p-8">
              <InterlinearVerse 
                verse={defense.baselineVerse} 
                activeWordIds={step.focusWordIds} 
              />
            </div>
          )}
        </div>
        
        {/* Step Explanation Section */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentStepIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="formal-statement bg-bg-secondary border-l-accent-gold relative mt-8"
          >
            <div className="absolute top-0 right-0 p-4 text-xs font-mono text-text-muted opacity-50">
              {currentStepIndex + 1} / {defense.steps.length}
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-accent-gold flex items-center gap-2">
              Step {currentStepIndex + 1}: {step.title}
            </h3>
            
            <div className="prose prose-invert prose-p:text-text-secondary prose-p:leading-relaxed prose-strong:text-text-primary prose-strong:font-bold prose-em:italic max-w-none">
              <p dangerouslySetInnerHTML={{ __html: step.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>') }} />
            </div>
            
          </motion.div>
        </AnimatePresence>
        
      </div>
      
      {/* Footer Navigation */}
      <div className="p-4 md:px-6 md:py-5 border-t border-border bg-bg-secondary flex items-center justify-between shrink-0">
        <button
          onClick={handlePrev}
          disabled={currentStepIndex === 0}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
            currentStepIndex === 0 
              ? 'text-text-muted/50 cursor-not-allowed border border-transparent' 
              : 'text-text-primary hover:bg-surface-glass border border-border'
          }`}
        >
          <ArrowLeft size={16} /> Previous
        </button>
        
        {/* Desktop Step Indicators */}
        <div className="hidden md:flex items-center gap-2">
          {defense.steps.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setCurrentStepIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === currentStepIndex 
                  ? 'bg-accent-gold scale-125' 
                  : i < currentStepIndex 
                    ? 'bg-accent-gold/40' 
                    : 'bg-border hover:bg-text-muted'
              }`}
              aria-label={`Go to step ${i + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (currentStepIndex === defense.steps.length - 1) {
              if (onClose) onClose();
            } else {
              handleNext();
            }
          }}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all z-10 ${
            currentStepIndex === defense.steps.length - 1
              ? 'bg-[#22c55e] text-black hover:bg-[#16a34a] shadow-lg cursor-pointer' 
              : 'bg-accent-gold text-bg-primary hover:bg-accent-gold-light shadow-md'
          }`}
        >
          {currentStepIndex === defense.steps.length - 1 ? 'Finish' : 'Next Step'}
          {currentStepIndex !== defense.steps.length - 1 && <ChevronRight size={16} />}
        </button>
      </div>
      
    </div>
  );
}
