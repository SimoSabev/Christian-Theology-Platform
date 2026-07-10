export type DiscoveryCategory = 'old_testament' | 'new_testament' | 'controversial';
export type DiscoveryStatus = 'confirmed' | 'disputed' | 'unverified';

export interface ArchaeologicalDiscovery {
  id: string;
  slug: string;
  name: string;
  category: DiscoveryCategory;
  dateDiscovered: string;
  discoverer: string;
  location: {
    modern: string;
    ancient?: string;
  };
  biblicalReferences: string[];
  significance: 1 | 2 | 3 | 4 | 5;
  artifactLocation: string;
  status: DiscoveryStatus;
  description: string;
  sources: string[];
}
