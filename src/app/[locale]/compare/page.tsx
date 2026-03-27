'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { traditions } from '@/data/comparisons';
import { Scale, ArrowRight, Columns2 } from 'lucide-react';

const tradColors: Record<string, string> = {
  orthodoxy: 'from-amber-500/10 to-amber-600/5 border-amber-500/20 hover:border-amber-400/40',
  catholicism: 'from-purple-500/10 to-purple-600/5 border-purple-500/20 hover:border-purple-400/40',
  protestantism: 'from-blue-500/10 to-blue-600/5 border-blue-500/20 hover:border-blue-400/40',
};

export default function ComparePage() {
  const t = useTranslations('compare');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-purple/20 bg-accent-purple/5 text-accent-purple text-xs font-medium mb-4">
          <Scale size={14} />
          {t('title')}
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gold-gradient">{t('title')}</h1>
        <p className="text-text-secondary text-lg font-serif max-w-2xl mx-auto">{t('subtitle')}</p>
      </motion.div>

      {/* Tradition Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {traditions.map((trad, i) => (
          <motion.div
            key={trad.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              href={`/compare/${trad.id}`}
              className={`block rounded-2xl border bg-gradient-to-br p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full ${tradColors[trad.id]}`}
            >
              <h2 className="text-xl font-bold mb-3">{trad.name}</h2>
              <p className="text-text-secondary font-serif text-sm leading-relaxed mb-4">{trad.description}</p>
              <div className="mb-4">
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Key Beliefs</p>
                <ul className="space-y-1">
                  {trad.keyBeliefs.slice(0, 3).map((b) => (
                    <li key={b} className="text-text-secondary text-xs flex items-start gap-2">
                      <span className="text-accent-gold mt-0.5">•</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="inline-flex items-center gap-1.5 text-accent-gold text-sm font-medium">
                Explore tradition <ArrowRight size={14} />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Side-by-Side tool */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Link href="/compare/side-by-side" className="block glass-card p-8 group text-center">
          <Columns2 size={32} className="mx-auto mb-4 text-accent-gold" />
          <h2 className="text-2xl font-bold mb-2">{t('sideBySide')}</h2>
          <p className="text-text-secondary font-serif max-w-xl mx-auto mb-4">Select traditions and doctrines to compare side by side — Eucharist, Salvation, Authority, Baptism, Mariology, and more.</p>
          <span className="inline-flex items-center gap-2 text-accent-gold text-sm font-medium group-hover:gap-3 transition-all">
            Open Comparison Tool <ArrowRight size={14} />
          </span>
        </Link>
      </motion.div>
    </div>
  );
}
