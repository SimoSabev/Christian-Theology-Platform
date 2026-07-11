import { TreeNode } from '../arguments/types';

export const intelligentDesignBeheTree: TreeNode = {
  id: 'id-behe-root',
  type: 'argument',
  text: 'Intelligent Design — Irreducible Complexity (Behe)',
  children: [
    {
      id: 'id-behe-conclusion',
      type: 'conclusion',
      text: 'Therefore the best explanation for irreducibly complex biochemical systems is intelligent design — purposeful arrangement by a designing intellect',
      children: []
    },
    {
      id: 'id-behe-p1',
      type: 'premise',
      text: 'Some biochemical systems are irreducibly complex: they consist of multiple interdependent parts, each of which is necessary for function, and removing any part destroys function',
      status: 'defended',
      children: [
        {
          id: 'id-behe-p1-s1',
          type: 'support',
          text: 'The bacterial flagellum — a rotary motor with roughly 40 unique protein components — does not merely lose efficiency when a part is removed; it fails completely, since no part is redundant',
          sources: ["Behe, Darwin's Black Box (1996)"]
        },
        {
          id: 'id-behe-p1-s2',
          type: 'support',
          text: 'The same all-or-nothing interdependence appears in the blood-clotting cascade and the adaptive immune system, suggesting the pattern is not unique to the flagellum',
          sources: ["Behe, Darwin's Black Box (1996)"]
        },
        {
          id: 'id-behe-p1-s3',
          type: 'support',
          text: 'These systems exhibit specified complexity: they are simultaneously highly improbable to arise by chance and functionally specified, matching an independent pattern of working machinery',
          sources: ['Dembski, The Design Inference (1998)']
        },
        {
          id: 'id-behe-p1-obj1',
          type: 'objection',
          text: 'Dover Ruling (2005): a federal court ruled that intelligent design is not science',
          children: [
            {
              id: 'id-behe-p1-obj1-r1',
              type: 'response',
              text: "Legal rulings do not determine scientific truth; the Dover case settled a constitutional question about public school curricula, not the underlying philosophical question of whether design inferences are methodologically legitimate in biology",
              sources: ['Behe, Darwin Devolves (2019)']
            }
          ]
        }
      ]
    },
    {
      id: 'id-behe-p2',
      type: 'premise',
      text: 'Irreducibly complex systems cannot be produced by gradual, step-by-step Darwinian evolution because there is no functional intermediate to select',
      status: 'defended',
      children: [
        {
          id: 'id-behe-p2-s1',
          type: 'support',
          text: 'Natural selection can only preserve a variant that confers some functional advantage at each step; it cannot look ahead to a future assembled function',
          sources: ["Behe, Darwin's Black Box (1996)"]
        },
        {
          id: 'id-behe-p2-s2',
          type: 'support',
          text: 'If the flagellum requires all ~40 proteins simultaneously, every partial assembly confers no advantage and would be selected against or simply lost to genetic drift',
          sources: ["Behe, Darwin's Black Box (1996)"]
        },
        {
          id: 'id-behe-p2-s3',
          type: 'support',
          text: 'The Darwinian mechanism depends on a continuous sequence of small functional improvements; irreducible complexity breaks that sequence at its foundation',
          sources: ['Behe, Darwin Devolves (2019)']
        },
        {
          id: 'id-behe-p2-obj1',
          type: 'objection',
          text: 'Co-option / Exaptation: parts of complex systems may have originally served different functions and were later repurposed — flagellar proteins are homologous to the type-III secretion system (TTSS)',
          children: [
            {
              id: 'id-behe-p2-obj1-r1',
              type: 'response',
              text: 'Co-option only relocates the problem: the co-opted subsystem itself requires explanation, and coordinating multiple co-opted parts into one new integrated function still requires a directing intelligence',
              sources: ["Behe, Darwin's Black Box (1996)"]
            },
            {
              id: 'id-behe-p2-obj1-r2',
              type: 'response',
              text: 'The flagellum needs roughly 40 unique proteins not found in the TTSS, so co-option describes a conceivable mechanism without demonstrating that it is actually adequate to the task',
              sources: ["Behe, Darwin's Black Box (1996)"]
            }
          ]
        },
        {
          id: 'id-behe-p2-obj2',
          type: 'objection',
          text: 'God-of-the-Gaps: intelligent design merely points to current ignorance of evolutionary pathways',
          children: [
            {
              id: 'id-behe-p2-obj2-r1',
              type: 'response',
              text: 'Behe claims positive evidence for design from the known structure of biochemical systems, not merely an absence of an explanation — this is an inference to the best explanation, not an argument from ignorance',
              sources: ["Behe, Darwin's Black Box (1996)"]
            },
            {
              id: 'id-behe-p2-obj2-r2',
              type: 'response',
              text: 'Given what is known about the causes of complex specified information, intelligent agency is the only known cause that produces it; the gap is in principle, not merely in current knowledge',
              sources: ['Dembski, The Design Inference (1998)']
            }
          ]
        }
      ]
    }
  ]
};

export const meyerDnaTree: TreeNode = {
  id: 'meyer-root',
  type: 'argument',
  text: 'The Argument from Biological Information / DNA (Meyer)',
  children: [
    {
      id: 'meyer-conclusion',
      type: 'conclusion',
      text: 'Therefore the best explanation for the specified complexity in DNA is an intelligent cause — mind rather than matter',
      children: []
    },
    {
      id: 'meyer-p1',
      type: 'premise',
      text: 'DNA contains specified complexity — information that is both highly improbable and functionally specified (the sequence needed to produce working proteins)',
      status: 'defended',
      children: [
        {
          id: 'meyer-p1-s1',
          type: 'support',
          text: 'A functional protein requires amino acids in a specific sequence; random sequences overwhelmingly produce non-functional polymers',
          sources: ['Meyer, Signature in the Cell (2009)']
        },
        {
          id: 'meyer-p1-s2',
          type: 'support',
          text: "Douglas Axe's laboratory work found the probability of even a single short functional protein arising by chance to be approximately 1 in 10^77",
          sources: ['Axe, Undeniable (2016)']
        },
        {
          id: 'meyer-p1-s3',
          type: 'support',
          text: 'DNA is not merely complex like a crystal, which is ordered but not specified — it is specified complexity, matching an independent functional pattern the way a sentence matches the rules of grammar and meaning',
          sources: ['Meyer, Signature in the Cell (2009)']
        },
        {
          id: 'meyer-p1-obj1',
          type: 'objection',
          text: 'Self-organization: RNA world and chemical-evolution scenarios show that complex chemistry can self-organize without a designer',
          children: [
            {
              id: 'meyer-p1-obj1-r1',
              type: 'response',
              text: 'Self-organization produces mere order, like a crystal lattice, but specified complexity requires functional sequences — a different kind of pattern entirely',
              sources: ['Meyer, Signature in the Cell (2009)']
            },
            {
              id: 'meyer-p1-obj1-r2',
              type: 'response',
              text: 'The RNA world hypothesis still faces the same information problem, since even self-replicating RNA catalysts require specific nucleotide sequences to function',
              sources: ['Meyer, Signature in the Cell (2009)']
            }
          ]
        }
      ]
    },
    {
      id: 'meyer-p2',
      type: 'premise',
      text: 'In our uniform experience, specified complexity arises only from intelligent agents, never from undirected physical processes',
      status: 'defended',
      children: [
        {
          id: 'meyer-p2-s1',
          type: 'support',
          text: "This is Meyer's inductive premise: every observed instance of specified complexity — language, software code, engineering blueprints — is traceable to a mind, without a single known exception",
          sources: ['Meyer, Signature in the Cell (2009)']
        },
        {
          id: 'meyer-p2-s2',
          type: 'support',
          text: 'Undirected natural processes are observed to produce mere order (crystals) or mere randomness (weather, debris) but never specified functional information',
          sources: ['Dembski, The Design Inference (1998)']
        },
        {
          id: 'meyer-p2-s3',
          type: 'support',
          text: 'Because intelligent agency is the only known cause of specified complexity, it is the best explanation for the origin of biological information',
          sources: ['Meyer, Signature in the Cell (2009)']
        },
        {
          id: 'meyer-p2-obj1',
          type: 'objection',
          text: 'Natural selection generates information: mutation plus selection is a known information-generating mechanism',
          children: [
            {
              id: 'meyer-p2-obj1-r1',
              type: 'response',
              text: 'Selection can only act on and preserve already-existing functional sequences; it cannot generate the first functional sequence from nothing',
              sources: ["Meyer, Darwin's Doubt (2013)"]
            },
            {
              id: 'meyer-p2-obj1-r2',
              type: 'response',
              text: 'The problem of the origin of life precedes selection altogether — there is nothing for selection to act on before self-replication exists, so the argument targets the origin of the first biomolecules, not subsequent evolution',
              sources: ["Meyer, Darwin's Doubt (2013)"]
            }
          ]
        }
      ]
    }
  ]
};

export const argumentFromBeautyTree: TreeNode = {
  id: 'beauty-root',
  type: 'argument',
  text: 'The Argument from Beauty',
  children: [
    {
      id: 'beauty-conclusion',
      type: 'conclusion',
      text: 'Therefore the deep, multi-dimensional beauty of the universe is best explained by God, who is himself the ground of beauty',
      children: []
    },
    {
      id: 'beauty-p1',
      type: 'premise',
      text: 'The universe exhibits deep, objective aesthetic beauty — in mathematics, music, the natural world, and human experience',
      status: 'defended',
      children: [
        {
          id: 'beauty-p1-s1',
          type: 'support',
          text: "Physicists consistently describe fundamental equations as beautiful — Dirac's equation, Einstein's field equations, the Euler identity — and this beauty is discovered, not imposed by human preference",
          sources: ['Swinburne, The Existence of God (2004)']
        },
        {
          id: 'beauty-p1-s2',
          type: 'support',
          text: 'Natural structures such as the Fibonacci sequence in plant growth, the golden ratio, and the harmonic series in music exhibit a mathematical elegance that was found by humans, not designed by them',
          sources: ['Scruton, The Face of God (2012)']
        },
        {
          id: 'beauty-p1-obj1',
          type: 'objection',
          text: 'Beauty is subjective: there is no objective beauty, only culturally conditioned aesthetic judgments',
          children: [
            {
              id: 'beauty-p1-obj1-r1',
              type: 'response',
              text: 'Cross-cultural convergence on certain forms — the golden ratio, harmonic ratios in music, symmetry — suggests an objective dimension to beauty rather than mere cultural preference',
              sources: ['Swinburne, The Existence of God (2004)']
            },
            {
              id: 'beauty-p1-obj1-r2',
              type: 'response',
              text: "The mathematical beauty discovered independently by physicists across different cultures and eras — Euler's identity, general relativity — is not plausibly culturally relative",
              sources: ['Swinburne, The Existence of God (2004)']
            }
          ]
        }
      ]
    },
    {
      id: 'beauty-p2',
      type: 'premise',
      text: 'If there is a God who creates for good reasons, we would expect a beautiful creation; beauty is evidence of a creator who values it',
      status: 'defended',
      children: [
        {
          id: 'beauty-p2-s1',
          type: 'support',
          text: 'Beauty is not required for survival or bare physical function, and evolutionary accounts explain only its proximate causes, not its objective depth',
          sources: ['Swinburne, The Existence of God (2004)']
        },
        {
          id: 'beauty-p2-s2',
          type: 'support',
          text: 'A universe created by a perfectly good, beautiful being would naturally be expected to be beautiful',
          sources: ['Ward, God, Chance and Necessity (1996)']
        },
        {
          id: 'beauty-p2-s3',
          type: 'support',
          text: 'The convergence of mathematical elegance, natural grandeur, and human aesthetic response together is more expected on theism than on naturalism',
          sources: ['Swinburne, The Existence of God (2004)']
        },
        {
          id: 'beauty-p2-obj1',
          type: 'objection',
          text: 'There is also ugliness in nature: the natural world contains enormous suffering, parasitism, and ugliness, undermining the beauty argument',
          children: [
            {
              id: 'beauty-p2-obj1-r1',
              type: 'response',
              text: 'The existence of ugliness does not negate the evidential weight of beauty; it raises the separate problem of evil rather than erasing beauty as evidence',
              sources: ['Swinburne, The Existence of God (2004)']
            },
            {
              id: 'beauty-p2-obj1-r2',
              type: 'response',
              text: 'A mix of beauty and disorder is consistent with a God who grants the natural world real autonomy, and the beauty of the fundamental laws persists even where the surface world is harsh',
              sources: ['Swinburne, The Existence of God (2004)']
            }
          ]
        }
      ]
    }
  ]
};

export const mathematicsWignerTree: TreeNode = {
  id: 'math-root',
  type: 'argument',
  text: 'The Unreasonable Effectiveness of Mathematics (Wigner)',
  children: [
    {
      id: 'math-conclusion',
      type: 'conclusion',
      text: 'The best explanation for the unreasonable effectiveness of mathematics is that the universe was created by a rational mind that structured it mathematically',
      children: []
    },
    {
      id: 'math-p1',
      type: 'premise',
      text: 'Mathematics is developed by pure reason, often with no physical application in mind, yet mathematical structures consistently describe physical reality with uncanny precision',
      status: 'defended',
      children: [
        {
          id: 'math-p1-s1',
          type: 'support',
          text: 'Non-Euclidean geometry, developed in the 19th century as a pure mathematical curiosity, turned out decades later to be the actual geometry of spacetime in general relativity',
          sources: ['Wigner, "The Unreasonable Effectiveness of Mathematics" (1960)']
        },
        {
          id: 'math-p1-s2',
          type: 'support',
          text: 'Complex numbers, invented to solve otherwise unsolvable polynomial equations, turned out to be indispensable to the mathematical formalism of quantum mechanics',
          sources: ['Polkinghorne, The Faith of a Physicist (1994)']
        },
        {
          id: 'math-p1-s3',
          type: 'support',
          text: 'Lie groups and fiber bundles — pure mathematics developed with no physical motivation — became the natural language of the Standard Model; the pattern is too deep and systematic to be coincidental selection bias',
          sources: ['Wigner, "The Unreasonable Effectiveness of Mathematics" (1960)']
        },
        {
          id: 'math-p1-obj1',
          type: 'objection',
          text: 'Selection bias: we only remember the mathematical tools that worked; many mathematical structures have no physical application',
          children: [
            {
              id: 'math-p1-obj1-r1',
              type: 'response',
              text: "The precision of the fit — general relativity's field equations, the Standard Model Lagrangian, quantum field theory — goes far beyond what selection bias alone can explain",
              sources: ['Wigner, "The Unreasonable Effectiveness of Mathematics" (1960)']
            },
            {
              id: 'math-p1-obj1-r2',
              type: 'response',
              text: 'The depth and specificity of the match between abstract mathematics and physical reality is itself the puzzle requiring explanation, not merely an occasional correspondence',
              sources: ['Wigner, "The Unreasonable Effectiveness of Mathematics" (1960)']
            }
          ]
        },
        {
          id: 'math-p1-obj2',
          type: 'objection',
          text: 'We developed math to describe the world: mathematics originated in counting and geometry, developed to fit experience, so its applicability is no surprise',
          children: [
            {
              id: 'math-p1-obj2-r1',
              type: 'response',
              text: "Modern physics relies on mathematical structures — Hilbert spaces, Lie groups, fiber bundles, spinors — developed centuries before any known application and for purely abstract reasons; this abstractness and non-empirical origin is precisely Wigner's point",
              sources: ['Steiner, The Applicability of Mathematics as a Philosophical Problem (1998)']
            }
          ]
        }
      ]
    },
    {
      id: 'math-p2',
      type: 'premise',
      text: 'There is no naturalistic reason why abstract mathematical structures should map onto physical reality so exactly',
      status: 'defended',
      children: [
        {
          id: 'math-p2-s1',
          type: 'support',
          text: 'If the universe were merely the product of blind physical processes, there is no evident reason to expect its foundations to be mathematical at all',
          sources: ['Steiner, The Applicability of Mathematics as a Philosophical Problem (1998)']
        },
        {
          id: 'math-p2-s2',
          type: 'support',
          text: 'Mathematics is a product of rational minds; its deep applicability to nature suggests a pre-established harmony between mind and cosmos',
          sources: ['Polkinghorne, The Faith of a Physicist (1994)']
        },
        {
          id: 'math-p2-s3',
          type: 'support',
          text: 'This harmony is best explained by a single rational mind that created both the mathematics and the physical world in accordance with it',
          sources: ['Polkinghorne, The Faith of a Physicist (1994)']
        }
      ]
    }
  ]
};

export const fineTuningTree: TreeNode = {
  id: 'ft-root',
  type: 'argument',
  text: 'The Fine-Tuning Argument',
  children: [
    {
      id: 'ft-conclusion',
      type: 'conclusion',
      text: 'Therefore, the fine-tuning of the universe is due to design',
      children: []
    },
    {
      id: 'ft-p1',
      type: 'premise',
      text: 'The fine-tuning of the universe is due to either physical necessity, chance, or design',
      status: 'granted',
      children: [
        {
          id: 'ft-p1-s1',
          type: 'support',
          text: 'This is a logically exhaustive trilemma: the constants are either the only physically possible values (necessity), extraordinarily lucky coincidences (chance), or intentionally set by an intelligent agent (design)',
          sources: ['Collins, "The Fine-Tuning Design Argument" in Reason for the Hope Within (1999)']
        }
      ]
    },
    {
      id: 'ft-p2',
      type: 'premise',
      text: 'It is not due to physical necessity or chance',
      status: 'defended',
      children: [
        {
          id: 'ft-p2-s1',
          type: 'support',
          text: 'Against necessity: there is no known reason the constants must have the values they do — string theory, once hoped to yield a unique solution, instead produces a "landscape" of 10^500 possible solutions with different constants',
          sources: ['Barrow & Tipler, The Anthropic Cosmological Principle (1986)']
        },
        {
          id: 'ft-p2-s2',
          type: 'support',
          text: 'Against chance: the cosmological constant alone is fine-tuned to roughly 1 part in 10^120, a precision far beyond what rational observers accept as a lucky coincidence elsewhere in science',
          sources: ['Collins, "The Teleological Argument" (2009)']
        },
        {
          id: 'ft-p2-s3',
          type: 'support',
          text: "Against chance: Roger Penrose calculated that the initial entropy of the universe was fine-tuned to about 1 part in 10^(10^123), a figure that dwarfs any probability normally treated as chance",
          sources: ["Penrose, The Emperor's New Mind (1989)"]
        },
        {
          id: 'ft-p2-obj1',
          type: 'objection',
          text: 'The multiverse hypothesis: if there are a vast (perhaps infinite) number of universes with randomly varying constants, it is unsurprising that at least one — ours — has life-permitting values (an observer selection effect)',
          children: [
            {
              id: 'ft-p2-obj1-r1',
              type: 'response',
              text: 'The multiverse is speculative — there is no direct observational evidence for other universes',
              sources: ['Collins, "The Teleological Argument" (2009)']
            },
            {
              id: 'ft-p2-obj1-r2',
              type: 'response',
              text: 'The multiverse-generating mechanism itself would need to be fine-tuned, having the right laws and properties to produce universes at all — this merely relocates the fine-tuning problem',
              sources: ['Craig, Reasonable Faith (2008)']
            },
            {
              id: 'ft-p2-obj1-r3',
              type: 'response',
              text: "It violates Occam's Razor by postulating a vast number of unobservable entities to avoid a single designer",
              sources: ['Collins, "The Teleological Argument" (2009)']
            },
            {
              id: 'ft-p2-obj1-r4',
              type: 'response',
              text: 'Even granting an infinite multiverse, the question only shifts up one level — why does a multiverse-generating mechanism exist at all? — so the fine-tuning problem reappears rather than dissolving',
              sources: ['Craig, Reasonable Faith (2008)']
            }
          ]
        }
      ]
    }
  ]
};

export const teleologicalTrees: Record<string, TreeNode> = {
  'fine-tuning': fineTuningTree,
  'intelligent-design-behe': intelligentDesignBeheTree,
  'meyer-dna': meyerDnaTree,
  'argument-from-beauty': argumentFromBeautyTree,
  'mathematics-wigner': mathematicsWignerTree,
};
