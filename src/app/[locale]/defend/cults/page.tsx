'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { cultCategories } from '@/data/cults';
import { Swords, ChevronRight, BookOpen } from 'lucide-react';

export default function CultsIndexPage() {
  const t = useTranslations('defend');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-text-muted mb-8">
        <Link href="/defend" className="hover:text-accent-gold transition-colors">Defend</Link>
        <span>/</span>
        <span className="text-text-secondary">Against Cults</span>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-red/20 bg-accent-red/5 text-accent-red text-xs font-medium mb-4">
          <Swords size={14} />
          {t('againstCults', { fallback: 'Against Cults & Heresies' })}
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gold-gradient">Cults & Heresies</h1>
        <p className="text-text-secondary text-lg font-serif max-w-2xl mx-auto">
          Equipping the modern apologist to respond to historical and modern theological departures through deep scriptural and semantic analysis.
        </p>
      </motion.div>

      {/* Cult Category Grid */}
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <BookOpen className="text-accent-gold" size={24} />
        Explore Refutations By Movement
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {cultCategories.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              href={`/defend/cults/${cat.id}`}
              className={`block rounded-2xl border bg-gradient-to-br p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg from-${cat.color}-500/10 to-${cat.color}-600/5 border-${cat.color}-500/20 hover:border-${cat.color}-400/40`}
            >
              <div className="text-3xl mb-4">{cat.icon}</div>
              <h2 className="text-lg font-bold mb-2">{cat.name}</h2>
              <p className="text-text-secondary text-sm font-serif leading-relaxed mb-4">{cat.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-muted">{cat.objectionCount} major refutations</span>
                <ChevronRight size={16} className="text-text-muted" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
