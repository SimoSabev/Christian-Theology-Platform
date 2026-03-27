import { cosmologicalArguments } from './cosmological';
import { ontologicalArguments } from './ontological';
import { teleologicalArguments, moralArguments, historicalArguments } from './teleological-moral-historical';
import type { Argument, ArgumentCategory, CategoryInfo } from './types';

export type { Argument, ArgumentCategory, CategoryInfo, TreeNode, Debate, DebateRound } from './types';

export const allArguments: Argument[] = [
  ...cosmologicalArguments,
  ...ontologicalArguments,
  ...teleologicalArguments,
  ...moralArguments,
  ...historicalArguments,
];

export const categories: CategoryInfo[] = [
  { id: 'cosmological', name: 'Cosmological Arguments', description: 'From the existence of the universe to a necessary first cause', icon: '🌌', color: 'accent-blue', argumentCount: cosmologicalArguments.length },
  { id: 'ontological', name: 'Ontological Arguments', description: 'From the very concept of God to the reality of His existence', icon: '💭', color: 'accent-purple', argumentCount: ontologicalArguments.length },
  { id: 'teleological', name: 'Teleological Arguments', description: 'From the order and fine-tuning of the universe to intelligent design', icon: '🔬', color: 'accent-teal', argumentCount: teleologicalArguments.length },
  { id: 'moral', name: 'Moral Arguments', description: 'From the existence of objective moral values to a moral lawgiver', icon: '⚖️', color: 'accent-gold', argumentCount: moralArguments.length },
  { id: 'historical', name: 'Historical Evidence', description: 'From manuscript evidence, eyewitness testimony, and the Resurrection', icon: '📜', color: 'accent-green', argumentCount: historicalArguments.length },
];

export function getArgumentsByCategory(category: ArgumentCategory): Argument[] {
  return allArguments.filter(a => a.category === category);
}

export function getArgumentBySlug(slug: string): Argument | undefined {
  return allArguments.find(a => a.slug === slug);
}

export function getCategoryInfo(id: ArgumentCategory): CategoryInfo | undefined {
  return categories.find(c => c.id === id);
}
