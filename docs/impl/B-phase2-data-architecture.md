# B — Phase 2: Data Architecture

**Mode:** "The Way" — Experience Mode
**Output:** TypeScript data files in `src/data/way/` and type extensions

---

## Prerequisites

- Phase 1 research completed (or content placeholders used with `// TODO` comments)
- Existing Lens types understood (`src/components/lens/types.ts`)

---

## D-01 — TypeScript Types

**New file:** `src/types/way.ts`

```ts
// ─── Prayer ────────────────────────────────────────────────────────────────

export type PrayerTypeId =
  | 'petition'
  | 'thanksgiving'
  | 'intercession'
  | 'confession'
  | 'adoration'
  | 'contemplation'

export interface PrayerType {
  id: PrayerTypeId
  name: string
  description: string        // 100 words, no jargon
  starterPrayer: string      // 50-word prayer in first person
  scriptureReference: string
  scriptureText: string
  tradition: string          // which traditions emphasize this
}

export interface LordsPrayerPhrase {
  id: string                 // e.g. "our-father"
  greek: string
  transliteration: string
  translations: { version: string; text: string }[]
  theologicalNote: string    // 100 words
  reflectionQuestion: string
}

// ─── Discipleship ──────────────────────────────────────────────────────────

export interface Beatitude {
  id: string
  greekWord: string
  transliteration: string
  semanticRange: string
  beatitudeText: string      // ESV rendering
  culturalContext: string
  application: string        // 100 words
  scriptureReference: string
}

export type DisciplineCategory = 'abstinence' | 'engagement'

export interface SpiritualDiscipline {
  id: string
  name: string
  category: DisciplineCategory
  definition: string
  description: string        // 100 words
  starterPractice: string    // 1-week guide
  scriptureReference: string
  scriptureText: string
}

// ─── Journey ───────────────────────────────────────────────────────────────

export type JourneyStageId = 'curious' | 'seeker' | 'believer' | 'disciple' | 'mystic'

export interface JourneyStage {
  id: JourneyStageId
  name: string
  displayName: string        // e.g. "The Curious"
  description: string        // 150 words — who is here
  encouragement: string      // 2 sentences written directly to this person
  resources: { title: string; href: string; type: string }[]
  practices: string[]
  nextStageHint: string      // 1 sentence pointing toward next stage
}

// ─── Retreat ───────────────────────────────────────────────────────────────

export interface RetreatDay {
  day: number                // 1-7
  theme: string              // e.g. "You Are Known"
  scriptureReference: string // e.g. "Psalm 139:1-18"
  scriptureText: string      // full text of the passage
  prayerGuide: string        // instructions for prayer this day
  reflectionPrompt: string   // 1 open question
  actionStep: string         // specific, achievable today
  transitionNote: string     // 1 sentence leading to next day
}

// ─── Stories & People ──────────────────────────────────────────────────────

export interface Testimony {
  id: string
  person: string
  era: string
  vignette: string           // 2-3 sentences
  source: string             // book title + page/chapter
}

export interface SaintProfile {
  id: string
  name: string
  dates: string              // e.g. "1181–1226"
  tradition: 'catholic' | 'orthodox' | 'protestant' | 'ecumenical'
  loveInActionStory: string  // 200 words — specific event
  quote: string
  quoteSource: string
  whyTheyMatter: string      // 50 words
}

export interface ScripturePassage {
  id: string
  reference: string
  text: string               // ESV (or public domain)
  meditation: string         // 100-word contemplative reflection
}

// ─── Skeptic Section ───────────────────────────────────────────────────────

export interface SkepticSection {
  introText: string
  experimentText: string
  johnChapter1: string       // full text of John 1
  transformationStories: Testimony[]
  noPressureText: string
}
```

---

## D-02 — Prayer Types Data

**New file:** `src/data/way/prayer-types.ts`

```ts
import { PrayerType } from '@/types/way'

export const prayerTypes: PrayerType[] = [
  {
    id: 'petition',
    name: 'Petition',
    description: 'Bringing your needs and desires honestly before God...',
    starterPrayer: 'Lord, I come to you honestly...',
    scriptureReference: 'Matthew 7:7-8',
    scriptureText: 'Ask, and it will be given to you...',
    tradition: 'Universal — all Christian traditions',
  },
  // ... 5 more types
]
```

Populate all 6 prayer types. Content from R-01.

---

## D-03 — Lord's Prayer Data

**New file:** `src/data/way/lords-prayer.ts`

Populate 8 phrase objects using content from R-02:
- "Our Father in heaven" (Greek: Πάτερ ἡμῶν ὁ ἐν τοῖς οὐρανοῖς)
- "hallowed be your name"
- "your kingdom come"
- "your will be done, on earth as in heaven"
- "give us this day our daily bread"
- "and forgive us our debts, as we also have forgiven our debtors"
- "and lead us not into temptation"
- "but deliver us from evil"

---

## D-04 — Beatitudes Data

**New file:** `src/data/way/beatitudes.ts`

8 beatitude objects from Matthew 5:3-10. Content from R-04.

Key Greek words: μακάριος (makarios), πτωχοί (ptochoi), πενθοῦντες (penthountes), πραεῖς (praeis), etc.

---

## D-05 — Journey Stages Data

**New file:** `src/data/way/journey-stages.ts`

5 stage objects. Content from R-11.

Resources arrays reference actual platform routes — ensure all hrefs are valid routes.

---

## D-06 — Retreat Data

**New file:** `src/data/way/retreat.ts`

7 retreat day objects. Content from R-12. Scripture texts must be included verbatim (use public domain KJV or ESV with fair use note).

---

## D-07 — Testimonies Data

**New file:** `src/data/way/testimonies.ts`

6+ testimony objects. Content from R-05. All must cite published sources — no fabricated content.

---

## D-08 — Saints Data

**New file:** `src/data/way/saints.ts`

4+ saint profile objects. Content from R-07.

---

## D-09 — Scripture Passages Data

**New file:** `src/data/way/love-passages.ts`

7 passage objects for "God's Love in 7 Passages":
1. Romans 8:38-39
2. Psalm 139:1-16
3. John 3:16 (with deeper study beyond the memory verse)
4. Isaiah 43:1-4
5. Zephaniah 3:17
6. 1 John 4:9-10
7. Hosea 11:1-4

Each needs: reference, text (full passage), 100-word meditation.

---

## D-10 — Spiritual Disciplines Data

**New file:** `src/data/way/disciplines.ts`

12+ discipline objects. Content from R-08.

Minimum disciplines:
- Abstinence: fasting, solitude, silence, simplicity, frugality, chastity, sacrifice, secrecy
- Engagement: study, worship, celebration, service, prayer, fellowship, confession, submission

---

## D-11 — Skeptic Section Data

**New file:** `src/data/way/skeptic.ts`

Single exported object of type `SkepticSection`. Include John chapter 1 in full (KJV — public domain). Transformation stories reference D-07 testimonies.

---

## D-12 — Extend Lens Types

**File to modify:** `src/components/lens/types.ts`

Add to existing `LensId` type or ensure it includes all 5 lenses used by The Way: `'scholar' | 'seeker' | 'apologist' | 'skeptic' | 'believer'`

Add a `WayLensAdaptation` interface:
```ts
export interface WayLensAdaptation {
  showGreekNotes: boolean
  showPatristicCitations: boolean
  tone: 'academic' | 'warm' | 'tactical' | 'honest' | 'devotional'
  entrySection: string   // which Way section to surface first
  headerOverride?: string  // alternate section title for this lens
}

export const WAY_LENS_ADAPTATIONS: Record<LensId, WayLensAdaptation> = {
  scholar:   { showGreekNotes: true,  showPatristicCitations: true,  tone: 'academic',   entrySection: '/way/pray/lords-prayer', headerOverride: 'Theological Contemplation' },
  seeker:    { showGreekNotes: false, showPatristicCitations: false, tone: 'warm',       entrySection: '/way',                   headerOverride: undefined },
  apologist: { showGreekNotes: true,  showPatristicCitations: true,  tone: 'tactical',   entrySection: '/way/why-pray',          headerOverride: 'The Apologetics of Prayer' },
  skeptic:   { showGreekNotes: false, showPatristicCitations: false, tone: 'honest',     entrySection: '/way/skeptic',           headerOverride: 'If You\'re Not Sure' },
  believer:  { showGreekNotes: false, showPatristicCitations: true,  tone: 'devotional', entrySection: '/way/pray/jesus-prayer', headerOverride: 'Deepening Your Prayer' },
}
```

---

## Acceptance Criteria

- [ ] `src/types/way.ts` created with all interfaces
- [ ] All 11 data files created in `src/data/way/`
- [ ] All data files typed against `src/types/way.ts` — no `any`
- [ ] All content fields populated (or marked `// TODO: populate from R-XX`)
- [ ] `src/components/lens/types.ts` extended with `WayLensAdaptation`
- [ ] TypeScript compiles with no errors: `npx tsc --noEmit`
