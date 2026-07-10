# A02 — User Experience & Navigation

**Priority:** P1 (breadcrumb, accessibility) / P2 (onboarding, related content)
**Affects:** All pages, `src/components/layout/`

---

## Problem

No persistent breadcrumb. No "related content" between sections. No user onboarding. Accessibility gaps (aria-labels, keyboard navigation). No theme toggle.

---

## Tasks

### 1. Breadcrumb Component

**New file to create:**
- `src/components/layout/Breadcrumb.tsx`

**Interface:**
```ts
interface BreadcrumbProps {
  items: { label: string; href?: string }[]
}
```

**Design:** Use `SectionMark` ornament for separators. Sticky at top below navbar. Font: Cinzel, small caps.

**Add to all deep pages:**
- `src/app/[locale]/defend/atheism/[category]/page.tsx`
- `src/app/[locale]/defend/atheism/[category]/[argument]/page.tsx`
- `src/app/[locale]/defend/cults/[category]/page.tsx`
- `src/app/[locale]/defend/cults/[category]/[objection]/page.tsx`
- `src/app/[locale]/sources/manuscripts/[id]/page.tsx`
- `src/app/[locale]/compare/[tradition]/page.tsx`

### 2. Related Content Widget

**New file to create:**
- `src/components/layout/RelatedContent.tsx`

**Interface:**
```ts
interface RelatedItem {
  title: string
  href: string
  type: 'argument' | 'manuscript' | 'father' | 'council' | 'denomination' | 'way'
  description?: string
}
interface RelatedContentProps {
  items: RelatedItem[]
}
```

**Design:** 3-column card grid at bottom of each article page. Uses `KeystoneDivider` above it. Cards have type-badge and title.

**Add to:** Bottom of every argument page, manuscript detail page, church father page.

### 3. First-Visit Onboarding Modal

**New file to create:**
- `src/components/onboarding/OnboardingModal.tsx`

**Logic:**
- Check `localStorage.getItem('theosis-onboarded')` on mount
- If not set, show modal after 1.5s delay
- 3 steps:
  1. "Which best describes you?" → Scholar / Seeker / Apologist / Skeptic (sets Lens)
  2. "What brings you here?" → Understanding faith / Answering objections / Exploring Christianity / Something else
  3. Brief tour: "Here's what Theosis offers" → 4 cards linking to Defend, Compare, Explore, The Way
- On complete: set `localStorage.getItem('theosis-onboarded', 'true')`; set lens from step 1

**Files to modify:**
- `src/app/[locale]/layout.tsx` — render `<OnboardingModal />` once at layout level

### 4. Accessibility Audit & Fixes

**Files to audit and fix:**
- `src/components/command/CommandPalette.tsx` — add `role="dialog"`, `aria-label="Search"`, focus trap on open, `Escape` closes
- `src/app/[locale]/explore/argument-tree/page.tsx` — add `aria-label` to XYFlow container; ensure all nodes have `tabIndex` and keyboard Enter/Space activates
- `src/components/lens/LensToggle.tsx` — add `aria-pressed` state; ensure keyboard operable
- All `<button>` without text content — add `aria-label`
- All images — add meaningful `alt` text
- All icon-only interactive elements — add `aria-label`

**Run after fixes:**
```bash
npx axe-core-npm --include "#__next"
```
Target: 0 critical violations.

### 5. Dark/Light Theme Toggle

**New file to create:**
- `src/components/layout/ThemeToggle.tsx`

**Implementation:**
- Use CSS custom properties already defined in `globals.css`
- Toggle `data-theme="light"` on `<html>` element
- Persist in `localStorage`
- Place in `src/components/layout/Navbar.tsx` — right side, next to language switcher

---

## Acceptance Criteria

- [ ] Breadcrumb visible and correct on all pages deeper than section root
- [ ] Breadcrumb uses `SectionMark` separator and is sticky
- [ ] `RelatedContent` appears at bottom of all argument and manuscript detail pages with 3+ items
- [ ] Onboarding modal appears on first visit, does not appear on return visits
- [ ] Onboarding sets the Lens correctly
- [ ] 0 critical axe violations on all main pages
- [ ] All buttons and icon-only elements have `aria-label`
- [ ] Theme toggle in navbar; preference persists across sessions
