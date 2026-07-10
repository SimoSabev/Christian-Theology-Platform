# Reading Modes (Lens) — Full Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the lens/reading-mode system fully functional across the entire platform — every feature the LENS_VARIANTS config declares must visibly affect content on the relevant pages.

**Architecture:** The infrastructure already exists: `LensProvider` (context + localStorage), `LensToggle` (navbar), `LensOnboarding` (first-visit), `LensRecommendedPath` (home), `LensAdaptedContent` (conditional render component), and `useLens()` hook. `LENS_VARIANTS` declares `showFootnotes`, `showGreekHebrew`, `showPatristicCitations`, `argumentDepth`, and `homepageMessage` flags — but only the argument detail page (`/defend/atheism/[category]/[argument]/page.tsx`) actually reads them. All other pages ignore the lens entirely. This plan wires every declared flag to real UI behaviour on all relevant pages.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, next-intl, Lucide React icons. No test framework — verification is `npm run build` (zero TypeScript/lint errors) plus manual browser checks.

---

## File Map

| File | Change |
|------|--------|
| `src/components/command/CommandPalette.tsx` | Add inline lens-picker mode; fix broken "Switch reading mode" action |
| `src/components/lens/LensOnboarding.tsx` | Show descriptions on each lens option |
| `src/app/[locale]/page.tsx` | Show `homepageMessage` from active lens variant |
| `src/app/[locale]/defend/atheism/[category]/page.tsx` | Hide formal premises for `seeker`; show lens banner |
| `src/app/[locale]/sources/church-fathers/page.tsx` | Add seeker welcome, hide documents for seeker |
| `src/app/[locale]/sources/manuscripts/[id]/page.tsx` | Hide interlinear reader when `showGreekHebrew` is false |
| `src/app/[locale]/explore/debate-mode/page.tsx` | Add per-lens contextual tip banner |
| `src/app/[locale]/semantics/page.tsx` | Add note when `showGreekHebrew` is false |
| `src/components/lens/types.ts` | Update audit comments to reflect implementation |

---

## Task 1: Fix CommandPalette "Switch reading mode" action

**Problem:** The action has `href: undefined` so clicking it only closes the palette — the user never actually gets to switch their lens. The fix: when this action is selected, the palette transitions into an inline lens-picker panel (same lens options as `LensToggle`), and selecting a lens sets it and closes the palette.

**Files:**
- Modify: `src/components/command/CommandPalette.tsx`

- [ ] **Step 1: Read the current file**

```bash
# Verify line 16-22 shows the ACTIONS array with the lens action having href: undefined
```

Already read above. Confirmed `{ id: 'lens', label: 'Switch reading mode…', href: undefined, Icon: Eye }` on line 20.

- [ ] **Step 2: Add a lens-picker mode state and wire useLens**

In `src/components/command/CommandPalette.tsx`, add `lensMode` state and import the lens hooks. Replace the file content as shown — only the added/changed lines are described:

At the top, add these imports (after the existing imports):
```tsx
import { useLens } from '@/components/lens/useLens';
import { LENSES, LENS_VARIANTS, type Lens } from '@/components/lens/types';
```

Inside the `CommandPalette` component, after the existing `useState` hooks, add:
```tsx
const { lens: activeLens, setLens } = useLens();
const [lensMode, setLensMode] = useState(false);
```

Also reset `lensMode` when the palette closes:
```tsx
useEffect(() => {
  if (open) {
    setQuery('');
    setActive(0);
    setLensMode(false);  // ← add this line
    setTimeout(() => inputRef.current?.focus(), 0);
  }
}, [open]);
```

- [ ] **Step 3: Wire the lens action button to open lensMode**

Find this block in `CommandPalette.tsx` (the `if (!action.href)` branch, lines ~153-170):
```tsx
if (!action.href) {
  return (
    <button
      key={action.id}
      onMouseEnter={() => setActive(idx)}
      onClick={onClose}
      ...
    >
```

Change `onClick={onClose}` to `onClick={() => setLensMode(true)}`:
```tsx
if (!action.href) {
  return (
    <button
      key={action.id}
      onMouseEnter={() => setActive(idx)}
      onClick={() => { if (action.id === 'lens') { setLensMode(true); } else { onClose(); } }}
      ...
    >
```

- [ ] **Step 4: Add the lensMode render block**

Inside `<div id="command-results" ...>`, before the `{!query && ...}` empty state block, add:
```tsx
{/* LENS PICKER MODE */}
{lensMode && (
  <>
    <div className="t-eyebrow px-4 py-2 flex items-center justify-between">
      <span>READING MODE</span>
      <button
        onClick={() => setLensMode(false)}
        className="t-meta"
        style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)', fontSize: 11 }}
      >
        ← Back
      </button>
    </div>
    {LENSES.map((l: Lens) => (
      <button
        key={l}
        onClick={() => { setLens(l); onClose(); }}
        className="w-full text-left px-4 py-3 flex items-center justify-between"
        style={{
          background: activeLens === l ? 'rgba(212,168,83,0.08)' : 'transparent',
          borderLeft: `2px solid ${activeLens === l ? 'var(--color-accent-gold)' : 'transparent'}`,
        }}
      >
        <div>
          <div className="t-caps text-xs" style={{ color: 'var(--color-text-primary)' }}>
            {l.charAt(0).toUpperCase() + l.slice(1)}
          </div>
          <div className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
            {LENS_VARIANTS[l].homepageMessage}
          </div>
        </div>
        {activeLens === l && (
          <span style={{ color: 'var(--color-accent-gold)', fontSize: 10 }}>✓ Active</span>
        )}
      </button>
    ))}
  </>
)}
```

Also suppress the normal content when `lensMode` is true — wrap the existing `{!query && ...}`, `{isActionMode && ...}`, `{isVerse && ...}`, and `{!isActionMode && !isVerse && ...}` blocks each with `{!lensMode && ...}`.

- [ ] **Step 5: Verify build succeeds**

```bash
npm run build
```
Expected: no TypeScript or lint errors.

- [ ] **Step 6: Commit**

```bash
git add src/components/command/CommandPalette.tsx
git commit -m "feat(lens): add inline lens picker to command palette — fixes broken Switch Reading Mode action"
```

---

## Task 2: Improve LensOnboarding — show descriptions

**Problem:** The onboarding modal only shows lens names (`Seeker`, `Student`, etc.). The translation file has `lens.descriptions.*` keys already set up and used by `LensToggle`, but `LensOnboarding` never reads them. Users have no idea what each mode means.

**Files:**
- Modify: `src/components/lens/LensOnboarding.tsx`

- [ ] **Step 1: Read the current file**

Already read above (lines 1–64). Confirmed `tNames` is used but no descriptions hook exists.

- [ ] **Step 2: Add the descriptions translation hook**

At line 13, after `const tNames = useTranslations('lens.names');`, add:
```tsx
const tDesc = useTranslations('lens.descriptions');
```

- [ ] **Step 3: Add description text inside each lens button**

Find (lines 47–52):
```tsx
<button
  key={l}
  onClick={() => pick(l)}
  className="text-left px-4 py-3 border transition-colors hover:border-[var(--color-accent-gold)]"
  style={{ borderColor: 'var(--color-border)' }}
>
  <div className="t-caps text-xs">{tNames(l)}</div>
</button>
```

Replace with:
```tsx
<button
  key={l}
  onClick={() => pick(l)}
  className="text-left px-4 py-3 border transition-colors hover:border-[var(--color-accent-gold)]"
  style={{ borderColor: 'var(--color-border)' }}
>
  <div className="t-caps text-xs">{tNames(l)}</div>
  <div className="text-xs mt-1" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)', lineHeight: 1.5 }}>
    {tDesc(l)}
  </div>
</button>
```

- [ ] **Step 4: Verify build succeeds**

```bash
npm run build
```

- [ ] **Step 5: Commit**

```bash
git add src/components/lens/LensOnboarding.tsx
git commit -m "feat(lens): show descriptions in onboarding modal so users understand each reading mode"
```

---

## Task 3: Show homepageMessage on the Home page

**Problem:** `LENS_VARIANTS` declares a `homepageMessage` per lens (e.g., "Begin your journey wherever you are." for seeker), but it's only referenced in the non-rendered `LensRecommendedPath` component. The home page doesn't show the active lens's message anywhere prominent.

**Files:**
- Modify: `src/app/[locale]/page.tsx`

- [ ] **Step 1: Read the current file**

Already read above (lines 1–90). Confirmed `useLens` is NOT imported; `LensRecommendedPath` IS rendered at line 26.

- [ ] **Step 2: Import useLens and LENS_VARIANTS**

After the existing imports (after line 13 `import LensRecommendedPath`), add:
```tsx
import { useLens } from '@/components/lens/useLens';
import { LENS_VARIANTS } from '@/components/lens/types';
```

- [ ] **Step 3: Read the lens variant inside the component**

Inside `HomePage()`, after `const quoteOfDay = getQuoteOfDay();`, add:
```tsx
const { lens, hydrated } = useLens();
const lensVariant = LENS_VARIANTS[lens];
```

- [ ] **Step 4: Add the message below LensRecommendedPath**

Find the closing `</section>` of the recommended path section (around line 27):
```tsx
      </section>
```

Replace with:
```tsx
        {hydrated && (
          <p className="mt-3 t-meta text-xs" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
            {lensVariant.homepageMessage}
          </p>
        )}
      </section>
```

- [ ] **Step 5: Verify build succeeds**

```bash
npm run build
```

- [ ] **Step 6: Commit**

```bash
git add src/app/[locale]/page.tsx
git commit -m "feat(lens): show lens homepageMessage on home page beneath the recommended path"
```

---

## Task 4: Lens-adapt the argument category listing page

**Problem:** `/defend/atheism/[category]` shows every argument card with full formal premises. For `seeker` users, the premise notation (`P1.`, `P2.`, `∴`) is intimidating and creates no value — they came from the onboarding path that directs them to this section. For `defender`/`researcher`, the full formal block is essential.

**Files:**
- Modify: `src/app/[locale]/defend/atheism/[category]/page.tsx`

- [ ] **Step 1: Read the current file**

Already read above (lines 1–90). Lines 53–63 render the formal premise block.

- [ ] **Step 2: Add useLens import**

After line 8 (`import { ArrowLeft, ArrowRight } from 'lucide-react';`), add:
```tsx
import { useLens } from '@/components/lens/useLens';
```

- [ ] **Step 3: Read lens inside the component**

Inside `CategoryPage()`, after `const args = getArgumentsByCategory(category);`, add:
```tsx
const { lens } = useLens();
const isSimplified = lens === 'seeker';
```

- [ ] **Step 4: Add a lens banner after the Eyebrow header**

Find (line 36–38):
```tsx
      <RevealOnScroll>
        <Eyebrow className="mb-3">DEFEND · ATHEISM · {catInfo.name.toUpperCase()}</Eyebrow>
        <h1 className="t-h1 mb-3" ...>{catInfo.name}</h1>
        <p className="t-body mb-8" ...>{catInfo.description}</p>
      </RevealOnScroll>
```

Replace with:
```tsx
      <RevealOnScroll>
        <Eyebrow className="mb-3">DEFEND · ATHEISM · {catInfo.name.toUpperCase()}</Eyebrow>
        <h1 className="t-h1 mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>{catInfo.name}</h1>
        <p className="t-body mb-6" style={{ color: 'var(--color-text-secondary)', maxWidth: 640 }}>{catInfo.description}</p>
        {isSimplified && (
          <div
            className="mb-8 p-4"
            style={{ border: '1px solid rgba(212,168,83,0.3)', background: 'rgba(212,168,83,0.04)', borderLeft: '3px solid var(--color-accent-gold)' }}
          >
            <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              <strong style={{ color: 'var(--color-accent-gold)' }}>Seeker mode:</strong> Click any argument to read a plain-language overview. The formal logical structure is hidden for clarity — switch to Student or Defender mode to see it.
            </p>
          </div>
        )}
      </RevealOnScroll>
```

- [ ] **Step 5: Conditionally hide the formal premises block in each card**

Find the mini-formal-statement block (lines 53–63):
```tsx
                {/* Mini formal statement */}
                <div className="mb-4 text-sm space-y-1" style={{ borderLeft: '2px solid var(--color-border)', paddingLeft: 12 }}>
                  {arg.premises.map((p, pi) => (
                    <p key={p.id} className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      <span style={{ color: 'var(--color-accent-gold)' }}>P{pi + 1}.</span> {p.text}
                    </p>
                  ))}
                  <p className="t-body text-sm" style={{ color: 'var(--color-accent-gold)', marginTop: 4 }}>
                    ∴ {arg.conclusion}
                  </p>
                </div>
```

Wrap it with the condition:
```tsx
                {/* Mini formal statement */}
                {!isSimplified && (
                  <div className="mb-4 text-sm space-y-1" style={{ borderLeft: '2px solid var(--color-border)', paddingLeft: 12 }}>
                    {arg.premises.map((p, pi) => (
                      <p key={p.id} className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                        <span style={{ color: 'var(--color-accent-gold)' }}>P{pi + 1}.</span> {p.text}
                      </p>
                    ))}
                    <p className="t-body text-sm" style={{ color: 'var(--color-accent-gold)', marginTop: 4 }}>
                      ∴ {arg.conclusion}
                    </p>
                  </div>
                )}
```

- [ ] **Step 6: Verify build succeeds**

```bash
npm run build
```

- [ ] **Step 7: Commit**

```bash
git add src/app/[locale]/defend/atheism/[category]/page.tsx
git commit -m "feat(lens): adapt argument category listing to hide formal premises in seeker mode"
```

---

## Task 5: Lens-adapt the Church Fathers page

**Problem:** The Church Fathers page has two sections: (1) a filterable quote list and (2) detailed church father document cards with cross-references. The `showPatristicCitations` flag is false for `seeker` — meaning seekers aren't expected to study patristics deeply. For seekers, the page should show a welcoming intro and hide the complex document cards. For `researcher`/`defender`, show everything. The quotes themselves are visible to all lenses.

**Files:**
- Modify: `src/app/[locale]/sources/church-fathers/page.tsx`

- [ ] **Step 1: Read the current file**

Already read above (lines 1–194). The quotes section is lines 40–144. The detailed documents are lines 148–191.

- [ ] **Step 2: Add useLens and LENS_VARIANTS imports**

After line 9 (`import CodexCard from '@/components/reader/CodexCard';`), add:
```tsx
import { useLens } from '@/components/lens/useLens';
import { LENS_VARIANTS } from '@/components/lens/types';
```

- [ ] **Step 3: Read lens inside the component**

Inside `ChurchFathersPage()`, after the existing `useState` hooks (after line 16), add:
```tsx
const { lens } = useLens();
const { showPatristicCitations } = LENS_VARIANTS[lens];
```

- [ ] **Step 4: Add seeker welcome intro after the page header**

Find (line 35–38):
```tsx
      <RevealOnScroll>
        <Eyebrow className="mb-3">SOURCES · PATRISTICS</Eyebrow>
        <h1 className="t-h1 mb-3" ...>Church Fathers</h1>
        <p className="t-body mb-8" ...>The foundational writings of early Christianity</p>
      </RevealOnScroll>
```

Replace with:
```tsx
      <RevealOnScroll>
        <Eyebrow className="mb-3">SOURCES · PATRISTICS</Eyebrow>
        <h1 className="t-h1 mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>Church Fathers</h1>
        <p className="t-body mb-6" style={{ color: 'var(--color-text-secondary)' }}>The foundational writings of early Christianity</p>
        {!showPatristicCitations && (
          <div
            className="mb-8 p-4"
            style={{ border: '1px solid rgba(212,168,83,0.3)', background: 'rgba(212,168,83,0.04)', borderLeft: '3px solid var(--color-accent-gold)' }}
          >
            <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              <strong style={{ color: 'var(--color-accent-gold)' }}>New to patristics?</strong> These are the words of the earliest Christian writers — people who knew the apostles or their direct students. Start with any quote that catches your eye. Switch to Student or Researcher mode to access the full document archive below.
            </p>
          </div>
        )}
      </RevealOnScroll>
```

- [ ] **Step 5: Conditionally hide the document cards section**

Find (around line 148):
```tsx
      <div className="space-y-6">
        {churchFathers.map((doc, i) => (
```

Wrap the entire `<div className="space-y-6">` block through its closing `</div>` with:
```tsx
      {showPatristicCitations && (
        <div className="space-y-6">
          {churchFathers.map((doc, i) => (
            // ... existing content unchanged ...
          ))}
        </div>
      )}
```

Also wrap the `<KeystoneDivider className="mb-10" />` at line 147 in the same condition so it doesn't appear as a floating divider when the section is hidden:
```tsx
      {showPatristicCitations && <KeystoneDivider className="mb-10" />}
      {showPatristicCitations && (
        <div className="space-y-6">
          ...
        </div>
      )}
```

- [ ] **Step 6: Verify build succeeds**

```bash
npm run build
```

- [ ] **Step 7: Commit**

```bash
git add src/app/[locale]/sources/church-fathers/page.tsx
git commit -m "feat(lens): hide patristic document cards in seeker mode; add welcoming intro"
```

---

## Task 6: Lens-adapt the Manuscripts detail page

**Problem:** The interlinear reader (`InterlinearReader` component) requires knowledge of Greek/Hebrew to be useful. The `showGreekHebrew` flag is `false` for `seeker` and `student`, `true` for `defender`, `researcher`, and `all`. When the flag is false, the interlinear reader section should be hidden and replaced with a short note.

**Files:**
- Modify: `src/app/[locale]/sources/manuscripts/[id]/page.tsx`

- [ ] **Step 1: Read the current file**

Already read above (lines 1–266). The interlinear reader is rendered at lines 125–135.

- [ ] **Step 2: Add useLens and LENS_VARIANTS imports**

After line 11 (`import InterlinearReader from ...`), add:
```tsx
import { useLens } from '@/components/lens/useLens';
import { LENS_VARIANTS } from '@/components/lens/types';
```

- [ ] **Step 3: Read lens inside the component**

Inside `ManuscriptDetailPage()`, after `const [lightboxImage, setLightboxImage] = useState<string | null>(null);` (line 38), add:
```tsx
const { lens } = useLens();
const { showGreekHebrew } = LENS_VARIANTS[lens];
```

- [ ] **Step 4: Conditionally show the interlinear reader**

Find this block (lines 125–135):
```tsx
          {/* Interactive Interlinear Reading */}
          {ms.passages.length > 0 && (
            <RevealOnScroll>
              <KeystoneDivider className="my-8" />
              <CodexCard>
                <Eyebrow className="mb-6">INTERACTIVE INTERLINEAR READING</Eyebrow>
                <InterlinearReader passages={ms.passages} script={ms.script} />
              </CodexCard>
            </RevealOnScroll>
          )}
```

Replace with:
```tsx
          {/* Interactive Interlinear Reading */}
          {ms.passages.length > 0 && (
            <RevealOnScroll>
              <KeystoneDivider className="my-8" />
              {showGreekHebrew ? (
                <CodexCard>
                  <Eyebrow className="mb-6">INTERACTIVE INTERLINEAR READING</Eyebrow>
                  <InterlinearReader passages={ms.passages} script={ms.script} />
                </CodexCard>
              ) : (
                <div
                  className="p-4"
                  style={{ border: '1px solid var(--color-border)', background: 'rgba(212,168,83,0.03)' }}
                >
                  <p className="t-meta text-xs" style={{ color: 'var(--color-text-muted)' }}>
                    The interactive {ms.script === 'greek' ? 'Greek' : 'Hebrew'} interlinear reader is available in Defender and Researcher reading modes. Use the <strong>reading mode toggle</strong> in the top navigation to switch.
                  </p>
                </div>
              )}
            </RevealOnScroll>
          )}
```

- [ ] **Step 5: Verify build succeeds**

```bash
npm run build
```

- [ ] **Step 6: Commit**

```bash
git add src/app/[locale]/sources/manuscripts/[id]/page.tsx
git commit -m "feat(lens): hide interlinear reader for non-Greek/Hebrew lenses; show mode upgrade prompt"
```

---

## Task 7: Lens-adapt the Debate Mode page

**Problem:** The debate mode page has no lens awareness at all. For seekers, the two-column format with evidence strength ratings can be confusing without context. For defenders, a tactics tip would help them use this page practically.

**Files:**
- Modify: `src/app/[locale]/explore/debate-mode/page.tsx`

- [ ] **Step 1: Read the current file**

Already read above (lines 1–159). The header is lines 23–69. Main content starts at line 86.

- [ ] **Step 2: Add useLens and LENS_VARIANTS imports**

After line 7 (`import { Eyebrow } from '@/components/ornament';`), add:
```tsx
import { useLens } from '@/components/lens/useLens';
```

- [ ] **Step 3: Read lens inside the component**

Inside `DebateModePage()`, after `const round = debate.rounds[currentRound];` (line 19), add:
```tsx
const { lens } = useLens();
```

- [ ] **Step 4: Add a lens-contextual banner below the depth meter**

Find the closing `</div>` of the Depth Meter section (after line 83):
```tsx
      </div>

      {/* Debate Panels */}
```

After that `</div>` and before `{/* Debate Panels */}`, insert:
```tsx
      {/* Lens-contextual tip */}
      {(lens === 'seeker' || lens === 'defender') && (
        <div
          className="px-4 sm:px-6 lg:px-8 py-2 border-b border-border"
          style={{ background: 'rgba(212,168,83,0.04)' }}
        >
          <div className="max-w-7xl mx-auto">
            <p className="text-xs" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
              {lens === 'seeker'
                ? 'Each round shows the strongest argument for and against. Green = widely accepted. Amber = contested. Red = disputed among scholars.'
                : 'Defender tip: focus on contested (red) evidence — these are the points opponents will attack. Prepare your responses for those first.'}
            </p>
          </div>
        </div>
      )}
```

- [ ] **Step 5: Verify build succeeds**

```bash
npm run build
```

- [ ] **Step 6: Commit**

```bash
git add src/app/[locale]/explore/debate-mode/page.tsx
git commit -m "feat(lens): add contextual tip banner to debate mode for seeker and defender lenses"
```

---

## Task 8: Lens-adapt the Semantics page

**Problem:** The semantics page is an advanced Greek exegesis tool. The `showGreekHebrew` flag is `false` for `seeker` and `student`. They should see an explanatory callout explaining what this tool is, suggesting they switch mode if they want to explore it. For researcher/defender/all, show everything as-is.

**Files:**
- Modify: `src/app/[locale]/semantics/page.tsx`

- [ ] **Step 1: Read the current file**

Already read above (lines 1–126). Header is lines 21–32.

- [ ] **Step 2: Add useLens and LENS_VARIANTS imports**

After line 8 (`import RevealOnScroll from ...`), add:
```tsx
import { useLens } from '@/components/lens/useLens';
import { LENS_VARIANTS } from '@/components/lens/types';
```

- [ ] **Step 3: Read lens inside the component**

Inside `SemanticsDashboard()`, after the `useState` hook (line 16), add:
```tsx
const { lens } = useLens();
const { showGreekHebrew } = LENS_VARIANTS[lens];
```

- [ ] **Step 4: Add a banner below the header for non-Greek lenses**

Find (after the `<KeystoneDivider className="mb-10" />` at line 32):
```tsx
      <KeystoneDivider className="mb-10" />

      {/* Tutorial Banner */}
```

After that `<KeystoneDivider .../>` and before `{/* Tutorial Banner */}`, insert:
```tsx
      {/* Lens awareness note */}
      {!showGreekHebrew && (
        <div
          className="mb-10 p-5"
          style={{ border: '1px solid rgba(212,168,83,0.3)', background: 'rgba(212,168,83,0.04)', borderLeft: '3px solid var(--color-accent-gold)' }}
        >
          <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
            <strong style={{ color: 'var(--color-accent-gold)' }}>About this tool:</strong> Semantic Studies lets you explore the exact Koine Greek grammar of debated Biblical passages — word-by-word, with definition slides. It is designed for defenders and researchers. You can browse freely, or switch to <strong>Defender</strong> or <strong>Researcher</strong> reading mode for the full scholarly context.
          </p>
        </div>
      )}
```

- [ ] **Step 5: Verify build succeeds**

```bash
npm run build
```

- [ ] **Step 6: Commit**

```bash
git add src/app/[locale]/semantics/page.tsx
git commit -m "feat(lens): add context note on semantics page when showGreekHebrew is false"
```

---

## Task 9: Update the lens audit comments in types.ts

**Problem:** `src/components/lens/types.ts` lines 2–19 contain an audit table showing which pages use `useLens()` and which do not. After this plan is implemented, those comments are wrong and will mislead future developers.

**Files:**
- Modify: `src/components/lens/types.ts`

- [ ] **Step 1: Replace the audit comment block**

Find lines 2–19:
```ts
// LENS AUDIT — Pages using useLens():
// - /defend/atheism/[category]/[argument]/page.tsx — YES (lens-aware, conditionals on 'seeker'/'defender')
// - /defend/cults/[category]/[objection]/page.tsx  — NO (lens-not-needed, static content)
// ...
// Identified pages that need lens implementation: argument detail page (already done)
```

Replace with:
```ts
// LENS AUDIT — Pages using useLens():
// - /defend/atheism/[category]/[argument]/page.tsx — YES (full lens adaptation)
// - /defend/atheism/[category]/page.tsx            — YES (seeker hides formal premises + banner)
// - /sources/church-fathers/page.tsx               — YES (seeker hides documents, showPatristicCitations)
// - /sources/manuscripts/[id]/page.tsx             — YES (showGreekHebrew gates interlinear reader)
// - /explore/debate-mode/page.tsx                  — YES (seeker/defender contextual tip)
// - /semantics/page.tsx                            — YES (showGreekHebrew gate + intro note)
// - /[locale]/page.tsx (home)                      — YES (homepageMessage display)
// - CommandPalette                                  — YES (inline lens picker)
// - LensOnboarding                                 — YES (descriptions shown)
//
// Intentionally lens-neutral (content is identical across all modes):
// - /defend/cults/[category]/[objection]/page.tsx
// - /compare/page.tsx, /compare/side-by-side, /compare/[tradition]
// - /explore/argument-tree/page.tsx
// - /explore/timeline/page.tsx
// - /sources/councils/page.tsx
// - /sources/manuscripts/page.tsx (listing)
```

- [ ] **Step 2: Verify build succeeds**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/components/lens/types.ts
git commit -m "docs(lens): update audit comments to reflect completed reading-mode implementation"
```

---

## Self-Review

**Spec coverage:**
- CommandPalette "Switch reading mode" broken action → Task 1 ✓
- LensOnboarding missing descriptions → Task 2 ✓  
- Home page missing `homepageMessage` → Task 3 ✓
- Category page ignores lens → Task 4 ✓
- Church Fathers page ignores `showPatristicCitations` → Task 5 ✓
- Manuscripts page ignores `showGreekHebrew` → Task 6 ✓
- Debate Mode page has no lens awareness → Task 7 ✓
- Semantics page ignores `showGreekHebrew` → Task 8 ✓
- Audit comments stale → Task 9 ✓

**No placeholders:** Every code block contains the actual implementation. No "TBD" or "handle edge cases" phrases.

**Type consistency:**
- `LENS_VARIANTS[lens]` accessed as `const { showPatristicCitations } = LENS_VARIANTS[lens]` — property name is consistent with definition in `types.ts` line 30–37.
- `LENS_VARIANTS[lens]` accessed as `const { showGreekHebrew } = LENS_VARIANTS[lens]` — same pattern, consistent name.
- `useLens()` returns `{ lens, setLens, hydrated }` — used consistently throughout.

---

**Plan complete and saved to `docs/superpowers/plans/2026-05-26-reading-modes-full.md`. Two execution options:**

**1. Subagent-Driven (recommended)** — Fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** — Execute tasks in this session using executing-plans, batch execution with checkpoints

**Which approach?**
