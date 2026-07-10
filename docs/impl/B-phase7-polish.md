# B — Phase 7: Polish & Testing

**Mode:** "The Way" — Experience Mode
**Output:** Animations, accessibility fixes, mobile audit, performance check

---

## Prerequisites

- Phases 2–6 complete

---

## T-01 — Candle Retreat Progress Animation

**File to modify:** `src/components/way/RetreatProgress.tsx`

When a day is marked complete, animate the candle from unlit to lit.

**SVG candle structure:**
```svg
<g class="candle">
  <rect class="body" />     <!-- candle body -->
  <line class="wick" />     <!-- wick -->
  <ellipse class="flame" /> <!-- flame — hidden when unlit -->
</g>
```

**CSS animation for flame appearing:**
```css
@keyframes flameAppear {
  0%   { opacity: 0; transform: scale(0) translateY(4px); }
  60%  { opacity: 1; transform: scale(1.2) translateY(-2px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
}

@keyframes flameFlicker {
  0%, 100% { transform: scale(1) skewX(0deg); }
  25%       { transform: scale(1.05) skewX(2deg); }
  75%       { transform: scale(0.97) skewX(-1deg); }
}

.flame.lit {
  animation: flameAppear 0.8s ease forwards, flameFlicker 3s ease-in-out infinite 0.8s;
}
```

**Implementation note:** Use Framer Motion `animate` prop if Framer Motion is already in the project — it will handle the entrance more smoothly:
```tsx
<motion.ellipse
  className="flame"
  initial={{ opacity: 0, scale: 0 }}
  animate={isLit ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
/>
```

---

## T-02 — Breath Prayer Animation

**File to modify:** `src/components/way/BreathPrayerWidget.tsx`

Two-phase animation: inhale (expand) → exhale (contract). Loop.

```css
@keyframes breathe {
  0%   { transform: scale(1);    opacity: 0.7; }
  50%  { transform: scale(1.08); opacity: 1;   }
  100% { transform: scale(1);    opacity: 0.7; }
}
```

Text phase switching:
```tsx
const [phase, setPhase] = useState<'inhale' | 'exhale'>('inhale')

useEffect(() => {
  const interval = setInterval(() => {
    setPhase(p => p === 'inhale' ? 'exhale' : 'inhale')
  }, (cycleSeconds / 2) * 1000)
  return () => clearInterval(interval)
}, [cycleSeconds])
```

Text fades (cross-fade) when switching phases. No abrupt swap.

---

## T-03 — Way Page Transitions

**File to modify:** `src/app/[locale]/way/layout.tsx`

Add a `PageTransition` wrapper specifically for The Way — slower and softer than the rest of the platform:

```tsx
import { motion, AnimatePresence } from 'framer-motion'

const wayTransition = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -4 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
}

// Wrap children in AnimatePresence + motion.div
```

If the existing `PageTransition` component at `src/components/motion/PageTransition.tsx` accepts duration/easing props, use it with way-specific values instead of creating a new one.

---

## T-04 — Mobile Audit for All Way Pages

Test every Way page at these viewports: **375px**, **430px**, **768px**

**Checklist per page:**

| Check | What to look for |
|---|---|
| No horizontal overflow | `overflow-x: auto` or scroll on the page body |
| Text is readable | Min font-size 16px on body copy |
| Tap targets ≥ 44px | All buttons and links are large enough for thumbs |
| Sidebar collapses | `WayNavSidebar` hidden on 375px |
| Candle progress readable | 7 candles don't overflow on 375px |
| Journey stage map | Horizontal map becomes vertical on mobile |
| `ProdigalSonReader` | Progress bar stays within viewport |
| `JesusPrayerAmbient` | Text doesn't overflow or wrap awkwardly |

**Fix pattern for common mobile issues:**
```tsx
// Candles overflowing on mobile:
<div className="flex flex-wrap gap-3 justify-center">
  {/* instead of: flex gap-4 (which may overflow at 7 items on 375px) */}
</div>
```

---

## T-05 — Accessibility Audit for The Way

**Run:** Chrome DevTools > Lighthouse > Accessibility

**Manual checks:**

| Element | Required |
|---|---|
| `WayOnboarding` modal | Focus trapped inside modal; `aria-modal="true"`; `Escape` closes |
| `JourneyStageMap` nodes | Each node is a `<button>` with `aria-label`; keyboard navigable |
| `RetreatDayCard` completion button | `aria-pressed` reflects completion state |
| `BreathPrayerWidget` | Has `aria-live="polite"` for screen readers announcing phase |
| `AmbientAudioToggle` | Audio toggle has `aria-label="Toggle ambient audio"`; volume slider has `aria-label` |
| `JesusPrayerAmbient` | The animated text has `aria-live="polite"` with appropriate interval |
| All icon-only buttons | Have `aria-label` |
| Color contrast | `--way-text` on `--way-bg` must pass WCAG AA (4.5:1) |

**Color contrast check:**
- `#e8ddd0` on `#1a1410`: verify this passes. Use webaim.org/resources/contrastchecker.
- `#d4956a` (accent) on `#1a1410`: this may fail for small text — only use for decorative elements, not body copy.

---

## T-06 — Performance Audit for The Way

**Ensure no Way component leaks into non-Way routes:**

Run a bundle analysis:
```bash
ANALYZE=true npm run build
```
(If `@next/bundle-analyzer` is not installed, add it to `devDependencies`.)

Check that:
- `src/components/way/` components do not appear in the root bundle
- `src/data/way/` data files are not imported on non-way pages
- The ambient audio files (when added) are not prefetched globally

**Dynamic imports for any heavy Way component:**
```tsx
// In way/layout.tsx if WayNavSidebar or AmbientAudioToggle are heavy:
const AmbientAudioToggle = dynamic(() => import('@/components/way/AmbientAudioToggle'), { ssr: false })
```

---

## T-07 — Ambient Audio Implementation

**File to modify:** `src/components/way/AmbientAudioToggle.tsx`

**Audio files needed (CC0 licensed):**
- Gregorian chant: find at freesound.org with CC0 license; download and place in `public/audio/gregorian.mp3`
- Byzantine chant: same source; `public/audio/byzantine.mp3`
- Rain: `public/audio/rain.mp3`

**Implementation:**
```tsx
const audioRef = useRef<HTMLAudioElement>(null)

function playTrack(src: string) {
  if (!audioRef.current) return
  audioRef.current.src = src
  audioRef.current.volume = volume
  audioRef.current.loop = true
  audioRef.current.play()
}

function stopAudio() {
  if (!audioRef.current) return
  // fade out over 2 seconds
  const interval = setInterval(() => {
    if (!audioRef.current || audioRef.current.volume <= 0.05) {
      audioRef.current?.pause()
      clearInterval(interval)
    } else {
      audioRef.current.volume -= 0.05
    }
  }, 100)
}
```

Store preference: `localStorage.setItem('theosis-audio-track', src)` and `localStorage.setItem('theosis-audio-volume', volume.toString())`.

---

## T-08 — Test Lens System Across All Way Pages

**For each of the 5 lenses, manually navigate through:**
- `/way` (entry)
- `/way/pray/lords-prayer`
- `/way/why-pray`
- `/way/journey`
- `/way/skeptic`

**Verify for each lens:**
- Scholar: Greek terms visible, patristic citations visible
- Seeker: Clean, warm, no footnotes
- Apologist: Cross-links to Defend section visible
- Skeptic: For the Skeptic section surfaced first; no heavy theology visible upfront
- Believer: Advanced practices surfaced first; basics de-emphasized

Document any missing adaptations and create fix tasks.

---

## T-09 — Copy Editing Pass

**Read all content in `src/data/way/` and any inline strings in Way components.**

Check for:
- [ ] Consistency of tone (warm, honest — not academic, not preachy)
- [ ] No undefined theological jargon
- [ ] No cliché phrases ("lift up," "just Lord," "unpack," "journey" overuse)
- [ ] No grammatical errors
- [ ] Scripture citations match the actual passage
- [ ] Historical facts match their sourced accounts
- [ ] Word count targets met (see W-01 through W-21)

---

## T-10 — Theological Review

**This task requires a human reviewer or specialized agent with theological knowledge.**

Check all content for:
- [ ] No heretical claims (explicit or implicit)
- [ ] No doctrinal claims presented as universal facts without noting where denominations differ (e.g., hesychasm is specifically Orthodox — note this)
- [ ] Prayer guide instructions do not misrepresent any tradition
- [ ] Saints are presented accurately (dates, quotes, events)
- [ ] The "Letter from God" is clearly labeled as devotional meditation, not Scripture
- [ ] The skeptic section does not make false claims or use manipulative language
- [ ] The hiddenness of God section accurately represents the theological positions cited

**Flag format for issues found:**
```
[THEOLOGICAL REVIEW FLAG]
File: src/data/way/prayer-types.ts
Field: description (hesychasm)
Issue: States "hesychasm is practiced by all Orthodox Christians" — should be "hesychasm is a tradition within Eastern Orthodoxy"
Fix: Update the description
```

---

## Acceptance Criteria

- [ ] All 7 candle SVG animations play smoothly on day completion
- [ ] Breath prayer widget animates without jank on all browsers
- [ ] Way page transitions are slower (0.6s) than platform transitions
- [ ] All Way pages pass 375px mobile audit (no overflow, readable, tap targets OK)
- [ ] Lighthouse Accessibility score for `/way` ≥ 90
- [ ] No Way component in the non-Way bundle
- [ ] Ambient audio plays and fades on all major browsers (Chrome, Safari, Firefox)
- [ ] All 5 lens variants verified on 5 key Way pages
- [ ] Copy editing pass complete — no jargon, consistent tone
- [ ] Theological review complete — all flags resolved
