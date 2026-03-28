'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { getArgumentBySlug } from '@/data/arguments';
import { getSemanticDefensesByArgument } from '@/data/semantic-defense';
import SemanticDefenseSlideshow from '@/components/semantic/SemanticDefenseSlideshow';
import { ArrowLeft, TreePine, Swords, BookOpen, ChevronDown, ChevronUp, ExternalLink, Quote } from 'lucide-react';

export default function ArgumentPage() {
  const params = useParams();
  const slug = params.argument as string;
  const arg = getArgumentBySlug(slug);
  const semanticDefenses = getSemanticDefensesByArgument(arg?.id || '');
  const [expandedObjections, setExpandedObjections] = useState<Set<string>>(new Set());
  const [activeSemanticDefense, setActiveSemanticDefense] = useState<string | null>(null);

  if (!arg) {
    return <div className="max-w-4xl mx-auto px-4 py-20 text-center text-text-muted">Argument not found</div>;
  }

  function toggleObj(id: string) {
    setExpandedObjections(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-text-muted mb-8 flex-wrap">
        <Link href="/defend" className="hover:text-accent-gold transition-colors">Defend</Link>
        <span>/</span>
        <Link href={`/defend/atheism/${arg.category}`} className="hover:text-accent-gold transition-colors capitalize">{arg.category}</Link>
        <span>/</span>
        <span className="text-text-secondary">{arg.name}</span>
      </div>

      {/* Title */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 gold-gradient">{arg.name}</h1>
        <p className="text-text-secondary font-serif text-lg leading-relaxed mb-8">{arg.shortDescription}</p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="flex flex-wrap gap-3 mb-10">
        <Link href={`/explore/argument-tree/${arg.slug}`} className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm text-text-secondary hover:border-accent-green/30 hover:text-accent-green transition-all">
          <TreePine size={16} /> Argument Tree
        </Link>
        <Link href={`/explore/debate-mode/${arg.slug}`} className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-all">
          <Swords size={16} /> Debate Mode
        </Link>
        {semanticDefenses.map(sd => (
          <button
            key={sd.id}
            onClick={() => setActiveSemanticDefense(sd.id)}
            className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm text-text-secondary hover:border-accent-purple/30 hover:text-accent-purple transition-all"
          >
            <BookOpen size={16} /> {sd.title}
          </button>
        ))}
      </motion.div>

      {/* Formal Statement */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mb-10">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Quote size={18} className="text-accent-gold" />
          Formal Statement
        </h2>
        <div className="formal-statement">
          {arg.premises.map((p, i) => (
            <p key={p.id} className="text-text-secondary text-lg leading-relaxed mb-1">
              <strong className="text-text-primary">P{i + 1}:</strong> {p.text}
            </p>
          ))}
          <p className="text-accent-gold text-lg leading-relaxed mt-2">
            <strong>∴ C:</strong> {arg.conclusion}
          </p>
        </div>
      </motion.section>

      {/* Historical Background */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-10">
        <h2 className="text-xl font-bold mb-4">Historical Background</h2>
        <p className="text-text-secondary font-serif leading-relaxed whitespace-pre-line">{arg.historicalBackground}</p>
      </motion.section>

      {/* Key Proponents */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mb-10">
        <h2 className="text-xl font-bold mb-4">Key Proponents</h2>
        <div className="flex flex-wrap gap-3">
          {arg.proponents.map((p) => (
            <div key={p.name} className="px-4 py-2 rounded-lg bg-surface-glass border border-border">
              <span className="font-medium text-sm">{p.name}</span>
              <span className="text-text-muted text-xs ms-2">({p.era})</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Defense of Premises */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-10">
        <h2 className="text-xl font-bold mb-4">Defense of Premises</h2>
        <div className="space-y-6">
          {arg.premises.map((p, i) => (
            <div key={p.id} className="glass-card p-6">
              <h3 className="font-semibold text-accent-blue mb-3">Premise {i + 1}: {p.text}</h3>
              <p className="text-text-secondary font-serif text-sm leading-relaxed mb-4 whitespace-pre-line">{p.defense}</p>
              {p.sources.length > 0 && (
                <div className="border-t border-border pt-3">
                  <p className="text-xs text-text-muted mb-2">Sources:</p>
                  <div className="flex flex-wrap gap-2">
                    {p.sources.map((s) => (
                      <span key={s} className="text-xs px-2 py-1 rounded bg-bg-primary text-text-muted border border-border">{s}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.section>

      {/* Objections & Responses */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mb-10">
        <h2 className="text-xl font-bold mb-4">Objections & Responses</h2>
        <div className="space-y-4">
          {arg.objections.map((obj) => {
            const isOpen = expandedObjections.has(obj.id);
            return (
              <div key={obj.id} className="rounded-xl border border-border overflow-hidden">
                <button
                  onClick={() => toggleObj(obj.id)}
                  className="w-full flex items-center justify-between p-5 text-start hover:bg-surface-glass transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent-red flex-shrink-0" />
                    <span className="font-medium text-sm">{obj.title}</span>
                  </div>
                  {isOpen ? <ChevronUp size={16} className="text-text-muted" /> : <ChevronDown size={16} className="text-text-muted" />}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 border-t border-border">
                    <div className="grid md:grid-cols-2 gap-4 pt-4">
                      <div className="p-4 rounded-lg bg-accent-red/5 border border-accent-red/10">
                        <p className="text-xs font-semibold text-accent-red mb-2 uppercase tracking-wider">Objection</p>
                        <p className="text-text-secondary text-sm font-serif leading-relaxed">{obj.description}</p>
                      </div>
                      <div className="p-4 rounded-lg bg-accent-teal/5 border border-accent-teal/10">
                        <p className="text-xs font-semibold text-accent-teal mb-2 uppercase tracking-wider">Response</p>
                        <p className="text-text-secondary text-sm font-serif leading-relaxed">{obj.response}</p>
                      </div>
                    </div>
                    {obj.sources.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {obj.sources.map((s) => (
                          <span key={s} className="text-xs px-2 py-1 rounded bg-bg-primary text-text-muted border border-border">{s}</span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* Significance */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-10">
        <h2 className="text-xl font-bold mb-4">Significance</h2>
        <p className="text-text-secondary font-serif leading-relaxed">{arg.significance}</p>
      </motion.section>

      {/* Key Sources */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="mb-10">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <BookOpen size={18} className="text-accent-gold" />
          Key Sources
        </h2>
        <ul className="space-y-2">
          {arg.keySources.map((s) => (
            <li key={s} className="flex items-start gap-2 text-text-secondary text-sm font-serif">
              <span className="text-accent-gold mt-1">•</span> {s}
            </li>
          ))}
        </ul>
      </motion.section>

      {/* Related Arguments */}
      {arg.relatedArguments.length > 0 && (
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <h2 className="text-xl font-bold mb-4">Related Arguments</h2>
          <div className="flex flex-wrap gap-3">
            {arg.relatedArguments.map((slug) => (
              <Link
                key={slug}
                href={`/defend/atheism/${arg.category}/${slug}`}
                className="px-4 py-2 rounded-lg border border-border text-sm text-text-secondary hover:border-accent-gold/30 hover:text-accent-gold transition-all"
              >
                {slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} →
              </Link>
            ))}
          </div>
        </motion.section>
      )}

      {/* Semantic Defense Modal */}
      <AnimatePresence>
        {activeSemanticDefense && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-bg-primary/95 backdrop-blur-sm"
          >
            <div className="w-full max-w-5xl h-full flex items-center justify-center relative">
              <SemanticDefenseSlideshow 
                defense={semanticDefenses.find(sd => sd.id === activeSemanticDefense)!}
                onClose={() => setActiveSemanticDefense(null)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
