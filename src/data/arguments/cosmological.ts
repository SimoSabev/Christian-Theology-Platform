import { Argument } from './types';

export const cosmologicalArguments: Argument[] = [
  {
    id: 'kalam',
    slug: 'kalam',
    name: 'The Kalam Cosmological Argument',
    category: 'cosmological',
    shortDescription: 'From the impossibility of an actual infinite past to a transcendent cause of the universe.',
    historicalBackground: `The Kalam Cosmological Argument has its roots in medieval Islamic philosophy, particularly in the work of Al-Ghazali (1058–1111), who formulated it in "The Incoherence of the Philosophers." The argument was revived and rigorously defended by philosopher William Lane Craig beginning in 1979, drawing on both philosophical reasoning and modern Big Bang cosmology. The name "Kalam" comes from the Arabic word for "speech" or "discourse," referring to Islamic scholastic theology. The argument uniquely combines metaphysical reasoning about the impossibility of actual infinities with empirical evidence from cosmology.`,
    premises: [
      {
        id: 'kalam-p1',
        text: 'Everything that begins to exist has a cause of its existence.',
        defense: 'This premise rests on the metaphysical principle ex nihilo nihil fit — "from nothing, nothing comes." It is supported by: (1) Metaphysical intuition: the idea that something could spring into being uncaused from nothing is absurd. "Nothing" has no properties, no potentialities, no causal powers. (2) Empirical confirmation: in all of human experience, every event and every object that begins to exist has a cause. This is the foundation of all science. (3) If things could come into being uncaused from nothing, it would be inexplicable why anything and everything does not come into being from nothing — why bicycles, Beethoven, or universes don\'t pop into existence randomly.',
        sources: ['Aquinas, Summa Theologiae I.2.3', 'Craig, The Kalām Cosmological Argument (1979)', 'Pruss, The Principle of Sufficient Reason (2006)']
      },
      {
        id: 'kalam-p2',
        text: 'The universe began to exist.',
        defense: 'This premise is supported by both philosophical and scientific evidence: (1) Philosophical: An actually infinite number of past events is impossible. If the past were infinite, one could never arrive at the present moment — it would require traversing an actual infinite, which is impossible. (2) Scientific: Big Bang cosmology indicates the universe had a beginning approximately 13.8 billion years ago. The Hubble expansion, cosmic microwave background radiation, and Big Bang nucleosynthesis all confirm this. (3) The Borde-Guth-Vilenkin theorem (2003) proves that any universe which has, on average, been expanding throughout its history cannot be infinite in the past but must have a past space-time boundary — a beginning.',
        sources: ['Hawking & Penrose, The Nature of Space and Time (1996)', 'Borde, Guth & Vilenkin, "Inflationary Spacetimes Are Incomplete" (2003)', 'Craig & Sinclair, "The Kalam Cosmological Argument" in The Blackwell Companion to Natural Theology (2009)']
      }
    ],
    conclusion: 'Therefore, the universe has a cause of its existence.',
    proponents: [
      { name: 'Al-Ghazali', era: '11th century' },
      { name: 'William Lane Craig', era: 'Contemporary' },
      { name: 'Alexander Pruss', era: 'Contemporary' },
    ],
    objections: [
      {
        id: 'kalam-obj1',
        title: 'Quantum events may be uncaused',
        description: 'In quantum mechanics, events at the subatomic level (such as radioactive decay or virtual particle formation) appear to occur without deterministic causes. If quantum events can be uncaused, Premise 1 is false.',
        response: 'Quantum indeterminacy does not mean quantum events are uncaused. The quantum vacuum from which virtual particles arise is not "nothing" — it is a structured, law-governed physical state with specific properties. Virtual particles arise from the quantum vacuum\'s energy, not from absolute nothingness. Even on the most indeterministic interpretation (Copenhagen), quantum events occur within the framework of quantum field theory — they have necessary conditions even if not sufficient deterministic causes. The relevant claim is that something cannot begin to exist from absolute nothing — no space, no time, no laws, no quantum vacuum — which quantum mechanics does not challenge.',
        sources: ['Craig, "The Caused Beginning of the Universe" (2001)', 'Vilenkin, Many Worlds in One (2006)']
      },
      {
        id: 'kalam-obj2',
        title: 'Cyclic/bouncing cosmologies avoid a beginning',
        description: 'Models such as the cyclic/ekpyrotic model or Penrose\'s Conformal Cyclic Cosmology suggest the universe goes through infinite cycles of expansion and contraction, avoiding an absolute beginning.',
        response: 'The Borde-Guth-Vilenkin theorem applies to all cosmological models that have, on average, been expanding. This includes cyclic models — each cycle must expand more than the previous one (due to entropy increase), so on average, the multiverse/cyclic system is expanding. Vilenkin himself has stated: "All the evidence we have says that the universe had a beginning." Furthermore, cyclic models face the thermodynamic problem: entropy increases with each cycle, so past-eternal cycles would have reached maximum entropy (heat death) infinitely long ago.',
        sources: ['Borde, Guth & Vilenkin (2003)', 'Vilenkin, Many Worlds in One (2006)', 'Penrose, Cycles of Time (2010)']
      },
      {
        id: 'kalam-obj3',
        title: 'The cause need not be God',
        description: 'Even if the universe has a cause, why think the cause is God rather than some impersonal physical mechanism?',
        response: 'The cause of the universe must be: (1) Uncaused (to avoid infinite regress), (2) Timeless and spaceless (since it created time and space), (3) Immaterial (since it exists without space), (4) Enormously powerful (to create the universe from nothing), (5) Personal — because the only known entities that can be timeless, immaterial causes are either abstract objects (like numbers) or minds. Abstract objects are causally inert — they cannot cause anything. Therefore, the cause must be a personal mind. Additionally, a personal cause explains how a timeless cause can produce a temporal effect: through a free decision of the will.',
        sources: ['Craig, Reasonable Faith (2008)', 'Moreland, Consciousness and the Existence of God (2008)']
      }
    ],
    significance: 'The Kalam Cosmological Argument is one of the most debated arguments in philosophy of religion. Its strength lies in combining accessible logical structure with cutting-edge cosmology. It establishes a transcendent, personal, immensely powerful cause of the universe — consistent with the God of theism.',
    relatedArguments: ['leibniz', 'thomistic', 'fine-tuning'],
    keySources: [
      'William Lane Craig, The Kalām Cosmological Argument (1979)',
      'Alexander Pruss, The Principle of Sufficient Reason (2006)',
      'Borde, Guth & Vilenkin, "Inflationary Spacetimes Are Incomplete" (2003)',
    ]
  },
  {
    id: 'leibniz',
    slug: 'leibniz',
    name: 'The Leibnizian Cosmological Argument (Contingency)',
    category: 'cosmological',
    shortDescription: 'From the contingency of the universe to a necessary being that grounds all existence.',
    historicalBackground: `The argument from contingency was formulated by Gottfried Wilhelm Leibniz (1646–1716) and is rooted in the Principle of Sufficient Reason: every fact must have an explanation. Unlike the Kalam argument, it does not depend on the universe having a beginning — even an eternal universe would require an explanation for its existence. The argument was anticipated by Islamic philosophers (Ibn Sina/Avicenna) and by Thomas Aquinas's Third Way, and has been revived by contemporary philosophers such as Alexander Pruss and Robert Koons.`,
    premises: [
      {
        id: 'leibniz-p1',
        text: 'Everything that exists has an explanation of its existence, either in the necessity of its own nature or in an external cause.',
        defense: 'This is a version of the Principle of Sufficient Reason (PSR). It is deeply intuitive and is presupposed by all scientific inquiry — science assumes that phenomena have explanations. To deny this premise is to accept that things can exist for no reason at all, which would undermine the rationality of all investigation. The premise is modest: it allows for two types of explanation — either a thing exists necessarily (it must exist; it cannot not exist) or it exists because something else caused it.',
        sources: ['Leibniz, "On the Ultimate Origination of Things" (1697)', 'Pruss, The Principle of Sufficient Reason (2006)']
      },
      {
        id: 'leibniz-p2',
        text: 'If the universe has an explanation of its existence, that explanation is a transcendent, necessary, personal being.',
        defense: 'The universe is the totality of physical reality — all matter, energy, space, and time. Its explanation cannot be another physical thing (that would be part of the universe). Therefore, its explanation must be non-physical, transcendent, and necessary. It must be personal because the only non-physical entities we know of that can serve as causes are minds.',
        sources: ['Leibniz, Monadology (1714)', 'Pruss & Gale, "A New Cosmological Argument" (1999)']
      },
      {
        id: 'leibniz-p3',
        text: 'The universe exists.',
        defense: 'This is self-evidently true. We observe the universe; we exist within it. Its existence is an undeniable brute fact.',
        sources: []
      }
    ],
    conclusion: 'Therefore, a transcendent, necessary, personal being (God) exists.',
    proponents: [
      { name: 'Gottfried Wilhelm Leibniz', era: '17th–18th century' },
      { name: 'Samuel Clarke', era: '18th century' },
      { name: 'Alexander Pruss', era: 'Contemporary' },
      { name: 'Robert Koons', era: 'Contemporary' },
    ],
    objections: [
      {
        id: 'leibniz-obj1',
        title: 'The universe might exist as a brute fact',
        description: 'Perhaps the universe simply exists with no explanation — it is a brute fact. Not everything needs an explanation.',
        response: 'To say the universe is a brute fact is to deny the Principle of Sufficient Reason, which is the foundation of all rational inquiry and all science. If we allow brute facts, anything could lack an explanation — including consciousness, life, and the laws of physics. Furthermore, if the universe could exist as a brute fact, it becomes inexplicable why anything at all should be a brute fact rather than something else. The PSR, while not provable, is more plausible than its denial.',
        sources: ['Pruss, The Principle of Sufficient Reason (2006)']
      },
      {
        id: 'leibniz-obj2',
        title: 'Why cannot God be a brute fact?',
        description: 'If everything requires an explanation, what explains God? This leads to an infinite regress.',
        response: 'The argument explicitly allows for two types of explanation: external cause or necessity of own nature. God is a necessary being — He exists by the necessity of His own nature, not as a brute fact. A necessary being is one whose non-existence is impossible. This is not special pleading; the argument concludes that there must be such a being to ground the existence of contingent things.',
        sources: ['Craig, Reasonable Faith (2008)']
      }
    ],
    significance: 'The argument from contingency is often considered the strongest cosmological argument because it does not depend on the universe having a temporal beginning. Even if the universe were eternal, it would still be contingent and require an explanation.',
    relatedArguments: ['kalam', 'thomistic'],
    keySources: [
      'Leibniz, "On the Ultimate Origination of Things" (1697)',
      'Alexander Pruss, The Principle of Sufficient Reason (2006)',
    ]
  },
  {
    id: 'thomistic',
    slug: 'thomistic',
    name: "Aquinas's Five Ways",
    category: 'cosmological',
    shortDescription: 'Five classical demonstrations of God\'s existence from motion, causation, contingency, degrees of perfection, and teleology.',
    historicalBackground: `The Five Ways (Quinque Viae) were proposed by Thomas Aquinas (1225–1274) in his Summa Theologiae (I, q. 2, art. 3). They draw on Aristotelian metaphysics and represent the most influential arguments for God's existence in the Western philosophical tradition. Aquinas did not intend them as independent stand-alone proofs but as five converging lines of reasoning, each pointing to a First Cause that all people call "God." The arguments have been defended and refined by Thomistic philosophers through the centuries, including Edward Feser and Eleonore Stump in contemporary philosophy.`,
    premises: [
      {
        id: 'thomistic-p1',
        text: 'The First Way (Motion): Whatever is in motion is moved by another. There cannot be an infinite regress of movers. Therefore there must be a First Unmoved Mover.',
        defense: '"Motion" in Aquinas means any change from potentiality to actuality. Nothing can actualize its own potential (it would need to be both actual and potential simultaneously, which is contradictory). Each thing in motion is moved by another, but this chain cannot regress infinitely per se — an essentially ordered causal series requires a first member that is pure actuality. This First Mover is what we call God.',
        sources: ['Aquinas, Summa Theologiae I.2.3', 'Feser, Aquinas (2009)']
      },
      {
        id: 'thomistic-p2',
        text: 'The Second Way (Efficient Causation): Nothing can be the efficient cause of itself. There must be a First Efficient Cause.',
        defense: 'An essentially ordered series of efficient causes requires a first cause that is itself uncaused. Unlike an accidentally ordered series (grandfather→father→son), an essentially ordered series operates simultaneously and hierarchically — like a hand moving a stick moving a ball. Remove any member and the whole series fails. There must therefore be a first cause sustaining the causal power of every subsequent member.',
        sources: ['Aquinas, Summa Theologiae I.2.3', 'Feser, Five Proofs of the Existence of God (2017)']
      },
      {
        id: 'thomistic-p3',
        text: 'The Third Way (Contingency): Contingent beings (which can not-exist) require a necessary being to ground their existence.',
        defense: 'If everything were contingent, it would be possible for nothing at all to exist at some point. But if there were ever nothing, nothing could come into existence (from nothing, nothing comes). Since things exist now, there must be at least one necessary being whose existence is not contingent on anything else.',
        sources: ['Aquinas, Summa Theologiae I.2.3']
      }
    ],
    conclusion: 'Therefore, there must exist a being that is pure actuality, the first efficient cause, a necessary being, maximally perfect, and the intelligent director of all natural things — and this being is what everyone calls God.',
    proponents: [
      { name: 'Thomas Aquinas', era: '13th century' },
      { name: 'Reginald Garrigou-Lagrange', era: '20th century' },
      { name: 'Edward Feser', era: 'Contemporary' },
    ],
    objections: [
      {
        id: 'thomistic-obj1',
        title: 'The Five Ways depend on outdated Aristotelian physics',
        description: 'Modern physics has replaced Aristotelian concepts of motion, causation, and teleology. The arguments are therefore obsolete.',
        response: 'Aquinas\'s arguments operate at the level of metaphysics, not physics. "Motion" means any change from potentiality to actuality — this applies to quantum events as much as to falling stones. The distinction between actuality and potentiality is not a scientific claim but a philosophical one, and it remains defensible. Thomistic philosophers like Edward Feser have shown how the Five Ways can be formulated without any dependence on Aristotelian physics specifically.',
        sources: ['Feser, Aquinas (2009)', 'Feser, Five Proofs of the Existence of God (2017)']
      }
    ],
    significance: 'The Five Ways remain the most influential arguments for God\'s existence in the history of Western philosophy. They establish not just that God exists, but key divine attributes: immateriality, uniqueness, omnipotence, and omniscience.',
    relatedArguments: ['kalam', 'leibniz'],
    keySources: [
      'Thomas Aquinas, Summa Theologiae, I, q. 2, art. 3',
      'Edward Feser, Five Proofs of the Existence of God (2017)',
    ]
  },
  {
    id: 'rowe-contingency',
    slug: 'rowe-contingency',
    name: 'The Argument from Contingency of the Cosmos (Rowe)',
    category: 'cosmological',
    shortDescription: 'The totality of contingent beings cannot explain itself; a necessary, self-existent being must ground the entire cosmos.',
    historicalBackground: `William L. Rowe developed this version of the contingency argument in his 1975 work building on Leibniz and Samuel Clarke. While the Leibnizian form asks why there is something rather than nothing, Rowe sharpens the focus: the cosmos as a whole is a contingent fact, and an infinite regress of contingent explanations explains nothing at all. The argument presses that the Principle of Sufficient Reason demands a necessary being outside the series of contingent things.`,
    premises: [
      {
        id: 'rowe-p1',
        text: 'Every contingent fact has an explanation.',
        defense: 'The Principle of Sufficient Reason (PSR) applies universally. Science itself operates on the assumption that facts have explanations. Accepting brute contingency about the entire cosmos is more mysterious than positing a necessary being. To deny that contingent facts have explanations is to undermine the rationality of all inquiry.',
        sources: ['Rowe, The Cosmological Argument (1975)', 'Pruss, The Principle of Sufficient Reason (2006)']
      },
      {
        id: 'rowe-p2',
        text: 'The cosmos as a whole — the totality of all contingent beings — is itself a contingent fact.',
        defense: 'The cosmos is not a necessary being; it could have failed to exist or been different. Its existence is not self-explanatory. A collection of contingent things does not become necessary simply by being large or infinite — a sum of contingent IOU notes does not produce real money.',
        sources: ['Rowe, The Cosmological Argument (1975)', 'Craig & Moreland, The Blackwell Companion to Natural Theology (2009)']
      },
      {
        id: 'rowe-p3',
        text: 'The explanation of the cosmos cannot itself be contingent.',
        defense: 'An infinite regress of contingencies explains nothing. Each contingent member of the series requires its own explanation, and the series as a whole — being contingent — still demands an explanation outside itself. A chain of contingent dependencies cannot terminate in itself; it requires a ground that is not contingent.',
        sources: ['Clarke, A Demonstration of the Being and Attributes of God (1705)', 'Pruss & Gale, "A New Cosmological Argument" (1999)']
      }
    ],
    conclusion: 'Therefore the cosmos is explained by a necessary, self-existent being — God.',
    proponents: [
      { name: 'William L. Rowe', era: '20th–21st century' },
      { name: 'Gottfried Wilhelm Leibniz', era: '17th–18th century' },
      { name: 'Samuel Clarke', era: '18th century' },
    ],
    objections: [
      {
        id: 'rowe-obj1',
        title: 'The Brute Fact Reply',
        description: 'The cosmos simply exists as an unexplained brute fact; there is no reason to demand an explanation for the whole.',
        response: 'Accepting brute contingency about the entire cosmos is more mysterious than positing a necessary being. Science itself operates on PSR. Brute-fact acceptance for the whole cosmos is arbitrary: if the cosmos can be a brute fact, anything can be, and rational inquiry collapses.',
        sources: ['Rowe, The Cosmological Argument (1975)']
      },
      {
        id: 'rowe-obj2',
        title: 'Composition Fallacy',
        description: 'Each part of the cosmos has an explanation, so the whole does not need a separate one.',
        response: 'This conflates explanations of parts with explanation of the whole aggregate. A collection of IOU notes does not explain the money; the sum of contingent explanations does not account for the contingency of the whole series. The whole collection of contingent things is itself contingent and requires an external ground.',
        sources: ['Pruss, The Principle of Sufficient Reason (2006)']
      },
      {
        id: 'rowe-obj3',
        title: 'Who created God?',
        description: 'If everything requires an explanation, God requires one too.',
        response: 'The argument specifically posits a necessary being — one whose non-existence is impossible. Such a being has no external cause because its essence entails its existence. God is not "everything" but the terminus of the explanatory chain: a being that exists by the necessity of its own nature.',
        sources: ['Craig, Reasonable Faith (2008)']
      }
    ],
    significance: 'Rowe\'s formulation is notable because it does not depend on the universe having a temporal beginning. Even an eternal cosmos would still be contingent and require a necessary ground. The argument targets the deepest question: why is there anything at all?',
    relatedArguments: ['leibniz', 'kalam', 'thomistic'],
    keySources: [
      'William L. Rowe, The Cosmological Argument (Princeton University Press, 1975)',
      'Alexander Pruss, The Principle of Sufficient Reason (Cambridge University Press, 2006)',
      'Craig & Moreland, eds., The Blackwell Companion to Natural Theology (Wiley-Blackwell, 2009)',
    ]
  },
  {
    id: 'hawking-penrose-singularity',
    slug: 'hawking-penrose-singularity',
    name: 'The Argument from the Big Bang Singularity',
    category: 'cosmological',
    shortDescription: 'The Hawking-Penrose singularity theorems show that space, time, matter, and energy had an absolute beginning — pointing to a timeless, non-spatial first cause.',
    historicalBackground: `Stephen Hawking and Roger Penrose proved in 1965–1970 that, under general relativity, the universe must have begun at a space-time singularity. Robert Jastrow, an agnostic astronomer, drew apologetic implications in God and the Astronomers (1978). William Lane Craig synthesized the physics with philosophical argument. The Borde-Guth-Vilenkin theorem (2003) extended the result to inflation and multiverse scenarios, showing that any universe with average positive expansion must have an absolute beginning.`,
    premises: [
      {
        id: 'hps-p1',
        text: 'The Hawking-Penrose singularity theorems demonstrate that the universe began at a space-time singularity — a boundary of space, time, matter, and energy.',
        defense: 'Under general relativity with realistic energy conditions, all past-directed timelike and null geodesics are incomplete — they terminate. This is not a singularity in matter but in the fabric of spacetime itself. The Borde-Guth-Vilenkin theorem (2003) strengthens this: any spacetime with average positive Hubble expansion must be geodesically incomplete in the past, requiring an absolute beginning regardless of quantum corrections at the Planck era.',
        sources: ['Hawking & Penrose, "The Singularities of Gravitational Collapse" (1970)', 'Borde, Guth & Vilenkin, "Inflationary Spacetimes Are Incomplete" (2003)']
      },
      {
        id: 'hps-p2',
        text: 'Whatever begins to exist has a cause outside and prior to itself; and since space and time began at the singularity, that cause must be timeless and non-spatial.',
        defense: 'If nothing existed before the singularity — no space, no time, no matter — then the cause of the universe must transcend all of these. A timeless, non-spatial cause that is immensely powerful matches what theologians have always called God. The cause cannot be physical; it must be immaterial.',
        sources: ['Craig, "The Caused Beginning of the Universe" (1993)', 'Craig, Reasonable Faith (2008)']
      }
    ],
    conclusion: 'Therefore the universe has a timeless, non-spatial, immensely powerful cause — consistent with the classical description of God.',
    proponents: [
      { name: 'William Lane Craig', era: 'Contemporary' },
      { name: 'Robert Jastrow', era: '20th century' },
      { name: 'Roger Penrose', era: 'Contemporary' },
    ],
    objections: [
      {
        id: 'hps-obj1',
        title: 'Quantum gravity loop-holes',
        description: 'Hawking\'s no-boundary proposal and quantum cosmologies (Vilenkin, Hartle-Hawking) may avoid a hard singularity.',
        response: 'Even the no-boundary model posits a finite quantum past. More decisively, the BGV theorem applies regardless of quantum effects at the Planck era — it operates at the classical spacetime level and shows that the inflationary expansion phase cannot be past-eternal. Even quantum cosmologies require a beginning.',
        sources: ['Borde, Guth & Vilenkin (2003)', 'Vilenkin, Many Worlds in One (2006)']
      },
      {
        id: 'hps-obj2',
        title: 'An eternally inflating multiverse pushes the beginning back indefinitely',
        description: 'A multiverse could be eternal, making the BGV theorem inapplicable.',
        response: 'The BGV theorem explicitly applies to inflationary multiverse models: if the multiverse has average positive Hubble expansion, it must have an absolute beginning. Vilenkin has stated publicly that even multiverse scenarios require a beginning.',
        sources: ['Borde, Guth & Vilenkin (2003)']
      },
      {
        id: 'hps-obj3',
        title: '"Cause" is a category error before time',
        description: 'Causation requires temporal priority; if time began, there can be no "before."',
        response: '"Cause" can be understood as ontological dependence rather than temporal precedence. A timeless being can be the sufficient ground of a temporal effect without itself being in time. Philosophers distinguish between temporal and causal priority; the latter does not require the former.',
        sources: ['Craig, Reasonable Faith (2008)', 'Craig, "The Caused Beginning of the Universe" (1993)']
      }
    ],
    significance: 'The singularity argument is uniquely powerful because it draws on some of the best-confirmed physics of the 20th century. Even atheist astronomer Robert Jastrow acknowledged: "The scientist has scaled the mountains of ignorance; he is about to conquer the highest peak; as he pulls himself over the final rock, he is greeted by a band of theologians who have been sitting there for centuries."',
    relatedArguments: ['kalam', 'leibniz'],
    keySources: [
      'Hawking & Penrose, "The Singularities of Gravitational Collapse and Cosmology," Proc. Royal Society A (1970)',
      'Borde, Guth & Vilenkin, "Inflationary Spacetimes Are Incomplete in Past Directions," Physical Review Letters (2003)',
      'Craig, "The Caused Beginning of the Universe," British Journal for the Philosophy of Science (1993)',
    ]
  },
  {
    id: 'clarke-first-cause',
    slug: 'clarke-first-cause',
    name: "Clarke's Argument from First Cause",
    category: 'cosmological',
    shortDescription: 'Samuel Clarke\'s 1705 demonstration that the chain of contingent beings cannot extend infinitely and must terminate in a necessarily existent being.',
    historicalBackground: `Samuel Clarke (1675–1729) presented his argument in A Demonstration of the Being and Attributes of God (1705), delivered as the Boyle Lectures. Clarke moved beyond Locke's empiricism to construct a rigorous a priori argument that something has always existed, and that the chain of contingent beings must be grounded in a necessary being. His version anticipates Leibniz and directly influenced 18th-century British natural theology.`,
    premises: [
      {
        id: 'clarke-p1',
        text: 'Something exists now; therefore something has always existed (from nothing, nothing comes).',
        defense: 'If there were ever absolutely nothing, there would still be nothing. Something presently exists. Therefore something must have always existed — the non-existence of all things is impossible. This is grounded in the principle ex nihilo nihil fit, which is among the most secure metaphysical principles.',
        sources: ['Clarke, A Demonstration of the Being and Attributes of God (1705)']
      },
      {
        id: 'clarke-p2',
        text: 'Whatever exists either exists necessarily (cannot not exist) or contingently (could not exist).',
        defense: 'This is a logical dichotomy: a thing either exists by the necessity of its own nature, or it exists dependently. Contingent beings can fail to exist; necessary beings cannot. The question is which type of being is ultimately responsible for the existence of contingent things.',
        sources: ['Clarke, A Demonstration of the Being and Attributes of God (1705)', 'Leftow, God and Necessity (2012)']
      },
      {
        id: 'clarke-p3',
        text: 'The chain of contingent beings cannot extend infinitely, for an infinite series of dependent beings has no ultimate sustaining ground.',
        defense: 'Clarke\'s point is ontological, not temporal: even an infinite series of contingent items collectively fails to explain why anything at all exists. The whole series is contingent and requires a ground outside itself. An infinite chain of dependent things is still a chain of dependent things — none of its members can confer necessary existence on the whole.',
        sources: ['Clarke, A Demonstration of the Being and Attributes of God (1705)', 'Rowe, The Cosmological Argument (1975)']
      }
    ],
    conclusion: 'Therefore there exists at least one necessarily existent being that sustains all contingent existence — this being is God.',
    proponents: [
      { name: 'Samuel Clarke', era: '18th century' },
      { name: 'Gottfried Wilhelm Leibniz', era: '17th–18th century' },
    ],
    objections: [
      {
        id: 'clarke-obj1',
        title: 'An infinite regress of contingent causes is coherent',
        description: 'Hume argued that a beginningless series of contingent causes is logically possible and requires no external explanation.',
        response: 'Clarke\'s point is not temporal but ontological: even an infinite series of contingent items collectively fails to explain why anything at all exists rather than nothing. The whole series is contingent and requires a ground outside itself.',
        sources: ['Clarke, A Demonstration of the Being and Attributes of God (1705)']
      },
      {
        id: 'clarke-obj2',
        title: 'The universe itself could be necessary',
        description: 'Physicalists argue the universe or its laws exist necessarily.',
        response: 'Physical laws and constants appear to admit of alternatives — fine-tuning evidence shows the constants could have been different. What exists necessarily cannot coherently be conceived as non-existent, yet we can coherently conceive of a different physics. The universe does not have the marks of necessary existence.',
        sources: ['Leftow, God and Necessity (2012)']
      },
      {
        id: 'clarke-obj3',
        title: "Clarke's God is not clearly personal",
        description: 'The argument establishes a necessary being but not a personal God.',
        response: 'Clarke proceeds in his Demonstration to argue that a being of infinite power, knowledge, and self-sufficiency must also possess will and intelligence. A being of infinite perfection without personality would be less than the greatest conceivable — a separate but connected argument.',
        sources: ['Clarke, A Demonstration of the Being and Attributes of God (1705)']
      }
    ],
    significance: "Clarke's argument exerted enormous influence on 18th-century British theology and philosophy. Its ontological (rather than temporal) framing — that even an eternal cosmos needs a necessary ground — anticipates the most sophisticated contemporary versions of the cosmological argument.",
    relatedArguments: ['leibniz', 'rowe-contingency', 'thomistic'],
    keySources: [
      'Samuel Clarke, A Demonstration of the Being and Attributes of God (Cambridge University Press, 1705/1998)',
      'William L. Rowe, The Cosmological Argument (Princeton University Press, 1975)',
      'Brian Leftow, God and Necessity (Oxford University Press, 2012)',
    ]
  },
  {
    id: 'pruss-psr',
    slug: 'pruss-psr',
    name: "Pruss's Modern Principle of Sufficient Reason Argument",
    category: 'cosmological',
    shortDescription: 'A necessary being with free will is required to explain the conjunction of all contingent truths without collapsing modal distinctions.',
    historicalBackground: `Alexander Pruss (Georgetown) and Robert Koons developed sophisticated contemporary defences of the PSR-based cosmological argument. Pruss's 2006 Cambridge monograph addressed the classic "modal collapse" objection and proposed a "weak PSR" that avoids it. His formulation shows that even a modest demand for explanation — that contingent truths have some explanation — leads to a free, necessary being as the ultimate explanatory terminus.`,
    premises: [
      {
        id: 'pruss-p1',
        text: 'The weak PSR: for every contingent truth, there is an explanation (even if we do not know it).',
        defense: 'The weak PSR does not require that we can find explanations, only that they exist. It underlies all scientific inquiry: scientists assume phenomena have explanations. Denying it leads to radical scepticism about explanation generally. The weak form avoids the modal collapse objection while still generating the argument.',
        sources: ['Pruss, The Principle of Sufficient Reason (2006)', 'Pruss & Gale, "A New Cosmological Argument" (1999)']
      },
      {
        id: 'pruss-p2',
        text: 'The conjunction of all contingent truths is itself a contingent truth and requires an explanation.',
        defense: 'If every contingent truth has an explanation, then the Big Conjunctive Contingent Fact (BCCF) — the conjunction of all contingent truths — also has an explanation. The explanation cannot be another contingent truth (that would enlarge the BCCF) nor can it be a necessary truth alone (necessary truths entail only necessary effects). Therefore the explanation must involve a free act of a necessary being.',
        sources: ['Pruss, The Principle of Sufficient Reason (2006)']
      }
    ],
    conclusion: 'Therefore the explanation of the contingent world involves a free, necessary being whose free choices explain why the contingent world is as it is — this is God.',
    proponents: [
      { name: 'Alexander Pruss', era: 'Contemporary' },
      { name: 'Robert Koons', era: 'Contemporary' },
    ],
    objections: [
      {
        id: 'pruss-obj1',
        title: 'Modal Collapse',
        description: 'If a necessary being necessarily explains all contingent truths, those truths become necessary, collapsing modal distinctions.',
        response: 'Pruss distinguishes between a necessary being and necessary explanations. A necessary being can freely choose among possible worlds; the choice itself is free and not necessitated, so the explained facts remain contingent. The necessity of the explainer does not transfer to the explained.',
        sources: ['Pruss, The Principle of Sufficient Reason (2006)']
      },
      {
        id: 'pruss-obj2',
        title: 'The PSR is itself unjustified',
        description: 'Why accept the PSR?',
        response: 'The weak PSR merely requires that explanations exist, not that we can always find them. Denying it leads to radical scepticism. Moreover, the PSR is a presupposition of all scientific and philosophical inquiry — those who deny it in argument rely on it in practice.',
        sources: ['Pruss, The Principle of Sufficient Reason (2006)', 'Koons, "A New Look at the Cosmological Argument" (1997)']
      },
      {
        id: 'pruss-obj3',
        title: 'Self-explaining facts',
        description: 'Some facts (e.g., mathematical truths) may be self-explanatory; why not physical facts?',
        response: 'Self-explanation applies only to necessary truths. Contingent physical facts — things that could have been otherwise — cannot explain themselves; they require external grounds. The contingency of physical laws is evidenced by the fine-tuning data: the constants could have been different.',
        sources: ['Pruss, The Principle of Sufficient Reason (2006)']
      }
    ],
    significance: "Pruss's formulation is the most technically rigorous contemporary cosmological argument. By using only the weak PSR it avoids the classic modal collapse objection while still establishing a free, necessary, personal being as the ultimate explanation of the contingent world.",
    relatedArguments: ['leibniz', 'rowe-contingency', 'clarke-first-cause'],
    keySources: [
      'Alexander Pruss, The Principle of Sufficient Reason: A Reassessment (Cambridge University Press, 2006)',
      'Alexander Pruss & Richard Gale, "A New Cosmological Argument," Religious Studies 35/4 (1999)',
      'Robert Koons, "A New Look at the Cosmological Argument," American Philosophical Quarterly 34/2 (1997)',
    ]
  }
];
