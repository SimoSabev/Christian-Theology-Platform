// src/types/way.ts

export interface PrayerType {
  id: string;
  title: string;
  description: string;
  icon: string;
  tradition: string;
  starterPrayer: string;
  durationMinutes: number;
}

export interface LordsPrayerPhrase {
  id: string;
  phrase: string;
  greekOriginal?: string;
  latinOriginal?: string;
  commentary: string;
  question: string;
}

export interface Beatitude {
  id: string;
  text: string;
  greekText?: string;
  application: string;
  reflection: string;
  crossReferences: string[];
}

export interface JourneyStage {
  id: string;
  name: string;
  description: string;
  icon: string;
  characteristics: string[];
  practices: string[];
  scripture: string;
  order: number;
}

export interface RetreatDay {
  id: string;
  day: number;
  theme: string;
  morningPrayer: string;
  reflection: string;
  scripture: string;
  action: string;
  eveningPrayer: string;
}

export interface Testimony {
  id: string;
  name: string;
  source: string;
  quote: string;
  context: string;
  tradition: string;
}

export interface Saint {
  id: string;
  name: string;
  dates: string;
  tradition: string;
  biography: string;
  quote: string;
  practices: string[];
  feastDay?: string;
}

export interface LovePassage {
  id: string;
  reference: string;
  text: string;
  translation: string;
  meditation: string;
  theme: string;
}

export interface SpiritualDiscipline {
  id: string;
  name: string;
  category: string;
  description: string;
  starterPractice: string;
  tradition: string;
  duration?: string;
}

export interface SkepticVerse {
  reference: string;
  text: string;
  reflection: string;
}

export interface SkepticSection {
  id: string;
  title: string;
  passage: string;
  verses: SkepticVerse[];
  invitation: string;
}

export interface LensAdaptation {
  lensId: string;
  contentTransform: string;
  emphasisFields: string[];
  hiddenFields: string[];
}
