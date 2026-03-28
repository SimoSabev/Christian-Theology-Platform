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

export const anselmDebate: Debate = {
  id: 'anselm-debate',
  argumentId: 'anselm',
  title: "Anselm's Ontological Argument",
  forLabel: 'Theist',
  againstLabel: 'Atheist',
  rounds: [
    {
      round: 1,
      forSide: {
        claim: 'God is defined as "that than which nothing greater can be conceived." Even the atheist understands this concept. Now, it is greater to exist in reality than to exist only in the understanding. If God exists only in the understanding, a greater being can be conceived — one that also exists in reality. But this contradicts the definition. Therefore, God must exist in reality.',
        evidence: [
          { text: 'The definition captures what theists mean by "God" — a being of unsurpassable greatness. Even atheists understand this concept.', strength: 'strong', source: 'Anselm, Proslogion ch. 2 (1078)' },
          { text: 'Real existence adds causal power and actuality — a real God can create and redeem; a merely conceived God cannot.', strength: 'strong', source: 'Anselm, Proslogion ch. 2' },
          { text: 'The argument is a reductio ad absurdum: denying God\'s real existence contradicts the very concept of maximal greatness.', strength: 'strong', source: 'Anselm, Proslogion ch. 2' },
        ]
      },
      againstSide: {
        claim: 'Gaunilo\'s "Lost Island" parody: We can define "the greatest conceivable island." By the same logic, it must exist in reality. But this is obviously absurd. Therefore the argument form is invalid — you can define anything into existence.',
        evidence: [
          { text: 'The same reasoning could "prove" the existence of a perfect island, a perfect pizza, or any perfect thing.', strength: 'moderate', source: 'Gaunilo, On Behalf of the Fool (1078)' },
          { text: 'If the argument form were valid, it would generate an absurd number of "necessary" beings and objects.', strength: 'moderate', source: 'Gaunilo, On Behalf of the Fool' },
        ]
      }
    },
    {
      round: 2,
      forSide: {
        claim: 'Gaunilo\'s parody fails because islands are contingent, material objects with no intrinsic maximum of perfection. You can always add another palm tree or lagoon. But the properties of a maximally great being — omnipotence, omniscience, moral perfection — have logical maxima. You cannot be "more omnipotent." The argument applies only to the unique concept of maximal greatness.',
        evidence: [
          { text: '"Greatest island" is incoherent — island-perfection has no logical maximum. You can always imagine a better island.', strength: 'strong', source: 'Anselm, Reply to Gaunilo' },
          { text: 'Omnipotence, omniscience, and moral perfection are properties with logical maxima — they are intrinsically maximum-able.', strength: 'strong', source: 'Plantinga, The Nature of Necessity (1974)' },
          { text: 'The argument is specifically about "that than which nothing greater can be conceived" — a unique concept, not any arbitrary "greatest X."', strength: 'strong', source: 'Anselm, Reply to Gaunilo' },
        ]
      },
      againstSide: {
        claim: 'Kant\'s decisive objection: "Existence is not a real predicate." Saying God exists adds nothing to the concept of God. A hundred real thalers do not contain the least coin more than a hundred possible thalers. Existence cannot be a "great-making" property.',
        evidence: [
          { text: 'Existence does not add a new property to a concept — it merely posits the concept in reality.', strength: 'strong', source: 'Kant, Critique of Pure Reason (1781)' },
          { text: 'If existence is not a predicate, the claim "it is greater to exist in reality" is meaningless.', strength: 'moderate', source: 'Kant, Critique of Pure Reason' },
        ]
      }
    },
    {
      round: 3,
      forSide: {
        claim: 'Kant\'s objection has force against the classical version, but Plantinga\'s modal reformulation avoids it entirely. The key property is not bare "existence" but "necessary existence" — existing in every possible world. Necessary existence is clearly a meaningful, great-making property. A being that necessarily exists is greater than one that merely contingently exists.',
        evidence: [
          { text: 'The modal version shifts from "existence" to "necessary existence" — which is uncontroversially a meaningful property.', strength: 'strong', source: 'Plantinga, The Nature of Necessity (1974)' },
          { text: 'Even granting Kant\'s point, a real $100 can buy things while a merely possible $100 cannot — existence does add something.', strength: 'moderate', source: 'Philosophical analysis' },
          { text: 'Norman Malcolm and Hartshorne argued Proslogion ch. 3 already contains a distinct argument based on necessary existence.', strength: 'moderate', source: 'Malcolm, "Anselm\'s Ontological Arguments" (1960)' },
        ]
      },
      againstSide: {
        claim: 'The argument merely draws out what is hidden in the definition — it "defines God into existence" through a clever logical trick. No amount of conceptual analysis can establish real-world existence.',
        evidence: [
          { text: 'You cannot bridge the gap between concepts and reality through pure logic alone.', strength: 'moderate', source: 'Hume, empiricist tradition' },
          { text: 'The argument is clever but ultimately circular — the conclusion is smuggled into the premises.', strength: 'contested', source: 'Common philosophical objection' },
        ]
      }
    },
    {
      round: 4,
      forSide: {
        claim: 'The argument does not "define" God into existence any more than geometry defines triangles into having 180° angle sums. It draws out what is logically entailed by the concept. If the concept of maximal greatness is coherent, its instantiation follows necessarily. The objector must show the concept is incoherent — which has never been demonstrated.',
        evidence: [
          { text: 'The argument is a valid deduction, not a definition — it shows what follows from a coherent concept.', strength: 'strong', source: 'Plantinga, God, Freedom, and Evil (1977)' },
          { text: 'The burden of proof lies with the objector to demonstrate an incoherence in the concept of maximal greatness.', strength: 'strong', source: 'Plantinga 1977' },
          { text: 'Gödel\'s formal version was verified by computer (Benzmüller & Paleo, 2013) — the logic is valid.', strength: 'strong', source: 'Benzmüller & Paleo 2013' },
        ]
      },
      againstSide: {
        claim: 'At best, the ontological argument shows that belief in God is rational if its key premise is accepted — but it does not compel assent. The possibility premise remains genuinely contestable.',
        evidence: [
          { text: 'Even Plantinga admits the argument doesn\'t conclusively prove God\'s existence — its soundness depends on the possibility premise.', strength: 'strong', source: 'Plantinga 1977' },
          { text: 'The argument establishes rational permissibility of theism, not its demonstrative proof.', strength: 'moderate', source: 'Philosophical consensus' },
        ]
      }
    }
  ]
};

export const plantingaDebate: Debate = {
  id: 'plantinga-debate',
  argumentId: 'plantinga-modal',
  title: "Plantinga's Modal Ontological Argument",
  forLabel: 'Theist',
  againstLabel: 'Atheist',
  rounds: [
    {
      round: 1,
      forSide: {
        claim: 'It is possible that a maximally great being (MGB) exists — a being with omnipotence, omniscience, and moral perfection in every possible world. In S5 modal logic, if an MGB is possible, then it exists in some possible world. But maximal greatness entails existence in every possible world. Therefore, an MGB exists in the actual world.',
        evidence: [
          { text: 'The concept of an MGB is coherent — no logical contradiction in omnipotence, omniscience, and moral perfection.', strength: 'strong', source: 'Plantinga, The Nature of Necessity (1974)' },
          { text: 'The argument is formally valid in S5 modal logic, accepted by most logicians.', strength: 'strong', source: 'Standard modal logic' },
          { text: 'Plantinga: "The key premise is not obviously false, and it seems to me to be true."', strength: 'moderate', source: 'Plantinga, God, Freedom, and Evil (1977)' },
        ]
      },
      againstSide: {
        claim: 'The key premise — "it is possible that an MGB exists" — is question-begging. In S5, the possibility of a necessary being entails its actual existence. So the premise already assumes the conclusion.',
        evidence: [
          { text: 'In S5 modal logic, ◇□P → □P. So "possibly, God necessarily exists" already means "God necessarily exists."', strength: 'strong', source: 'Modal logic' },
          { text: 'The premise does the heavy lifting — if you grant it, you\'ve already conceded the conclusion.', strength: 'moderate', source: 'Common philosophical objection' },
        ]
      }
    },
    {
      round: 2,
      forSide: {
        claim: 'The premise is not question-begging because its entailment of the conclusion is not obvious without S5 knowledge. The premise is independently supported: the concept is coherent, no contradiction has been demonstrated, and we have positive reasons (other theistic arguments) for thinking an MGB is possible.',
        evidence: [
          { text: 'The logical connection between the premise and conclusion requires specialized knowledge of S5 — it is not obvious.', strength: 'moderate', source: 'Plantinga, God, Freedom, and Evil (1977)' },
          { text: 'No one has demonstrated any incoherence in the concept of maximal greatness.', strength: 'strong', source: 'Plantinga 1974' },
          { text: 'The burden of proof lies with the objector to show the concept contains a hidden contradiction.', strength: 'strong', source: 'Plantinga 1974' },
        ]
      },
      againstSide: {
        claim: 'The reverse argument is equally valid: "It is possible that no MGB exists" → "Necessarily, no MGB exists." The two premises are symmetrical, so neither argument succeeds over the other.',
        evidence: [
          { text: 'If ◇□P → □P, then equally ◇□¬P → □¬P. Both directions are logically valid.', strength: 'strong', source: 'Modal logic' },
          { text: 'Since neither premise is more justified than the other, the argument reaches a stalemate.', strength: 'moderate', source: 'Oppy, Ontological Arguments and Belief in God (1995)' },
        ]
      }
    },
    {
      round: 3,
      forSide: {
        claim: 'The premises are NOT symmetrical in plausibility. "It is possible that an MGB exists" asserts a modest claim — conceptual coherence. "It is possible that no MGB exists" asserts something much stronger — that maximal greatness is impossible, that there is a hidden logical contradiction. We have positive reasons for the first; the second is a very strong unsupported metaphysical claim.',
        evidence: [
          { text: 'Conceptual coherence is evidence of possibility — the concept of an MGB passes every test of coherence.', strength: 'strong', source: 'Plantinga 1974' },
          { text: 'Denying the premise requires proving impossibility — a much harder task than showing possibility.', strength: 'strong', source: 'Craig, Reasonable Faith (2008)' },
          { text: 'So-called "paradoxes of omnipotence" are pseudo-paradoxes involving logically contradictory task descriptions, not genuine contradictions in omnipotence.', strength: 'strong', source: 'Plantinga 1974' },
        ]
      },
      againstSide: {
        claim: 'There can be no experiential or empirical verification of a "maximally great being." The concept is purely speculative — we have no way to determine whether such a being is genuinely possible or subtly incoherent.',
        evidence: [
          { text: 'We have no experience of necessary beings — all known existence is contingent.', strength: 'moderate', source: 'Empiricist tradition' },
          { text: 'Conceivability may not be a reliable guide to genuine metaphysical possibility.', strength: 'moderate', source: 'Philosophical debate on possibility' },
        ]
      }
    },
    {
      round: 4,
      forSide: {
        claim: 'Even if the argument does not conclusively prove God\'s existence, it demonstrates that theistic belief is rational. If the possibility premise is even slightly more plausible than its denial — and it is, given its conceptual coherence and the failure of all attempts to find a contradiction — then belief in God is warranted.',
        evidence: [
          { text: 'Plantinga: "This argument provides a good ground for rational belief in God."', strength: 'strong', source: 'Plantinga, God, Freedom, and Evil (1977)' },
          { text: 'The argument is part of a cumulative case — together with cosmological, teleological, and moral arguments, theism is well-supported.', strength: 'strong', source: 'Craig, Reasonable Faith (2008)' },
          { text: 'There can be only one MGB — maximal greatness logically entails uniqueness (two omnipotent beings is incoherent).', strength: 'strong', source: 'Plantinga 1974' },
        ]
      },
      againstSide: {
        claim: 'The argument is an interesting exercise in modal logic but ultimately demonstrates only a conditional: IF the possibility premise is true, THEN God exists. The real question — whether the premise is true — remains unresolved.',
        evidence: [
          { text: 'The argument\'s soundness depends entirely on the contested possibility premise.', strength: 'strong', source: 'Oppy 1995' },
          { text: 'As a standalone argument, it does not compel belief — but it raises the status of theism as a rational position.', strength: 'moderate', source: 'Philosophical consensus' },
        ]
      }
    }
  ]
};

export const allDebates: Record<string, Debate> = {
  kalam: kalamDebate,
  anselm: anselmDebate,
  plantinga: plantingaDebate,
};
