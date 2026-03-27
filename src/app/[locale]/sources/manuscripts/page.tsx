'use client';

import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { manuscripts } from '@/data/sources';
import { ArrowLeft, ScrollText } from 'lucide-react';

const typeColors: Record<string, string> = {
  papyrus: 'bg-accent-amber/10 text-accent-amber border-accent-amber/20',
  uncial: 'bg-accent-blue/10 text-accent-blue border-accent-blue/20',
  minuscule: 'bg-accent-teal/10 text-accent-teal border-accent-teal/20',
};

export default function ManuscriptsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-2 text-sm text-text-muted mb-8">
        <Link href="/sources" className="hover:text-accent-gold transition-colors">Sources</Link>
        <span>/</span>
        <span className="text-text-secondary">Biblical Manuscripts</span>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 gold-gradient">Biblical Manuscripts</h1>
        <p className="text-text-secondary font-serif text-lg mb-10">Key Greek New Testament manuscripts — papyri, uncials, and more</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {manuscripts.map((ms, i) => (
          <motion.div
            key={ms.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6"
          >
            <div className="flex items-start justify-between mb-3">
              <h2 className="font-bold text-lg">{ms.designation}</h2>
              <span className={`px-2 py-0.5 rounded text-[10px] font-medium border ${typeColors[ms.type]}`}>
                {ms.type}
              </span>
            </div>
            <div className="space-y-2 text-sm">
              <p><span className="text-text-muted">Date:</span> <span className="text-accent-gold">{ms.date}</span></p>
              <p><span className="text-text-muted">Contents:</span> <span className="text-text-secondary">{ms.contents}</span></p>
              <p><span className="text-text-muted">Location:</span> <span className="text-text-secondary">{ms.location}</span></p>
            </div>
            <div className="mt-4 pt-3 border-t border-border">
              <p className="text-text-secondary text-sm font-serif leading-relaxed">{ms.significance}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
