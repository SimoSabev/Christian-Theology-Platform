'use client';

import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { councils } from '@/data/sources';
import { Church, ArrowRight } from 'lucide-react';

export default function CouncilsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-2 text-sm text-text-muted mb-8">
        <Link href="/sources" className="hover:text-accent-gold transition-colors">Sources</Link>
        <span>/</span>
        <span className="text-text-secondary">Councils & Creeds</span>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 gold-gradient">Councils & Creeds</h1>
        <p className="text-text-secondary font-serif text-lg mb-10">The ecumenical councils that defined Christian orthodoxy</p>
      </motion.div>

      {/* Timeline-style council list */}
      <div className="relative">
        <div className="absolute start-6 top-0 bottom-0 w-0.5 bg-border" />
        <div className="space-y-8">
          {councils.map((council, i) => (
            <motion.div
              key={council.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative ps-16"
            >
              {/* Year dot */}
              <div className="absolute start-4 top-6 w-5 h-5 rounded-full bg-accent-gold border-4 border-bg-primary z-10" />

              <div className="glass-card p-6 sm:p-8">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h2 className="text-xl font-bold">{council.name}</h2>
                    <p className="text-accent-gold text-sm">{council.year} AD · {council.location}</p>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-accent-purple/10 text-accent-purple border border-accent-purple/20 capitalize">
                    {council.scope}
                  </span>
                </div>
                <p className="text-text-secondary font-serif text-sm leading-relaxed mb-4">{council.description}</p>
                <div className="mb-3">
                  <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Key Decisions</p>
                  <ul className="space-y-1.5">
                    {council.keyDecisions.map(d => (
                      <li key={d} className="text-text-secondary text-sm flex items-start gap-2">
                        <span className="text-accent-gold mt-0.5">•</span> {d}
                      </li>
                    ))}
                  </ul>
                </div>
                {council.creeds && council.creeds.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {council.creeds.map(c => (
                      <span key={c} className="px-2.5 py-1 rounded-lg text-xs bg-accent-gold/10 text-accent-gold border border-accent-gold/20">{c}</span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
