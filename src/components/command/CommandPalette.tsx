// src/components/command/CommandPalette.tsx
'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import { Link } from '@/i18n/navigation';
import { Search, X, Shield, Scale, ScrollText, Eye, BookOpen } from 'lucide-react';
import { groupByKind, universalSearch } from './search/universalSearch';
import { isVerseQuery, parseVerseRef } from './search/versePatternDetect';
import type { SearchResult } from './search/types';
import type { ElementType } from 'react';
import { useLens } from '@/components/lens/useLens';
import { LENSES, LENS_VARIANTS, type Lens } from '@/components/lens/types';

type Props = { open: boolean; onClose: () => void };

const ACTIONS: { id: string; label: string; href: string | undefined; Icon: ElementType }[] = [
  { id: 'defend',      label: 'Defend against an objection…',  href: '/defend',              Icon: Shield     },
  { id: 'compare',    label: 'Compare two traditions…',        href: '/compare',             Icon: Scale      },
  { id: 'manuscript', label: 'Open a manuscript…',             href: '/sources/manuscripts', Icon: ScrollText },
  { id: 'lens',       label: 'Switch reading mode…',           href: undefined,              Icon: Eye        },
  { id: 'sources',    label: 'Browse primary sources…',        href: '/sources',             Icon: BookOpen   },
];

export default function CommandPalette({ open, onClose }: Props) {
  const t = useTranslations('command');
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { lens: activeLens, setLens } = useLens();
  const [lensMode, setLensMode] = useState(false);

  const isActionMode = query.startsWith('/');
  const isVerse = !isActionMode && isVerseQuery(query);
  const parsedVerse = isVerse ? parseVerseRef(query) : null;

  const results = useMemo(
    () => (isActionMode || isVerse ? [] : universalSearch(query)),
    [query, isActionMode, isVerse]
  );
  const grouped = useMemo(() => groupByKind(results), [results]);
  const flat: SearchResult[] = useMemo(
    () => Object.values(grouped).flat(),
    [grouped]
  );

  useEffect(() => {
    if (open) {
      setQuery('');
      setActive(0);
      setLensMode(false);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open]);

  useEffect(() => { setActive(0); }, [query]);

  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (lensMode) {
        if (e.key === 'Escape') { setLensMode(false); return; }
        if (e.key === 'ArrowDown') { e.preventDefault(); setActive(a => Math.min(a + 1, LENSES.length - 1)); }
        if (e.key === 'ArrowUp')   { e.preventDefault(); setActive(a => Math.max(a - 1, 0)); }
        if (e.key === 'Enter') { setLens(LENSES[active]!); onClose(); return; }
        return;
      }
      if (e.key === 'Escape') { onClose(); return; }
      if (isActionMode) {
        if (e.key === 'ArrowDown') { e.preventDefault(); setActive(a => Math.min(a + 1, ACTIONS.length - 1)); }
        if (e.key === 'ArrowUp')   { e.preventDefault(); setActive(a => Math.max(a - 1, 0)); }
        if (e.key === 'Enter') {
          const sel = ACTIONS[active];
          if (sel?.id === 'lens') { setActive(0); setLensMode(true); return; }
          if (sel?.href) { router.push(sel.href); onClose(); }
        }
        return;
      }
      if (e.key === 'ArrowDown') { e.preventDefault(); setActive(a => Math.min(a + 1, flat.length - 1)); }
      if (e.key === 'ArrowUp')   { e.preventDefault(); setActive(a => Math.max(a - 1, 0)); }
      if (e.key === 'Enter') {
        const sel = flat[active];
        if (sel) { router.push(sel.href); onClose(); }
      }
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, flat, active, router, onClose, isActionMode, lensMode, setLens]);

  if (!open) return null;

  const pillStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
    padding: '2px 8px',
    border: '1px solid var(--color-border)',
    borderRadius: 2,
    fontFamily: 'var(--font-display)',
    fontSize: '0.55rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'var(--color-text-muted)',
  };

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
        {/* Input row */}
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
          {/* LENS PICKER PANEL */}
          {lensMode && (
            <>
              <div className="t-eyebrow px-4 py-2 flex items-center justify-between">
                <span>READING MODE</span>
                <button
                  onClick={() => setLensMode(false)}
                  className="t-meta"
                  style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)', fontSize: 11 }}
                >
                  ← Back
                </button>
              </div>
              {LENSES.map((l: Lens) => (
                <button
                  key={l}
                  onClick={() => { setLens(l); onClose(); }}
                  className="w-full text-left px-4 py-3 flex items-center justify-between"
                  style={{
                    background: activeLens === l ? 'rgba(212,168,83,0.08)' : 'transparent',
                    borderLeft: `2px solid ${activeLens === l ? 'var(--color-accent-gold)' : 'transparent'}`,
                  }}
                >
                  <div>
                    <div className="t-caps text-xs" style={{ color: 'var(--color-text-primary)' }}>
                      {l.charAt(0).toUpperCase() + l.slice(1)}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
                      {LENS_VARIANTS[l].homepageMessage}
                    </div>
                  </div>
                  {activeLens === l && (
                    <span style={{ color: 'var(--color-accent-gold)', fontSize: 10 }}>✓ Active</span>
                  )}
                </button>
              ))}
            </>
          )}

          {/* Empty state — mode hint pills */}
          {!lensMode && !query && (
            <div className="px-4 py-5 flex flex-wrap gap-2 items-center">
              <span style={pillStyle}>Type to search</span>
              <span style={pillStyle}>/ for actions</span>
              <span style={{ ...pillStyle, color: 'var(--color-accent-gold)', borderColor: 'rgba(212,168,83,0.3)' }}>e.g. John 1:1</span>
            </div>
          )}

          {/* ACTION MODE */}
          {!lensMode && isActionMode && (
            <>
              <div className="t-eyebrow px-4 py-2">ACTIONS</div>
              {ACTIONS.map((action, idx) => {
                const isActive = idx === active;
                if (!action.href) {
                  return (
                    <button
                      key={action.id}
                      onMouseEnter={() => setActive(idx)}
                      onClick={() => { if (action.id === 'lens') { setActive(0); setLensMode(true); } else { onClose(); } }}
                      className="w-full text-left px-4 py-3 flex items-center gap-3"
                      style={{
                        background: isActive ? 'rgba(212,168,83,0.08)' : 'transparent',
                        borderLeft: `2px solid ${isActive ? 'var(--color-accent-gold)' : 'transparent'}`,
                        color: 'var(--color-text-secondary)',
                        fontFamily: 'var(--font-body)',
                        fontSize: 14,
                      }}
                    >
                      <action.Icon size={15} style={{ color: 'var(--color-accent-gold)', flexShrink: 0 }} />
                      {action.label}
                    </button>
                  );
                }
                return (
                  <button
                    key={action.id}
                    onMouseEnter={() => setActive(idx)}
                    onClick={() => { router.push(action.href!); onClose(); }}
                    className="w-full text-left px-4 py-3 flex items-center gap-3"
                    style={{
                      background: isActive ? 'rgba(212,168,83,0.08)' : 'transparent',
                      borderLeft: `2px solid ${isActive ? 'var(--color-accent-gold)' : 'transparent'}`,
                      color: 'var(--color-text-secondary)',
                      fontFamily: 'var(--font-body)',
                      fontSize: 14,
                    }}
                  >
                    <action.Icon size={15} style={{ color: 'var(--color-accent-gold)', flexShrink: 0 }} />
                    {action.label}
                  </button>
                );
              })}
            </>
          )}

          {/* VERSE MODE */}
          {!lensMode && isVerse && parsedVerse && (
            <div className="px-4 py-5">
              <div className="t-eyebrow mb-3">SCRIPTURE REFERENCE</div>
              <div className="mb-4" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-primary)', fontSize: 16 }}>
                <span style={{ color: 'var(--color-accent-gold)', fontFamily: 'var(--font-display)' }}>{parsedVerse.book}</span>
                {' '}
                <span>{parsedVerse.chapter}:{parsedVerse.verseStart}</span>
                {parsedVerse.verseEnd && <span>–{parsedVerse.verseEnd}</span>}
              </div>
              <div className="t-meta mb-4" style={{ color: 'var(--color-text-muted)' }}>
                Book · Chapter {parsedVerse.chapter} · Verse {parsedVerse.verseStart}
                {parsedVerse.verseEnd ? `–${parsedVerse.verseEnd}` : ''}
              </div>
              <div className="flex gap-3 flex-wrap">
                <Link
                  href={`/semantics?ref=${encodeURIComponent(parsedVerse.ref)}`}
                  onClick={onClose}
                  className="t-caps text-xs inline-flex items-center gap-2 px-3 py-2"
                  style={{ border: '1px solid var(--color-border)', color: 'var(--color-accent-gold)' }}
                >
                  <BookOpen size={12} /> Open in Semantics
                </Link>
                <Link
                  href={`/sources/manuscripts?ref=${encodeURIComponent(parsedVerse.ref)}`}
                  onClick={onClose}
                  className="t-caps text-xs inline-flex items-center gap-2 px-3 py-2"
                  style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)' }}
                >
                  <ScrollText size={12} /> Find in Manuscripts
                </Link>
              </div>
            </div>
          )}

          {/* NORMAL SEARCH RESULTS */}
          {!lensMode && !isActionMode && !isVerse && (
            <>
              {flat.length === 0 && query && (
                <div className="px-4 py-6 t-meta text-center">{t('noResults')}</div>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}
