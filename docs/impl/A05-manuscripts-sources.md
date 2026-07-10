# A05 — Manuscripts & Sources

**Priority:** P2 (High)
**Affects:** `src/data/manuscripts/`, `src/app/[locale]/sources/manuscripts/`

---

## Problem

Papyri coverage is limited. Interlinear reader is per-verse, not passage-level. No facsimile images. No apologetic framing for why manuscript evidence matters. No manuscript tradition comparison.

---

## Tasks

### 1. Expand Papyri Dataset

**Files to modify:**
- `src/data/manuscripts/papyri.ts`
- `src/data/manuscripts/papyri-additional.ts`

**Minimum target:** 50 most significant NT papyri.

**Required fields per entry (check existing type in `types.ts` and extend):**
```ts
interface Papyrus {
  id: string            // e.g. "P52"
  name: string          // e.g. "Rylands Library Papyrus P52"
  date: string          // e.g. "c. 125 AD"
  content: string       // what biblical text it contains
  location: string      // current museum/library
  significance: string  // 150-word apologetic significance
  textualFamily: 'alexandrian' | 'western' | 'byzantine' | 'mixed' | 'unknown'
  imageUrl?: string     // public domain facsimile URL if available
  biblePassages: string[]  // e.g. ["John 18:31-33", "John 18:37-38"]
}
```

**Priority papyri to add (if not present):**
P1, P4, P5, P13, P22, P23, P28, P29, P37, P38, P40, P45, P46, P47, P52, P53, P64, P66, P72, P74, P75, P77, P87, P90, P98, P100, P104, P106, P115, P118

### 2. Passage-Level Interlinear Reader

**File to modify:** `src/components/manuscripts/InterlinearReader.tsx`

**Current behavior (assumed):** Single verse display.

**New behavior:**
- Accept `passage: string` prop (e.g. "John 1:1-14")
- Fetch/render multiple verses in sequence
- Add a chapter navigation strip above the reader: prev/next verse buttons and a "Jump to chapter" selector
- Keep existing word-by-word interlinear display for each verse

### 3. Facsimile Image Integration

**Files to modify:**
- `src/data/manuscripts/codexes.ts` — add `imageUrl` field for CC-licensed images

**Public domain sources:**
- Codex Sinaiticus: images from `codexsinaiticus.org` (CC BY)
- Codex Vaticanus: British Library digital collections
- Codex Alexandrinus: British Library digital collections

**New component to create:** `src/components/manuscripts/FacsimileViewer.tsx`
```ts
interface FacsimileViewerProps {
  imageUrl: string
  alt: string
  caption: string
}
```
Uses `next/image` with `fill` layout, `placeholder="blur"`, zoom-on-click lightbox.

**Integrate into:** `src/app/[locale]/sources/manuscripts/[id]/page.tsx`

### 4. ManuscriptSignificance Block

**New component:** `src/components/manuscripts/ManuscriptSignificance.tsx`

Renders the `significance` field from each manuscript entry as a styled callout block using `ArchPanel` ornament. Positioned prominently at the top of the manuscript detail page.

**Copy pattern:**
> "This manuscript matters because..." — written for a skeptical reader who does not yet understand why a papyrus fragment is apologetically important.

### 5. Manuscript Tradition Comparison Chart

**New component:** `src/components/manuscripts/TraditionComparisonChart.tsx`

A static table comparing:

| Tradition | Key Manuscripts | Geographic Origin | Date Range | Characteristics |
|-----------|----------------|-------------------|------------|-----------------|
| Alexandrian | P75, Codex Vaticanus, Codex Sinaiticus | Egypt | 2nd–4th c. | Shorter, carefully copied |
| Western | Codex Bezae, P38 | Western Mediterranean | 2nd–5th c. | Longer, paraphrastic |
| Byzantine | Majority Text | Asia Minor, Syria | 4th–15th c. | Standardized, widely distributed |

**Add to:** `src/app/[locale]/sources/manuscripts/page.tsx` — below the manuscript list, above the "Why manuscripts matter" section.

---

## Acceptance Criteria

- [ ] Manuscript data includes 50+ NT papyri
- [ ] Each papyrus has `significance`, `textualFamily`, `biblePassages` fields populated
- [ ] Interlinear reader renders multi-verse passages with chapter navigation
- [ ] At least 3 codex entries have `imageUrl` pointing to CC-licensed facsimiles
- [ ] `FacsimileViewer` renders images with `next/image` and a lightbox
- [ ] `ManuscriptSignificance` block rendered at top of each manuscript detail page
- [ ] Tradition comparison chart rendered on manuscript listing page
