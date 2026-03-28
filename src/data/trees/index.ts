import { TreeNode } from '../arguments/types';

export const kalamTree: TreeNode = {
  id: 'kalam-root',
  type: 'argument',
  text: 'Kalam Cosmological Argument',
  children: [
    {
      id: 'kalam-conclusion',
      type: 'conclusion',
      text: 'The universe has a cause of its existence',
      children: []
    },
    {
      id: 'kalam-p1',
      type: 'premise',
      text: 'Everything that begins to exist has a cause',
      status: 'defended',
      children: [
        {
          id: 'kalam-p1-s1',
          type: 'support',
          text: 'Metaphysical intuition: ex nihilo nihil fit',
          sources: ['Aquinas ST I.2.3', 'Craig 1979']
        },
        {
          id: 'kalam-p1-s2',
          type: 'support',
          text: 'Empirical confirmation: all observed origins are caused',
          sources: ['Scientific consensus']
        },
        {
          id: 'kalam-p1-obj1',
          type: 'objection',
          text: 'Quantum events are uncaused',
          children: [
            {
              id: 'kalam-p1-obj1-r1',
              type: 'response',
              text: 'Quantum vacuum is not "nothing" — it is a structured physical state',
              sources: ['Vilenkin 2006', 'Craig 2008']
            }
          ]
        },
        {
          id: 'kalam-p1-obj2',
          type: 'objection',
          text: 'The causal principle only applies within the universe, not to the universe itself',
          children: [
            {
              id: 'kalam-p1-obj2-r1',
              type: 'response',
              text: 'The causal principle is a metaphysical truth, not limited to intra-universe events',
              sources: ['Craig, Reasonable Faith (2008)']
            }
          ]
        }
      ]
    },
    {
      id: 'kalam-p2',
      type: 'premise',
      text: 'The universe began to exist',
      status: 'defended',
      children: [
        {
          id: 'kalam-p2-s1',
          type: 'support',
          text: 'Big Bang cosmology (Hubble, CMB, nucleosynthesis)',
          sources: ['Hawking 1988', 'Penrose 1989']
        },
        {
          id: 'kalam-p2-s2',
          type: 'support',
          text: 'Borde-Guth-Vilenkin theorem (2003) — expanding universes must have a past boundary',
          sources: ['Borde, Guth, Vilenkin 2003']
        },
        {
          id: 'kalam-p2-s3',
          type: 'support',
          text: 'Impossibility of an actual infinite past — traversing an infinite cannot be completed',
          sources: ['Craig 1979', 'Al-Ghazali 11th c.']
        },
        {
          id: 'kalam-p2-obj1',
          type: 'objection',
          text: 'Cyclic/bouncing cosmologies avoid a beginning',
          children: [
            {
              id: 'kalam-p2-obj1-r1',
              type: 'response',
              text: 'BGV theorem applies to all models expanding on average; entropy growth prevents eternal cycling',
              sources: ['Vilenkin 2006']
            }
          ]
        },
        {
          id: 'kalam-p2-obj2',
          type: 'objection',
          text: 'Quantum gravity models may eliminate the singularity',
          children: [
            {
              id: 'kalam-p2-obj2-r1',
              type: 'response',
              text: 'Even if the singularity is avoided, the BGV theorem still requires a past boundary for any expanding spacetime',
              sources: ['Vilenkin 2006']
            }
          ]
        }
      ]
    }
  ]
};

export const anselmTree: TreeNode = {
  id: 'anselm-root',
  type: 'argument',
  text: "Anselm's Ontological Argument",
  children: [
    {
      id: 'anselm-conclusion',
      type: 'conclusion',
      text: 'God — that than which nothing greater can be conceived — must exist in reality',
      children: []
    },
    {
      id: 'anselm-p1',
      type: 'premise',
      text: 'God is defined as "that than which nothing greater can be conceived"',
      status: 'granted',
      children: [
        {
          id: 'anselm-p1-s1',
          type: 'support',
          text: 'This captures what theists mean by "God" — even the atheist understands the concept',
          sources: ['Anselm, Proslogion ch. 2 (1078)']
        },
        {
          id: 'anselm-p1-s2',
          type: 'support',
          text: 'The definition is not arbitrary — it represents the concept of maximal, unsurpassable greatness',
          sources: ['Anselm, Proslogion ch. 2']
        }
      ]
    },
    {
      id: 'anselm-p2',
      type: 'premise',
      text: 'It is greater to exist in reality than to exist only in the understanding',
      status: 'defended',
      children: [
        {
          id: 'anselm-p2-s1',
          type: 'support',
          text: 'Real existence adds causal power and actuality — a real $100 can buy things; an imagined $100 cannot',
          sources: ['Anselm, Proslogion ch. 2']
        },
        {
          id: 'anselm-p2-s2',
          type: 'support',
          text: 'A real God could create, sustain, and redeem; a merely conceived God could do nothing',
          sources: ['Anselm, Proslogion ch. 2']
        },
        {
          id: 'anselm-p2-obj1',
          type: 'objection',
          text: 'Kant: "Existence is not a real predicate" — it adds nothing to the concept',
          children: [
            {
              id: 'anselm-p2-obj1-r1',
              type: 'response',
              text: 'Plantinga\'s modal version avoids this by using "necessary existence" rather than bare existence',
              sources: ['Plantinga, The Nature of Necessity (1974)']
            },
            {
              id: 'anselm-p2-obj1-r2',
              type: 'response',
              text: 'Kant\'s claim is itself questionable — existence does add causal power and actuality',
              sources: ['Philosophical analysis']
            }
          ]
        }
      ]
    },
    {
      id: 'anselm-p3',
      type: 'premise',
      text: 'If God exists only in the understanding, a greater being can be conceived — contradicting the definition',
      status: 'defended',
      children: [
        {
          id: 'anselm-p3-s1',
          type: 'support',
          text: 'This is a valid reductio ad absurdum: denying God\'s real existence leads to contradiction',
          sources: ['Anselm, Proslogion ch. 2']
        },
        {
          id: 'anselm-p3-obj1',
          type: 'objection',
          text: 'Gaunilo\'s Lost Island: the same logic "proves" the greatest conceivable island exists',
          children: [
            {
              id: 'anselm-p3-obj1-r1',
              type: 'response',
              text: '"Greatest island" has no logical maximum — you can always add more. But omnipotence, omniscience, moral perfection have logical maxima.',
              sources: ['Anselm, Reply to Gaunilo', 'Plantinga 1974']
            }
          ]
        },
        {
          id: 'anselm-p3-obj2',
          type: 'objection',
          text: 'The argument "defines God into existence" — you cannot establish real existence through conceptual analysis',
          children: [
            {
              id: 'anselm-p3-obj2-r1',
              type: 'response',
              text: 'The argument draws out logical entailments — like geometry showing triangles must have 180° angles. The objector must show the concept is incoherent.',
              sources: ['Plantinga, God, Freedom, and Evil (1977)']
            }
          ]
        }
      ]
    }
  ]
};

export const plantingaTree: TreeNode = {
  id: 'plantinga-root',
  type: 'argument',
  text: "Plantinga's Modal Ontological Argument",
  children: [
    {
      id: 'plantinga-conclusion',
      type: 'conclusion',
      text: 'A maximally great being (God) exists in the actual world',
      children: []
    },
    {
      id: 'plantinga-p1',
      type: 'premise',
      text: 'It is possible that a maximally great being exists (MGB = omnipotent, omniscient, morally perfect in every possible world)',
      status: 'defended',
      children: [
        {
          id: 'plantinga-p1-s1',
          type: 'support',
          text: 'Conceptual coherence: no logical contradiction in the concept of omnipotence, omniscience, and moral perfection',
          sources: ['Plantinga, The Nature of Necessity (1974)']
        },
        {
          id: 'plantinga-p1-s2',
          type: 'support',
          text: 'No demonstrated incoherence: no one has shown a hidden contradiction in the concept of maximal greatness',
          sources: ['Plantinga, God, Freedom, and Evil (1977)']
        },
        {
          id: 'plantinga-p1-s3',
          type: 'support',
          text: 'Leibniz proved all perfections are compatible — simple, positive, unlimited qualities cannot contradict each other',
          sources: ['Leibniz, "That a Most Perfect Being Exists" (1676)']
        },
        {
          id: 'plantinga-p1-obj1',
          type: 'objection',
          text: 'The premise is question-begging: in S5, ◇□P → □P, so the premise already entails the conclusion',
          children: [
            {
              id: 'plantinga-p1-obj1-r1',
              type: 'response',
              text: 'The entailment is not obvious without S5 knowledge; the premise is independently supported by conceptual coherence',
              sources: ['Plantinga, God, Freedom, and Evil (1977)']
            }
          ]
        },
        {
          id: 'plantinga-p1-obj2',
          type: 'objection',
          text: 'Reverse argument: "It is possible that no MGB exists" → "Necessarily, no MGB exists"',
          children: [
            {
              id: 'plantinga-p1-obj2-r1',
              type: 'response',
              text: 'The premises are not equally plausible: possibility (coherence) is modest; impossibility (hidden contradiction) requires much stronger evidence',
              sources: ['Plantinga 1974', 'Craig, Reasonable Faith (2008)']
            }
          ]
        },
        {
          id: 'plantinga-p1-obj3',
          type: 'objection',
          text: 'Paradoxes of omnipotence: "Can God make a stone too heavy to lift?" suggests incoherence',
          children: [
            {
              id: 'plantinga-p1-obj3-r1',
              type: 'response',
              text: 'These are pseudo-paradoxes — they involve logically contradictory task descriptions. Omnipotence = ability to do anything logically possible.',
              sources: ['Plantinga 1974']
            }
          ]
        }
      ]
    },
    {
      id: 'plantinga-p2',
      type: 'premise',
      text: 'If an MGB is possible, then an MGB exists in some possible world',
      status: 'granted',
      children: [
        {
          id: 'plantinga-p2-s1',
          type: 'support',
          text: 'This follows by definition: "possibly P" means "P is true in some possible world" in standard modal logic',
          sources: ['Standard modal logic (S5)']
        }
      ]
    },
    {
      id: 'plantinga-p3',
      type: 'premise',
      text: 'If an MGB exists in some possible world, it exists in every possible world (including the actual world)',
      status: 'defended',
      children: [
        {
          id: 'plantinga-p3-s1',
          type: 'support',
          text: 'Maximal greatness entails existence in every possible world — a contingent being would not be maximally great',
          sources: ['Plantinga, The Nature of Necessity (1974)']
        },
        {
          id: 'plantinga-p3-s2',
          type: 'support',
          text: 'S5 axiom: ◇□P → □P — if possibly necessary, then necessary. Accepted by most logicians.',
          sources: ['Standard modal logic (S5)']
        },
        {
          id: 'plantinga-p3-obj1',
          type: 'objection',
          text: 'There could be multiple maximally great beings',
          children: [
            {
              id: 'plantinga-p3-obj1-r1',
              type: 'response',
              text: 'Maximal greatness logically entails uniqueness — two omnipotent beings is incoherent (each limited by the other)',
              sources: ['Plantinga, The Nature of Necessity (1974)']
            }
          ]
        }
      ]
    }
  ]
};

export const allTrees: Record<string, TreeNode> = {
  kalam: kalamTree,
  anselm: anselmTree,
  plantinga: plantingaTree,
};
