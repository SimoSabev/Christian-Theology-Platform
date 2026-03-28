'use client';

import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { allManuscripts, manuscriptCategories } from '@/data/manuscripts';
import type { ManuscriptCategory, FullManuscript } from '@/data/manuscripts';
import { ArrowRight, ScrollText, BookOpen, Calendar, MapPin, Search, Filter, ChevronRight, Sparkles } from 'lucide-react';

const typeColors: Record<string, string> = {
  papyrus: 'bg-accent-amber/10 text-accent-amber border-accent-amber/20',
  uncial: 'bg-accent-blue/10 text-accent-blue border-accent-blue/20',
  codex: 'bg-accent-blue/10 text-accent-blue border-accent-blue/20',
  scroll: 'bg-accent-green/10 text-accent-green border-accent-green/20',
  translation: 'bg-accent-purple/10 text-accent-purple border-accent-purple/20',
};

const catColors: Record<string, { border: string; bg: string; icon: string }> = {
  papyri: { border: 'border-accent-amber/20 hover:border-accent-amber/40', bg: 'from-amber-500/10 to-amber-600/5', icon: 'text-amber-400' },
  uncials: { border: 'border-accent-blue/20 hover:border-accent-blue/40', bg: 'from-blue-500/10 to-blue-600/5', icon: 'text-blue-400' },
  scrolls: { border: 'border-accent-green/20 hover:border-accent-green/40', bg: 'from-green-500/10 to-green-600/5', icon: 'text-green-400' },
  translations: { border: 'border-accent-purple/20 hover:border-accent-purple/40', bg: 'from-purple-500/10 to-purple-600/5', icon: 'text-purple-400' },
};

function ManuscriptCard({ ms, index }: { ms: FullManuscript; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Link
        href={`/sources/manuscripts/${ms.id}`}
        className="block glass-card overflow-hidden group"
      >
        {/* Image thumbnail */}
        {ms.images.length > 0 && (
          <div className="aspect-[16/9] overflow-hidden bg-bg-secondary relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ms.images[0].url}
              alt={ms.designation}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold border ${typeColors[ms.type]}`}>
                {ms.type}
              </span>
            </div>
          </div>
        )}

        <div className="p-5">
          <h3 className="font-bold text-base mb-1 group-hover:text-accent-gold transition-colors line-clamp-1">
            {ms.designation.split('—')[0]?.trim()}
          </h3>
          {ms.designation.includes('—') && (
            <p className="text-text-muted text-xs mb-3">{ms.designation.split('—')[1]?.trim()}</p>
          )}

          <div className="space-y-1.5 text-xs mb-4">
            <div className="flex items-center gap-2 text-text-secondary">
              <Calendar size={12} className="text-text-muted" />
              <span className="text-accent-gold font-medium">{ms.date}</span>
            </div>
            <div className="flex items-center gap-2 text-text-secondary">
              <BookOpen size={12} className="text-text-muted" />
              <span className="line-clamp-1">{ms.contents}</span>
            </div>
            <div className="flex items-center gap-2 text-text-secondary">
              <MapPin size={12} className="text-text-muted" />
              <span className="line-clamp-1">{ms.location}</span>
            </div>
          </div>

          <p className="text-text-secondary text-xs font-serif leading-relaxed line-clamp-2 mb-4">
            {ms.significance}
          </p>

          <span className="inline-flex items-center gap-1.5 text-accent-gold text-xs font-medium group-hover:gap-2.5 transition-all">
            Read & Explore <ArrowRight size={12} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ManuscriptsPage() {
  const [activeCategory, setActiveCategory] = useState<ManuscriptCategory | 'all'>('all');
  const [search, setSearch] = useState('');

  const filtered = allManuscripts.filter(ms => {
    const matchesCategory = activeCategory === 'all' ||
      (activeCategory === 'papyri' && ms.type === 'papyrus') ||
      (activeCategory === 'uncials' && (ms.type === 'uncial' || ms.type === 'codex')) ||
      (activeCategory === 'scrolls' && ms.type === 'scroll') ||
      (activeCategory === 'translations' && ms.type === 'translation');

    const matchesSearch = search === '' ||
      ms.designation.toLowerCase().includes(search.toLowerCase()) ||
      ms.contents.toLowerCase().includes(search.toLowerCase()) ||
      ms.significance.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-text-muted mb-8">
        <Link href="/sources" className="hover:text-accent-gold transition-colors">Sources</Link>
        <ChevronRight size={12} />
        <span className="text-text-secondary">Biblical Manuscripts</span>
      </div>

      {/* Hero */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-gold/20 bg-accent-gold/5 text-accent-gold text-xs font-medium mb-4">
          <Sparkles size={14} />
          {allManuscripts.length} Manuscripts · Interlinear Text · Original Languages
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gold-gradient">Biblical Manuscripts</h1>
        <p className="text-text-secondary text-lg font-serif max-w-3xl mx-auto">
          Explore the greatest biblical manuscripts ever discovered — from 2nd-century papyrus fragments to medieval codexes.
          Read the original Greek and Hebrew text with interactive word-by-word interlinear translations.
        </p>
      </motion.div>

      {/* Category Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {manuscriptCategories.map((cat, i) => {
          const colors = catColors[cat.id] || catColors.papyri;
          return (
            <motion.button
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              onClick={() => setActiveCategory(activeCategory === cat.id ? 'all' : cat.id)}
              className={`text-left rounded-xl border bg-gradient-to-br p-4 transition-all duration-300 ${colors.bg} ${
                activeCategory === cat.id
                  ? 'border-accent-gold/40 ring-1 ring-accent-gold/20 -translate-y-1 shadow-lg'
                  : `${colors.border}`
              }`}
            >
              <ScrollText size={20} className={`${colors.icon} mb-2`} />
              <h3 className="font-bold text-sm mb-0.5">{cat.label}</h3>
              <p className="text-text-muted text-xs mb-2">{cat.description}</p>
              <span className="text-xs text-text-secondary">{cat.count} manuscripts</span>
            </motion.button>
          );
        })}
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search manuscripts by name, contents, or significance..."
            className="w-full pl-10 pr-4 py-3 bg-surface-glass border border-border rounded-xl text-sm text-text-primary placeholder-text-muted outline-none focus:border-accent-gold/30 transition-colors"
          />
        </div>
        {(activeCategory !== 'all' || search) && (
          <button
            onClick={() => { setActiveCategory('all'); setSearch(''); }}
            className="px-4 py-3 bg-surface-glass border border-border rounded-xl text-sm text-text-muted hover:text-text-primary transition-colors flex items-center gap-2"
          >
            <Filter size={14} /> Clear Filters
          </button>
        )}
      </div>

      {/* Results count */}
      <p className="text-xs text-text-muted mb-6">
        Showing {filtered.length} of {allManuscripts.length} manuscripts
        {activeCategory !== 'all' && ` in ${manuscriptCategories.find(c => c.id === activeCategory)?.label}`}
      </p>

      {/* Manuscript Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((ms, i) => (
          <ManuscriptCard key={ms.id} ms={ms} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <ScrollText size={40} className="mx-auto mb-4 text-text-muted" />
          <p className="text-text-muted">No manuscripts match your search.</p>
        </div>
      )}
    </div>
  );
}
