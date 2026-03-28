import { SemanticDefense } from './types';
import { semanticDefenses as baseArguments } from './arguments';
import { otNtParallels } from './arguments-ot-nt';
import { advancedNtArguments } from './arguments-nt-advanced';

// Combine all the massive data structures into one master exported array of 30 Semantic Defenses
export const semanticDefenses: SemanticDefense[] = [
  ...baseArguments,
  ...otNtParallels,
  ...advancedNtArguments
];

export function getSemanticDefense(id: string): SemanticDefense | undefined {
  return semanticDefenses.find(sd => sd.id === id);
}

export function getSemanticDefensesByArgument(argumentId: string): SemanticDefense[] {
  return semanticDefenses.filter(sd => sd.argumentId === argumentId || sd.argumentId === '');
}
