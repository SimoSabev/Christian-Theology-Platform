# A01 — Content Depth

**Priority:** P1 (Critical)
**Affects:** `/defend`, `/sources`

---

## Problem

Argument entries exist as structured data cards, not scholarly articles. Church father quotes are sparse. No bibliography per argument. Cult responses lack Scripture-by-Scripture refutation.

---

## Tasks

### 1. Expand Apologetics Arguments (`/defend`)

**Files to modify:**
- `src/data/arguments/cosmological.ts`
- `src/data/arguments/ontological.ts`
- `src/data/arguments/teleological.ts`
- `src/data/arguments/moral.ts`
- `src/data/arguments/historical.ts`
- `src/data/arguments/existential.ts`

**What to add to each argument entry:**
```ts
body: string           // 600-900 word essay-level exposition
churchFatherQuotes: {
  father: string
  work: string
  year: string
  quote: string
  source: string
}[]                    // min 3 per argument
scholarProponents: {
  name: string
  affiliation: string
  keyWork: string
}[]
objections: {
  objection: string
  response: string    // 100-150 words per response
}[]
timelineEventIds: string[]   // links to /explore/timeline events
manuscriptIds: string[]      // links to /sources/manuscripts
bibliography: {
  author: string
  title: string
  year: number
  publisher: string
}[]
```

**Render using existing components:**
- `PremiseBlock` for formal argument structure
- `DropCap` at start of `body`
- `CitationList` for `churchFatherQuotes`
- `ObjectionGrid` for `objections` (two-column: objection | response)
- `ProponentRow` for `scholarProponents`

**Files to modify (UI):**
- `src/app/[locale]/defend/atheism/[category]/[argument]/page.tsx` — render new fields

### 2. Expand Cult Responses (`/defend/cults`)

**Files to modify:**
- `src/data/cults/index.ts`

**What to add to each cult/heresy entry:**
```ts
keyVersesAbused: {
  verse: string          // e.g. "John 1:1"
  theirReading: string   // what they claim it says
  correctReading: string // 100-word Orthodox Christian response
  semanticsLink: string  // route to /semantics for this word/verse
}[]
pastoralNote: string     // "If someone you love is in this group..." 150 words
historicalOrModern: 'historical' | 'modern'
```

**Files to modify (UI):**
- `src/app/[locale]/defend/cults/[category]/[objection]/page.tsx` — render `keyVersesAbused` table and `pastoralNote` sidebar
- `src/app/[locale]/defend/cults/page.tsx` — add tab filter: "Historical Heresies" | "Modern Movements"

### 3. Church Father Quotes Database (`/sources`)

**New file to create:**
- `src/data/sources/quotes.ts`

**Type:**
```ts
export interface ChurchFatherQuote {
  id: string
  father: string          // e.g. "Athanasius of Alexandria"
  year: string            // e.g. "c. 318 AD"
  work: string            // e.g. "On the Incarnation"
  originalLanguage: 'greek' | 'latin' | 'syriac' | 'coptic'
  originalText: string    // Greek or Latin original
  translation: string     // English
  translator: string
  topicTags: string[]     // e.g. ["Trinity", "Incarnation", "Eucharist"]
  argumentIds: string[]   // links back to /defend arguments
}
```

**Minimum content:** 50 quotes across 15+ fathers, covering all major argument categories.

**Files to modify (UI):**
- `src/app/[locale]/sources/church-fathers/page.tsx` — add thematic index + search/filter by father, century, topic
- `src/components/layout/Navbar.tsx` or home page — add "Quote of the Day" rotator (random from quotes.ts, seeded by date)

---

## Acceptance Criteria

- [ ] Every argument in `/defend` has a `body` of 600+ words rendered with `DropCap`
- [ ] Every argument has 3+ church father quotes rendered with `CitationList`
- [ ] Every argument has an `ObjectionGrid` with at least 3 objections + responses
- [ ] Every cult/heresy entry has a `keyVersesAbused` table rendered
- [ ] Every cult entry has a `pastoralNote` sidebar block
- [ ] `/defend/cults` page has a working Historical | Modern tab filter
- [ ] `quotes.ts` has 50+ entries
- [ ] Church fathers page has topic-tag filter and century filter
- [ ] "Quote of the Day" appears on the home page
