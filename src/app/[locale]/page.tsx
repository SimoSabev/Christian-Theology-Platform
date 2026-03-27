'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Shield, Scale, BookOpen, Compass, ArrowRight, Search, TreePine, Swords, Clock, Sparkles, BookMarked, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const }
  })
};

export default function HomePage() {
  const t = useTranslations('home');
  const tn = useTranslations('nav');

  return (
    <div className="relative">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-accent-gold/5 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[40%] right-0 w-[400px] h-[400px] bg-gradient-radial from-accent-blue/5 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-gold/20 bg-accent-gold/5 text-accent-gold text-xs font-medium mb-6">
            <Sparkles size={14} />
            Apologetics · Doctrine · Primary Sources · Interactive Tools
          </motion.div>

          <motion.h1 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            <span className="gold-gradient">{t('heroTitle')}</span>
          </motion.h1>

          <motion.p variants={fadeUp} custom={2} className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto font-serif">
            {t('heroSubtitle')}
          </motion.p>

          {/* Search Bar */}
          <motion.div variants={fadeUp} custom={3} className="max-w-2xl mx-auto mb-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-gold/20 via-accent-blue/20 to-accent-teal/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center bg-bg-elevated rounded-xl border border-border group-hover:border-border-hover transition-colors">
                <Search size={20} className="ms-4 text-text-muted" />
                <input
                  type="text"
                  placeholder={t('heroSearch')}
                  className="flex-1 px-3 py-4 bg-transparent text-text-primary placeholder-text-muted outline-none text-base"
                />
                <button className="me-2 px-5 py-2.5 bg-gradient-to-r from-accent-gold to-accent-amber text-bg-primary font-semibold rounded-lg text-sm hover:shadow-lg hover:shadow-accent-gold/20 transition-all">
                  {tn('search')}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Quick Filters */}
          <motion.div variants={fadeUp} custom={4} className="flex flex-wrap justify-center gap-2 mb-4">
            {(['scientific', 'philosophical', 'historical', 'theological'] as const).map((filter) => (
              <button
                key={filter}
                className="px-4 py-1.5 rounded-full border border-border text-text-muted text-sm hover:border-accent-gold/30 hover:text-accent-gold hover:bg-accent-gold/5 transition-all"
              >
                {t(`quickFilters.${filter}`)}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Feature Cards */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {([
            { href: '/defend', icon: Shield, color: 'from-blue-500/10 to-blue-600/5', borderColor: 'hover:border-accent-blue/30', iconColor: 'text-accent-blue', key: 'defendCard' },
            { href: '/compare', icon: Scale, color: 'from-purple-500/10 to-purple-600/5', borderColor: 'hover:border-accent-purple/30', iconColor: 'text-accent-purple', key: 'compareCard' },
            { href: '/sources', icon: BookOpen, color: 'from-teal-500/10 to-teal-600/5', borderColor: 'hover:border-accent-teal/30', iconColor: 'text-accent-teal', key: 'sourcesCard' },
          ] as const).map(({ href, icon: Icon, color, borderColor, iconColor, key }, i) => (
            <motion.div
              key={href}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
            >
              <Link href={href} className={`block glass-card p-8 group ${borderColor}`}>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5`}>
                  <Icon size={24} className={iconColor} />
                </div>
                <h2 className="text-xl font-bold mb-1">{t(`${key}.title`)}</h2>
                <p className="text-xs text-text-muted mb-3 uppercase tracking-wider">{t(`${key}.subtitle`)}</p>
                <p className="text-text-secondary text-sm leading-relaxed mb-5 font-serif">{t(`${key}.desc`)}</p>
                <span className="inline-flex items-center gap-1.5 text-accent-gold text-sm font-medium group-hover:gap-2.5 transition-all">
                  {t(`${key}.title`)} <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Argument */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-bg-elevated via-bg-secondary to-bg-elevated"
        >
          <div className="absolute top-0 end-0 w-64 h-64 bg-gradient-radial from-accent-gold/5 to-transparent rounded-full blur-2xl" />
          <div className="relative p-8 sm:p-10">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={16} className="text-accent-gold" />
              <span className="text-xs font-semibold text-accent-gold uppercase tracking-wider">{t('featuredArgument')}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">The Kalam Cosmological Argument</h3>
            <div className="formal-statement mb-6 max-w-2xl">
              <p className="text-text-secondary leading-relaxed">
                <strong className="text-text-primary">P1:</strong> Everything that begins to exist has a cause of its existence.<br />
                <strong className="text-text-primary">P2:</strong> The universe began to exist.<br />
                <strong className="text-accent-gold">∴ C:</strong> Therefore, the universe has a cause of its existence.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/defend/atheism/cosmological/kalam" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent-gold to-accent-amber text-bg-primary font-semibold rounded-lg text-sm hover:shadow-lg hover:shadow-accent-gold/20 transition-all">
                <BookMarked size={16} /> Read Full Argument
              </Link>
              <Link href="/explore/argument-tree/kalam" className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-text-secondary rounded-lg text-sm hover:border-accent-gold/30 hover:text-accent-gold transition-all">
                <TreePine size={16} /> {t('argumentTree')}
              </Link>
              <Link href="/explore/debate-mode/kalam" className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-text-secondary rounded-lg text-sm hover:border-accent-gold/30 hover:text-accent-gold transition-all">
                <Swords size={16} /> {t('debateMode')}
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Interactive Tools Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">{t('exploreTools')}</h2>
          <p className="text-text-secondary font-serif">Engage with theology through visualization and structured analysis</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {([
            { href: '/explore/argument-tree', icon: TreePine, title: t('argumentTree'), desc: t('argumentTreeDesc'), color: 'text-accent-green' },
            { href: '/explore/debate-mode', icon: Swords, title: t('debateMode'), desc: t('debateModeDesc'), color: 'text-accent-blue' },
            { href: '/explore/timeline', icon: Clock, title: t('timeline'), desc: t('timelineDesc'), color: 'text-accent-amber' },
          ]).map(({ href, icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + i * 0.1, duration: 0.5 }}
            >
              <Link href={href} className="block glass-card p-6 group text-center">
                <div className={`w-14 h-14 rounded-2xl bg-surface-glass flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={28} className={color} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-text-secondary text-sm font-serif leading-relaxed">{desc}</p>
                <ChevronRight size={16} className="mx-auto mt-4 text-text-muted group-hover:text-accent-gold group-hover:translate-x-1 transition-all" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Arguments Mapped', value: '20+', icon: Shield },
            { label: 'Primary Sources', value: '100+', icon: BookOpen },
            { label: 'Traditions Compared', value: '3', icon: Scale },
            { label: 'Years of History', value: '2,000', icon: Clock },
          ].map(({ label, value, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + i * 0.1, duration: 0.4 }}
              className="glass-card p-5 text-center"
            >
              <Icon size={20} className="mx-auto mb-2 text-accent-gold" />
              <div className="text-2xl font-bold gold-gradient">{value}</div>
              <div className="text-xs text-text-muted mt-1">{label}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
