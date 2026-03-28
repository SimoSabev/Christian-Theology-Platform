import React from 'react';
import { ParallelVerse } from '@/data/semantic-defense/types';

interface InterlinearVerseProps {
  verse: ParallelVerse;
  activeWordIds: string[];
}

export default function InterlinearVerse({ verse, activeWordIds }: InterlinearVerseProps) {
  return (
    <div className="w-full">
      <div className="text-sm text-accent-gold font-medium mb-4 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-accent-gold shadow-[0_0_8px_rgba(212,168,83,0.5)]"></span>
        {verse.reference}
      </div>
      
      <div 
        className="flex flex-wrap gap-x-6 gap-y-8" 
        dir={verse.textDirection || 'ltr'}
      >
        {verse.words.map((word) => {
          const isActive = activeWordIds.includes(word.id);
          
          return (
            <div 
              key={word.id} 
              className={`flex flex-col items-center min-w-[3rem] transition-all duration-300 ${isActive ? 'scale-110' : 'opacity-70 grayscale'}`}
            >
              <div 
                className={`relative px-3 py-2 rounded-lg mb-2 text-center transition-colors duration-300 ${
                  isActive 
                    ? 'bg-accent-blue/10 border border-accent-blue/30 shadow-[0_0_15px_rgba(59,130,246,0.15)]' 
                    : 'bg-transparent border border-transparent'
                }`}
              >
                {/* Original Language Word */}
                <div className={`text-2xl font-serif mb-1 ${isActive ? 'text-text-primary' : 'text-text-secondary'}`}>
                  {word.original}
                </div>
                {/* Transliteration */}
                <div className="text-xs text-text-muted italic">
                  {word.transliteration}
                </div>
              </div>
              
              {/* English Translation */}
              <div className={`text-sm tracking-wide font-medium mt-1 ${isActive ? 'text-accent-gold' : 'text-text-secondary'}`}>
                {word.english}
              </div>
              
              {/* Strong's & Morphology */}
              <div className="flex gap-2 mt-2">
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-bg-primary border border-border text-text-muted">
                  {word.strongs}
                </span>
                {word.morphology && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-bg-primary border border-border text-text-muted">
                    {word.morphology}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
