'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { SectionMark } from '@/components/ornament';
import type { Glyph } from '@/components/ornament/SectionMark';
import { X } from 'lucide-react';

interface NavEntry {
  href: string;
  labelKey?: string;
  label?: string;
  description: string;
  glyph: Glyph;
  devotional?: boolean;
}

interface NavGroup {
  title: string;
  items: NavEntry[];
}

const GROUPS: NavGroup[] = [
  {
    title: 'STUDY',
    items: [
      { href: '/defend', labelKey: 'defend', description: '35 arguments for the Christian faith, fully defended.', glyph: 'cross' },
      { href: '/semantics', labelKey: 'semantics', description: 'Koine Greek exegesis, word by word.', glyph: 'section' },
      { href: '/critics', label: 'Critics', description: 'The strongest objections to the faith — and honest answers.', glyph: 'longCross' },
    ],
  },
  {
    title: 'EXPLORE',
    items: [
      { href: '/compare', labelKey: 'compare', description: 'How the traditions differ, side by side.', glyph: 'plusCircle' },
      { href: '/explore', labelKey: 'explore', description: 'Argument trees, debate mode, timelines.', glyph: 'diamond' },
      { href: '/sources', labelKey: 'sources', description: 'Manuscripts, Church Fathers, and Councils.', glyph: 'patee' },
    ],
  },
  {
    title: 'SCRIPTURE & PRACTICE',
    items: [
      { href: '/read', label: 'Read', description: 'The whole Bible — every book, every chapter.', glyph: 'chiRho' },
      { href: '/way', label: 'The Way', description: 'A contemplative space for living the faith.', glyph: 'shadowedCross', devotional: true },
    ],
  },
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function NavMenuOverlay({ open, onClose }: Props) {
  const t = useTranslations('nav');
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] overflow-y-auto"
          style={{ background: 'var(--color-bg-primary)' }}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-full">
            <div className="flex items-center justify-between mb-12">
              <span className="t-caps text-sm" style={{ color: 'var(--color-text-primary)', letterSpacing: '0.32em' }}>
                THEOLOGIA
              </span>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 -mr-2"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                <X size={22} />
              </button>
            </div>

            <div className="space-y-12">
              {GROUPS.map((group, gi) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 + gi * 0.06 }}
                >
                  <div className="t-eyebrow mb-5" style={{ color: 'var(--color-text-muted)' }}>
                    {group.title}
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {group.items.map((item) => {
                      const isActive = pathname.startsWith(item.href);
                      const label = item.labelKey ? t(item.labelKey) : item.label;
                      const description = item.description;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={onClose}
                          className="block px-6 py-7 transition-colors"
                          style={{
                            border: `1px solid ${isActive ? 'var(--color-accent-gold)' : 'var(--color-border)'}`,
                            background: item.devotional ? 'rgba(201,168,76,0.07)' : 'rgba(212,168,83,0.03)',
                            borderRadius: 4,
                          }}
                        >
                          <div className="mb-3"><SectionMark glyph={item.glyph} size={24} /></div>
                          <div
                            className={item.devotional ? '' : 't-caps text-sm'}
                            style={{
                              color: isActive ? 'var(--color-accent-gold)' : 'var(--color-text-primary)',
                              fontFamily: item.devotional ? 'var(--font-body, serif)' : undefined,
                              fontStyle: item.devotional ? 'italic' : undefined,
                              fontSize: item.devotional ? '1.1rem' : undefined,
                            }}
                          >
                            {label}
                          </div>
                          <div className="mt-2 t-meta text-xs" style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                            {description}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 pt-6 text-center" style={{ borderTop: '1px solid var(--color-border)' }}>
              <p className="t-meta text-xs" style={{ color: 'var(--color-text-muted)' }}>
                Press ⌘K to search anything.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
