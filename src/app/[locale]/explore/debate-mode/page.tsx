'use client';

import { Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { allDebates } from '@/data/debates';
import { allTrees } from '@/data/trees';
import { allArguments, categories } from '@/data/arguments';
import { ArrowLeft, Swords, ChevronLeft, ChevronRight, TreePine, ChevronDown } from 'lucide-react';
import { Eyebrow } from '@/components/ornament';
import { useLens } from '@/components/lens/useLens';

const DEFAULT_DEBATE = 'kalam';
const OTHER_CATEGORY_ID = 'other';

type PickerEntry = {
  key: string;
  name: string;
  categoryId: string;
};

type PickerCategory = {
  id: string;
  name: string;
  entries: PickerEntry[];
};

/**
 * Group the keys of a tree/debate record by the category of the matching
 * argument (looked up by slug). Keys without a matching argument fall back
 * to an "Other" group so the picker never silently drops an entry.
 */
function buildPickerCategories(keys: string[]): PickerCategory[] {
  const byCategory = new Map<string, PickerCategory>();

  keys.forEach((key) => {
    const arg = allArguments.find((a) => a.slug === key);
    const categoryId = arg?.category ?? OTHER_CATEGORY_ID;
    const categoryInfo = categories.find((c) => c.id === categoryId);
    const categoryName = categoryInfo?.name ?? 'Other';

    if (!byCategory.has(categoryId)) {
      byCategory.set(categoryId, { id: categoryId, name: categoryName, entries: [] });
    }
    byCategory.get(categoryId)!.entries.push({
      key,
      name: arg?.name ?? key,
      categoryId,
    });
  });

  // Preserve the canonical category order, then append any "Other" group last.
  const ordered: PickerCategory[] = [];
  categories.forEach((c) => {
    const group = byCategory.get(c.id);
    if (group) ordered.push(group);
  });
  const other = byCategory.get(OTHER_CATEGORY_ID);
  if (other) ordered.push(other);

  return ordered;
}

const strengthColors = {
  strong: { bg: 'bg-accent-green/10', border: 'border-accent-green/20', dot: 'bg-accent-green', label: 'Strong' },
  moderate: { bg: 'bg-accent-amber/10', border: 'border-accent-amber/20', dot: 'bg-accent-amber', label: 'Moderate' },
  contested: { bg: 'bg-accent-red/10', border: 'border-accent-red/20', dot: 'bg-accent-red', label: 'Contested' },
};

function DebateModeInner() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const debateKeys = useMemo(() => Object.keys(allDebates), []);
  const pickerCategories = useMemo(() => buildPickerCategories(debateKeys), [debateKeys]);
  const paramDebate = searchParams.get('debate');
  const activeKey = paramDebate && allDebates[paramDebate] ? paramDebate : DEFAULT_DEBATE;
  const debate = allDebates[activeKey];

  const activeCategoryId = useMemo(
    () => pickerCategories.find((c) => c.entries.some((e) => e.key === activeKey))?.id ?? pickerCategories[0]?.id,
    [pickerCategories, activeKey]
  );
  const [selectedCategoryId, setSelectedCategoryId] = useState(activeCategoryId);

  // Keep the category selector in sync when the active debate changes (e.g. via deep link or cross-link).
  useEffect(() => {
    setSelectedCategoryId(activeCategoryId);
  }, [activeCategoryId]);

  const selectedCategory = pickerCategories.find((c) => c.id === selectedCategoryId) ?? pickerCategories[0];

  const [currentRound, setCurrentRound] = useState(0);
  const round = debate.rounds[currentRound];
  const { lens, hydrated } = useLens();

  const handleSelectDebate = useCallback(
    (key: string) => {
      setCurrentRound(0);
      const params = new URLSearchParams(searchParams.toString());
      params.set('debate', key);
      router.replace(`${pathname}?${params.toString()}`);
    },
    [pathname, router, searchParams]
  );

  // Cross-link to a matching argument tree, if one exists for this debate key.
  const matchingTree = allTrees[activeKey];

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 border-b border-border bg-bg-secondary/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/explore" className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-glass transition-colors">
              <ArrowLeft size={18} />
            </Link>
            <Swords size={20} style={{ color: 'var(--color-accent-gold)' }} />
            <div>
              <Eyebrow className="mb-1">EXPLORE · DEBATE MODE</Eyebrow>
              <h1 className="t-h1" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>{debate.title}</h1>
            </div>
          </div>
          {/* Round Navigator */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentRound(Math.max(0, currentRound - 1))}
              disabled={currentRound === 0}
              className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-glass transition-colors disabled:opacity-30"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-1">
              {debate.rounds.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentRound(i)}
                  className={`w-8 h-8 rounded-lg text-sm font-medium transition-all ${
                    i === currentRound
                      ? 'bg-accent-gold text-bg-primary'
                      : 'bg-surface-glass text-text-muted hover:text-text-primary'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() => setCurrentRound(Math.min(debate.rounds.length - 1, currentRound + 1))}
              disabled={currentRound === debate.rounds.length - 1}
              className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-glass transition-colors disabled:opacity-30"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Category + debate selector + cross-link */}
      <div className="px-4 sm:px-6 lg:px-8 py-3 border-b border-border bg-bg-primary">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap flex-1 min-w-0">
            {/* Category dropdown */}
            <div className="relative">
              <select
                value={selectedCategoryId}
                onChange={(e) => setSelectedCategoryId(e.target.value)}
                aria-label="Argument category"
                className="appearance-none cursor-pointer"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  padding: '6px 30px 6px 14px',
                  borderRadius: '9999px',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-muted)',
                  background: 'transparent',
                }}
              >
                {pickerCategories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={12}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                style={{ color: 'var(--color-text-muted)' }}
              />
            </div>

            {/* Debate dropdown, scoped to the selected category */}
            <div className="relative">
              <select
                value={activeKey}
                onChange={(e) => handleSelectDebate(e.target.value)}
                aria-label="Debate"
                className="appearance-none cursor-pointer max-w-[65vw] sm:max-w-xs"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '6px 30px 6px 14px',
                  borderRadius: '9999px',
                  border: '1px solid var(--color-accent-gold)',
                  color: 'var(--color-bg-primary)',
                  background: 'var(--color-accent-gold)',
                }}
              >
                {(selectedCategory?.entries ?? []).map((entry) => (
                  <option key={entry.key} value={entry.key}>
                    {entry.name}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={12}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                style={{ color: 'var(--color-bg-primary)' }}
              />
            </div>
          </div>
          {matchingTree && (
            <Link
              href={`/explore/argument-tree?tree=${activeKey}`}
              className="flex items-center gap-2 text-xs hover:opacity-80 transition-opacity"
              style={{
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-accent-gold)',
              }}
            >
              <TreePine size={14} />
              View the argument tree →
            </Link>
          )}
        </div>
      </div>

      {/* Depth Meter */}
      <div className="px-4 sm:px-6 lg:px-8 py-2 border-b border-border bg-bg-primary">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <span className="text-xs text-text-muted">Depth:</span>
          <div className="flex-1 h-2 bg-bg-elevated rounded-full overflow-hidden max-w-xs">
            <div
              className="h-full bg-gradient-to-r from-accent-gold to-accent-amber rounded-full transition-all duration-500"
              style={{ width: `${((currentRound + 1) / debate.rounds.length) * 100}%` }}
            />
          </div>
          <span className="text-xs text-text-muted">Round {currentRound + 1} of {debate.rounds.length}</span>
        </div>
      </div>

      {/* Lens-contextual tip */}
      {hydrated && (lens === 'seeker' || lens === 'defender') && (
        <div
          className="px-4 sm:px-6 lg:px-8 py-2 border-b border-border"
          style={{ background: 'rgba(212,168,83,0.04)' }}
        >
          <div className="max-w-7xl mx-auto">
            <p className="text-xs" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
              {lens === 'seeker'
                ? 'Each round shows the strongest argument for and against. Green = widely accepted. Amber = contested. Red = disputed among scholars.'
                : 'Defender tip: focus on contested (red) evidence — these are the points opponents will attack. Prepare your responses for those first.'}
            </p>
          </div>
        </div>
      )}

      {/* Debate Panels */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeKey}-${currentRound}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-6 h-full"
          >
            {/* FOR Panel */}
            <div className="rounded-2xl border border-accent-blue/20 bg-accent-blue/5 p-6 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-accent-blue" />
                <h2 className="font-bold text-accent-blue-light uppercase text-sm tracking-wider">For ({debate.forLabel})</h2>
              </div>
              <p className="text-text-primary font-serif leading-relaxed mb-5">{round.forSide.claim}</p>
              <div className="space-y-2 mt-auto">
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Supporting Evidence</p>
                {round.forSide.evidence.map((ev, i) => {
                  const s = strengthColors[ev.strength];
                  return (
                    <div key={i} className={`p-3 rounded-lg border ${s.bg} ${s.border}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`w-2 h-2 rounded-full ${s.dot}`} />
                        <span className="text-[10px] text-text-muted uppercase">{s.label}</span>
                      </div>
                      <p className="text-text-secondary text-sm">{ev.text}</p>
                      <p className="text-[10px] text-text-muted mt-1">{ev.source}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* AGAINST Panel */}
            <div className="rounded-2xl border border-accent-red/20 bg-accent-red/5 p-6 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-accent-red" />
                <h2 className="font-bold text-red-300 uppercase text-sm tracking-wider">Against ({debate.againstLabel})</h2>
              </div>
              <p className="text-text-primary font-serif leading-relaxed mb-5">{round.againstSide.claim}</p>
              <div className="space-y-2 mt-auto">
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Supporting Evidence</p>
                {round.againstSide.evidence.map((ev, i) => {
                  const s = strengthColors[ev.strength];
                  return (
                    <div key={i} className={`p-3 rounded-lg border ${s.bg} ${s.border}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`w-2 h-2 rounded-full ${s.dot}`} />
                        <span className="text-[10px] text-text-muted uppercase">{s.label}</span>
                      </div>
                      <p className="text-text-secondary text-sm">{ev.text}</p>
                      <p className="text-[10px] text-text-muted mt-1">{ev.source}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Legend */}
      <div className="px-4 sm:px-6 lg:px-8 py-3 border-t border-border bg-bg-secondary/50">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6 text-xs text-text-muted">
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-accent-green" /> Strong evidence</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-accent-amber" /> Moderate</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-accent-red" /> Contested</span>
        </div>
      </div>
    </div>
  );
}

export default function DebateModePage() {
  return (
    <Suspense fallback={null}>
      <DebateModeInner />
    </Suspense>
  );
}
