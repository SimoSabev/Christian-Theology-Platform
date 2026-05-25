# A09 — Argument Tree

**Priority:** P2 (High)
**Affects:** `src/app/[locale]/explore/argument-tree/page.tsx`, `src/data/trees/index.ts`

---

## Problem

The XYFlow argument tree may only show top-level arguments without sub-premises and objections as nodes. No click-to-detail. No "Skeptic Entry" mode. Not touch-friendly on mobile.

---

## Tasks

### 1. Audit Existing Tree Data

Read `src/data/trees/index.ts` to understand the current node/edge structure.

**Extend node types** (work with existing XYFlow node format):
```ts
type NodeType = 'root' | 'argument' | 'premise' | 'objection' | 'response' | 'sub-argument' | 'skeptic-entry'

interface ArgumentNode {
  id: string
  type: NodeType
  data: {
    label: string
    body?: string        // 100-200 word summary shown in slide-over
    href?: string        // route to full argument page
    argumentId?: string  // links to /data/arguments/
  }
  position: { x: number; y: number }
}
```

### 2. Expand Tree Depth to 3 Levels

**File to modify:** `src/data/trees/index.ts`

For each main argument, add nodes for:
- Level 1: Main argument (already exists)
- Level 2: Each formal premise (P1, P2, Conclusion)
- Level 3: For each premise — 2 objections + 1 response node per objection

**Target node counts:**
- Kalam Cosmological: ~15 nodes
- Leibnizian Contingency: ~12 nodes
- Ontological (Plantinga): ~12 nodes
- Teleological (Fine-tuning): ~15 nodes
- Moral Argument: ~12 nodes
- Historical (Resurrection minimal facts): ~20 nodes

**Total target: 100+ nodes across 6 argument trees**

### 3. Click-to-Slide-Over Panel

**New component:** `src/components/explore/ArgumentNodePanel.tsx`

Slide-over panel (from right) triggered on node click:
```ts
interface ArgumentNodePanelProps {
  node: ArgumentNode | null
  onClose: () => void
}
```

Panel content:
- Node type badge (Premise / Objection / Response / etc.)
- `data.label` as heading
- `data.body` as narrative text
- "Read Full Argument" link if `data.href` exists
- "Related Verses" cross-link if applicable

**File to modify:** `src/app/[locale]/explore/argument-tree/page.tsx`
- Add `onNodeClick` handler to XYFlow
- Render `<ArgumentNodePanel />` conditionally

### 4. Skeptic Entry Mode

**File to modify:** `src/data/trees/index.ts`

Add a "Skeptic Entry" root node at the start of the tree:
```ts
{
  id: 'skeptic-root',
  type: 'skeptic-entry',
  data: {
    label: 'I don\'t believe in God',
    body: 'Start here. Choose your primary reason...'
  }
}
```

Connect to 5 "primary objection" nodes:
- "There's no evidence for God"
- "Science explains everything"
- "The universe looks like it has no designer"
- "Evil disproves God"
- "I just don't feel God's presence"

Each connects to the relevant argument tree as a response.

**Add a mode toggle** to the tree page: "Explore Arguments" | "Start as a Skeptic"

### 5. Mobile Touch Support

**File to modify:** `src/app/[locale]/explore/argument-tree/page.tsx`

XYFlow already supports touch events — ensure these are not disabled:
```tsx
<ReactFlow
  panOnScroll
  zoomOnPinch
  panOnDrag
  minZoom={0.3}
  maxZoom={2}
>
  <MiniMap />           // add if not present — shows position on mobile
  <Controls />          // add zoom in/out buttons for mobile
</ReactFlow>
```

Also add:
- `<MiniMap />` — positional overview for large trees
- Pinch-to-zoom enabled (verify no `e.preventDefault()` blocking touch events)
- A floating "Reset View" button for mobile

---

## Acceptance Criteria

- [ ] Tree data has 3 levels deep for all 6 arguments (100+ nodes)
- [ ] Clicking any node opens a slide-over panel with content
- [ ] Slide-over panel has "Read Full Argument" link for argument-level nodes
- [ ] "Skeptic Entry" root node connects to 5 objection branches
- [ ] Mode toggle "Explore" | "Skeptic" switches tree root
- [ ] MiniMap visible
- [ ] Pinch-to-zoom works on touch devices
- [ ] "Reset View" floating button present
