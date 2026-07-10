# B — Phase 6: Integration

**Mode:** "The Way" — Experience Mode
**Output:** Cross-links, navigation updates, Lens integration, localStorage persistence

---

## Prerequisites

- Phases 2–5 complete (data, components, pages, content)

---

## I-01 — Add "The Way" to Site Navigation

**File to modify:** `src/components/layout/Navbar.tsx`

Add `/way` as the fourth main nav item after "Explore":
```
Defend  |  Compare  |  Explore  |  The Way
```

Icon: a small flame SVG (inline in the nav item). Style matches existing nav items.

On mobile hamburger menu: "The Way" appears in the same order.

**File to modify:** `src/app/[locale]/page.tsx` (home page)

Add "The Way" as the fourth portal card in the TriptychPortal (or extend it to a quad):
- Icon: flame
- Title: "The Way"
- Subtitle: "Prayer, practice, and the living encounter with Christ"
- Route: `/way`

---

## I-02 — Extend Lens System for The Way

**File to modify:** `src/components/lens/LensProvider.tsx`

Ensure lens state is available within The Way (it should be already via context, but verify).

**Files to update:** Each Way page that needs lens adaptation

Apply `LensAdaptedContent` (C-22) in these specific locations:

| Page | What changes per lens |
|---|---|
| `/way/pray/lords-prayer` | Scholar: show full Greek text + patristic citations. Skeptic: hide Greek, show "why bother" intro |
| `/way/pray/jesus-prayer` | Scholar: add Orthodox theology footnotes. Seeker: add "what does this mean?" aside |
| `/way/why-pray` | Scholar: add citations. Skeptic: surface the hiddenness of God section first |
| `/way/act/sermon-on-the-mount` | Scholar: add Greek word notes. Seeker: hide Greek |
| `/way/journey` | Skeptic: default to "Curious" stage. Believer: default to "Disciple" or "Mystic" stage |
| `/way/skeptic` | Skeptic lens: renders normally. All other lenses: show a gentle redirect suggestion to `Defend` |

**Pattern:**
```tsx
import { useLens } from '@/components/lens/useLens'
import { WAY_LENS_ADAPTATIONS } from '@/components/lens/types'

const { lens } = useLens()
const adaptation = WAY_LENS_ADAPTATIONS[lens]
```

---

## I-03 — Cross-Link Defend ↔ Way

**Files to modify:**

In `/way/journey/page.tsx` — for the "Curious" stage:
```tsx
<RelatedContent items={[
  { title: 'Why Does Anything Exist?', href: '/defend/atheism/cosmological', type: 'argument' },
  { title: 'The Historical Evidence for the Resurrection', href: '/defend/atheism/historical', type: 'argument' },
]} />
```

In `/defend/atheism/[category]/[argument]/page.tsx` — below the argument content:
```tsx
<div className="mt-16 border-t border-stone-800 pt-8 text-sm text-stone-400">
  <p>Arguments point toward God. The Way invites you to encounter him.</p>
  <Link href="/way">Explore The Way →</Link>
</div>
```

In `/defend/atheism/[category]/page.tsx` — sidebar or footer:
```
Looking for more than arguments? → The Way
```

---

## I-04 — Cross-Link Semantics ↔ Way

**Files to modify:**

In `/way/love/passages/page.tsx` — on the 1 Cor 13 passage:
```tsx
<Link href="/semantics?word=agape">
  Study the Greek word agape →
</Link>
```

In `/way/pray/lords-prayer/page.tsx` — on phrases with key Greek words:
```tsx
// On the "hallowed" phrase
<Link href="/semantics?word=hagiazo">
  Study the Greek: ἁγιαζω (hagiazo) →
</Link>
```

In `/semantics/page.tsx` (or the word detail view):
```tsx
// If the word is agape, add at the bottom:
<Link href="/way/love">
  See how agape is lived in The Way →
</Link>
```

---

## I-05 — Cross-Link Sources ↔ Way

**Files to modify:**

In `/way/pray/page.tsx` — add a "What the Church Fathers Said About Prayer" teaser block:
```tsx
// Pull 2-3 quotes from quotes.ts filtered by topicTags: ['prayer']
<CitationList quotes={prayerQuotes.slice(0, 3)} />
<Link href="/sources/church-fathers?topic=prayer">
  See all church father quotes on prayer →
</Link>
```

In `/way/pray/lords-prayer/page.tsx` — add on Chrysostom:
```tsx
// After the Lords Prayer blocks
<TestimonyBlock testimony={{
  person: "John Chrysostom",
  era: "c. 390 AD",
  vignette: "From Homily 19 on Matthew...",
  source: "Homilies on Matthew, 19.4"
}} />
```

---

## I-06 — Cross-Link Timeline ↔ Way

**Files to modify:**

In the Timeline event for "Desert Fathers Movement (4th century)":
```ts
relatedWayHref: '/way/pray/silent-prayer'
```

In `src/components/history/TimelineEventPanel.tsx`:
```tsx
{event.relatedWayHref && (
  <Link href={event.relatedWayHref}>
    Explore in The Way →
  </Link>
)}
```

Also link:
- "Gregory Palamas & Hesychasm (1347)" → `/way/pray/jesus-prayer`
- "Francis of Assisi (1209)" → `/way/love/saints`
- "Council of Nicaea (325)" → a Way page via "Why the creeds matter" (if created)

---

## I-07 — Persist Retreat Progress

**File to modify:** `src/components/way/RetreatDayCard.tsx` and `src/app/[locale]/way/retreat/page.tsx`

```ts
// Key: 'theosis-retreat-progress'
// Value: JSON array of completed day numbers: [1, 2, 3]

function getCompletedDays(): number[] {
  try {
    return JSON.parse(localStorage.getItem('theosis-retreat-progress') || '[]')
  } catch {
    return []
  }
}

function markDayComplete(day: number): void {
  const completed = getCompletedDays()
  if (!completed.includes(day)) {
    completed.push(day)
    localStorage.setItem('theosis-retreat-progress', JSON.stringify(completed))
  }
}
```

On mount: read `completedDays` and pass to `RetreatProgress` and each `RetreatDayCard`.

---

## I-08 — Persist Onboarding Result

**File to modify:** `src/components/way/WayOnboarding.tsx`

```ts
// On complete:
localStorage.setItem('theosis-way-onboarded', 'true')
localStorage.setItem('theosis-way-stage', stageId)

// On mount check:
const hasOnboarded = localStorage.getItem('theosis-way-onboarded') === 'true'
if (hasOnboarded) {
  const savedStage = localStorage.getItem('theosis-way-stage') as JourneyStageId
  onComplete(savedStage || 'seeker')
  return null  // skip rendering the modal
}
```

Add a "Reset my journey" link in the Way sidebar — for users who want to redo the onboarding:
```ts
localStorage.removeItem('theosis-way-onboarded')
localStorage.removeItem('theosis-way-stage')
```

---

## I-09 — Update Home Page

**File to modify:** `src/app/[locale]/page.tsx`

1. Add `/way` as fourth portal in the home page portal grid
2. Add "The Way" quote as one of the ambient verse rotator options (e.g., John 14:6)
3. If `LensRecommendedPath` is implemented (A03 task 3): show "Recommended: The Way" for Seeker and Believer lenses

---

## I-10 — Add Way Content to Command Palette Index

**File to modify:** `src/components/command/search/searchIndex.ts`

Add Way content to the `SEARCH_INDEX`:
```ts
// From data/way/ files, add entries for:
// - Each prayer type (title: "Petition Prayer", href: "/way/pray", type: "way")
// - The Lord's Prayer (href: "/way/pray/lords-prayer", type: "way")
// - Lectio Divina (href: "/way/pray/lectio-divina", type: "way")
// - Jesus Prayer (href: "/way/pray/jesus-prayer", type: "way")
// - 7-Day Retreat (href: "/way/retreat", type: "way")
// - The Prodigal Son (href: "/way/love/prodigal-son", type: "way")
// - For the Skeptic (href: "/way/skeptic", type: "way")
// - Each saint profile (title: "Saint Francis of Assisi", href: "/way/love/saints", type: "way")
```

Type badge for Way entries: a flame icon + "The Way" label in the palette results.

---

## Acceptance Criteria

- [ ] "The Way" link appears in main navbar
- [ ] Home page has a fourth portal card for `/way`
- [ ] All 5 lens variants render different content on at least 3 Way pages
- [ ] Defend pages link to The Way at the bottom
- [ ] Semantics tool cross-links to Way love/passages from `agape` word study
- [ ] Church father prayer quotes surface in `/way/pray`
- [ ] Timeline "Desert Fathers" event links to `/way/pray/silent-prayer`
- [ ] Retreat progress persists in localStorage across browser sessions
- [ ] Onboarding is shown once; skipped on return; resettable
- [ ] The Way content appears in command palette search results with flame badge
