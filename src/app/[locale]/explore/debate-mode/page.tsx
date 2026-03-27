'use client';

import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { kalamDebate } from '@/data/debates';
import { ArrowLeft, Swords, ChevronLeft, ChevronRight, BookOpen, CircleDot } from 'lucide-react';

const strengthColors = {
  strong: { bg: 'bg-accent-green/10', border: 'border-accent-green/20', dot: 'bg-accent-green', label: 'Strong' },
  moderate: { bg: 'bg-accent-amber/10', border: 'border-accent-amber/20', dot: 'bg-accent-amber', label: 'Moderate' },
  contested: { bg: 'bg-accent-red/10', border: 'border-accent-red/20', dot: 'bg-accent-red', label: 'Contested' },
};

export default function DebateModePage() {
  const debate = kalamDebate;
  const [currentRound, setCurrentRound] = useState(0);
  const round = debate.rounds[currentRound];

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 border-b border-border bg-bg-secondary/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/explore" className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-glass transition-colors">
              <ArrowLeft size={18} />
            </Link>
            <Swords size={20} className="text-accent-blue" />
            <div>
              <h1 className="font-bold text-lg">Debate Mode</h1>
              <p className="text-xs text-text-muted">{debate.title}</p>
            </div>
          </div>
          {/* Round Navigator */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentRound(Math.max(0, currentRound - 1))}
              disabled={currentRound === 0}
              className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-glass transition-colors disabled:opacity-30"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-1">
              {debate.rounds.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentRound(i)}
                  className={`w-8 h-8 rounded-lg text-sm font-medium transition-all ${
                    i === currentRound
                      ? 'bg-accent-gold text-bg-primary'
                      : 'bg-surface-glass text-text-muted hover:text-text-primary'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() => setCurrentRound(Math.min(debate.rounds.length - 1, currentRound + 1))}
              disabled={currentRound === debate.rounds.length - 1}
              className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-glass transition-colors disabled:opacity-30"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Depth Meter */}
      <div className="px-4 sm:px-6 lg:px-8 py-2 border-b border-border bg-bg-primary">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <span className="text-xs text-text-muted">Depth:</span>
          <div className="flex-1 h-2 bg-bg-elevated rounded-full overflow-hidden max-w-xs">
            <div
              className="h-full bg-gradient-to-r from-accent-gold to-accent-amber rounded-full transition-all duration-500"
              style={{ width: `${((currentRound + 1) / debate.rounds.length) * 100}%` }}
            />
          </div>
          <span className="text-xs text-text-muted">Round {currentRound + 1} of {debate.rounds.length}</span>
        </div>
      </div>

      {/* Debate Panels */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRound}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-6 h-full"
          >
            {/* FOR Panel */}
            <div className="rounded-2xl border border-accent-blue/20 bg-accent-blue/5 p-6 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-accent-blue" />
                <h2 className="font-bold text-accent-blue-light uppercase text-sm tracking-wider">For ({debate.forLabel})</h2>
              </div>
              <p className="text-text-primary font-serif leading-relaxed mb-5">{round.forSide.claim}</p>
              <div className="space-y-2 mt-auto">
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Supporting Evidence</p>
                {round.forSide.evidence.map((ev, i) => {
                  const s = strengthColors[ev.strength];
                  return (
                    <div key={i} className={`p-3 rounded-lg border ${s.bg} ${s.border}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`w-2 h-2 rounded-full ${s.dot}`} />
                        <span className="text-[10px] text-text-muted uppercase">{s.label}</span>
                      </div>
                      <p className="text-text-secondary text-sm">{ev.text}</p>
                      <p className="text-[10px] text-text-muted mt-1">{ev.source}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* AGAINST Panel */}
            <div className="rounded-2xl border border-accent-red/20 bg-accent-red/5 p-6 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-accent-red" />
                <h2 className="font-bold text-red-300 uppercase text-sm tracking-wider">Against ({debate.againstLabel})</h2>
              </div>
              <p className="text-text-primary font-serif leading-relaxed mb-5">{round.againstSide.claim}</p>
              <div className="space-y-2 mt-auto">
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Supporting Evidence</p>
                {round.againstSide.evidence.map((ev, i) => {
                  const s = strengthColors[ev.strength];
                  return (
                    <div key={i} className={`p-3 rounded-lg border ${s.bg} ${s.border}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`w-2 h-2 rounded-full ${s.dot}`} />
                        <span className="text-[10px] text-text-muted uppercase">{s.label}</span>
                      </div>
                      <p className="text-text-secondary text-sm">{ev.text}</p>
                      <p className="text-[10px] text-text-muted mt-1">{ev.source}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Legend */}
      <div className="px-4 sm:px-6 lg:px-8 py-3 border-t border-border bg-bg-secondary/50">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6 text-xs text-text-muted">
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-accent-green" /> Strong evidence</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-accent-amber" /> Moderate</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-accent-red" /> Contested</span>
        </div>
      </div>
    </div>
  );
}
