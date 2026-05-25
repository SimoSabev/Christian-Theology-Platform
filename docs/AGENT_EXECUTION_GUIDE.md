# Agent Execution Guide — Theosis Platform

> **For coding agents:** This is your single source of truth. Each task below is atomic and self-contained. Read the linked implementation plan before starting any task. Complete each task fully before moving to the next. Run `npx tsc --noEmit` after every code change.

---

## How to Use This Guide

1. Find the next unchecked task in the list
2. Read the linked spec file for full detail
3. Implement it completely
4. Mark it done (`- [x]`)
5. Move to the next task

**Never start a task whose dependency is not checked off.**

**Always read the file before editing it.**

**Never create documentation files unless a task explicitly says to.**

---

## Priority Tracks

There are two tracks running in parallel. A track is a sequence of dependent tasks. Tasks within the same track must be done in order. Tasks in different tracks can be parallelized.

| Track | What it is |
|---|---|
| **Track A** | Platform-wide improvements (existing sections) |
| **Track B** | "The Way" — new Experience Mode |

---

## Track A — Platform Improvements

### A-P1 Block (Do These First — Critical)

- [ ] **A01-1** Read `src/data/arguments/types.ts` and all argument data files; extend type with `body`, `churchFatherQuotes`, `objections`, `scholarProponents`, `bibliography`, `timelineEventIds`, `manuscriptIds` fields → spec: `docs/impl/A01-content-depth.md`
- [ ] **A01-2** Populate `body` (600+ words), `churchFatherQuotes` (3+), `objections` (3+) for the Cosmological argument entry → spec: `docs/impl/A01-content-depth.md`
- [ ] **A01-3** Populate same fields for Ontological, Teleological, Moral, Historical, Existential arguments → depends: A01-2 → spec: `docs/impl/A01-content-depth.md`
- [ ] **A01-4** Update `/defend/atheism/[argument]/page.tsx` to render new fields using `PremiseBlock`, `DropCap`, `CitationList`, `ObjectionGrid`, `ProponentRow` → depends: A01-1 → spec: `docs/impl/A01-content-depth.md`
- [ ] **A01-5** Extend cult data with `keyVersesAbused`, `pastoralNote`, `historicalOrModern` fields → spec: `docs/impl/A01-content-depth.md`
- [ ] **A01-6** Update `/defend/cults/[objection]/page.tsx` to render `keyVersesAbused` table and `pastoralNote` sidebar → depends: A01-5 → spec: `docs/impl/A01-content-depth.md`
- [ ] **A01-7** Add Historical/Modern tab filter to `/defend/cults/page.tsx` → depends: A01-5 → spec: `docs/impl/A01-content-depth.md`
- [ ] **A01-8** Create `src/data/sources/quotes.ts` with 50+ church father quote entries → spec: `docs/impl/A01-content-depth.md`
- [ ] **A01-9** Update church fathers page with thematic index + quote filter; add "Quote of the Day" to home page → depends: A01-8 → spec: `docs/impl/A01-content-depth.md`

- [ ] **A02-1** Create `src/components/layout/Breadcrumb.tsx` → spec: `docs/impl/A02-ux-navigation.md`
- [ ] **A02-2** Add `<Breadcrumb>` to all deep-linked pages (argument, manuscript, cult, tradition) → depends: A02-1 → spec: `docs/impl/A02-ux-navigation.md`
- [ ] **A02-3** Create `src/components/layout/RelatedContent.tsx` → spec: `docs/impl/A02-ux-navigation.md`
- [ ] **A02-4** Add `<RelatedContent>` with 3+ items to argument and manuscript detail pages → depends: A02-3 → spec: `docs/impl/A02-ux-navigation.md`
- [ ] **A02-5** Create `src/components/onboarding/OnboardingModal.tsx` with 3-step flow → spec: `docs/impl/A02-ux-navigation.md`
- [ ] **A02-6** Add `<OnboardingModal>` to `src/app/[locale]/layout.tsx` → depends: A02-5 → spec: `docs/impl/A02-ux-navigation.md`
- [ ] **A02-7** Accessibility audit: fix `CommandPalette.tsx` (role, focus trap, Escape), `LensToggle.tsx` (aria-pressed), XYFlow nodes (tabIndex, keyboard) → spec: `docs/impl/A02-ux-navigation.md`
- [ ] **A02-8** Create `src/components/layout/ThemeToggle.tsx`; add to Navbar → spec: `docs/impl/A02-ux-navigation.md`

- [ ] **A03-1** Read `src/components/lens/types.ts` and `useLens.ts`; audit every page for `useLens()` usage; document the compatibility matrix in a comment → spec: `docs/impl/A03-lens-system.md`
- [ ] **A03-2** Extend `src/components/lens/types.ts` with `LensContentVariant`, `LENS_VARIANTS`, `LensId` type → spec: `docs/impl/A03-lens-system.md`
- [ ] **A03-3** Persist lens in `localStorage` from `LensProvider.tsx` → depends: A03-2 → spec: `docs/impl/A03-lens-system.md`
- [ ] **A03-4** Create `src/components/lens/LensRecommendedPath.tsx`; add to home page → depends: A03-2 → spec: `docs/impl/A03-lens-system.md`
- [ ] **A03-5** Add always-visible lens switcher chip to Navbar → depends: A03-2 → spec: `docs/impl/A03-lens-system.md`
- [ ] **A03-6** Apply `useLens()` to argument pages (toggle footnotes, Greek terms, patristic citations, depth) → depends: A03-2, A01-4 → spec: `docs/impl/A03-lens-system.md`

- [ ] **A12-1** Add pinch-to-zoom, MiniMap, Controls, and Reset View button to argument tree page → spec: `docs/impl/A12-mobile-responsiveness.md`
- [ ] **A12-2** Fix `CommandPalette.tsx` to be full-screen on mobile (< 768px) with close button → spec: `docs/impl/A12-mobile-responsiveness.md`
- [ ] **A12-3** Convert denomination matrix to card/accordion on mobile → spec: `docs/impl/A12-mobile-responsiveness.md`
- [ ] **A12-4** Add `overflow-x-auto` + scroll shadow to all wide tables → spec: `docs/impl/A12-mobile-responsiveness.md`
- [ ] **A12-5** Responsive audit at 375px/768px/1280px; fix `ArgumentSidebar`, `TriptychPortal` → spec: `docs/impl/A12-mobile-responsiveness.md`

- [ ] **A13-1** Lazy-load XYFlow via `next/dynamic` in argument tree page → spec: `docs/impl/A13-performance.md`
- [ ] **A13-2** Move verse data server-side in `AmbientVerseRotator` → spec: `docs/impl/A13-performance.md`
- [ ] **A13-3** Apply `next/dynamic` to `CommandPalette`, `InterlinearReader`, `SemanticDefenseSlideshow`, `SemanticsTutorialModule` → spec: `docs/impl/A13-performance.md`
- [ ] **A13-4** Replace all raw `<img>` tags with `next/image` (run grep first) → spec: `docs/impl/A13-performance.md`
- [ ] **A13-5** Update `next.config.ts` with `remotePatterns`, `removeConsole` → spec: `docs/impl/A13-performance.md`
- [ ] **A13-6** Run Lighthouse; document scores; iterate if LCP > 2.5s → depends: A13-1 through A13-5 → spec: `docs/impl/A13-performance.md`

- [ ] **A14-1** Read `src/data/prophecy/index.ts`; extend type; populate 40+ prophecy entries → spec: `docs/impl/A14-missing-content.md`
- [ ] **A14-2** Create `src/components/prophecy/ProphecyTable.tsx` → spec: `docs/impl/A14-missing-content.md`
- [ ] **A14-3** Create `src/app/[locale]/defend/prophecy/page.tsx` with all sections → depends: A14-1, A14-2 → spec: `docs/impl/A14-missing-content.md`
- [ ] **A14-4** Add Prophecy card to `/defend/page.tsx` hub → depends: A14-3 → spec: `docs/impl/A14-missing-content.md`

### A-P2 Block (High Priority — After P1 Complete)

- [ ] **A04-1** Build unified search index in `src/components/command/search/searchIndex.ts` covering 8 content types → spec: `docs/impl/A04-search-discovery.md`
- [ ] **A04-2** Add result type badges to `CommandPalette.tsx` → depends: A04-1 → spec: `docs/impl/A04-search-discovery.md`
- [ ] **A04-3** Add faceted filter chips to palette → depends: A04-2 → spec: `docs/impl/A04-search-discovery.md`
- [ ] **A04-4** Add recent searches persistence → spec: `docs/impl/A04-search-discovery.md`
- [ ] **A04-5** Surface verse detection in UI (highlighted result, updated placeholder) → spec: `docs/impl/A04-search-discovery.md`
- [ ] **A04-6** Add keyboard shortcut hint to hero → spec: `docs/impl/A04-search-discovery.md`

- [ ] **A05-1** Expand papyri dataset to 50+ entries with `significance`, `textualFamily`, `biblePassages` fields → spec: `docs/impl/A05-manuscripts-sources.md`
- [ ] **A05-2** Enable passage-level interlinear reading with chapter navigation → spec: `docs/impl/A05-manuscripts-sources.md`
- [ ] **A05-3** Add `imageUrl` to 3+ codex entries; create `FacsimileViewer.tsx` → spec: `docs/impl/A05-manuscripts-sources.md`
- [ ] **A05-4** Create `ManuscriptSignificance.tsx`; add to manuscript detail page → spec: `docs/impl/A05-manuscripts-sources.md`
- [ ] **A05-5** Create `TraditionComparisonChart.tsx`; add to manuscript listing page → spec: `docs/impl/A05-manuscripts-sources.md`

- [ ] **A06-1** Sub-divide Protestant into 5 traditions (Lutheran, Reformed, Anglican, Baptist, Pentecostal) → spec: `docs/impl/A06-denomination-comparison.md`
- [ ] **A06-2** Expand doctrinal matrix to 25+ rows for all 7+ traditions → depends: A06-1 → spec: `docs/impl/A06-denomination-comparison.md`
- [ ] **A06-3** Add `originNarrative` field; add "History" tab to tradition pages → spec: `docs/impl/A06-denomination-comparison.md`
- [ ] **A06-4** Add `recommendedReading`; create `RecommendedReading.tsx` → spec: `docs/impl/A06-denomination-comparison.md`
- [ ] **A06-5** Create `DenominationMap.tsx`; add to compare hub page → depends: A06-1 → spec: `docs/impl/A06-denomination-comparison.md`

- [ ] **A07-1** Read `src/app/[locale]/explore/debate-mode/page.tsx` and `src/data/debates/index.ts` fully; document current implementation → spec: `docs/impl/A07-debate-mode.md`
- [ ] **A07-2** Extend debate data with `steelman` and `strawman` fields → depends: A07-1 → spec: `docs/impl/A07-debate-mode.md`
- [ ] **A07-3** Create `SteelmanToggle.tsx` → depends: A07-2 → spec: `docs/impl/A07-debate-mode.md`
- [ ] **A07-4** Create Socratic sequence data for Kalam + Moral arguments → spec: `docs/impl/A07-debate-mode.md`
- [ ] **A07-5** Create `SocraticMode.tsx` branching question component → depends: A07-4 → spec: `docs/impl/A07-debate-mode.md`
- [ ] **A07-6** Add mode toggle (Browse | Socratic | Steelman) to debate page → depends: A07-3, A07-5 → spec: `docs/impl/A07-debate-mode.md`

- [ ] **A08-1** Read `src/data/history/index.ts`; extend type with `era`, `description`, `topicTags`, `relatedManuscriptIds`, `relatedFatherIds`, `relatedArgumentIds` → spec: `docs/impl/A08-historical-timeline.md`
- [ ] **A08-2** Expand event database to 200+ events across 5 eras → depends: A08-1 → spec: `docs/impl/A08-historical-timeline.md`
- [ ] **A08-3** Create `TimelineEventPanel.tsx` slide-over → depends: A08-1 → spec: `docs/impl/A08-historical-timeline.md`
- [ ] **A08-4** Create `TimelineFilters.tsx` with era tabs + topic chips → depends: A08-1 → spec: `docs/impl/A08-historical-timeline.md`
- [ ] **A08-5** Update timeline page to use filters and event panel → depends: A08-3, A08-4 → spec: `docs/impl/A08-historical-timeline.md`

- [ ] **A09-1** Read `src/data/trees/index.ts`; extend node type with `NodeType` and `body`/`href` data fields → spec: `docs/impl/A09-argument-tree.md`
- [ ] **A09-2** Expand tree data to 3 levels deep for all 6 arguments (100+ nodes) → depends: A09-1 → spec: `docs/impl/A09-argument-tree.md`
- [ ] **A09-3** Create `ArgumentNodePanel.tsx` slide-over; add `onNodeClick` to tree page → depends: A09-1 → spec: `docs/impl/A09-argument-tree.md`
- [ ] **A09-4** Add "Skeptic Entry" root node + 5 objection branches + mode toggle → depends: A09-2 → spec: `docs/impl/A09-argument-tree.md`
- [ ] **A09-5** Add MiniMap, Controls, touch support to tree page → spec: `docs/impl/A09-argument-tree.md`

- [ ] **A10-1** Read all semantic data types; extend `SemanticWordEntry` with `semanticRange`, `cognates`, `lxxOccurrences`, `patristicUsage`, `morphologicalNote`, `translationVariants` → spec: `docs/impl/A10-semantics-tools.md`
- [ ] **A10-2** Populate expanded fields for 20+ key word entries → depends: A10-1 → spec: `docs/impl/A10-semantics-tools.md`
- [ ] **A10-3** Create `MorphTag.tsx`; add to interlinear view → depends: A10-1 → spec: `docs/impl/A10-semantics-tools.md`
- [ ] **A10-4** Create `TranslationVariantsTable.tsx`; add to semantics page → depends: A10-1 → spec: `docs/impl/A10-semantics-tools.md`
- [ ] **A10-5** Add audio pronunciation via Web Speech API → spec: `docs/impl/A10-semantics-tools.md`
- [ ] **A10-6** Expand parallel comparison to 6 translations → spec: `docs/impl/A10-semantics-tools.md`

- [ ] **A11-1** Audit translation completion in `messages/`; document results → spec: `docs/impl/A11-internationalization.md`
- [ ] **A11-2** Add RTL support in `layout.tsx` for Arabic locale → spec: `docs/impl/A11-internationalization.md`
- [ ] **A11-3** Ensure `LanguageSwitcher.tsx` is in Navbar with globe icon and native language names → spec: `docs/impl/A11-internationalization.md`

- [ ] **A14-5** Read `src/data/archaeology/index.ts`; extend type; populate 10+ key finds → spec: `docs/impl/A14-missing-content.md`
- [ ] **A14-6** Create `/sources/archaeology/page.tsx` with catalogue, filter, and slide-over → depends: A14-5 → spec: `docs/impl/A14-missing-content.md`
- [ ] **A14-7** Read `src/data/science-faith/index.ts`; create `/defend/science/page.tsx` → spec: `docs/impl/A14-missing-content.md`

- [ ] **A15-1** Create `src/components/ui/Toast.tsx` → spec: `docs/impl/A15-community-sharing.md`
- [ ] **A15-2** Create `src/components/layout/ShareButton.tsx` using clipboard + Web Share API + Toast → depends: A15-1 → spec: `docs/impl/A15-community-sharing.md`
- [ ] **A15-3** Add `<ShareButton>` to argument, manuscript, and cult detail pages → depends: A15-2 → spec: `docs/impl/A15-community-sharing.md`
- [ ] **A15-4** Add `?lens=` URL param reading/writing to `LensProvider.tsx` → spec: `docs/impl/A15-community-sharing.md`

### A-P3 Block (Nice-to-Have — Do Last)

- [ ] **A14-8** Create `/compare/worldviews/page.tsx` with OMMD matrix → spec: `docs/impl/A14-missing-content.md`
- [ ] **A07-7** (P3) Session export via print CSS in `SessionExport.tsx` → spec: `docs/impl/A07-debate-mode.md`
- [ ] **A07-8** (P3) AI debate server action in `src/app/actions/debate.ts` → spec: `docs/impl/A07-debate-mode.md`

---

## Track B — The Way (Experience Mode)

### B-Phase 2: Data Architecture (Start Here — No Phase 1 prerequisite for code)

- [x] **B-D01** Create `src/types/way.ts` with all type definitions → spec: `docs/impl/B-phase2-data-architecture.md`
- [x] **B-D02** Create `src/data/way/prayer-types.ts` (6 prayer type objects — use placeholder content if W-02 not written) → depends: B-D01 → spec: `docs/impl/B-phase2-data-architecture.md`
- [x] **B-D03** Create `src/data/way/lords-prayer.ts` (8 phrase objects) → depends: B-D01 → spec: `docs/impl/B-phase2-data-architecture.md`
- [x] **B-D04** Create `src/data/way/beatitudes.ts` (8 beatitude objects) → depends: B-D01 → spec: `docs/impl/B-phase2-data-architecture.md`
- [x] **B-D05** Create `src/data/way/journey-stages.ts` (5 stage objects) → depends: B-D01 → spec: `docs/impl/B-phase2-data-architecture.md`
- [x] **B-D06** Create `src/data/way/retreat.ts` (7 day objects) → depends: B-D01 → spec: `docs/impl/B-phase2-data-architecture.md`
- [x] **B-D07** Create `src/data/way/testimonies.ts` (6+ testimony objects) → depends: B-D01 → spec: `docs/impl/B-phase2-data-architecture.md`
- [x] **B-D08** Create `src/data/way/saints.ts` (4+ saint objects) → depends: B-D01 → spec: `docs/impl/B-phase2-data-architecture.md`
- [x] **B-D09** Create `src/data/way/love-passages.ts` (7 passage objects) → depends: B-D01 → spec: `docs/impl/B-phase2-data-architecture.md`
- [x] **B-D10** Create `src/data/way/disciplines.ts` (12+ discipline objects) → depends: B-D01 → spec: `docs/impl/B-phase2-data-architecture.md`
- [x] **B-D11** Create `src/data/way/skeptic.ts` (single SkepticSection object with John 1) → depends: B-D01 → spec: `docs/impl/B-phase2-data-architecture.md`
- [x] **B-D12** Extend `src/components/lens/types.ts` with `WayLensAdaptation` and `WAY_LENS_ADAPTATIONS` → depends: B-D01 → spec: `docs/impl/B-phase2-data-architecture.md`
- [x] **B-D-VERIFY** Run `npx tsc --noEmit` — must produce 0 errors before proceeding to Phase 3 → depends: B-D01 through B-D12

### B-Phase 3: Components (All depend on B-D01)

> All components go in `src/components/way/`. All depend on B-D-VERIFY.

- [x] **B-C01** Add `--way-*` CSS variables to `globals.css` → spec: `docs/impl/B-phase3-components.md`
- [x] **B-C24** Create `WayPageHeader.tsx` → depends: B-C01 → spec: `docs/impl/B-phase3-components.md`
- [x] **B-C01b** Create `WayLayout.tsx` → depends: B-C24 → spec: `docs/impl/B-phase3-components.md`
- [x] **B-C02** Create `WayNavSidebar.tsx` → depends: B-C01b → spec: `docs/impl/B-phase3-components.md`
- [x] **B-C03** Create `PrayerTypeCard.tsx` → depends: B-D02 → spec: `docs/impl/B-phase3-components.md`
- [x] **B-C04** Create `LordsPrayerBlock.tsx` → depends: B-D03 → spec: `docs/impl/B-phase3-components.md`
- [x] **B-C05** Create `LectioDivinaGuide.tsx` → depends: B-D01 → spec: `docs/impl/B-phase3-components.md`
- [x] **B-C06** Create `JesusPrayerAmbient.tsx` with breathing animation → spec: `docs/impl/B-phase3-components.md`
- [x] **B-C21** Create `BreathPrayerWidget.tsx` → spec: `docs/impl/B-phase3-components.md`
- [x] **B-C07** Create `JourneyStageMap.tsx` → depends: B-D05 → spec: `docs/impl/B-phase3-components.md`
- [x] **B-C08** Create `JourneyStageDetail.tsx` → depends: B-D05, B-C07 → spec: `docs/impl/B-phase3-components.md`
- [x] **B-C09** Create `RetreatDayCard.tsx` → depends: B-D06 → spec: `docs/impl/B-phase3-components.md`
- [x] **B-C10** Create `RetreatProgress.tsx` with candle SVGs → depends: B-C09 → spec: `docs/impl/B-phase3-components.md`
- [x] **B-C11** Create `TestimonyBlock.tsx` → depends: B-D07 → spec: `docs/impl/B-phase3-components.md`
- [x] **B-C12** Create `SaintPortrait.tsx` → depends: B-D08 → spec: `docs/impl/B-phase3-components.md`
- [x] **B-C13** Create `ScripturePassageMeditation.tsx` → depends: B-D09 → spec: `docs/impl/B-phase3-components.md`
- [x] **B-C14** Create `ProdigalSonReader.tsx` with scroll progress bar → spec: `docs/impl/B-phase3-components.md`
- [x] **B-C15** Create `BeatitudeBlock.tsx` → depends: B-D04 → spec: `docs/impl/B-phase3-components.md`
- [x] **B-C16** Create `DisciplineCard.tsx` → depends: B-D10 → spec: `docs/impl/B-phase3-components.md`
- [x] **B-C18** Create `ExperimentBlock.tsx` → spec: `docs/impl/B-phase3-components.md`
- [x] **B-C17** Create `SkepticInvitation.tsx` → depends: B-D11, B-C11, B-C18 → spec: `docs/impl/B-phase3-components.md`
- [x] **B-C19** Create `WayOnboarding.tsx` → depends: B-D05, B-D12 → spec: `docs/impl/B-phase3-components.md`
- [x] **B-C22** Create `LensAdaptedContent.tsx` HOC → depends: B-D12 → spec: `docs/impl/B-phase3-components.md`
- [x] **B-C23** Create `LetterFromGod.tsx` → spec: `docs/impl/B-phase3-components.md`
- [x] **B-C20** Create `AmbientAudioToggle.tsx` (without audio files yet — just the UI) → spec: `docs/impl/B-phase3-components.md`
- [x] **B-C-VERIFY** Run `npx tsc --noEmit` — must produce 0 errors before Phase 4

### B-Phase 4: Pages (All depend on B-C-VERIFY)

> All pages go under `src/app/[locale]/way/`.

- [x] **B-P-layout** Create `src/app/[locale]/way/layout.tsx` applying `WayLayout` → spec: `docs/impl/B-phase4-pages.md`
- [x] **B-P01** Create `/way/page.tsx` — entry page with onboarding + journey map + section cards → depends: B-P-layout, B-C07, B-C19 → spec: `docs/impl/B-phase4-pages.md`
- [x] **B-P02** Create `/way/pray/page.tsx` → depends: B-C03 → spec: `docs/impl/B-phase4-pages.md`
- [x] **B-P03** Create `/way/pray/lords-prayer/page.tsx` → depends: B-C04 → spec: `docs/impl/B-phase4-pages.md`
- [x] **B-P04** Create `/way/pray/lectio-divina/page.tsx` → depends: B-C05 → spec: `docs/impl/B-phase4-pages.md`
- [x] **B-P05** Create `/way/pray/jesus-prayer/page.tsx` → depends: B-C06, B-C21 → spec: `docs/impl/B-phase4-pages.md`
- [x] **B-P06** Create `/way/pray/silent-prayer/page.tsx` → depends: B-C21 → spec: `docs/impl/B-phase4-pages.md`
- [x] **B-P07** Create `/way/why-pray/page.tsx` → depends: B-C11, B-C13 → spec: `docs/impl/B-phase4-pages.md`
- [x] **B-P08** Create `/way/act/page.tsx` → depends: B-C15, B-C16 → spec: `docs/impl/B-phase4-pages.md`
- [x] **B-P09** Create `/way/act/sermon-on-the-mount/page.tsx` → depends: B-C15 → spec: `docs/impl/B-phase4-pages.md`
- [x] **B-P10** Create `/way/act/disciplines/page.tsx` → depends: B-C16 → spec: `docs/impl/B-phase4-pages.md`
- [x] **B-P11** Create `/way/act/love-your-enemies/page.tsx` → depends: B-C11 → spec: `docs/impl/B-phase4-pages.md`
- [x] **B-P12** Create `/way/love/page.tsx` → depends: B-C12, B-C13, B-C14 → spec: `docs/impl/B-phase4-pages.md`
- [x] **B-P13** Create `/way/love/prodigal-son/page.tsx` — no sidebar → depends: B-C14 → spec: `docs/impl/B-phase4-pages.md`
- [x] **B-P14** Create `/way/love/passages/page.tsx` → depends: B-C13 → spec: `docs/impl/B-phase4-pages.md`
- [x] **B-P15** Create `/way/love/saints/page.tsx` → depends: B-C12 → spec: `docs/impl/B-phase4-pages.md`
- [x] **B-P16** Create `/way/love/letter/page.tsx` — full-page letter, no sidebar → depends: B-C23 → spec: `docs/impl/B-phase4-pages.md`
- [x] **B-P17** Create `/way/journey/page.tsx` → depends: B-C07, B-C08 → spec: `docs/impl/B-phase4-pages.md`
- [x] **B-P18** Create `/way/retreat/page.tsx` → depends: B-C09, B-C10 → spec: `docs/impl/B-phase4-pages.md`
- [x] **B-P19** Create `/way/retreat/[day]/page.tsx` with param validation + prev/next nav → depends: B-C09 → spec: `docs/impl/B-phase4-pages.md`
- [x] **B-P20** Create `/way/skeptic/page.tsx` — no sidebar → depends: B-C17 → spec: `docs/impl/B-phase4-pages.md`
- [ ] **B-P-BUILD** Run `npm run build` — must succeed with 0 errors → depends: all B-P pages

### B-Phase 5: Content (Parallel with or after Phase 4)

> Content tasks can be done in any order, but all should complete before Phase 7.

- [x] **B-W01** Write "What is Prayer?" intro text (150 words) → populate `src/data/way/prayer-types.ts` → spec: `docs/impl/B-phase5-content.md`
- [x] **B-W02** Write 6 prayer type descriptions + starter prayers → spec: `docs/impl/B-phase5-content.md`
- [x] **B-W03** Write 8 Lord's Prayer phrase commentaries (8 × 100 words + question) → spec: `docs/impl/B-phase5-content.md`
- [x] **B-W04** Write Lectio Divina guide text + practice passage intro → spec: `docs/impl/B-phase5-content.md`
- [x] **B-W05** Write Jesus Prayer / hesychasm explainer (400 words) → spec: `docs/impl/B-phase5-content.md`
- [x] **B-W06** Write "Why Pray" 6 section texts (6 × 200 words) → spec: `docs/impl/B-phase5-content.md`
- [x] **B-W07** Write 8 Beatitude applications (8 × 100 words) → spec: `docs/impl/B-phase5-content.md`
- [x] **B-W08** Write Sermon on the Mount overview (500 words) → spec: `docs/impl/B-phase5-content.md`
- [x] **B-W09** Write 12 spiritual discipline descriptions + starter practices → spec: `docs/impl/B-phase5-content.md`
- [x] **B-W10** Write "Loving Your Enemies" exposition (600 words) → spec: `docs/impl/B-phase5-content.md`
- [x] **B-W11** Write 7 Scripture passage meditations (7 × 100 words) → spec: `docs/impl/B-phase5-content.md`
- [x] **B-W12** Write Prodigal Son verse-by-verse commentary → spec: `docs/impl/B-phase5-content.md`
- [x] **B-W13** Write 1 Corinthians 13 deep study (15 × 80 words) → spec: `docs/impl/B-phase5-content.md`
- [x] **B-W14** Write 6 testimony vignettes (sourced) → spec: `docs/impl/B-phase5-content.md`
- [x] **B-W15** Write 4 saint profiles (4 × 200 words + quote) → spec: `docs/impl/B-phase5-content.md`
- [x] **B-W16** Write "A Letter from God" (400 words) → spec: `docs/impl/B-phase5-content.md`
- [x] **B-W17** Write 5 Journey stage descriptions (5 × 150 words) → spec: `docs/impl/B-phase5-content.md`
- [x] **B-W18** Write 7-Day Retreat full content (7 × prayer guide + reflection + action) → spec: `docs/impl/B-phase5-content.md`
- [x] **B-W19** Write "For the Skeptic" section copy (6 × 150 words) → spec: `docs/impl/B-phase5-content.md`
- [x] **B-W20** Write onboarding question copy + routing + welcome message → spec: `docs/impl/B-phase5-content.md`
- [x] **B-W21** Write ambient audio track labels (3-5 words each) → spec: `docs/impl/B-phase5-content.md`

### B-Phase 6: Integration (After B-P-BUILD)

- [x] **B-I01** Add "The Way" to Navbar + home page TriptychPortal → spec: `docs/impl/B-phase6-integration.md`
- [x] **B-I07** Implement retreat progress localStorage persistence → spec: `docs/impl/B-phase6-integration.md`
- [x] **B-I08** Implement onboarding localStorage persistence + reset link → spec: `docs/impl/B-phase6-integration.md`
- [x] **B-I09** Update home page with Way portal + ambient verse from John 14:6 → depends: B-I01 → spec: `docs/impl/B-phase6-integration.md`
- [x] **B-I10** Add Way content to command palette search index → spec: `docs/impl/B-phase6-integration.md`
- [x] **B-I02** Apply `LensAdaptedContent` to Way pages (6 pages, per spec table) → depends: B-C22, B-D12 → spec: `docs/impl/B-phase6-integration.md`
- [x] **B-I03** Add cross-links: Defend ↔ Way (journey curious stage + defend footer link) → spec: `docs/impl/B-phase6-integration.md`
- [x] **B-I04** Add cross-links: Semantics ↔ Way (agape word + love/passages page) → spec: `docs/impl/B-phase6-integration.md`
- [x] **B-I05** Add cross-links: Sources ↔ Way (prayer quotes in /way/pray) → spec: `docs/impl/B-phase6-integration.md`
- [x] **B-I06** Add cross-links: Timeline ↔ Way (desert fathers + Palamas events) → spec: `docs/impl/B-phase6-integration.md`

### B-Phase 7: Polish (After Phase 6 + all content complete)

- [ ] **B-T01** Animate candle SVGs in `RetreatProgress.tsx` (CSS keyframes or Framer Motion) → spec: `docs/impl/B-phase7-polish.md`
- [ ] **B-T02** Animate breath prayer widget (CSS breathe keyframe) → spec: `docs/impl/B-phase7-polish.md`
- [ ] **B-T03** Set Way page transitions to 0.6s slow cross-fade → spec: `docs/impl/B-phase7-polish.md`
- [ ] **B-T07** Source CC0 audio files; implement fade control in `AmbientAudioToggle.tsx` → spec: `docs/impl/B-phase7-polish.md`
- [ ] **B-T04** Mobile audit all 20 Way pages at 375px + 768px; fix all issues → spec: `docs/impl/B-phase7-polish.md`
- [ ] **B-T05** Accessibility audit: aria-labels, focus traps, keyboard nav, color contrast → spec: `docs/impl/B-phase7-polish.md`
- [ ] **B-T06** Bundle analysis: confirm no Way component in non-Way routes → spec: `docs/impl/B-phase7-polish.md`
- [ ] **B-T08** Manual lens test: 5 lenses × 5 pages; document and fix gaps → spec: `docs/impl/B-phase7-polish.md`
- [ ] **B-T09** Copy editing pass: tone consistency, no jargon, word count targets met → spec: `docs/impl/B-phase7-polish.md`
- [ ] **B-T10** Theological review: no heresy, accurate traditions, no manipulation → spec: `docs/impl/B-phase7-polish.md`

### B-Phase 8: Launch

- [ ] **B-L01** `npm run build` — 0 errors; smoke test 7 key Way routes → spec: `docs/impl/B-phase8-launch.md`
- [ ] **B-L02** Add `metadata` to all 20 Way routes → spec: `docs/impl/B-phase8-launch.md`
- [ ] **B-L03** Create `opengraph-image.tsx` for each retreat day route → depends: B-L02 → spec: `docs/impl/B-phase8-launch.md`
- [ ] **B-L04** Internal review with 3 audience types → spec: `docs/impl/B-phase8-launch.md`
- [ ] **B-L05** Commit + PR to main → depends: all above → spec: `docs/impl/B-phase8-launch.md`

---

## Implementation File Index

| File | Description |
|---|---|
| `docs/impl/A01-content-depth.md` | Argument body expansion, cult refutations, church father quotes |
| `docs/impl/A02-ux-navigation.md` | Breadcrumb, related content, onboarding, accessibility, theme toggle |
| `docs/impl/A03-lens-system.md` | Lens audit, variants, persistence, recommended path |
| `docs/impl/A04-search-discovery.md` | Unified search index, type badges, facets, recent searches, verse detection |
| `docs/impl/A05-manuscripts-sources.md` | Papyri expansion, passage-level interlinear, facsimile images, tradition chart |
| `docs/impl/A06-denomination-comparison.md` | Protestant sub-traditions, 25+ doctrine rows, history tab, reading lists, map |
| `docs/impl/A07-debate-mode.md` | Steelman toggle, Socratic mode, session export, AI integration |
| `docs/impl/A08-historical-timeline.md` | 200+ events, detail panels, era/topic filters, cross-links |
| `docs/impl/A09-argument-tree.md` | 3-level depth, click-to-detail, skeptic entry mode, mobile touch |
| `docs/impl/A10-semantics-tools.md` | Semantic range, morphological parsing, translation variants, audio, 6 translations |
| `docs/impl/A11-internationalization.md` | Translation audit, RTL support, language selector |
| `docs/impl/A12-mobile-responsiveness.md` | XYFlow mobile, palette mobile, matrix mobile, table scroll hints |
| `docs/impl/A13-performance.md` | XYFlow lazy-load, verse data server-side, dynamic imports, next/image, Lighthouse |
| `docs/impl/A14-missing-content.md` | Prophecy page, Archaeology page, Science & Faith page, Worldviews |
| `docs/impl/A15-community-sharing.md` | Share button, URL state, toast, study notes (P3) |
| `docs/impl/B-phase1-research.md` | Research tasks for human/content agent (no code output) |
| `docs/impl/B-phase2-data-architecture.md` | All types and data files for The Way |
| `docs/impl/B-phase3-components.md` | All 24 components for The Way |
| `docs/impl/B-phase4-pages.md` | All 20 routes for The Way |
| `docs/impl/B-phase5-content.md` | All written content tasks for The Way |
| `docs/impl/B-phase6-integration.md` | Navigation, localStorage, cross-links, search integration |
| `docs/impl/B-phase7-polish.md` | Animations, mobile audit, accessibility, performance, copy edit |
| `docs/impl/B-phase8-launch.md` | Build check, SEO, OG images, review, deploy |

---

> *"For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do."* — Ephesians 2:10

