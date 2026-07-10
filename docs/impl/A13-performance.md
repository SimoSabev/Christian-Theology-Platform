# A13 — Performance

**Priority:** P1 (Critical)
**Affects:** `next.config.ts`, XYFlow pages, client-heavy components

---

## Problem

XYFlow is a heavy dependency that may be loaded globally. Ambient verse rotator likely imports a large dataset client-side. Heavy components may not be code-split. No image optimization strategy.

---

## Tasks

### 1. Lazy-Load XYFlow

**File to modify:** `src/app/[locale]/explore/argument-tree/page.tsx`

Replace any direct import of `ReactFlow` / `@xyflow/react` with `next/dynamic`:

```tsx
import dynamic from 'next/dynamic'

const ArgumentTreeCanvas = dynamic(
  () => import('@/components/explore/ArgumentTreeCanvas'),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[600px] items-center justify-center text-stone-500">
        Loading argument tree...
      </div>
    ),
  }
)
```

Move all XYFlow imports into `src/components/explore/ArgumentTreeCanvas.tsx` so they are isolated to that chunk.

### 2. Move Verse Data to Server Component

**File to modify:** `src/components/hero/AmbientVerseRotator.tsx`

If it currently imports `src/data/verses/ambient.ts` client-side:

Option A (preferred): Convert to a Server Component that passes verses as props:
```tsx
// In the page (server)
import { ambientVerses } from '@/data/verses/ambient'

export default function HomePage() {
  // passes a random subset to avoid large client bundle
  const verses = ambientVerses.slice(0, 20)
  return <AmbientVerseRotator verses={verses} />
}
```

Option B: Use `next/dynamic` with `ssr: false` and a loading skeleton if client-side is necessary.

### 3. Lazy-Load All Heavy Client Components

Apply `next/dynamic` with `ssr: false` to:

| Component | File |
|---|---|
| `CommandPalette` | `src/components/command/CommandPalette.tsx` |
| `InterlinearReader` | `src/components/manuscripts/InterlinearReader.tsx` |
| `DenominationMap` (when added) | `src/components/compare/DenominationMap.tsx` |
| `SemanticDefenseSlideshow` | `src/components/semantic/SemanticDefenseSlideshow.tsx` |
| `SemanticsTutorialModule` | `src/components/semantic/SemanticsTutorialModule.tsx` |

**Pattern:**
```tsx
const CommandPalette = dynamic(
  () => import('@/components/command/CommandPalette'),
  { ssr: false }
)
```

Keep `CommandBarTrigger` (the keyboard shortcut handler) as a regular import — it is lightweight.

### 4. Image Optimization with next/image

**Wherever `<img>` tags appear, replace with `<Image>` from `next/image`:**

```tsx
import Image from 'next/image'

// Before
<img src={facsimile.url} alt={facsimile.alt} />

// After
<Image
  src={facsimile.url}
  alt={facsimile.alt}
  width={800}
  height={600}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."  // generate with next-placeholder or a solid color
/>
```

**Files to audit for raw `<img>` tags:**
- All files in `src/components/`
- All files in `src/app/`

Run: `grep -r "<img" src/` to find all instances.

### 5. next.config.ts Optimization

**File to modify:** `next.config.ts`

```ts
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.codexsinaiticus.org' },
      { protocol: 'https', hostname: 'www.bl.uk' },
    ],
  },
  experimental: {
    optimizeCss: true,       // if using critters/inline CSS
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}
```

### 6. Lighthouse Audit

After all above changes, run a Lighthouse audit:

```bash
npm run build && npx serve .next/static
# or use Chrome DevTools > Lighthouse
```

**Targets:**
- LCP (Largest Contentful Paint): < 2.5s on simulated 3G
- TBT (Total Blocking Time): < 200ms
- CLS (Cumulative Layout Shift): < 0.1

Document the scores before and after optimizations.

---

## Acceptance Criteria

- [ ] XYFlow is in a dynamically-imported component; does not appear in the root bundle
- [ ] `AmbientVerseRotator` does not import the full verses dataset client-side
- [ ] All listed heavy components use `next/dynamic` with `ssr: false`
- [ ] No raw `<img>` tags remain — all replaced with `next/image`
- [ ] `next.config.ts` has `remotePatterns` for image CDNs
- [ ] `removeConsole` enabled for production build
- [ ] Lighthouse LCP < 2.5s on home page
