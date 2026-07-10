# Phases 2–5 + Bug Fixes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Complete the bespoke redesign by fixing active build warnings, then implementing Phases 2–5: Argument page components, Compare page views, Sources/Manuscripts redesign, and Explore/Semantics/landing page cleanup.

**Architecture:** Each phase adds new React components under `src/components/` and rewires the corresponding page(s). Existing pages keep their data-fetching logic; the redesign replaces their rendering. Lens-aware behaviour is layered via `useLens()` and `[data-lens="…"]` attribute selectors on `<html>`. No new data modules or routing changes are needed.

**Tech Stack:** Next.js 16 (App Router), React 19, Tailwind CSS 4 (`@theme` in `globals.css`), `next-intl` (27 locales), `framer-motion`, `fuse.js`, `lucide-react`, `@xyflow/react`, TypeScript 5.

**Testing approach:** No test runner. Verification per task:
- `npx tsc --noEmit` — type check (must pass)
- `npm run lint` — ESLint (must pass)
- `npm run build` — production build smoke (after major tasks)
- Manual visual check: `npm run dev`, open `http://localhost:3000/en`

**Source spec:** `docs/superpowers/specs/2026-04-19-bespoke-redesign-design.md`

---

## File Map

### New files

```
src/components/
  reader/
    PremiseBlock.tsx          # Formal P1/P2/∴ display block
    ObjectionGrid.tsx         # Battle-card objection/response pairs
    ActionToolbar.tsx         # Copy/cite/share actions (lens-aware)
    ProponentRow.tsx          # Horizontal proponent chips
    CitationList.tsx          # Bullet bibliography
    ArgumentSidebar.tsx       # Left-column sticky TOC for argument pages
  compare/
    CompareViewSwitcher.tsx   # Tab: matrix | triptych | diff
    DoctrinalMatrix.tsx       # Grid: traditions × doctrines
    TriptychPanels.tsx        # Altar-piece panels per doctrine
    DoctrineDiff.tsx          # Git-diff style two-tradition compare
  command/search/
    versePatternDetect.ts     # Regex + ref parse for scripture queries
```

### Modified files

```
src/components/command/CommandPalette.tsx
src/app/[locale]/defend/page.tsx
src/app/[locale]/defend/atheism/[category]/page.tsx
src/app/[locale]/defend/atheism/[category]/[argument]/page.tsx
src/app/[locale]/defend/cults/page.tsx
src/app/[locale]/compare/page.tsx
src/app/[locale]/compare/[tradition]/page.tsx
src/app/[locale]/compare/side-by-side/page.tsx
src/app/[locale]/sources/page.tsx
src/app/[locale]/sources/manuscripts/page.tsx
src/app/[locale]/sources/manuscripts/[id]/page.tsx
src/app/[locale]/sources/church-fathers/page.tsx
src/app/[locale]/sources/councils/page.tsx
src/components/manuscripts/InterlinearReader.tsx
src/app/[locale]/explore/page.tsx
src/app/[locale]/explore/argument-tree/page.tsx
src/app/[locale]/explore/debate-mode/page.tsx
src/app/[locale]/explore/timeline/page.tsx
src/app/[locale]/semantics/page.tsx
messages/{17 locales}.json   # Bug fix: add nav.semantics
```

---

## Task 1: Fix missing `nav.semantics` in 17 locale files

**Files:**
- Modify: `messages/am.json`, `messages/bg.json`, `messages/el.json`, `messages/fa.json`, `messages/fil.json`, `messages/hi.json`, `messages/id.json`, `messages/it.json`, `messages/ja.json`, `messages/nl.json`, `messages/pl.json`, `messages/ro.json`, `messages/sw.json`, `messages/tr.json`, `messages/uk.json`, `messages/vi.json`, `messages/zh-TW.json`

- [ ] **Step 1: Run the fix one-liner**

```bash
node -e "
const fs = require('fs');
const path = require('path');
const missing = ['am','bg','el','fa','fil','hi','id','it','ja','nl','pl','ro','sw','tr','uk','vi','zh-TW'];
for (const lang of missing) {
  const p = path.join('messages', lang + '.json');
  const obj = JSON.parse(fs.readFileSync(p, 'utf8'));
  if (!obj.nav) obj.nav = {};
  obj.nav.semantics = 'Semantics';
  fs.writeFileSync(p, JSON.stringify(obj, null, 2) + '\n');
  console.log('fixed', lang);
}
"
```

Expected: prints `fixed <lang>` for each of the 17 locales.

- [ ] **Step 2: Validate JSON**

```bash
node -e "
const fs = require('fs');
let ok = true;
for (const f of fs.readdirSync('messages')) {
  if (!f.endsWith('.json') || f === 'schema.json') continue;
  try { JSON.parse(fs.readFileSync('messages/' + f, 'utf8')); }
  catch(e) { console.error('INVALID:', f, e.message); ok = false; }
}
if (ok) console.log('All JSON valid');
"
```

Expected: `All JSON valid`

- [ ] **Step 3: Build — confirm zero nav.semantics warnings**

```bash
npm run build 2>&1 | grep "nav.semantics" | wc -l
```

Expected: `0`

- [ ] **Step 4: Commit**

```bash
git add messages/
git commit -m "fix(i18n): add missing nav.semantics key to 17 locale files"
```

---

## Task 2: Apply foundations to Defend landing page (remove emoji)

**Files:**
- Modify: `src/app/[locale]/defend/page.tsx`

Context: Current file uses emoji (🌌 💭 🔬 ⚖️ 📜) as icons and old `rounded-2xl` gradient card pattern. The spec says "No emoji nodes" and requires `SectionMark` glyphs and `CodexCard` surfaces.

- [ ] **Step 1: Read the current file**

```bash
cat src/app/[locale]/defend/page.tsx
```

- [ ] **Step 2: Replace with redesigned version**

```tsx
// src/app/[locale]/defend/page.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { categories } from '@/data/arguments';
import { Eyebrow, KeystoneDivider, SectionMark } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';

const CATEGORY_GLYPHS: Record<string, 'cross' | 'patee' | 'longCross' | 'plusCircle' | 'chiRho' | 'section' | 'diamond'> = {
  cosmological: 'plusCircle',
  ontological:  'chiRho',
  teleological: 'cross',
  moral:        'patee',
  historical:   'longCross',
};

export default function DefendPage() {
  const t = useTranslations('defend');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <RevealOnScroll>
        <div className="text-center mb-16">
          <Eyebrow className="mb-4">{t('eyebrow') ?? 'APOLOGETICS'}</Eyebrow>
          <h1 className="t-h1 mb-4" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}>{t('title')}</h1>
          <p className="t-body max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)', fontSize: '1.0625rem' }}>{t('subtitle')}</p>
        </div>
      </RevealOnScroll>

      <KeystoneDivider className="mb-12" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {categories.map((cat, i) => (
          <RevealOnScroll key={cat.id} delay={i * 0.08}>
            <Link href={`/defend/atheism/${cat.id}`} className="block">
              <CodexCard className="h-full" as="article">
                <div className="mb-4">
                  <SectionMark glyph={CATEGORY_GLYPHS[cat.id] ?? 'diamond'} size={22} />
                </div>
                <h2 className="t-caps text-sm mb-2" style={{ color: 'var(--color-text-primary)' }}>{cat.name}</h2>
                <p className="t-body text-sm mb-4" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{cat.description}</p>
                <div className="t-eyebrow" style={{ color: 'var(--color-accent-gold)' }}>
                  {cat.argumentCount} {cat.argumentCount === 1 ? 'argument' : 'arguments'} →
                </div>
              </CodexCard>
            </Link>
          </RevealOnScroll>
        ))}
      </div>

      <KeystoneDivider />

      <RevealOnScroll>
        <div className="mt-12 text-center">
          <Eyebrow className="mb-3">ALSO</Eyebrow>
          <Link
            href="/defend/cults"
            className="inline-block px-6 py-3 t-caps text-xs border"
            style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}
          >
            Against Cults & Heresies
          </Link>
        </div>
      </RevealOnScroll>
    </div>
  );
}
```

- [ ] **Step 3: Type-check + lint**

```bash
npx tsc --noEmit && npm run lint
```

Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add src/app/[locale]/defend/page.tsx
git commit -m "feat(defend): apply foundations, remove emoji, use SectionMark + CodexCard"
```

---

## Task 3: Apply foundations to Explore, Compare, and Sources landing pages

**Files:**
- Modify: `src/app/[locale]/explore/page.tsx`
- Modify: `src/app/[locale]/compare/page.tsx`
- Modify: `src/app/[locale]/sources/page.tsx`

- [ ] **Step 1: Read all three files**

```bash
cat src/app/[locale]/explore/page.tsx
cat src/app/[locale]/compare/page.tsx
cat src/app/[locale]/sources/page.tsx
```

- [ ] **Step 2: Replace `src/app/[locale]/explore/page.tsx`**

```tsx
// src/app/[locale]/explore/page.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Eyebrow, KeystoneDivider, SectionMark } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';

const TOOLS = [
  { id: 'argument-tree', glyph: 'cross'      as const, tKey: 'argumentTree' },
  { id: 'debate-mode',   glyph: 'patee'      as const, tKey: 'debateMode'   },
  { id: 'timeline',      glyph: 'plusCircle' as const, tKey: 'timeline'      },
];

export default function ExplorePage() {
  const t = useTranslations('explore');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <RevealOnScroll>
        <div className="text-center mb-16">
          <Eyebrow className="mb-4">{t('eyebrow') ?? 'TOOLS'}</Eyebrow>
          <h1 className="t-h1 mb-4" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}>{t('title')}</h1>
          <p className="t-body max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)', fontSize: '1.0625rem' }}>{t('subtitle')}</p>
        </div>
      </RevealOnScroll>

      <KeystoneDivider className="mb-12" />

      <div className="grid md:grid-cols-3 gap-5">
        {TOOLS.map(({ id, glyph, tKey }, i) => (
          <RevealOnScroll key={id} delay={i * 0.1}>
            <Link href={`/explore/${id}`} className="block">
              <CodexCard className="h-full text-center" as="article">
                <div className="mb-4 flex justify-center">
                  <SectionMark glyph={glyph} size={28} />
                </div>
                <h2 className="t-caps text-sm mb-2" style={{ color: 'var(--color-text-primary)' }}>{t(`${tKey}.title` as Parameters<typeof t>[0])}</h2>
                <p className="t-body text-sm mb-5" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{t(`${tKey}.desc` as Parameters<typeof t>[0])}</p>
                <span className="t-eyebrow" style={{ color: 'var(--color-accent-gold)' }}>Launch →</span>
              </CodexCard>
            </Link>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Replace `src/app/[locale]/compare/page.tsx`**

```tsx
// src/app/[locale]/compare/page.tsx
'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { traditions } from '@/data/comparisons';
import { Eyebrow, KeystoneDivider, SectionMark } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';
import CompareViewSwitcher from '@/components/compare/CompareViewSwitcher';
import DoctrinalMatrix from '@/components/compare/DoctrinalMatrix';
import TriptychPanels from '@/components/compare/TriptychPanels';
import DoctrineDiff from '@/components/compare/DoctrineDiff';

type View = 'matrix' | 'triptych' | 'diff';

const TRADITION_GLYPHS: Record<string, 'cross' | 'patee' | 'longCross'> = {
  orthodoxy:     'cross',
  catholicism:   'patee',
  protestantism: 'longCross',
};

export default function ComparePage() {
  const t = useTranslations('compare');
  const [view, setView] = useState<View>('matrix');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <RevealOnScroll>
        <div className="text-center mb-12">
          <Eyebrow className="mb-4">{t('eyebrow') ?? 'TRADITIONS'}</Eyebrow>
          <h1 className="t-h1 mb-4" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}>{t('title')}</h1>
          <p className="t-body max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)', fontSize: '1.0625rem' }}>{t('subtitle')}</p>
        </div>
      </RevealOnScroll>

      <div className="grid md:grid-cols-3 gap-5 mb-10">
        {traditions.map((trad, i) => (
          <RevealOnScroll key={trad.id} delay={i * 0.08}>
            <Link href={`/compare/${trad.id}`} className="block">
              <CodexCard className="h-full" as="article">
                <div className="mb-3">
                  <SectionMark glyph={TRADITION_GLYPHS[trad.id] ?? 'diamond'} size={20} />
                </div>
                <h2 className="t-caps text-sm mb-2" style={{ color: 'var(--color-text-primary)' }}>{trad.shortName}</h2>
                <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{trad.description.slice(0, 120)}…</p>
                <div className="t-eyebrow mt-3" style={{ color: 'var(--color-accent-gold)' }}>Read more →</div>
              </CodexCard>
            </Link>
          </RevealOnScroll>
        ))}
      </div>

      <KeystoneDivider className="mb-8" />

      <div className="flex justify-center mb-8">
        <CompareViewSwitcher view={view} onChange={setView} />
      </div>

      {view === 'matrix'   && <DoctrinalMatrix />}
      {view === 'triptych' && <TriptychPanels />}
      {view === 'diff'     && <DoctrineDiff />}
    </div>
  );
}
```

> Note: `CompareViewSwitcher`, `DoctrinalMatrix`, `TriptychPanels`, `DoctrineDiff` are created in Tasks 11–12. If you work tasks out of order, stub them temporarily.

- [ ] **Step 4: Replace `src/app/[locale]/sources/page.tsx`**

```tsx
// src/app/[locale]/sources/page.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { manuscripts, churchFathers, councils } from '@/data/sources';
import { Eyebrow, KeystoneDivider, SectionMark } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';

const CATEGORIES = [
  { id: 'manuscripts',    labelKey: 'manuscripts',   descKey: 'manuscriptsDesc',   glyph: 'section'  as const, count: () => manuscripts.length  },
  { id: 'church-fathers', labelKey: 'churchFathers', descKey: 'churchFathersDesc', glyph: 'cross'    as const, count: () => churchFathers.length },
  { id: 'councils',       labelKey: 'councils',      descKey: 'councilsDesc',      glyph: 'chiRho'   as const, count: () => councils.length      },
];

export default function SourcesPage() {
  const t = useTranslations('sources');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <RevealOnScroll>
        <div className="text-center mb-16">
          <Eyebrow className="mb-4">{t('eyebrow') ?? 'PRIMARY SOURCES'}</Eyebrow>
          <h1 className="t-h1 mb-4" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}>{t('title')}</h1>
          <p className="t-body max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)', fontSize: '1.0625rem' }}>{t('subtitle')}</p>
        </div>
      </RevealOnScroll>

      <KeystoneDivider className="mb-12" />

      <div className="grid md:grid-cols-3 gap-5">
        {CATEGORIES.map(({ id, labelKey, descKey, glyph, count }, i) => (
          <RevealOnScroll key={id} delay={i * 0.1}>
            <Link href={`/sources/${id}`} className="block">
              <CodexCard className="h-full" as="article">
                <div className="mb-4">
                  <SectionMark glyph={glyph} size={22} />
                </div>
                <h2 className="t-caps text-sm mb-2" style={{ color: 'var(--color-text-primary)' }}>{t(labelKey as Parameters<typeof t>[0])}</h2>
                <p className="t-body text-sm mb-4" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{t(descKey as Parameters<typeof t>[0])}</p>
                <div className="t-eyebrow" style={{ color: 'var(--color-accent-gold)' }}>{count()} items →</div>
              </CodexCard>
            </Link>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 5: Type-check + lint + build**

```bash
npx tsc --noEmit && npm run lint && npm run build
```

Expected: PASS (zero nav.semantics warnings after Task 1).

- [ ] **Step 6: Commit**

```bash
git add src/app/[locale]/explore/page.tsx src/app/[locale]/compare/page.tsx src/app/[locale]/sources/page.tsx
git commit -m "feat(landing-pages): apply Phase 1 foundations to Explore, Compare, Sources landings"
```

---

## Task 4: `PremiseBlock` component

**Files:**
- Create: `src/components/reader/PremiseBlock.tsx`

- [ ] **Step 1: Create the file**

```tsx
// src/components/reader/PremiseBlock.tsx
import type { ArgumentPremise } from '@/data/arguments/types';
import { RuleHairline } from '@/components/ornament';

type Props = {
  premises: ArgumentPremise[];
  conclusion: string;
  className?: string;
};

export default function PremiseBlock({ premises, conclusion, className = '' }: Props) {
  return (
    <div
      className={`px-6 py-5 ${className}`}
      style={{
        border: '1px solid var(--color-accent-gold)',
        borderRadius: 4,
        background: 'rgba(212, 168, 83, 0.04)',
      }}
    >
      {premises.map((p, i) => (
        <p key={p.id} className="t-body mb-2" style={{ color: 'var(--color-text-secondary)' }}>
          <strong style={{ color: 'var(--color-accent-gold)', fontFamily: 'var(--font-display)', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
            P{i + 1}.
          </strong>{' '}
          {p.text}
        </p>
      ))}
      <RuleHairline className="my-3" />
      <p className="t-body" style={{ color: 'var(--color-accent-gold-light)' }}>
        <strong style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', letterSpacing: '0.1em' }}>∴</strong>{' '}
        {conclusion}
      </p>
    </div>
  );
}
```

- [ ] **Step 2: Type-check**

```bash
npx tsc --noEmit
```

Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/components/reader/PremiseBlock.tsx
git commit -m "feat(reader): add PremiseBlock formal argument display component"
```

---

## Task 5: `ObjectionGrid` component

**Files:**
- Create: `src/components/reader/ObjectionGrid.tsx`

- [ ] **Step 1: Create the file**

```tsx
// src/components/reader/ObjectionGrid.tsx
'use client';

import { useState } from 'react';
import type { Objection } from '@/data/arguments/types';

type Props = { objections: Objection[]; className?: string };

export default function ObjectionGrid({ objections, className = '' }: Props) {
  const [open, setOpen] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  return (
    <div className={`space-y-3 ${className}`}>
      {objections.map((obj) => {
        const isOpen = open.has(obj.id);
        return (
          <div key={obj.id} style={{ border: '1px solid var(--color-border)', borderRadius: 4, overflow: 'hidden' }}>
            <button
              onClick={() => toggle(obj.id)}
              className="w-full flex items-center justify-between px-5 py-4 text-start"
              style={{ background: isOpen ? 'rgba(212, 168, 83, 0.04)' : 'transparent' }}
            >
              <div className="flex items-center gap-3">
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-accent-red)', flexShrink: 0, display: 'inline-block' }} />
                <span className="t-body text-sm" style={{ color: 'var(--color-text-primary)' }}>{obj.title}</span>
              </div>
              <span style={{ color: 'var(--color-text-muted)', fontSize: 12 }}>{isOpen ? '▲' : '▼'}</span>
            </button>

            {isOpen && (
              <div className="px-5 pb-5" style={{ borderTop: '1px solid var(--color-border)' }}>
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  <div className="px-4 py-3" style={{ border: '1px solid rgba(239,68,68,0.25)', borderRadius: 4, background: 'rgba(239,68,68,0.04)' }}>
                    <div className="t-eyebrow mb-2" style={{ color: 'var(--color-accent-red)' }}>OBJECTION</div>
                    <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{obj.description}</p>
                  </div>
                  <div className="px-4 py-3" style={{ border: '1px solid rgba(20,184,166,0.25)', borderRadius: 4, background: 'rgba(20,184,166,0.04)' }}>
                    <div className="t-eyebrow mb-2" style={{ color: 'var(--color-accent-teal)' }}>RESPONSE</div>
                    <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{obj.response}</p>
                  </div>
                </div>
                {obj.sources.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {obj.sources.map((s) => (
                      <span key={s} className="t-meta px-2 py-1" style={{ border: '1px solid var(--color-border)', borderRadius: 2 }}>{s}</span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
```

- [ ] **Step 2: Type-check**

```bash
npx tsc --noEmit
```

Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/components/reader/ObjectionGrid.tsx
git commit -m "feat(reader): add ObjectionGrid battle-card component"
```

---

## Task 6: `ActionToolbar` component

**Files:**
- Create: `src/components/reader/ActionToolbar.tsx`

- [ ] **Step 1: Create the file**

```tsx
// src/components/reader/ActionToolbar.tsx
'use client';

import { useState } from 'react';
import { Copy, BookOpen, Share2 } from 'lucide-react';
import { useLens } from '@/components/lens/useLens';

type Props = {
  argName: string;
  formattedArg: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function ActionToolbar({ argName, formattedArg, className = '', style }: Props) {
  const { lens } = useLens();
  const [copied, setCopied] = useState(false);
  const isDefender = lens === 'defender';

  function handleCopy() {
    navigator.clipboard.writeText(formattedArg).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function handleCite() {
    const citation = `${argName}. Study Theology Platform.`;
    navigator.clipboard.writeText(citation);
  }

  function handleShare() {
    if (typeof navigator.share !== 'undefined') {
      navigator.share({ title: argName, url: location.href });
    }
  }

  const btnStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: isDefender ? '8px 16px' : '6px 12px',
    border: '1px solid var(--color-border)',
    borderRadius: 2,
    fontFamily: 'var(--font-display)',
    fontSize: '0.625rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase' as const,
    color: 'var(--color-accent-gold)',
    background: 'transparent',
    cursor: 'pointer',
  };

  return (
    <div className={`flex flex-wrap gap-3 ${className}`} style={style}>
      <button onClick={handleCopy} style={btnStyle}>
        <Copy size={12} />
        {copied ? 'COPIED' : 'COPY ARGUMENT'}
      </button>
      <button onClick={handleCite} style={btnStyle}>
        <BookOpen size={12} />
        CITE
      </button>
      <button onClick={handleShare} style={btnStyle}>
        <Share2 size={12} />
        SHARE
      </button>
    </div>
  );
}
```

- [ ] **Step 2: Type-check**

```bash
npx tsc --noEmit
```

Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/components/reader/ActionToolbar.tsx
git commit -m "feat(reader): add ActionToolbar with copy/cite/share, lens-aware sizing"
```

---

## Task 7: `ProponentRow` and `CitationList` components

**Files:**
- Create: `src/components/reader/ProponentRow.tsx`
- Create: `src/components/reader/CitationList.tsx`

- [ ] **Step 1: Create `ProponentRow.tsx`**

```tsx
// src/components/reader/ProponentRow.tsx
type Proponent = { name: string; era: string };
type Props = { proponents: Proponent[]; className?: string };

export default function ProponentRow({ proponents, className = '' }: Props) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {proponents.map((p) => (
        <div
          key={p.name}
          className="t-body text-sm"
          style={{ border: '1px solid var(--color-border)', borderRadius: 2, padding: '6px 14px', color: 'var(--color-text-secondary)' }}
        >
          {p.name}
          <span className="t-meta ms-2" style={{ fontSize: '0.7rem' }}>({p.era})</span>
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Create `CitationList.tsx`**

```tsx
// src/components/reader/CitationList.tsx
type Props = { sources: string[]; className?: string };

export default function CitationList({ sources, className = '' }: Props) {
  return (
    <ul className={`space-y-2 ${className}`}>
      {sources.map((s) => (
        <li key={s} className="flex items-start gap-2 t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>
          <span style={{ color: 'var(--color-accent-gold)', marginTop: 4, flexShrink: 0 }}>•</span>
          {s}
        </li>
      ))}
    </ul>
  );
}
```

- [ ] **Step 3: Type-check**

```bash
npx tsc --noEmit
```

Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add src/components/reader/ProponentRow.tsx src/components/reader/CitationList.tsx
git commit -m "feat(reader): add ProponentRow + CitationList components"
```

---

## Task 8: `ArgumentSidebar` component

**Files:**
- Create: `src/components/reader/ArgumentSidebar.tsx`

- [ ] **Step 1: Create the file**

```tsx
// src/components/reader/ArgumentSidebar.tsx
'use client';

import { useEffect, useState } from 'react';
import { Link } from '@/i18n/navigation';
import type { Argument } from '@/data/arguments/types';
import { Eyebrow, RuleHairline } from '@/components/ornament';

type Props = {
  arg: Argument;
  categoryHref: string;
};

const SECTIONS = [
  { id: 'formal-statement',    label: 'FORMAL STATEMENT'    },
  { id: 'historical-background', label: 'HISTORICAL BACKGROUND' },
  { id: 'defense-of-premises', label: 'DEFENSE OF PREMISES' },
  { id: 'objections',          label: 'OBJECTIONS'          },
  { id: 'proponents',          label: 'PROPONENTS'          },
  { id: 'sources',             label: 'SOURCES'             },
];

export default function ArgumentSidebar({ arg, categoryHref }: Props) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) { setActive(entry.target.id); break; }
        }
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="hidden lg:block w-[220px] flex-shrink-0">
      <div className="sticky top-20">
        <Eyebrow className="mb-4">CONTENTS</Eyebrow>
        <nav>
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="block py-1.5 transition-colors"
              style={{
                color: active === s.id ? 'var(--color-accent-gold)' : 'var(--color-text-muted)',
                borderLeft: `2px solid ${active === s.id ? 'var(--color-accent-gold)' : 'transparent'}`,
                paddingLeft: 12,
                fontFamily: 'var(--font-display)',
                fontSize: '0.55rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              {s.label}
            </a>
          ))}
        </nav>

        {arg.relatedArguments.length > 0 && (
          <>
            <RuleHairline className="my-4" />
            <Eyebrow className="mb-3">RELATED</Eyebrow>
            <ul className="space-y-2">
              {arg.relatedArguments.map((slug) => (
                <li key={slug}>
                  <Link
                    href={`${categoryHref}/${slug}`}
                    className="block py-1 transition-colors"
                    style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)', fontSize: '0.7rem' }}
                  >
                    {slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())} →
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </aside>
  );
}
```

- [ ] **Step 2: Type-check**

```bash
npx tsc --noEmit
```

Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/components/reader/ArgumentSidebar.tsx
git commit -m "feat(reader): add ArgumentSidebar sticky TOC with IntersectionObserver active state"
```

---

## Task 9: Rewire argument page to Phase 2 design

**Files:**
- Modify: `src/app/[locale]/defend/atheism/[category]/[argument]/page.tsx`

- [ ] **Step 1: Replace the file**

```tsx
// src/app/[locale]/defend/atheism/[category]/[argument]/page.tsx
'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { getArgumentBySlug } from '@/data/arguments';
import { getSemanticDefensesByArgument } from '@/data/semantic-defense';
import SemanticDefenseSlideshow from '@/components/semantic/SemanticDefenseSlideshow';
import { Eyebrow, KeystoneDivider, DropCap } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import PremiseBlock from '@/components/reader/PremiseBlock';
import ObjectionGrid from '@/components/reader/ObjectionGrid';
import ActionToolbar from '@/components/reader/ActionToolbar';
import ProponentRow from '@/components/reader/ProponentRow';
import CitationList from '@/components/reader/CitationList';
import ArgumentSidebar from '@/components/reader/ArgumentSidebar';
import CodexCard from '@/components/reader/CodexCard';
import { useLens } from '@/components/lens/useLens';
import { TreePine, Swords, BookOpen } from 'lucide-react';

export default function ArgumentPage() {
  const params = useParams();
  const slug = params.argument as string;
  const category = params.category as string;
  const arg = getArgumentBySlug(slug);
  const semanticDefenses = getSemanticDefensesByArgument(arg?.id ?? '');
  const [activeSemanticDefense, setActiveSemanticDefense] = useState<string | null>(null);
  const { lens } = useLens();

  if (!arg) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center t-meta">
        Argument not found.{' '}
        <Link href="/defend" style={{ color: 'var(--color-accent-gold)' }}>← Back</Link>
      </div>
    );
  }

  const formattedArg = [
    ...arg.premises.map((p, i) => `P${i + 1}. ${p.text}`),
    `∴ ${arg.conclusion}`,
  ].join('\n');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex gap-12">
        <ArgumentSidebar arg={arg} categoryHref={`/defend/atheism/${category}`} />

        <main className="flex-1 min-w-0">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 flex-wrap" style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
            <Link href="/defend" style={{ color: 'var(--color-text-muted)' }}>Defend</Link>
            <span>/</span>
            <Link href={`/defend/atheism/${category}`} className="capitalize">{category}</Link>
            <span>/</span>
            <span style={{ color: 'var(--color-text-secondary)' }}>{arg.name}</span>
          </div>

          {/* Eyebrow + Title */}
          <RevealOnScroll>
            <Eyebrow className="mb-3">{category.toUpperCase()} · {arg.category.toUpperCase()}</Eyebrow>
            <h1 className="t-h1 mb-2" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>{arg.name}</h1>
            <p className="t-quote mb-6" style={{ color: 'var(--color-text-secondary)' }}>{arg.shortDescription}</p>
          </RevealOnScroll>

          {/* Action toolbar — more prominent in Defender lens */}
          <ActionToolbar
            argName={arg.name}
            formattedArg={formattedArg}
            className={`mb-8 ${lens === 'defender' ? 'py-3' : ''}`}
            style={lens === 'defender' ? { borderBottom: '1px solid var(--color-border)', paddingBottom: 12 } : undefined}
          />

          {/* Explore links */}
          <div className="flex flex-wrap gap-3 mb-10">
            <Link href={`/explore/argument-tree/${arg.slug}`} className="t-caps text-xs inline-flex items-center gap-2 px-3 py-2 border" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}>
              <TreePine size={12} /> Argument Tree
            </Link>
            <Link href={`/explore/debate-mode/${arg.slug}`} className="t-caps text-xs inline-flex items-center gap-2 px-3 py-2 border" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}>
              <Swords size={12} /> Debate Mode
            </Link>
            {semanticDefenses.map((sd) => (
              <button
                key={sd.id}
                onClick={() => setActiveSemanticDefense(sd.id)}
                className="t-caps text-xs inline-flex items-center gap-2 px-3 py-2 border"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}
              >
                <BookOpen size={12} /> {sd.title}
              </button>
            ))}
          </div>

          {/* Formal statement */}
          <section id="formal-statement" className="mb-10">
            <Eyebrow className="mb-3">FORMAL STATEMENT</Eyebrow>
            <PremiseBlock premises={arg.premises} conclusion={arg.conclusion} />
          </section>

          <KeystoneDivider className="my-8" />

          {/* Historical Background */}
          <RevealOnScroll>
            <section id="historical-background" className="mb-10">
              <Eyebrow className="mb-4">HISTORICAL BACKGROUND</Eyebrow>
              {lens === 'seeker' && arg.historicalBackground.length > 0 && (
                <DropCap letter={arg.historicalBackground[0]!} />
              )}
              <p className="t-body" style={{ color: 'var(--color-text-secondary)', whiteSpace: 'pre-line' }}>
                {lens === 'seeker' ? arg.historicalBackground.slice(1) : arg.historicalBackground}
              </p>
            </section>
          </RevealOnScroll>

          <KeystoneDivider className="my-8" />

          {/* Defense of Premises */}
          <section id="defense-of-premises" className="mb-10">
            <Eyebrow className="mb-4">DEFENSE OF PREMISES</Eyebrow>
            <div className="space-y-5">
              {arg.premises.map((p, i) => (
                <RevealOnScroll key={p.id} delay={i * 0.08}>
                  <CodexCard>
                    <div className="t-caps text-xs mb-2" style={{ color: 'var(--color-accent-gold)' }}>P{i + 1}. {p.text}</div>
                    <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)', whiteSpace: 'pre-line' }}>{p.defense}</p>
                    {p.sources.length > 0 && (
                      <div className="mt-3 pt-3 flex flex-wrap gap-2" style={{ borderTop: '1px solid var(--color-border)' }}>
                        {p.sources.map((s) => (
                          <span key={s} className="t-meta px-2 py-1" style={{ border: '1px solid var(--color-border)', borderRadius: 2 }}>{s}</span>
                        ))}
                      </div>
                    )}
                  </CodexCard>
                </RevealOnScroll>
              ))}
            </div>
          </section>

          <KeystoneDivider className="my-8" />

          {/* Objections */}
          <section id="objections" className="mb-10">
            <Eyebrow className="mb-4">OBJECTIONS & RESPONSES</Eyebrow>
            <ObjectionGrid objections={arg.objections} />
          </section>

          <KeystoneDivider className="my-8" />

          {/* Proponents */}
          <RevealOnScroll>
            <section id="proponents" className="mb-10">
              <Eyebrow className="mb-4">KEY PROPONENTS</Eyebrow>
              <ProponentRow proponents={arg.proponents} />
            </section>
          </RevealOnScroll>

          {/* Significance */}
          {arg.significance && (
            <RevealOnScroll>
              <section className="mb-10">
                <Eyebrow className="mb-4">SIGNIFICANCE</Eyebrow>
                <p className="t-body" style={{ color: 'var(--color-text-secondary)' }}>{arg.significance}</p>
              </section>
            </RevealOnScroll>
          )}

          <KeystoneDivider className="my-8" />

          {/* Sources */}
          <RevealOnScroll>
            <section id="sources" className="mb-10">
              <Eyebrow className="mb-4">KEY SOURCES</Eyebrow>
              <CitationList sources={arg.keySources} />
            </section>
          </RevealOnScroll>
        </main>
      </div>

      {/* Semantic Defense Modal */}
      <AnimatePresence>
        {activeSemanticDefense && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-12"
            style={{ background: 'rgba(10,14,26,0.95)' }}
          >
            <SemanticDefenseSlideshow
              defense={semanticDefenses.find((sd) => sd.id === activeSemanticDefense)!}
              onClose={() => setActiveSemanticDefense(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
```

- [ ] **Step 2: Type-check + lint**

```bash
npx tsc --noEmit && npm run lint
```

Expected: PASS.

- [ ] **Step 3: Visual check**

```bash
npm run dev
```

Open any argument page, e.g. `http://localhost:3000/en/defend/atheism/cosmological/kalam-cosmological-argument`. Verify:
- Left sidebar visible on desktop (≥1024px), sticky, scrolling activates gold highlight on active section.
- `FORMAL STATEMENT` eyebrow + gold-bordered PremiseBlock.
- In Seeker lens: DropCap on first letter of Historical Background.
- In Defender lens: ActionToolbar has bottom border separator.
- ObjectionGrid: click expands red/teal battle cards.
- ProponentRow shows chips. CitationList shows bullet sources.
- KeystoneDivider between every major section.

Stop dev server.

- [ ] **Step 4: Build**

```bash
npm run build
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/app/[locale]/defend/atheism/[category]/[argument]/page.tsx
git commit -m "feat(argument-page): Phase 2 — sidebar, PremiseBlock, ObjectionGrid, ActionToolbar, lens-aware"
```

---

## Task 10: Command palette — verse-pattern mode + action mode

**Files:**
- Create: `src/components/command/search/versePatternDetect.ts`
- Modify: `src/components/command/CommandPalette.tsx`

- [ ] **Step 1: Create `versePatternDetect.ts`**

```ts
// src/components/command/search/versePatternDetect.ts

const VERSE_RE = /^(\d\s+)?[A-Za-z]+\.?\s+\d+:\d+(-\d+)?$/;

export type ParsedVerse = {
  ref: string;
  book: string;
  chapter: number;
  verseStart: number;
  verseEnd: number | null;
};

export function isVerseQuery(query: string): boolean {
  return VERSE_RE.test(query.trim());
}

export function parseVerseRef(query: string): ParsedVerse | null {
  const match = query.trim().match(/^((?:\d\s+)?[A-Za-z]+\.?)\s+(\d+):(\d+)(?:-(\d+))?$/);
  if (!match) return null;
  return {
    ref: query.trim(),
    book: match[1]!.trim(),
    chapter: parseInt(match[2]!, 10),
    verseStart: parseInt(match[3]!, 10),
    verseEnd: match[4] ? parseInt(match[4], 10) : null,
  };
}
```

- [ ] **Step 2: Read current `CommandPalette.tsx`**

```bash
cat src/components/command/CommandPalette.tsx
```

- [ ] **Step 3: Replace `CommandPalette.tsx` with verse + action mode support**

```tsx
// src/components/command/CommandPalette.tsx
'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import { Search, X, BookOpen, Shield, Scale, ScrollText, Eye } from 'lucide-react';
import { groupByKind, universalSearch } from './search/universalSearch';
import { isVerseQuery, parseVerseRef } from './search/versePatternDetect';
import type { SearchResult } from './search/types';

type Action = { id: string; label: string; href?: string; Icon: React.ElementType };

const ACTIONS: Action[] = [
  { id: 'defend',      label: 'Defend against an objection…',  href: '/defend',              Icon: Shield     },
  { id: 'compare',    label: 'Compare two traditions…',        href: '/compare',             Icon: Scale      },
  { id: 'manuscript', label: 'Open a manuscript…',             href: '/sources/manuscripts', Icon: ScrollText },
  { id: 'lens',       label: 'Switch reading mode…',           href: undefined,              Icon: Eye        },
  { id: 'sources',    label: 'Browse primary sources…',        href: '/sources',             Icon: BookOpen   },
];

type Props = { open: boolean; onClose: () => void };

export default function CommandPalette({ open, onClose }: Props) {
  const t = useTranslations('command');
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const isActionMode = query.startsWith('/');
  const isVerse = !isActionMode && isVerseQuery(query);
  const parsedVerse = isVerse ? parseVerseRef(query) : null;

  const results = useMemo(
    () => (!isActionMode && !isVerse ? universalSearch(query) : []),
    [query, isActionMode, isVerse]
  );
  const grouped = useMemo(() => groupByKind(results), [results]);
  const flat: SearchResult[] = useMemo(() => Object.values(grouped).flat(), [grouped]);

  const actionMatches = useMemo(() => {
    if (!isActionMode) return [];
    const term = query.slice(1).toLowerCase().trim();
    return term ? ACTIONS.filter((a) => a.label.toLowerCase().includes(term)) : ACTIONS;
  }, [query, isActionMode]);

  useEffect(() => {
    if (open) { setQuery(''); setActive(0); setTimeout(() => inputRef.current?.focus(), 0); }
  }, [open]);

  useEffect(() => { setActive(0); }, [query]);

  useEffect(() => {
    if (!open) return;
    const total = isActionMode ? actionMatches.length : isVerse ? 0 : flat.length;
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key === 'ArrowDown') { e.preventDefault(); setActive((a) => Math.min(a + 1, total - 1)); }
      if (e.key === 'ArrowUp')   { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
      if (e.key === 'Enter') {
        if (isActionMode) {
          const sel = actionMatches[active];
          if (sel?.href) { router.push(sel.href); onClose(); }
        } else if (!isVerse) {
          const sel = flat[active];
          if (sel) { router.push(sel.href); onClose(); }
        }
      }
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, flat, active, isActionMode, actionMatches, isVerse, router, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog" aria-modal="true" aria-label={t('ariaLabel')}
      className="fixed inset-0 z-[110] flex items-start justify-center pt-[18vh]"
      style={{ background: 'rgba(0,0,0,0.65)' }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl mx-4 codex-card overflow-hidden"
        style={{ padding: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input */}
        <div className="flex items-center gap-3 px-4 py-3" style={{ borderBottom: '1px solid var(--color-border)' }}>
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
          {query && (
            <button onClick={() => setQuery('')} style={{ color: 'var(--color-text-muted)' }} aria-label="Clear">
              <X size={14} />
            </button>
          )}
          <button onClick={onClose} aria-label={t('close')} style={{ color: 'var(--color-text-muted)' }}>
            <X size={16} />
          </button>
        </div>

        {/* Mode hint */}
        {!query && (
          <div className="flex gap-2 px-4 py-2" style={{ borderBottom: '1px solid var(--color-border)' }}>
            {['Type to search', '/ for actions', 'e.g. John 1:1'].map((hint) => (
              <span key={hint} className="t-meta px-2 py-0.5" style={{ border: '1px solid var(--color-border)', borderRadius: 2 }}>{hint}</span>
            ))}
          </div>
        )}

        <div id="command-results" className="max-h-[60vh] overflow-y-auto">
          {/* Verse mode */}
          {isVerse && parsedVerse && (
            <div className="px-4 py-5">
              <div className="t-eyebrow mb-3" style={{ color: 'var(--color-accent-gold)' }}>SCRIPTURE REFERENCE</div>
              <p className="t-body mb-1" style={{ color: 'var(--color-text-primary)', fontSize: '1.1rem' }}>{parsedVerse.ref}</p>
              <p className="t-meta mb-4">
                {parsedVerse.book} {parsedVerse.chapter}:{parsedVerse.verseStart}
                {parsedVerse.verseEnd ? `–${parsedVerse.verseEnd}` : ''}
              </p>
              <div className="flex flex-wrap gap-2">
                <button onClick={() => { router.push('/semantics'); onClose(); }} className="t-caps text-xs px-3 py-2 border" style={{ borderColor: 'var(--color-border)', color: 'var(--color-accent-gold)' }}>
                  Open in Semantics
                </button>
                <button onClick={() => { router.push('/sources/manuscripts'); onClose(); }} className="t-caps text-xs px-3 py-2 border" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}>
                  Find in Manuscripts
                </button>
              </div>
            </div>
          )}

          {/* Action mode */}
          {isActionMode && (
            <div>
              <div className="t-eyebrow px-4 py-2">ACTIONS</div>
              {actionMatches.length === 0 && (
                <div className="px-4 py-6 t-meta text-center">{t('noResults')}</div>
              )}
              {actionMatches.map((action, idx) => {
                const Icon = action.Icon;
                return (
                  <button
                    key={action.id}
                    onMouseEnter={() => setActive(idx)}
                    onClick={() => { if (action.href) { router.push(action.href); onClose(); } }}
                    className="w-full text-left px-4 py-3 flex items-center gap-3"
                    style={{
                      background: idx === active ? 'rgba(212,168,83,0.08)' : 'transparent',
                      borderLeft: `2px solid ${idx === active ? 'var(--color-accent-gold)' : 'transparent'}`,
                      fontFamily: 'var(--font-body)',
                      color: 'var(--color-text-primary)',
                      fontSize: 14,
                    }}
                  >
                    <Icon size={14} style={{ color: 'var(--color-accent-gold)' }} />
                    {action.label}
                  </button>
                );
              })}
            </div>
          )}

          {/* Universal search */}
          {!isActionMode && !isVerse && (
            <>
              {flat.length === 0 && query && (
                <div className="px-4 py-6 t-meta text-center">{t('noResults')}</div>
              )}
              {flat.length === 0 && !query && (
                <div className="px-4 py-6 t-meta text-center">{t('startTyping')}</div>
              )}
              {Object.entries(grouped).map(([kind, items]) => (
                <div key={kind}>
                  <div className="t-eyebrow px-4 py-2">{t(`groups.${kind}` as Parameters<typeof t>[0])}</div>
                  {items.map((it) => {
                    const idx = flat.indexOf(it);
                    return (
                      <button
                        key={it.id}
                        onMouseEnter={() => setActive(idx)}
                        onClick={() => { router.push(it.href); onClose(); }}
                        className="w-full text-left px-4 py-2 flex items-center gap-3"
                        style={{
                          background: idx === active ? 'rgba(212,168,83,0.08)' : 'transparent',
                          borderLeft: `2px solid ${idx === active ? 'var(--color-accent-gold)' : 'transparent'}`,
                          fontFamily: 'var(--font-body)',
                          color: 'var(--color-text-primary)',
                          fontSize: 14,
                        }}
                      >
                        <span className="flex-1">{it.title}</span>
                        {it.subtitle && <span className="t-meta">{it.subtitle}</span>}
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
```

- [ ] **Step 4: Type-check + lint**

```bash
npx tsc --noEmit && npm run lint
```

Expected: PASS.

- [ ] **Step 5: Visual check**

Open `http://localhost:3000/en`, press ⌘K:
- Empty state shows three hint pills.
- `John 1:1` → verse mode with book/chapter/verse breakdown + two action buttons.
- `/` → five action items listed.
- `/defend` → filtered to "Defend against an objection…".
- Normal search: `kalam` → argument result, ↑/↓ navigates, ↵ follows href.

- [ ] **Step 6: Commit**

```bash
git add src/components/command/search/versePatternDetect.ts src/components/command/CommandPalette.tsx
git commit -m "feat(command): add verse-pattern mode + action mode (/ prefix)"
```

---

## Task 11: `CompareViewSwitcher` + `DoctrinalMatrix`

**Files:**
- Create: `src/components/compare/CompareViewSwitcher.tsx`
- Create: `src/components/compare/DoctrinalMatrix.tsx`

- [ ] **Step 1: Create `CompareViewSwitcher.tsx`**

```tsx
// src/components/compare/CompareViewSwitcher.tsx
'use client';

type View = 'matrix' | 'triptych' | 'diff';
type Props = { view: View; onChange: (v: View) => void };

const VIEWS: { id: View; label: string }[] = [
  { id: 'matrix',   label: 'MATRIX'   },
  { id: 'triptych', label: 'TRIPTYCH' },
  { id: 'diff',     label: 'DIFF'     },
];

export default function CompareViewSwitcher({ view, onChange }: Props) {
  return (
    <div style={{ border: '1px solid var(--color-border)', display: 'inline-flex', borderRadius: 2 }}>
      {VIEWS.map((v, i) => (
        <button
          key={v.id}
          onClick={() => onChange(v.id)}
          className="t-caps text-xs px-4 py-2"
          style={{
            color: view === v.id ? 'var(--color-bg-primary)' : 'var(--color-text-secondary)',
            background: view === v.id ? 'var(--color-accent-gold)' : 'transparent',
            fontWeight: view === v.id ? 700 : 400,
            transition: 'background 0.2s, color 0.2s',
            borderRight: i < VIEWS.length - 1 ? '1px solid var(--color-border)' : 'none',
          }}
        >
          {v.label}
        </button>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Create `DoctrinalMatrix.tsx`**

```tsx
// src/components/compare/DoctrinalMatrix.tsx
'use client';

import { useState } from 'react';
import { doctrineComparisons, traditions } from '@/data/comparisons';

type Props = { onSelectDoctrine?: (id: string) => void };

export default function DoctrinalMatrix({ onSelectDoctrine }: Props) {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  return (
    <div className="overflow-x-auto">
      <table className="w-full t-body text-sm" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th className="t-eyebrow px-4 py-3 text-left" style={{ borderBottom: '1px solid var(--color-border)', color: 'var(--color-text-muted)', minWidth: 160 }}>
              DOCTRINE
            </th>
            {traditions.map((trad) => (
              <th key={trad.id} className="t-eyebrow px-4 py-3 text-left" style={{ borderBottom: '1px solid var(--color-border)', color: 'var(--color-accent-gold)', minWidth: 200 }}>
                {trad.shortName.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {doctrineComparisons.map((doc) => (
            <tr
              key={doc.id}
              onMouseEnter={() => setHoveredRow(doc.id)}
              onMouseLeave={() => setHoveredRow(null)}
              onClick={() => onSelectDoctrine?.(doc.id)}
              style={{
                background: hoveredRow === doc.id ? 'rgba(212,168,83,0.06)' : 'transparent',
                cursor: onSelectDoctrine ? 'pointer' : 'default',
                transition: 'background 0.15s',
              }}
            >
              <td className="t-caps text-xs px-4 py-3" style={{ color: 'var(--color-text-primary)', borderBottom: '1px solid var(--color-border)', borderRight: '1px solid var(--color-border)' }}>
                {doc.name}
              </td>
              {traditions.map((trad) => {
                const info = doc.traditions[trad.id];
                return (
                  <td key={trad.id} className="px-4 py-3" style={{ color: 'var(--color-text-secondary)', borderBottom: '1px solid var(--color-border)', borderRight: '1px solid var(--color-border)', maxWidth: 240, verticalAlign: 'top' }}>
                    <div className="t-caps text-xs mb-1" style={{ color: 'var(--color-text-muted)', fontSize: '0.6rem', letterSpacing: '0.15em' }}>{info?.position ?? '–'}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.5, display: '-webkit-box', WebkitBoxOrient: 'vertical' as const, WebkitLineClamp: 3, overflow: 'hidden' }}>
                      {info?.details ?? '–'}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

- [ ] **Step 3: Type-check**

```bash
npx tsc --noEmit
```

Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add src/components/compare/CompareViewSwitcher.tsx src/components/compare/DoctrinalMatrix.tsx
git commit -m "feat(compare): add CompareViewSwitcher tabs + DoctrinalMatrix grid"
```

---

## Task 12: `TriptychPanels` + `DoctrineDiff`

**Files:**
- Create: `src/components/compare/TriptychPanels.tsx`
- Create: `src/components/compare/DoctrineDiff.tsx`

- [ ] **Step 1: Create `TriptychPanels.tsx`**

```tsx
// src/components/compare/TriptychPanels.tsx
import { doctrineComparisons, traditions } from '@/data/comparisons';
import { Eyebrow, KeystoneDivider, SectionMark } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';

const TRAD_GLYPHS: Record<string, 'cross' | 'patee' | 'longCross'> = {
  orthodoxy:     'cross',
  catholicism:   'patee',
  protestantism: 'longCross',
};

export default function TriptychPanels() {
  return (
    <div className="space-y-12">
      {doctrineComparisons.map((doc) => (
        <RevealOnScroll key={doc.id}>
          <section>
            <Eyebrow className="mb-3">{doc.name.toUpperCase()}</Eyebrow>
            <div className="grid md:grid-cols-3 gap-4">
              {traditions.map((trad) => {
                const info = doc.traditions[trad.id];
                return (
                  <div key={trad.id} className="px-5 py-5" style={{ border: '1px solid var(--color-border)', borderRadius: 4, background: 'var(--color-bg-secondary)' }}>
                    <div className="flex items-center gap-2 mb-3">
                      <SectionMark glyph={TRAD_GLYPHS[trad.id] ?? 'diamond'} size={14} />
                      <span className="t-caps text-xs" style={{ color: 'var(--color-accent-gold)' }}>{trad.shortName.toUpperCase()}</span>
                    </div>
                    <div className="t-eyebrow mb-2" style={{ color: 'var(--color-text-muted)', fontSize: '0.6rem' }}>{info?.position ?? '–'}</div>
                    <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>{info?.details ?? '–'}</p>
                    {info?.keySources && info.keySources.length > 0 && (
                      <div className="mt-3 pt-3" style={{ borderTop: '1px solid var(--color-border)' }}>
                        <div className="t-eyebrow mb-1">KEY SOURCES</div>
                        <ul className="space-y-0.5">
                          {info.keySources.map((s) => (
                            <li key={s} className="t-meta" style={{ fontSize: '0.65rem' }}>• {s}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <KeystoneDivider className="mt-10" />
          </section>
        </RevealOnScroll>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Create `DoctrineDiff.tsx`**

```tsx
// src/components/compare/DoctrineDiff.tsx
'use client';

import { useState } from 'react';
import { doctrineComparisons, traditions } from '@/data/comparisons';
import { Eyebrow, KeystoneDivider } from '@/components/ornament';

export default function DoctrineDiff() {
  const [tradA, setTradA] = useState(traditions[0]!.id);
  const [tradB, setTradB] = useState(traditions[1]!.id);

  const btnStyle = (selected: boolean): React.CSSProperties => ({
    border: `1px solid ${selected ? 'var(--color-accent-gold)' : 'var(--color-border)'}`,
    borderRadius: 2,
    padding: '6px 14px',
    fontFamily: 'var(--font-display)',
    fontSize: '0.625rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase' as const,
    color: selected ? 'var(--color-accent-gold)' : 'var(--color-text-secondary)',
    background: 'transparent',
    cursor: 'pointer',
  });

  const nameA = traditions.find((t) => t.id === tradA)?.shortName ?? '';
  const nameB = traditions.find((t) => t.id === tradB)?.shortName ?? '';

  return (
    <div>
      {/* Selectors */}
      <div className="flex flex-wrap gap-8 mb-10 items-start">
        <div>
          <Eyebrow className="mb-2">FROM</Eyebrow>
          <div className="flex gap-2">
            {traditions.map((t) => (
              <button key={t.id} style={btnStyle(tradA === t.id)} onClick={() => setTradA(t.id)}>{t.shortName}</button>
            ))}
          </div>
        </div>
        <div>
          <Eyebrow className="mb-2">TO</Eyebrow>
          <div className="flex gap-2">
            {traditions.map((t) => (
              <button key={t.id} style={btnStyle(tradB === t.id)} onClick={() => setTradB(t.id)}>{t.shortName}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Rows */}
      <div className="space-y-6">
        {doctrineComparisons.map((doc) => {
          const a = doc.traditions[tradA];
          const b = doc.traditions[tradB];
          const same = a?.position === b?.position;
          const borderCol = same ? 'var(--color-border)' : 'rgba(212,168,83,0.4)';
          const bgCol = same ? 'var(--color-bg-secondary)' : 'rgba(212,168,83,0.04)';
          return (
            <div key={doc.id}>
              <Eyebrow className="mb-3">{doc.name.toUpperCase()}</Eyebrow>
              <div className="grid md:grid-cols-2 gap-4">
                {[{ id: tradA, name: nameA, info: a }, { id: tradB, name: nameB, info: b }].map((side) => (
                  <div key={side.id} className="px-4 py-4" style={{ border: `1px solid ${borderCol}`, borderRadius: 4, background: bgCol }}>
                    <div className="t-eyebrow mb-1" style={{ color: 'var(--color-accent-gold)' }}>{side.name.toUpperCase()}</div>
                    <div className="t-eyebrow mb-2" style={{ color: 'var(--color-text-muted)', fontSize: '0.6rem' }}>{side.info?.position ?? '–'}</div>
                    <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{side.info?.details ?? '–'}</p>
                  </div>
                ))}
              </div>
              {!same && (
                <div className="mt-1 t-eyebrow" style={{ color: 'var(--color-accent-gold)', fontSize: '0.55rem', letterSpacing: '0.3em' }}>▲ DIVERGENCE</div>
              )}
              <KeystoneDivider className="mt-4" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Type-check**

```bash
npx tsc --noEmit
```

Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add src/components/compare/TriptychPanels.tsx src/components/compare/DoctrineDiff.tsx
git commit -m "feat(compare): add TriptychPanels altar-piece + DoctrineDiff two-tradition view"
```

---

## Task 13: Wire compare sub-pages to Phase 3 design

**Files:**
- Modify: `src/app/[locale]/compare/[tradition]/page.tsx`
- Modify: `src/app/[locale]/compare/side-by-side/page.tsx`

- [ ] **Step 1: Read both files**

```bash
cat src/app/[locale]/compare/[tradition]/page.tsx
cat src/app/[locale]/compare/side-by-side/page.tsx
```

- [ ] **Step 2: Replace `[tradition]/page.tsx`**

```tsx
// src/app/[locale]/compare/[tradition]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { traditions, doctrineComparisons } from '@/data/comparisons';
import { Eyebrow, KeystoneDivider, SectionMark } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';

const TRAD_GLYPHS: Record<string, 'cross' | 'patee' | 'longCross'> = {
  orthodoxy:     'cross',
  catholicism:   'patee',
  protestantism: 'longCross',
};

export default function TraditionPage() {
  const { tradition } = useParams() as { tradition: string };
  const trad = traditions.find((t) => t.id === tradition);

  if (!trad) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center t-meta">
        Tradition not found. <Link href="/compare" style={{ color: 'var(--color-accent-gold)' }}>← Back</Link>
      </div>
    );
  }

  const tradDocs = doctrineComparisons.map((doc) => ({ ...doc, info: doc.traditions[trad.id] }));

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="t-meta flex items-center gap-2 mb-8" style={{ color: 'var(--color-text-muted)' }}>
        <Link href="/compare">Compare</Link>
        <span>/</span>
        <span style={{ color: 'var(--color-text-secondary)' }}>{trad.name}</span>
      </div>

      <RevealOnScroll>
        <div className="flex items-center gap-3 mb-4">
          <SectionMark glyph={TRAD_GLYPHS[trad.id] ?? 'diamond'} size={28} />
          <Eyebrow>{trad.shortName.toUpperCase()}</Eyebrow>
        </div>
        <h1 className="t-h1 mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>{trad.name}</h1>
        <p className="t-body mb-10" style={{ color: 'var(--color-text-secondary)', maxWidth: 640 }}>{trad.description}</p>
      </RevealOnScroll>

      <KeystoneDivider className="mb-8" />

      <RevealOnScroll>
        <section className="mb-10">
          <Eyebrow className="mb-4">KEY BELIEFS</Eyebrow>
          <ul className="space-y-2">
            {trad.keyBeliefs.map((b) => (
              <li key={b} className="flex items-start gap-2 t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                <span style={{ color: 'var(--color-accent-gold)', flexShrink: 0 }}>•</span> {b}
              </li>
            ))}
          </ul>
        </section>
      </RevealOnScroll>

      <KeystoneDivider className="mb-8" />

      <section>
        <Eyebrow className="mb-6">DOCTRINAL POSITIONS</Eyebrow>
        <div className="space-y-5">
          {tradDocs.map((doc, i) => (
            <RevealOnScroll key={doc.id} delay={i * 0.06}>
              <CodexCard>
                <h3 className="t-caps text-xs mb-2" style={{ color: 'var(--color-accent-gold)' }}>{doc.name}</h3>
                {doc.info && (
                  <>
                    <div className="t-eyebrow mb-2" style={{ color: 'var(--color-text-muted)', fontSize: '0.6rem' }}>{doc.info.position}</div>
                    <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{doc.info.details}</p>
                    {doc.info.keySources.length > 0 && (
                      <div className="mt-3 pt-3" style={{ borderTop: '1px solid var(--color-border)' }}>
                        <div className="t-eyebrow mb-1">SOURCES</div>
                        <div className="flex flex-wrap gap-2">
                          {doc.info.keySources.map((s) => (
                            <span key={s} className="t-meta px-2 py-0.5" style={{ border: '1px solid var(--color-border)', borderRadius: 2 }}>{s}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </CodexCard>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 3: Replace `side-by-side/page.tsx`**

```tsx
// src/app/[locale]/compare/side-by-side/page.tsx
'use client';

import { Eyebrow, KeystoneDivider } from '@/components/ornament';
import DoctrineDiff from '@/components/compare/DoctrineDiff';

export default function SideBySidePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <Eyebrow className="mb-3">COMPARE · SIDE BY SIDE</Eyebrow>
        <h1 className="t-h1 mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>Tradition Comparison</h1>
        <p className="t-body" style={{ color: 'var(--color-text-secondary)' }}>
          Select two traditions to see their positions on each doctrine highlighted side by side.
        </p>
      </div>
      <KeystoneDivider className="mb-10" />
      <DoctrineDiff />
    </div>
  );
}
```

- [ ] **Step 4: Type-check + lint + build**

```bash
npx tsc --noEmit && npm run lint && npm run build
```

Expected: PASS.

- [ ] **Step 5: Visual check**

Open `http://localhost:3000/en/compare`:
- Tradition cards + view switcher (MATRIX / TRIPTYCH / DIFF).
- Matrix: table with hover gold bg.
- Triptych: three panels per doctrine.
- Diff: two selectors, diverging rows flagged.
- `/compare/orthodoxy` → tradition detail with key beliefs + doctrinal positions.
- `/compare/side-by-side` → DoctrineDiff view.

Stop dev server.

- [ ] **Step 6: Commit**

```bash
git add src/app/[locale]/compare/
git commit -m "feat(compare): Phase 3 — wire tradition detail + side-by-side pages to new components"
```

---

## Task 14: Apply foundations to manuscript list + detail pages (Phase 4)

**Files:**
- Modify: `src/app/[locale]/sources/manuscripts/page.tsx`
- Modify: `src/app/[locale]/sources/manuscripts/[id]/page.tsx`
- Read: `src/data/manuscripts/types.ts` (verify field names for Eyebrow)

- [ ] **Step 1: Read the three files**

```bash
cat src/data/manuscripts/types.ts
cat src/app/[locale]/sources/manuscripts/page.tsx
cat src/app/[locale]/sources/manuscripts/[id]/page.tsx
```

- [ ] **Step 2: Update manuscript list page**

Add imports at the top:
```tsx
import { Eyebrow, KeystoneDivider } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
```

Replace the pill-badge header block with:
```tsx
<RevealOnScroll>
  <div className="text-center mb-12">
    <Eyebrow className="mb-4">PRIMARY SOURCES · MANUSCRIPTS</Eyebrow>
    <h1 className="t-h1 mb-4" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}>Manuscript Archive</h1>
    <p className="t-body max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)', fontSize: '1.0625rem' }}>
      Biblical manuscripts, papyri, and ancient documents with interlinear readers.
    </p>
  </div>
</RevealOnScroll>
```

In the `ManuscriptCard` inner component, change the Link className:
```tsx
// Old: className="block glass-card overflow-hidden group"
// New: className="block codex-card overflow-hidden group"
```

Remove `hover:-translate-y-1` and `hover:shadow-lg` from all card elements.

- [ ] **Step 3: Update manuscript detail page**

Add imports at the top:
```tsx
import { Eyebrow, KeystoneDivider } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';
```

Replace the h1 title block. Use the field names verified from `types.ts` (Step 1). Typical pattern:
```tsx
<RevealOnScroll>
  <Eyebrow className="mb-3">
    {/* Use actual field names from the type — e.g. ms.siglum, ms.type, ms.date */}
    {[ms.siglum, ms.type?.toUpperCase(), ms.date ? `c. ${ms.date}` : ''].filter(Boolean).join(' · ')}
  </Eyebrow>
  <h1 className="t-h1 mb-2" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>{ms.name}</h1>
</RevealOnScroll>
```

Replace all `glass-card` classNames with `codex-card` or `<CodexCard>`.
Remove `rounded-2xl` — use `rounded` or no rounding (codex-card uses 6px).
Add `<KeystoneDivider className="my-8" />` before the Images section and before the Bibliography section.

- [ ] **Step 4: Type-check + lint**

```bash
npx tsc --noEmit && npm run lint
```

If TypeScript errors about field names, re-read `src/data/manuscripts/types.ts` and adjust the Eyebrow expression in Step 3.

- [ ] **Step 5: Commit**

```bash
git add src/app/[locale]/sources/manuscripts/
git commit -m "feat(manuscripts): apply Phase 1 foundations to list + detail pages"
```

---

## Task 15: Researcher-lens split-pane in `InterlinearReader`

**Files:**
- Modify: `src/components/manuscripts/InterlinearReader.tsx`

- [ ] **Step 1: Read the current file**

```bash
cat src/components/manuscripts/InterlinearReader.tsx
```

Study the props, data shape, and how verses are currently rendered (single-column layout).

- [ ] **Step 2: Add `useLens` import**

At the top of the file, add:
```tsx
import { useLens } from '@/components/lens/useLens';
import { Eyebrow } from '@/components/ornament';
```

- [ ] **Step 3: Add lens detection inside the component**

After the component's existing data-prep code (before the return statement), add:
```tsx
const { lens } = useLens();
const isResearcher = lens === 'researcher';
```

- [ ] **Step 4: Add split-pane conditional return**

Before the existing `return` statement, add:

```tsx
if (isResearcher) {
  return (
    <div
      className="flex overflow-hidden"
      style={{ border: '1px solid var(--color-border)', borderRadius: 4, height: '70vh' }}
    >
      <div className="flex-1 overflow-y-auto p-5" style={{ borderRight: '1px solid var(--color-border)' }}>
        <Eyebrow className="mb-4">ORIGINAL · GREEK</Eyebrow>
        {/* Render the original-language content using the component's existing verse data.
            Take the actual verse-rendering JSX from the single-column return below and
            show only the original-language column here. */}
        {/* IMPLEMENTER: copy verse rendering from the existing return, filtered to Greek/original */}
      </div>
      <div className="flex-1 overflow-y-auto p-5">
        <Eyebrow className="mb-4">TRANSLATION · ENGLISH</Eyebrow>
        {/* IMPLEMENTER: copy verse rendering from the existing return, filtered to translation column */}
      </div>
    </div>
  );
}
```

> The exact JSX inside each pane depends on what you see in Step 1. The component likely renders an array of verse objects each with a `greek` and `translation` field (or similar). Split those into the two panes. If the component accepts verse data as a prop, both panes receive the same data but each renders only its column.

- [ ] **Step 5: Type-check + lint**

```bash
npx tsc --noEmit && npm run lint
```

Expected: PASS.

- [ ] **Step 6: Visual check**

Open any manuscript with an interlinear reader (e.g. `/en/sources/manuscripts/p66`). Switch lens to "Researcher". Confirm two-pane layout appears with Greek on the left, English on the right.

- [ ] **Step 7: Commit**

```bash
git add src/components/manuscripts/InterlinearReader.tsx
git commit -m "feat(manuscripts): Researcher-lens split-pane for InterlinearReader"
```

---

## Task 16: Apply foundations to church-fathers and councils pages (Phase 4)

**Files:**
- Modify: `src/app/[locale]/sources/church-fathers/page.tsx`
- Modify: `src/app/[locale]/sources/councils/page.tsx`

- [ ] **Step 1: Read both files**

```bash
cat src/app/[locale]/sources/church-fathers/page.tsx
cat src/app/[locale]/sources/councils/page.tsx
```

- [ ] **Step 2: Update church-fathers page**

Add imports:
```tsx
import { Eyebrow, KeystoneDivider } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';
```

Replace pill-badge header with Eyebrow + t-h1.
Replace `glass-card` / `rounded-2xl` card markup with `<CodexCard>`.
Remove `hover:-translate-y-1` and `hover:shadow-lg` from cards.
Add `<KeystoneDivider>` after header.
Wrap intro in `<RevealOnScroll>`.

- [ ] **Step 3: Update councils page**

Apply identical changes: Eyebrow header, CodexCard cards, remove glass/hover animations, add KeystoneDivider.

- [ ] **Step 4: Type-check + lint + build**

```bash
npx tsc --noEmit && npm run lint && npm run build
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/app/[locale]/sources/church-fathers/page.tsx src/app/[locale]/sources/councils/page.tsx
git commit -m "feat(sources): apply foundations to church-fathers + councils pages"
```

---

## Task 17: Restyle XYFlow argument-tree (Phase 5)

**Files:**
- Modify: `src/app/[locale]/explore/argument-tree/page.tsx`

Context: XYFlow already uses `#1a2035` navy + `#d4a853` gold for main node. Changes: Cinzel labels on nodes, muted-gold edges (replace per-type color edges), Eyebrow page header.

- [ ] **Step 1: Read the current file**

```bash
cat src/app/[locale]/explore/argument-tree/page.tsx
```

- [ ] **Step 2: Add import**

```tsx
import { Eyebrow } from '@/components/ornament';
```

- [ ] **Step 3: Update `CustomNode` — Cinzel labels**

Find the `CustomNode` function. Replace the two `<p>` elements inside it:

```tsx
// Old type label:
<p className="text-[10px] uppercase tracking-wider font-semibold mb-1" style={{ color: colors.border }}>
// New:
<p style={{ fontFamily: 'var(--font-display)', fontSize: '0.55rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-accent-gold)', marginBottom: 4 }}>

// Old text:
<p className="text-sm leading-relaxed" style={{ color: colors.text }}>
// New:
<p style={{ fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.5, color: colors.text }}>
```

- [ ] **Step 4: Update edge colors to muted gold**

Find the edge style line in `flattenTree`:
```tsx
// Old:
style: { stroke: nodeColors[node.type]?.border || '#555', strokeWidth: 2 },
// New:
style: { stroke: 'rgba(212,168,83,0.5)', strokeWidth: 1.5 },
```

- [ ] **Step 5: Replace page header**

Find the `motion.div` or header section with the pill badge and `gold-gradient` h1. Replace:

```tsx
<div className="mb-6">
  <Eyebrow className="mb-2">EXPLORE · ARGUMENT TREE</Eyebrow>
  <h1 className="t-h1" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>Argument Structure</h1>
</div>
```

- [ ] **Step 6: Type-check + lint**

```bash
npx tsc --noEmit && npm run lint
```

Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add src/app/[locale]/explore/argument-tree/page.tsx
git commit -m "feat(explore): restyle XYFlow tree — Cinzel labels, muted-gold edges, Eyebrow header"
```

---

## Task 18: Apply foundations to remaining Explore + Semantics pages (Phase 5)

**Files:**
- Modify: `src/app/[locale]/explore/debate-mode/page.tsx`
- Modify: `src/app/[locale]/explore/timeline/page.tsx`
- Modify: `src/app/[locale]/semantics/page.tsx`

- [ ] **Step 1: Read all three files**

```bash
cat src/app/[locale]/explore/debate-mode/page.tsx
cat src/app/[locale]/explore/timeline/page.tsx
cat src/app/[locale]/semantics/page.tsx
```

- [ ] **Step 2: Update debate-mode page**

Add imports: `Eyebrow, KeystoneDivider` from ornament; `RevealOnScroll`; `CodexCard`.
Replace pill-badge header → Eyebrow + t-h1.
Replace `glass-card` → `codex-card` / `<CodexCard>`.
Remove `rounded-2xl`, `hover:-translate-y-1`, `hover:shadow-lg`.

- [ ] **Step 3: Update timeline page**

Same pattern. If the page has era-based sections, add `<KeystoneDivider>` between major eras. Wrap each event/entry in `<CodexCard>`.

- [ ] **Step 4: Update semantics page**

Add imports: `Eyebrow, KeystoneDivider` from ornament; `RevealOnScroll`; `CodexCard`.

Replace header (pill badge + `gold-gradient` h1):
```tsx
<RevealOnScroll>
  <div className="text-center mb-12">
    <Eyebrow className="mb-4">SEMANTIC STUDIES</Eyebrow>
    <h1 className="t-h1 mb-4" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}>Interactive Grammar & Exegesis</h1>
    <p className="t-body max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)', fontSize: '1.0625rem' }}>
      Explore the exact Koine Greek structure of the most debated Biblical passages.
      Understand Colwell&apos;s Rule, Granville Sharp, verb morphology, and qualitative nouns.
    </p>
  </div>
</RevealOnScroll>
```

Replace tutorial banner (`glass-card p-6 ... border-l-4`):
```tsx
<CodexCard
  className="mb-12 cursor-pointer group"
  style={{ borderLeft: '3px solid var(--color-accent-gold)' }}
  onClick={() => setActiveDefenseId(tutorial.id)}
>
  {/* keep existing tutorial content */}
</CodexCard>
```

Replace each defense card in the grid:
```tsx
// Old: className="glass-card ..."
// Wrap with: <CodexCard className="...existing className...">
```

Remove `hover:-translate-y-1` and `hover:shadow-lg` from all cards.

- [ ] **Step 5: Type-check + lint**

```bash
npx tsc --noEmit && npm run lint
```

Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/app/[locale]/explore/debate-mode/page.tsx src/app/[locale]/explore/timeline/page.tsx src/app/[locale]/semantics/page.tsx
git commit -m "feat(phase-5): apply foundations to debate-mode, timeline, semantics pages"
```

---

## Task 19: Apply foundations to Defend sub-pages (Phase 5 remainder)

**Files:**
- Modify: `src/app/[locale]/defend/atheism/[category]/page.tsx`
- Modify: `src/app/[locale]/defend/cults/page.tsx`
- Modify: `src/app/[locale]/defend/cults/[category]/page.tsx` (if file exists)
- Modify: `src/app/[locale]/defend/cults/[category]/[objection]/page.tsx` (if file exists)

- [ ] **Step 1: Read the files**

```bash
ls src/app/[locale]/defend/
ls src/app/[locale]/defend/cults/
cat src/app/[locale]/defend/atheism/[category]/page.tsx
cat src/app/[locale]/defend/cults/page.tsx
```

- [ ] **Step 2: Update argument-category page (`[category]/page.tsx`)**

Add imports: `Eyebrow, KeystoneDivider, SectionMark` from ornament; `RevealOnScroll`; `CodexCard`.

Replace pill-badge header → `<Eyebrow>` + `t-h1`.
Replace `rounded-2xl` gradient cards → `<CodexCard>`.
Remove emoji if any. Remove `hover:-translate-y-1`.
Add `<KeystoneDivider>` after header.

- [ ] **Step 3: Update cults pages**

Apply identical changes to cults index and any sub-pages (category, objection detail).
If objection detail pages use `glass-card`, replace with `codex-card`.
If they use `gold-gradient` on h1, replace with `t-h1` class.

- [ ] **Step 4: Type-check + lint + build**

```bash
npx tsc --noEmit && npm run lint && npm run build
```

Expected: PASS. Build must complete clean.

- [ ] **Step 5: Full manual walk**

```bash
npm run start
```

Walk every top-level route and confirm no console errors:

| Route | Check |
|-------|-------|
| `/en` | Hero, triptych, kalam card, footer |
| `/en/defend` | SectionMark category cards, no emoji |
| `/en/defend/atheism/cosmological` | CodexCard argument list |
| `/en/defend/atheism/cosmological/kalam-cosmological-argument` | Two-column, PremiseBlock, ObjectionGrid, sidebar |
| `/en/defend/cults` | CodexCard cult category cards |
| `/en/compare` | Tradition cards + MATRIX/TRIPTYCH/DIFF tabs |
| `/en/compare/orthodoxy` | Tradition detail with doctrinal positions |
| `/en/compare/side-by-side` | DoctrineDiff view |
| `/en/explore` | SectionMark tool cards |
| `/en/explore/argument-tree` | Cinzel node labels, muted-gold edges |
| `/en/semantics` | CodexCard defense cards, no glass-card |
| `/en/sources` | SectionMark category cards |
| `/en/sources/manuscripts` | codex-card list |
| `/en/sources/manuscripts/p66` | Eyebrow MS identifier, KeystoneDividers |
| `/ar` | RTL renders, no overflow |

Also verify ⌘K from any page: `John 1:1` → verse mode; `/` → action list; `kalam` → argument result.

- [ ] **Step 6: Commit**

```bash
git add src/app/[locale]/defend/
git commit -m "feat(defend): apply foundations to argument-category + cults sub-pages"
```

- [ ] **Step 7: Final marker commit**

```bash
git commit --allow-empty -m "chore(phases-2-5): all phases complete — type-check, lint, build, manual walk pass"
```

---

## Notes for the implementer

- **Task order matters**: Complete Tasks 1–3 (bug fixes) first. Then Tasks 4–10 (Phase 2 argument page + command palette). Task 3 references compare components not yet created — if you follow the order strictly, stub them with empty `export default function X() { return null; }` and fill in later.
- **Glass-card retained**: Do not delete `.glass-card` from `globals.css`. Some unmigrated pages may still reference it; it silently degrades to the old style until explicitly replaced.
- **Translations**: Eyebrow text in per-page components uses English hardcoded fallbacks (`?? 'FALLBACK'`). Per-locale eyebrow translations are out of scope — they'd require 27 new message keys per page.
- **InterlinearReader (Task 15)**: The split-pane skeleton must be filled in based on the actual component structure read in Step 1. The exact verse-data shape varies — do not guess, read the file first.
- **Search index**: `STATIC_INDEX` in `src/components/command/search/searchIndex.ts` remains hand-seeded. A data-driven index (importing all `src/data/arguments` entries) is an optional follow-up beyond this plan's scope.
- **Manuscript Eyebrow (Task 14)**: Field names (`siglum`, `type`, `date`) must be confirmed from `src/data/manuscripts/types.ts` before writing the Eyebrow expression.