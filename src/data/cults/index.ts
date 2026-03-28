import { CultCategory, CultObjection, CultCategoryInfo } from './types';
export type { CultCategory, CultObjection, CultCategoryInfo };

export const cultObjections: CultObjection[] = [
  {
    id: 'jw-deity-of-christ',
    slug: 'deity-of-christ',
    name: 'The Deity of Christ vs Arianism',
    category: 'jehovahs-witnesses',
    shortDescription: 'Examining the New World Translation\'s systematic alteration of verses affirming Jesus as Almighty God.',
    historicalBackground: 'Jehovah\'s Witnesses (formulated in the late 19th century by Charles Taze Russell) revive the ancient 4th-century heresy of Arianism. They teach that Jesus is not eternal God, but rather the Archangel Michael, the first created being through whom all other things were made.',
    cultPosition: 'The New World Translation (NWT) intentionally alters key Christological passages. Most notably, they translate John 1:1 as "the Word was a god", and insert the word "other" into Colossians 1:16 ("by means of him all [other] things were created"). They claim Jesus is a lesser divine being.',
    orthodoxResponse: 'Historic, orthodox Christianity affirms that Jesus is fully God and fully man, co-eternal with the Father. He is the Creator of all things, not a created being. This is established through rigorous Greek exegesis of John 1:1, Colossians 1:15-20, Philippians 2:5-11, and His repeated acquisition of the divine name "I AM" (Exodus 3:14 / John 8:58).',
    keySources: [
      'The New World Translation (Watchtower Bible and Tract Society)',
      'Reasoning from the Scriptures (Watchtower publication)',
      'Bruce Metzger, "The Jehovah\'s Witnesses and Jesus Christ"',
      'James White, "The Forgotten Trinity"'
    ],
    semanticDefenseIds: ['sd-john1-1', 'sd-col-1-15', 'sd-john-8-58']
  }
];

export const cultCategories: CultCategoryInfo[] = [
  { 
    id: 'jehovahs-witnesses', 
    name: 'Jehovah\'s Witnesses', 
    description: 'Arian revivals, the Watchtower Society, and the New World Translation', 
    icon: '🏢', 
    color: 'accent-blue', 
    objectionCount: cultObjections.filter(o => o.category === 'jehovahs-witnesses').length 
  },
  { 
    id: 'lds', 
    name: 'Mormonism (LDS)', 
    description: 'Joseph Smith, the Book of Mormon, and exaltation theology', 
    icon: '📖', 
    color: 'accent-gold', 
    objectionCount: cultObjections.filter(o => o.category === 'lds').length 
  },
  { 
    id: 'islam', 
    name: 'Islamic Objections', 
    description: 'The Quranic view of Jesus (Isa), the crucifixion, and the Trinity', 
    icon: '☪️', 
    color: 'accent-green', 
    objectionCount: cultObjections.filter(o => o.category === 'islam').length 
  }
];

export function getCultObjectionsByCategory(category: CultCategory): CultObjection[] {
  return cultObjections.filter(o => o.category === category);
}

export function getCultObjectionBySlug(slug: string): CultObjection | undefined {
  return cultObjections.find(o => o.slug === slug);
}

export function getCultCategoryInfo(id: CultCategory): CultCategoryInfo | undefined {
  return cultCategories.find(c => c.id === id);
}
