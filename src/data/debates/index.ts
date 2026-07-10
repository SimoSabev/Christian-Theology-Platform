import { Debate } from '../arguments/types';
import { allArguments } from '../arguments';
import { generateDebate } from './generate';
import { cosmologicalDebates } from './cosmological';
import { ontologicalDebates } from './ontological';
import { teleologicalDebates } from './teleological';
import { moralDebates } from './moral';
import { historicalDebates } from './historical';
import { existentialDebates } from './existential';

export type { Debate, DebateRound } from '../arguments/types';

// Every debate is hand-authored (see cosmological.ts, ontological.ts,
// teleological.ts, moral.ts, historical.ts, existential.ts) as a full,
// multi-round dialectical exchange researched from primary and secondary
// sources for each of the 35 arguments. `generateDebate` is kept only as a
// defensive fallback for any future argument added to `data/arguments`
// before a hand-authored debate has been written for it.
const authoredDebates: Record<string, Debate> = {
  ...cosmologicalDebates,
  ...ontologicalDebates,
  ...teleologicalDebates,
  ...moralDebates,
  ...historicalDebates,
  ...existentialDebates,
};

const fallbackDebates: Record<string, Debate> = Object.fromEntries(
  allArguments
    .filter((arg) => !authoredDebates[arg.slug])
    .map((arg) => [arg.slug, generateDebate(arg)]),
);

export const allDebates: Record<string, Debate> = {
  ...fallbackDebates,
  ...authoredDebates,
};
