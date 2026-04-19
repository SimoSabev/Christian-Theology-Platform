# Bespoke Redesign — Study Theology Platform

> **Date**: 2026-04-19
> **Status**: Approved design (brainstorm output) — pending implementation plan
> **Author**: Brainstorm session with project owner
> **Goal**: Enhance the platform's visual and interaction design to convey the firmness, beauty, and seriousness of historic Christian theology, while making heavy daily use easy and effective for four user types (Defender, Student, Researcher, Seeker).

---

## 1. Design Principles

1. **Firm, not floaty.** Weight comes from inscription-style typography, deep contrast, and architectural geometry — not from drop shadows or glassmorphism.
2. **Reverent, not decorative.** Every ornament earns its place; restraint over richness.
3. **Same content, different lenses.** A single canonical content layer; the UI scaffolding adapts to the user's chosen mode.
4. **Easy for 30 seconds, deep for 3 hours.** A new visitor can find one verse or one argument in two clicks. A scholar can spend an evening cross-referencing.
5. **Bespoke, not templated.** Avoid SaaS conventions where they conflict with the sacred subject matter (e.g. neon gradients, cute illustrations, emoji micro-copy).

## 2. Visual Foundations

### 2.1 Color Palette (existing — kept)

| Token                       | Value                       | Use                                |
|-----------------------------|-----------------------------|------------------------------------|
| `--color-bg-primary`        | `#0a0e1a`                   | Page background                    |
| `--color-bg-secondary`      | `#111827`                   | Section background                 |
| `--color-bg-elevated`       | `#1a2035`                   | Card / elevated surface            |
| `--color-accent-gold`       | `#d4a853`                   | Primary accent — borders, headings, CTAs |
| `--color-accent-gold-light` | `#e8c97a`                   | Hover, gradient terminus           |
| `--color-text-primary`      | `#f1f5f9`                   | Body text                          |
| `--color-text-secondary`    | `#94a3b8`                   | Subtitles, meta                    |
| `--color-text-muted`        | `#64748b`                   | Captions, hints                    |
| Category colors             | (existing blue/purple/etc.) | Argument category accents only — never primary chrome |

**Glassmorphism is removed.** `.glass-card` is replaced with a firmer `.codex-card` (solid bg, gold hairline border, no backdrop-filter, no translucency).

### 2.2 Typography (changed)

| Role            | Font                         | Weight  | Notes                                                      |
|-----------------|------------------------------|---------|------------------------------------------------------------|
| Display         | **Cinzel**                   | 700–900 | All caps, letter-spacing 2–6px. Headings, eyebrows, badges. Inscriptional. |
| Body            | **Crimson Pro**              | 400–600 | Long-form prose, premise text, quotations. Higher x-height than EB Garamond, weighty. |
| UI / dense data | **Inter** (fallback only)    | 400–500 | Tables, code, dense data where serif hurts scanability     |
| Mono            | **JetBrains Mono**           | 400     | Manuscript transliteration, code, citations                |

- Drop next-intl's existing Noto Sans / Noto Serif font variables; replace with Cinzel + Crimson Pro via `next/font/google`.
- Provide Cinzel for **all locales** that use Latin script; for Cyrillic / Greek / Hebrew locales, fall back to a comparable inscriptional serif (e.g. PT Serif Caption with letter-spacing) — **i18n requirement**.
- Define semantic typography classes in `globals.css`: `.t-display`, `.t-eyebrow`, `.t-h1`, `.t-h2`, `.t-h3`, `.t-body`, `.t-quote`, `.t-meta`, `.t-caps`. Components use these, not raw font-family.

### 2.3 Ornament System (Architectural)

A small library of inline-SVG components in `src/components/ornament/`:

- `<Eyebrow>` — small all-caps label (`PART · I · COSMOLOGICAL · § 1.1.1`)
- `<KeystoneDivider>` — horizontal section break: hairline → centered diamond glyph → hairline
- `<ArchPanel>` — wraps a section with faint Romanesque arch SVG behind it
- `<RuleHairline>` — 1px gold gradient horizontal rule (transparent → gold → transparent)
- `<DropCap>` — illuminated initial: gold-on-navy filled square, Cinzel 900, bordered
- `<SectionMark>` — § / ☩ / ✠ / ✟ / ⊕ / ☧ glyphs as section signs
- `<InscribedDate>` — A·D·MMXXVI style date, all-caps, dot-separated
- `<Marginalia>` — small italic side-note pulled to left or right margin

These are tokens, not decoration. Pages compose them; pages do not redefine them.

### 2.4 Motion Language (Slow & Deliberate)

- Default duration: **450ms**, easing `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quart).
- Page transitions: **fade + 8px upward translate**, 600ms.
- Scroll reveals: prose paragraphs fade in once on scroll-into-view, staggered 80ms per child.
- Gold accents have an idle glow that breathes (4s loop, opacity 0.6 → 0.85).
- **No** parallax on body content. Hero gets a single subtle parallax layer (arches) only.
- Respect `prefers-reduced-motion` — cut all animation to a 1-frame fade.
- All motion goes through a small `motion.ts` token file (durations, easings) — components do not hardcode timings.

## 3. The Lens System

A persistent **mode toggle** in the top-right corner (next to LanguageSwitcher) cycles five lenses. Lens is stored in `localStorage` under `theologia.lens`, defaulting to `seeker` for new visitors.

| Lens         | New-visitor default | UI emphasis                                                                                  |
|--------------|---------------------|----------------------------------------------------------------------------------------------|
| **Seeker**   | ✓                   | Full-bleed visuals, ambient verses, minimal chrome, slowest motion. The "cathedral walk."     |
| **Student**  |                     | TOC drawer pinned open, reading-progress bar, "next/prev chapter" footer, "mark as read" checks |
| **Defender** |                     | ⌘K opens by default on landing, objection cards surface first, copy-quote buttons everywhere, denser spacing |
| **Researcher**|                    | Split-pane mode unlocked, citations panel always visible, footnotes inline, source-jump shortcuts |
| **Default (All)**|                 | Balanced — search reachable, TOC accessible but not pinned, normal density                   |

**Implementation**: a `LensProvider` (React context) wraps the app. Components read `useLens()` and conditionally render or restyle. CSS uses `[data-lens="defender"]` attribute selectors on `<html>` for purely-cosmetic lens variations (e.g. spacing density).

A one-time onboarding card on first visit explains the lens system and lets the user pick — defaulting to Seeker if they dismiss.

## 4. Page Designs

### 4.1 Homepage Hero — "Architectural Statement + Triptych"

The threshold of the cathedral. Single screen, centered.

**Structure (top to bottom):**
1. **Inscribed eyebrow** — `SOLI · DEO · GLORIA` in gold Cinzel, letter-spacing 10px.
2. **Headline** — *"Know what you believe"* in Cinzel 700, 56px desktop / 36px mobile, all caps.
3. **Subhead** — *"Two thousand years of Christian thought, examined, defended, and made navigable."* in Crimson Pro 17px, max-width 520px.
4. **Twin CTAs** — gold filled `Enter` + outlined `Take a Tour`.
5. **`⌘K to search anything`** hint below CTAs.
6. **Faint cathedral-arch SVG** (3 arches, varying heights) at low opacity (~0.18) behind the headline — single subtle parallax layer.
7. **Triptych portal cards** below the hero on scroll: three pillared entry cards (Defend / Compare / Sources) with `<SectionMark>` glyphs at top.
8. **Ambient verse rotator** — bottom-left of hero. Gold handwriting-style font (separate, e.g. *Cormorant Garamond Italic* at 14px, color `--color-accent-gold` at 0.7 opacity), typewriter reveal, 30s dwell, 1.2s fade between verses. Set of 12–20 curated verses (John 1:1, Hebrews 1:3, etc.). Pauses on hover. Hidden under `prefers-reduced-motion`.

### 4.2 Argument Page (`/defend/atheism/[arg]`, etc.) — Hybrid

Layout: **two-column with persistent sidebar TOC**. Below the fold, an objections grid.

**Columns:**
- **Left sidebar (220px)** — outline of the current argument's sections (Premises / Defense of P1 / Defense of P2 / Objections / Proponents / Sources) + "Related arguments" block. Sticky. Auto-collapses below 1024px.
- **Main column** — content.

**Main content order:**
1. `<Eyebrow>` with location: `PART · I · COSMOLOGICAL · § 1.1.1`
2. Argument title in Cinzel
3. One-line italic Crimson Pro subtitle: *"Cosmological Argument"*
4. **Formal premise block** — gold-bordered card, premises numbered with gold P1./P2./∴, separator above conclusion.
5. **Action toolbar** — `Copy quote` / `Cite` / `Save` (Cinzel 10px caps, gold outline buttons).
6. **In Seeker lens only**: a `<DropCap>` opens the prose introduction below the formal block.
7. **Defense sections** — one per premise, each headed by `<KeystoneDivider>`.
8. **Objections grid** (Battle Card pattern) — two-column: red-bordered objection card → green-bordered reply card. Always present; emphasized in Defender lens.
9. **Proponents** — small portrait-card row (Aquinas, Craig, Plantinga…) with dates and key works.
10. **Sources** — full bibliography, footnote-style.

### 4.3 Compare Page (`/compare`, `/compare/[tradition]`) — Layered

Three views of the same data, switchable via tab in the page header:

- **Matrix view** (default entry) — full grid: traditions × doctrines. Hover row → gold highlight. Click cell → opens Triptych view scrolled to that doctrine.
- **Triptych view** (`/compare/[doctrine]`) — three altar-piece panels (Orthodox / Catholic / Protestant) per doctrine. Multiple doctrines stack vertically, separated by `<KeystoneDivider>`. Each panel includes a "Key Distinction" callout.
- **Diff view** (`/compare/diff?a=catholic&b=protestant`) — pick any two traditions, git-diff style with highlighted differences. Top tabs to switch which doctrine is being diffed.

The view switcher persists per-session.

### 4.4 Sources / Manuscript Reader (`/sources/manuscripts/[id]`) — Tightening Existing

The manuscript archive and interlinear reader already exist. Redesign tightens it without changing functionality:
- Apply new typography (Cinzel for ms identifier, Crimson Pro for translation, JetBrains Mono for transliteration).
- Replace the existing card chrome with `.codex-card`.
- Add `<Eyebrow>` with manuscript dating: `𝔓⁶⁶ · BODMER · c. A.D. 200`.
- Verse navigation uses `<KeystoneDivider>` between chapters.
- In Researcher lens: split-pane unlocks (left = Greek, right = English/translations), with synchronized scroll.

### 4.5 Explore (`/explore`, `/explore/argument-tree`, etc.)

The argument-tree visualization (xyflow) gets restyled: dark navy node fills, gold borders, Cinzel labels. Edges in muted gold. No emoji nodes.

### 4.6 Semantics (`/semantics`)

Apply foundation tokens; treat as a content page (no special layout work in this scope).

## 5. Command Bar (⌘K) — Hybrid

A single `<CommandPalette>` component, opened by `⌘K` / `Ctrl+K` / `/` from anywhere. Behavior switches based on input:

- **Default** — universal fuzzy search (Fuse.js, already a dep) across arguments, sources, cult positions, doctrines, scripture references. Results grouped by content type.
- **Verse pattern detected** (`John 1:1`, `Rom 4:5`, `1 Cor 13:4-7`) → switches to **Scripture-First** view: shows the verse in selected translation with translation-tabs (KJV/ESV/Greek/Vulgate), then "Used in arguments" and "Manuscripts" sections.
- **`/` prefix** → switches to **Action mode**: surfaces verbs (`Defend against…`, `Compare two traditions…`, `Open a manuscript…`, `Look up a verse…`, `Switch lens…`). Each action launches its own sub-flow.
- **Recently visited** appears at the bottom when the input is empty.

Keyboard nav: ↑/↓ select, ↵ open, ⌘↵ open in new tab, esc close. Implemented as a portal-rendered overlay with focus trap.

## 6. Navigation Chrome

### 6.1 Navbar (redesign)

- Solid `--color-bg-primary` (no transparency); gold hairline bottom border.
- Left: wordmark in Cinzel — `THEOLOGIA` (or current name) — 14px caps, letter-spacing 4px.
- Center: section links — `DEFEND · COMPARE · EXPLORE · SEMANTICS · SOURCES` in Cinzel 11px caps.
- Right (in order): `⌘K` search trigger pill, **Lens toggle**, **LanguageSwitcher**.
- Active section gets a gold underline (2px, animated slide between sections).
- Mobile: hamburger reveals a full-screen overlay with `<KeystoneDivider>` between section links.

### 6.2 Footer (redesign)

- `<KeystoneDivider>` separates content from footer.
- Three-column: navigation links, "About / Methodology / Bibliography", `<InscribedDate>` build stamp.
- Closing line: small Cinzel `SOLI · DEO · GLORIA` centered, gold.

## 7. Component Inventory (new + replaced)

### New components (`src/components/`)

```
ornament/
  Eyebrow.tsx
  KeystoneDivider.tsx
  ArchPanel.tsx
  RuleHairline.tsx
  DropCap.tsx
  SectionMark.tsx
  InscribedDate.tsx
  Marginalia.tsx

lens/
  LensProvider.tsx          # context + localStorage persistence
  LensToggle.tsx            # corner UI control
  LensOnboarding.tsx        # one-time first-visit card
  useLens.ts                # hook

command/
  CommandPalette.tsx        # the ⌘K overlay
  CommandBarTrigger.tsx     # navbar pill
  search/
    universalSearch.ts      # Fuse.js wrapper
    versePatternDetect.ts   # regex + parse
    actionRegistry.ts       # the / verbs

reader/
  CodexCard.tsx             # replaces .glass-card
  PremiseBlock.tsx          # formal P1/P2/∴ block
  ObjectionGrid.tsx         # battle-card pattern
  ActionToolbar.tsx         # copy/cite/save
  ProponentRow.tsx
  CitationList.tsx
  ArgumentSidebar.tsx       # left-column TOC for argument pages

compare/
  DoctrinalMatrix.tsx       # the grid view
  TriptychPanels.tsx        # altar-piece per doctrine
  DoctrineDiff.tsx          # git-diff style
  CompareViewSwitcher.tsx

hero/
  HeroArchitectural.tsx     # the locked design
  TriptychPortal.tsx        # 3 entry cards below hero
  AmbientVerseRotator.tsx   # bottom-left typewriter

motion/
  motion.ts                 # tokens: durations, easings
  PageTransition.tsx
  RevealOnScroll.tsx
```

### Replaced / removed

- `.glass-card` (in `globals.css`) → removed; replaced by `<CodexCard>` + `.codex-card` class.
- Backdrop-filter usages site-wide → audited and removed.
- Existing Navbar / Footer → rewritten.

## 8. Internationalization Notes

- All new strings flow through next-intl message files. Add a new namespace per feature (`hero`, `command`, `lens`, `ornament-aria`).
- Cinzel ships Latin only — confirmed locales using Cyrillic/Greek/Hebrew need a vetted fallback display font configured in `layout.tsx`.
- `<InscribedDate>` formatting respects locale (e.g. Roman numerals stay; Cyrillic locales may prefer their own date format).
- RTL is already supported; `<KeystoneDivider>` and `<DropCap>` work directionally; verify `<ArgumentSidebar>` flips correctly.

## 9. Accessibility

- All gold-on-navy combinations verified against WCAG AA at minimum (the gold `#d4a853` on navy `#0a0e1a` passes AA for body text).
- Lens toggle is a `<button>` with `aria-pressed` per option, keyboard reachable, screen-reader label.
- Command palette traps focus, restores focus on close, announces results count via `aria-live`.
- Drop caps are `aria-hidden` (decorative); the full word is in the prose for screen readers.
- Reduced-motion: ambient verse rotator stops cycling, all transitions reduce to instant fades.
- Scripture quotations use `<blockquote cite="...">` with proper citation metadata.

## 10. Rollout Phases

**Phase 1 — Foundations (cross-cutting)**

Ships site-wide; every existing page benefits the moment it merges.

- Typography swap (Cinzel + Crimson Pro via next/font)
- `globals.css` overhaul: remove glassmorphism, add `.codex-card`, semantic typography classes, ornament tokens
- `motion.ts` tokens
- Ornament component library (`src/components/ornament/`)
- Lens system: `LensProvider`, `LensToggle`, `LensOnboarding`
- Navbar + Footer redesign
- Command Palette (`⌘K`) — universal search mode only in Phase 1; verse and `/` modes can land in Phase 2
- Homepage hero (Architectural Statement + Triptych Portal + Ambient Verse Rotator)

**Phase 2 — Argument page (Defend)**

- `<ArgumentSidebar>`, `<PremiseBlock>`, `<ObjectionGrid>`, `<ActionToolbar>`, `<ProponentRow>`, `<CitationList>`
- Lens-aware emphasis (Defender → toolbar prominent; Seeker → drop-cap intro; Student → progress bar)
- Command Palette: verse pattern + `/` action modes added

**Phase 3 — Compare**

- `<DoctrinalMatrix>` (default entry)
- `<TriptychPanels>` (doctrine detail)
- `<DoctrineDiff>` (1-on-1 mode)
- `<CompareViewSwitcher>`

**Phase 4 — Sources / Manuscripts**

- Apply foundations + new ornament to existing manuscript reader
- Researcher-lens split-pane mode for interlinear

**Phase 5 — Explore + Semantics**

- Restyle argument-tree (xyflow) nodes/edges
- Apply foundations to remaining pages

Each phase is independently shippable. Phase 1 is the largest — it changes how every page feels even before any per-page work.

## 11. Out of Scope (this design)

- New content (no new arguments, doctrines, manuscripts authored)
- Backend / data model changes
- Authentication / user accounts (mode persistence is `localStorage` only)
- A "Saved" / bookmarks system (the `Save` button on the toolbar is a Phase 2+ stretch — Phase 1 ships the button hidden or disabled)
- Mobile-app-shell behaviors (PWA install, etc.)

## 12. Success Criteria

- A first-time visitor in Seeker mode reaches one argument and reads the formal premise block within 30 seconds of landing.
- A Defender can press ⌘K, type "kalam", and copy the formal argument in under 5 seconds.
- A Researcher can open the comparison Matrix and reach the doctrinal Diff view of any two traditions in three clicks.
- The platform's typography and motion communicate "firm and beautiful" without explanation — verifiable by qualitative user feedback.
- No regression in existing functionality (all current pages continue to work after Phase 1, restyled but functional).
