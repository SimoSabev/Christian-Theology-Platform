'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { traditions, doctrineComparisons } from '@/data/comparisons';
import { Columns2, ArrowLeft, ChevronDown, Check } from 'lucide-react';

export default function SideBySidePage() {
  const [selectedTraditions, setSelectedTraditions] = useState<string[]>(['orthodoxy', 'catholicism', 'protestantism']);
  const [selectedDoctrine, setSelectedDoctrine] = useState(doctrineComparisons[0].id);
  const [expandedCell, setExpandedCell] = useState<string | null>(null);

  const currentDoctrine = doctrineComparisons.find(d => d.id === selectedDoctrine)!;
  const displayTraditions = traditions.filter(t => selectedTraditions.includes(t.id));

  function toggleTradition(id: string) {
    setSelectedTraditions(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  }

  const tradColors: Record<string, string> = {
    orthodoxy: 'border-amber-500/30 bg-amber-500/5',
    catholicism: 'border-purple-500/30 bg-purple-500/5',
    protestantism: 'border-blue-500/30 bg-blue-500/5',
  };

  const tradHeaderColors: Record<string, string> = {
    orthodoxy: 'text-amber-400',
    catholicism: 'text-purple-400',
    protestantism: 'text-blue-400',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-text-muted mb-8">
        <Link href="/compare" className="hover:text-accent-gold transition-colors">Compare</Link>
        <span>/</span>
        <span className="text-text-secondary">Side-by-Side</span>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 gold-gradient">Side-by-Side Comparison</h1>
        <p className="text-text-secondary font-serif mb-8">Select traditions and doctrines to compare</p>
      </motion.div>

      {/* Controls */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="flex flex-wrap items-center gap-4 mb-8">
        {/* Tradition Selectors */}
        <div className="flex flex-wrap gap-2">
          {traditions.map(trad => (
            <button
              key={trad.id}
              onClick={() => toggleTradition(trad.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm transition-all ${
                selectedTraditions.includes(trad.id)
                  ? `${tradColors[trad.id]} border-opacity-100`
                  : 'border-border text-text-muted hover:border-border-hover'
              }`}
            >
              {selectedTraditions.includes(trad.id) && <Check size={14} />}
              {trad.shortName}
            </button>
          ))}
        </div>

        {/* Doctrine Selector */}
        <select
          value={selectedDoctrine}
          onChange={e => setSelectedDoctrine(e.target.value)}
          className="px-4 py-2 rounded-lg bg-bg-elevated border border-border text-text-primary text-sm outline-none cursor-pointer hover:border-border-hover transition-colors"
        >
          {doctrineComparisons.map(d => (
            <option key={d.id} value={d.id}>{d.name}</option>
          ))}
        </select>
      </motion.div>

      {/* Comparison Grid */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <div className={`grid gap-4`} style={{ gridTemplateColumns: `repeat(${displayTraditions.length}, 1fr)` }}>
          {/* Headers */}
          {displayTraditions.map(trad => (
            <div key={trad.id} className={`p-4 rounded-t-xl border ${tradColors[trad.id]}`}>
              <h3 className={`font-bold text-lg ${tradHeaderColors[trad.id]}`}>{trad.shortName}</h3>
            </div>
          ))}

          {/* Positions */}
          {displayTraditions.map(trad => {
            const data = currentDoctrine.traditions[trad.id];
            if (!data) return <div key={trad.id} className="p-4 rounded-b-xl border border-border bg-bg-secondary text-text-muted text-sm italic">Not available</div>;
            const cellKey = `${currentDoctrine.id}-${trad.id}`;
            const isExpanded = expandedCell === cellKey;
            return (
              <div
                key={trad.id}
                className={`p-5 rounded-b-xl border border-border bg-bg-secondary cursor-pointer transition-all hover:bg-bg-elevated ${isExpanded ? 'ring-1 ring-accent-gold/30' : ''}`}
                onClick={() => setExpandedCell(isExpanded ? null : cellKey)}
              >
                <p className="font-semibold text-sm text-accent-gold mb-2">{data.position}</p>
                <p className="text-text-secondary text-sm font-serif leading-relaxed">{data.details}</p>
                {isExpanded && data.keySources.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-border">
                    <p className="text-xs text-text-muted mb-2">Key Sources:</p>
                    {data.keySources.map(s => (
                      <p key={s} className="text-xs text-text-muted mb-1">• {s}</p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Doctrine quick switch */}
      <div className="mt-8 flex flex-wrap gap-2">
        {doctrineComparisons.map(d => (
          <button
            key={d.id}
            onClick={() => setSelectedDoctrine(d.id)}
            className={`px-4 py-2 rounded-lg text-sm transition-all ${
              selectedDoctrine === d.id
                ? 'bg-accent-gold/10 text-accent-gold border border-accent-gold/20'
                : 'border border-border text-text-muted hover:text-text-secondary hover:border-border-hover'
            }`}
          >
            {d.name}
          </button>
        ))}
      </div>
    </div>
  );
}
