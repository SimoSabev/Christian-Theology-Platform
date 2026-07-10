'use client';

import { Suspense, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from '@/i18n/navigation';
import { traditions, doctrineComparisons } from '@/data/comparisons';
import type { TraditionInfo, DoctrineComparison } from '@/data/comparisons';
import { Eyebrow, SectionMark } from '@/components/ornament';
import CodexCard from '@/components/reader/CodexCard';
import RevealOnScroll from '@/components/motion/RevealOnScroll';

const TRAD_GLYPHS: Record<string, 'cross' | 'patee' | 'longCross'> = {
  orthodoxy: 'cross',
  catholicism: 'patee',
  protestantism: 'longCross',
};

type DoctrineEntry = DoctrineComparison['traditions'][string];

/**
 * Normalize a position summary for equivalence comparison.
 * Two traditions "agree" when their normalized position strings match exactly.
 * Positions like "Varies widely" are treated as inherently non-agreeing.
 */
function normalizePosition(position: string): string {
  return position
    .toLowerCase()
    .replace(/[().,/]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const NON_COMMITTAL = new Set(['varies widely', 'no stated position']);

function positionsAgree(a?: DoctrineEntry, b?: DoctrineEntry): boolean {
  if (!a || !b) return false;
  const na = normalizePosition(a.position);
  const nb = normalizePosition(b.position);
  if (NON_COMMITTAL.has(na) || NON_COMMITTAL.has(nb)) return false;
  return na === nb;
}

function Sources({ sources }: { sources: string[] }) {
  if (!sources.length) return null;
  return (
    <div className="mt-3 flex flex-wrap gap-1.5">
      {sources.map((s) => (
        <span
          key={s}
          className="t-meta px-1.5 py-0.5"
          style={{
            border: '1px solid var(--color-border)',
            borderRadius: 2,
            fontSize: '0.625rem',
            lineHeight: 1.3,
          }}
        >
          {s}
        </span>
      ))}
    </div>
  );
}

function PositionColumn({
  trad,
  entry,
}: {
  trad: TraditionInfo;
  entry?: DoctrineEntry;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <SectionMark glyph={TRAD_GLYPHS[trad.id] ?? 'diamond'} size={16} />
        <span className="t-caps text-xs" style={{ color: 'var(--color-text-primary)' }}>
          {trad.shortName}
        </span>
      </div>
      {entry ? (
        <>
          <div
            className="t-eyebrow mb-2"
            style={{ color: 'var(--color-text-muted)', fontSize: '0.6rem', letterSpacing: '0.22em' }}
          >
            {entry.position}
          </div>
          <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
            {entry.details}
          </p>
          <Sources sources={entry.keySources} />
        </>
      ) : (
        <p className="t-body text-sm italic" style={{ color: 'var(--color-text-muted)' }}>
          No stated position.
        </p>
      )}
    </div>
  );
}

function AgreementBadge({ agree }: { agree: boolean }) {
  const color = agree ? 'var(--color-accent-green)' : 'var(--color-accent-gold)';
  return (
    <span
      className="t-eyebrow px-2 py-0.5 shrink-0"
      style={{
        color,
        border: `1px solid ${color}`,
        borderRadius: 2,
        fontSize: '0.6rem',
        letterSpacing: '0.22em',
        background: `color-mix(in srgb, ${color} 8%, transparent)`,
      }}
    >
      {agree ? 'AGREE' : 'DIFFER'}
    </span>
  );
}

function TraditionSelector({
  label,
  selectedId,
  disabledId,
  onSelect,
}: {
  label: string;
  selectedId: string;
  disabledId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div>
      <Eyebrow className="mb-3">{label}</Eyebrow>
      <div className="flex flex-wrap gap-2">
        {traditions.map((trad) => {
          const isSelected = trad.id === selectedId;
          const isDisabled = trad.id === disabledId;
          return (
            <button
              key={trad.id}
              type="button"
              disabled={isDisabled}
              onClick={() => onSelect(trad.id)}
              className="t-caps px-3 py-2 text-xs transition-colors"
              style={{
                borderRadius: 3,
                border: `1px solid ${isSelected ? 'var(--color-accent-gold)' : 'var(--color-border)'}`,
                color: isSelected ? 'var(--color-accent-gold)' : 'var(--color-text-secondary)',
                background: isSelected
                  ? 'color-mix(in srgb, var(--color-accent-gold) 10%, transparent)'
                  : 'transparent',
                opacity: isDisabled ? 0.35 : 1,
                cursor: isDisabled ? 'not-allowed' : 'pointer',
              }}
              aria-pressed={isSelected}
            >
              {trad.shortName}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function DoctrineDiffInner() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const defaultA = traditions[0]?.id ?? '';
  const defaultB = traditions[1]?.id ?? '';

  const validIds = useMemo(() => new Set(traditions.map((t) => t.id)), []);

  const rawA = searchParams.get('a');
  const rawB = searchParams.get('b');
  const idA = rawA && validIds.has(rawA) ? rawA : defaultA;
  // Ensure B differs from A; fall back to the first tradition that isn't A.
  let idB = rawB && validIds.has(rawB) ? rawB : defaultB;
  if (idB === idA) {
    idB = traditions.find((t) => t.id !== idA)?.id ?? defaultB;
  }

  const tradA = traditions.find((t) => t.id === idA)!;
  const tradB = traditions.find((t) => t.id === idB)!;

  const updateParams = (nextA: string, nextB: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('a', nextA);
    params.set('b', nextB);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const handleSelectA = (id: string) => {
    const nextB = id === idB ? traditions.find((t) => t.id !== id)?.id ?? idB : idB;
    updateParams(id, nextB);
  };

  const handleSelectB = (id: string) => {
    const nextA = id === idA ? traditions.find((t) => t.id !== id)?.id ?? idA : idA;
    updateParams(nextA, id);
  };

  const rows = useMemo(
    () =>
      doctrineComparisons.map((doc) => {
        const entryA = doc.traditions[idA];
        const entryB = doc.traditions[idB];
        return { doc, entryA, entryB, agree: positionsAgree(entryA, entryB) };
      }),
    [idA, idB],
  );

  const differCount = rows.filter((r) => !r.agree).length;
  const total = rows.length;

  return (
    <div>
      {/* Selectors */}
      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        <TraditionSelector
          label="Tradition A"
          selectedId={idA}
          disabledId={idB}
          onSelect={handleSelectA}
        />
        <TraditionSelector
          label="Tradition B"
          selectedId={idB}
          disabledId={idA}
          onSelect={handleSelectB}
        />
      </div>

      {/* Summary strip */}
      <div
        className="mb-10 p-4 flex items-center gap-3"
        style={{
          border: '1px solid var(--color-border)',
          borderLeft: '4px solid var(--color-accent-gold)',
          background: 'color-mix(in srgb, var(--color-accent-gold) 5%, transparent)',
          borderRadius: 3,
        }}
      >
        <span className="t-h2" style={{ fontSize: '1.75rem', color: 'var(--color-accent-gold)', lineHeight: 1 }}>
          {differCount}
        </span>
        <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>
          of <strong style={{ color: 'var(--color-text-primary)' }}>{total}</strong> doctrines differ between{' '}
          <strong style={{ color: 'var(--color-text-primary)' }}>{tradA.shortName}</strong> and{' '}
          <strong style={{ color: 'var(--color-text-primary)' }}>{tradB.shortName}</strong>.
        </p>
      </div>

      {/* Comparison rows */}
      <div className="space-y-5">
        {rows.map(({ doc, entryA, entryB, agree }, i) => (
          <RevealOnScroll key={doc.id} delay={Math.min(i * 0.05, 0.3)}>
            <CodexCard
              className="h-full"
              as="article"
              style={{
                borderLeft: `3px solid ${agree ? 'var(--color-accent-green)' : 'var(--color-accent-gold)'}`,
              }}
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <h3 className="t-caps text-sm" style={{ color: 'var(--color-text-primary)' }}>
                  {doc.name}
                </h3>
                <AgreementBadge agree={agree} />
              </div>
              <div
                className="grid gap-6 sm:gap-8"
                style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 15rem), 1fr))' }}
              >
                <PositionColumn trad={tradA} entry={entryA} />
                <PositionColumn trad={tradB} entry={entryB} />
              </div>
            </CodexCard>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}

export default function DoctrineDiff() {
  return (
    <Suspense fallback={<div className="t-meta" style={{ color: 'var(--color-text-muted)' }}>Loading comparison…</div>}>
      <DoctrineDiffInner />
    </Suspense>
  );
}
