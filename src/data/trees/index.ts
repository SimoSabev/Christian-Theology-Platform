import { TreeNode } from '../arguments/types';
import { allArguments } from '../arguments';
import { generateTree } from './generate';
import { cosmologicalTrees } from './cosmological';
import { ontologicalTrees } from './ontological';
import { teleologicalTrees } from './teleological';
import { moralTrees } from './moral';
import { historicalTrees } from './historical';
import { existentialTrees } from './existential';

export type { TreeNode } from '../arguments/types';

// Every tree is hand-authored (see cosmological.ts, ontological.ts,
// teleological.ts, moral.ts, historical.ts, existential.ts) as a full,
// multi-support/multi-response argument map for each of the 35 arguments.
// `generateTree` is kept only as a defensive fallback for any future
// argument added to `data/arguments` before a hand-authored tree has been
// written for it. Both `allTrees` and `allDebates` must be keyed by
// `arg.slug` because the explore pages cross-reference them by the same key
// and detail pages link via `?tree=<arg.slug>`.
const authoredTrees: Record<string, TreeNode> = {
  ...cosmologicalTrees,
  ...ontologicalTrees,
  ...teleologicalTrees,
  ...moralTrees,
  ...historicalTrees,
  ...existentialTrees,
};

const fallbackTrees: Record<string, TreeNode> = Object.fromEntries(
  allArguments
    .filter((arg) => !authoredTrees[arg.slug])
    .map((arg) => [arg.slug, generateTree(arg)]),
);

export const allTrees: Record<string, TreeNode> = {
  ...fallbackTrees,
  ...authoredTrees,
};
