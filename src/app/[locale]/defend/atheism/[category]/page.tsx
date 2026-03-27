'use client';

import { useParams } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { getArgumentsByCategory, getCategoryInfo, type ArgumentCategory } from '@/data/arguments';
import { ArrowLeft, ArrowRight, TreePine, Swords } from 'lucide-react';

export default function CategoryPage() {
  const params = useParams();
  const category = params.category as ArgumentCategory;
  const catInfo = getCategoryInfo(category);
  const args = getArgumentsByCategory(category);

  if (!catInfo) {
    return <div className="max-w-4xl mx-auto px-4 py-20 text-center text-text-muted">Category not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-text-muted mb-8">
        <Link href="/defend" className="hover:text-accent-gold transition-colors">Defend</Link>
        <span>/</span>
        <span className="text-text-secondary">{catInfo.name}</span>
      </div>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <div className="text-4xl mb-4">{catInfo.icon}</div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 gold-gradient">{catInfo.name}</h1>
        <p className="text-text-secondary text-lg font-serif max-w-2xl">{catInfo.description}</p>
      </motion.div>

      {/* Arguments List */}
      <div className="space-y-6">
        {args.map((arg, i) => (
          <motion.div
            key={arg.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              href={`/defend/atheism/${category}/${arg.slug}`}
              className="block glass-card p-6 sm:p-8 group"
            >
              <h2 className="text-xl font-bold mb-2 group-hover:text-accent-gold transition-colors">{arg.name}</h2>
              <p className="text-text-secondary font-serif text-sm leading-relaxed mb-4">{arg.shortDescription}</p>

              {/* Mini formal statement */}
              <div className="formal-statement mb-4 text-sm">
                {arg.premises.map((p, pi) => (
                  <p key={p.id} className="text-text-secondary">
                    <strong className="text-text-primary">P{pi + 1}:</strong> {p.text}
                  </p>
                ))}
                <p className="text-accent-gold mt-1">
                  <strong>∴ C:</strong> {arg.conclusion}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-accent-gold text-sm font-medium group-hover:gap-2.5 transition-all">
                  Read full argument <ArrowRight size={14} />
                </span>
                <span className="text-text-muted text-xs">·</span>
                <span className="text-text-muted text-xs">{arg.objections.length} objections addressed</span>
                <span className="text-text-muted text-xs">·</span>
                <span className="text-text-muted text-xs">{arg.proponents.length} key proponents</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Empty state */}
      {args.length === 0 && (
        <div className="glass-card p-12 text-center">
          <p className="text-text-muted text-lg">Arguments for this category are coming soon.</p>
          <Link href="/defend" className="inline-flex items-center gap-2 mt-4 text-accent-gold text-sm">
            <ArrowLeft size={14} /> Back to all categories
          </Link>
        </div>
      )}
    </div>
  );
}
