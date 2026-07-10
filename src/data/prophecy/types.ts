export interface MessianicProphecy {
  id: string;
  slug: string;
  name: string;
  tier: 1 | 2 | 3;
  otReference: string;
  otDateProphesied: string;
  prediction: string;
  ntFulfillment: string;
  ntReference: string;
  stonerProbability?: string;
  jewishObjection?: string;
  christianResponse?: string;
  historicalNotes?: string;
  sources: string[];
}

export interface NationProphecy {
  id: string;
  slug: string;
  name: string;
  nation: string;
  prophet: string;
  dateProphesied: string;
  biblicalReference: string;
  predictions: {
    prediction: string;
    verse: string;
    fulfillment: string;
    dateFulfilled: string;
    source: string;
  }[];
  skepticalObjection?: string;
  christianResponse?: string;
  probability?: string;
  sources: string[];
}

export interface ProbabilityCalculation {
  id: string;
  name: string;
  description: string;
  propheciesIncluded: string[];
  combinedProbability: string;
  illustration: string;
  methodology: string;
  scholarlyCritique: string;
  sources: string[];
}

export interface PropheticBookDating {
  book: string;
  conservativeDate: string;
  criticalDate: string;
  keyEvidence: string;
  significance: string;
  sources: string[];
}
