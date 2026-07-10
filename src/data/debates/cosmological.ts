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

export const leibnizDebate: Debate = {
  id: 'leibniz-debate',
  argumentId: 'leibniz',
  title: 'The Leibnizian Argument from Contingency',
  forLabel: 'Theist',
  againstLabel: 'Atheist',
  rounds: [
    {
      round: 1,
      forSide: {
        claim: 'Everything that exists has an explanation of its existence, either in the necessity of its own nature or in an external cause. This Principle of Sufficient Reason (PSR) underlies all rational inquiry — science itself presupposes that phenomena have explanations.',
        evidence: [
          { text: 'Leibniz: "Why is there something rather than nothing?" — the most fundamental question of metaphysics', strength: 'strong', source: 'Leibniz, On the Ultimate Origination of Things, 1697' },
          { text: 'Every scientific "why" question presupposes the PSR; abandoning it undermines rational inquiry itself', strength: 'strong', source: 'Pruss 2006' },
          { text: 'Richard Taylor: finding an inexplicable object (even one the size of the universe) should provoke a demand for explanation, not silence it', strength: 'moderate', source: 'Taylor, Metaphysics, 1992' },
        ]
      },
      againstSide: {
        claim: 'The Principle of Sufficient Reason is a substantive, contestable metaphysical claim, not a self-evident truth. Bertrand Russell\'s reply to Copleston stands: the universe is "just there, and that\'s all."',
        evidence: [
          { text: '"The universe is just there, and that\'s all" — brute contingency requires no further explanation', strength: 'moderate', source: 'Russell-Copleston debate, 1948' },
          { text: 'Demanding an explanation for absolutely everything, including the totality of contingent facts, may simply be an unwarranted extrapolation from explaining individual things within the universe', strength: 'moderate', source: 'Hume, Dialogues Concerning Natural Religion' },
        ]
      }
    },
    {
      round: 2,
      forSide: {
        claim: 'Treating the whole cosmos as a brute, unexplained fact is arbitrary and self-undermining. If the PSR fails for the biggest fact of all, we have no principled reason to trust it for any fact — including the reliability of our own reasoning, which itself depends on there being explanations for why our faculties are truth-tracking.',
        evidence: [
          { text: 'If the PSR can be suspended for the universe, there is no principled stopping point — any inconvenient fact could be declared "brute"', strength: 'strong', source: 'Pruss, The Principle of Sufficient Reason, 2006' },
          { text: 'A "brute fact" universe undermines confidence that our cognitive faculties, which are part of that same contingent universe, have any explanation for reliably tracking truth', strength: 'moderate', source: 'Pruss 2006' },
        ]
      },
      againstSide: {
        claim: 'Even granting that individual things need explanations, the argument commits a fallacy of composition: explaining every part of the universe does not entail that the universe as a whole needs a separate, further explanation.',
        evidence: [
          { text: 'If every member of an infinite series is explained by its predecessor, the whole series may need no additional external explanation', strength: 'moderate', source: 'Composition-fallacy objection, common in analytic philosophy' },
          { text: 'Hume: explaining each of twenty particles individually explains the whole collection of twenty particles; no further "explanation of the whole" is owed', strength: 'moderate', source: 'Hume, Dialogues Concerning Natural Religion, Part IX' },
        ]
      }
    },
    {
      round: 3,
      forSide: {
        claim: 'This is not a composition fallacy — it targets the contingency of the aggregate itself, not merely its parts. A chain of contingent IOU notes, however long, never becomes real money; likewise, an infinite series of contingent explanations never becomes a sufficient explanation for why there is a series at all rather than no series.',
        evidence: [
          { text: 'Each contingent being explains the next, but the entire chain remains contingent and collectively still lacks a reason for existing rather than not', strength: 'strong', source: 'Rowe, The Cosmological Argument, 1975' },
          { text: 'A "sum of contingent IOU notes does not produce real money" — the analogy shows why aggregation cannot manufacture necessity', strength: 'moderate', source: 'Pruss & Gale, "A New Cosmological Argument," 1999' },
        ]
      },
      againstSide: {
        claim: 'Perhaps the universe itself, or its fundamental laws, exist necessarily — with no further external ground needed. Necessity need not require a personal being.',
        evidence: [
          { text: 'Spinoza\'s view: the one substance (identified with the universe/nature) exists necessarily, by the necessity of its own nature', strength: 'moderate', source: 'Spinoza, Ethics, 1677' },
          { text: 'If the laws of physics are as fixed and unrevisable as mathematical truths, they might be necessary rather than contingent', strength: 'contested', source: 'Naturalist metaphysics' },
        ]
      }
    },
    {
      round: 4,
      forSide: {
        claim: 'Fine-tuning evidence undercuts the claim that the universe or its laws are necessary: the physical constants (gravitational constant, cosmological constant, strong nuclear force) could coherently have taken different values, which is precisely what "contingent" means. A necessary being, by contrast, is one whose nature entails existence with no possible alternative — the explanatory chain must terminate in something like that, and only a free, personal cause explains why this contingent world rather than another exists.',
        evidence: [
          { text: 'The physical constants are independent parameters that could have taken a wide range of values — evidence of contingency, not necessity', strength: 'strong', source: 'Collins, "The Fine-Tuning Design Argument," 2009' },
          { text: 'Only a free personal agent, not an impersonal necessary law, can explain why one contingent state of affairs obtains rather than any of the other possible ones', strength: 'strong', source: 'Swinburne, The Existence of God, 2004' },
        ]
      },
      againstSide: {
        claim: 'Even if a necessary ground is required, this establishes at most a metaphysically necessary "something" — it does not license identifying that something with the personal, providential God of Christian theism.',
        evidence: [
          { text: 'The gap between "necessary being" and "the Triune God of Scripture" is unbridged by contingency arguments alone', strength: 'strong', source: 'Philosophical consensus on the "gap problem"' },
          { text: 'Historical and revelatory arguments, not metaphysics alone, are needed to move from bare necessity to the God of the Bible', strength: 'moderate', source: 'Craig, Reasonable Faith, 2008' },
        ]
      }
    }
  ]
};

export const thomisticDebate: Debate = {
  id: 'thomistic-debate',
  argumentId: 'thomistic',
  title: "Aquinas's Five Ways",
  forLabel: 'Thomist',
  againstLabel: 'Skeptic',
  rounds: [
    {
      round: 1,
      forSide: {
        claim: 'The First Way: whatever is in motion (changing from potency to act) is moved by another, since nothing can actualize its own potential without already being actual in that respect — a contradiction. This causal series cannot regress infinitely, so there must be a First Unmoved Mover, pure actuality, which we call God.',
        evidence: [
          { text: 'Nothing can be simultaneously potential and actual in the same respect — self-actualization is a contradiction', strength: 'strong', source: 'Aquinas, Summa Theologiae I.2.3' },
          { text: 'An essentially-ordered causal series (a hand moving a stick moving a stone) requires a first, underived member sustaining the whole chain here and now', strength: 'strong', source: 'Feser, Aquinas, 2009' },
        ]
      },
      againstSide: {
        claim: 'The argument rests on outdated Aristotelian physics of "potency" and "act" that modern physics has simply superseded. Motion, in Newtonian and quantum mechanics, requires no external mover — inertia keeps bodies in motion without a sustaining cause.',
        evidence: [
          { text: 'Newton\'s first law: a body in motion stays in motion without any continuing mover — refuting the premise that motion always requires a concurrent external cause', strength: 'moderate', source: 'Newtonian mechanics' },
          { text: 'Aristotelian physics has been empirically superseded; arguments built on it inherit its errors', strength: 'moderate', source: 'Common scientific objection' },
        ]
      }
    },
    {
      round: 2,
      forSide: {
        claim: 'This conflates two distinct kinds of causal series. Aquinas is not talking about a body continuing in uniform motion (Newton\'s inertia is irrelevant here) — he is talking about the "essentially ordered" hierarchical dependence of a thing\'s existence and causal powers at each instant, not a temporal sequence of pushes. Feser and other Thomists have shown the argument can be stated without reference to Aristotelian physics of local motion at all — it concerns any actualization of potency, including quantum events, chemical bonding, and existence itself.',
        evidence: [
          { text: '"Motion" for Aquinas means any actualization of potency, not merely local motion — it applies as much to a river freezing or an electron changing energy states as to a stone being thrown', strength: 'strong', source: 'Feser, Aquinas, 2009' },
          { text: 'An essentially ordered series is hierarchical (simultaneous, per se) rather than merely accidental (temporal, per accidens); Newtonian inertia addresses only the latter', strength: 'strong', source: 'Feser, Five Proofs of the Existence of God, 2017' },
        ]
      },
      againstSide: {
        claim: 'Even granting the potency/act framework, why can an essentially ordered series not simply be circular or brute, without needing to terminate in a "purely actual" being? The demand that such series must terminate is asserted, not proven.',
        evidence: [
          { text: 'Aquinas offers no strict proof that essentially ordered series cannot be circular or grounded in the whole system rather than a single first member', strength: 'moderate', source: 'Contemporary analytic critique of Thomism' },
          { text: 'Modern field theories describe mutual, simultaneous dependency among particles without any single privileged "first" actualizer', strength: 'contested', source: 'Philosophy of physics literature' },
        ]
      }
    },
    {
      round: 3,
      forSide: {
        claim: 'A circular or infinitely regressing essentially ordered series explains nothing, because at every stage each member\'s actuality is entirely borrowed — none is a per se source. An infinite regress of borrowed actuality never adds up to actuality that is not borrowed, just as an infinite series of transparent panes never becomes opaque. Only something that is Pure Act — actuality with no admixture of potency, and so requiring no actualizer — can terminate the series and make any of it intelligible right now.',
        evidence: [
          { text: 'Borrowed causal powers, however many links in the chain, never become an unborrowed source; the chain\'s intelligibility requires a non-derivative terminus', strength: 'strong', source: 'Aquinas, Summa Theologiae I.2.3; Feser 2017' },
          { text: 'The Second Way (efficient causation) reinforces the First: nothing can be the efficient cause of itself, since it would have to exist prior to itself', strength: 'strong', source: 'Aquinas, Summa Theologiae I.2.3' },
        ]
      },
      againstSide: {
        claim: 'This still only proves an abstract "unmoved mover" or "uncaused cause" — a metaphysical placeholder. It does nothing to show this terminus has intellect, will, moral goodness, or any of the attributes of the God of classical theism, let alone the Christian Trinity.',
        evidence: [
          { text: 'The Five Ways, taken individually, establish bare metaphysical properties (unmoved, uncaused, necessary) not obviously equivalent to a personal deity', strength: 'moderate', source: 'Analytic philosophy of religion, standard objection' },
          { text: 'Aquinas himself needed several further articles (Summa Theologiae I, qq. 3–26) to argue from "unmoved mover" to full theism', strength: 'moderate', source: 'Aquinas, Summa Theologiae I, qq. 3-26' },
        ]
      }
    },
    {
      round: 4,
      forSide: {
        claim: 'Aquinas anticipated this and devoted the following twenty-plus questions of the Summa to showing that Pure Actuality entails simplicity, goodness, infinity, immutability, unity, and intelligence — since a being with unlimited actuality lacks no perfection, including the perfections of intellect and will found (in limited form) in creatures. The Five Ways were never meant to stand as isolated one-line proofs but as the first step of a cumulative demonstration culminating in the God of classical theism whom "everyone calls God."',
        evidence: [
          { text: 'Pure Act, having no unrealized potential, must possess every perfection without limitation — including intellect and will, the highest perfections found in finite beings', strength: 'strong', source: 'Aquinas, Summa Theologiae I, qq. 3-26; Feser, Five Proofs, 2017' },
          { text: 'The Five Ways function as five converging arguments toward one terminus, not five unrelated one-step proofs', strength: 'moderate', source: 'Aquinas, Summa Theologiae I.2.3, prologue' },
        ]
      },
      againstSide: {
        claim: 'Even granting the full classical-theist package, this remains a philosophers\' God derived from Greek metaphysics — the identification with the God of Abraham, Isaac, and Jacob, who acts in history and raises Jesus from the dead, requires an entirely separate historical and revelatory case.',
        evidence: [
          { text: 'Pascal famously distinguished "the God of Abraham, Isaac, and Jacob" from "the God of the philosophers and scholars"', strength: 'moderate', source: 'Pascal, Memorial, 1654' },
          { text: 'Metaphysical demonstration and revealed theology are distinct projects requiring distinct kinds of evidence', strength: 'moderate', source: 'Standard distinction in philosophy of religion' },
        ]
      }
    }
  ]
};

export const roweContingencyDebate: Debate = {
  id: 'rowe-contingency-debate',
  argumentId: 'rowe-contingency',
  title: 'The Argument from Contingency of the Cosmos (Rowe)',
  forLabel: 'Theist',
  againstLabel: 'Skeptic',
  rounds: [
    {
      round: 1,
      forSide: {
        claim: 'Every contingent fact has an explanation. The cosmos — the totality of contingent beings — is itself a contingent fact, since it could have failed to exist or been otherwise. Therefore the cosmos requires an explanation beyond itself.',
        evidence: [
          { text: 'The PSR underlies all rational and scientific inquiry into why things are the way they are', strength: 'strong', source: 'Rowe, The Cosmological Argument, 1975' },
          { text: 'A collection of contingent things does not become necessary merely by being large, or even infinite', strength: 'strong', source: 'Craig & Moreland, The Blackwell Companion to Natural Theology, 2009' },
        ]
      },
      againstSide: {
        claim: 'The cosmos simply exists as a brute, unexplained fact. Not every fact requires an explanation — some facts are simply terminal.',
        evidence: [
          { text: '"The universe is just there, and that\'s all" — no further account is owed', strength: 'moderate', source: 'Russell-Copleston debate, 1948' },
          { text: 'Requiring an explanation for the totality of what exists may simply be an unjustified extension of a rule that only properly applies within the universe', strength: 'moderate', source: 'Hume, Dialogues Concerning Natural Religion' },
        ]
      }
    },
    {
      round: 2,
      forSide: {
        claim: 'Accepting a brute, unexplained cosmos is more radical than it first appears: it is an arbitrary exemption granted only when the fact in question is inconveniently large. Nothing about size or scope changes whether a fact is contingent, and every contingent fact — by definition — is one that could have been otherwise and so calls for an account of why this way rather than another.',
        evidence: [
          { text: 'If brute contingency is permitted for the cosmos as a whole, there is no principled reason to deny it for any troublesome fact, undermining explanation generally', strength: 'strong', source: 'Pruss, The Principle of Sufficient Reason, 2006' },
          { text: 'Analogy: finding a translucent ball in the forest demands explanation regardless of the ball\'s size — expanding it to universe-scale does not remove the demand', strength: 'moderate', source: 'Taylor, Metaphysics, 1992' },
        ]
      },
      againstSide: {
        claim: 'This is a fallacy of composition: each part of the cosmos is explained by some prior part, and once every part is explained, nothing remains — the "whole" is not some further entity requiring its own separate explanation.',
        evidence: [
          { text: 'Explaining each member of a series explains the series; demanding a further explanation for "the series as such" multiplies explananda without need', strength: 'moderate', source: 'Standard composition-fallacy objection' },
          { text: 'Hume: once each part of a collection has been accounted for, asking for a cause of the collection itself is an unnecessary and unclear further demand', strength: 'moderate', source: 'Hume, Dialogues Concerning Natural Religion, Part IX' },
        ]
      }
    },
    {
      round: 3,
      forSide: {
        claim: 'This is not a composition fallacy, because the claim is not "the whole has a property none of its parts has" but rather that the whole collection shares the very property (contingency) that generated the demand for explanation among the parts. A stack of contingent IOU notes, however long, never becomes actual currency; likewise, an infinite regress of contingent explainers never converts the aggregate into something self-explanatory.',
        evidence: [
          { text: 'The whole collection of contingent things is itself contingent — it could have failed to exist — and inherits the very demand for explanation that applies to each part', strength: 'strong', source: 'Pruss, The Principle of Sufficient Reason, 2006' },
          { text: 'A chain of contingent dependencies cannot terminate in itself; it requires a ground that is not itself contingent', strength: 'strong', source: 'Clarke, A Demonstration of the Being and Attributes of God, 1705' },
        ]
      },
      againstSide: {
        claim: 'If everything requires an explanation, what explains God? Positing a necessary being to stop the regress looks like special pleading — exempting one being from the very rule used to argue for its existence.',
        evidence: [
          { text: 'The demand for universal explanation seems to apply to God just as much as to the cosmos, generating an infinite regress or arbitrary stopping point', strength: 'moderate', source: 'Common philosophical objection (Mackie, The Miracle of Theism, 1982)' },
        ]
      }
    },
    {
      round: 4,
      forSide: {
        claim: 'This is not special pleading, because the argument\'s first premise never claimed that everything needs an external cause — it distinguished from the start between things explained by an external cause and things explained by the necessity of their own nature. A necessary being\'s existence is explained: it exists because its non-existence is impossible, given what it is. The regress terminates not by arbitrary exemption but by reaching a different kind of being altogether — one whose essence just is existence.',
        evidence: [
          { text: 'The distinction between contingent and necessary explanation is built into the argument\'s first premise, not introduced ad hoc at the end', strength: 'strong', source: 'Rowe, The Cosmological Argument, 1975' },
          { text: 'A necessary being is not an arbitrary stopping point but the only kind of being that, by its nature, closes the explanatory chain without residue', strength: 'strong', source: 'Craig, Reasonable Faith, 2008' },
        ]
      },
      againstSide: {
        claim: 'Granting a necessary ground of the cosmos still leaves open whether that ground is personal, good, or in any way like the God of Christian revelation, rather than an impersonal necessary substrate (a "necessary multiverse" or set of laws).',
        evidence: [
          { text: 'A necessary foundation of reality need not be a mind; it could be an impersonal necessary structure underlying physical law', strength: 'moderate', source: 'Naturalist metaphysics, e.g., necessitarian readings of physical law' },
        ]
      }
    }
  ]
};

export const hawkingPenroseSingularityDebate: Debate = {
  id: 'hawking-penrose-singularity-debate',
  argumentId: 'hawking-penrose-singularity',
  title: 'The Argument from the Big Bang Singularity',
  forLabel: 'Theist',
  againstLabel: 'Physicist-Skeptic',
  rounds: [
    {
      round: 1,
      forSide: {
        claim: 'The Hawking-Penrose singularity theorems (1970) prove that, under general relativity with realistic energy conditions, the universe began at a genuine boundary of space, time, matter, and energy — not merely a boundary of matter within a pre-existing space-time.',
        evidence: [
          { text: 'All past-directed timelike and null geodesics are incomplete under general relativity with reasonable energy conditions, implying a genuine beginning', strength: 'strong', source: 'Hawking & Penrose, "The Singularities of Gravitational Collapse and Cosmology," 1970' },
          { text: 'Even agnostic astronomer Robert Jastrow described the scientific evidence for a cosmic beginning as startling to those expecting an eternal universe', strength: 'moderate', source: 'Jastrow, God and the Astronomers, 1978' },
        ]
      },
      againstSide: {
        claim: 'Classical singularity theorems break down at the Planck scale, where quantum gravitational effects dominate and general relativity itself is known to be inapplicable — so no legitimate physical conclusion about an "absolute beginning" can be drawn from a theory known to fail at exactly the regime in question.',
        evidence: [
          { text: 'General relativity is not a quantum theory and is expected to break down near the Planck density, where a full quantum gravity treatment is required', strength: 'moderate', source: 'Standard position in theoretical physics' },
          { text: 'Hawking\'s own later "no-boundary proposal" (with Hartle) attempted to remove the singularity by treating time near the origin as imaginary, avoiding a sharp beginning', strength: 'contested', source: 'Hartle & Hawking, "Wave Function of the Universe," 1983' },
        ]
      }
    },
    {
      round: 2,
      forSide: {
        claim: 'This is precisely why the Borde-Guth-Vilenkin theorem (2003) matters: it operates at the level of classical space-time geometry and is independent of the unknown quantum gravity physics at the singularity itself. It shows that any space-time that is, on average, expanding throughout its history — including the Hartle-Hawking model\'s classical expanding phase — must be past-incomplete: it cannot be extended infinitely into the past.',
        evidence: [
          { text: 'The BGV theorem requires only that average Hubble expansion be positive, a condition satisfied by inflationary, cyclic, and quantum-gravity-corrected models alike', strength: 'strong', source: 'Borde, Guth & Vilenkin, "Inflationary Spacetimes Are Incomplete in Past Directions," 2003' },
          { text: 'Vilenkin states plainly that cosmologists "can no longer hide behind the possibility of a past-eternal universe"', strength: 'strong', source: 'Vilenkin, Many Worlds in One, 2006' },
        ]
      },
      againstSide: {
        claim: 'Even the no-boundary proposal, properly understood, does not require calling the initial region a "beginning" in the ordinary causal sense — Hawking himself argued that in imaginary time the universe has no edge or boundary at all, which he took to remove the need for any cause or Creator.',
        evidence: [
          { text: '"So long as the universe had a beginning, we could suppose it had a creator... but if the universe is really completely self-contained... it would neither be created nor destroyed"', strength: 'moderate', source: 'Hawking, A Brief History of Time, 1988' },
        ]
      }
    },
    {
      round: 3,
      forSide: {
        claim: 'Hawking\'s own quotation concedes the conditional the theist needs: "so long as the universe had a beginning, we could suppose it had a creator" — and the no-boundary model, when translated from the mathematical device of imaginary time back into physically meaningful real time, still yields a universe of finite past duration. Imaginary time is a calculational tool, not a description of the physical history that any conscious or embodied being actually experienced.',
        evidence: [
          { text: 'Imaginary time is a mathematical convenience used to smooth the singularity in the model\'s formalism; converting back to real time still produces a finite-duration universe', strength: 'strong', source: 'Craig & Sinclair, "The Kalam Cosmological Argument," in The Blackwell Companion to Natural Theology, 2009' },
          { text: 'Even proponents of quantum cosmological models generally acknowledge a finite quantum-gravitational past, differing from classical theism only on whether that past has a sharp geometric edge', strength: 'moderate', source: 'Vilenkin, Many Worlds in One, 2006' },
        ]
      },
      againstSide: {
        claim: 'Granting a finite past on the best current physics still leaves "cause" doing questionable work: causation, as we understand it, involves temporal succession — an earlier event bringing about a later one. If time itself began, it is unclear what it could even mean to speak of something "causing" the first moment, since there was no "before" for a cause to operate in.',
        evidence: [
          { text: 'Standard analyses of causation presuppose temporal priority of cause to effect, which is unavailable if time itself has a first moment', strength: 'moderate', source: 'Philosophy of causation literature' },
        ]
      }
    },
    {
      round: 4,
      forSide: {
        claim: 'Philosophers of religion widely distinguish causal priority from temporal priority: a cause can be simultaneous with, or logically/ontologically prior to, its effect without being temporally prior to it. A timeless cause can be the sufficient ground of the very first temporal moment without itself needing to exist "earlier" — just as, in classical theism, God\'s timeless decision to create is the ontological ground of time\'s existence, not an event that precedes time within some further temporal framework.',
        evidence: [
          { text: 'Causal and temporal priority are distinct relations in the philosophical literature; the former does not require the latter', strength: 'strong', source: 'Craig, "The Caused Beginning of the Universe," 1993' },
          { text: 'A timeless personal agent choosing to create is a coherent model of a cause without any "before" — the cause exists timelessly and its effect begins the first moment of time', strength: 'strong', source: 'Craig, Reasonable Faith, 2008' },
        ]
      },
      againstSide: {
        claim: 'This model of timeless personal causation, while logically coherent as a philosophical construct, remains an unverifiable metaphysical posit — physics alone can establish a finite past, but the leap to a timeless, personal, willing agent as its explanation goes well beyond what the physics itself demonstrates.',
        evidence: [
          { text: 'A finite past is compatible with many metaphysical accounts of its origin, not just theism — including brute contingency or currently unknown physical mechanisms', strength: 'moderate', source: 'Standard methodological-naturalist objection' },
        ]
      }
    }
  ]
};

export const clarkeFirstCauseDebate: Debate = {
  id: 'clarke-first-cause-debate',
  argumentId: 'clarke-first-cause',
  title: "Clarke's Argument from First Cause",
  forLabel: 'Theist',
  againstLabel: 'Skeptic',
  rounds: [
    {
      round: 1,
      forSide: {
        claim: 'Something exists now; therefore something has always existed, since if there were ever absolutely nothing, there would still be nothing (ex nihilo nihil fit). Whatever exists, exists either necessarily or contingently. Since a mere infinite chain of contingent, dependent beings has no ultimate sustaining ground, there must exist at least one necessary being.',
        evidence: [
          { text: 'If there were ever literally nothing at all, nothing could ever have come to exist — yet things now exist, so something has always existed', strength: 'strong', source: 'Clarke, A Demonstration of the Being and Attributes of God, 1705' },
          { text: 'Existence divides exhaustively into necessary (cannot fail to exist) and contingent (could fail to exist) modes', strength: 'strong', source: 'Leftow, God and Necessity, 2012' },
        ]
      },
      againstSide: {
        claim: 'Hume argued that a beginningless series of contingent causes, each explained by its predecessor, is logically coherent and requires no further external ground — the demand for a necessary terminus is an unproven assumption.',
        evidence: [
          { text: 'A causal chain infinite in the past, with each link explained by the prior link, is conceivable without contradiction', strength: 'moderate', source: 'Hume, Dialogues Concerning Natural Religion, Part IX' },
        ]
      }
    },
    {
      round: 2,
      forSide: {
        claim: 'Clarke\'s point targets the ontological status of the whole chain, not merely whether each link has a predecessor. Even an infinite chain of contingent beings is, in its totality, a contingent state of affairs — it could have failed to exist altogether — and no amount of internal linking manufactures the necessity needed to explain why the chain exists at all rather than not.',
        evidence: [
          { text: 'An infinite series of dependent beings is still, as a whole, a dependent (contingent) reality requiring a ground outside itself', strength: 'strong', source: 'Clarke, A Demonstration of the Being and Attributes of God, 1705' },
          { text: 'Rowe: a collection of contingent items does not acquire necessity by being enlarged, even to infinity', strength: 'moderate', source: 'Rowe, The Cosmological Argument, 1975' },
        ]
      },
      againstSide: {
        claim: 'Perhaps the universe itself, or its fundamental physical laws, are the necessary being Clarke is looking for — eliminating the need to posit anything beyond nature.',
        evidence: [
          { text: 'If the laws of physics are unrevisable in the way mathematical truths are, they could be necessary rather than contingent facts', strength: 'contested', source: 'Naturalist metaphysics' },
        ]
      }
    },
    {
      round: 3,
      forSide: {
        claim: 'Nothing about our universe displays the marks of necessary existence. Necessary truths are, by definition, ones whose denial is incoherent — but we can coherently conceive alternate values for the fundamental constants (a different gravitational constant, a different cosmological constant), which is exactly what fine-tuning studies quantify. A being or law that could coherently have been otherwise is, by definition, contingent, not necessary.',
        evidence: [
          { text: 'Physical constants are independent, freely-varying parameters in our best physical theories, and their alternate values are coherently conceivable — evidence of contingency', strength: 'strong', source: 'Collins, "The Fine-Tuning Design Argument," 2009' },
          { text: 'A being whose non-existence is inconceivable (truly necessary) is categorically unlike a set of laws we can coherently imagine varied', strength: 'moderate', source: 'Leftow, God and Necessity, 2012' },
        ]
      },
      againstSide: {
        claim: 'Even granting a necessary ground, Clarke\'s argument by itself establishes only an impersonal necessary substrate — nothing in the logic of the argument requires that this necessary being possess will, intellect, or personality.',
        evidence: [
          { text: 'Necessity of existence does not, on its face, entail personhood; abstract objects like numbers might be thought necessary without being persons', strength: 'moderate', source: 'Standard objection to necessary-being arguments' },
        ]
      }
    },
    {
      round: 4,
      forSide: {
        claim: 'Clarke anticipated this and argued at length (in the second half of his Boyle Lectures) that a being of infinite power, knowledge, and self-sufficient perfection must also possess will and intelligence — since intelligence and will are themselves perfections, and a maximally perfect necessary being cannot lack any perfection compatible with its nature. A necessary being with zero personal attributes would be a lesser, more limited necessary being than one possessing intellect and will — and Clarke argues the greater is what the premises in fact require.',
        evidence: [
          { text: 'Clarke devotes the second half of his Demonstration specifically to showing the necessary being must be intelligent and free, not merely existent', strength: 'strong', source: 'Clarke, A Demonstration of the Being and Attributes of God, 1705, Propositions VIII-XII' },
          { text: 'A being lacking intellect and will would be a metaphysically lesser necessary being than one possessing them, given that intellect and will are genuine perfections', strength: 'moderate', source: 'Clarke 1705' },
        ]
      },
      againstSide: {
        claim: 'This move from "necessary and maximally perfect" to "personal, willing Creator" imports a substantive and contestable premise — that personhood is a perfection rather than, as some argue, a limitation involving passivity, temporal experience, and dependency incompatible with the divine simplicity Clarke also wants to affirm.',
        evidence: [
          { text: 'Some philosophers argue personhood as ordinarily understood (involving deliberation, change of mind, temporal experience) sits uneasily with a maximally simple, immutable, necessary being', strength: 'moderate', source: 'Debates in philosophical theology on divine simplicity and personhood' },
        ]
      }
    }
  ]
};

export const prussPsrDebate: Debate = {
  id: 'pruss-psr-debate',
  argumentId: 'pruss-psr',
  title: "Pruss's Modern Principle of Sufficient Reason Argument",
  forLabel: 'Theist',
  againstLabel: 'Analytic Skeptic',
  rounds: [
    {
      round: 1,
      forSide: {
        claim: 'The weak Principle of Sufficient Reason holds that every contingent truth has an explanation, even if unknown to us. The conjunction of all contingent truths — the "Big Conjunctive Contingent Fact" (BCCF) — is itself contingent and so requires an explanation. That explanation cannot be another contingent truth (which would just enlarge the BCCF) nor a necessary truth alone (which entails only necessary consequences), so it must be the free act of a necessary being.',
        evidence: [
          { text: 'The weak PSR requires only that explanations exist, not that we can find them, avoiding many classical objections to strong PSR formulations', strength: 'strong', source: 'Pruss, The Principle of Sufficient Reason, 2006' },
          { text: 'The BCCF cannot be explained by any of its own conjuncts without circularity, nor by a necessary truth alone, since necessary truths cannot entail contingent ones deterministically', strength: 'strong', source: 'Pruss & Gale, "A New Cosmological Argument," 1999' },
        ]
      },
      againstSide: {
        claim: 'The "modal collapse" objection: if a necessary being necessarily gives rise to its explanatory effects, then those effects become necessary too, collapsing the very distinction between contingent and necessary truths the argument depends on.',
        evidence: [
          { text: 'If God necessarily explains the BCCF, and God is necessary, the BCCF appears to inherit that necessity, making all truths necessary — an absurd result', strength: 'strong', source: 'Standard modal collapse objection, discussed in Pruss 2006, ch. 18' },
        ]
      }
    },
    {
      round: 2,
      forSide: {
        claim: 'Modal collapse is avoided once the explanation is understood as a free choice rather than a necessitated effect: a necessary being can possess libertarian freedom to choose among multiple possible worlds. The necessity attaches to the existence of the chooser, not to which choice is made — so the chosen contingent facts remain genuinely contingent even though their explainer exists necessarily.',
        evidence: [
          { text: 'A being can exist necessarily while its free choices remain contingent, since necessity of the agent does not transfer to the content of a free act', strength: 'strong', source: 'Pruss, The Principle of Sufficient Reason, 2006, ch. 18' },
          { text: 'Libertarian free will models generally hold that a free agent could have chosen otherwise even under identical antecedent conditions, preserving contingency', strength: 'moderate', source: 'Standard libertarian free will literature' },
        ]
      },
      againstSide: {
        claim: 'Even setting aside modal collapse, the weak PSR itself is an unjustified metaphysical posit — many contemporary philosophers hold that some facts, including perhaps the BCCF, are simply brute, and no argument establishes that explanations must exist even where we cannot in principle find them.',
        evidence: [
          { text: 'Van Inwagen and others argue that a PSR strong enough to generate this argument, when examined, leads to implausible consequences and lacks independent support beyond intuition', strength: 'moderate', source: 'van Inwagen, "The Doctrine of Arbitrary Undetached Parts" and related PSR critiques' },
        ]
      }
    },
    {
      round: 3,
      forSide: {
        claim: 'The weak PSR is not an arbitrary posit but a presupposition every reasoner already relies on: scientific practice universally assumes unexplained phenomena have explanations awaiting discovery, not that they are brute. Denying the weak PSR in argument while relying on it in every act of scientific and everyday reasoning is performatively inconsistent — one cannot coherently maintain that some facts have absolutely no explanation while also insisting that inquiry into unexplained phenomena is worthwhile.',
        evidence: [
          { text: 'Every scientific research program assumes currently unexplained phenomena have explanations yet to be found — a working commitment to the weak PSR', strength: 'strong', source: 'Pruss, The Principle of Sufficient Reason, 2006' },
          { text: 'Self-referential difficulty: a philosopher who argues against the PSR is using reasoned inference, which itself presupposes that reasons (explanations) matter', strength: 'moderate', source: 'Pruss 2006' },
        ]
      },
      againstSide: {
        claim: 'This proves too much: the weak PSR needed for ordinary science (there is probably a natural explanation for this observed phenomenon) is far more modest than the strong PSR required by Pruss\'s argument (every contingent truth without exception, including the totality of all contingent truths, has an explanation) — the former does not entail the latter.',
        evidence: [
          { text: 'A localized expectation of finding natural explanations for specific phenomena within a law-governed universe differs in kind from a universal claim about literally all contingent truth, including cosmic totalities', strength: 'moderate', source: 'Critique distinguishing local from global PSR' },
        ]
      }
    },
    {
      round: 4,
      forSide: {
        claim: 'Pruss explicitly formulates the weak PSR at the fully general level required and defends it against exactly this distinction: restricting the PSR arbitrarily to "ordinary" phenomena while exempting the BCCF has no principled basis, since the BCCF is composed of nothing but the very same kind of contingent facts science already assumes are explicable. The argument therefore stands: a free, necessary being is the best available terminus for the explanatory chain, and it is this being — free, necessary, and possessed of the will to create — that classical theism identifies as God.',
        evidence: [
          { text: 'The BCCF is not a different kind of fact requiring a different explanatory standard — it is simply the largest instance of the same kind of contingent fact routinely assumed explicable', strength: 'strong', source: 'Pruss, The Principle of Sufficient Reason, 2006' },
          { text: 'A free, necessary, personal being is the only kind of explainer compatible with both the weak PSR and the avoidance of modal collapse', strength: 'strong', source: 'Pruss & Gale, "A New Cosmological Argument," 1999' },
        ]
      },
      againstSide: {
        claim: 'Granting the full argument its conclusion, it establishes only an abstract "free necessary being" — a philosopher\'s postulate satisfying a logical requirement, well short of anything resembling the providential, revealed God of Christian faith and worship.',
        evidence: [
          { text: 'The gap between a technically-derived "free necessary explainer" and the God of Abraham, Isaac, and Jacob remains as wide here as in any cosmological argument', strength: 'moderate', source: 'Standard "gap problem" objection in philosophy of religion' },
        ]
      }
    }
  ]
};

export const cosmologicalDebates: Record<string, Debate> = {
  kalam: kalamDebate,
  leibniz: leibnizDebate,
  thomistic: thomisticDebate,
  'rowe-contingency': roweContingencyDebate,
  'hawking-penrose-singularity': hawkingPenroseSingularityDebate,
  'clarke-first-cause': clarkeFirstCauseDebate,
  'pruss-psr': prussPsrDebate,
};
