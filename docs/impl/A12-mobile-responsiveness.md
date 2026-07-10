# A12 — Mobile Responsiveness

**Priority:** P1 (Critical)
**Affects:** All pages, especially XYFlow tree and denomination matrix

---

## Problem

XYFlow argument tree is hard to use on mobile. Command palette overflows on small screens. Denomination comparison matrix requires horizontal scroll with no affordance. Multi-column ornament layouts may collapse poorly.

---

## Tasks

### 1. Argument Tree — Mobile Fixes

**File to modify:** `src/app/[locale]/explore/argument-tree/page.tsx`

```tsx
<ReactFlow
  panOnScroll
  zoomOnPinch              // enable pinch zoom
  panOnDrag
  minZoom={0.2}
  maxZoom={2.5}
>
  <MiniMap
    style={{ bottom: 80, right: 16 }}  // avoid overlap with mobile nav
    zoomable
    pannable
  />
  <Controls showInteractive={false} />
</ReactFlow>
```

Add a **floating "Reset View" button** (bottom-left corner on mobile):
```tsx
<button
  className="fixed bottom-20 left-4 z-50 rounded-full bg-stone-900 border border-gold px-3 py-2 text-sm md:hidden"
  onClick={() => reactFlowInstance.fitView({ padding: 0.2 })}
>
  Reset View
</button>
```

### 2. Command Palette — Mobile Fix

**File to modify:** `src/components/command/CommandPalette.tsx`

On `< 768px`:
- Make the palette full-screen (position: fixed, inset: 0, z-index: 50)
- Input at top, results scrollable below
- Close button (X) at top right, because Escape key is less accessible on mobile

```tsx
const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

return (
  <div className={cn(
    "fixed z-50 bg-stone-950 border border-stone-800",
    isMobile
      ? "inset-0 rounded-none flex flex-col"
      : "top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl rounded-xl"
  )}>
```

### 3. Denomination Matrix — Mobile Card/Accordion

**File to modify:** `src/components/compare/DoctrinalMatrix.tsx`

On `< 768px`:
- Hide the wide table
- Show a two-dropdown interface:
  - "Tradition A" select
  - "Tradition B" select (optional — can view one at a time)
- Render a vertical list of doctrine rows comparing the two selected traditions

```tsx
// Mobile view
{isMobile && (
  <div className="space-y-4">
    <Select value={tradA} onChange={setTradA} options={traditions} />
    <Select value={tradB} onChange={setTradB} options={traditions} />
    {doctrines.map(d => (
      <MobileDoctrinRow key={d.id} doctrine={d} tradA={tradA} tradB={tradB} />
    ))}
  </div>
)}

// Desktop view (existing table)
{!isMobile && <DoctrinalTable ... />}
```

### 4. Wide Tables — Scroll Affordance

For **all** wide tables in the platform (manuscripts list, timeline at certain widths, semantic defense tables):

**File to modify:** Apply a wrapper to each table:
```tsx
<div className="relative overflow-x-auto">
  {/* Scroll shadow gradient — indicates more content to the right */}
  <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-stone-950 to-transparent md:hidden" />
  <table className="min-w-max w-full">
    ...
  </table>
</div>
```

Files to apply to:
- `src/components/compare/DoctrinalMatrix.tsx`
- `src/app/[locale]/sources/manuscripts/page.tsx`
- `src/app/[locale]/sources/church-fathers/page.tsx`
- `src/app/[locale]/sources/councils/page.tsx`

### 5. Full Responsive Audit

**Breakpoints to test:** 375px (iPhone SE), 430px (iPhone Pro Max), 768px (iPad), 1280px (laptop)

**Tool:** Use browser DevTools device emulation. Check each page at each breakpoint.

**Known pages to fix beyond the above:**
- `src/components/reader/ArgumentSidebar.tsx` — ensure sidebar collapses to a bottom drawer on mobile
- `src/components/hero/TriptychPortal.tsx` — ensure 3-column layout stacks vertically on mobile
- `src/app/[locale]/explore/debate-mode/page.tsx` — check two-column debate layout

**Document any issues found** as follow-up tasks.

---

## Acceptance Criteria

- [ ] Argument tree is navigable on iPhone SE (375px) — pinch zoom works, MiniMap visible, Reset View button present
- [ ] Command palette is full-screen on mobile with working close button
- [ ] Denomination matrix shows dropdown selector on mobile
- [ ] All wide tables have `overflow-x-auto` + scroll shadow gradient
- [ ] ArgumentSidebar collapses correctly on mobile
- [ ] TriptychPortal stacks vertically on 375px
- [ ] No horizontal overflow on any page at 375px viewport
