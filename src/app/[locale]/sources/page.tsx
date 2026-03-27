'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { BookOpen, ScrollText, Church, BookMarked, ArrowRight } from 'lucide-react';
import { manuscripts, churchFathers, councils } from '@/data/sources';

const sourceCategories = [
  { id: 'manuscripts', icon: ScrollText, color: 'from-teal-500/10 to-teal-600/5 border-teal-500/20 hover:border-teal-400/40', iconColor: 'text-teal-400' },
  { id: 'church-fathers', icon: BookMarked, color: 'from-amber-500/10 to-amber-600/5 border-amber-500/20 hover:border-amber-400/40', iconColor: 'text-amber-400' },
  { id: 'councils', icon: Church, color: 'from-purple-500/10 to-purple-600/5 border-purple-500/20 hover:border-purple-400/40', iconColor: 'text-purple-400' },
];

export default function SourcesPage() {
  const t = useTranslations('sources');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-teal/20 bg-accent-teal/5 text-accent-teal text-xs font-medium mb-4">
          <BookOpen size={14} />
          {t('title')}
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gold-gradient">{t('title')}</h1>
        <p className="text-text-secondary text-lg font-serif max-w-2xl mx-auto">{t('subtitle')}</p>
      </motion.div>

      {/* Category Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {sourceCategories.map((cat, i) => {
          const Icon = cat.icon;
          const countMap: Record<string, number> = { 'manuscripts': manuscripts.length, 'church-fathers': churchFathers.length, 'councils': councils.length };
          return (
            <motion.div key={cat.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <Link href={`/sources/${cat.id}`} className={`block rounded-2xl border bg-gradient-to-br p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${cat.color}`}>
                <Icon size={32} className={`${cat.iconColor} mb-4`} />
                <h2 className="text-xl font-bold mb-2">{t(`${cat.id === 'church-fathers' ? 'churchFathers' : cat.id}` as 'manuscripts' | 'churchFathers' | 'councils')}</h2>
                <p className="text-text-secondary font-serif text-sm leading-relaxed mb-4">{t(`${cat.id === 'church-fathers' ? 'churchFathersDesc' : cat.id + 'Desc'}` as 'manuscriptsDesc' | 'churchFathersDesc' | 'councilsDesc')}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-text-muted">{countMap[cat.id]} entries</span>
                  <ArrowRight size={14} className="text-text-muted" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Featured Source */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-8">
        <p className="text-xs font-semibold text-accent-gold uppercase tracking-wider mb-3">Featured Source</p>
        <h3 className="text-2xl font-bold mb-2">On the Incarnation — Athanasius of Alexandria</h3>
        <p className="text-text-muted text-sm mb-4">c. 318 AD · Eastern Greek · Anti-Arian</p>
        <div className="formal-statement mb-4">
          <p className="text-text-secondary font-serif italic">&quot;For He was made man that we might be made God.&quot; — Chapter 54</p>
        </div>
        <Link href="/sources/church-fathers" className="inline-flex items-center gap-2 text-accent-gold text-sm font-medium hover:gap-3 transition-all">
          Explore Church Fathers <ArrowRight size={14} />
        </Link>
      </motion.div>
    </div>
  );
}
