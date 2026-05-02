// src/components/command/CommandPalette.tsx
'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import { Search, X } from 'lucide-react';
import { groupByKind, universalSearch } from './search/universalSearch';
import type { SearchResult } from './search/types';

type Props = { open: boolean; onClose: () => void };

export default function CommandPalette({ open, onClose }: Props) {
  const t = useTranslations('command');
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => universalSearch(query), [query]);
  const grouped = useMemo(() => groupByKind(results), [results]);
  const flat: SearchResult[] = useMemo(
    () => Object.values(grouped).flat(),
    [grouped]
  );

  useEffect(() => {
    if (open) {
      setQuery('');
      setActive(0);
      // focus next tick so the input exists
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open]);

  useEffect(() => { setActive(0); }, [query]);

  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key === 'ArrowDown') { e.preventDefault(); setActive(a => Math.min(a + 1, flat.length - 1)); }
      if (e.key === 'ArrowUp')   { e.preventDefault(); setActive(a => Math.max(a - 1, 0)); }
      if (e.key === 'Enter') {
        const sel = flat[active];
        if (sel) { router.push(sel.href); onClose(); }
      }
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, flat, active, router, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t('ariaLabel')}
      className="fixed inset-0 z-[110] flex items-start justify-center pt-[18vh]"
      style={{ background: 'rgba(0,0,0,0.65)' }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl mx-4 codex-card overflow-hidden"
        style={{ padding: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex items-center gap-3 px-4 py-3"
          style={{ borderBottom: '1px solid var(--color-border)' }}
        >
          <Search size={18} style={{ color: 'var(--color-accent-gold)' }} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('placeholder')}
            className="flex-1 bg-transparent outline-none text-base"
            style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-body)' }}
            aria-controls="command-results"
          />
          <button
            onClick={onClose}
            aria-label={t('close')}
            className="p-1"
            style={{ color: 'var(--color-text-muted)' }}
          >
            <X size={16} />
          </button>
        </div>

        <div id="command-results" className="max-h-[60vh] overflow-y-auto">
          {flat.length === 0 && query && (
            <div className="px-4 py-6 t-meta text-center">{t('noResults')}</div>
          )}
          {flat.length === 0 && !query && (
            <div className="px-4 py-6 t-meta text-center">{t('startTyping')}</div>
          )}
          {Object.entries(grouped).map(([kind, items]) => (
            <div key={kind}>
              <div className="t-eyebrow px-4 py-2">{t(`groups.${kind}`)}</div>
              {items.map((it) => {
                const idx = flat.indexOf(it);
                const isActive = idx === active;
                return (
                  <button
                    key={it.id}
                    onMouseEnter={() => setActive(idx)}
                    onClick={() => { router.push(it.href); onClose(); }}
                    className="w-full text-left px-4 py-2 flex items-center gap-3"
                    style={{
                      background: isActive ? 'rgba(212, 168, 83, 0.08)' : 'transparent',
                      borderLeft: `2px solid ${isActive ? 'var(--color-accent-gold)' : 'transparent'}`,
                      fontFamily: 'var(--font-body)',
                      color: 'var(--color-text-primary)',
                      fontSize: 14,
                    }}
                  >
                    <span className="flex-1">{it.title}</span>
                    {it.subtitle && (
                      <span className="t-meta">{it.subtitle}</span>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
