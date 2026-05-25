# A07 — Debate Mode

**Priority:** P2 (Socratic mode, steelman toggle) / P3 (AI integration, export)
**Affects:** `src/app/[locale]/explore/debate-mode/page.tsx`, `src/data/debates/`

---

## Problem

Debate mode is likely static (presents arguments without dynamic response). No Socratic discovery mode, no session export, no steelman/strawman toggle. AI integration not implemented.

---

## Tasks

### 1. Audit Existing Debate Mode

Before implementing, read `src/app/[locale]/explore/debate-mode/page.tsx` and `src/data/debates/index.ts` fully to understand current implementation.

**Map out:**
- What data structure does `debates/index.ts` use?
- How does the UI present debates?
- What user interactions exist?

### 2. Steelman / Strawman Toggle

**File to modify:** `src/data/debates/index.ts` (check type, extend if needed)

Each debate entry should have:
```ts
interface DebateArgument {
  id: string
  claim: string
  steelman: string    // strongest possible version of this argument
  strawman: string    // weakest/most misrepresented version
  response: string    // Christian response to the steelman version
}
```

**New component:** `src/components/debate/SteelmanToggle.tsx`

A toggle switch labeled "Show Strongest Version" / "Show Common Caricature". When toggled, swaps the displayed `steelman` ↔ `strawman` text with a smooth transition.

Purpose: trains apologists to always engage the strongest version of opposing arguments.

### 3. Socratic Question Mode

**New component:** `src/components/debate/SocraticMode.tsx`

Flow:
1. Platform asks one question (drawn from the debate data's question sequence)
2. User selects from 3-4 possible answers (or types freely)
3. Based on answer, next question is shown (branching logic)
4. After 5-7 questions, the underlying argument is revealed with "You reasoned your way to this conclusion:"
5. Show the full formal argument structure

**Data shape needed in `src/data/debates/index.ts`:**
```ts
interface SocraticSequence {
  debateId: string
  questions: {
    id: string
    question: string
    options: {
      text: string
      nextQuestionId: string | 'reveal'
    }[]
  }[]
  revelation: string   // the argument revealed at the end
}
```

Add at least 2 Socratic sequences: one for the Kalam argument, one for the moral argument.

**Files to modify:**
- `src/app/[locale]/explore/debate-mode/page.tsx` — add mode toggle: "Browse" | "Socratic" | "Steelman"

### 4. Session Export (P3)

**New component:** `src/components/debate/SessionExport.tsx`

After a Socratic session or steelman session:
- Show a "Download Session" button
- Use `window.print()` with a print-only CSS stylesheet (`@media print`) that formats the session as a clean document
- No external PDF library needed — print CSS is sufficient

### 5. AI Debate Partner (P3 — architecture only, implementation optional)

**New file (server action):** `src/app/actions/debate.ts`

```ts
'use server'

export async function getDebateResponse(
  userArgument: string,
  debateContext: string
): Promise<string> {
  // Call Anthropic API with claude-haiku-4-5-20251001
  // System prompt: "You are a thoughtful skeptic engaging in a theological debate..."
  // Return AI response as string
}
```

**Note:** Only implement if Anthropic API key is available in environment. Gate behind `process.env.ANTHROPIC_API_KEY`. Show "AI Debate mode unavailable" if key is missing.

---

## Acceptance Criteria

- [ ] Existing debate mode fully audited and documented
- [ ] Each debate argument has `steelman` and `strawman` fields
- [ ] `SteelmanToggle` component renders and switches content smoothly
- [ ] At least 2 Socratic sequences implemented in data
- [ ] Socratic Mode component renders branching question flow
- [ ] Mode toggle visible: Browse | Socratic | Steelman
- [ ] (P3) Session export renders clean printed output
- [ ] (P3) AI debate action exists and is gated behind env key
