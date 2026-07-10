import { CritiqueCategory, CritiqueObjection, CritiqueCategoryInfo } from './types';
import { philosophicalCritiques } from './philosophical';
import { moralCritiques } from './moral';
import { scientificCritiques } from './scientific';
import { historicalCritiques } from './historical';
import { existentialCritiques } from './existential';

export type { CritiqueCategory, CritiqueObjection, CritiqueCategoryInfo, CritiqueCase } from './types';

export const critiqueObjections: CritiqueObjection[] = [
  ...philosophicalCritiques,
  ...moralCritiques,
  ...scientificCritiques,
  ...historicalCritiques,
  ...existentialCritiques,
];

export const critiqueCategories: CritiqueCategoryInfo[] = [
  {
    id: 'philosophical',
    name: 'Philosophical Objections',
    description: 'The problem of evil, divine hiddenness, and challenges to the coherence of God\'s attributes.',
    objectionCount: critiqueObjections.filter((o) => o.category === 'philosophical').length,
  },
  {
    id: 'moral',
    name: 'Moral Objections',
    description: 'Old Testament violence, biblical slavery regulation, and the doctrine of hell — the hardest ethical challenges to the faith.',
    objectionCount: critiqueObjections.filter((o) => o.category === 'moral').length,
  },
  {
    id: 'scientific',
    name: 'Scientific Objections',
    description: 'Evolution, cosmic origins, and the rationality of believing in miracles.',
    objectionCount: critiqueObjections.filter((o) => o.category === 'scientific').length,
  },
  {
    id: 'historical',
    name: 'Historical & Textual Objections',
    description: 'Gospel discrepancies, theories of legendary development, and claims of borrowed pagan mythology.',
    objectionCount: critiqueObjections.filter((o) => o.category === 'historical').length,
  },
  {
    id: 'existential',
    name: 'Existential Objections',
    description: 'Religious pluralism, psychological explanations of belief, and the lived experience of divine silence.',
    objectionCount: critiqueObjections.filter((o) => o.category === 'existential').length,
  },
];

export function getCritiqueCategoryInfo(category: CritiqueCategory): CritiqueCategoryInfo | undefined {
  return critiqueCategories.find((c) => c.id === category);
}

export function getCritiquesByCategory(category: CritiqueCategory): CritiqueObjection[] {
  return critiqueObjections.filter((o) => o.category === category);
}

export function getCritiqueBySlug(slug: string): CritiqueObjection | undefined {
  return critiqueObjections.find((o) => o.slug === slug);
}
