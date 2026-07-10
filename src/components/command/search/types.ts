// src/components/command/search/types.ts
export type ResultKind = 'argument' | 'doctrine' | 'cult' | 'source' | 'page';

export type SearchResult = {
  id: string;
  kind: ResultKind;
  title: string;
  subtitle?: string;
  href: string;
};
