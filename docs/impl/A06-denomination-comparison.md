# A06 — Denomination Comparison

**Priority:** P2 (High)
**Affects:** `src/data/denominations/`, `src/app/[locale]/compare/`, `src/components/compare/`

---

## Problem

"Protestant" is too broad. The doctrinal matrix needs more rows (25+). No denomination-specific reading lists, no origin history, no global distribution map.

---

## Tasks

### 1. Sub-divide Protestant Traditions

**Files to modify:**
- `src/data/denominations/denominations-protestant.ts`

Split into 5 separate tradition objects:
- `lutheran` — Lutheranism (Luther, Augsburg Confession, justification by faith alone)
- `reformed` — Reformed/Calvinist (Calvin, Westminster Confession, TULIP, covenant theology)
- `anglican` — Anglicanism (39 Articles, Book of Common Prayer, via media)
- `baptist` — Baptist (believer's baptism, congregational polity, soul competency)
- `pentecostal` — Pentecostal/Charismatic (gifts of the Spirit, baptism in the Spirit, continuationism)

Each must match existing `Denomination` type. Update `src/data/denominations/index.ts` to export all.

### 2. Expand Doctrinal Matrix

**File to modify:** `src/data/comparisons/index.ts`

Add these doctrine rows (target 25+ total):

| Doctrine Key | Label |
|---|---|
| `baptismMode` | Mode of Baptism |
| `baptismEfficacy` | What Baptism Does |
| `eucharistView` | View of the Eucharist |
| `apostolicSuccession` | Apostolic Succession |
| `purgatory` | Purgatory |
| `icons` | Use of Icons / Images |
| `scriptureAndTradition` | Scripture + Tradition |
| `eternalSecurity` | Eternal Security (OSAS) |
| `cessationism` | Cessationism vs. Continuationism |
| `marianDogmas` | Marian Dogmas |
| `eschatologyView` | Eschatology (end times view) |
| `soteriology` | Salvation / Soteriology |
| `ecclesiology` | Church Government |
| `divineSimplicity` | Divine Simplicity |
| `essenceEnergiesDistinction` | Essence-Energies Distinction |
| `theosis` | Theosis / Divinization |

Each row must have a value for: Catholic, Eastern Orthodox, Lutheran, Reformed, Anglican, Baptist, Pentecostal, (and existing "other" groups where relevant).

### 3. Denomination History Tab

**Files to modify:**
- `src/data/denominations/types.ts` — add `originNarrative: string` field (200 words)
- `src/data/denominations/denominations-catholic-orthodox.ts` — populate `originNarrative`
- `src/data/denominations/denominations-protestant.ts` — populate for all 5 sub-traditions
- `src/app/[locale]/compare/[tradition]/page.tsx` — add "History" tab using existing tab pattern

### 4. Reading List per Denomination

**Files to modify:**
- `src/data/denominations/types.ts` — add `recommendedReading: { title: string; author: string; year: number; description: string }[]`
- All denomination data files — add 3–5 reading entries per tradition

**New component:** `src/components/compare/RecommendedReading.tsx`
Renders a styled list of books with title, author, year, and 1-line description.

### 5. Global Distribution Map

**New component:** `src/components/compare/DenominationMap.tsx`

Use a lightweight static SVG world map (e.g. `react-simple-maps` or a static SVG asset).

For each denomination show:
- Primary countries (shaded)
- Approximate global membership number
- Data source citation

**Add to:** `src/app/[locale]/compare/page.tsx` — below the main matrix, as a collapsible section.

### 6. Mobile Matrix Fix

The wide denomination matrix needs mobile treatment.

**File to modify:** `src/components/compare/DoctrinalMatrix.tsx`

On `< 768px`: convert to "accordion card" pattern:
- Dropdown: "Select Denomination" → shows only that denomination's column
- User compares two at a time by selecting two dropdowns

---

## Acceptance Criteria

- [ ] Protestant is split into 5 named traditions (Lutheran, Reformed, Anglican, Baptist, Pentecostal)
- [ ] Doctrinal matrix has 25+ rows populated for all 7+ traditions
- [ ] Each denomination page has a "History" tab with origin narrative
- [ ] Each denomination has 3–5 recommended books rendered
- [ ] A world distribution map renders on the compare hub page
- [ ] Matrix is usable on 375px viewport (card/accordion pattern)
