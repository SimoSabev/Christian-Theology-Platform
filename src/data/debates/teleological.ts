import { Debate } from '../arguments/types';

export const intelligentDesignBeheDebate: Debate = {
  id: 'intelligent-design-behe-debate',
  argumentId: 'intelligent-design-behe',
  title: 'Intelligent Design — Irreducible Complexity (Behe)',
  forLabel: 'Design Theorist',
  againstLabel: 'Evolutionary Biologist',
  rounds: [
    {
      round: 1,
      forSide: {
        claim: 'The bacterial flagellum is irreducibly complex: it requires roughly forty distinct, precisely fitted protein parts operating simultaneously, and removing any one part causes total loss of function, not merely reduced efficiency. Since natural selection can only preserve incremental functional advantages, and no functional intermediate exists for a partially-assembled flagellum, gradual Darwinian evolution cannot produce it — intelligent design is the better explanation.',
        evidence: [
          { text: 'The flagellum requires ~40 unique protein components simultaneously; no functional intermediate exists for selection to act on', strength: 'strong', source: 'Behe, Darwin\'s Black Box, 1996' },
          { text: 'Darwin himself conceded his theory would "absolutely break down" if any organ existed that could not form by numerous slight successive modifications', strength: 'moderate', source: 'Darwin, On the Origin of Species, 1859, cited in Behe 1996' },
        ]
      },
      againstSide: {
        claim: 'The flagellum is not irreducibly complex in the way Behe claims: many of its protein components are homologous to the Type III Secretion System (TTSS), a simpler injection apparatus used by some bacteria for an entirely different function, showing that flagellar parts could have been co-opted and repurposed from a pre-existing, independently functional system.',
        evidence: [
          { text: 'Roughly ten flagellar proteins show clear homology to TTSS components, which function independently as a toxin-injecting apparatus', strength: 'moderate', source: 'Pallen & Matzke, "From The Origin of Species to the origin of bacterial flagella," Nature Reviews Microbiology, 2006' },
          { text: 'Exaptation — repurposing existing functional parts for a new use — is a well-documented evolutionary mechanism (e.g., the evolution of feathers from insulating structures into flight surfaces)', strength: 'moderate', source: 'Standard evolutionary biology literature on exaptation' },
        ]
      }
    },
    {
      round: 2,
      forSide: {
        claim: 'Co-option only relocates the explanatory burden rather than discharging it: the TTSS itself is a sophisticated molecular machine requiring its own specified, coordinated proteins, and the ~30 flagellar proteins with no TTSS homolog still require a coordinated origin. Simply noting a partial homology between two complex systems does not show a viable step-by-step selectable pathway between them — it shows two complex systems share components, which is equally consistent with common design.',
        evidence: [
          { text: 'Even granting TTSS homology, roughly 30 flagellar proteins have no identified precursor function, leaving the bulk of the coordinated system unexplained by co-option alone', strength: 'strong', source: 'Behe, Darwin\'s Black Box, 1996; Behe, Darwin Devolves, 2019' },
          { text: 'A detailed, mutation-by-mutation selectable pathway from TTSS to flagellum has not been demonstrated, only a structural similarity between end-products', strength: 'moderate', source: 'Behe, Darwin Devolves, 2019' },
        ]
      },
      againstSide: {
        claim: 'Demanding a complete mutation-by-mutation pathway sets an unreasonably high bar that essentially no historical evolutionary transition could meet, given the sparse molecular fossil record of ancient bacterial lineages — but the same reasoning by co-option and gradual accretion of function is well-established for far better documented transitions, like the evolution of the vertebrate eye from simple photoreceptive patches, and there is no principled biochemical reason to think flagellar assembly is different in kind.',
        evidence: [
          { text: 'Gradual, well-documented series of intermediate eye forms exist across living species, from simple eye-spots to camera eyes, refuting the claim that "irreducible complexity" in general cannot evolve stepwise', strength: 'moderate', source: 'Standard evolutionary developmental biology, e.g., Nilsson & Pelger 1994 modeling eye evolution' },
        ]
      }
    },
    {
      round: 3,
      forSide: {
        claim: 'The eye analogy does not transfer to the flagellum: the eye\'s gradualism works because each incremental improvement in photoreceptive tissue confers an immediate, independently selectable advantage (slightly better light detection). The flagellum\'s defining feature is that its ~40 parts must work together as an integrated rotary motor — a half-built flagellum does not function "a little bit" as a partial motor; it does not function as a motor at all. This is a difference of biochemical kind, not merely of documentation.',
        evidence: [
          { text: 'A functioning rotary motor requires all core components (rotor, stator, drive shaft, bushing) simultaneously; there is no partial-rotation intermediate that confers a selectable advantage', strength: 'strong', source: 'Behe, Darwin\'s Black Box, 1996' },
          { text: 'The mathematical improbability of assembling ~40 independently-appearing, precisely-fitted parts by unguided mutation is vanishingly small absent a functional stepping-stone pathway', strength: 'moderate', source: 'Dembski, The Design Inference, 1998' },
        ]
      },
      againstSide: {
        claim: 'This "all-or-nothing" framing assumes the current, fully optimized flagellum is the only possible functional configuration — but simpler precursor rotary or secretory structures, no longer extant or difficult to detect in the fossil/genomic record, could have conferred lesser but still selectable advantages (e.g., a simple pore, then a secretion channel, then a proto-motor) before reaching the sophisticated system observed today. Absence of a currently known intermediate is not evidence that none ever existed.',
        evidence: [
          { text: 'Molecular systems can undergo "scaffolding" — where a system passes through functional intermediate stages that are subsequently lost or modified beyond recognition, a documented pattern in evolutionary biochemistry', strength: 'moderate', source: 'Standard scaffolding/constructive neutral evolution literature in molecular evolution' },
        ]
      }
    },
    {
      round: 4,
      forSide: {
        claim: 'Invoking hypothetical, currently-undetectable, and since-vanished intermediate stages is an appeal to an unfalsifiable "just-so" story rather than a demonstrated pathway — the very feature that makes intelligent design an inference to the best explanation is that design is the only known cause, observed directly and repeatedly (in human engineering), that reliably produces functionally integrated, irreducibly complex systems. Postulating unobserved, extinct scaffolding stages to preserve a naturalistic account, when no positive evidence for them exists, is a weaker explanation than the well-attested causal power of intelligent agency to produce coordinated systems for a purpose.',
        evidence: [
          { text: 'Intelligent agency is the only cause we know by direct observation to reliably produce specified, functionally integrated complexity — this is the positive evidential basis for design, not merely an argument from current ignorance', strength: 'strong', source: 'Dembski, The Design Inference, 1998; Behe, Darwin\'s Black Box, 1996' },
          { text: 'The burden of proof properly falls on those proposing an unobserved historical pathway to specify and test it, not on design theorists to disprove every conceivable naturalistic scenario', strength: 'moderate', source: 'Behe, Darwin Devolves, 2019' },
        ]
      },
      againstSide: {
        claim: 'This underestimates how much of evolutionary biology already rests on inferred, non-observed historical pathways supported indirectly through comparative genomics, homology, and biochemical plausibility, rather than direct observation of every transitional step — the same standard of evidence that reconstructs whale evolution from land mammals or the endosymbiotic origin of mitochondria. Applying a uniquely strict "must be directly observed" standard only to systems inconvenient for design arguments, while accepting comparable indirect evidence elsewhere in biology, is methodologically inconsistent.',
        evidence: [
          { text: 'The endosymbiotic origin of mitochondria and chloroplasts is accepted on strong indirect (genomic, structural) evidence despite no direct observation of the transitional event, illustrating the standard evidentiary practice in evolutionary biology', strength: 'moderate', source: 'Standard cell biology, endosymbiotic theory (Margulis 1967 and subsequent genomic confirmation)' },
        ]
      }
    }
  ]
};

export const meyerDnaDebate: Debate = {
  id: 'meyer-dna-debate',
  argumentId: 'meyer-dna',
  title: 'The Argument from Biological Information / DNA (Meyer)',
  forLabel: 'Design Theorist',
  againstLabel: 'Origin-of-Life Researcher',
  rounds: [
    {
      round: 1,
      forSide: {
        claim: 'DNA encodes specified complexity: sequences that are both highly improbable and functionally specified, exactly like a written language. In our uniform and repeated experience, specified complexity — as opposed to mere order or randomness — arises only from intelligent agents. Since DNA exhibits this same signature, the best explanation for its origin is an intelligent cause.',
        evidence: [
          { text: 'The probability of a single short functional protein arising by unguided chance is estimated at roughly 1 in 10^77', strength: 'strong', source: 'Axe, "Estimating the prevalence of protein sequences adopting functional enzyme folds," Journal of Molecular Biology, 2004; Axe, Undeniable, 2016' },
          { text: 'Every known case of specified, functionally-meaningful information (language, software, blueprints) originates from a mind, never from unguided physical or chemical processes', strength: 'strong', source: 'Meyer, Signature in the Cell, 2009' },
        ]
      },
      againstSide: {
        claim: 'The RNA World hypothesis proposes that self-replicating, catalytic RNA molecules preceded DNA and proteins, providing a plausible chemical pathway by which increasingly complex, information-bearing polymers could emerge and be refined by natural selection acting on chemistry alone, before any "mind" is needed.',
        evidence: [
          { text: 'Ribozymes (catalytic RNA) demonstrate that RNA can both store information and catalyze reactions, potentially bridging the gap between chemistry and biology', strength: 'moderate', source: 'Standard RNA World hypothesis literature, following Gilbert 1986' },
          { text: 'Prebiotic chemistry experiments have synthesized RNA nucleotide precursors under plausible early-Earth conditions', strength: 'moderate', source: 'Powner, Gerland & Sutherland, "Synthesis of activated pyrimidine ribonucleotides," Nature, 2009' },
        ]
      }
    },
    {
      round: 2,
      forSide: {
        claim: 'The RNA World hypothesis does not solve the information problem — it relocates it. A self-replicating ribozyme still requires a specific, functionally-effective nucleotide sequence to catalyze anything; generating even a short functional ribozyme by unguided chemistry faces the same combinatorial improbability as generating a functional protein. Furthermore, RNA World scenarios have never been shown to produce a self-replicating system capable of undergoing Darwinian evolution — the central claimed advantage remains unrealized in the laboratory.',
        evidence: [
          { text: 'No experiment has produced a ribozyme capable of self-replication from prebiotically plausible starting materials without significant intelligent laboratory intervention', strength: 'strong', source: 'Meyer, Signature in the Cell, 2009' },
          { text: 'Functional ribozymes, like functional proteins, occupy an exceedingly small fraction of all possible sequences — the specificity problem recurs at the RNA level', strength: 'moderate', source: 'Meyer, Signature in the Cell, 2009' },
        ]
      },
      againstSide: {
        claim: 'This demand for a fully realized laboratory demonstration sets the evidentiary bar unreasonably high for a chemical process that took hundreds of millions of years under early-Earth conditions no laboratory can fully replicate — absence of a complete laboratory synthesis is not equivalent to a demonstrated in-principle impossibility, particularly given the significant recent progress in prebiotic chemistry.',
        evidence: [
          { text: 'Multiple independent prebiotic chemistry breakthroughs (activated nucleotide synthesis, template-directed RNA copying) have progressively closed gaps once considered insurmountable', strength: 'moderate', source: 'Sutherland and colleagues\' prebiotic chemistry research program, 2009-present' },
        ]
      }
    },
    {
      round: 3,
      forSide: {
        claim: 'The issue is not merely a matter of time or laboratory conditions but of the very nature of specified information: undirected chemistry, however much time is allowed, has never been observed to generate the kind of functionally-specified, sequence-dependent information found in even the simplest self-replicating system, whereas we have direct, repeated experience of minds generating exactly this kind of information (language, code). The uniformitarian principle used throughout science — that present causes explain past effects — favors intelligent causation here, since it is the only causally adequate explanation ever observed to produce specified complexity.',
        evidence: [
          { text: 'The inference to design is not an argument from ignorance but a positive application of the uniformitarian principle: the only known cause of specified complexity is intelligence', strength: 'strong', source: 'Meyer, Signature in the Cell, 2009, drawing on Charles Lyell\'s uniformitarian method' },
          { text: 'Time alone does not overcome combinatorial improbability when the search space is vast and undirected — this is a basic result of probability theory applied to sequence space', strength: 'moderate', source: 'Dembski, The Design Inference, 1998' },
        ]
      },
      againstSide: {
        claim: 'This uniformitarian appeal cuts both ways: our only observed instances of minds producing information (human minds) require pre-existing brains built of the very biomolecular information whose origin is in question — using "intelligence is the only known cause of information" as a premise risks circularity, since it is not clear the analogy between human-authored language and chemically-encoded biomolecular sequences is apt in the first place.',
        evidence: [
          { text: 'The analogy between DNA "information" and linguistic information is disputed; DNA sequences are a chemical outcome of physical bonding constraints and selection, not obviously "semantic" in the way human language is', strength: 'moderate', source: 'Standard objection distinguishing biological "information" (Shannon/functional sense) from linguistic meaning' },
        ]
      }
    },
    {
      round: 4,
      forSide: {
        claim: 'The relevant sense of "information" here is not merely Shannon information (reduction of uncertainty) but specified complexity — sequences matching an independent functional pattern, exactly the technical sense engineers use for software and blueprints, which is precisely why DNA is analyzed using information theory in molecular biology textbooks themselves, independent of any design inference. The charge of circularity misses that the premise is empirical and falsifiable: if any undirected natural process were ever observed producing specified complexity, the inference would be undercut — but none has been.',
        evidence: [
          { text: 'Molecular biology textbooks routinely describe DNA using information-theoretic language (genetic "code," "transcription," "translation") independent of any design argument, showing the information framing is not an artifact of apologetics', strength: 'moderate', source: 'Standard molecular biology literature and terminology' },
          { text: 'The design inference is falsifiable in principle: a single clear observation of undirected chemistry producing genuinely specified complexity would refute the premise, and none has been produced despite decades of origin-of-life research', strength: 'strong', source: 'Meyer, Signature in the Cell, 2009' },
        ]
      },
      againstSide: {
        claim: 'A claim can remain "unfalsified so far" simply because origin-of-life chemistry is an extremely young and difficult field, not because the naturalistic project is in principle impossible — the history of science includes many phenomena (the chemical basis of heredity, the mechanism of stellar fusion) that appeared to require special or non-natural explanation until the relevant chemistry and physics were better understood, urging caution before concluding intelligent agency is the terminus of inquiry here.',
        evidence: [
          { text: 'Historical "God of the gaps" retreats in the history of science (e.g., the once-mysterious mechanism of heredity, later explained by DNA itself) counsel against concluding design merely from current unsolved problems', strength: 'moderate', source: 'Standard historical argument regarding the trajectory of scientific explanation' }
        ]
      }
    }
  ]
};

export const argumentFromBeautyDebate: Debate = {
  id: 'argument-from-beauty-debate',
  argumentId: 'argument-from-beauty',
  title: 'The Argument from Beauty',
  forLabel: 'Theist',
  againstLabel: 'Naturalist',
  rounds: [
    {
      round: 1,
      forSide: {
        claim: 'The universe exhibits deep, objective aesthetic beauty — in the elegance of fundamental physical equations, the harmonic structures of music, and the mathematical patterns (the golden ratio, Fibonacci sequences) found throughout nature. This beauty exceeds what survival or reproduction requires and is more expected on the hypothesis of a good, beauty-loving Creator than on bare, purposeless naturalism.',
        evidence: [
          { text: 'Physicists across generations independently describe fundamental equations (Dirac\'s equation, general relativity, the Euler identity) as beautiful, and cite beauty as a guide to physical truth', strength: 'strong', source: 'Swinburne, The Existence of God, 2004, ch. 6' },
          { text: 'Mathematical patterns such as the golden ratio and Fibonacci sequences recur across unrelated natural domains (plant growth, shell spirals) independent of human aesthetic preference', strength: 'moderate', source: 'Scruton, The Face of God, 2012' },
        ]
      },
      againstSide: {
        claim: 'Aesthetic judgments are demonstrably culturally and psychologically conditioned rather than objective features of reality; what one era or culture finds beautiful, another finds plain or even repellent, undermining the claim that "beauty" is a stable, mind-independent property requiring theistic explanation.',
        evidence: [
          { text: 'Cross-cultural and historical variation in aesthetic standards (in art, music, and bodily beauty ideals) suggests beauty is substantially a construct of psychology and culture', strength: 'moderate', source: 'Standard aesthetics literature on cultural relativity of taste' },
        ]
      }
    },
    {
      round: 2,
      forSide: {
        claim: 'Cultural variation in surface-level tastes (fashion, particular artistic styles) does not undermine the deeper convergence found at the structural level: mathematicians and physicists across cultures and eras, working independently and often without any prior contact, consistently converge on the same equations, ratios, and symmetries as beautiful — a convergence far harder to explain by cultural conditioning alone, since these observers were not first taught to find these specific structures beautiful by any shared cultural transmission.',
        evidence: [
          { text: 'Physicists including Dirac and Einstein reported that beauty guided them toward correct equations before empirical confirmation was available, a phenomenon replicated across independent traditions of mathematical physics', strength: 'strong', source: 'Swinburne, The Existence of God, 2004' },
          { text: 'The golden ratio\'s recurrence in unrelated natural growth patterns is a mathematical/structural fact, not a matter of cultural taste', strength: 'moderate', source: 'Scruton, The Face of God, 2012' },
        ]
      },
      againstSide: {
        claim: 'Even granting a structural convergence in mathematical aesthetics, this is readily explained by evolutionary psychology: human minds evolved pattern-recognition and symmetry-detection capacities because they were adaptively useful (e.g., detecting healthy mates, edible food, or predators), and what we call "finding beauty" in mathematical patterns may simply be this evolved pattern-detection machinery firing in response to structures that happen to exhibit the same symmetries our ancestors were selected to notice.',
        evidence: [
          { text: 'Evolutionary psychology proposes that symmetry-detection and pattern-recognition preferences arose because they tracked adaptively relevant features (mate quality, environmental regularities), which would also make mathematical symmetry "feel" aesthetically pleasing as a byproduct', strength: 'moderate', source: 'Standard evolutionary psychology literature on symmetry preference' },
        ]
      }
    },
    {
      round: 3,
      forSide: {
        claim: 'This evolutionary account struggles to explain why the specific aesthetic sense that evolved for practical survival tasks (mate selection, threat detection) would also reliably track truth in domains with zero survival relevance, such as the mathematical elegance of 19th-century abstract group theory or 20th-century quantum field equations — structures no evolutionary pressure could have "trained" our ancestors to appreciate, since they had no bearing whatsoever on Pleistocene survival.',
        evidence: [
          { text: 'The specific mathematical structures found beautiful and later confirmed physically (non-Euclidean geometry, gauge symmetry) bear no plausible connection to ancestral survival pressures, unlike face symmetry or edible-food-pattern recognition', strength: 'strong', source: 'Polkinghorne, The Faith of a Physicist, 1994 (on the surprising fit between mathematical beauty and physical truth)' },
        ]
      },
      againstSide: {
        claim: 'Even without a direct survival link, a generalized cognitive preference for economy, symmetry, and pattern (useful broadly across many domains our ancestors did face) could plausibly generalize or "spill over" into abstract domains never specifically selected for, without needing to posit any designed pre-established harmony between mind and cosmos.',
        evidence: [
          { text: 'General cognitive traits selected for one purpose commonly generalize to unrelated domains as a byproduct (spandrels), a well-documented pattern in evolutionary biology', strength: 'moderate', source: 'Gould & Lewontin, "The Spandrels of San Marco," 1979, on evolutionary byproducts' },
        ]
      }
    },
    {
      round: 4,
      forSide: {
        claim: 'The "spillover"/spandrel explanation is possible in principle but strains credulity as the specificity and depth of the fit increases: it is one thing for a general symmetry-preference to "spill over" into finding a snowflake pretty; it is another for that same preference to reliably and repeatedly guide trained physicists to the single correct equation, among vast numbers of equally simple-looking but false alternatives, describing a previously unobserved feature of reality. Theism explains this convergence directly: a rational Creator who structured the universe intelligibly and gave creatures made in his image a derivative capacity to recognize that same rational beauty. Naturalism must instead stack several independent, unverified evolutionary just-so stories to arrive at the same result.',
        evidence: [
          { text: 'The reliability of aesthetic judgment as a heuristic for physical truth, repeated across multiple independent breakthroughs in fundamental physics, is difficult to explain as mere adaptive byproduct given its predictive success in domains utterly unconnected to ancestral environments', strength: 'moderate', source: 'Polkinghorne, The Faith of a Physicist, 1994' },
          { text: 'Theism offers a unified explanation (a rational Creator, rational creatures, a common rational source) where naturalism requires an accumulation of independent coincidences', strength: 'moderate', source: 'Swinburne, The Existence of God, 2004' },
        ]
      },
      againstSide: {
        claim: 'The existence of vast natural ugliness — parasitism, predation, disease, and disfiguring suffering throughout the biological world — sits uneasily beside the claim that the universe reflects the intentional aesthetic design of a good and beauty-loving God, and any account of beauty as evidence for God must also reckon with this counter-evidence before concluding design is the best explanation.',
        evidence: [
          { text: 'Natural history is replete with suffering, parasitism, and processes with no discernible aesthetic value, which sits in tension with a straightforward "beautiful design" inference', strength: 'moderate', source: 'Standard evidential problem-of-evil literature, applied to the beauty argument' },
        ]
      }
    }
  ]
};

export const mathematicsWignerDebate: Debate = {
  id: 'mathematics-wigner-debate',
  argumentId: 'mathematics-wigner',
  title: 'The Unreasonable Effectiveness of Mathematics (Wigner)',
  forLabel: 'Theist',
  againstLabel: 'Naturalist Physicist',
  rounds: [
    {
      round: 1,
      forSide: {
        claim: 'Mathematics developed by pure abstract reasoning — with no physical application in mind — consistently and precisely describes physical reality, a pattern too deep and systematic to be coincidence. This "unreasonable effectiveness" is best explained by a rational Creator who structured both mathematics and the physical universe in accordance with one another.',
        evidence: [
          { text: 'Non-Euclidean geometry, developed purely abstractly in the 19th century, turned out decades later to be exactly the geometry required by general relativity', strength: 'strong', source: 'Wigner, "The Unreasonable Effectiveness of Mathematics in the Natural Sciences," 1960' },
          { text: 'Complex numbers, Lie groups, and fiber bundles — all developed for purely internal mathematical reasons — became indispensable, precisely-fitting tools in quantum mechanics and the Standard Model', strength: 'strong', source: 'Polkinghorne, The Faith of a Physicist, 1994' },
        ]
      },
      againstSide: {
        claim: 'This is a case of selection bias: mathematicians produce vast quantities of structures, the overwhelming majority of which never find any physical application and are quietly forgotten; we naturally notice and remember only the comparatively rare cases where a fit occurs, creating an illusion of "unreasonable" effectiveness.',
        evidence: [
          { text: 'The sheer volume of mathematical structures ever devised makes occasional matches to physical phenomena statistically unsurprising, given that only successful matches are retained in the historical record of physics', strength: 'moderate', source: 'Standard selection-bias objection to the Wigner puzzle' },
        ]
      }
    },
    {
      round: 2,
      forSide: {
        claim: 'Selection bias cannot account for the precision and depth of the fits observed: it is not merely that some mathematical structure loosely resembles some physical phenomenon, but that specific equations (Einstein\'s field equations, the Dirac equation, the Standard Model Lagrangian) predict the exact quantitative behavior of physical systems to extraordinary precision, often anticipating experimental results (such as the positron, predicted by the Dirac equation\'s mathematics before it was observed) rather than being fitted to them after the fact.',
        evidence: [
          { text: 'The Dirac equation\'s mathematical structure predicted the existence of antimatter (the positron) before it was experimentally observed — the mathematics led the physics, not the reverse', strength: 'strong', source: 'History of physics, Dirac 1928, positron discovered 1932' },
          { text: 'The precision of fit between abstract mathematical formalism and confirmed physical prediction (to many decimal places, in cases like quantum electrodynamics) far exceeds what "some structures happen to match roughly" selection bias would predict', strength: 'strong', source: 'Wigner, 1960' },
        ]
      },
      againstSide: {
        claim: 'Mathematics is not, in fact, entirely developed independently of physical experience — much of core mathematics (calculus, differential geometry, group theory) was developed by physicists and mathematicians working on physical problems, or later refined and selected specifically because of its usefulness in physics, so the "independence" of mathematics from physical application is overstated.',
        evidence: [
          { text: 'Calculus itself was co-developed by Newton explicitly to solve problems of motion and gravitation, showing mathematics and physics have long co-evolved rather than developing in isolation', strength: 'moderate', source: 'History of mathematics and physics, Newton\'s Principia, 1687' },
        ]
      }
    },
    {
      round: 3,
      forSide: {
        claim: 'While some mathematics (like calculus) did co-develop with physics, Wigner\'s strongest examples are precisely those developed with no such motivation: non-Euclidean geometry (Riemann, Bolyai, Lobachevsky) was pursued purely as an internal question about the parallel postulate decades before Einstein needed exactly that geometry for general relativity; group theory was developed to classify solutions to abstract polynomial equations before it became the essential language of particle physics symmetries. These cases specifically rule out the "co-development" explanation.',
        evidence: [
          { text: 'Riemannian geometry was developed in the 1850s as pure mathematics with no anticipated physical use, and was adopted by Einstein in 1915 because it happened to be exactly the mathematical structure needed for general relativity\'s curved spacetime', strength: 'strong', source: 'History of mathematics; Wigner, 1960' },
          { text: 'Group theory, developed originally by Galois and others to study the abstract structure of equation-solving, became the indispensable language for classifying elementary particles and their interactions', strength: 'moderate', source: 'Standard history of 20th-century particle physics' },
        ]
      },
      againstSide: {
        claim: 'Even granting genuinely independent development in specific cases, one might argue this simply reflects that mathematics, as a formal system exploring all possible consistent structures, is bound to eventually produce structures matching aspects of a physical reality that is itself internally consistent and structured — a "reasonable" convergence given that both mathematics and physical law share the common feature of logical consistency, requiring no further theological explanation.',
        evidence: [
          { text: 'If physical reality is logically consistent, and mathematics explores the full space of logically consistent structures, some convergence between the two domains might be expected on general grounds without invoking design', strength: 'moderate', source: 'Naturalist rejoinder in the philosophy of mathematics literature (cf. Tegmark\'s Mathematical Universe Hypothesis)' },
        ]
      }
    },
    {
      round: 4,
      forSide: {
        claim: 'This "mathematical universe" style response is itself a substantive, unproven metaphysical commitment (that physical reality simply is a mathematical structure) rather than an explanation — it restates the puzzle in stronger form rather than resolving it, since it must still explain why this particular mathematical structure, among the vast space of logically consistent ones, is realized as physical reality and is intelligible to embodied minds at all. Theism offers a more economical account: a rational Creator conceived the universe according to a mathematical blueprint and created rational minds capable, in principle, of discovering it — explaining both the mathematical structure of reality and the human capacity to comprehend it in one unified account.',
        evidence: [
          { text: 'Positing that "physical reality just is a mathematical structure" (Tegmark\'s Mathematical Universe Hypothesis) is itself a highly speculative and contested metaphysical thesis, not an agreed scientific finding, and faces its own serious philosophical objections', strength: 'moderate', source: 'Critiques of Tegmark\'s Mathematical Universe Hypothesis in philosophy of physics' },
          { text: 'Theism uniquely explains both the mathematical structure of the universe and the comprehensibility of that structure to finite rational minds as flowing from one common rational source', strength: 'moderate', source: 'Polkinghorne, The Faith of a Physicist, 1994' },
        ]
      },
      againstSide: {
        claim: 'Positing a Creator "who thinks mathematically" to explain the applicability of mathematics arguably just pushes the mystery back one level without resolving it: one must still explain why a mind\'s "thinking mathematically" reliably issues in a physical universe that instantiates that thought so precisely — a mechanism theism describes only in broad theological terms, not with any greater explanatory precision than the phenomenon it is meant to explain.',
        evidence: [
          { text: 'Positing divine intention to explain mathematical applicability substitutes one unexplained relationship (mind-to-mathematics-to-physics) for another (unguided-mathematics-to-physics) without clear independent verification of the theistic mechanism', strength: 'moderate', source: 'Standard naturalist rejoinder to teleological arguments from intelligibility' },
        ]
      }
    }
  ]
};

export const fineTuningDebate: Debate = {
  id: 'fine-tuning-debate',
  argumentId: 'fine-tuning',
  title: 'The Fine-Tuning Argument',
  forLabel: 'Theist',
  againstLabel: 'Atheist',
  rounds: [
    {
      round: 1,
      forSide: {
        claim: 'The fundamental constants of physics are calibrated within extraordinarily narrow, life-permitting ranges. This fine-tuning is due to physical necessity, chance, or design — an exhaustive trilemma. It is not due to necessity, since nothing requires the constants to have these particular values, and it is not plausibly due to chance, given the vanishingly small probabilities involved.',
        evidence: [
          { text: 'The cosmological constant is fine-tuned to roughly 1 part in 10^120, one of the most extreme instances of fine-tuning known in physics', strength: 'strong', source: 'Penrose, The Emperor\'s New Mind, 1989; Collins, "The Teleological Argument," 2009' },
          { text: 'String theory\'s "landscape" of roughly 10^500 possible vacuum states shows there is no known physical necessity forcing the constants to their observed values', strength: 'strong', source: 'Collins, "The Fine-Tuning Design Argument," 1999' },
          { text: 'Even skeptical astronomer Fred Hoyle concluded: "A common sense interpretation of the facts suggests that a superintellect has monkeyed with physics"', strength: 'moderate', source: 'Hoyle, Engineering and Science, 1981' },
        ]
      },
      againstSide: {
        claim: 'The multiverse hypothesis explains fine-tuning without design: if a vast (perhaps infinite) number of universes exist with randomly varying constants, it is unsurprising that at least one, ours, has life-permitting values — we could not observe ourselves in any of the others, so our observation of fine-tuning is a straightforward selection effect, not evidence requiring a designer.',
        evidence: [
          { text: 'Inflationary cosmology independently predicts the generation of many "bubble universes" with potentially different physical constants, providing a physical mechanism for a multiverse', strength: 'moderate', source: 'Standard eternal inflation cosmology, e.g., Linde and colleagues' },
          { text: 'The anthropic selection effect (we can only observe a universe compatible with our own existence) is a standard, uncontroversial statistical principle used elsewhere in cosmology', strength: 'moderate', source: 'Barrow & Tipler, The Anthropic Cosmological Principle, 1986' },
        ]
      }
    },
    {
      round: 2,
      forSide: {
        claim: 'The multiverse does not eliminate fine-tuning; it relocates it one level up. For a multiverse generator (such as eternal inflation) to produce a genuine variety of universes with varying constants, capable of including life-permitting ones, the generating mechanism itself must have the right underlying laws and parameters — a fine-tuned "universe-generator" is required to make an appeal to chance work at all. The problem reappears rather than dissolves.',
        evidence: [
          { text: 'Eternal inflation requires its own finely-tuned inflaton field parameters and background physical laws to function as a universe-generating mechanism at all', strength: 'strong', source: 'Collins, "The Teleological Argument," 2009' },
          { text: 'The multiverse hypothesis is currently unobservable in principle by most proposed models, making it a highly speculative posit compared to the directly observed fine-tuning it is meant to explain away', strength: 'moderate', source: 'Craig, Reasonable Faith, 2008' },
        ]
      },
      againstSide: {
        claim: 'Even if the specific inflaton mechanism requires some parameters, this is a far less demanding form of "tuning" than the fine-tuning of the fundamental constants of our universe directly — and simpler, more generic multiverse-generating mechanisms remain live possibilities within physics, unlike the ad hoc postulation of an untestable designer to explain any given instance of apparent tuning.',
        evidence: [
          { text: 'Some cosmological models propose relatively generic, low-tuning-requirement mechanisms for universe generation, an active area of ongoing theoretical research', strength: 'contested', source: 'Various speculative cosmological models discussed in the multiverse literature' },
        ]
      }
    },
    {
      round: 3,
      forSide: {
        claim: 'Beyond the regress problem, the multiverse hypothesis violates the standard of explanatory economy (Occam\'s Razor) far more severely than theism: it postulates an enormous, unobservable, unfalsifiable ensemble of universes purely to avoid the far simpler hypothesis of a single intentional cause. Design is the ordinary, everyday explanation we reach for whenever we observe values precisely calibrated for a specific outcome (e.g., inferring intentional adjustment when we find dials set to exactly the values needed to keep a complex machine running) — multiplying unobservable universes to avoid this ordinary inference is explanatorily extravagant.',
        evidence: [
          { text: 'Postulating a vast, empirically inaccessible ensemble of universes to explain a single instance of observed fine-tuning inverts ordinary standards of inference to the simplest adequate explanation', strength: 'strong', source: 'Collins, "The Teleological Argument," 2009' },
          { text: 'In every other domain of ordinary reasoning, encountering values calibrated with vanishing improbability toward a specific functional outcome is treated as strong evidence of intentional calibration, not chance', strength: 'moderate', source: 'Craig, Reasonable Faith, 2008 (the "dial-setting" analogy)' },
        ]
      },
      againstSide: {
        claim: 'Design as an explanation carries its own significant explanatory costs that are frequently underweighted: positing an unobserved, immaterial, omnipotent designer is at least as metaphysically extravagant as positing additional universes, and unlike physical multiverse models — which are motivated independently by inflationary cosmology, not invented solely to explain fine-tuning — the design hypothesis is invoked specifically and only to explain the fine-tuning data, raising concerns about ad hoc reasoning.',
        evidence: [
          { text: 'Some cosmologists favor multiverse models on independent theoretical grounds arising from inflationary theory, not merely as a response to the fine-tuning problem, making the appeal less obviously ad hoc than positing a designer solely to explain fine-tuning', strength: 'moderate', source: 'Standard defense of multiverse cosmology as independently motivated' },
        ]
      }
    },
    {
      round: 4,
      forSide: {
        claim: 'A designer is not "ad hoc" in the relevant sense, because the same hypothesis — an intelligent, purposive cause — independently explains multiple otherwise-disparate strands of evidence (fine-tuning, the origin of specified biological information, the applicability of mathematics, cosmic beginning) with a single unifying cause, which is precisely the mark of a good explanation in the philosophy of science. The multiverse, by contrast, was developed and is defended largely because it is the one physical mechanism capable of undercutting design-based fine-tuning arguments, and it remains empirically untestable even in principle for most proposed variants — a weakness design hypotheses, evaluated as part of a broader cumulative case for theism, do not share.',
        evidence: [
          { text: 'A cumulative case combining fine-tuning with cosmological, biological, and philosophical arguments converges on one explanatorily unifying cause (a purposive Creator), a theoretical virtue absent from ad hoc multiverse proposals invoked case by case', strength: 'moderate', source: 'Craig, Reasonable Faith, 2008' },
          { text: 'Most multiverse models make no independently testable predictions distinguishing them from a single fine-tuned universe, raising a parallel concern about untestability that is often selectively applied only to theistic design hypotheses', strength: 'moderate', source: 'Standard philosophy-of-science critique of multiverse untestability' },
        ]
      },
      againstSide: {
        claim: 'A cumulative case is only as strong as each of its individual links, and critics dispute several of the other strands (biological information, mathematical applicability) on their own separate grounds; stacking contested arguments together does not automatically yield a stronger conclusion than each carries individually. Fine-tuning, considered on its own, remains compatible with an eventual physical (rather than personal) explanation as cosmology matures — as has happened repeatedly with other phenomena once thought to require special explanation.',
        evidence: [
          { text: 'Each strand of the theistic cumulative case is independently contested by specialists in the relevant field, so their conjunction does not obviously produce cumulative evidential force beyond the weakest link', strength: 'moderate', source: 'Standard methodological critique of cumulative-case apologetics' },
        ]
      }
    }
  ]
};

export const teleologicalDebates: Record<string, Debate> = {
  'intelligent-design-behe': intelligentDesignBeheDebate,
  'meyer-dna': meyerDnaDebate,
  'argument-from-beauty': argumentFromBeautyDebate,
  'mathematics-wigner': mathematicsWignerDebate,
  'fine-tuning': fineTuningDebate,
};
