'use client';

import { useParams } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { getCultCategoryInfo, getCultObjectionsByCategory, type CultCategory } from '@/data/cults';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function CultCategoryPage() {
  const params = useParams();
  const category = params.category as CultCategory;
  const catInfo = getCultCategoryInfo(category);
  const objections = getCultObjectionsByCategory(category);

  if (!catInfo) {
    return <div className="max-w-4xl mx-auto px-4 py-20 text-center text-text-muted">Movement not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-text-muted mb-8">
        <Link href="/defend/cults" className="hover:text-accent-gold transition-colors">Cults & Heresies</Link>
        <span>/</span>
        <span className="text-text-secondary">{catInfo.name}</span>
      </div>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <div className="text-4xl mb-4">{catInfo.icon}</div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 gold-gradient">{catInfo.name}</h1>
        <p className="text-text-secondary text-lg font-serif max-w-2xl">{catInfo.description}</p>
      </motion.div>

      {/* Objections List */}
      <div className="space-y-6">
        {objections.map((obj, i) => (
          <motion.div
            key={obj.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              href={`/defend/cults/${category}/${obj.slug}`}
              className="block glass-card p-6 sm:p-8 group"
            >
              <h2 className="text-xl font-bold mb-2 group-hover:text-accent-gold transition-colors">{obj.name}</h2>
              <p className="text-text-secondary font-serif text-sm leading-relaxed mb-4">{obj.shortDescription}</p>

              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-accent-gold text-sm font-medium group-hover:gap-2.5 transition-all">
                  Read full analysis <ArrowRight size={14} />
                </span>
                <span className="text-text-muted text-xs">·</span>
                <span className="text-text-muted text-xs">{obj.semanticDefenseIds.length} semantic refutations</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Empty state */}
      {objections.length === 0 && (
        <div className="glass-card p-12 text-center">
          <p className="text-text-muted text-lg">Analyzed objections for this movement are coming soon.</p>
          <Link href="/defend/cults" className="inline-flex items-center gap-2 mt-4 text-accent-gold text-sm">
            <ArrowLeft size={14} /> Back to all movements
          </Link>
        </div>
      )}
    </div>
  );
}
