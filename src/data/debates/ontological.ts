import { Debate } from '../arguments/types';

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

export const descartesDebate: Debate = {
  id: 'descartes-debate',
  argumentId: 'descartes',
  title: "Descartes' Ontological Argument",
  forLabel: 'Cartesian',
  againstLabel: 'Skeptic',
  rounds: [
    {
      round: 1,
      forSide: {
        claim: 'I possess a clear and distinct idea of a supremely perfect being. Existence is itself a perfection — a being lacking existence would not be supremely perfect, just as a triangle lacking three angles would not be a triangle. Therefore, existence belongs to the essence of a supremely perfect being, and such a being necessarily exists.',
        evidence: [
          { text: 'The idea of a supremely perfect being is clear, distinct, and innate — as reliable a basis for reasoning as our idea of a triangle', strength: 'strong', source: 'Descartes, Meditations on First Philosophy V, 1641' },
          { text: '"I cannot conceive of God except as existing, just as I cannot conceive of a mountain without a valley"', strength: 'strong', source: 'Descartes, Meditations V, 1641' },
        ]
      },
      againstSide: {
        claim: 'Kant\'s objection undercuts the entire analogy: existence is not a predicate at all, so it cannot be a "perfection" alongside omnipotence or omniscience. Saying a triangle "has" three angles describes its internal structure; saying something "exists" merely posits that the concept has an instance in reality — a wholly different logical operation.',
        evidence: [
          { text: 'A hundred real thalers contain not the least coin more than a hundred merely possible thalers — existence adds nothing to the concept', strength: 'strong', source: 'Kant, Critique of Pure Reason, 1781' },
          { text: 'Predicates describe what a thing is; "exists" only asserts that the concept is instantiated, so it cannot function as a perfection-making predicate', strength: 'moderate', source: 'Kant, Critique of Pure Reason, A598/B626' },
        ]
      }
    },
    {
      round: 2,
      forSide: {
        claim: 'Even granting Kant\'s general point about bare existence, the mountain-valley analogy survives on different grounds: it is not that existence is smuggled in as an extra predicate, but that the very essence of a supremely perfect being logically entails its instantiation, the way the essence of "triangle" entails "three-angled." The objection that a concept and its instantiation are different orders of thing does not show that some special concepts — like maximal perfection — cannot entail their own instantiation.',
        evidence: [
          { text: 'Descartes\' argument is that non-existence would be a *lack* incompatible with supreme perfection — a conceptual, not merely predicative, entailment', strength: 'moderate', source: 'Descartes, Meditations V, 1641' },
          { text: 'Later defenders (Leibniz) reframe the argument to sidestep the predicate objection by focusing on the compossibility, and hence coherent instantiability, of all perfections', strength: 'moderate', source: 'Leibniz, "That a Most Perfect Being Exists," 1676' },
        ]
      },
      againstSide: {
        claim: 'Even setting Kant aside, the argument assumes without proof that the concept of "a being with all perfections" is coherent — a subtle contradiction among the perfections (for instance between perfect justice and perfect mercy, or between different modes of omnipotence) would collapse the whole argument, since nothing follows validly from an incoherent concept.',
        evidence: [
          { text: 'Any conceptual analysis argument is only as strong as its assurance that the defining concept is not secretly self-contradictory', strength: 'moderate', source: 'Standard objection to a priori perfection arguments' },
        ]
      }
    },
    {
      round: 3,
      forSide: {
        claim: 'Leibniz closed exactly this gap in 1676 with a rigorous proof that all perfections are logically compatible: a perfection is, by definition, a simple, positive, unlimited quality. Contradictions can only arise between a positive quality and its negation, or between two limited (and hence potentially conflicting) qualities. Since perfections are unlimited and purely positive, no two of them can conflict — the concept of a being possessing all perfections is therefore demonstrably coherent, not merely assumed to be.',
        evidence: [
          { text: 'Perfections are simple, positive, unlimited qualities; contradiction requires a negative or limited element, which perfections by definition lack', strength: 'strong', source: 'Leibniz, "That a Most Perfect Being Exists," 1676' },
          { text: 'This proof of possibility, not merely assumed coherence, directly answers the "hidden contradiction" objection', strength: 'strong', source: 'Leibniz 1676' },
        ]
      },
      againstSide: {
        claim: 'Leibniz\'s proof assumes that apparent tensions among divine attributes (e.g., justice and mercy, or the various "omni-" attributes when applied to concrete situations) are merely apparent and resolvable at the level of "simple positive qualities" in the abstract — but real theological and philosophical disputes about, say, whether omniscience of future free choices is compatible with libertarian freedom, or whether omnipotence permits paradoxical tasks, suggest the compatibility is not as clean as the abstract proof implies.',
        evidence: [
          { text: 'Foreknowledge-freedom debates and omnipotence paradoxes continue to occupy philosophers of religion, suggesting real tension beneath the abstract compatibility proof', strength: 'moderate', source: 'Ongoing philosophy of religion literature on the coherence of theism' },
        ]
      }
    },
    {
      round: 4,
      forSide: {
        claim: 'These specific tensions (foreknowledge/freedom, omnipotence paradoxes) have each received serious, worked-out theological and philosophical resolutions — for instance, the classical claim that God\'s knowledge of future free acts is not causally determining but simply comprehensive, or that omnipotence properly means "power to do all that is logically possible," not "power to perform self-contradictory tasks." None of these resolutions require abandoning Leibniz\'s abstract compatibility proof; they merely apply it carefully to particular cases. The concept of a supremely perfect being remains coherent, and by Descartes\' and Leibniz\'s reasoning, coherent maximal perfection is instantiated.',
        evidence: [
          { text: 'Omnipotence, properly defined as the power to do what is logically possible, is not threatened by "paradox of the stone" style objections, which involve self-contradictory task descriptions rather than genuine limits on power', strength: 'strong', source: 'Standard reply in philosophical theology, echoed across the ontological argument tradition' },
          { text: 'Classical theism has long distinguished God\'s timeless comprehensive knowledge from causal determination of free acts, addressing the foreknowledge tension without abandoning perfect-being coherence', strength: 'moderate', source: 'Boethian tradition in philosophical theology' },
        ]
      },
      againstSide: {
        claim: 'Granting full coherence, the argument still proves, at most, that a concept possessing every logically compossible perfection is instantiated — it says nothing about whether this being is triune, incarnate, or the specific God revealed in the Gospels. The metaphysical conclusion, however successfully defended, remains many steps short of Christian theism proper.',
        evidence: [
          { text: 'A priori perfect-being arguments establish, at most, a generic maximally perfect being, not the specifically Trinitarian and incarnational claims of Christian doctrine', strength: 'moderate', source: 'Standard "gap problem" in natural theology' },
        ]
      }
    }
  ]
};

export const plantingaDebate: Debate = {
  id: 'plantinga-debate',
  argumentId: 'plantinga',
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

export const maydoleDebate: Debate = {
  id: 'maydole-debate',
  argumentId: 'maydole',
  title: "Maydole's Modal Perfection Argument",
  forLabel: 'Theist',
  againstLabel: 'Skeptic',
  rounds: [
    {
      round: 1,
      forSide: {
        claim: 'If it is possible that a perfect being exists, then a perfect being exists in the actual world (by S5 modal logic, applied to necessary existence). A perfect being is possible, because Maydole provides a systematic proof — building on Leibniz — that all perfections (maximal power, knowledge, and goodness) are logically compatible simple, positive, unlimited qualities, incapable of contradicting one another.',
        evidence: [
          { text: 'The logical move from "possibly necessary" to "necessary" is the same S5 principle underlying Plantinga\'s argument, but here backed by an explicit compatibility proof for the possibility premise', strength: 'strong', source: 'Maydole, "The Modal Perfection Argument," 2009' },
          { text: 'Perfections, being simple, positive, and unlimited, cannot generate the kind of contradiction that would render the concept of a perfect being incoherent', strength: 'strong', source: 'Leibniz, "That a Most Perfect Being Exists," 1676; Maydole 2009' },
        ]
      },
      againstSide: {
        claim: 'This simply repackages Plantinga\'s argument with an extra layer of technical apparatus — it inherits the same "symmetry" problem: one could equally argue systematically that the "compossibility" of perfections has never been proven in full generality, only asserted for an idealized class of "simple positive properties" that may not include all attributes actually claimed for God (e.g., moral perfection under real, competing obligations).',
        evidence: [
          { text: 'Formal compossibility proofs for abstract "positive properties" may not transfer cleanly to substantive theological attributes like providence, justice, and mercy as actually deployed in real ethical dilemmas', strength: 'moderate', source: 'Standard objection to formal perfect-being theology' },
        ]
      }
    },
    {
      round: 2,
      forSide: {
        claim: 'Maydole\'s contribution is precisely to move the argument beyond bare assertion: unlike Plantinga, who treats possibility as a brute intuition, Maydole derives it from the more basic and independently defensible Leibnizian axiom that positive, unlimited properties cannot conflict. This does not require settling every applied ethical dilemma in advance — it only requires that the abstract attributes (omnipotence, omniscience, moral perfection understood as the property of never doing wrong) are not, at the level of pure logical form, mutually contradictory.',
        evidence: [
          { text: 'The proof operates at the level of property-theoretic logical form, not at the level of resolving concrete ethical dilemmas, which is a separate (and separately addressed) project in theology proper', strength: 'strong', source: 'Maydole, "The Modal Perfection Argument," 2009' },
        ]
      },
      againstSide: {
        claim: 'But if the proof only operates on bare logical form and brackets substantive content, it risks proving something too thin to be theologically interesting — a merely formally-consistent "God-concept" that may still turn out, once fleshed out with the concrete content theists actually care about (a providential, personal, morally engaged being), to harbor real tensions the abstract proof cannot detect.',
        evidence: [
          { text: 'Formal consistency at a high level of abstraction is compatible with substantive incoherence once a concept is given full theological content', strength: 'moderate', source: 'Standard objection distinguishing formal from material coherence' },
        ]
      }
    },
    {
      round: 3,
      forSide: {
        claim: 'This is a general skeptical worry that could be raised against any formal argument whatsoever, and it proves too much: by the same reasoning, any mathematical proof about an abstract structure could be doubted on the grounds that the structure, once "fleshed out," might harbor undetected inconsistency. In practice, systematic theology has spent centuries working out exactly this "fleshing out" (Aquinas\'s treatment of the divine attributes, for instance) without uncovering the contradiction the objection merely gestures at without specifying.',
        evidence: [
          { text: 'Aquinas\'s systematic treatment of the divine attributes (Summa Theologiae I, qq. 3-26) works through precisely the material content (providence, justice, mercy, omniscience) the objection worries about, without generating contradiction', strength: 'strong', source: 'Aquinas, Summa Theologiae I, qq. 3-26' },
          { text: 'An unspecified worry about possible hidden contradiction is not itself evidence of contradiction; the burden remains on the objector to produce one', strength: 'strong', source: 'Standard dialectical principle, applied throughout the ontological argument tradition' },
        ]
      },
      againstSide: {
        claim: 'Granting all this, the argument — like its predecessors — proves at most an abstract perfect being satisfying a formal logical schema. Nothing in the modal-logical apparatus itself explains why this being would create a physical universe, reveal itself in history, or become incarnate, all central claims of the very religion (Christianity) the argument is typically enlisted to support.',
        evidence: [
          { text: 'Modal ontological arguments, however successful on their own terms, are silent on the specific historical and revelatory claims of any particular religious tradition', strength: 'moderate', source: 'Standard "gap problem" in natural theology' },
        ]
      }
    },
    {
      round: 4,
      forSide: {
        claim: 'This is a fair limitation, but not a defect unique to Maydole\'s argument — no single argument in natural theology is meant to establish the entire content of revealed religion single-handedly. The Modal Perfection Argument\'s task is narrower and, on its own terms, well-executed: to show that a maximally perfect being is not merely assumed but demonstrably possible, and therefore actual. Historical arguments (the Resurrection, fulfilled prophecy, apostolic testimony) then carry the further, separate burden of identifying this necessarily-existing perfect being with the God of Christian revelation.',
        evidence: [
          { text: 'Classical apologetics has always distinguished the project of natural theology (arguing for a perfect necessary being) from the project of Christian evidences (identifying that being with the God of Scripture)', strength: 'strong', source: 'Craig, Reasonable Faith, 2008' },
        ]
      },
      againstSide: {
        claim: 'Accepted as a division of labor, but this concession significantly limits what the Modal Perfection Argument alone can be said to establish — at most a philosophically-defined "perfect being," leaving the specifically Christian identification entirely to other, independent lines of argument.',
        evidence: [
          { text: 'The argument\'s conclusion, taken in isolation, underdetermines any particular religious tradition\'s account of God', strength: 'moderate', source: 'Standard pluralism objection to natural theology' },
        ]
      }
    }
  ]
};

export const godelDebate: Debate = {
  id: 'godel-debate',
  argumentId: 'godel',
  title: "Gödel's Ontological Proof",
  forLabel: 'Logician',
  againstLabel: 'Critic',
  rounds: [
    {
      round: 1,
      forSide: {
        claim: 'Using a rigorous axiomatic system of "positive properties" (properties that are perfection-making, whose negations are not positive, and which are closed under entailment), Gödel proves that a "God-like" being — one possessing all positive properties — necessarily exists, since being God-like is itself positive, necessary existence is positive, and the concept is logically consistent and hence possibly exemplified.',
        evidence: [
          { text: 'The proof is formalized in higher-order modal logic with explicit axioms about positive properties, not left as informal intuition', strength: 'strong', source: 'Gödel, Ontological Proof, published posthumously' },
          { text: 'In 2013, automated theorem provers formally verified that Gödel\'s axioms validly entail the conclusion — the logical structure is sound given the axioms', strength: 'strong', source: 'Benzmüller & Paleo, "Formalization, Mechanization and Automation of Gödel\'s Proof of God\'s Existence," 2013' },
        ]
      },
      againstSide: {
        claim: 'J. Howard Sobel demonstrated in 2004 that Gödel\'s original axioms entail "modal collapse" — the conclusion that every true proposition is necessarily true, collapsing the distinction between the contingent and the necessary. This absurd result shows something is wrong with the axioms themselves, regardless of the proof\'s formal validity.',
        evidence: [
          { text: 'Gödel\'s axioms, as originally stated, entail that every actual truth is a necessary truth — an unacceptable result for any coherent modal system', strength: 'strong', source: 'Sobel, Logic and Theism, 2004' },
        ]
      }
    },
    {
      round: 2,
      forSide: {
        claim: 'Sobel\'s modal collapse objection targets Gödel\'s original, unrefined axiom set — it does not touch the emended versions developed by C. Anthony Anderson (1990) and later Dana Scott, which modify the definition of "God-like" specifically to block the collapse while preserving the argument\'s validity. These emended versions have themselves been formally verified by computer.',
        evidence: [
          { text: 'Anderson\'s 1990 emendation redefines the key entailment relation among positive properties to avoid the collapse, without weakening the argument\'s conclusion', strength: 'strong', source: 'Anderson, "Some Emendations of Gödel\'s Ontological Proof," 1990' },
          { text: 'Benzmüller and Paleo\'s automated verification covered both the original and the Anderson-Scott emended axiom sets, confirming the emended version avoids collapse', strength: 'strong', source: 'Benzmüller & Paleo, 2013' },
        ]
      },
      againstSide: {
        claim: 'Formal verification only confirms that the conclusion follows validly from the axioms as stated — it says nothing about whether the axioms themselves are true or even meaningful. "Positive property" is a technical primitive Gödel never fully explicated; without an independent, non-question-begging account of what makes a property "positive," the entire formal apparatus rests on an unexplained foundation.',
        evidence: [
          { text: 'Computer verification establishes validity (the conclusion follows if the premises are true), not soundness (that the premises actually are true) — a distinction critics stress repeatedly', strength: 'strong', source: 'Standard critique of automated theorem-proving results in ontological arguments' },
        ]
      }
    },
    {
      round: 3,
      forSide: {
        claim: '"Positive" need not be a mysterious primitive: Gödel and his commentators explicate it value-theoretically as "perfection-making" or "purely good, entailing no defect" — a concept with deep roots in the Anselm-Leibniz tradition rather than an idiosyncratic Gödelian invention. The axioms (that the negation of a positive property is not positive, and that positive properties are closed under strict entailment) are exactly the formal analogues of Leibniz\'s informal proof that perfections are simple, positive, and unlimited qualities incapable of mutual contradiction.',
        evidence: [
          { text: 'Gödel\'s notion of "positive" is explicitly continuous with Leibniz\'s 1676 analysis of perfections as simple, positive, unlimited qualities', strength: 'strong', source: 'Leibniz, "That a Most Perfect Being Exists," 1676; Gödel, Ontological Proof' },
          { text: 'The axioms are not arbitrary stipulations but formal renderings of a philosophical tradition stretching back to Anselm\'s "greatest conceivable being"', strength: 'moderate', source: 'Sobel, Logic and Theism, 2004 (presenting the historical continuity even while criticizing the proof)' },
        ]
      },
      againstSide: {
        claim: 'Even granting a value-theoretic gloss on "positive," the axioms remain substantive metaphysical claims dressed in the neutral-sounding language of formal logic — the appearance of mathematical rigor can obscure how much philosophical weight is being smuggled into premises like "necessary existence is a positive property," which is exactly the contested claim at issue in the Kantian debate over whether existence is a perfection at all.',
        evidence: [
          { text: 'The core Kantian worry about treating existence as a "great-making" predicate resurfaces inside Gödel\'s axioms in the guise of "necessary existence is positive," rather than being resolved by the formalism', strength: 'moderate', source: 'Kantian-inspired critique of Gödel\'s ontological proof' },
        ]
      }
    },
    {
      round: 4,
      forSide: {
        claim: 'The formalization\'s genuine achievement is not to settle the Kant-versus-Anselm dispute by fiat, but to show — with a rigor and precision no previous version achieved, confirmed independently by machine — that a coherent, non-collapsing axiomatic system in which necessary existence functions as a perfection is fully constructible and internally consistent. That the underlying philosophical dispute about whether existence is a genuine perfection persists is expected; what Gödel\'s proof establishes is that, granting the classical view that it is, the argument for a God-like necessary being goes through validly and without paradox.',
        evidence: [
          { text: 'The value of the formalization is precision and verified consistency, not the elimination of every prior philosophical controversy about its premises', strength: 'strong', source: 'Benzmüller & Paleo, 2013' },
          { text: 'Gödel himself, reportedly wary of the proof being read as naive apologetics, regarded it as a serious logical contribution to a centuries-old philosophical question rather than a knock-down conversion tool', strength: 'moderate', source: 'Biographical accounts of Gödel\'s reluctance to publish, cited in Sobel, Logic and Theism, 2004' },
        ]
      },
      againstSide: {
        claim: 'That concession is precisely the critic\'s point: a formally consistent, machine-checked argument that still depends on a substantive and disputed philosophical premise (that necessary existence is a perfection) proves only a conditional — IF you already accept the classical Anselmian view of existence as perfection, THEN the God-like being\'s existence follows validly. It does not independently establish that premise, and so does not settle the underlying question any more than Anselm\'s original argument did.',
        evidence: [
          { text: 'A conditional proof, however rigorously verified, is only as persuasive as its most contested premise — here, the perfection-status of necessary existence', strength: 'moderate', source: 'Oppy, Ontological Arguments and Belief in God, 1995' },
        ]
      }
    }
  ]
};

export const ontologicalDebates: Record<string, Debate> = {
  anselm: anselmDebate,
  descartes: descartesDebate,
  plantinga: plantingaDebate,
  maydole: maydoleDebate,
  godel: godelDebate,
};
