'use client';

import { useParams } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { traditions, doctrineComparisons } from '@/data/comparisons';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';

export default function TraditionPage() {
  const params = useParams();
  const tradId = params.tradition as string;
  const tradition = traditions.find(t => t.id === tradId);

  if (!tradition) {
    return <div className="max-w-4xl mx-auto px-4 py-20 text-center text-text-muted">Tradition not found</div>;
  }

  const tradColor: Record<string, string> = {
    orthodoxy: 'text-amber-400',
    catholicism: 'text-purple-400',
    protestantism: 'text-blue-400',
  };

  // Get this tradition's positions across all doctrines
  const positions = doctrineComparisons.filter(d => d.traditions[tradId]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-text-muted mb-8">
        <Link href="/compare" className="hover:text-accent-gold transition-colors">Compare</Link>
        <span>/</span>
        <span className="text-text-secondary">{tradition.name}</span>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className={`text-3xl sm:text-4xl font-bold mb-4 ${tradColor[tradId] || 'gold-gradient'}`}>
          {tradition.name}
        </h1>
        <p className="text-text-secondary font-serif text-lg leading-relaxed mb-8">{tradition.description}</p>
      </motion.div>

      {/* Key Beliefs */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-10">
        <h2 className="text-xl font-bold mb-4">Key Beliefs</h2>
        <div className="space-y-3">
          {tradition.keyBeliefs.map((b, i) => (
            <div key={i} className="glass-card p-4 flex items-start gap-3">
              <span className="text-accent-gold mt-0.5">•</span>
              <p className="text-text-secondary font-serif text-sm leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Distinctives */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-10">
        <h2 className="text-xl font-bold mb-4">Distinctives</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {tradition.distinctives.map((d, i) => (
            <div key={i} className="px-4 py-3 rounded-lg bg-surface-glass border border-border text-text-secondary text-sm font-serif">
              {d}
            </div>
          ))}
        </div>
      </motion.section>

      {/* Doctrinal Positions */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-10">
        <h2 className="text-xl font-bold mb-4">Doctrinal Positions</h2>
        <div className="space-y-4">
          {positions.map((doctrine) => {
            const data = doctrine.traditions[tradId];
            return (
              <div key={doctrine.id} className="glass-card p-6">
                <h3 className="font-semibold mb-1">{doctrine.name}</h3>
                <p className="text-accent-gold text-sm font-medium mb-3">{data.position}</p>
                <p className="text-text-secondary font-serif text-sm leading-relaxed mb-3">{data.details}</p>
                {data.keySources.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {data.keySources.map(s => (
                      <span key={s} className="text-xs px-2 py-1 rounded bg-bg-primary text-text-muted border border-border">{s}</span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* Compare CTA */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        <Link
          href="/compare/side-by-side"
          className="block glass-card p-6 text-center group"
        >
          <p className="text-text-secondary font-serif mb-2">Want to see how {tradition.shortName} compares?</p>
          <span className="inline-flex items-center gap-2 text-accent-gold text-sm font-medium group-hover:gap-3 transition-all">
            Open Side-by-Side Comparison <ArrowRight size={14} />
          </span>
        </Link>
      </motion.div>
    </div>
  );
}
