'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { categories } from '@/data/arguments';
import { Shield, ArrowRight, Swords, BookOpen, ChevronRight } from 'lucide-react';

const categoryIcons: Record<string, string> = {
  cosmological: '🌌',
  ontological: '💭',
  teleological: '🔬',
  moral: '⚖️',
  historical: '📜',
};

const categoryColors: Record<string, string> = {
  cosmological: 'from-blue-500/10 to-blue-600/5 border-blue-500/20 hover:border-blue-400/40',
  ontological: 'from-purple-500/10 to-purple-600/5 border-purple-500/20 hover:border-purple-400/40',
  teleological: 'from-teal-500/10 to-teal-600/5 border-teal-500/20 hover:border-teal-400/40',
  moral: 'from-amber-500/10 to-amber-600/5 border-amber-500/20 hover:border-amber-400/40',
  historical: 'from-green-500/10 to-green-600/5 border-green-500/20 hover:border-green-400/40',
};

export default function DefendPage() {
  const t = useTranslations('defend');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-blue/20 bg-accent-blue/5 text-accent-blue text-xs font-medium mb-4">
          <Shield size={14} />
          {t('title')}
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gold-gradient">{t('title')}</h1>
        <p className="text-text-secondary text-lg font-serif max-w-2xl mx-auto">{t('subtitle')}</p>
      </motion.div>

      {/* Category Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              href={`/defend/atheism/${cat.id}`}
              className={`block rounded-2xl border bg-gradient-to-br p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${categoryColors[cat.id] || ''}`}
            >
              <div className="text-3xl mb-4">{categoryIcons[cat.id]}</div>
              <h2 className="text-lg font-bold mb-2">{cat.name}</h2>
              <p className="text-text-secondary text-sm font-serif leading-relaxed mb-4">{cat.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-muted">{cat.argumentCount} arguments</span>
                <ChevronRight size={16} className="text-text-muted" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Quick links to cults section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glass-card p-8"
      >
        <div className="flex items-center gap-3 mb-4">
          <Swords size={20} className="text-accent-red" />
          <h2 className="text-xl font-bold">{t('againstCults')}</h2>
        </div>
        <p className="text-text-secondary font-serif mb-6">Historical heresies (Gnosticism, Arianism, Pelagianism) and modern movements (LDS, Jehovah's Witnesses, Christian Science) — analyzed through Scripture, councils, and Church Fathers.</p>
        <Link href="/defend/cults" className="inline-flex items-center gap-2 text-accent-gold text-sm font-medium hover:gap-3 transition-all">
          Explore Cult Refutation <ArrowRight size={14} />
        </Link>
      </motion.div>
    </div>
  );
}
