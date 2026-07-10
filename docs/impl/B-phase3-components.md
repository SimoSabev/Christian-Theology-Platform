# B — Phase 3: UI Components

**Mode:** "The Way" — Experience Mode
**Output:** All components in `src/components/way/`

---

## Prerequisites

- Phase 2 data files created (`src/data/way/`, `src/types/way.ts`)
- Existing ornament components understood (Eyebrow, KeystoneDivider, ArchPanel, DropCap)
- Framer Motion available in project

## Design Tokens for The Way

Before building components, establish these CSS variables in `src/app/globals.css` under a `[data-section="way"]` scope:

```css
[data-section="way"] {
  --way-bg:         #1a1410;   /* warm dark amber-black */
  --way-bg-light:   #f5f0e8;   /* soft cream for light-mode option */
  --way-accent:     #d4956a;   /* candlelight amber */
  --way-accent-dim: #9a6a44;   /* dimmed amber */
  --way-text:       #e8ddd0;   /* warm off-white */
  --way-text-muted: #9a8d7e;   /* muted warm gray */
  --way-border:     #3a2e22;   /* subtle warm border */
  --way-font:       'Cormorant Garamond', 'EB Garamond', Georgia, serif;
}
```

---

## C-01 — WayLayout

**File:** `src/components/way/WayLayout.tsx`

```tsx
interface WayLayoutProps {
  children: React.ReactNode
  showSidebar?: boolean   // default true
}
```

Wraps all Way pages. Applies `data-section="way"` for CSS scoping. Structure:
```
<div data-section="way" className="min-h-screen bg-[var(--way-bg)]">
  <WayPageHeader />
  <div className="flex">
    <WayNavSidebar />     {/* C-02, hidden on mobile by default */}
    <main className="flex-1 px-6 py-12 max-w-3xl mx-auto">
      {children}
    </main>
  </div>
</div>
```

---

## C-02 — WayNavSidebar

**File:** `src/components/way/WayNavSidebar.tsx`

Left sidebar navigation for The Way. Hidden on mobile (collapses to bottom drawer or hamburger).

Nav items (with flame icon instead of section mark):
```
🕯 How to Pray
🕯 Why Pray
🕯 How to Act
🕯 Encountering Love
🕯 The Journey
🕯 Guided Retreat  [progress indicator: 3/7]
🕯 For the Skeptic
```

Active item: text in `var(--way-accent)`, no bold (italic instead).

Retreat progress is a small `RetreatProgress` mini-indicator showing completed days.

---

## C-03 — PrayerTypeCard

**File:** `src/components/way/PrayerTypeCard.tsx`

```tsx
interface PrayerTypeCardProps {
  prayerType: PrayerType
  expanded?: boolean
}
```

Card layout:
- Icon (simple SVG: hands, heart, dove — inline in component)
- Name in Cormorant Garamond 24px
- Description
- Expandable section: Scripture reference + text + Starter Prayer
- Expand/collapse with smooth height animation

---

## C-04 — LordsPrayerBlock

**File:** `src/components/way/LordsPrayerBlock.tsx`

```tsx
interface LordsPrayerBlockProps {
  phrases: LordsPrayerPhrase[]
  showGreek?: boolean   // from lens system
}
```

For each phrase:
```
[Greek text in italic, if showGreek]
[Transliteration in small caps]
[English phrase in large Cormorant]
────────────────────────────────────────
[Theological note — collapsible]
[Reflection question in italics]
```

Each phrase separated by a subtle `RuleHairline`.

---

## C-05 — LectioDivinaGuide

**File:** `src/components/way/LectioDivinaGuide.tsx`

4-tab interactive component:
- Tabs: Read | Meditate | Pray | Contemplate
- Each tab has: step name, instructions (2-3 sentences), timing recommendation
- The practice passage is displayed in the "Read" tab
- An optional timer component (CSS countdown circle) for each step

---

## C-06 — JesusPrayerAmbient

**File:** `src/components/way/JesusPrayerAmbient.tsx`

Full-width ambient component. Two phases that cycle:

**Inhale phase (4 seconds):**
```
Lord Jesus Christ, Son of God,
```
Text fades in and scales slightly larger.

**Exhale phase (4 seconds):**
```
have mercy on me, a sinner.
```
Text fades and scales back.

Implementation: CSS `@keyframes` with `animation-timing-function: ease-in-out`.

Props:
```tsx
interface JesusPrayerAmbientProps {
  autoPlay?: boolean   // default true
  repetitions?: number  // 0 = infinite
}
```

---

## C-07 — JourneyStageMap

**File:** `src/components/way/JourneyStageMap.tsx`

```tsx
interface JourneyStageMapProps {
  stages: JourneyStage[]
  activeStageId: JourneyStageId
  onStageSelect: (id: JourneyStageId) => void
}
```

Horizontal road/path visualization on desktop, vertical on mobile.

5 stage nodes connected by a dotted path line. Active node: filled amber circle. Completed nodes: solid. Upcoming: hollow.

Below each node: stage name in small italic Cormorant.

On click: calls `onStageSelect`, parent renders `JourneyStageDetail` (C-08).

---

## C-08 — JourneyStageDetail

**File:** `src/components/way/JourneyStageDetail.tsx`

```tsx
interface JourneyStageDetailProps {
  stage: JourneyStage
}
```

Panel below the stage map showing:
- Display name (large Cormorant)
- Description (who is here)
- Encouragement (italic, warm)
- Resources list (3-5 links with type badges)
- Practices list (checkboxes — visual only, not persistent)
- "Next Stage" hint + arrow

---

## C-09 — RetreatDayCard

**File:** `src/components/way/RetreatDayCard.tsx`

```tsx
interface RetreatDayCardProps {
  day: RetreatDay
  isCompleted: boolean
  onComplete: (day: number) => void
}
```

Card layout:
- Candle icon (SVG — lit if completed, unlit if not)
- Day number + theme
- Scripture reference (link to semantics tool)
- Prayer guide (collapsible)
- Reflection prompt (italic)
- Action step (boxed, stands out)
- "I completed this day" button → calls `onComplete`

---

## C-10 — RetreatProgress

**File:** `src/components/way/RetreatProgress.tsx`

```tsx
interface RetreatProgressProps {
  completedDays: number[]   // e.g. [1, 2, 3]
}
```

7 candle SVG icons in a row. Completed days: animated flame (CSS flicker animation). Incomplete: dark wick, no flame.

On completion of a new day: play a subtle entrance animation (flame grows from nothing).

---

## C-11 — TestimonyBlock

**File:** `src/components/way/TestimonyBlock.tsx`

```tsx
interface TestimonyBlockProps {
  testimony: Testimony
}
```

Simple layout:
- Decorative opening quote mark (large Cormorant, amber)
- Vignette text (italic)
- Person name + era in small caps with `RuleHairline` above
- Source citation in footnote size

---

## C-12 — SaintPortrait

**File:** `src/components/way/SaintPortrait.tsx`

```tsx
interface SaintPortraitProps {
  saint: SaintProfile
}
```

Card with:
- Name + dates (Cinzel for name, Cormorant for dates)
- Tradition badge
- Love-in-action story
- Quote in large italic (the dominant visual element)
- "Why they matter" in muted small text

---

## C-13 — ScripturePassageMeditation

**File:** `src/components/way/ScripturePassageMeditation.tsx`

```tsx
interface ScripturePassageMeditationProps {
  passage: ScripturePassage
  showMeditation?: boolean   // default true
}
```

Two-pane layout on desktop (scripture left, meditation right). Single column on mobile.

Scripture text: large, generous 2.0 line height, DropCap on first word.
Meditation: italic, muted amber text, slightly smaller than body.
Reference: small caps at bottom of scripture pane.

---

## C-14 — ProdigalSonReader

**File:** `src/components/way/ProdigalSonReader.tsx`

Luke 15:11-32 with verse-by-verse commentary.

Structure:
- For each verse (or group of 2-3): verse text (larger) + 2-sentence poetic commentary (smaller, italic, amber)
- A subtle `RuleHairline` every 5 verses for breathing room
- Closing section: "Which character are you today?" with 3 cards: The Father | The Son | The Elder Brother — each with a 2-sentence reflection

Reading progress: a thin amber progress bar at the top of the viewport tracking scroll position.

---

## C-15 — BeatitudeBlock

**File:** `src/components/way/BeatitudeBlock.tsx`

```tsx
interface BeatitudeBlockProps {
  beatitude: Beatitude
  showGreek?: boolean   // from lens
}
```

Layout:
- Greek word (if showGreek) — large, italic, Cormorant
- Transliteration in small caps
- Beatitude text (bold Cormorant 28px)
- Semantic range note
- Application (100 words in regular weight)

---

## C-16 — DisciplineCard

**File:** `src/components/way/DisciplineCard.tsx`

```tsx
interface DisciplineCardProps {
  discipline: SpiritualDiscipline
}
```

Card with:
- Category badge (Abstinence / Engagement) colored differently
- Name in Cinzel
- Definition (1 sentence)
- Description (expandable, 100 words)
- 1-week starter practice (expandable, formatted as day-by-day list)

---

## C-17 — SkepticInvitation

**File:** `src/components/way/SkepticInvitation.tsx`

The landing component for `/way/skeptic`. Full-page warm invitation.

Sections (rendered sequentially with generous spacing):
1. Honest acknowledgment text (centered, large Cormorant italic)
2. "We won't argue with you here" — bold but gentle
3. The hiddenness of God — 300 words
4. The Experiment block (C-18)
5. John chapter 1 (embedded directly — scrollable)
6. Stories of unexpected belief (TestimonyBlock × 3)
7. "No pressure" closing statement

---

## C-18 — ExperimentBlock

**File:** `src/components/way/ExperimentBlock.tsx`

A visually contained, quiet section — like a candle in darkness.

```tsx
interface ExperimentBlockProps {
  onTried?: () => void   // called when user clicks "I tried it"
}
```

Layout:
- Dark background (slightly lighter than page)
- Subtle border in amber
- Candle animation (C-06 style, but smaller and slower)
- Text: "You don't have to believe to try this..." (exact copy from main plan)
- "I tried it" button (soft, not aggressive — just records in localStorage)

After clicking: text changes to "Thank you for trying. Whatever you felt — or didn't feel — is fine. Come back anytime."

---

## C-19 — WayOnboarding

**File:** `src/components/way/WayOnboarding.tsx`

3-question onboarding shown on first visit to `/way`.

```tsx
interface WayOnboardingProps {
  onComplete: (stageId: JourneyStageId) => void
}
```

**Step 1:** "Where are you right now?"
- Cards: "Just curious" → Curious | "I'm open, exploring" → Seeker | "I believe, want to go deeper" → Disciple | "I've been at this for years" → Mystic

**Step 2 (optional):** "What are you looking for?"
- Prayer guidance | Understanding God's love | How to live out faith | Just look around

**Step 3:** Brief introduction (no question — just a gentle welcome message based on their answer).

On complete: routes to `stage.resources[0].href` for their stage.
Stores `localStorage.setItem('theosis-way-stage', stageId)`.

---

## C-20 — AmbientAudioToggle

**File:** `src/components/way/AmbientAudioToggle.tsx`

Fixed position: bottom-right corner, visible on all Way pages.

Headphone icon → click opens a small card:
```
○ Silence
○ Gregorian Chant    [CC0 licensed audio file]
○ Byzantine Chant    [CC0 licensed audio file]
○ Nature (Rain)      [CC0 licensed audio file]
```

Volume slider (HTML `<input type="range">`).

Uses HTML `<audio>` element with `loop`. Fade in/out with Web Audio API gain node.

Stores preference in `localStorage`.

**Audio files:** Source from public domain (freesound.org CC0, or Wikimedia Commons).

---

## C-21 — BreathPrayerWidget

**File:** `src/components/way/BreathPrayerWidget.tsx`

```tsx
interface BreathPrayerWidgetProps {
  inhalePhrase?: string    // default: "Lord Jesus Christ"
  exhalePhrase?: string    // default: "have mercy on me"
  cycleSeconds?: number    // default: 8 (4 in, 4 out)
}
```

Displays the current phase text with a slow pulse animation. Used inline on `/way/pray/silent-prayer` and as an ambient widget.

---

## C-22 — LensAdaptedContent

**File:** `src/components/way/LensAdaptedContent.tsx`

Higher-order component / wrapper that reads the active lens and conditionally renders content.

```tsx
interface LensAdaptedContentProps {
  lensId: LensId
  children: React.ReactNode
  onlyFor?: LensId[]         // render only for these lenses
  exceptFor?: LensId[]       // render for all except these lenses
  alternate?: React.ReactNode // rendered when onlyFor doesn't match
}
```

Usage:
```tsx
<LensAdaptedContent onlyFor={['scholar']}>
  <PatristicCitationBlock citation={...} />
</LensAdaptedContent>

<LensAdaptedContent exceptFor={['skeptic']}>
  <AdvancedTheologyNote note={...} />
</LensAdaptedContent>
```

---

## C-23 — LetterFromGod

**File:** `src/components/way/LetterFromGod.tsx`

Purely presentational. Renders a devotional letter.

Layout:
- "A Devotional Meditation — Not Scripture" notice at top (small, muted — honest labeling)
- Letter heading: "Dear [Name]," — uses user's first name if stored, otherwise "Dear One,"
- Body text in Cormorant Garamond, generous leading, cream background
- Closing: "Yours forever, Your Father"
- An amber `KeystoneDivider` at the end

---

## C-24 — WayPageHeader

**File:** `src/components/way/WayPageHeader.tsx`

```tsx
interface WayPageHeaderProps {
  title: string
  subtitle?: string
  eyebrow?: string   // e.g. "How to Pray"
}
```

Minimal header: no breadcrumb clutter. Centered layout.
- Small flame icon above eyebrow
- Eyebrow in Cormorant italic small caps
- Title in Cormorant 48px
- Subtitle in Cormorant italic 22px, muted

---

## Acceptance Criteria

- [ ] All 24 components created in `src/components/way/`
- [ ] All components typed against `src/types/way.ts` — no `any`
- [ ] CSS variables `--way-*` defined in `globals.css`
- [ ] `WayLayout` applies `data-section="way"` for CSS scoping
- [ ] `JesusPrayerAmbient` breathing animation runs smoothly (no jank)
- [ ] `RetreatProgress` candle SVG animates on day completion
- [ ] `ProdigalSonReader` scroll progress bar renders
- [ ] All components compile with no TypeScript errors
- [ ] Components render without errors in isolation (can be tested individually)
