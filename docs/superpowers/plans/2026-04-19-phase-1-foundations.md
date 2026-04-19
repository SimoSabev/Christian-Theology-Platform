# Phase 1 — Foundations Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship the cross-cutting visual + interaction foundations of the redesign so every existing page benefits the moment Phase 1 merges. No per-page redesigns yet (those are Phases 2–5).

**Architecture:** Replace typography (Cinzel + Crimson Pro), strip glassmorphism in favor of solid `.codex-card` surfaces, introduce ornament + motion + lens-system primitives as composable React components, redesign Navbar/Footer, ship a universal-search ⌘K command palette, and replace the homepage hero with the locked Architectural Statement + Triptych + Ambient Verse Rotator design.

**Tech Stack:** Next.js 16 (App Router), React 19, Tailwind CSS 4 (`@theme` in `globals.css`), `next/font/google`, `next-intl` (27 locales), `framer-motion`, `fuse.js`, `lucide-react`, TypeScript 5.

**Testing approach:** This project has no test runner configured (no Jest/Vitest in `package.json`). Verification per task uses:
- **`npx tsc --noEmit`** — type check (must pass)
- **`npm run lint`** — ESLint (must pass with zero new warnings)
- **`npm run build`** — production build smoke (run after major tasks)
- **Manual visual verification** — `npm run dev`, open `http://localhost:3000/en` (and at least one RTL locale, `/ar`), and confirm the described behavior. Each task lists what to check.

Do **not** add a test framework as part of this plan — that's its own decision.

**Source spec:** `docs/superpowers/specs/2026-04-19-bespoke-redesign-design.md`

---

## File Map

### New files
```
src/
  components/
    motion/
      motion.ts                       # duration & easing tokens
      PageTransition.tsx              # client wrapper for fade+translate
      RevealOnScroll.tsx              # IntersectionObserver-based reveal
    ornament/
      Eyebrow.tsx
      KeystoneDivider.tsx
      ArchPanel.tsx
      RuleHairline.tsx
      DropCap.tsx
      SectionMark.tsx
      InscribedDate.tsx
      Marginalia.tsx
      index.ts                        # barrel export
    reader/
      CodexCard.tsx                   # solid replacement for .glass-card
    lens/
      types.ts                        # Lens union, default
      LensProvider.tsx                # context + localStorage
      useLens.ts
      LensToggle.tsx                  # corner UI control
      LensOnboarding.tsx              # first-visit dialog
      index.ts
    command/
      CommandPalette.tsx              # ⌘K overlay
      CommandBarTrigger.tsx           # navbar pill that opens it
      search/
        searchIndex.ts                # builds Fuse index from data/
        universalSearch.ts            # search() function used by palette
        types.ts                      # SearchResult shape
      index.ts
    hero/
      HeroArchitectural.tsx
      TriptychPortal.tsx
      AmbientVerseRotator.tsx
      arches.svg.tsx                  # inline SVG arch motif
  data/
    verses/
      ambient.ts                      # 16 curated verses for rotator
```

### Modified files
```
src/app/globals.css                   # font tokens, codex-card, typography classes, motion vars
src/app/[locale]/layout.tsx           # font swap (Cinzel + Crimson Pro), lens provider
src/app/[locale]/page.tsx             # use new <HeroArchitectural> + <TriptychPortal>
src/components/layout/Navbar.tsx      # full rewrite
src/components/layout/Footer.tsx      # full rewrite
messages/en.json                      # add hero, command, lens, ornament-aria namespaces
messages/{26 other locales}.json      # mirror new keys (see Task 16)
.gitignore                            # add .superpowers/ if missing
```

### Removed (or deprecated) usages
- All `.glass-card` references in code → switched to `<CodexCard>` or removed
- `.glass-card`, `.glow-gold`, `gold-gradient` decorative classes — kept in CSS for now (still used on argument pages until Phase 2) but **not used** in any new Phase-1 component
- `backdrop-blur-*` Tailwind utilities in Navbar — removed

---

## Task 1: Add `.gitignore` entry for brainstorm artifacts

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Check if entry exists**

Run: `grep -n superpowers .gitignore || echo MISSING`
Expected: either a line shown or `MISSING`.

- [ ] **Step 2: If MISSING, append entry**

Append to `.gitignore`:
```
# Superpowers brainstorm session artifacts
.superpowers/
```

- [ ] **Step 3: Commit**

```bash
git add .gitignore
git commit -m "chore: ignore .superpowers/ brainstorm artifacts"
```

---

## Task 2: Install fonts via `next/font/google`

**Files:**
- Modify: `src/app/[locale]/layout.tsx:5,12-24,60`

- [ ] **Step 1: Replace the font imports**

In `src/app/[locale]/layout.tsx`, replace lines 5 and 12–24 with:

```tsx
import { Cinzel, Crimson_Pro, Inter, JetBrains_Mono } from 'next/font/google';

const cinzel = Cinzel({
  weight: ['400', '600', '700', '900'],
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

const crimsonPro = Crimson_Pro({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-crimson-pro',
  display: 'swap',
});

const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin', 'cyrillic', 'greek', 'vietnamese'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});
```

- [ ] **Step 2: Update `<html>` className**

Replace line 60 (`className={...}`) with:

```tsx
className={`${cinzel.variable} ${crimsonPro.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
```

- [ ] **Step 3: Type-check**

Run: `npx tsc --noEmit`
Expected: PASS (no errors).

- [ ] **Step 4: Commit**

```bash
git add src/app/[locale]/layout.tsx
git commit -m "feat(typography): swap Noto fonts for Cinzel + Crimson Pro + Inter + JetBrains Mono"
```

---

## Task 3: Rewrite `globals.css` foundation tokens

**Files:**
- Modify: `src/app/globals.css` (full rewrite — see step 1)

- [ ] **Step 1: Replace `globals.css` with the foundation tokens**

Overwrite the file with:

```css
@import "tailwindcss";

@theme {
  /* ------ Color (kept) ------ */
  --color-bg-primary: #0a0e1a;
  --color-bg-secondary: #111827;
  --color-bg-elevated: #1a2035;
  --color-accent-gold: #d4a853;
  --color-accent-gold-light: #e8c97a;
  --color-accent-amber: #f59e0b;
  --color-accent-blue: #3b82f6;
  --color-accent-blue-light: #60a5fa;
  --color-accent-teal: #14b8a6;
  --color-accent-red: #ef4444;
  --color-accent-green: #22c55e;
  --color-accent-purple: #8b5cf6;
  --color-text-primary: #f1f5f9;
  --color-text-secondary: #94a3b8;
  --color-text-muted: #64748b;
  --color-border: rgba(212, 168, 83, 0.18);
  --color-border-hover: rgba(212, 168, 83, 0.45);

  /* ------ Type ------ */
  --font-display: var(--font-cinzel), 'Cinzel', ui-serif, Georgia, serif;
  --font-body: var(--font-crimson-pro), 'Crimson Pro', ui-serif, Georgia, serif;
  --font-ui: var(--font-inter), 'Inter', ui-sans-serif, system-ui, sans-serif;
  --font-mono: var(--font-jetbrains-mono), 'JetBrains Mono', ui-monospace, monospace;
  /* legacy aliases (still referenced by some components — Phase 2+ removes) */
  --font-sans: var(--font-ui);
  --font-serif: var(--font-body);

  /* ------ Motion ------ */
  --motion-duration-fast: 150ms;
  --motion-duration-base: 450ms;
  --motion-duration-slow: 600ms;
  --motion-ease-out: cubic-bezier(0.22, 1, 0.36, 1);
}

html { scroll-behavior: smooth; }

body {
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  font-family: var(--font-body);
  font-feature-settings: 'liga' 1, 'kern' 1;
}

::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: var(--color-bg-primary); }
::-webkit-scrollbar-thumb { background: var(--color-text-muted); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--color-accent-gold); }

/* -------------------------------------------------------------
   Semantic typography classes — components compose these.
   ------------------------------------------------------------- */
.t-display    { font-family: var(--font-display); font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; }
.t-eyebrow    { font-family: var(--font-display); font-weight: 600; font-size: 0.625rem; letter-spacing: 0.32em; text-transform: uppercase; color: var(--color-accent-gold); }
.t-h1         { font-family: var(--font-display); font-weight: 700; font-size: 3rem; letter-spacing: 0.04em; line-height: 1.1; text-transform: uppercase; }
.t-h2         { font-family: var(--font-display); font-weight: 700; font-size: 2rem; letter-spacing: 0.04em; line-height: 1.15; text-transform: uppercase; }
.t-h3         { font-family: var(--font-display); font-weight: 600; font-size: 1.25rem; letter-spacing: 0.18em; text-transform: uppercase; }
.t-body       { font-family: var(--font-body); font-weight: 400; font-size: 1rem; line-height: 1.65; }
.t-quote      { font-family: var(--font-body); font-weight: 400; font-style: italic; font-size: 1.0625rem; line-height: 1.7; }
.t-meta       { font-family: var(--font-body); font-size: 0.75rem; color: var(--color-text-muted); }
.t-caps       { font-family: var(--font-display); font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; }

/* -------------------------------------------------------------
   Codex Card — firm replacement for .glass-card
   ------------------------------------------------------------- */
.codex-card {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  transition: border-color var(--motion-duration-base) var(--motion-ease-out),
              box-shadow var(--motion-duration-base) var(--motion-ease-out);
}
.codex-card:hover {
  border-color: var(--color-border-hover);
  box-shadow: 0 0 32px rgba(212, 168, 83, 0.10);
}

/* -------------------------------------------------------------
   Legacy classes — KEPT for unmigrated pages (removed in later phases)
   ------------------------------------------------------------- */
.glass-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  transition: all 0.3s ease;
}
.glass-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.gold-gradient {
  background: linear-gradient(135deg, var(--color-accent-gold), var(--color-accent-gold-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.formal-statement {
  font-family: var(--font-body);
  border-left: 3px solid var(--color-accent-gold);
  background: linear-gradient(135deg, rgba(212, 168, 83, 0.05), transparent);
  padding: 1.5rem;
  border-radius: 0 0.75rem 0.75rem 0;
}

/* -------------------------------------------------------------
   Section divider, RTL, category accents
   ------------------------------------------------------------- */
.section-divider { height: 1px; background: linear-gradient(90deg, transparent, var(--color-border), transparent); }
[dir="rtl"] .formal-statement { border-left: none; border-right: 3px solid var(--color-accent-gold); border-radius: 0.75rem 0 0 0.75rem; }

.category-cosmological { --cat-color: var(--color-accent-blue); }
.category-ontological  { --cat-color: var(--color-accent-purple); }
.category-teleological { --cat-color: var(--color-accent-teal); }
.category-moral        { --cat-color: var(--color-accent-gold); }
.category-existential  { --cat-color: var(--color-accent-amber); }
.category-historical   { --cat-color: var(--color-accent-green); }
.category-objections   { --cat-color: var(--color-accent-red); }

/* -------------------------------------------------------------
   Reduced motion
   ------------------------------------------------------------- */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- [ ] **Step 2: Run dev server, confirm it starts without CSS errors**

Run: `npm run dev` (in another terminal); wait for `Ready`. Visit `http://localhost:3000/en`.
Expected: page renders. The old fonts may still appear because Navbar/Footer/page haven't migrated yet — that's normal.

Stop the dev server (Ctrl+C).

- [ ] **Step 3: Type-check + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: both PASS.

- [ ] **Step 4: Commit**

```bash
git add src/app/globals.css
git commit -m "feat(theme): add typography + motion tokens, codex-card, semantic type classes"
```

---

## Task 4: Motion tokens module

**Files:**
- Create: `src/components/motion/motion.ts`

- [ ] **Step 1: Create the file**

```ts
// src/components/motion/motion.ts
//
// Motion tokens. Components MUST import durations/easings from here
// rather than hardcoding numbers.

export const motionDuration = {
  fast: 0.15,    // seconds — for framer-motion
  base: 0.45,
  slow: 0.6,
} as const;

export const motionEase = {
  out: [0.22, 1, 0.36, 1] as const, // ease-out-quart
} as const;

export const motionStagger = {
  prose: 0.08, // 80ms between children in scroll-reveal lists
} as const;

// Convenience presets for framer-motion <motion.*> elements.
export const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionDuration.slow, ease: motionEase.out },
  },
} as const;

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: motionDuration.base, ease: motionEase.out } },
} as const;
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/components/motion/motion.ts
git commit -m "feat(motion): add motion duration/easing tokens"
```

---

## Task 5: `RevealOnScroll` and `PageTransition`

**Files:**
- Create: `src/components/motion/RevealOnScroll.tsx`
- Create: `src/components/motion/PageTransition.tsx`

- [ ] **Step 1: Create `RevealOnScroll.tsx`**

```tsx
// src/components/motion/RevealOnScroll.tsx
'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeUp } from './motion';

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Trigger only once on first viewport entry (default true). */
  once?: boolean;
};

export default function RevealOnScroll({ children, delay = 0, className, once = true }: Props) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Create `PageTransition.tsx`**

```tsx
// src/components/motion/PageTransition.tsx
'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';
import { motionDuration, motionEase } from './motion';

export default function PageTransition({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: motionDuration.slow, ease: motionEase.out }}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 3: Type-check + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add src/components/motion/
git commit -m "feat(motion): add RevealOnScroll + PageTransition wrappers"
```

---

## Task 6: Ornament library — Eyebrow, RuleHairline, KeystoneDivider

**Files:**
- Create: `src/components/ornament/Eyebrow.tsx`
- Create: `src/components/ornament/RuleHairline.tsx`
- Create: `src/components/ornament/KeystoneDivider.tsx`

- [ ] **Step 1: `Eyebrow.tsx`**

```tsx
// src/components/ornament/Eyebrow.tsx
import { CSSProperties, ReactNode } from 'react';

type Props = { children: ReactNode; className?: string; style?: CSSProperties };

/**
 * Small all-caps gold label, e.g.
 *   <Eyebrow>PART · I · COSMOLOGICAL · § 1.1.1</Eyebrow>
 */
export default function Eyebrow({ children, className = '', style }: Props) {
  return <div className={`t-eyebrow ${className}`} style={style}>{children}</div>;
}
```

- [ ] **Step 2: `RuleHairline.tsx`**

```tsx
// src/components/ornament/RuleHairline.tsx
type Props = { className?: string };

/** 1px gold gradient horizontal rule (transparent → gold → transparent). */
export default function RuleHairline({ className = '' }: Props) {
  return (
    <div
      className={className}
      style={{
        height: 1,
        background: 'linear-gradient(90deg, transparent, var(--color-accent-gold), transparent)',
      }}
      aria-hidden
    />
  );
}
```

- [ ] **Step 3: `KeystoneDivider.tsx`**

```tsx
// src/components/ornament/KeystoneDivider.tsx
import RuleHairline from './RuleHairline';

type Props = { glyph?: string; className?: string };

/**
 * Section break: hairline → centered diamond glyph in gold → hairline.
 * Default glyph is a small filled diamond ◆.
 */
export default function KeystoneDivider({ glyph = '◆', className = '' }: Props) {
  return (
    <div className={`flex items-center gap-4 ${className}`} aria-hidden>
      <RuleHairline className="flex-1" />
      <span style={{ color: 'var(--color-accent-gold)', fontSize: 12 }}>{glyph}</span>
      <RuleHairline className="flex-1" />
    </div>
  );
}
```

- [ ] **Step 4: Type-check + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/ornament/
git commit -m "feat(ornament): add Eyebrow, RuleHairline, KeystoneDivider"
```

---

## Task 7: Ornament library — DropCap, SectionMark, InscribedDate, Marginalia, ArchPanel, index

**Files:**
- Create: `src/components/ornament/DropCap.tsx`
- Create: `src/components/ornament/SectionMark.tsx`
- Create: `src/components/ornament/InscribedDate.tsx`
- Create: `src/components/ornament/Marginalia.tsx`
- Create: `src/components/ornament/ArchPanel.tsx`
- Create: `src/components/ornament/index.ts`

- [ ] **Step 1: `DropCap.tsx`**

```tsx
// src/components/ornament/DropCap.tsx
type Props = { letter: string; className?: string };

/**
 * Illuminated drop cap: gold-on-navy filled square, Cinzel 900, bordered.
 * `letter` is the visible glyph; the consuming prose should still
 * begin with the full word (sighted users see drop cap + rest of word;
 * screen readers read the prose normally because the cap is aria-hidden).
 */
export default function DropCap({ letter, className = '' }: Props) {
  return (
    <span
      aria-hidden
      className={`float-left ${className}`}
      style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: '4rem',
        lineHeight: 0.85,
        marginRight: '0.75rem',
        marginTop: '0.4rem',
        color: 'var(--color-bg-primary)',
        background: 'linear-gradient(135deg, var(--color-accent-gold), var(--color-accent-gold-light))',
        padding: '0.4rem 0.6rem',
        border: '1px solid var(--color-accent-gold)',
        borderRadius: 4,
        boxShadow: '0 0 24px rgba(212, 168, 83, 0.25)',
      }}
    >
      {letter}
    </span>
  );
}
```

- [ ] **Step 2: `SectionMark.tsx`**

```tsx
// src/components/ornament/SectionMark.tsx

const GLYPHS = {
  section: '§',
  cross: '☩',
  patee: '✠',
  longCross: '✟',
  plusCircle: '⊕',
  chiRho: '☧',
  diamond: '◆',
} as const;

type Glyph = keyof typeof GLYPHS;

type Props = { glyph: Glyph; className?: string; size?: number };

/** Decorative section glyph in gold. Always aria-hidden. */
export default function SectionMark({ glyph, className = '', size = 18 }: Props) {
  return (
    <span
      aria-hidden
      className={className}
      style={{ color: 'var(--color-accent-gold)', fontSize: size, lineHeight: 1 }}
    >
      {GLYPHS[glyph]}
    </span>
  );
}
```

- [ ] **Step 3: `InscribedDate.tsx`**

```tsx
// src/components/ornament/InscribedDate.tsx

const ROMAN: ReadonlyArray<readonly [number, string]> = [
  [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
  [100, 'C'],  [90, 'XC'],  [50, 'L'],  [40, 'XL'],
  [10, 'X'],   [9, 'IX'],   [5, 'V'],   [4, 'IV'],
  [1, 'I'],
];

function toRoman(n: number): string {
  let out = '';
  let rem = n;
  for (const [val, sym] of ROMAN) {
    while (rem >= val) { out += sym; rem -= val; }
  }
  return out;
}

type Props = { year: number; prefix?: string; className?: string };

/**
 * Stone-inscription date, e.g. A · D · MMXXVI.
 * `prefix` defaults to 'A·D'.
 */
export default function InscribedDate({ year, prefix = 'A·D', className = '' }: Props) {
  return (
    <span className={`t-eyebrow ${className}`} style={{ letterSpacing: '0.5em' }}>
      {prefix.split('').join('·')} · {toRoman(year)}
    </span>
  );
}
```

- [ ] **Step 4: `Marginalia.tsx`**

```tsx
// src/components/ornament/Marginalia.tsx
import { ReactNode } from 'react';

type Props = { children: ReactNode; side?: 'left' | 'right'; className?: string };

/** Italic side-note pulled to the margin. Renders inline on small screens. */
export default function Marginalia({ children, side = 'right', className = '' }: Props) {
  const align = side === 'left' ? 'lg:-translate-x-full lg:pr-6 lg:text-right' : 'lg:translate-x-full lg:pl-6';
  return (
    <aside
      className={`block lg:absolute lg:max-w-[14rem] italic text-sm ${align} ${className}`}
      style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
    >
      {children}
    </aside>
  );
}
```

- [ ] **Step 5: `ArchPanel.tsx`**

```tsx
// src/components/ornament/ArchPanel.tsx
import { ReactNode } from 'react';

type Props = { children: ReactNode; className?: string };

/** Wraps a section with faint Romanesque arch SVG behind it. */
export default function ArchPanel({ children, className = '' }: Props) {
  return (
    <div className={`relative ${className}`}>
      <svg
        aria-hidden
        viewBox="0 0 600 200"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.18 }}
      >
        <path d="M50,200 L50,80 Q50,30 100,30 Q150,30 150,80 L150,200" stroke="var(--color-accent-gold)" strokeWidth="1" fill="none" />
        <path d="M225,200 L225,60 Q225,10 300,10 Q375,10 375,60 L375,200" stroke="var(--color-accent-gold)" strokeWidth="1.5" fill="none" />
        <path d="M450,200 L450,80 Q450,30 500,30 Q550,30 550,80 L550,200" stroke="var(--color-accent-gold)" strokeWidth="1" fill="none" />
      </svg>
      <div className="relative">{children}</div>
    </div>
  );
}
```

- [ ] **Step 6: `index.ts` barrel**

```ts
// src/components/ornament/index.ts
export { default as Eyebrow } from './Eyebrow';
export { default as RuleHairline } from './RuleHairline';
export { default as KeystoneDivider } from './KeystoneDivider';
export { default as DropCap } from './DropCap';
export { default as SectionMark } from './SectionMark';
export { default as InscribedDate } from './InscribedDate';
export { default as Marginalia } from './Marginalia';
export { default as ArchPanel } from './ArchPanel';
```

- [ ] **Step 7: Type-check + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: PASS.

- [ ] **Step 8: Commit**

```bash
git add src/components/ornament/
git commit -m "feat(ornament): add DropCap, SectionMark, InscribedDate, Marginalia, ArchPanel + barrel"
```

---

## Task 8: `CodexCard` component

**Files:**
- Create: `src/components/reader/CodexCard.tsx`

- [ ] **Step 1: Create the file**

```tsx
// src/components/reader/CodexCard.tsx
import { ReactNode, ElementType, ComponentPropsWithoutRef } from 'react';

type Props<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>;

/**
 * Solid, firm replacement for .glass-card.
 * Polymorphic via `as` prop (defaults to <div>).
 */
export default function CodexCard<T extends ElementType = 'div'>({
  as,
  children,
  className = '',
  ...rest
}: Props<T>) {
  const Component = (as ?? 'div') as ElementType;
  return (
    <Component className={`codex-card p-6 ${className}`} {...rest}>
      {children}
    </Component>
  );
}
```

- [ ] **Step 2: Type-check + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/components/reader/CodexCard.tsx
git commit -m "feat(reader): add CodexCard solid-surface component"
```

---

## Task 9: Lens system — types, provider, hook

**Files:**
- Create: `src/components/lens/types.ts`
- Create: `src/components/lens/LensProvider.tsx`
- Create: `src/components/lens/useLens.ts`

- [ ] **Step 1: `types.ts`**

```ts
// src/components/lens/types.ts
export const LENSES = ['seeker', 'student', 'defender', 'researcher', 'all'] as const;
export type Lens = (typeof LENSES)[number];

export const DEFAULT_LENS: Lens = 'seeker';
export const STORAGE_KEY = 'theologia.lens';
export const ONBOARDING_KEY = 'theologia.lens.onboarded';
```

- [ ] **Step 2: `LensProvider.tsx`**

```tsx
// src/components/lens/LensProvider.tsx
'use client';

import { createContext, useCallback, useEffect, useState, ReactNode } from 'react';
import { DEFAULT_LENS, Lens, LENSES, STORAGE_KEY } from './types';

type Ctx = {
  lens: Lens;
  setLens: (l: Lens) => void;
  hydrated: boolean;
};

export const LensContext = createContext<Ctx>({
  lens: DEFAULT_LENS,
  setLens: () => {},
  hydrated: false,
});

function isLens(value: string | null): value is Lens {
  return !!value && (LENSES as readonly string[]).includes(value);
}

export default function LensProvider({ children }: { children: ReactNode }) {
  const [lens, setLensState] = useState<Lens>(DEFAULT_LENS);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (isLens(stored)) setLensState(stored);
    } catch {
      // localStorage unavailable — ignore
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.dataset.lens = lens;
  }, [lens, hydrated]);

  const setLens = useCallback((l: Lens) => {
    setLensState(l);
    try { localStorage.setItem(STORAGE_KEY, l); } catch { /* ignore */ }
  }, []);

  return <LensContext.Provider value={{ lens, setLens, hydrated }}>{children}</LensContext.Provider>;
}
```

- [ ] **Step 3: `useLens.ts`**

```ts
// src/components/lens/useLens.ts
'use client';

import { useContext } from 'react';
import { LensContext } from './LensProvider';

export function useLens() {
  return useContext(LensContext);
}
```

- [ ] **Step 4: Type-check + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/lens/
git commit -m "feat(lens): add LensProvider, useLens hook, and types"
```

---

## Task 10: Lens system — `LensToggle` + `LensOnboarding` + barrel

**Files:**
- Create: `src/components/lens/LensToggle.tsx`
- Create: `src/components/lens/LensOnboarding.tsx`
- Create: `src/components/lens/index.ts`

- [ ] **Step 1: `LensToggle.tsx`**

```tsx
// src/components/lens/LensToggle.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Eye } from 'lucide-react';
import { LENSES, type Lens } from './types';
import { useLens } from './useLens';

export default function LensToggle() {
  const { lens, setLens, hydrated } = useLens();
  const t = useTranslations('lens');
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [open]);

  if (!hydrated) return <div className="w-10 h-10" />; // SSR placeholder

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-2 px-3 py-2 border text-xs t-caps"
        style={{
          borderColor: 'var(--color-border)',
          color: 'var(--color-accent-gold)',
          background: 'transparent',
        }}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t('toggleAriaLabel')}
      >
        <Eye size={14} />
        <span className="hidden sm:inline">{t(`names.${lens}`)}</span>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute end-0 mt-2 min-w-[16rem] z-50 codex-card"
          style={{ padding: '0.5rem' }}
        >
          <div className="t-eyebrow px-3 py-2">{t('chooseLens')}</div>
          {LENSES.map((l: Lens) => (
            <button
              key={l}
              role="menuitemradio"
              aria-checked={lens === l}
              onClick={() => { setLens(l); setOpen(false); }}
              className="w-full text-left px-3 py-2 transition-colors"
              style={{
                background: lens === l ? 'rgba(212, 168, 83, 0.10)' : 'transparent',
                borderLeft: `2px solid ${lens === l ? 'var(--color-accent-gold)' : 'transparent'}`,
              }}
            >
              <div className="t-caps text-xs" style={{ color: 'var(--color-text-primary)' }}>{t(`names.${l}`)}</div>
              <div className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
                {t(`descriptions.${l}`)}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 2: `LensOnboarding.tsx`**

```tsx
// src/components/lens/LensOnboarding.tsx
'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { LENSES, ONBOARDING_KEY, type Lens } from './types';
import { useLens } from './useLens';

export default function LensOnboarding() {
  const { setLens, hydrated } = useLens();
  const t = useTranslations('lens.onboarding');
  const tNames = useTranslations('lens.names');
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!hydrated) return;
    try {
      if (!localStorage.getItem(ONBOARDING_KEY)) setShow(true);
    } catch { /* ignore */ }
  }, [hydrated]);

  function pick(l: Lens | null) {
    if (l) setLens(l);
    try { localStorage.setItem(ONBOARDING_KEY, '1'); } catch { /* ignore */ }
    setShow(false);
  }

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lens-onboarding-title"
      className="fixed inset-0 z-[120] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.65)' }}
    >
      <div className="codex-card max-w-lg w-full" style={{ padding: '2rem' }}>
        <div className="t-eyebrow mb-3">{t('eyebrow')}</div>
        <h2 id="lens-onboarding-title" className="t-h2 mb-4" style={{ fontSize: '1.5rem' }}>{t('title')}</h2>
        <p className="t-body mb-5" style={{ color: 'var(--color-text-secondary)' }}>{t('body')}</p>
        <div className="grid gap-2">
          {LENSES.map((l) => (
            <button
              key={l}
              onClick={() => pick(l)}
              className="text-left px-4 py-3 border transition-colors hover:border-[var(--color-accent-gold)]"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <div className="t-caps text-xs">{tNames(l)}</div>
            </button>
          ))}
        </div>
        <button
          onClick={() => pick(null)}
          className="mt-5 text-sm underline"
          style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
        >
          {t('skip')}
        </button>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: `index.ts`**

```ts
// src/components/lens/index.ts
export { default as LensProvider } from './LensProvider';
export { default as LensToggle } from './LensToggle';
export { default as LensOnboarding } from './LensOnboarding';
export { useLens } from './useLens';
export type { Lens } from './types';
export { LENSES, DEFAULT_LENS } from './types';
```

- [ ] **Step 4: Type-check + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: PASS. (Translations referenced here are added in Task 16; missing-key warnings at runtime are OK pre-Task-16.)

- [ ] **Step 5: Commit**

```bash
git add src/components/lens/
git commit -m "feat(lens): add LensToggle dropdown and LensOnboarding dialog"
```

---

## Task 11: Verses dataset for ambient rotator

**Files:**
- Create: `src/data/verses/ambient.ts`

- [ ] **Step 1: Create the file**

```ts
// src/data/verses/ambient.ts
//
// Curated verses for the homepage ambient rotator.
// Reference is shown in small caps below the verse text.
// Translation: KJV public domain.

export type AmbientVerse = { ref: string; text: string };

export const AMBIENT_VERSES: AmbientVerse[] = [
  { ref: 'John 1:1',         text: 'In the beginning was the Word, and the Word was with God, and the Word was God.' },
  { ref: 'Hebrews 1:3',      text: 'Who being the brightness of his glory, and the express image of his person…' },
  { ref: 'Romans 1:20',      text: 'For the invisible things of him from the creation of the world are clearly seen…' },
  { ref: 'Psalm 19:1',       text: 'The heavens declare the glory of God; and the firmament sheweth his handywork.' },
  { ref: 'Isaiah 40:8',      text: 'The grass withereth, the flower fadeth: but the word of our God shall stand for ever.' },
  { ref: 'John 14:6',        text: 'I am the way, the truth, and the life: no man cometh unto the Father, but by me.' },
  { ref: '2 Timothy 3:16',   text: 'All scripture is given by inspiration of God, and is profitable for doctrine…' },
  { ref: '1 Peter 3:15',     text: '…be ready always to give an answer to every man that asketh you a reason of the hope that is in you…' },
  { ref: 'Colossians 2:3',   text: 'In whom are hid all the treasures of wisdom and knowledge.' },
  { ref: 'Acts 17:11',       text: '…they received the word with all readiness of mind, and searched the scriptures daily…' },
  { ref: 'Proverbs 9:10',    text: 'The fear of the LORD is the beginning of wisdom: and the knowledge of the holy is understanding.' },
  { ref: 'Matthew 7:7',      text: 'Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you.' },
  { ref: 'Romans 12:2',      text: '…be ye transformed by the renewing of your mind…' },
  { ref: 'John 8:32',        text: 'And ye shall know the truth, and the truth shall make you free.' },
  { ref: 'Jude 1:3',         text: '…earnestly contend for the faith which was once delivered unto the saints.' },
  { ref: '1 Corinthians 13:12', text: 'For now we see through a glass, darkly; but then face to face…' },
];
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/data/verses/ambient.ts
git commit -m "feat(data): add curated ambient verses for homepage rotator"
```

---

## Task 12: `AmbientVerseRotator` component

**Files:**
- Create: `src/components/hero/AmbientVerseRotator.tsx`

- [ ] **Step 1: Create the file**

```tsx
// src/components/hero/AmbientVerseRotator.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { AMBIENT_VERSES } from '@/data/verses/ambient';

const TYPE_CHAR_MS = 18;     // typewriter speed
const HOLD_MS = 30_000;      // 30s dwell once typed
const FADE_MS = 1200;        // fade-out before next verse

export default function AmbientVerseRotator() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState('');
  const [visible, setVisible] = useState(true);
  const [paused, setPaused] = useState(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    if (reduce) return; // hidden under reduced motion
    if (paused) return;

    const verse = AMBIENT_VERSES[index]!.text;
    let cancelled = false;

    // Typewriter
    setTyped('');
    setVisible(true);
    let i = 0;
    function typeNext() {
      if (cancelled) return;
      if (i <= verse.length) {
        setTyped(verse.slice(0, i));
        i += 1;
        timers.current.push(window.setTimeout(typeNext, TYPE_CHAR_MS));
      } else {
        // hold
        timers.current.push(window.setTimeout(() => {
          if (cancelled) return;
          setVisible(false);
          // fade out, then advance
          timers.current.push(window.setTimeout(() => {
            if (cancelled) return;
            setIndex((n) => (n + 1) % AMBIENT_VERSES.length);
          }, FADE_MS));
        }, HOLD_MS));
      }
    }
    typeNext();

    return () => {
      cancelled = true;
      timers.current.forEach((t) => window.clearTimeout(t));
      timers.current = [];
    };
  }, [index, paused, reduce]);

  if (reduce) return null;

  const verse = AMBIENT_VERSES[index]!;

  return (
    <div
      className="absolute bottom-6 start-6 max-w-sm select-none pointer-events-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-hidden
      style={{
        opacity: visible ? 0.7 : 0,
        transition: `opacity ${FADE_MS}ms var(--motion-ease-out)`,
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontStyle: 'italic',
          fontSize: 14,
          lineHeight: 1.55,
          color: 'var(--color-accent-gold)',
        }}
      >
        “{typed}<span style={{ opacity: 0.6 }}>|</span>”
      </div>
      <div className="t-eyebrow mt-1" style={{ fontSize: 9, letterSpacing: '0.4em' }}>
        — {verse.ref.toUpperCase().replace(/ /g, ' · ')}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Type-check + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/components/hero/AmbientVerseRotator.tsx
git commit -m "feat(hero): add AmbientVerseRotator (typewriter, 30s dwell, pauses on hover)"
```

---

## Task 13: `TriptychPortal` + `HeroArchitectural`

**Files:**
- Create: `src/components/hero/TriptychPortal.tsx`
- Create: `src/components/hero/HeroArchitectural.tsx`

- [ ] **Step 1: `TriptychPortal.tsx`**

```tsx
// src/components/hero/TriptychPortal.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { SectionMark } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';

const PORTALS = [
  { href: '/defend',  glyph: 'cross' as const,    labelKey: 'defend',  subKey: 'defendSub'  },
  { href: '/compare', glyph: 'plusCircle' as const,labelKey: 'compare', subKey: 'compareSub' },
  { href: '/sources', glyph: 'patee' as const,    labelKey: 'sources', subKey: 'sourcesSub' },
];

export default function TriptychPortal() {
  const t = useTranslations('hero.triptych');
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {PORTALS.map((p, i) => (
          <RevealOnScroll key={p.href} delay={i * 0.1}>
            <Link
              href={p.href}
              className="block text-center px-6 py-8 transition-colors"
              style={{
                background: 'rgba(212, 168, 83, 0.04)',
                border: '1px solid var(--color-border)',
                borderRadius: 4,
              }}
            >
              <div className="mb-3"><SectionMark glyph={p.glyph} size={28} /></div>
              <div className="t-caps text-xs" style={{ color: 'var(--color-text-primary)' }}>{t(p.labelKey)}</div>
              <div className="mt-2 t-meta">{t(p.subKey)}</div>
            </Link>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: `HeroArchitectural.tsx`**

```tsx
// src/components/hero/HeroArchitectural.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ArchPanel, Eyebrow } from '@/components/ornament';
import AmbientVerseRotator from './AmbientVerseRotator';
import RevealOnScroll from '@/components/motion/RevealOnScroll';

export default function HeroArchitectural() {
  const t = useTranslations('hero');

  return (
    <section className="relative">
      <ArchPanel className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
        <RevealOnScroll>
          <Eyebrow className="mb-6" style={{ letterSpacing: '0.6em' }}>
            {t('eyebrow')}
          </Eyebrow>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h1 className="t-h1 mb-6" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}>
            {t('headlineLine1')}<br />{t('headlineLine2')}
          </h1>
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <p
            className="t-body max-w-xl mx-auto"
            style={{ color: 'var(--color-text-secondary)', fontSize: '1.0625rem' }}
          >
            {t('subhead')}
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/defend"
              className="inline-block px-7 py-3 t-caps text-xs"
              style={{
                background: 'var(--color-accent-gold)',
                color: 'var(--color-bg-primary)',
                fontWeight: 700,
              }}
            >
              {t('ctaPrimary')}
            </Link>
            <Link
              href="/explore"
              className="inline-block px-7 py-3 t-caps text-xs border"
              style={{
                borderColor: 'var(--color-accent-gold)',
                color: 'var(--color-accent-gold)',
              }}
            >
              {t('ctaSecondary')}
            </Link>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.4}>
          <div className="mt-8 t-meta" style={{ letterSpacing: '0.1em' }}>
            <kbd
              style={{
                fontFamily: 'var(--font-mono)',
                border: '1px solid var(--color-border)',
                padding: '2px 6px',
                marginRight: 8,
              }}
            >
              ⌘K
            </kbd>
            {t('searchHint')}
          </div>
        </RevealOnScroll>

        <AmbientVerseRotator />
      </ArchPanel>
    </section>
  );
}
```

- [ ] **Step 3: Type-check + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add src/components/hero/
git commit -m "feat(hero): add HeroArchitectural and TriptychPortal"
```

---

## Task 14: Command palette — search index + universal search

**Files:**
- Create: `src/components/command/search/types.ts`
- Create: `src/components/command/search/searchIndex.ts`
- Create: `src/components/command/search/universalSearch.ts`

- [ ] **Step 1: Inspect existing data shape**

Run: `ls src/data/`
Expected: shows `arguments/`, `cults/`, possibly more.

Read one existing types file to confirm structure (do not assume):
Run: `head -n 60 src/data/arguments/types.ts`
Expected: shows TypeScript interfaces for arguments.

> If the field names differ from what's used below (`id`, `title`, `category`), adjust the import + map functions accordingly. The plan assumes a `{ id: string; title: string; category?: string }` minimum.

- [ ] **Step 2: `types.ts`**

```ts
// src/components/command/search/types.ts
export type ResultKind = 'argument' | 'doctrine' | 'cult' | 'source' | 'page';

export type SearchResult = {
  id: string;
  kind: ResultKind;
  title: string;
  subtitle?: string;
  href: string;
};
```

- [ ] **Step 3: `searchIndex.ts`**

> The seed list below is intentionally a minimal hand-curated set so Phase 1 ships a working palette without a full data crawl. Phase 2+ will replace `STATIC_INDEX` with a generated index from `src/data/`.

```ts
// src/components/command/search/searchIndex.ts
import type { SearchResult } from './types';

/** Hand-seeded entries. Replaced by data-driven index in Phase 2. */
export const STATIC_INDEX: SearchResult[] = [
  // Pages
  { id: 'page-defend',   kind: 'page', title: 'Defend',   subtitle: 'Apologetics',         href: '/defend' },
  { id: 'page-compare',  kind: 'page', title: 'Compare',  subtitle: 'Traditions',          href: '/compare' },
  { id: 'page-explore',  kind: 'page', title: 'Explore',  subtitle: 'Argument tree',       href: '/explore' },
  { id: 'page-sources',  kind: 'page', title: 'Sources',  subtitle: 'Manuscripts & fathers',href: '/sources' },
  { id: 'page-semantics',kind: 'page', title: 'Semantics',subtitle: 'Word studies',        href: '/semantics' },
  // Featured arguments (seed; expand from src/data in Phase 2)
  { id: 'arg-kalam',         kind: 'argument', title: 'Kalam Cosmological Argument',         subtitle: 'Cosmological',  href: '/defend/atheism' },
  { id: 'arg-fine-tuning',   kind: 'argument', title: 'Fine-Tuning of the Universe',         subtitle: 'Teleological',  href: '/defend/atheism' },
  { id: 'arg-moral',         kind: 'argument', title: 'Moral Argument',                       subtitle: 'Moral',         href: '/defend/atheism' },
  { id: 'arg-resurrection',  kind: 'argument', title: 'Minimal Facts of the Resurrection',    subtitle: 'Historical',    href: '/defend/atheism' },
  { id: 'arg-evil',          kind: 'argument', title: 'Problem of Evil — Free Will Defense',  subtitle: 'Objections',    href: '/defend/atheism' },
];
```

- [ ] **Step 4: `universalSearch.ts`**

```ts
// src/components/command/search/universalSearch.ts
import Fuse from 'fuse.js';
import { STATIC_INDEX } from './searchIndex';
import type { SearchResult } from './types';

const fuse = new Fuse<SearchResult>(STATIC_INDEX, {
  includeScore: true,
  threshold: 0.4,
  keys: [
    { name: 'title',    weight: 0.7 },
    { name: 'subtitle', weight: 0.2 },
    { name: 'kind',     weight: 0.1 },
  ],
});

export function universalSearch(query: string, max = 12): SearchResult[] {
  const q = query.trim();
  if (!q) return [];
  return fuse.search(q, { limit: max }).map((r) => r.item);
}

export function groupByKind(results: SearchResult[]): Record<string, SearchResult[]> {
  const out: Record<string, SearchResult[]> = {};
  for (const r of results) {
    (out[r.kind] ??= []).push(r);
  }
  return out;
}
```

- [ ] **Step 5: Type-check + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/components/command/
git commit -m "feat(command): add seed search index + universal search"
```

---

## Task 15: `CommandPalette` + `CommandBarTrigger`

**Files:**
- Create: `src/components/command/CommandPalette.tsx`
- Create: `src/components/command/CommandBarTrigger.tsx`
- Create: `src/components/command/index.ts`

- [ ] **Step 1: `CommandPalette.tsx`**

```tsx
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
```

- [ ] **Step 2: `CommandBarTrigger.tsx`**

```tsx
// src/components/command/CommandBarTrigger.tsx
'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Search } from 'lucide-react';
import CommandPalette from './CommandPalette';

export default function CommandBarTrigger() {
  const t = useTranslations('command');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handle(e: KeyboardEvent) {
      const isMac = navigator.platform.toUpperCase().includes('MAC');
      if ((isMac ? e.metaKey : e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen(true);
      }
    }
    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label={t('triggerAriaLabel')}
        className="flex items-center gap-2 px-3 py-2 t-caps text-xs border"
        style={{
          borderColor: 'var(--color-border)',
          color: 'var(--color-text-secondary)',
        }}
      >
        <Search size={14} />
        <span className="hidden sm:inline">{t('triggerLabel')}</span>
        <kbd
          className="hidden sm:inline"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            border: '1px solid var(--color-border)',
            padding: '0 4px',
            marginLeft: 4,
          }}
        >
          ⌘K
        </kbd>
      </button>
      <CommandPalette open={open} onClose={() => setOpen(false)} />
    </>
  );
}
```

- [ ] **Step 3: `index.ts`**

```ts
// src/components/command/index.ts
export { default as CommandBarTrigger } from './CommandBarTrigger';
export { default as CommandPalette } from './CommandPalette';
```

- [ ] **Step 4: Type-check + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/command/
git commit -m "feat(command): add CommandPalette overlay + CommandBarTrigger"
```

---

## Task 16: i18n — add new keys to `messages/en.json`

**Files:**
- Modify: `messages/en.json`

- [ ] **Step 1: Open the existing file and inspect the top-level shape**

Run: `head -n 40 messages/en.json`
Expected: JSON with namespaces (e.g. `nav`, `home`, etc.).

- [ ] **Step 2: Merge in the following new namespaces**

Add (or merge with existing keys — do not delete other namespaces) the following top-level entries to `messages/en.json`:

```json
{
  "hero": {
    "eyebrow": "SOLI · DEO · GLORIA",
    "headlineLine1": "Know what",
    "headlineLine2": "you believe",
    "subhead": "Two thousand years of Christian thought, examined, defended, and made navigable.",
    "ctaPrimary": "Enter",
    "ctaSecondary": "Take a Tour",
    "searchHint": "to search anything",
    "triptych": {
      "defend": "Defend",
      "defendSub": "Apologetics",
      "compare": "Compare",
      "compareSub": "Traditions",
      "sources": "Sources",
      "sourcesSub": "Manuscripts"
    }
  },
  "command": {
    "ariaLabel": "Search the platform",
    "triggerLabel": "Search",
    "triggerAriaLabel": "Open search",
    "placeholder": "Search arguments, sources, doctrines…",
    "close": "Close",
    "noResults": "No results.",
    "startTyping": "Begin typing to search.",
    "groups": {
      "argument": "Arguments",
      "doctrine": "Doctrines",
      "cult": "Cults & movements",
      "source": "Sources",
      "page": "Pages"
    }
  },
  "lens": {
    "toggleAriaLabel": "Change reading mode",
    "chooseLens": "Reading mode",
    "names": {
      "seeker": "Seeker",
      "student": "Student",
      "defender": "Defender",
      "researcher": "Researcher",
      "all": "Default"
    },
    "descriptions": {
      "seeker": "Beautiful and atmospheric. Drawn in by wonder.",
      "student": "Structured. Read sequentially with progress.",
      "defender": "Fast lookup. Copy-ready answers for debate.",
      "researcher": "Side-by-side sources and citations.",
      "all": "Balanced — everything available, nothing pinned."
    },
    "onboarding": {
      "eyebrow": "WELCOME",
      "title": "Choose how you'd like to read",
      "body": "The platform adapts to how you study. Pick a mode now — you can change it any time from the corner toggle.",
      "skip": "Maybe later"
    }
  }
}
```

- [ ] **Step 3: Validate JSON**

Run: `node -e "JSON.parse(require('fs').readFileSync('messages/en.json','utf8')); console.log('ok')"`
Expected: `ok`.

- [ ] **Step 4: Run i18n validators**

Run: `npm run validate:i18n` (if it errors on missing keys in other locales, that's expected — Step 5 propagates them).

- [ ] **Step 5: Mirror keys to all other locales as English fallbacks**

For each locale file in `messages/` (excluding `en.json` and `schema.json`), merge the same three new namespaces (`hero`, `command`, `lens`) using the **English values** as placeholders. This is a temporary fallback; native-language translations are a follow-up task tracked outside Phase 1.

Run this Node one-liner to do it (paste verbatim from a single line):

```bash
node -e "const fs=require('fs');const path=require('path');const en=JSON.parse(fs.readFileSync('messages/en.json','utf8'));const NEW={hero:en.hero,command:en.command,lens:en.lens};for(const f of fs.readdirSync('messages')){if(f==='en.json'||f==='schema.json'||!f.endsWith('.json'))continue;const p=path.join('messages',f);const obj=JSON.parse(fs.readFileSync(p,'utf8'));const merged={...obj,hero:obj.hero||NEW.hero,command:obj.command||NEW.command,lens:obj.lens||NEW.lens};fs.writeFileSync(p,JSON.stringify(merged,null,2)+'\n');console.log('merged',f);}"
```

Expected: prints `merged <locale>.json` for each non-English locale.

- [ ] **Step 6: Re-run i18n validators**

Run: `npm run validate:i18n && npm run check:translations`
Expected: PASS (or the same warnings that pre-existed before this task — no new errors).

- [ ] **Step 7: Commit**

```bash
git add messages/
git commit -m "feat(i18n): add hero/command/lens namespaces (English; mirrored as fallback to all locales)"
```

---

## Task 17: Rewrite `Navbar`

**Files:**
- Modify: `src/components/layout/Navbar.tsx` (full replacement)

- [ ] **Step 1: Replace the file with this implementation**

```tsx
// src/components/layout/Navbar.tsx
'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { LensToggle } from '@/components/lens';
import { CommandBarTrigger } from '@/components/command';
import { KeystoneDivider } from '@/components/ornament';

const NAV_ITEMS = [
  { href: '/defend',    labelKey: 'defend' },
  { href: '/compare',   labelKey: 'compare' },
  { href: '/explore',   labelKey: 'explore' },
  { href: '/semantics', labelKey: 'semantics' },
  { href: '/sources',   labelKey: 'sources' },
] as const;

export default function Navbar() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: 'var(--color-bg-primary)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="t-caps text-sm" style={{ color: 'var(--color-text-primary)', letterSpacing: '0.32em' }}>
            THEOLOGIA
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map(({ href, labelKey }) => {
              const isActive = pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className="t-caps text-xs relative py-1"
                  style={{
                    color: isActive ? 'var(--color-accent-gold)' : 'var(--color-text-secondary)',
                    transition: 'color var(--motion-duration-base) var(--motion-ease-out)',
                  }}
                >
                  {t(labelKey)}
                  {isActive && (
                    <span
                      className="absolute left-0 right-0 -bottom-1 h-0.5"
                      style={{ background: 'var(--color-accent-gold)' }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <CommandBarTrigger />
            <LensToggle />
            <LanguageSwitcher />
            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden" style={{ background: 'var(--color-bg-primary)', borderTop: '1px solid var(--color-border)' }}>
          <div className="px-4 py-4">
            {NAV_ITEMS.map(({ href, labelKey }, i) => (
              <div key={href}>
                <Link
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="block t-caps text-xs py-3"
                  style={{ color: pathname.startsWith(href) ? 'var(--color-accent-gold)' : 'var(--color-text-secondary)' }}
                >
                  {t(labelKey)}
                </Link>
                {i < NAV_ITEMS.length - 1 && <KeystoneDivider />}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
```

- [ ] **Step 2: Visual smoke check**

Run: `npm run dev` (in another terminal). Open `http://localhost:3000/en`.

Verify:
- Navbar shows `THEOLOGIA` wordmark in gold-tinted Cinzel caps.
- Five nav items in caps, the active route underlined in gold.
- Right side shows: ⌘K trigger pill, lens toggle (eye icon), language switcher.
- Pressing **⌘K (Mac) / Ctrl+K (Win/Linux)** opens the command palette overlay.
- Typing "kalam" returns the seeded result; ↑/↓ navigate; ↵ navigates; esc closes.
- Lens toggle opens a dropdown with five options; selecting changes the `<html data-lens="…">` attribute (verify in DevTools).

Stop the dev server.

- [ ] **Step 3: Type-check + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add src/components/layout/Navbar.tsx
git commit -m "feat(navbar): rewrite with Cinzel wordmark, ⌘K trigger, lens toggle"
```

---

## Task 18: Rewrite `Footer`

**Files:**
- Modify: `src/components/layout/Footer.tsx` (full replacement)

- [ ] **Step 1: Read existing footer to capture any links/structure to preserve**

Run: `cat src/components/layout/Footer.tsx`

Note any existing links you want to keep. The replacement below uses placeholder columns; merge any real links from the existing file into the appropriate column.

- [ ] **Step 2: Replace with this implementation**

```tsx
// src/components/layout/Footer.tsx
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { KeystoneDivider, InscribedDate } from '@/components/ornament';

export default function Footer() {
  const t = useTranslations('nav');

  return (
    <footer
      className="mt-24"
      style={{
        background: 'var(--color-bg-primary)',
        color: 'var(--color-text-secondary)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <KeystoneDivider />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <div>
            <div className="t-eyebrow mb-3">SECTIONS</div>
            <ul className="space-y-2">
              <li><Link href="/defend"    className="t-body text-sm">{t('defend')}</Link></li>
              <li><Link href="/compare"   className="t-body text-sm">{t('compare')}</Link></li>
              <li><Link href="/explore"   className="t-body text-sm">{t('explore')}</Link></li>
              <li><Link href="/semantics" className="t-body text-sm">{t('semantics')}</Link></li>
              <li><Link href="/sources"   className="t-body text-sm">{t('sources')}</Link></li>
            </ul>
          </div>

          <div>
            <div className="t-eyebrow mb-3">REFERENCE</div>
            <ul className="space-y-2">
              <li><Link href="/sources/manuscripts" className="t-body text-sm">Manuscripts</Link></li>
              <li><Link href="/sources/church-fathers" className="t-body text-sm">Church Fathers</Link></li>
              <li><Link href="/sources/councils" className="t-body text-sm">Councils</Link></li>
            </ul>
          </div>

          <div>
            <div className="t-eyebrow mb-3">ABOUT</div>
            <p className="t-body text-sm" style={{ color: 'var(--color-text-muted)' }}>
              A study platform for the historic Christian faith.
            </p>
            <div className="mt-4">
              <InscribedDate year={new Date().getFullYear()} />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <KeystoneDivider />
          <div className="t-caps text-xs mt-6" style={{ color: 'var(--color-accent-gold)', letterSpacing: '0.6em' }}>
            SOLI · DEO · GLORIA
          </div>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Type-check + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add src/components/layout/Footer.tsx
git commit -m "feat(footer): rewrite with KeystoneDivider, sections, SOLI · DEO · GLORIA"
```

---

## Task 19: Wire `LensProvider` and `LensOnboarding` in the locale layout

**Files:**
- Modify: `src/app/[locale]/layout.tsx`

- [ ] **Step 1: Add imports**

At the top of `src/app/[locale]/layout.tsx`, add:

```tsx
import { LensProvider, LensOnboarding } from '@/components/lens';
import PageTransition from '@/components/motion/PageTransition';
```

- [ ] **Step 2: Wrap children**

Replace the `<NextIntlClientProvider …>` body with:

```tsx
<NextIntlClientProvider messages={messages}>
  <LensProvider>
    <Navbar />
    <main className="flex-1">
      <PageTransition>{children}</PageTransition>
      <SpeedInsights />
    </main>
    <Footer />
    <LensOnboarding />
  </LensProvider>
</NextIntlClientProvider>
```

- [ ] **Step 3: Type-check + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add src/app/[locale]/layout.tsx
git commit -m "feat(lens): wire LensProvider, PageTransition, and LensOnboarding into layout"
```

---

## Task 20: Replace homepage `page.tsx` hero

**Files:**
- Modify: `src/app/[locale]/page.tsx` (replace the hero section; keep below-the-fold sections)

- [ ] **Step 1: Replace the file**

```tsx
// src/app/[locale]/page.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import HeroArchitectural from '@/components/hero/HeroArchitectural';
import TriptychPortal from '@/components/hero/TriptychPortal';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';
import { Eyebrow, KeystoneDivider } from '@/components/ornament';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <div>
      <HeroArchitectural />
      <TriptychPortal />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <RevealOnScroll>
          <Eyebrow className="mb-3">FEATURED · ARGUMENT</Eyebrow>
          <h2 className="t-h2 mb-6" style={{ fontSize: '1.75rem' }}>
            The Kalam Cosmological Argument
          </h2>
          <CodexCard>
            <p className="t-body" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
              <strong style={{ color: 'var(--color-text-primary)' }}>P1.</strong> Everything that begins to exist has a cause of its existence.<br />
              <strong style={{ color: 'var(--color-text-primary)' }}>P2.</strong> The universe began to exist.<br />
              <strong style={{ color: 'var(--color-accent-gold)' }}>∴</strong> Therefore, the universe has a cause of its existence.
            </p>
            <div className="mt-6">
              <Link
                href="/defend/atheism"
                className="t-caps text-xs"
                style={{ color: 'var(--color-accent-gold)', borderBottom: '1px solid var(--color-accent-gold)' }}
              >
                Read full argument →
              </Link>
            </div>
          </CodexCard>
        </RevealOnScroll>
      </section>

      <KeystoneDivider />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <Eyebrow className="mb-3">{t('exploreTools') ?? 'EXPLORE · TOOLS'}</Eyebrow>
        <p className="t-body" style={{ color: 'var(--color-text-secondary)' }}>
          Argument trees, debate mode, manuscript reader, and more — across every section.
        </p>
      </section>
    </div>
  );
}
```

> **Note**: This intentionally drops the previous "stats" / multi-card layout. Those sections are not in the Phase 1 design; if you want any preserved, add them as additional `<RevealOnScroll>` blocks after the featured argument. The translations key `home.exploreTools` may already exist; if `t()` returns the key string, the `??` fallback covers it.

- [ ] **Step 2: Visual smoke check**

Run: `npm run dev`. Open `http://localhost:3000/en`.

Verify:
- Hero: gold `SOLI · DEO · GLORIA` eyebrow, two-line `KNOW WHAT / YOU BELIEVE` headline in Cinzel caps, italic Crimson Pro subhead.
- Faint cathedral arches behind the headline.
- Two CTAs: filled gold `Enter`, outlined gold `Take a Tour`.
- `⌘K to search anything` hint below CTAs.
- **Bottom-left of hero**: ambient verse appears with typewriter effect; after ~30 seconds it fades and a new verse begins.
- Hovering the verse pauses the rotation.
- Below hero: triptych of three portal cards (Defend / Compare / Sources).
- Below that: featured Kalam card.
- Footer: KeystoneDivider columns + `SOLI · DEO · GLORIA`.
- Open with `prefers-reduced-motion: reduce` (DevTools → Rendering → Emulate CSS prefers-reduced-motion: reduce): no animation, no verse rotator visible.

Open `http://localhost:3000/ar` and confirm RTL renders without overflow (the start-positioned verse rotator should anchor to the right in RTL because we used `start-6`, not `left-6`).

Stop the dev server.

- [ ] **Step 3: Type-check + lint + build**

Run: `npx tsc --noEmit && npm run lint && npm run build`
Expected: all PASS. (Build may emit warnings about unused imports if you removed sections — clean them up.)

- [ ] **Step 4: Commit**

```bash
git add src/app/[locale]/page.tsx
git commit -m "feat(homepage): replace hero with HeroArchitectural + TriptychPortal + featured Kalam"
```

---

## Task 21: Cross-cutting smoke + build

**Files:** none (verification task)

- [ ] **Step 1: Production build**

Run: `npm run build`
Expected: build completes without errors. Note any warnings.

- [ ] **Step 2: Start the production server**

Run: `npm run start` (in another terminal). Open `http://localhost:3000`.

- [ ] **Step 3: Walk every top-level route**

Visit each and confirm no runtime errors in console:
- `/en`
- `/en/defend`
- `/en/compare`
- `/en/explore`
- `/en/semantics`
- `/en/sources`
- `/ar` (RTL)

For each: confirm Navbar (new), Footer (new), and that the page itself still renders (it will use legacy styling — that's expected; Phases 2–5 redesign per page).

- [ ] **Step 4: Lens persistence check**

On `/en`, click the lens toggle, choose `Defender`. Reload. Confirm the toggle still says `Defender` and `<html data-lens="defender">` is set.

- [ ] **Step 5: Onboarding shows once**

In an incognito window, open `/en` — the lens onboarding dialog should appear. Pick a lens. Reload — it should not appear again.

- [ ] **Step 6: ⌘K from any page**

On `/en/defend`, press ⌘K. The palette opens. Type "compare". Press ↵. You should navigate to `/en/compare`.

- [ ] **Step 7: Stop server, type-check, lint**

Stop the production server. Run: `npx tsc --noEmit && npm run lint`
Expected: PASS.

- [ ] **Step 8: Commit a marker (no file changes)**

If everything passed, no further code change is needed. The marker commit confirms Phase 1 complete:

```bash
git commit --allow-empty -m "chore(phase-1): foundations verified — type-check, lint, build, manual walk all pass"
```

---

## Notes for the implementer

- **Phase 1 intentionally does not migrate per-page content** (argument pages, comparison page body, etc.). Those keep their existing styling for now. The redesigned Navbar, Footer, hero, lens system, and command bar appear on top.
- **Translations** are mirrored from English in Task 16. Real translations are a follow-up tracked outside this plan.
- **Search index** is hand-seeded. Phase 2 replaces `STATIC_INDEX` with a generated index from `src/data/`.
- **`.glass-card` is intentionally kept** in `globals.css` — many existing pages still use it, and they'll be migrated in their own phases.
- If you find a typing error in an existing file that the type-check surfaces (not introduced by this plan), report it but do not fix it as part of this plan unless it blocks the build.
- Frequent commits per task. Do not batch.
