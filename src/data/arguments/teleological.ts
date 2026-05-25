import { Argument } from './types';

export const teleologicalArguments: Argument[] = [
  {
    id: 'intelligent-design-behe',
    slug: 'intelligent-design-behe',
    name: 'Intelligent Design — Irreducible Complexity (Behe)',
    category: 'teleological',
    shortDescription: 'Biochemical systems with multiple interdependent parts that cannot function if any part is removed could not have arisen by gradual Darwinian evolution — they require intelligent design.',
    historicalBackground: `Michael Behe, a biochemist at Lehigh University, introduced the concept of irreducible complexity in Darwin's Black Box (1996). He argued that certain molecular machines — the bacterial flagellum, blood-clotting cascade, and immune system — are systems in which every part is necessary for function, making step-by-step Darwinian evolution impossible. Behe's argument revived design arguments in biology after a century in which Darwinism had dominated. It attracted intense scientific and legal attention, including the Kitzmiller v. Dover case (2005).`,
    premises: [
      {
        id: 'id-behe-p1',
        text: 'Some biochemical systems are irreducibly complex: they consist of multiple interdependent parts, each of which is necessary for function, and removing any part destroys function.',
        defense: 'The bacterial flagellum — a rotary motor propelling bacteria — requires approximately 40 unique protein components working together. Remove any one and the flagellum does not work at reduced efficiency; it does not work at all. Similar analysis applies to the blood-clotting cascade and the adaptive immune system. These systems exhibit specified complexity: they are both highly improbable and functionally specified.',
        sources: ['Behe, Darwin\'s Black Box (1996)', 'Dembski, The Design Inference (1998)']
      },
      {
        id: 'id-behe-p2',
        text: 'Irreducibly complex systems cannot be produced by gradual, step-by-step Darwinian evolution because there is no functional intermediate to select.',
        defense: 'Natural selection can only select for functional advantages at each step. If the flagellum requires all 40 proteins simultaneously to function, there is no selectable intermediate — each partial assembly confers no advantage and would be selected against or lost by drift. The Darwinian mechanism requires a continuous sequence of small functional improvements; irreducible complexity breaks that sequence.',
        sources: ['Behe, Darwin\'s Black Box (1996)', 'Behe, Darwin Devolves (2019)']
      }
    ],
    conclusion: 'Therefore the best explanation for irreducibly complex biochemical systems is intelligent design — purposeful arrangement by a designing intellect.',
    proponents: [
      { name: 'Michael Behe', era: 'Contemporary' },
      { name: 'William Dembski', era: 'Contemporary' },
    ],
    objections: [
      {
        id: 'id-behe-obj1',
        title: 'Co-option / Exaptation',
        description: 'Parts of complex systems may have originally served different functions and were later co-opted (e.g., flagellar proteins are homologous to the type-III secretion system).',
        response: 'Behe argues that co-option only shifts the problem: the co-opted subsystem itself requires explanation, and the coordinated integration of multiple co-opted parts still requires a directing intelligence. The flagellum needs ~40 unique proteins not found in the TTSS. Co-option describes a possible mechanism but does not demonstrate that the mechanism is adequate.',
        sources: ['Behe, Darwin\'s Black Box (1996)']
      },
      {
        id: 'id-behe-obj2',
        title: 'Dover Ruling (2005)',
        description: 'A federal court ruled that intelligent design is not science.',
        response: 'Legal rulings do not determine scientific truth. The philosophical question of whether design inferences are legitimate in biology is separate from a court\'s constitutional ruling about school curricula. Scientists and philosophers debate whether design inferences are methodologically legitimate; a judge\'s ruling on establishment clause issues does not settle the philosophical question.',
        sources: ['Behe, Darwin Devolves (2019)']
      },
      {
        id: 'id-behe-obj3',
        title: 'God-of-the-Gaps',
        description: 'Intelligent design merely points to current ignorance of evolutionary pathways.',
        response: 'Behe claims positive evidence for design based on the known structure of biochemical systems, not merely ignorance. The argument is an inference to the best explanation: given what we know about the origin of complex specified information, intelligent agency is the only known cause that produces it. The gap is in principle, not merely in current knowledge.',
        sources: ['Behe, Darwin\'s Black Box (1996)', 'Dembski, The Design Inference (1998)']
      }
    ],
    significance: 'Behe\'s argument brought design reasoning into the heart of molecular biology and sparked the most intensive scientific and philosophical debate about evolution and design since the 19th century. Even critics concede that the bacterial flagellum\'s complexity is remarkable.',
    relatedArguments: ['fine-tuning', 'meyer-dna'],
    keySources: [
      'Michael Behe, Darwin\'s Black Box: The Biochemical Challenge to Evolution (Free Press, 1996)',
      'Michael Behe, Darwin Devolves (HarperOne, 2019)',
      'William Dembski, The Design Inference (Cambridge University Press, 1998)',
    ],
    body: `The Teleological Argument — from the Greek telos, meaning purpose or end — argues that the order, complexity, and fine-tuning observable in the natural world are best explained by the existence of an intelligent designer. It is one of the oldest arguments for God's existence, appearing in Plato, Cicero, and prominently in Thomas Aquinas's Fifth Way, but has received its most rigorous modern formulations through discoveries in molecular biology and cosmology.

Michael Behe's argument from Irreducible Complexity brings design reasoning into the heart of biochemistry. The bacterial flagellum — a molecular machine that functions as a rotary propeller, enabling certain bacteria to swim — is composed of approximately forty protein parts, each precisely fitted to the others. Remove any single part, and the flagellum ceases to function entirely. It is, in Behe's terminology, irreducibly complex: it requires all its parts simultaneously to perform its function, and therefore cannot have evolved through a gradual stepwise Darwinian process that selected for incremental improvements.

Darwin himself acknowledged this potential challenge to his theory: "If it could be demonstrated that any complex organ existed which could not possibly have been formed by numerous, successive, slight modifications, my theory would absolutely break down." Behe argues that the bacterial flagellum is precisely such an organ. While biochemists have proposed mechanisms like co-option — borrowing parts from other biological systems — Behe argues that these proposed pathways require the simultaneous availability of multiple coordinated parts, which merely relocates the problem rather than solving it.

The fine-tuning argument, developed by physicists and philosophers including Robin Collins and John Leslie, examines the initial conditions of the universe. The fundamental constants of nature — the gravitational constant, the strong nuclear force, the electromagnetic force, the cosmological constant — are calibrated to extraordinary precision to permit the existence of complex chemistry and therefore life. If the gravitational constant were slightly stronger, stars would burn too hot and too briefly for life to develop. If slightly weaker, stars would never form at all. The cosmological constant — the energy density of empty space — is fine-tuned to one part in 10^120, a precision so extreme that it defies any naturalistic explanation.

The philosopher Robin Collins calculates that the probability of this fine-tuning occurring by chance is so vanishingly small — on the order of 10^-10^123 — that even a multiverse of a trillion trillion universes would not adequately explain it by chance. The theistic explanation — that a supremely intelligent Creator designed the initial conditions to permit life — is not only philosophically parsimonious but the only known explanation that actually explains fine-tuning rather than merely relocating it to a multiverse generator (which itself would require fine-tuned laws).

Stephen C. Meyer's argument from biological information extends design reasoning to the DNA molecule. The digital information encoded in DNA — specifying the precise sequence of amino acids in every protein in every living organism — represents specified complexity of the highest order. The human genome contains approximately 3 billion base pairs encoding roughly 20,000 genes, with a functional information content estimated in billions of bits. Every known source of high-level specified information, from books to computer programs to linguistic messages, is traceable to a mind. The inference to a cosmic mind as the source of biological information is therefore not a god-of-the-gaps argument but a positive inference based on what we know causes information to exist.

The Teleological Argument, in its modern form, does not depend on a naive pre-Darwinian analogy between watches and organisms. It draws instead on the most sophisticated findings of contemporary physics, chemistry, and molecular biology to argue that the universe bears the hallmarks of intentional design at the most fundamental levels of its existence — from the constants of physics to the genetic code of every living cell.`,
    churchFatherQuotes: [
      {
        author: 'Thomas Aquinas',
        work: 'Summa Theologiae, I, Question 2, Article 3 (Fifth Way)',
        quote: 'We see that things which lack knowledge, such as natural bodies, act for an end, and this is evident from their acting always, or nearly always, in the same way, so as to obtain the best result. Hence it is plain that they achieve their end, not fortuitously, but designedly. Now whatever lacks knowledge cannot move towards an end, unless it be directed by some being endowed with knowledge and intelligence; as the arrow is directed by the archer. Therefore some intelligent being exists by whom all natural things are directed to their end; and this being we call God.',
      },
      {
        author: 'Basil the Great',
        work: 'Hexaemeron, Homily I',
        quote: 'In the beginning God created the heaven and the earth. What a subject for the mind to contemplate! If we were to examine each word of this text, we would find that it contains a whole theology. For it implies a beginning, a Creator, and a creation ordered by wisdom and design. The creation reflects the wisdom of its Author, as a painting reflects the mind of the painter.',
      },
      {
        author: 'John of Damascus',
        work: 'An Exact Exposition of the Orthodox Faith, Book I, Ch. 3',
        quote: 'The very continuity of the creation, and its preservation and government, teach us that there does exist a Deity, who supports and maintains and preserves and ever provides for this universe. For how could opposite natures, such as fire and water, air and earth, have combined with each other so as to form one complete world, if there were not some omnipotent power which bound them together and always preserves them from dissolution?',
      },
    ],
    simpleObjections: [
      {
        title: 'Natural selection can produce the appearance of design without a designer',
        rebuttal: 'Natural selection can explain the gradual modification of pre-existing functional systems, but it cannot explain the origin of the very information-bearing systems on which it depends. Before natural selection can operate, there must be self-replicating organisms with genetic information. The origin of the first organism — with its information-processing machinery — represents precisely the kind of specified complexity that requires an intelligent cause. Furthermore, Behe\'s irreducible complexity argument targets systems where no functional precursor pathway exists for selection to traverse.',
      },
      {
        title: 'The fine-tuning could be explained by a multiverse',
        rebuttal: 'The multiverse hypothesis, even if granted, merely relocates the fine-tuning problem. For a multiverse to generate a variety of universes with different constants, the multiverse-generating mechanism itself must be fine-tuned — it must have the laws, constants, and initial conditions necessary to produce universes at all, and specifically the right variety. Furthermore, a multiverse is unobservable and unfalsifiable, making it more speculative than theism. The theistic hypothesis is simpler: one Intelligent Designer rather than an infinite ensemble of universes.',
      },
      {
        title: 'Who designed the designer? Intelligent design just pushes the problem back a step',
        rebuttal: 'The demand to explain the designer is a misapplication of the design inference. When archaeologists discover an arrowhead, they infer design without needing to explain who designed the designer\'s cognitive faculties. The inference to design is warranted by the evidence at hand — specified complexity, irreducible complexity, fine-tuning — not by having a complete explanation of the designer. God as the ultimate creative mind is by definition uncreated and self-existent; the regress stops at an eternal, necessary being.',
      },
    ],
    bibliography: [
      'Behe, Michael. Darwin\'s Black Box: The Biochemical Challenge to Evolution. Free Press, 1996.',
      'Meyer, Stephen C. Signature in the Cell: DNA and the Evidence for Intelligent Design. HarperOne, 2009.',
      'Collins, Robin. "The Teleological Argument." In The Blackwell Companion to Natural Theology, ed. Craig and Moreland. Wiley-Blackwell, 2009.',
      'Dembski, William. The Design Inference. Cambridge University Press, 1998.',
      'Leslie, John. Universes. Routledge, 1989.',
    ],
  },
  {
    id: 'meyer-dna',
    slug: 'meyer-dna',
    name: 'The Argument from Biological Information / DNA (Meyer)',
    category: 'teleological',
    shortDescription: 'DNA contains specified complexity — functional information analogous to a written message — which in all known experience arises only from intelligent minds, not undirected physical processes.',
    historicalBackground: `Stephen C. Meyer, a philosopher of science at the Discovery Institute, argued in Signature in the Cell (2009) and Darwin's Doubt (2013) that the origin-of-life problem is fundamentally an information problem. DNA encodes the instructions for building proteins in a four-character chemical alphabet; the specificity and complexity of this information mirrors the informational content of human language. Meyer argues that the only known cause sufficient to produce specified complexity is intelligent agency.`,
    premises: [
      {
        id: 'meyer-p1',
        text: 'DNA contains specified complexity — information that is both highly improbable and functionally specified (the sequence needed to produce working proteins).',
        defense: 'A functional protein requires amino acids in a specific sequence; random sequences produce non-functional polymers. The probability of even a single short functional protein arising by chance is approximately 1 in 10^77 (Douglas Axe). DNA is not merely complex (like a crystal, which is ordered but not specified) but specified: it matches an independent functional pattern.',
        sources: ['Meyer, Signature in the Cell (2009)', 'Axe, Undeniable (2016)']
      },
      {
        id: 'meyer-p2',
        text: 'In our uniform experience, specified complexity arises only from intelligent agents, never from undirected physical processes.',
        defense: 'This is Meyer\'s inductive premise based on the known causes of specified complexity. Every case in which we observe information of this kind — language, software code, engineering blueprints — it originates from a mind. Natural processes produce order (crystals) or complexity (weather) but not specified functional information. The best explanation of the origin of biological information is therefore an intelligent cause.',
        sources: ['Meyer, Signature in the Cell (2009)', 'Dembski, The Design Inference (1998)']
      }
    ],
    conclusion: 'Therefore the best explanation for the specified complexity in DNA is an intelligent cause — mind rather than matter.',
    proponents: [
      { name: 'Stephen C. Meyer', era: 'Contemporary' },
      { name: 'William Dembski', era: 'Contemporary' },
      { name: 'Douglas Axe', era: 'Contemporary' },
    ],
    objections: [
      {
        id: 'meyer-obj1',
        title: 'Self-organization',
        description: 'RNA world and chemical-evolution scenarios show that complex chemistry can self-organize.',
        response: 'Self-organization produces order (like crystals), but specified complexity requires functional sequences. The RNA world still faces the same information problem: even RNA catalysts require specific nucleotide sequences to function. Self-organization explains the wrong kind of complexity.',
        sources: ['Meyer, Signature in the Cell (2009)']
      },
      {
        id: 'meyer-obj2',
        title: 'Natural selection generates information',
        description: 'Mutation plus selection is a known information-generating mechanism.',
        response: 'Selection can select among already-existing functional sequences but cannot generate the first functional sequence. The problem of the origin of life precedes selection; there is nothing to select before self-replication exists. The argument targets the origin of the first functional biomolecules, not subsequent evolution.',
        sources: ['Meyer, Darwin\'s Doubt (2013)']
      }
    ],
    significance: 'Meyer\'s argument addresses the deepest problem in abiogenesis: not the chemistry of molecules but the origin of the information that directs them. The Cambrian explosion — in which ~20 new animal body plans appeared in geological terms virtually simultaneously — sharpens the argument by requiring the injection of vast new biological information.',
    relatedArguments: ['intelligent-design-behe', 'fine-tuning'],
    keySources: [
      'Stephen C. Meyer, Signature in the Cell (HarperOne, 2009)',
      'Stephen C. Meyer, Darwin\'s Doubt (HarperOne, 2013)',
      'William Dembski, The Design Inference (Cambridge University Press, 1998)',
    ]
  },
  {
    id: 'argument-from-beauty',
    slug: 'argument-from-beauty',
    name: 'The Argument from Beauty',
    category: 'teleological',
    shortDescription: 'The deep, objective aesthetic beauty of the universe — in mathematics, music, and the natural world — is best explained by a God who is himself the ground of beauty.',
    historicalBackground: `Richard Swinburne develops an argument from beauty in The Existence of God (2004), treating it as part of a cumulative case. Roger Scruton explored the theological dimensions of aesthetic experience in The Face of God (2012). The argument draws on C.S. Lewis's observations about longing and beauty (Sehnsucht) and on the mathematical beauty appreciated by physicists like Paul Dirac, who held that beautiful equations are more likely to be true.`,
    premises: [
      {
        id: 'beauty-p1',
        text: 'The universe exhibits deep, objective aesthetic beauty — in mathematics, music, the natural world, and human experience.',
        defense: 'Physicists consistently describe fundamental equations as beautiful: Dirac\'s equation, Einstein\'s field equations, the Euler identity. This beauty is not imposed by human preference but discovered. Natural structures — the Fibonacci sequence in plant growth, the golden ratio, the harmonic series in music — exhibit mathematical elegance that was not designed by humans but found by them.',
        sources: ['Swinburne, The Existence of God (2004)', 'Scruton, The Face of God (2012)']
      },
      {
        id: 'beauty-p2',
        text: 'If there is a God who creates for good reasons, we would expect a beautiful creation; beauty is evidence of a creator who values it.',
        defense: 'Beauty is not required for survival or bare physical function. Evolutionary accounts explain only its proximate causes, not its objective depth. A universe created by a perfectly good, beautiful being would naturally be beautiful. The convergence of mathematical elegance, natural grandeur, and human aesthetic response is more expected on theism than on naturalism.',
        sources: ['Swinburne, The Existence of God (2004)', 'Ward, God, Chance and Necessity (1996)']
      }
    ],
    conclusion: 'Therefore the deep, multi-dimensional beauty of the universe is best explained by God, who is himself the ground of beauty.',
    proponents: [
      { name: 'Richard Swinburne', era: 'Contemporary' },
      { name: 'Roger Scruton', era: 'Contemporary' },
      { name: 'John Polkinghorne', era: 'Contemporary' },
    ],
    objections: [
      {
        id: 'beauty-obj1',
        title: 'Beauty is subjective',
        description: 'There is no objective beauty; aesthetic judgments are culturally conditioned.',
        response: 'Cross-cultural convergence on certain forms of beauty (golden ratio, harmonic ratios in music, symmetry) and the mathematical beauty discovered by physicists who did not seek it suggest an objective dimension. The mathematical beauty of physics — Euler\'s identity, general relativity — is not culturally relative.',
        sources: ['Swinburne, The Existence of God (2004)']
      },
      {
        id: 'beauty-obj2',
        title: 'There is also ugliness in nature',
        description: 'The natural world contains enormous suffering, parasitism, and ugliness — undermining the beauty argument.',
        response: 'The existence of ugliness does not negate the evidential weight of beauty; it raises the problem of evil, which is a separate discussion. Swinburne notes that a mix of beauty and disorder is consistent with a God who grants natural autonomy. The beauty of the fundamental laws persists even where the surface world is harsh.',
        sources: ['Swinburne, The Existence of God (2004)']
      }
    ],
    significance: 'The argument from beauty is distinctive because it draws on aesthetic experience that virtually every human shares. Beauty is not a by-product of survival — it exceeds what natural selection requires — which makes its depth and universality philosophically significant.',
    relatedArguments: ['fine-tuning', 'mathematics-wigner'],
    keySources: [
      'Richard Swinburne, The Existence of God, 2nd ed. (Oxford University Press, 2004), ch. 6',
      'Roger Scruton, The Face of God (Continuum, 2012)',
      'Keith Ward, God, Chance and Necessity (Oneworld, 1996)',
    ]
  },
  {
    id: 'mathematics-wigner',
    slug: 'mathematics-wigner',
    name: 'The Unreasonable Effectiveness of Mathematics (Wigner)',
    category: 'teleological',
    shortDescription: 'The uncanny precision with which abstract mathematics — developed with no physical application in mind — describes physical reality points to a rational mind behind the universe.',
    historicalBackground: `Eugene Wigner, Nobel laureate physicist, published his famous essay "The Unreasonable Effectiveness of Mathematics in the Natural Sciences" in 1960. He noted that mathematical structures developed purely abstractly — non-Euclidean geometry, complex numbers, group theory — turn out with startling regularity to describe physical reality precisely. John Polkinghorne, physicist-theologian, drew theistic implications: a universe whose deep structure is mathematical implies a rational creator who "thinks mathematically."`,
    premises: [
      {
        id: 'math-p1',
        text: 'Mathematics is developed by pure reason, often with no physical application in mind, yet mathematical structures consistently describe physical reality with uncanny precision.',
        defense: 'Non-Euclidean geometry, developed in the 19th century as a pure mathematical curiosity, turned out to be the geometry of spacetime in general relativity. Complex numbers (developed to solve polynomial equations) are indispensable in quantum mechanics. Lie groups and fiber bundles — pure mathematics — are the natural language of the Standard Model. This pattern is too deep and systematic to be coincidental selection bias.',
        sources: ['Wigner, "The Unreasonable Effectiveness of Mathematics" (1960)', 'Polkinghorne, The Faith of a Physicist (1994)']
      },
      {
        id: 'math-p2',
        text: 'There is no naturalistic reason why abstract mathematical structures should map onto physical reality so exactly.',
        defense: 'If the universe were merely a blind physical process, there is no reason to expect it to be mathematical at its foundations. Mathematics is a product of rational minds; its deep applicability to nature suggests a pre-established harmony between mind and cosmos — best explained by a rational mind that created both mathematics and the physical world in accordance with it.',
        sources: ['Steiner, The Applicability of Mathematics as a Philosophical Problem (1998)', 'Polkinghorne, The Faith of a Physicist (1994)']
      }
    ],
    conclusion: 'The best explanation for the unreasonable effectiveness of mathematics is that the universe was created by a rational mind that structured it mathematically.',
    proponents: [
      { name: 'Eugene Wigner', era: '20th century' },
      { name: 'John Polkinghorne', era: 'Contemporary' },
      { name: 'Max Tegmark', era: 'Contemporary (secular framing)' },
    ],
    objections: [
      {
        id: 'math-obj1',
        title: 'Selection bias',
        description: 'We only remember the mathematical tools that worked; many mathematical structures have no physical application.',
        response: 'The precision of the fit — general relativity\'s field equations, the Standard Model Lagrangian, quantum field theory — goes far beyond what selection bias can explain. The depth and specificity of the match between abstract mathematics and physical reality is the puzzle, not merely occasional correspondence.',
        sources: ['Wigner, "The Unreasonable Effectiveness of Mathematics" (1960)']
      },
      {
        id: 'math-obj2',
        title: 'We developed math to describe the world',
        description: 'Mathematics originated in counting and geometry — it was developed to fit experience, so its applicability is no surprise.',
        response: 'Modern physics uses mathematical structures — Hilbert spaces, Lie groups, fiber bundles, spinors — developed centuries before any known application and for purely abstract reasons. The abstractness and non-empirical origin of the relevant mathematics is precisely Wigner\'s point.',
        sources: ['Wigner, "The Unreasonable Effectiveness of Mathematics" (1960)', 'Steiner, The Applicability of Mathematics (1998)']
      }
    ],
    significance: 'The argument from mathematics is especially compelling because it comes from within hard science. Wigner was a secular physicist with no theological agenda; his puzzlement was genuine. The argument sits at the intersection of philosophy of mathematics, physics, and natural theology.',
    relatedArguments: ['fine-tuning', 'argument-from-beauty'],
    keySources: [
      'Eugene Wigner, "The Unreasonable Effectiveness of Mathematics in the Natural Sciences," Communications on Pure and Applied Mathematics 13/1 (1960)',
      'John Polkinghorne, The Faith of a Physicist (Princeton University Press, 1994)',
      'Mark Steiner, The Applicability of Mathematics as a Philosophical Problem (Harvard University Press, 1998)',
    ]
  },
  {
    id: 'fine-tuning',
    slug: 'fine-tuning',
    name: 'The Fine-Tuning Argument',
    category: 'teleological',
    shortDescription: 'The fundamental constants of physics are fine-tuned within extraordinarily narrow ranges for life — suggesting intentional calibration.',
    historicalBackground: `The fine-tuning argument emerged from 20th-century physics discoveries revealing that the fundamental constants of the universe are calibrated within extraordinarily narrow ranges necessary for complex life. Physicists such as Fred Hoyle, John Barrow, Frank Tipler, and Paul Davies documented these remarkable coincidences. The argument was given rigorous philosophical formulation by Robin Collins and popularized by William Lane Craig. The three competing explanations are physical necessity, chance, and design.`,
    premises: [
      {
        id: 'ft-p1',
        text: 'The fine-tuning of the universe is due to either physical necessity, chance, or design.',
        defense: 'These are the only three possible explanations for the fine-tuning. The constants are either: (a) the only physically possible values (necessity), (b) extraordinarily lucky coincidences (chance), or (c) intentionally set by an intelligent agent (design). This is a logically exhaustive trilemma.',
        sources: ['Collins, "The Fine-Tuning Design Argument" in Reason for the Hope Within (1999)']
      },
      {
        id: 'ft-p2',
        text: 'It is not due to physical necessity or chance.',
        defense: 'Physical necessity: There is no known reason why the constants must have the values they do. String theory, which was hoped to yield a unique solution, instead produces a "landscape" of 10^500 possible solutions with different constants. Chance: The probability of all constants falling in life-permitting ranges by chance is astronomically small. For example, the cosmological constant is fine-tuned to 1 part in 10^120. Roger Penrose calculated that the initial entropy of the universe was fine-tuned to 1 part in 10^(10^123). These are not probabilities that rational observers should accept as chance.',
        sources: ['Penrose, The Emperor\'s New Mind (1989)', 'Collins, "The Teleological Argument" (2009)', 'Barrow & Tipler, The Anthropic Cosmological Principle (1986)']
      }
    ],
    conclusion: 'Therefore, the fine-tuning of the universe is due to design.',
    proponents: [
      { name: 'Robin Collins', era: 'Contemporary' },
      { name: 'William Lane Craig', era: 'Contemporary' },
      { name: 'John Lennox', era: 'Contemporary' },
    ],
    objections: [
      {
        id: 'ft-obj1',
        title: 'The multiverse hypothesis',
        description: 'If there are a vast (perhaps infinite) number of universes with randomly varying constants, it is not surprising that at least one has life-permitting values — ours. We observe this universe simply because we could not exist in a non-life-permitting one (selection effect).',
        response: 'The multiverse hypothesis faces several problems: (1) It is speculative — there is no direct evidence for other universes. (2) The multiverse itself requires fine-tuning: the universe-generating mechanism must have the right laws and properties. (3) It violates Occam\'s Razor — postulating a vast number of unobservable entities. (4) Even granting an infinite multiverse, it only shifts the question: why does a multiverse exist at all? The fine-tuning problem reappears at a higher level.',
        sources: ['Collins (2009)', 'Craig, Reasonable Faith (2008)']
      }
    ],
    significance: 'The fine-tuning argument is considered one of the strongest scientific arguments for theism. Even skeptics like Fred Hoyle acknowledged: "A common sense interpretation of the facts suggests that a superintellect has monkeyed with physics."',
    relatedArguments: ['kalam', 'moral'],
    keySources: [
      'Robin Collins, "The Teleological Argument" in The Blackwell Companion to Natural Theology (2009)',
      'Roger Penrose, The Emperor\'s New Mind (1989)',
    ]
  }
];
