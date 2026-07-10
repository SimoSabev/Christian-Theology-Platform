// src/components/command/search/universalSearch.ts
import Fuse from 'fuse.js';
import { STATIC_INDEX } from './searchIndex';
import type { SearchResult } from './types';

const fuse = new Fuse<SearchResult>(STATIC_INDEX, {
  includeScore: true,
  threshold: 0.4,
  keys: [
    { name: 'title',    weight: 0.7 },
    { name: 'subtitle', weight: 0.2 },
    { name: 'kind',     weight: 0.1 },
  ],
});

export function universalSearch(query: string, max = 12): SearchResult[] {
  const q = query.trim();
  if (!q) return [];
  return fuse.search(q, { limit: max }).map((r) => r.item);
}

export function groupByKind(results: SearchResult[]): Record<string, SearchResult[]> {
  const out: Record<string, SearchResult[]> = {};
  for (const r of results) {
    (out[r.kind] ??= []).push(r);
  }
  return out;
}
