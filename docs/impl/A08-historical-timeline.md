# A08 — Historical Timeline

**Priority:** P2 (High)
**Affects:** `src/data/history/`, `src/app/[locale]/explore/timeline/page.tsx`

---

## Problem

Timeline event coverage may be shallow. No event detail panels with images. No filter controls. No cross-links to related manuscripts, church fathers, or arguments.

---

## Tasks

### 1. Audit Existing Timeline Data

Read `src/data/history/index.ts` and `src/data/history/types.ts` to understand current data shape and event count.

**Extend the type if needed:**
```ts
interface TimelineEvent {
  id: string
  year: number | string   // number for AD, string for BC ("c. 33 BC")
  era: 'biblical' | 'early-church' | 'byzantine-medieval' | 'reformation' | 'modern'
  title: string
  description: string     // 150-word narrative
  topicTags: string[]     // e.g. ["council", "persecution", "missionary", "theological"]
  region: string          // e.g. "Asia Minor", "North Africa"
  imageUrl?: string       // optional public domain image
  relatedManuscriptIds: string[]
  relatedFatherIds: string[]
  relatedArgumentIds: string[]
  relatedCouncilId?: string
}
```

### 2. Expand Event Database

**Target: 200+ events** across 5 eras.

**Era coverage targets:**

**Biblical History (2000 BC – 100 AD):** ~40 events
- Abraham's call, Exodus, Davidic kingdom, Isaiah's writing, Babylonian exile, return, birth of Jesus, ministry events, crucifixion, resurrection, Pentecost, Paul's missionary journeys, destruction of Jerusalem (70 AD), John on Patmos

**Early Church (100 – 450 AD):** ~50 events
- Apostolic Fathers, Justin Martyr's apologies, Polycarp martyrdom, Irenaeus vs Gnosticism, Origen, Tertullian, Council of Nicaea (325), Athanasius vs Arianism, Council of Constantinople (381), Augustine, Council of Ephesus (431), Council of Chalcedon (451)

**Byzantine/Medieval (450 – 1517):** ~50 events
- Fall of Rome, Benedictine Rule, Gregory the Great, Islam expansion, Iconoclasm controversy, Photian Schism, Great Schism (1054), First Crusade, Anselm (ontological argument), Aquinas, Fourth Crusade, Hesychast controversy, Council of Florence

**Reformation (1517 – 1700):** ~30 events
- Luther's 95 Theses, Diet of Worms, Zwingli, Calvin's Institutes, Council of Trent, English Reformation, Council of Dort, Westminster Confession, Pascal

**Modern (1700 – present):** ~30 events
- Great Awakening, William Wilberforce, Kierkegaard, Vatican I, Spurgeon, Vatican II, C.S. Lewis, Billy Graham, Francis Collins, Pope John Paul II, Alpha Course, global church growth

### 3. Event Detail Panel

**New component:** `src/components/history/TimelineEventPanel.tsx`

Slide-over panel (from right, 480px wide) triggered on event click:
- Event title (Cinzel, large)
- Year + era badge
- `description` (150-word narrative)
- Topic tag chips
- `imageUrl` if present (via `next/image`)
- Cross-links section: "Related Manuscripts", "Related Church Fathers", "Related Arguments"

### 4. Filter Controls

**New component:** `src/components/history/TimelineFilters.tsx`

Controls:
- Era tabs: All | Biblical | Early Church | Byzantine/Medieval | Reformation | Modern
- Topic tag filter chips (multi-select): Council | Persecution | Missionary | Theological Controversy | Creed | Key Person
- Region dropdown (optional, P3)

**File to modify:** `src/app/[locale]/explore/timeline/page.tsx` — add `TimelineFilters` above the timeline; filter the event array before rendering.

### 5. Cross-Link Council to Creed Text

For each council event (Nicaea, Constantinople, Ephesus, Chalcedon, etc.):
- Add a "Read the Creed" link in the event detail panel
- Route to `/sources/councils#[council-id]`

---

## Acceptance Criteria

- [ ] Timeline data has 200+ events after expansion
- [ ] All events have `description` (150 words), `era`, `topicTags` fields populated
- [ ] Event detail panel slides in on click with full content
- [ ] Era filter tabs work correctly
- [ ] Topic tag filter chips work (multi-select)
- [ ] Cross-links from events to manuscripts, fathers, and arguments render in panel
- [ ] Council events link to creed text in `/sources/councils`
