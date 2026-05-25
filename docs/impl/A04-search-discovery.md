# A04 — Search & Discovery

**Priority:** P2 (High)
**Affects:** `src/components/command/`

---

## Problem

The command palette and verse pattern detection exist but may not index all content types. No faceted search, no recent searches, no bookmarks. The verse detection feature is powerful but undiscovered.

---

## Tasks

### 1. Unified Build-Time Search Index

**File to modify:** `src/components/command/search/searchIndex.ts`

Build a complete index at build time covering all content types. Each entry:
```ts
interface SearchEntry {
  id: string
  type: 'argument' | 'manuscript' | 'father' | 'council' | 'verse' | 'cult' | 'denomination' | 'way'
  title: string
  body: string          // searchable text (first 300 chars of content)
  href: string          // route to navigate to
  tags: string[]
}
```

**Sources to index:**
- `src/data/arguments/index.ts` → all arguments
- `src/data/sources/quotes.ts` → all church father quotes (father name + quote text)
- `src/data/manuscripts/index.ts` → all manuscripts
- `src/data/cults/index.ts` → all cult/heresy entries
- `src/data/denominations/index.ts` → all denominations
- `src/data/history/index.ts` → timeline events (title + description)
- `src/data/way/` → all Experience Mode content (when built)

**How to build:** Create `src/components/command/search/buildIndex.ts` that imports all data and exports `SEARCH_INDEX: SearchEntry[]`. Import this in `searchIndex.ts`.

### 2. Result Type Badges

**File to modify:** `src/components/command/CommandPalette.tsx`

Each search result shows a colored badge before the title:
```
[Argument]     Kalam Cosmological Argument
[Manuscript]   Codex Sinaiticus
[Father]       Athanasius — On the Incarnation
[Council]      Council of Nicaea (325 AD)
[Verse]        John 3:16 — detected verse
```

Use `src/components/ornament/Eyebrow.tsx` styling for the badge.

### 3. Faceted Filter Chips

**File to modify:** `src/components/command/CommandPalette.tsx`

Add filter chips above results when there are 5+ results:
```
All  |  Arguments  |  Manuscripts  |  Fathers  |  Verses  |  Councils
```

Clicking a chip filters `SearchEntry[]` by `type`. Active chip highlighted in muted gold.

### 4. Recent Searches Persistence

**File to modify:** `src/components/command/CommandPalette.tsx`

- On result click: push `{ query, result }` to `localStorage` key `'theosis-recent-searches'` (max 8 entries, deduped)
- On palette open with empty input: show "Recent" section with last 5 searches
- Show an × button to clear individual entries

### 5. Surface Verse Detection in UI

**File to modify:** `src/components/command/CommandPalette.tsx`

When verse pattern is detected (e.g. user types "John 3:16"):
- Show a highlighted "Verse Detected" result at the top with a Bible icon
- Route to `/semantics?verse=John+3%3A16`

Add a hint in the command palette placeholder text: `Search or type a verse (e.g. John 3:16)...`

### 6. Keyboard Shortcut Surfacing

**Files to modify:**
- `src/components/hero/HeroArchitectural.tsx` — add small hint below search call-to-action: `Press ⌘K to search`
- `src/app/[locale]/page.tsx` — same hint in hero area

---

## Acceptance Criteria

- [ ] Search index covers all 8 content types
- [ ] Result type badge visible for every result
- [ ] Faceted filter chips appear and filter correctly
- [ ] Recent searches shown on empty palette open; individual items clearable
- [ ] Verse detection produces a highlighted top result and routes to semantics
- [ ] Keyboard shortcut hint visible in hero
- [ ] Palette placeholder updated to mention verse detection
