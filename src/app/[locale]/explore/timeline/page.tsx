'use client';

import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { timelineEvents } from '@/data/sources';
import { ArrowLeft, Clock, Filter } from 'lucide-react';

const eraColors: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  'Apostolic': { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', dot: 'bg-blue-500' },
  'Ante-Nicene': { bg: 'bg-teal-500/10', border: 'border-teal-500/30', text: 'text-teal-400', dot: 'bg-teal-500' },
  'Nicene': { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400', dot: 'bg-amber-500' },
  'Post-Nicene': { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-400', dot: 'bg-orange-500' },
  'Medieval': { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400', dot: 'bg-purple-500' },
  'Reformation': { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400', dot: 'bg-red-500' },
  'Modern': { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400', dot: 'bg-green-500' },
};

const categoryIcons: Record<string, string> = {
  'council': '⛪',
  'event': '📌',
  'document': '📜',
  'figure': '👤',
};

const categoryLabels: Record<string, string> = {
  'council': 'Council',
  'event': 'Event',
  'document': 'Document',
  'figure': 'Figure',
};

export default function TimelinePage() {
  const [selectedEra, setSelectedEra] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const eras = [...new Set(timelineEvents.map(e => e.era))];
  const categories = [...new Set(timelineEvents.map(e => e.category))];

  const filteredEvents = timelineEvents.filter(e => {
    if (selectedEra && e.era !== selectedEra) return false;
    if (selectedCategory && e.category !== selectedCategory) return false;
    return true;
  });

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-8 py-6 border-b border-border bg-bg-secondary/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/explore" className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-glass transition-colors">
              <ArrowLeft size={18} />
            </Link>
            <Clock size={22} className="text-accent-amber" />
            <div>
              <h1 className="font-bold text-2xl">Timeline Explorer</h1>
              <p className="text-sm text-text-muted">2,000 years of Christian history</p>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {/* Era Filters */}
            <button
              onClick={() => setSelectedEra(null)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                !selectedEra ? 'bg-accent-gold/10 text-accent-gold border border-accent-gold/20' : 'border border-border text-text-muted hover:text-text-secondary hover:border-border-hover'
              }`}
            >
              All Eras
            </button>
            {eras.map(era => {
              const colors = eraColors[era] || eraColors['Apostolic'];
              return (
                <button
                  key={era}
                  onClick={() => setSelectedEra(selectedEra === era ? null : era)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedEra === era ? `${colors.bg} ${colors.text} ${colors.border} border` : 'border border-border text-text-muted hover:text-text-secondary hover:border-border-hover'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
                  {era}
                </button>
              );
            })}

            <div className="w-px h-6 bg-border self-center mx-1" />

            {/* Category Filters */}
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat ? 'bg-accent-gold/10 text-accent-gold border border-accent-gold/20' : 'border border-border text-text-muted hover:text-text-secondary hover:border-border-hover'
                }`}
              >
                <span>{categoryIcons[cat]}</span>
                {categoryLabels[cat] || cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute start-[23px] sm:start-[31px] top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-6">
            {filteredEvents.map((event, i) => {
              const colors = eraColors[event.era] || eraColors['Apostolic'];
              const isLast = i === filteredEvents.length - 1;

              return (
                <motion.div
                  key={`${event.year}-${event.title}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: Math.min(i * 0.03, 0.5), duration: 0.3 }}
                  className="relative flex gap-4 sm:gap-6"
                >
                  {/* Dot + Year */}
                  <div className="flex-shrink-0 w-12 sm:w-16 flex flex-col items-center pt-1">
                    <div className={`w-3 h-3 rounded-full ${colors.dot} ring-4 ring-bg-primary z-10 flex-shrink-0`} />
                    <span className={`text-xs font-bold mt-2 ${colors.text} whitespace-nowrap`}>
                      {event.year} AD
                    </span>
                  </div>

                  {/* Card */}
                  <div className={`flex-1 rounded-xl border ${colors.border} ${colors.bg} p-4 sm:p-5 hover:shadow-lg transition-shadow group`}>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-semibold text-text-primary text-sm sm:text-base leading-snug">
                        {categoryIcons[event.category]} {event.title}
                      </h3>
                      <span className={`flex-shrink-0 px-2 py-0.5 rounded-full text-[10px] font-semibold ${colors.bg} ${colors.text} border ${colors.border}`}>
                        {event.era}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-text-muted">
                      <span className="capitalize">{categoryLabels[event.category] || event.category}</span>
                      <span>•</span>
                      <span>{event.year} AD</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* End marker */}
          <div className="relative flex items-center gap-4 sm:gap-6 mt-6">
            <div className="flex-shrink-0 w-12 sm:w-16 flex justify-center">
              <div className="w-4 h-4 rounded-full bg-accent-gold ring-4 ring-bg-primary z-10" />
            </div>
            <p className="text-text-muted text-sm italic">
              {filteredEvents.length} events shown
              {(selectedEra || selectedCategory) && ' (filtered)'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
