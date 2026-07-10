# B — Phase 4: Pages & Routes

**Mode:** "The Way" — Experience Mode
**Output:** All pages under `src/app/[locale]/way/`

---

## Prerequisites

- Phase 2 data files complete
- Phase 3 components complete

## Route Structure

```
src/app/[locale]/way/
├── page.tsx                        P-01 — Entry / hub
├── layout.tsx                      Shared layout for all /way routes
├── pray/
│   ├── page.tsx                    P-02 — Prayer hub
│   ├── lords-prayer/
│   │   └── page.tsx                P-03
│   ├── lectio-divina/
│   │   └── page.tsx                P-04
│   ├── jesus-prayer/
│   │   └── page.tsx                P-05
│   └── silent-prayer/
│       └── page.tsx                P-06
├── why-pray/
│   └── page.tsx                    P-07
├── act/
│   ├── page.tsx                    P-08 — Act hub
│   ├── sermon-on-the-mount/
│   │   └── page.tsx                P-09
│   ├── disciplines/
│   │   └── page.tsx                P-10
│   └── love-your-enemies/
│       └── page.tsx                P-11
├── love/
│   ├── page.tsx                    P-12 — Love hub
│   ├── prodigal-son/
│   │   └── page.tsx                P-13
│   ├── passages/
│   │   └── page.tsx                P-14
│   ├── saints/
│   │   └── page.tsx                P-15
│   └── letter/
│       └── page.tsx                P-16
├── journey/
│   └── page.tsx                    P-17
├── retreat/
│   ├── page.tsx                    P-18 — Retreat hub
│   └── [day]/
│       └── page.tsx                P-19 — Individual day
└── skeptic/
    └── page.tsx                    P-20
```

---

## Shared Layout

**New file:** `src/app/[locale]/way/layout.tsx`

```tsx
import { WayLayout } from '@/components/way/WayLayout'

export default function WayRootLayout({ children }: { children: React.ReactNode }) {
  return <WayLayout>{children}</WayLayout>
}
```

This applies the warm visual theme and sidebar to ALL `/way` routes automatically.

---

## P-01 — `/way` Entry Page

**File:** `src/app/[locale]/way/page.tsx`

**Structure:**
1. `WayOnboarding` — shown on first visit, skipped on return
2. Large welcome heading: "The Way" with John 14:6 subtitle
3. `JourneyStageMap` — shows all 5 stages; user's stage highlighted
4. 5 section cards (one per content area): How to Pray | Why Pray | How to Act | Encountering Love | For the Skeptic
5. 7-Day Retreat teaser card with `RetreatProgress` showing current progress

**Metadata:**
```ts
export const metadata = {
  title: 'The Way — Living the Christian Faith | Theosis',
  description: 'A contemplative space for encountering the love of Christ — for believers, seekers, and skeptics alike.',
}
```

---

## P-02 — `/way/pray`

**File:** `src/app/[locale]/way/pray/page.tsx`

**Structure:**
1. `WayPageHeader` — "How to Pray", subtitle: "Prayer is not performance. It is conversation."
2. 6 `PrayerTypeCard` components in a 2-column grid
3. Section: "Want to go deeper?" → navigation cards to lords-prayer, lectio-divina, jesus-prayer, silent-prayer

---

## P-03 — `/way/pray/lords-prayer`

**File:** `src/app/[locale]/way/pray/lords-prayer/page.tsx`

**Structure:**
1. `WayPageHeader` — "The Lord's Prayer"
2. `DropCap` on first phrase
3. 8 `LordsPrayerBlock` phrase components in sequence
4. Closing: "Now pray it again — slowly" with the full prayer displayed in large Cormorant

---

## P-04 — `/way/pray/lectio-divina`

**File:** `src/app/[locale]/way/pray/lectio-divina/page.tsx`

**Structure:**
1. `WayPageHeader` — "Lectio Divina: Reading with God"
2. Historical note (2 paragraphs — Guigo II, monastic tradition)
3. `LectioDivinaGuide` — 4-tab interactive component
4. Practice passage embedded at bottom: "Now try it with this passage:" + `ScripturePassageMeditation`

---

## P-05 — `/way/pray/jesus-prayer`

**File:** `src/app/[locale]/way/pray/jesus-prayer/page.tsx`

**Structure:**
1. `WayPageHeader` — "The Jesus Prayer"
2. `JesusPrayerAmbient` — full-width breathing component (auto-play)
3. Below: "Lord Jesus Christ, Son of God, have mercy on me, a sinner."
4. History section (400 words from R-09)
5. Method section (how to practice)
6. Connection to the Philokalia
7. `BreathPrayerWidget` at bottom as an interactive practice tool

---

## P-06 — `/way/pray/silent-prayer`

**File:** `src/app/[locale]/way/pray/silent-prayer/page.tsx`

**Structure:**
1. `WayPageHeader` — "The Prayer of Silence"
2. Content: desert fathers on silence, apophatic tradition
3. `BreathPrayerWidget` — embedded and prominent
4. "How to sit in silence" — 5 practical steps
5. Quote: Anthony the Great on stillness

---

## P-07 — `/way/why-pray`

**File:** `src/app/[locale]/way/why-pray/page.tsx`

**Structure:**
1. `WayPageHeader` — "Why Pray?", subtitle: "If God knows everything, why tell him anything?"
2. Section: "The Theology of Prayer" — 200 words
3. Section: "The Relational God" — 200 words (contrast with deism)
4. Section: "Does Prayer Change Things?" — C.S. Lewis section, honest treatment
5. Section: "What Science Suggests" — cautious 200-word summary
6. 3 `TestimonyBlock` components
7. Section: "The God Who Hides" — 200 words on divine hiddenness

---

## P-08 — `/way/act`

**File:** `src/app/[locale]/way/act/page.tsx`

**Structure:**
1. `WayPageHeader` — "How to Act for Christ"
2. Quote: "Faith without works is dead." — James 2:26
3. Navigation cards: Sermon on the Mount | Spiritual Disciplines | Loving Your Enemies | Works of Mercy | Virtue | Sabbath
4. Featured: First 3 `BeatitudeBlock` components as a teaser

---

## P-09 — `/way/act/sermon-on-the-mount`

**File:** `src/app/[locale]/way/act/sermon-on-the-mount/page.tsx`

**Structure:**
1. `WayPageHeader` — "The Sermon on the Mount"
2. Overview text (500 words from W-08)
3. 8 `BeatitudeBlock` components in sequence
4. Closing navigation to related disciplines

---

## P-10 — `/way/act/disciplines`

**File:** `src/app/[locale]/way/act/disciplines/page.tsx`

**Structure:**
1. `WayPageHeader` — "Spiritual Disciplines"
2. Category filter tabs: All | Abstinence | Engagement
3. Grid of `DisciplineCard` components (filtered by active category)

---

## P-11 — `/way/act/love-your-enemies`

**File:** `src/app/[locale]/way/act/love-your-enemies/page.tsx`

**Structure:**
1. `WayPageHeader` — "Love Your Enemies"
2. Matthew 5:44 in large Cormorant
3. Exposition text (600 words from W-10)
4. 2 `TestimonyBlock` components: Corrie ten Boom + Martin Luther King Jr.
5. Practical guide: "How to begin when you can't forgive"

---

## P-12 — `/way/love`

**File:** `src/app/[locale]/way/love/page.tsx`

**Structure:**
1. `WayPageHeader` — "Encountering Love"
2. Opening: 1 John 4:8 — "God is love" — large, centered
3. Navigation cards: The Prodigal Son | 7 Passages | Saints | A Letter from God
4. Featured `ScripturePassageMeditation`: Romans 8:38-39 (the most beloved)

---

## P-13 — `/way/love/prodigal-son`

**File:** `src/app/[locale]/way/love/prodigal-son/page.tsx`

**Structure:**
1. `WayPageHeader` — "The Prodigal Son"
2. `ProdigalSonReader` — full Luke 15:11-32 with commentary

No sidebar on this page — the reading deserves full width and silence.
Add `showSidebar={false}` to the `WayLayout` on this specific page.

---

## P-14 — `/way/love/passages`

**File:** `src/app/[locale]/way/love/passages/page.tsx`

**Structure:**
7 `ScripturePassageMeditation` components in sequence, each separated by `KeystoneDivider`.

---

## P-15 — `/way/love/saints`

**File:** `src/app/[locale]/way/love/saints/page.tsx`

**Structure:**
1. `WayPageHeader` — "Saints Who Radiated Love"
2. Brief intro: "These are not impossible ideals — they were ordinary people transformed by extraordinary love."
3. 4+ `SaintPortrait` components

---

## P-16 — `/way/love/letter`

**File:** `src/app/[locale]/way/love/letter/page.tsx`

**Structure:**
1. No page header — the `LetterFromGod` component is the entire page
2. Minimal surrounding UI — this page should feel like receiving a letter
3. After the letter: a single link — "Return to The Way" — nothing else

---

## P-17 — `/way/journey`

**File:** `src/app/[locale]/way/journey/page.tsx`

**Structure:**
1. `WayPageHeader` — "The Journey"
2. `JourneyStageMap` — interactive, full-width
3. `JourneyStageDetail` — rendered for the selected stage (default: user's stored stage from onboarding)
4. Cross-links from each stage to relevant platform sections (defend, compare, explore, way)

---

## P-18 — `/way/retreat`

**File:** `src/app/[locale]/way/retreat/page.tsx`

**Structure:**
1. `WayPageHeader` — "Seven Days with Christ"
2. `RetreatProgress` — prominent, shows current state
3. 7 `RetreatDayCard` components in a vertical list
4. Each card links to `/way/retreat/[day]` for the full-page experience

---

## P-19 — `/way/retreat/[day]`

**File:** `src/app/[locale]/way/retreat/[day]/page.tsx`

**Structure:**
- Parse `params.day` as number 1-7; redirect to `/way/retreat` if invalid
- Full-page `RetreatDayCard` with expanded layout:
  1. Day number + theme (full-width header)
  2. Scripture text (full passage, large)
  3. Prayer guide (expanded, step-by-step)
  4. Reflection prompt (prominently displayed — give it space)
  5. Action step (boxed, actionable)
  6. Completion button
  7. Prev/Next day navigation

---

## P-20 — `/way/skeptic`

**File:** `src/app/[locale]/way/skeptic/page.tsx`

**Structure:**
1. No `WayPageHeader` — open directly with `SkepticInvitation` component
2. `SkepticInvitation` renders all sub-sections
3. `ExperimentBlock` embedded within
4. No sidebar pressure — show `showSidebar={false}`

**Metadata:**
```ts
export const metadata = {
  title: 'If You Don\'t Believe Yet | The Way | Theosis',
  description: 'You don\'t have to believe to explore. Start here.',
}
```

---

## Acceptance Criteria

- [ ] All 20 routes exist and render without errors
- [ ] `/way/layout.tsx` applies `WayLayout` to all child routes
- [ ] All pages use correct metadata for SEO
- [ ] `P-13` (Prodigal Son) and `P-20` (Skeptic) render without sidebar
- [ ] `P-19` (retreat/[day]) validates day param and redirects for invalid values
- [ ] `P-01` shows `WayOnboarding` on first visit, skips on return
- [ ] Navigation between pages works (prev/next on retreat days, stage navigation on journey)
- [ ] `npm run build` completes with no errors for all Way routes
