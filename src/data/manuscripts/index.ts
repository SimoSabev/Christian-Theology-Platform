/* ────────────────────────────────────────────────────────
 *  Biblical Manuscripts — Central Index
 * ──────────────────────────────────────────────────────── */

export type { FullManuscript, InterlinearWord, InterlinearVerse, ManuscriptPassage, TextualVariant, ManuscriptImage, ManuscriptCategory } from './types';

import { papyri } from './papyri';
import { papyriAdditional } from './papyri-additional';
import { codexes } from './codexes';
import { otherDocuments } from './other-documents';
import type { FullManuscript, ManuscriptCategory } from './types';

/** All manuscripts combined */
export const allManuscripts: FullManuscript[] = [
  ...papyri,
  ...papyriAdditional,
  ...codexes,
  ...otherDocuments,
];

/** Get a manuscript by its id */
export function getManuscriptById(id: string): FullManuscript | undefined {
  return allManuscripts.find(ms => ms.id === id);
}

/** Get manuscripts by category */
export function getManuscriptsByCategory(category: ManuscriptCategory): FullManuscript[] {
  switch (category) {
    case 'papyri':
      return allManuscripts.filter(ms => ms.type === 'papyrus');
    case 'uncials':
      return allManuscripts.filter(ms => ms.type === 'uncial' || ms.type === 'codex');
    case 'scrolls':
      return allManuscripts.filter(ms => ms.type === 'scroll');
    case 'translations':
      return allManuscripts.filter(ms => ms.type === 'translation');
    default:
      return allManuscripts;
  }
}

/** Get all manuscript IDs (for static params) */
export function getAllManuscriptIds(): string[] {
  return allManuscripts.map(ms => ms.id);
}

/** Category metadata for display */
export const manuscriptCategories = [
  { id: 'papyri' as ManuscriptCategory, label: 'Papyri', description: 'Early papyrus manuscripts from the 2nd–4th centuries', count: papyri.length + papyriAdditional.length },
  { id: 'uncials' as ManuscriptCategory, label: 'Codexes & Uncials', description: 'Major parchment codices from the 4th–5th centuries', count: codexes.length },
  { id: 'scrolls' as ManuscriptCategory, label: 'Dead Sea Scrolls & Hebrew MSS', description: 'The Dead Sea Scrolls and other Hebrew manuscripts', count: otherDocuments.filter(d => d.script === 'hebrew').length },
  { id: 'translations' as ManuscriptCategory, label: 'Ancient Translations', description: 'Vulgate, Peshitta, and other early translations', count: otherDocuments.filter(d => d.script === 'latin' || d.script === 'syriac' || d.script === 'gothic').length },
];

// Re-export individual arrays
export { papyri, papyriAdditional, codexes, otherDocuments };
