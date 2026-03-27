'use client';

import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { churchFathers } from '@/data/sources';
import { ArrowLeft, BookMarked, ExternalLink } from 'lucide-react';

export default function ChurchFathersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-2 text-sm text-text-muted mb-8">
        <Link href="/sources" className="hover:text-accent-gold transition-colors">Sources</Link>
        <span>/</span>
        <span className="text-text-secondary">Church Fathers</span>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 gold-gradient">Church Fathers</h1>
        <p className="text-text-secondary font-serif text-lg mb-10">The foundational writings of early Christianity</p>
      </motion.div>

      <div className="space-y-6">
        {churchFathers.map((doc, i) => (
          <motion.div
            key={doc.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 sm:p-8"
          >
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Main content */}
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-1">{doc.title}</h2>
                <p className="text-accent-gold text-sm mb-3">{doc.author} · {doc.date}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-0.5 rounded text-[10px] bg-accent-teal/10 text-accent-teal border border-accent-teal/20">{doc.tradition}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-accent-purple/10 text-accent-purple border border-accent-purple/20">{doc.genre}</span>
                  {doc.controversy && (
                    <span className="px-2 py-0.5 rounded text-[10px] bg-accent-red/10 text-accent-red border border-accent-red/20">{doc.controversy}</span>
                  )}
                </div>
                <div className="formal-statement mb-4">
                  <p className="text-text-secondary font-serif text-sm leading-relaxed whitespace-pre-line">{doc.excerpt}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {doc.doctrines.map(d => (
                    <span key={d} className="px-2.5 py-1 rounded-lg text-xs bg-surface-glass border border-border text-text-muted">{d}</span>
                  ))}
                </div>
              </div>

              {/* Annotations sidebar */}
              <div className="lg:w-64 flex-shrink-0 p-4 rounded-xl bg-bg-primary border border-border">
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Cross-References</p>
                <div className="space-y-1.5 mb-4">
                  {doc.crossRefs.map(ref => (
                    <p key={ref} className="text-sm text-accent-blue">{ref}</p>
                  ))}
                </div>
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Related Works</p>
                <div className="space-y-1.5">
                  {doc.relatedWorks.map(w => (
                    <p key={w} className="text-sm text-text-secondary">{w}</p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
