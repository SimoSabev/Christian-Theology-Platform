import { Debate } from '../arguments/types';

export const kalamDebate: Debate = {
  id: 'kalam-debate',
  argumentId: 'kalam',
  title: 'The Kalam Cosmological Argument',
  forLabel: 'Theist',
  againstLabel: 'Atheist',
  rounds: [
    {
      round: 1,
      forSide: {
        claim: 'Everything that begins to exist has a cause of its existence. This is a fundamental metaphysical principle: ex nihilo nihil fit — from nothing, nothing comes.',
        evidence: [
          { text: 'Metaphysical intuition: something cannot spring into being uncaused from absolute nothing', strength: 'strong', source: 'Craig 1979' },
          { text: 'Empirical confirmation: every event and object we observe has a cause', strength: 'strong', source: 'Scientific consensus' },
          { text: 'If things could come from nothing, why doesn\'t everything and anything pop into existence?', strength: 'moderate', source: 'Craig 2008' },
        ]
      },
      againstSide: {
        claim: 'Quantum mechanics shows that events at the subatomic level can occur without deterministic causes. Virtual particles appear spontaneously from the quantum vacuum.',
        evidence: [
          { text: 'Quantum vacuum fluctuations produce particle-antiparticle pairs without apparent causes', strength: 'moderate', source: 'Hawking 1988' },
          { text: 'Copenhagen interpretation: quantum events are fundamentally indeterministic', strength: 'contested', source: 'Standard QM textbooks' },
        ]
      }
    },
    {
      round: 2,
      forSide: {
        claim: 'The quantum vacuum is not "nothing" — it is a structured, law-governed physical state with energy and properties. Virtual particles arise FROM the vacuum, not from absolute nothingness. The Premise says "from nothing" — not "from a quantum field."',
        evidence: [
          { text: 'The quantum vacuum has structure, energy, and obeys physical laws — it is emphatically something', strength: 'strong', source: 'Vilenkin 2006' },
          { text: 'Even indeterministic events have necessary conditions (the field, the laws)', strength: 'strong', source: 'Craig 2001' },
        ]
      },
      againstSide: {
        claim: 'Even granting Premise 1, perhaps the universe didn\'t truly "begin" to exist. Cyclic cosmologies and quantum gravity models may avoid an absolute beginning.',
        evidence: [
          { text: 'Cyclic/ekpyrotic models: universe undergoes eternal cycles of expansion and contraction', strength: 'contested', source: 'Steinhardt & Turok 2007' },
          { text: 'Loop quantum gravity: the Big Bang may be a "Big Bounce" from a prior contracting phase', strength: 'contested', source: 'Bojowald 2007' },
        ]
      }
    },
    {
      round: 3,
      forSide: {
        claim: 'The Borde-Guth-Vilenkin theorem (2003) proves that ANY universe which has, on average, been expanding throughout its history cannot be infinite in the past — it must have a beginning. This applies to cyclic models, the multiverse, and quantum gravity scenarios.',
        evidence: [
          { text: 'BGV theorem applies to all models expanding on average — including cyclic models (each cycle expands more due to entropy)', strength: 'strong', source: 'Borde, Guth, Vilenkin 2003' },
          { text: 'Vilenkin: "All the evidence we have says that the universe had a beginning"', strength: 'strong', source: 'Vilenkin 2006' },
          { text: 'Thermodynamic argument: eternal cycles would have reached heat death infinitely long ago', strength: 'strong', source: 'Craig 2009' },
        ]
      },
      againstSide: {
        claim: 'Even if the universe had a cause, why think it is God? The cause could be an impersonal physical mechanism or a natural process beyond our current understanding.',
        evidence: [
          { text: 'The cause could be a natural quantum or cosmological process we haven\'t discovered yet', strength: 'moderate', source: 'Hawking & Mlodinow 2010' },
          { text: 'Attributing it to "God" is a God-of-the-gaps argument', strength: 'contested', source: 'Dawkins 2006' },
        ]
      }
    },
    {
      round: 4,
      forSide: {
        claim: 'The cause of the universe must be: (1) uncaused (to avoid regress), (2) timeless and spaceless (it created time and space), (3) immaterial, (4) enormously powerful, (5) personal — because only minds and abstract objects are immaterial causes, and abstract objects cannot cause anything. A personal Creator is the only viable option.',
        evidence: [
          { text: 'The cause must be timeless, spaceless, immaterial (since it created all time, space, and matter)', strength: 'strong', source: 'Craig 2008' },
          { text: 'Abstract objects (numbers, sets) are causally inert — only a personal mind can be an immaterial cause', strength: 'strong', source: 'Moreland 2008' },
          { text: 'A free will decision explains how a timeless cause can produce a temporal effect', strength: 'moderate', source: 'Craig 2008' },
        ]
      },
      againstSide: {
        claim: 'This reasoning at best establishes a deistic "first cause" — not the personal God of Christianity. The jump from "timeless cause" to "the Christian God" is unjustified by this argument alone.',
        evidence: [
          { text: 'The Kalam only establishes a generic cause, not any specific deity', strength: 'strong', source: 'Philosophical consensus' },
          { text: 'Other arguments (Resurrection, revelation) are needed to identify the cause with the Christian God', strength: 'moderate', source: 'Craig 2008' },
        ]
      }
    }
  ]
};

export const allDebates: Record<string, Debate> = {
  kalam: kalamDebate,
};
