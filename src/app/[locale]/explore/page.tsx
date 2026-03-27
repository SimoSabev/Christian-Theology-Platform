'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { Compass, TreePine, Swords, Clock, BookOpen, ArrowRight } from 'lucide-react';

const tools = [
  { id: 'argument-tree', icon: TreePine, color: 'text-accent-green', bg: 'from-green-500/10 to-green-600/5 border-green-500/20 hover:border-green-400/40', tKey: 'argumentTree' },
  { id: 'debate-mode', icon: Swords, color: 'text-accent-blue', bg: 'from-blue-500/10 to-blue-600/5 border-blue-500/20 hover:border-blue-400/40', tKey: 'debateMode' },
  { id: 'timeline', icon: Clock, color: 'text-accent-amber', bg: 'from-amber-500/10 to-amber-600/5 border-amber-500/20 hover:border-amber-400/40', tKey: 'timeline' },
];

export default function ExplorePage() {
  const t = useTranslations('explore');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-amber/20 bg-accent-amber/5 text-accent-amber text-xs font-medium mb-4">
          <Compass size={14} />
          {t('title')}
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gold-gradient">{t('title')}</h1>
        <p className="text-text-secondary text-lg font-serif max-w-2xl mx-auto">{t('subtitle')}</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {tools.map((tool, i) => {
          const Icon = tool.icon;
          return (
            <motion.div key={tool.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}>
              <Link href={`/explore/${tool.id}`} className={`block rounded-2xl border bg-gradient-to-br p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full text-center ${tool.bg}`}>
                <div className="w-16 h-16 rounded-2xl bg-surface-glass flex items-center justify-center mx-auto mb-5">
                  <Icon size={32} className={tool.color} />
                </div>
                <h2 className="text-xl font-bold mb-2">{t(`${tool.tKey}.title`)}</h2>
                <p className="text-text-secondary font-serif text-sm leading-relaxed mb-5">{t(`${tool.tKey}.desc`)}</p>
                <span className="inline-flex items-center gap-1.5 text-accent-gold text-sm font-medium">
                  Launch <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
