# A14 — Missing Content Areas

**Priority:** P1 (Prophecy) / P2 (Archaeology, Science & Faith) / P3 (Worldviews)
**Affects:** New pages and routes

---

## A. Prophecy Page — P1

### Problem

Messianic prophecy fulfillment is one of the strongest evidences for Scripture's divine origin and Jesus's identity — yet there is no dedicated UI surface despite `src/data/prophecy/` existing.

### Tasks

#### 1. Read Existing Prophecy Data

Read `src/data/prophecy/index.ts` and `src/data/prophecy/types.ts` to understand the current data shape.

**Extend the type if needed:**
```ts
interface MesianicProphecy {
  id: string
  otReference: string          // e.g. "Isaiah 7:14"
  otQuote: string              // the prophecy text
  ntFulfillment: string        // e.g. "Matthew 1:22-23"
  ntQuote: string              // the fulfillment text
  dateWritten: string          // e.g. "c. 700 BC"
  probability: string          // e.g. "1 in 10^5" (from Stoner's calculations)
  category: 'birth' | 'lineage' | 'ministry' | 'passion' | 'resurrection' | 'return'
  significance: string         // 100-word apologetic note
  objections?: { objection: string; response: string }[]
}
```

#### 2. Create Prophecy Page

**New file:** `src/app/[locale]/defend/prophecy/page.tsx`

**Sections:**
1. **Hero** — "The Probability of One Man Fulfilling 40 Prophecies" — statistical argument block
2. **Prophecy Table** — all prophecies with columns: OT Reference | NT Fulfillment | Category | Date Written
3. **Category Filter** — chips: All | Birth | Lineage | Ministry | Passion | Resurrection
4. **Statistical Impossibility Block** — use `PremiseBlock` format:
   - P1: The OT prophecies were written centuries before Jesus's birth (verifiable via Dead Sea Scrolls)
   - P2: Jesus fulfilled 40+ specific prophecies exactly
   - P3: The probability of one man fulfilling 8 prophecies by chance is 1 in 10^17 (Stoner)
   - Conclusion: This is statistically impossible without divine guidance
5. **Visual Timeline** — horizontal timeline connecting prophecy date → fulfillment event

**New component:** `src/components/prophecy/ProphecyTable.tsx`
```ts
interface ProphecyTableProps {
  prophecies: MesianicProphecy[]
  activeCategory?: string
}
```

#### 3. Add to Defend Navigation

**File to modify:** `src/app/[locale]/defend/page.tsx` — add a "Prophecy" card/tile.

**File to modify:** Navbar or sidebar if `/defend` has a sub-navigation.

---

## B. Archaeology Page — P2

### Tasks

#### 1. Read Existing Archaeology Data

Read `src/data/archaeology/index.ts` and `src/data/archaeology/types.ts`.

**Extend if needed:**
```ts
interface ArchaeologicalFind {
  id: string
  name: string                    // e.g. "Tel Dan Inscription"
  dateDiscovered: string          // e.g. "1993"
  location: string                // e.g. "Tel Dan, Israel"
  currentLocation: string         // museum
  biblicalCorroboration: string[] // e.g. ["2 Kings 8:28", "2 Chronicles 22:5"]
  significance: string            // 150-word apologetic significance
  imageUrl?: string               // public domain image
  mapCoords: { lat: number; lng: number }
  category: 'person' | 'place' | 'event' | 'culture' | 'inscription'
}
```

#### 2. Create Archaeology Page

**New file:** `src/app/[locale]/sources/archaeology/page.tsx`

**Sections:**
1. **Intro** — "Why Archaeology Matters" — 200-word argument for why physical evidence corroborates Scripture
2. **Find Catalogue** — grid of `ArchaeologicalFind` cards
3. **Category Filter** — Person | Place | Event | Inscription
4. **Find Detail** — click a card → slide-over panel with full `significance`, biblical passages, image
5. **Map** — lightweight SVG map showing find locations (same approach as denomination map)

**Key finds to include:**
- Tel Dan Inscription (House of David)
- Pilate Stone (Pontius Pilate)
- Dead Sea Scrolls (OT reliability)
- Pool of Siloam (John 9)
- Pool of Bethesda (John 5)
- Capernaum synagogue (Luke 4)
- Ossuary of Caiaphas (Matthew 26)
- Hezekiah's Tunnel (2 Kings 20)
- The Nazareth Inscription (resurrection deterrence)

---

## C. Science & Faith Page — P2

### Tasks

#### 1. Read Existing Science-Faith Data

Read `src/data/science-faith/index.ts`.

#### 2. Create Science & Faith Page

**New file:** `src/app/[locale]/defend/science/page.tsx`

**Sections:**
1. **Fine-Tuning** — cosmological constants table (at least 10 constants with value, required range, probability if not tuned)
2. **Origin of Life** — information problem, abiogenesis odds, Meyer's "Signature in the Cell" summary
3. **The Cambrian Explosion** — sudden appearance argument
4. **Consciousness** — hard problem, Thomas Nagel, why materialism struggles
5. **Quotes from Christian Scientists** — Francis Collins (Human Genome Project), John Polkinghorne, John Lennox, Georges Lemaître (Big Bang originator)

**New component:** `src/components/science/CosmologicalConstantsTable.tsx`

---

## D. Worldviews Comparison — P3

### Tasks

#### 1. Create Worldviews Page

**New file:** `src/app/[locale]/compare/worldviews/page.tsx`

**Framework:** OMMD (Origin, Meaning, Morality, Destiny) — from Ravi Zacharias

**Worldviews to compare:**
- Biblical Christianity
- Naturalism / Atheism
- Islam
- Buddhism
- Secular Humanism
- Hinduism

**New component:** `src/components/compare/WorldviewMatrix.tsx` — same DoctrinalMatrix pattern but for worldviews.

---

## Acceptance Criteria

- [ ] `/defend/prophecy` page live with 40+ prophecies, statistical argument, category filter
- [ ] `/sources/archaeology` page live with 10+ finds, map, category filter
- [ ] `/defend/science` page live with constants table, origin of life, quotes from Christian scientists
- [ ] (P3) `/compare/worldviews` page live with OMMD matrix
- [ ] All new pages linked from their parent section hub pages
