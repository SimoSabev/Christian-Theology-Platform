# A03 — Lens System

**Priority:** P1 (Critical)
**Affects:** `src/components/lens/`, all section pages

---

## Problem

The Lens system has components but it is unclear how many pages consume `useLens()` to actually alter content. Many pages may render identically regardless of lens. There is no "recommended path" per lens, and lens state may not persist across navigation.

---

## Tasks

### 1. Lens Compatibility Audit

**Create a matrix document** (not a code file — a comment block in `src/components/lens/types.ts`):

For every page in the app, record: does it call `useLens()`? Does lens change its content? Result: which pages need implementation.

**Pages to audit:**
```
/defend/atheism/[category]/[argument]/page.tsx
/defend/cults/[category]/[objection]/page.tsx
/compare/page.tsx
/compare/side-by-side/page.tsx
/compare/[tradition]/page.tsx
/explore/argument-tree/page.tsx
/explore/debate-mode/page.tsx
/explore/timeline/page.tsx
/sources/church-fathers/page.tsx
/sources/councils/page.tsx
/sources/manuscripts/page.tsx
/sources/manuscripts/[id]/page.tsx
/semantics/page.tsx
/[locale]/page.tsx (home)
```

### 2. Define Lens Content Variants

**File to modify:** `src/components/lens/types.ts`

Add per-lens content variant structure:
```ts
export type LensId = 'scholar' | 'seeker' | 'apologist' | 'skeptic' | 'believer'

export interface LensContentVariant {
  tone: 'academic' | 'warm' | 'tactical' | 'honest' | 'devotional'
  showFootnotes: boolean
  showGreekHebrew: boolean
  showPatristicCitations: boolean
  argumentDepth: 'simplified' | 'standard' | 'full'
  defaultEntry: string   // recommended first page for this lens
  homepageMessage: string  // shown on hero for this lens
}

export const LENS_VARIANTS: Record<LensId, LensContentVariant> = {
  scholar:   { tone: 'academic',   showFootnotes: true,  showGreekHebrew: true,  showPatristicCitations: true,  argumentDepth: 'full',       defaultEntry: '/defend/atheism/cosmological', homepageMessage: 'Explore the scholarly depth of Christian theology.' },
  seeker:    { tone: 'warm',       showFootnotes: false, showGreekHebrew: false, showPatristicCitations: false, argumentDepth: 'simplified', defaultEntry: '/way',                        homepageMessage: 'Begin your journey wherever you are.' },
  apologist: { tone: 'tactical',   showFootnotes: true,  showGreekHebrew: true,  showPatristicCitations: true,  argumentDepth: 'full',       defaultEntry: '/defend',                     homepageMessage: 'Equip yourself to defend the faith with reason.' },
  skeptic:   { tone: 'honest',     showFootnotes: false, showGreekHebrew: false, showPatristicCitations: false, argumentDepth: 'simplified', defaultEntry: '/way/skeptic',                homepageMessage: 'Ask your hardest questions here. Nothing is off limits.' },
  believer:  { tone: 'devotional', showFootnotes: false, showGreekHebrew: false, showPatristicCitations: true,  argumentDepth: 'standard',   defaultEntry: '/way/pray',                   homepageMessage: 'Go deeper into the faith you already hold.' },
}
```

### 3. LensRecommendedPath Component

**New file:** `src/components/lens/LensRecommendedPath.tsx`

Renders on the home page sidebar or below hero: "You are exploring as a **Seeker** — we recommend starting with [link]." Uses the `defaultEntry` from `LENS_VARIANTS`.

### 4. Persist Lens State

**File to modify:** `src/components/lens/LensProvider.tsx`

- On lens change: `localStorage.setItem('theosis-lens', lensId)`
- On mount: read from `localStorage`; if set, restore lens without showing onboarding
- Fallback: `'seeker'` if nothing stored

### 5. Always-Visible Lens Switcher

**File to modify:** `src/components/layout/Navbar.tsx`

Add a `LensToggle` chip/pill in the navbar right section (next to theme toggle). Shows current lens name as short label (e.g. "Scholar"). Click opens a small dropdown with all 5 lens options and their descriptions.

### 6. Apply Lens to Pages (implement for each audited page that needs it)

For argument pages — use `useLens()` to:
- Show/hide footnotes (`showFootnotes`)
- Show/hide Greek terms (`showGreekHebrew`)
- Show/hide patristic citations (`showPatristicCitations`)
- Render simplified vs full `body` (`argumentDepth`)

**Pattern to follow:**
```tsx
const { lens } = useLens()
const variant = LENS_VARIANTS[lens]

return (
  <>
    {variant.showPatristicCitations && <CitationList quotes={argument.churchFatherQuotes} />}
    {variant.showGreekHebrew && <GreekTermPanel terms={argument.greekTerms} />}
  </>
)
```

---

## Acceptance Criteria

- [ ] Every page in the audit matrix has been checked and marked as "lens-aware" or "lens-not-needed"
- [ ] All argument pages respond to lens (footnotes, Greek terms, patristic citations toggle)
- [ ] `LensRecommendedPath` renders on home page with correct link per lens
- [ ] Lens state survives page navigation and browser refresh
- [ ] Lens switcher visible in navbar at all times
- [ ] All 5 lens variants defined with correct flags
