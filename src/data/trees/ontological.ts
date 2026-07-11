import { TreeNode } from '../arguments/types';

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

export const descartesTree: TreeNode = {
  id: 'descartes-root',
  type: 'argument',
  text: "Descartes' Ontological Argument",
  children: [
    {
      id: 'descartes-conclusion',
      type: 'conclusion',
      text: 'A supremely perfect being (God) necessarily exists',
      children: []
    },
    {
      id: 'descartes-p1',
      type: 'premise',
      text: 'I have a clear and distinct idea of a supremely perfect being',
      status: 'defended',
      children: [
        {
          id: 'descartes-p1-s1',
          type: 'support',
          text: 'Descartes claims we possess an innate idea of a being with all perfections — unlimited knowledge, power, and goodness — not constructed by piecing together other ideas',
          sources: ['Descartes, Meditations on First Philosophy, V (1641)']
        },
        {
          id: 'descartes-p1-s2',
          type: 'support',
          text: 'This idea, examined on its own terms, is not self-contradictory',
          sources: ['Descartes, Meditations on First Philosophy, V (1641)']
        },
        {
          id: 'descartes-p1-s3',
          type: 'support',
          text: 'The clarity and distinctness of the idea guarantees its reliability as a basis for reasoning, just as our clear idea of a triangle guarantees reasoning about its properties',
          sources: ['Descartes, Meditations on First Philosophy, V (1641)']
        },
        {
          id: 'descartes-p1-obj1',
          type: 'objection',
          text: 'The concept may contain a hidden contradiction — if so, nothing follows from it',
          children: [
            {
              id: 'descartes-p1-obj1-r1',
              type: 'response',
              text: 'Leibniz proved that perfections are simple, positive, unlimited qualities; contradictions can only arise between a positive quality and its negation, or between two limited qualities — neither relation holds among pure perfections',
              sources: ['Leibniz, "That a Most Perfect Being Exists" (1676)']
            },
            {
              id: 'descartes-p1-obj1-r2',
              type: 'response',
              text: 'Since no contradiction can arise among the perfections, the concept of a supremely perfect being is possible — and by Descartes\' own reasoning, what is possible for such a being is actual',
              sources: ['Leibniz, "That a Most Perfect Being Exists" (1676)']
            }
          ]
        }
      ]
    },
    {
      id: 'descartes-p2',
      type: 'premise',
      text: 'Existence is a perfection — a being lacking existence would not be supremely perfect',
      status: 'defended',
      children: [
        {
          id: 'descartes-p2-s1',
          type: 'support',
          text: 'A supremely perfect being lacking existence would lack a perfection, and so would not be supremely perfect',
          sources: ['Descartes, Meditations on First Philosophy, V (1641)']
        },
        {
          id: 'descartes-p2-s2',
          type: 'support',
          text: 'This mirrors saying a triangle lacking three angles would not be a triangle — existence belongs to the very essence of supreme perfection',
          sources: ['Descartes, Meditations on First Philosophy, V (1641)']
        },
        {
          id: 'descartes-p2-s3',
          type: 'support',
          text: 'Existence, like omnipotence and omniscience, is a positive quality contributing to perfection; a non-existent "supremely perfect being" is as contradictory as a "mountainless valley"',
          sources: ['Descartes, Meditations on First Philosophy, V (1641)']
        },
        {
          id: 'descartes-p2-obj1',
          type: 'objection',
          text: 'Kant: existence is not a real predicate — a hundred real thalers contain no more than a hundred possible ones, so existence cannot be a perfection',
          children: [
            {
              id: 'descartes-p2-obj1-r1',
              type: 'response',
              text: 'Even granting Kant\'s point about bare existence, necessary existence is a substantive property that adds something real — a being that cannot fail to exist is greater than one that merely happens to exist',
              sources: ['Kant, Critique of Pure Reason (1781)']
            },
            {
              id: 'descartes-p2-obj1-r2',
              type: 'response',
              text: 'The geometric analogy still stands independently: just as we cannot coherently conceive a triangle without three angles, we cannot coherently conceive a supremely perfect being without existence',
              sources: ['Descartes, Meditations on First Philosophy, V (1641)']
            },
            {
              id: 'descartes-p2-obj1-r3',
              type: 'response',
              text: 'Leibniz\'s later proof that the concept of a supremely perfect being is logically possible closes the remaining gap in the argument',
              sources: ['Leibniz, "That a Most Perfect Being Exists" (1676)']
            }
          ]
        }
      ]
    },
    {
      id: 'descartes-p3',
      type: 'premise',
      text: 'A supremely perfect being must exist',
      status: 'defended',
      children: [
        {
          id: 'descartes-p3-s1',
          type: 'support',
          text: 'Just as the essence of a triangle necessarily includes that its angles sum to 180°, the essence of a supremely perfect being necessarily includes existence',
          sources: ['Descartes, Meditations on First Philosophy, V (1641)']
        },
        {
          id: 'descartes-p3-s2',
          type: 'support',
          text: '"I cannot conceive of God except as existing, just as I cannot conceive of a mountain without a valley" — existence follows from God\'s essence with the same necessity as geometric truths follow from the definitions of shapes',
          sources: ['Descartes, Meditations on First Philosophy, V (1641)']
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

export const maydoleTree: TreeNode = {
  id: 'maydole-root',
  type: 'argument',
  text: "Maydole's Modal Perfection Argument",
  children: [
    {
      id: 'maydole-conclusion',
      type: 'conclusion',
      text: 'A perfect being (God) exists',
      children: []
    },
    {
      id: 'maydole-p1',
      type: 'premise',
      text: 'If it is possible that a perfect being exists, then a perfect being exists',
      status: 'defended',
      children: [
        {
          id: 'maydole-p1-s1',
          type: 'support',
          text: 'A perfect being, by definition, would exist necessarily — in every possible world — since perfection entails not merely existing but existing necessarily',
          sources: ['Maydole, "The Modal Perfection Argument" (2009)']
        },
        {
          id: 'maydole-p1-s2',
          type: 'support',
          text: 'The S5 axiom ◇□P → □P licenses the inference: if it is possible that a perfect being necessarily exists, then it does necessarily exist — and therefore actually exists',
          sources: ['Standard modal logic (S5)']
        },
        {
          id: 'maydole-p1-obj1',
          type: 'objection',
          text: 'The argument merely repackages Plantinga\'s — sharing the same logical form, it adds nothing genuinely new',
          children: [
            {
              id: 'maydole-p1-obj1-r1',
              type: 'response',
              text: 'The logical form is indeed similar to Plantinga\'s, but Maydole\'s real contribution lies in rigorously proving, rather than merely intuiting, the possibility premise',
              sources: ['Maydole, "The Modal Perfection Argument" (2009)']
            },
            {
              id: 'maydole-p1-obj1-r2',
              type: 'response',
              text: 'Drawing on Leibniz\'s analysis of simple, positive properties, this closes the exact gap that most critics of Plantinga\'s argument exploit',
              sources: ['Leibniz, "That a Most Perfect Being Exists" (1676)']
            }
          ]
        }
      ]
    },
    {
      id: 'maydole-p2',
      type: 'premise',
      text: 'A perfect being is possible — no logical contradiction can be derived from the concept of a being possessing all perfections',
      status: 'defended',
      children: [
        {
          id: 'maydole-p2-s1',
          type: 'support',
          text: 'Each perfection — maximal power, maximal knowledge, maximal goodness — is a simple, positive, unlimited quality',
          sources: ['Maydole, "The Modal Perfection Argument" (2009)']
        },
        {
          id: 'maydole-p2-s2',
          type: 'support',
          text: 'Leibniz\'s proof shows contradictions arise only between a positive property and its negation, or between two limited properties competing for the same finite space',
          sources: ['Leibniz, "That a Most Perfect Being Exists" (1676)']
        },
        {
          id: 'maydole-p2-s3',
          type: 'support',
          text: 'Since perfections are all positive and unlimited, none of them can stand in a contradiction-generating relationship — so the concept of a being with all perfections is logically coherent',
          sources: ['Maydole, "The Modal Perfection Argument" (2009)', 'Leibniz, "That a Most Perfect Being Exists" (1676)']
        },
        {
          id: 'maydole-p2-obj1',
          type: 'objection',
          text: 'Some perfections may be incompatible — e.g., perfect justice and mercy, or omniscience and omnipotence, may conflict',
          children: [
            {
              id: 'maydole-p2-obj1-r1',
              type: 'response',
              text: 'Apparent conflicts between divine attributes stem from limited human understanding, not genuine logical contradiction — systematic theology has long shown how these attributes harmonize',
              sources: ['Leibniz, "That a Most Perfect Being Exists" (1676)']
            },
            {
              id: 'maydole-p2-obj1-r2',
              type: 'response',
              text: 'Leibniz\'s proof operates strictly at the level of simple, positive, unlimited qualities; apparent "paradoxes" like the stone too heavy to lift involve contradictions in the task description, not in omnipotence itself',
              sources: ['Maydole, "The Modal Perfection Argument" (2009)']
            }
          ]
        }
      ]
    }
  ]
};

export const godelTree: TreeNode = {
  id: 'godel-root',
  type: 'argument',
  text: "Gödel's Ontological Proof",
  children: [
    {
      id: 'godel-conclusion',
      type: 'conclusion',
      text: 'Necessarily, a God-like being exists — a being possessing all positive properties, including necessary existence',
      children: []
    },
    {
      id: 'godel-p1',
      type: 'premise',
      text: 'A property is "positive" if and only if its negation is not positive; any property entailed by a positive property is itself positive',
      status: 'defended',
      children: [
        {
          id: 'godel-p1-s1',
          type: 'support',
          text: '"Positive" is used in a value-theoretic sense — properties that contribute to perfection, greatness, or goodness; the negation of a positive property is negative',
          sources: ['Gödel, Ontological Proof (published posthumously)']
        },
        {
          id: 'godel-p1-s2',
          type: 'support',
          text: 'A closure axiom holds: any property necessarily entailed by a positive property is itself positive (e.g., omniscience entails knowing contingent truths, which is thus also positive)',
          sources: ['Sobel, Logic and Theism (2004)']
        },
        {
          id: 'godel-p1-obj1',
          type: 'objection',
          text: 'The axioms about "positive properties" are stipulative and unclear, not self-evident',
          children: [
            {
              id: 'godel-p1-obj1-r1',
              type: 'response',
              text: 'The axioms are not arbitrary stipulations but formalize a long tradition running from Anselm through Leibniz, capturing our intuitive sense of what makes a property "great-making"',
              sources: ['Anderson, "Some Emendations of Gödel\'s Ontological Proof" (1990)']
            },
            {
              id: 'godel-p1-obj1-r2',
              type: 'response',
              text: 'The 2013 automated verification by Benzmüller and Paleo confirmed the axioms are at least logically consistent — they do not lead to contradiction, and the conclusion follows validly from them',
              sources: ['Benzmüller & Paleo, "Formalization, Mechanization and Automation of Gödel\'s Proof of God\'s Existence" (2013)']
            }
          ]
        }
      ]
    },
    {
      id: 'godel-p2',
      type: 'premise',
      text: 'The property of being God-like is positive, where "God-like" means possessing all positive properties',
      status: 'defended',
      children: [
        {
          id: 'godel-p2-s1',
          type: 'support',
          text: 'Being God-like means possessing every positive property; since each positive property individually contributes to perfection, having all of them represents the maximum of perfection and is itself positive',
          sources: ['Gödel, Ontological Proof (published posthumously)']
        },
        {
          id: 'godel-p2-s2',
          type: 'support',
          text: 'This formalizes, in the language of positive-property theory, the same core idea as Anselm\'s "that than which nothing greater can be conceived" and Descartes\' "supremely perfect being"',
          sources: ['Anderson, "Some Emendations of Gödel\'s Ontological Proof" (1990)']
        }
      ]
    },
    {
      id: 'godel-p3',
      type: 'premise',
      text: 'Necessarily, if something is God-like, it possesses the property of necessary existence (existing in every possible world)',
      status: 'defended',
      children: [
        {
          id: 'godel-p3-s1',
          type: 'support',
          text: 'Necessary existence is itself a positive property — its negation, mere contingent existence or non-existence, is a limitation and therefore negative',
          sources: ['Gödel, Ontological Proof (published posthumously)']
        },
        {
          id: 'godel-p3-s2',
          type: 'support',
          text: 'Since a God-like being possesses every positive property by definition, it must possess necessary existence; a being that existed only contingently would lack a positive property and so would not be truly God-like',
          sources: ['Gödel, Ontological Proof (published posthumously)']
        },
        {
          id: 'godel-p3-obj1',
          type: 'objection',
          text: 'Modal collapse: Sobel showed Gödel\'s original axioms make every true proposition necessarily true, which is absurd',
          children: [
            {
              id: 'godel-p3-obj1-r1',
              type: 'response',
              text: 'Anderson (1990) and later Dana Scott proposed emendations to Gödel\'s axioms — modifying the definition of "God-like" — that avoid modal collapse while preserving the argument\'s validity',
              sources: ['Anderson, "Some Emendations of Gödel\'s Ontological Proof" (1990)']
            },
            {
              id: 'godel-p3-obj1-r2',
              type: 'response',
              text: 'These emended versions have themselves been formally verified; the modal collapse objection applies only to Gödel\'s original formulation, not to the corrected versions now standard in the literature',
              sources: ['Benzmüller & Paleo, "Formalization, Mechanization and Automation of Gödel\'s Proof of God\'s Existence" (2013)']
            }
          ]
        }
      ]
    },
    {
      id: 'godel-p4',
      type: 'premise',
      text: 'The property of being God-like is possibly exemplified (it is possible that a God-like being exists)',
      status: 'defended',
      children: [
        {
          id: 'godel-p4-s1',
          type: 'support',
          text: 'By the axioms governing positive properties, all positive properties are mutually compatible, so the concept of a God-like being — possessing all of them — is logically consistent',
          sources: ['Gödel, Ontological Proof (published posthumously)']
        },
        {
          id: 'godel-p4-s2',
          type: 'support',
          text: 'A logically consistent concept is possibly exemplified — and this specific inferential step was formally verified using automated theorem provers',
          sources: ['Benzmüller & Paleo, "Formalization, Mechanization and Automation of Gödel\'s Proof of God\'s Existence" (2013)']
        }
      ]
    }
  ]
};

export const ontologicalTrees: Record<string, TreeNode> = {
  anselm: anselmTree,
  descartes: descartesTree,
  godel: godelTree,
  maydole: maydoleTree,
  plantinga: plantingaTree,
};
