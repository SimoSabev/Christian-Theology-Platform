# B — Phase 8: Launch

**Mode:** "The Way" — Experience Mode
**Output:** Production-ready deployment

---

## Prerequisites

All phases 1–7 complete and all acceptance criteria met.

---

## L-01 — Build & Smoke Test

**Commands:**
```bash
npm run build
```

Must complete with **0 errors** and **0 TypeScript errors**.

Then run a smoke test — manually verify these pages render correctly in the production build:

| Route | Check |
|---|---|
| `/way` | Onboarding modal appears; journey map renders |
| `/way/pray` | 6 prayer type cards render |
| `/way/pray/lords-prayer` | All 8 phrases render with Greek text |
| `/way/retreat` | 7 candle icons render; day cards visible |
| `/way/retreat/1` | Full day 1 content renders; completion button works |
| `/way/skeptic` | Page renders; John 1 text visible; experiment block visible |
| `/way/love/prodigal-son` | Full narrative renders; scroll progress bar visible |

**If build fails:** Do not proceed. Fix all errors before continuing.

---

## L-02 — SEO Metadata for All Way Routes

**Files to modify:** Every Way page file

Ensure every page exports `metadata`:

```ts
// /way/page.tsx
export const metadata = {
  title: 'The Way — Living the Christian Faith | Theosis',
  description: 'Prayer, practice, and the living encounter with Christ. For believers, seekers, and skeptics.',
  openGraph: {
    title: 'The Way | Theosis',
    description: 'A contemplative space for encountering the love of Christ.',
    type: 'website',
  },
}

// /way/pray/page.tsx
export const metadata = {
  title: 'How to Pray | The Way | Theosis',
  description: 'Practical guides to prayer for every level — from first-time to advanced. Types, the Lord\'s Prayer, Lectio Divina, and the Jesus Prayer.',
}

// /way/skeptic/page.tsx
export const metadata = {
  title: 'If You Don\'t Believe Yet | The Way | Theosis',
  description: 'You don\'t have to believe to look. An honest, unpressured invitation to explore the love of Christ.',
}
```

Add meaningful descriptions for all 20 routes. The `/way/skeptic` metadata is especially important — this page may be discovered by search engines when someone searches "I don't believe in God."

---

## L-03 — Social Sharing for Retreat Days

**File to modify:** `src/app/[locale]/way/retreat/[day]/page.tsx`

Add Open Graph image generation for each retreat day.

Using Next.js `ImageResponse` (App Router):

**New file:** `src/app/[locale]/way/retreat/[day]/opengraph-image.tsx`

```tsx
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }

export default async function OgImage({ params }: { params: { day: string } }) {
  const day = retreatData.find(d => d.day === parseInt(params.day))

  return new ImageResponse(
    <div style={{
      background: '#1a1410',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Georgia, serif',
      color: '#e8ddd0',
      padding: '60px',
    }}>
      <div style={{ fontSize: 24, color: '#d4956a', marginBottom: 16 }}>
        Day {day?.day} of Seven
      </div>
      <div style={{ fontSize: 56, fontWeight: 'bold', textAlign: 'center', lineHeight: 1.2 }}>
        {day?.theme}
      </div>
      <div style={{ fontSize: 20, color: '#9a8d7e', marginTop: 24 }}>
        {day?.scriptureReference}
      </div>
      <div style={{ fontSize: 16, color: '#9a8d7e', marginTop: 40 }}>
        theosis.app / The Way
      </div>
    </div>
  )
}
```

---

## L-04 — Internal Review

Before public launch, present The Way to at least:

1. **A devout believer** — Does this deepen their faith? Does anything feel wrong theologically?
2. **A seeker / culturally Christian person** — Is the onboarding accessible? Does anything feel preachy or manipulative?
3. **A skeptic** — Does `/way/skeptic` feel honest and non-coercive? Would they feel respected?

Collect feedback. Create fix tasks for any blocking issues. Minor style issues can be addressed post-launch.

**Document feedback format:**
```
Reviewer type: [skeptic / seeker / believer]
Page reviewed: /way/skeptic
Feedback: "The 'I tried it' button made me uncomfortable — feels like I'm agreeing to something"
Severity: Medium
Proposed fix: Change button text to "I read this" or make it completely optional
```

---

## L-05 — Deploy

**Before deploying:**
- [ ] `git status` — no uncommitted changes
- [ ] All acceptance criteria from phases 1–7 are checked off
- [ ] L-01 build smoke test passed
- [ ] L-04 review feedback resolved

**Deploy:**
```bash
git add [specific files — never git add -A without reviewing]
git commit -m "feat(way): add The Way experience mode

Seven content areas for living the Christian faith — prayer, discipleship,
encountering love, the guided retreat, and an open door for skeptics.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"

git push origin dev
```

Then open a PR to main with the description from this plan.

---

## Post-Launch Monitoring

After deploy, monitor:

1. **Lighthouse score** on production URL — LCP, Accessibility, SEO
2. **No 404s** on any Way routes (especially `/way/retreat/[day]`)
3. **localStorage keys working** — retreat progress and onboarding persist
4. **Ambient audio loads** — check browser console for audio file 404s
5. **Mobile rendering** on real devices (not just emulator) — especially iPhone Safari

---

## Acceptance Criteria

- [ ] `npm run build` completes with 0 errors
- [ ] All 20 Way routes smoke-tested
- [ ] All 20 routes have meaningful `metadata.description`
- [ ] `/way/skeptic` metadata is search-engine appropriate
- [ ] Retreat day OG images generate correctly
- [ ] Internal review completed with 3 reviewer types
- [ ] All blocking feedback from review resolved
- [ ] Commit created with descriptive message
- [ ] PR opened to main branch
