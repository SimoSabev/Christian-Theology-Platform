import { Argument } from './types';

export const ontologicalArguments: Argument[] = [
  {
    id: 'anselm',
    slug: 'anselm',
    name: "Anselm's Ontological Argument",
    category: 'ontological',
    shortDescription: 'God, as the greatest conceivable being, must exist in reality — for existence in reality is greater than existence in the mind alone.',
    historicalBackground: `Anselm of Canterbury (1033–1109) formulated this revolutionary argument in his Proslogion (1078). It is unique among theistic arguments because it is entirely a priori — it requires no empirical evidence about the world, deducing God's existence from the very concept of God. The argument sparked immediate controversy: the monk Gaunilo of Marmoutiers objected with his "Lost Island" parody, and the debate has continued for nearly a millennium. Aquinas, Hume, and Kant all engaged with the argument, and it was revived in sophisticated modal form by Alvin Plantinga in the 20th century.`,
    premises: [
      {
        id: 'anselm-p1',
        text: 'God is defined as "that than which nothing greater can be conceived" (aliquid quo nihil maius cogitari possit).',
        defense: 'This is a stipulative definition that even the atheist can accept — it defines what theists mean by "God." The atheist (the "fool" of Psalm 14:1) understands this concept, even while denying God\'s existence. The concept of a maximally great being is coherent and understood by believer and non-believer alike.',
        sources: ['Anselm, Proslogion, ch. 2 (1078)']
      },
      {
        id: 'anselm-p2',
        text: 'It is greater to exist in reality than to exist only in the understanding (in the mind alone).',
        defense: 'Existence in reality is a great-making property. A being that exists both in the mind and in reality is greater than a being that exists only in the mind, because the former has all the properties of the latter plus the added perfection of actual existence. Real existence gives a being causal power, independence, and actuality that merely conceived existence lacks.',
        sources: ['Anselm, Proslogion, ch. 2']
      },
      {
        id: 'anselm-p3',
        text: 'If God exists only in the understanding, then we can conceive of a greater being — one that also exists in reality.',
        defense: 'If the greatest conceivable being existed only in the mind, then it would be possible to conceive of an even greater being — one with all the same properties plus real existence. But then the original being would not be "that than which nothing greater can be conceived," which contradicts the definition.',
        sources: ['Anselm, Proslogion, ch. 2']
      }
    ],
    conclusion: 'Therefore, God — that than which nothing greater can be conceived — must exist in reality, not merely in the understanding.',
    proponents: [
      { name: 'Anselm of Canterbury', era: '11th century' },
      { name: 'René Descartes', era: '17th century' },
      { name: 'Gottfried Wilhelm Leibniz', era: '17th–18th century' },
      { name: 'Alvin Plantinga', era: 'Contemporary' },
    ],
    objections: [
      {
        id: 'anselm-obj1',
        title: "Gaunilo's Lost Island",
        description: 'We can define "the greatest conceivable island" — by the same logic, it must exist in reality. But this is absurd. Therefore the argument form is invalid.',
        response: 'The parody fails because concepts like "greatest island" are not intrinsically maximum-able — one can always add another palm tree, another beach. There is no logical maximum for contingent, material things. But "greatest conceivable being" is intrinsically maximum-able: a being with omnipotence, omniscience, and moral perfection — these are properties that have logical maxima. The concept of a maximally great being is unique in this respect.',
        sources: ['Anselm, Reply to Gaunilo', 'Plantinga, The Nature of Necessity (1974)']
      },
      {
        id: 'anselm-obj2',
        title: "Kant's Objection: Existence is not a predicate",
        description: 'Immanuel Kant argued that "existence" is not a real predicate — it adds nothing to the concept of a thing. 100 real dollars have no more content than 100 possible dollars. Therefore, existence cannot be a "great-making" property.',
        response: 'Kant\'s objection applies to the classical version but not to the modal version (Plantinga\'s). In the modal version, the key property is not bare existence but necessary existence — which is clearly a great-making property. A being that exists in every possible world is greater than one that exists in only some. Furthermore, many philosophers dispute Kant\'s claim: existence does seem to add something — a real dog can bite, while a merely conceived dog cannot.',
        sources: ['Kant, Critique of Pure Reason (1781), A592/B620', 'Plantinga, The Nature of Necessity (1974)']
      }
    ],
    significance: 'The ontological argument is the most philosophically provocative argument for God\'s existence. Even those who reject it (like Aquinas and Kant) acknowledge its brilliance. Plantinga\'s modal version is widely considered sound by many analytic philosophers, though its key premise (the possibility of a maximally great being) remains contested.',
    relatedArguments: ['plantinga-modal', 'descartes-ontological'],
    keySources: [
      'Anselm, Proslogion (1078)',
      'Alvin Plantinga, The Nature of Necessity (1974)',
      'Immanuel Kant, Critique of Pure Reason (1781)',
    ]
  },
  {
    id: 'plantinga-modal',
    slug: 'plantinga',
    name: "Plantinga's Modal Ontological Argument",
    category: 'ontological',
    shortDescription: 'If it is even possible that a maximally great being exists, then such a being exists in every possible world — including the actual world.',
    historicalBackground: `Alvin Plantinga reformulated the ontological argument using the tools of modal logic (the logic of possibility and necessity) in "The Nature of Necessity" (1974). This version avoids Kant's objection by focusing not on bare existence but on necessary existence — the property of existing in every possible world. The argument is logically valid in the modal system S5, which most philosophers accept. The key debate is whether the central premise — that maximal greatness is possible — is true.`,
    premises: [
      {
        id: 'plantinga-p1',
        text: 'It is possible that a maximally great being exists. (A maximally great being = a being that has maximal excellence in every possible world, where maximal excellence = omnipotence, omniscience, and moral perfection.)',
        defense: 'The concept of a maximally great being appears to be coherent — there is no logical contradiction in the idea of a being that is omnipotent, omniscient, and morally perfect. It is not like "a married bachelor" or "a square circle." Unless one can demonstrate an internal contradiction in the concept of maximal greatness, the possibility premise is plausible.',
        sources: ['Plantinga, The Nature of Necessity (1974)', 'Plantinga, God, Freedom, and Evil (1977)']
      },
      {
        id: 'plantinga-p2',
        text: 'If it is possible that a maximally great being exists, then a maximally great being exists in some possible world.',
        defense: 'This follows from the definition of possibility in modal logic: "possibly P" means "P is true in some possible world."',
        sources: ['Standard modal logic (S5)']
      },
      {
        id: 'plantinga-p3',
        text: 'If a maximally great being exists in some possible world, then it exists in every possible world (including the actual world).',
        defense: 'By definition, a maximally great being has maximal excellence in every possible world. If it exists in one possible world, its maximal greatness entails that it exists in all possible worlds — for a being that exists only contingently (in some worlds but not others) would not be maximally great. S5 modal logic validates this step: if it is possible that something necessarily exists, then it necessarily exists.',
        sources: ['Plantinga, The Nature of Necessity (1974)']
      }
    ],
    conclusion: 'Therefore, a maximally great being (God) exists in the actual world.',
    proponents: [
      { name: 'Alvin Plantinga', era: 'Contemporary' },
      { name: 'William Lane Craig', era: 'Contemporary' },
    ],
    objections: [
      {
        id: 'plantinga-obj1',
        title: 'The key premise is question-begging',
        description: 'To say "it is possible that a maximally great being exists" already assumes the conclusion in modal logic (S5), since possibility of necessary existence entails actual necessary existence.',
        response: 'The premise is not question-begging because it is not obvious that possibility of necessary existence entails actual existence — only someone familiar with S5 modal logic would recognize this. Furthermore, the premise can be supported independently: the concept of maximal greatness is coherent, and coherent concepts are generally taken to be possible. The burden is on the objector to show an incoherence in the concept.',
        sources: ['Plantinga, God, Freedom, and Evil (1977)']
      }
    ],
    significance: 'Even Plantinga himself admits the argument does not conclusively prove God\'s existence — its soundness depends on the contested possibility premise. However, he argues it shows that belief in God is rational: the premise is at least as plausible as its denial.',
    relatedArguments: ['anselm'],
    keySources: [
      'Alvin Plantinga, The Nature of Necessity (1974)',
      'Alvin Plantinga, God, Freedom, and Evil (1977)',
    ]
  }
];
