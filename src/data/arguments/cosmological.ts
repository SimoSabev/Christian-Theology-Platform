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
  }
];
