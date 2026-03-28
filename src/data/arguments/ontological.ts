import { Argument } from './types';

export const ontologicalArguments: Argument[] = [
  {
    id: 'anselm',
    slug: 'anselm',
    name: "Anselm's Ontological Argument",
    category: 'ontological',
    shortDescription: 'God, as the greatest conceivable being, must exist in reality — for existence in reality is greater than existence in the mind alone.',
    historicalBackground: `Anselm of Canterbury (1033–1109) formulated this revolutionary argument in his Proslogion (1078). It is unique among theistic arguments because it is entirely a priori — it requires no empirical evidence about the world, deducing God's existence from the very concept of God. The argument sparked immediate controversy: the monk Gaunilo of Marmoutiers objected with his "Lost Island" parody, and the debate has continued for nearly a millennium. Aquinas, Hume, and Kant all engaged with the argument, and it was revived in sophisticated modal form by Alvin Plantinga in the 20th century. Charles Hartshorne and Norman Malcolm both argued that Proslogion chapter 3 contains a distinct, valid argument based on necessary existence.`,
    premises: [
      {
        id: 'anselm-p1',
        text: 'God is defined as "that than which nothing greater can be conceived" (aliquid quo nihil maius cogitari possit).',
        defense: 'This is not an arbitrary stipulation — it captures what theists mean by "God." Even the atheist (the "fool" of Psalm 14:1) understands this concept, even while denying God\'s existence. The concept of a maximally great being is coherent and understood by believer and non-believer alike. As Anselm writes: "For even the fool is convinced that something than which nothing greater can be thought exists in the understanding, since when he hears this, he understands it; and whatever is understood exists in the understanding" (Proslogion, ch. 2).',
        sources: ['Anselm, Proslogion, ch. 2 (1078)']
      },
      {
        id: 'anselm-p2',
        text: 'It is greater to exist in reality than to exist only in the understanding (in the mind alone).',
        defense: 'Existence in reality is a great-making property. A being that exists both in the mind and in reality is greater than a being that exists only in the mind, because the former has all the properties of the latter plus the added perfection of actual existence. Real existence gives a being causal power, independence, and actuality that merely conceived existence lacks. A real $100 can buy things; a merely imagined $100 cannot. A real God could create, sustain, and redeem; a merely conceived God could do nothing.',
        sources: ['Anselm, Proslogion, ch. 2']
      },
      {
        id: 'anselm-p3',
        text: 'If God exists only in the understanding, then we can conceive of a greater being — one that also exists in reality.',
        defense: 'If the greatest conceivable being existed only in the mind, then it would be possible to conceive of an even greater being — one with all the same properties plus real existence. But then the original being would not be "that than which nothing greater can be conceived," which contradicts the definition. This is a reductio ad absurdum: assuming God exists only in the mind leads to a contradiction.',
        sources: ['Anselm, Proslogion, ch. 2']
      }
    ],
    conclusion: 'Therefore, God — that than which nothing greater can be conceived — must exist in reality, not merely in the understanding.',
    proponents: [
      { name: 'Anselm of Canterbury', era: '11th century' },
      { name: 'Charles Hartshorne', era: '20th century' },
      { name: 'Norman Malcolm', era: '20th century' },
    ],
    objections: [
      {
        id: 'anselm-obj1',
        title: "Gaunilo's Lost Island",
        description: 'We can define "the greatest conceivable island" — by the same logic, it must exist in reality. But this is absurd. Therefore the argument form is invalid.',
        response: 'The parody fails because concepts like "greatest island" are not intrinsically maximum-able — one can always add another palm tree, another lagoon. There is no logical maximum for contingent, material things. But "greatest conceivable being" is intrinsically maximum-able: a being with omnipotence, omniscience, and moral perfection — these are properties that have logical maxima. You cannot be "more omnipotent" — omnipotence is already maximal. Anselm anticipated this: the argument applies only to "that than which nothing greater can be conceived," not to any arbitrary "greatest X."',
        sources: ['Anselm, Reply to Gaunilo', 'Plantinga, The Nature of Necessity (1974)']
      },
      {
        id: 'anselm-obj2',
        title: "Kant's Objection: Existence is not a predicate",
        description: 'Immanuel Kant argued that "existence" is not a real predicate — it adds nothing to the concept of a thing. 100 real dollars have no more content than 100 possible dollars. Therefore, existence cannot be a "great-making" property.',
        response: 'Kant\'s objection applies to the classical version but not to the modal version (Plantinga\'s). In the modal version, the key property is not bare existence but necessary existence — existing in every possible world. Necessary existence clearly adds something to a concept: a being that necessarily exists is greater than one that merely contingently exists. Furthermore, Kant\'s claim is itself questionable: a real $100 bill can buy things; a merely possible $100 bill cannot. Existence does seem to add something — at minimum, causal power and actuality.',
        sources: ['Kant, Critique of Pure Reason (1781), A592/B620', 'Plantinga, The Nature of Necessity (1974)']
      },
      {
        id: 'anselm-obj3',
        title: '"The argument defines God into existence"',
        description: 'The ontological argument appears to smuggle in existence through a clever definition — you cannot simply define something into existence through conceptual analysis.',
        response: 'The argument does not define God into existence any more than geometry "defines" triangles into having 180° angle sums. It draws out what is logically entailed by the concept. If the concept of maximal greatness is coherent, then its instantiation follows necessarily. The objector must show the concept is incoherent — which has never been demonstrated. The argument is a reductio: assuming the greatest conceivable being doesn\'t exist leads to a contradiction.',
        sources: ['Anselm, Proslogion, ch. 2', 'Plantinga, God, Freedom, and Evil (1977)']
      }
    ],
    significance: 'The ontological argument is the most philosophically provocative argument for God\'s existence. Even those who reject it (like Aquinas and Kant) acknowledge its brilliance. It is unique as a purely a priori argument — requiring no empirical evidence about the world. Plantinga\'s modal version is widely considered sound by many analytic philosophers, though its key premise (the possibility of a maximally great being) remains contested.',
    relatedArguments: ['plantinga', 'descartes', 'maydole', 'godel'],
    keySources: [
      'Anselm, Proslogion (1078)',
      'Anselm, Reply to Gaunilo',
      'Charles Hartshorne, The Logic of Perfection (1962)',
      'Norman Malcolm, "Anselm\'s Ontological Arguments" (1960)',
    ]
  },
  {
    id: 'descartes-ontological',
    slug: 'descartes',
    name: "Descartes' Ontological Argument",
    category: 'ontological',
    shortDescription: 'From the clear and distinct idea of a supremely perfect being — whose essence necessarily includes existence, just as a triangle\'s essence includes having three angles.',
    historicalBackground: `René Descartes (1596–1650) formulated his own version of the ontological argument in the Fifth Meditation of his "Meditations on First Philosophy" (1641). Unlike Anselm's reductio approach, Descartes argues from the analogy with geometric truths: just as geometry reveals necessary truths about shapes, reflection on the idea of a supremely perfect being reveals that existence is part of its essence. Gottfried Leibniz later improved the argument by adding a crucial premise: that the concept of a supremely perfect being must first be shown to be logically possible. Leibniz argued that all perfections are compatible because they are simple, positive, unlimited qualities — there can be no contradiction among them.`,
    premises: [
      {
        id: 'descartes-p1',
        text: 'I have a clear and distinct idea of a supremely perfect being.',
        defense: 'Descartes argues that we possess a clear and distinct idea of a being with all perfections — unlimited knowledge, power, goodness, and so on. This idea is not self-contradictory, and it is not constructed from other ideas but is innate. The clarity and distinctness of this idea guarantees its reliability as a basis for reasoning, just as our clear idea of a triangle guarantees reasoning about its properties.',
        sources: ['Descartes, Meditations on First Philosophy, V (1641)']
      },
      {
        id: 'descartes-p2',
        text: 'Existence is a perfection — a being lacking existence would not be supremely perfect.',
        defense: 'If a supremely perfect being lacked existence, it would lack a perfection and therefore would not be supremely perfect. This is analogous to saying that a triangle lacking three angles would not be a triangle. Existence, like omnipotence and omniscience, is a positive quality that contributes to the perfection of a being. A non-existent "supremely perfect being" is as contradictory as a "mountainless valley."',
        sources: ['Descartes, Meditations on First Philosophy, V (1641)']
      },
      {
        id: 'descartes-p3',
        text: 'Therefore, a supremely perfect being must exist.',
        defense: 'Just as the essence of a triangle necessarily includes that its angles sum to 180°, the essence of a supremely perfect being necessarily includes existence. As Descartes writes: "I cannot conceive of God except as existing, just as I cannot conceive of a mountain without a valley" (Meditations, V). The existence of God follows from His essence with the same necessity as geometric truths follow from the definitions of shapes.',
        sources: ['Descartes, Meditations on First Philosophy, V (1641)']
      }
    ],
    conclusion: 'Therefore, a supremely perfect being (God) necessarily exists.',
    proponents: [
      { name: 'René Descartes', era: '17th century' },
      { name: 'Gottfried Wilhelm Leibniz', era: '17th–18th century' },
    ],
    objections: [
      {
        id: 'descartes-obj1',
        title: "Kant's Objection: Existence is not a real predicate",
        description: 'Kant argued that existence adds nothing to the concept of a thing — a hundred real thalers contain no more than a hundred possible thalers. Therefore existence cannot be counted as a "perfection."',
        response: 'Even granting Kant\'s point for bare existence, necessary existence is clearly a meaningful property that adds something to a concept. A being that cannot fail to exist is greater than one that merely happens to exist. Furthermore, Descartes\' analogy with geometry stands: just as we cannot conceive of a triangle without three angles, we cannot conceive of a supremely perfect being without existence. Leibniz\'s improvement strengthens the argument further by proving the concept is possible.',
        sources: ['Kant, Critique of Pure Reason (1781)', 'Leibniz, "That a Most Perfect Being Exists" (1676)']
      },
      {
        id: 'descartes-obj2',
        title: 'The concept may contain a hidden contradiction',
        description: 'Perhaps the idea of a being with all perfections is subtly self-contradictory — if so, nothing follows from it.',
        response: 'Leibniz addressed this directly in "That a Most Perfect Being Exists" (1676). He argued that all perfections are simple, positive, unlimited qualities. Since contradictions arise only between positive and negative, or between limited qualities, there can be no contradiction among pure perfections. All perfections are logically compatible. Therefore, the concept of a supremely perfect being is possible — and if possible, by Descartes\' reasoning, it is actual.',
        sources: ['Leibniz, "That a Most Perfect Being Exists" (1676)']
      }
    ],
    significance: 'Descartes\' formulation introduced the powerful analogy between divine existence and geometric necessity, making the ontological argument accessible through mathematical reasoning. Leibniz\'s improvement — proving the possibility premise — became crucial for all subsequent versions, including Plantinga\'s modal formulation.',
    relatedArguments: ['anselm', 'plantinga', 'maydole', 'godel'],
    keySources: [
      'René Descartes, Meditations on First Philosophy, V (1641)',
      'Gottfried Wilhelm Leibniz, "That a Most Perfect Being Exists" (1676)',
      'Immanuel Kant, Critique of Pure Reason (1781)',
    ]
  },
  {
    id: 'plantinga-modal',
    slug: 'plantinga',
    name: "Plantinga's Modal Ontological Argument",
    category: 'ontological',
    shortDescription: 'If it is even possible that a maximally great being exists, then such a being exists in every possible world — including the actual world.',
    historicalBackground: `Alvin Plantinga reformulated the ontological argument using the tools of modal logic (the logic of possibility and necessity) in "The Nature of Necessity" (1974). This version avoids Kant's objection by focusing not on bare existence but on necessary existence — the property of existing in every possible world. The argument is logically valid in the modal system S5, which most philosophers accept. The key debate is whether the central premise — that maximal greatness is possible — is true. William Lane Craig frequently uses this argument as part of his cumulative case for theism in debates.`,
    premises: [
      {
        id: 'plantinga-p1',
        text: 'It is possible that a maximally great being exists. (A maximally great being = a being that has maximal excellence in every possible world, where maximal excellence = omnipotence, omniscience, and moral perfection.)',
        defense: 'The concept of a maximally great being appears to be coherent — there is no logical contradiction in the idea of a being that is omnipotent, omniscient, and morally perfect. It is not like "a married bachelor" or "a square circle." The so-called paradoxes of omnipotence ("Can God create a stone so heavy He can\'t lift it?") are pseudo-paradoxes — they involve logical contradictions and thus do not count against omnipotence properly defined (omnipotence = the ability to do anything logically possible). As Plantinga argues: "The key premise — that maximal greatness is possibly exemplified — is not obviously false, and it seems to me to be true. It is certainly not demonstrably false" (God, Freedom, and Evil, 1977, p. 112).',
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
        defense: 'By definition, a maximally great being has maximal excellence in every possible world. If it exists in one possible world, its maximal greatness entails that it exists in all possible worlds — for a being that exists only contingently (in some worlds but not others) would not be maximally great. In S5 modal logic, if it is possible that something necessarily exists, then it necessarily exists. This is the axiom "◇□P → □P" which is characteristic of S5 and accepted by most logicians.',
        sources: ['Plantinga, The Nature of Necessity (1974)']
      }
    ],
    conclusion: 'Therefore, a maximally great being (God) exists in the actual world.',
    proponents: [
      { name: 'Alvin Plantinga', era: 'Contemporary' },
      { name: 'William Lane Craig', era: 'Contemporary' },
      { name: 'Robert Maydole', era: 'Contemporary' },
    ],
    objections: [
      {
        id: 'plantinga-obj1',
        title: 'The key premise is question-begging',
        description: 'To say "it is possible that a maximally great being exists" already assumes the conclusion in modal logic (S5), since possibility of necessary existence entails actual necessary existence.',
        response: 'The premise is not question-begging because it is not obvious that possibility of necessary existence entails actual existence — only someone familiar with S5 modal logic would recognize this. Furthermore, the premise can be supported independently: the concept of maximal greatness is coherent, no logical contradiction has been demonstrated, and we have positive reasons for thinking an MGB is possible (conceptual coherence, the success of other theistic arguments). The burden is on the objector to show an incoherence in the concept.',
        sources: ['Plantinga, God, Freedom, and Evil (1977)']
      },
      {
        id: 'plantinga-obj2',
        title: 'The reverse argument: "It is possible that no MGB exists"',
        description: 'One can run the argument in reverse: "It is possible that a maximally great being does not exist → necessarily, no MGB exists." This seems symmetrical and thus neither argument succeeds.',
        response: 'The premises are not symmetrical in plausibility. The premise "it is possible that an MGB exists" asserts a modest claim — conceptual coherence. The denial asserts something much stronger: that maximal greatness is impossible, that there is a hidden logical contradiction in the concept. We have positive reasons for thinking an MGB is possible (no known contradiction, conceptual coherence), whereas the denial is a very strong metaphysical claim with no supporting evidence. The two premises are not equally plausible.',
        sources: ['Plantinga, The Nature of Necessity (1974)', 'Craig, Reasonable Faith (2008)']
      },
      {
        id: 'plantinga-obj3',
        title: 'There could be multiple maximally great beings',
        description: 'If the argument works, could it not prove the existence of multiple maximally great beings?',
        response: 'There can be only one maximally great being. If there were two omnipotent beings, neither would be truly omnipotent — each would be limited by the other\'s power. Maximal greatness logically entails uniqueness. Two beings each having "all power" is logically incoherent, just as two beings each being "the greatest" would be a contradiction.',
        sources: ['Plantinga, The Nature of Necessity (1974)']
      }
    ],
    significance: 'Plantinga\'s modal version is the strongest form of the ontological argument today. Even Plantinga himself admits the argument does not conclusively prove God\'s existence — its soundness depends on the contested possibility premise. However, he argues it shows that belief in God is rational: "It is rational to accept [the key premise]. It is therefore rational to accept the conclusion... This argument provides a good ground for rational belief in God" (God, Freedom, and Evil, 1977).',
    relatedArguments: ['anselm', 'descartes', 'maydole', 'godel'],
    keySources: [
      'Alvin Plantinga, The Nature of Necessity (1974)',
      'Alvin Plantinga, God, Freedom, and Evil (1977)',
      'William Lane Craig, Reasonable Faith (2008)',
    ]
  },
  {
    id: 'maydole',
    slug: 'maydole',
    name: "Maydole's Modal Perfection Argument",
    category: 'ontological',
    shortDescription: 'A strengthened ontological argument that systematically proves the logical compatibility of all perfections, establishing that a perfect being is possible — and therefore actual.',
    historicalBackground: `Robert Maydole, a contemporary philosopher, developed the Modal Perfection Argument as a strengthened version of Plantinga's Modal Ontological Argument. Published in "The Modal Perfection Argument" (2009), Maydole's contribution is to provide a rigorous proof of the key premise that Plantinga left as an intuition — namely, that the concept of a perfect being is logically possible. Maydole does this through a systematic analysis showing that the properties constituting perfection (maximal power, knowledge, goodness) are logically compatible, drawing on Leibniz's earlier work on the compatibility of perfections.`,
    premises: [
      {
        id: 'maydole-p1',
        text: 'If it is possible that a perfect being exists, then a perfect being exists.',
        defense: 'This follows from the logic of necessary existence in S5 modal logic. A perfect being, by definition, would exist necessarily (in every possible world). In S5, if it is possible that something is necessary, then it is necessary (and therefore actual). So if a perfect being is merely possible, it is actual. This is the same logical principle underlying Plantinga\'s argument, but Maydole strengthens the justification for the possibility premise.',
        sources: ['Maydole, "The Modal Perfection Argument" (2009)', 'Standard modal logic (S5)']
      },
      {
        id: 'maydole-p2',
        text: 'A perfect being is possible — no logical contradiction can be derived from the concept of a being possessing all perfections.',
        defense: 'Maydole strengthens this premise by providing a systematic analysis proving that the properties constituting perfection (maximal power, maximal knowledge, maximal goodness) are logically compatible. Each perfection is a simple, positive, unlimited quality. Drawing on Leibniz\'s proof in "That a Most Perfect Being Exists" (1676), contradictions arise only between positive and negative properties, or between limited properties. Since perfections are all positive and unlimited, they cannot contradict each other. Therefore, the concept of a being with all perfections is logically coherent.',
        sources: ['Maydole, "The Modal Perfection Argument" (2009)', 'Leibniz, "That a Most Perfect Being Exists" (1676)']
      }
    ],
    conclusion: 'Therefore, a perfect being (God) exists.',
    proponents: [
      { name: 'Robert Maydole', era: 'Contemporary' },
    ],
    objections: [
      {
        id: 'maydole-obj1',
        title: 'The argument reduces to Plantinga\'s',
        description: 'If Maydole\'s argument shares the same logical form as Plantinga\'s, it doesn\'t add anything genuinely new — it just repackages the same reasoning.',
        response: 'Maydole\'s contribution is not in the logical form (which is indeed similar to Plantinga\'s) but in the defense of the possibility premise. While Plantinga appeals to intuition ("the premise seems true"), Maydole provides a rigorous, step-by-step proof that perfection is logically possible, drawing on Leibniz\'s analysis of the compatibility of simple, positive properties. This significantly strengthens the argument because the possibility premise is the point at which most critics attack.',
        sources: ['Maydole, "The Modal Perfection Argument" (2009)']
      },
      {
        id: 'maydole-obj2',
        title: 'Some perfections may be incompatible',
        description: 'Perhaps certain perfections, when combined, produce contradictions — e.g., perfect justice and perfect mercy may conflict, or omniscience and omnipotence may create paradoxes.',
        response: 'The apparent conflicts between divine attributes (justice vs. mercy, omniscience vs. omnipotence) arise from our limited human understanding of these attributes, not from genuine logical contradictions. Systematic theology has long shown how these attributes are harmonized in God\'s nature. More technically, Leibniz\'s proof operates at the level of simple, positive, unlimited perfections — and shows that no contradiction can arise among qualities that are all positive and unlimited. The "paradoxes" (e.g., "a stone too heavy to lift") involve logical contradictions in the task description, not in omnipotence itself.',
        sources: ['Leibniz, "That a Most Perfect Being Exists" (1676)', 'Maydole, "The Modal Perfection Argument" (2009)']
      }
    ],
    significance: 'Maydole\'s argument addresses the primary weakness of Plantinga\'s version — the undefended possibility premise — by providing a rigorous proof of the logical compatibility of all perfections. This makes the Modal Perfection Argument arguably the most formally secure version of the ontological argument.',
    relatedArguments: ['plantinga', 'anselm', 'descartes', 'godel'],
    keySources: [
      'Robert Maydole, "The Modal Perfection Argument" (2009)',
      'Gottfried Wilhelm Leibniz, "That a Most Perfect Being Exists" (1676)',
      'Alvin Plantinga, The Nature of Necessity (1974)',
    ]
  },
  {
    id: 'godel',
    slug: 'godel',
    name: "Gödel's Ontological Proof",
    category: 'ontological',
    shortDescription: 'A rigorous formal proof by one of history\'s greatest logicians, using modal logic and the theory of positive properties — verified valid by computer in 2013.',
    historicalBackground: `Kurt Gödel (1906–1978), widely regarded as the greatest logician since Aristotle, developed a formal ontological proof using higher-order modal logic and the concept of "positive properties." Gödel worked on the proof throughout the 1940s–1970s but was reluctant to publish it, fearing it would be seen as showing he "believed in God" rather than appreciated as a logical exercise. The proof circulated informally before his death and was published posthumously. In 2013, Christoph Benzmüller and Bruno Woltzenlogel Paleo used automated theorem provers to formally verify that Gödel's axioms do indeed entail the conclusion — the logical structure is valid. This made international headlines as a computer-verified proof of God's existence.`,
    premises: [
      {
        id: 'godel-p1',
        text: 'A property is "positive" if and only if its negation is not positive. Any property entailed by a positive property is itself positive.',
        defense: 'Gödel uses "positive" in a value-theoretic sense: positive properties are those that contribute to perfection, greatness, or goodness. The negation of a positive property (e.g., "not-omniscient") is negative. And if a positive property entails another property (e.g., omniscience entails knowing contingent truths), then that entailed property is also positive. These axioms about positive properties are the foundation of the formal system.',
        sources: ['Gödel, Ontological Proof (published posthumously)', 'Sobel, Logic and Theism (2004)']
      },
      {
        id: 'godel-p2',
        text: 'The property of being God-like is positive, where "God-like" means possessing all positive properties.',
        defense: 'Being God-like is having every positive property. Since each positive property contributes to perfection, having all of them is itself positive — it represents the maximum of perfection. This is analogous to Anselm\'s "that than which nothing greater can be conceived" and Descartes\' "supremely perfect being," but formalized in terms of positive property theory.',
        sources: ['Gödel, Ontological Proof', 'Anderson, "Some Emendations of Gödel\'s Ontological Proof" (1990)']
      },
      {
        id: 'godel-p3',
        text: 'Necessarily, if something is God-like, it possesses the property of necessary existence (existing in every possible world).',
        defense: 'Necessary existence is a positive property (its negation, contingent existence or non-existence, is negative). Therefore, any God-like being — which by definition has all positive properties — must have necessary existence. A God-like being that existed only contingently would lack a positive property and thus would not be truly God-like.',
        sources: ['Gödel, Ontological Proof']
      },
      {
        id: 'godel-p4',
        text: 'The property of being God-like is possibly exemplified (it is possible that a God-like being exists).',
        defense: 'Since all positive properties are compatible with one another (by the axioms about positive properties), and being God-like means having all positive properties, the concept of a God-like being is logically consistent. A logically consistent concept is possibly exemplified. This step was verified by the automated theorem provers used by Benzmüller and Paleo.',
        sources: ['Benzmüller & Paleo, "Formalization, Mechanization and Automation of Gödel\'s Proof of God\'s Existence" (2013)']
      }
    ],
    conclusion: 'Therefore, necessarily, a God-like being exists — a being possessing all positive properties, including necessary existence.',
    proponents: [
      { name: 'Kurt Gödel', era: '20th century' },
      { name: 'C. Anthony Anderson', era: 'Contemporary' },
      { name: 'Christoph Benzmüller', era: 'Contemporary' },
    ],
    objections: [
      {
        id: 'godel-obj1',
        title: 'The axioms about positive properties are questionable',
        description: 'The entire proof rests on Gödel\'s axioms about "positive properties." But these axioms are not self-evident — they are stipulations that may not correspond to reality. The concept of "positive" is unclear.',
        response: 'Gödel\'s axioms about positive properties are not arbitrary — they formalize a long tradition in philosophy of religion going back to Leibniz and Anselm. "Positive" can be understood as "perfection-making" or "purely good." The axioms are designed to capture our intuitive understanding of what makes a property great-making. While the axioms are debatable, they are coherent and defensible. The formal verification by Benzmüller and Paleo showed that the axioms are at least logically consistent — they do not lead to contradiction, and the conclusion follows validly.',
        sources: ['Gödel, Ontological Proof', 'Benzmüller & Paleo (2013)', 'Anderson, "Some Emendations of Gödel\'s Ontological Proof" (1990)']
      },
      {
        id: 'godel-obj2',
        title: 'Modal collapse: everything becomes necessary',
        description: 'J. Howard Sobel (2004) showed that Gödel\'s original axioms lead to "modal collapse" — every true proposition becomes necessarily true, which is absurd. This undermines the proof.',
        response: 'C. Anthony Anderson (1990) and later Dana Scott proposed emendations to Gödel\'s axioms that avoid modal collapse while preserving the validity of the proof. Anderson\'s version modifies the definition of "God-like" to avoid the problematic entailment. The emended versions have also been formally verified. The modal collapse objection applies to the original formulation, not to the corrected versions that are now standard.',
        sources: ['Sobel, Logic and Theism (2004)', 'Anderson, "Some Emendations of Gödel\'s Ontological Proof" (1990)']
      }
    ],
    significance: 'Gödel\'s Ontological Proof is remarkable for being formalized in higher-order modal logic and verified by automated theorem provers in 2013. This verification demonstrated that the logical structure is valid — the conclusion follows from the axioms. While the debate centers on whether the axioms are true, the formal rigor of the proof is unmatched among ontological arguments. It represents the culmination of the ontological argument tradition from Anselm through Leibniz, Descartes, and Plantinga.',
    relatedArguments: ['plantinga', 'anselm', 'descartes', 'maydole'],
    keySources: [
      'Kurt Gödel, Ontological Proof (published posthumously)',
      'C. Anthony Anderson, "Some Emendations of Gödel\'s Ontological Proof" (1990)',
      'Christoph Benzmüller & Bruno Woltzenlogel Paleo, "Formalization, Mechanization and Automation of Gödel\'s Proof of God\'s Existence" (2013)',
      'J. Howard Sobel, Logic and Theism (2004)',
      'Graham Oppy, Ontological Arguments and Belief in God (1995)',
    ]
  }
];
