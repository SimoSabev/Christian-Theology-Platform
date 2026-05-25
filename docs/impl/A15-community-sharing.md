# A15 — Community & Sharing Features

**Priority:** P2 (Phase 1 URL sharing) / P3 (Phases 2–3 notes & social)
**Affects:** All argument, verse, and comparison pages

---

## Problem

No sharing features exist. Users cannot share discoveries, save study notes, or engage in discussion. The platform is a reference tool — these features make it a study companion.

---

## Tasks (Phased)

---

### Phase 1 — URL-Shareable State (P2, no auth required)

#### 1. Shareable Argument Deep Links

Every argument, manuscript, and cult entry already has a unique URL. The gap is that there is no affordance to share.

**New component:** `src/components/layout/ShareButton.tsx`

```ts
interface ShareButtonProps {
  url?: string      // defaults to window.location.href
  title: string     // "Share: Kalam Cosmological Argument"
}
```

**Behavior:**
1. Click → copy URL to clipboard
2. Show toast: "Link copied to clipboard"
3. On mobile: use `navigator.share()` Web Share API if available (native share sheet)

**Add to these pages:**
- Every argument page (`/defend/atheism/[category]/[argument]/page.tsx`)
- Every manuscript detail page (`/sources/manuscripts/[id]/page.tsx`)
- Every cult/heresy page (`/defend/cults/[category]/[objection]/page.tsx`)

#### 2. Shareable Lens + Page State

When a user shares a link with a specific lens active, the recipient should open to the same lens.

**Implementation:**
```ts
// On share, append lens param
const shareUrl = `${window.location.href}?lens=${activeLens}`

// On page load, read lens from URL
const searchParams = useSearchParams()
const lensParam = searchParams.get('lens')
if (lensParam && isValidLens(lensParam)) {
  setLens(lensParam)
}
```

**File to modify:** `src/components/lens/LensProvider.tsx`

#### 3. Toast Notification Component

**New component:** `src/components/ui/Toast.tsx`

Simple, auto-dismissing notification (no library needed):
```ts
interface ToastProps {
  message: string
  duration?: number   // ms, default 2500
}
```

Renders at bottom-center of viewport, slides up and fades out. Used by `ShareButton` and future features.

---

### Phase 2 — Study Notes (P3, localStorage only)

#### 1. Annotation System

**New component:** `src/components/study/StudyNote.tsx`

On any content block (argument body, church father quote, manuscript description):
- Show a small "Add Note" icon (pencil) on hover
- Click → inline text area appears
- Notes stored in `localStorage` under key `theosis-notes-[pageId]-[blockId]`
- Notes persist across sessions

**New component:** `src/components/study/NotesSidebar.tsx`

A slide-over panel (triggered from a "My Notes" button in navbar) showing all saved notes grouped by page.

#### 2. PDF Export of Notes

**In `NotesSidebar.tsx`:**

"Export Notes as PDF" button using `window.print()` with print CSS:
```css
@media print {
  body > * { display: none; }
  #notes-sidebar { display: block; }
}
```

---

### Phase 3 — Social Study (P3, requires Supabase auth)

**Note:** This phase requires a Supabase backend (already in the MCP stack). Do not implement until Phase 1 and 2 are complete and auth is set up.

#### Architecture (plan only — do not implement yet)

- Supabase Auth → user accounts (Google/email)
- `study_rooms` table → a room is a named study session linked to an argument or passage
- `room_annotations` table → shared annotations per room, per content block
- Real-time subscriptions → `supabase.channel()` for live collaborative notes

**When ready to implement:** Create `docs/impl/PHASE3-social-study.md` with the full Supabase schema and component plan.

---

## Acceptance Criteria (Phase 1 only — P2)

- [ ] `ShareButton` component renders on all argument, manuscript, and cult pages
- [ ] Click copies correct URL to clipboard
- [ ] `navigator.share()` used on mobile when available
- [ ] Toast notification appears and auto-dismisses
- [ ] Sharing a URL with `?lens=scholar` opens the page with Scholar lens active
- [ ] (P3 — document only) Study notes architecture is understood; no implementation yet
