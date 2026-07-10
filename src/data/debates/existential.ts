import { Debate } from '../arguments/types';

export const consciousnessMorelandDebate: Debate = {
  id: 'consciousness-moreland-debate',
  argumentId: 'consciousness-moreland',
  title: 'The Argument from Consciousness (Moreland)',
  forLabel: 'Theist',
  againstLabel: 'Physicalist',
  rounds: [
    {
      round: 1,
      forSide: {
        claim: 'Consciousness — the felt, subjective, first-person dimension of experience — is a pervasive and undeniable feature of reality. But a universe of mindless matter governed only by physical law has no resources to explain why any physical process should be accompanied by subjective experience at all. This "hard problem," identified even by secular philosophers, is best explained by a universe grounded in a fundamentally conscious being.',
        evidence: [
          { text: 'The "hard problem of consciousness" — why physical processes are accompanied by subjective experience at all — is acknowledged as a genuine, unsolved problem even by leading atheist philosophers of mind', strength: 'strong', source: 'Chalmers, The Conscious Mind, 1996' },
          { text: 'The conceivability of "philosophical zombies" (physical duplicates lacking any inner experience) suggests the gap between physical description and consciousness is logical, not merely a temporary gap in scientific knowledge', strength: 'strong', source: 'Chalmers, The Conscious Mind, 1996' },
        ]
      },
      againstSide: {
        claim: 'Emergentism holds that consciousness is a higher-level property that arises from sufficiently complex physical organization, just as liquidity emerges from molecular interactions or life emerges from chemistry — consciousness need not be a basic, separately-caused feature of reality but a natural consequence of the right kind of physical complexity, requiring no theistic explanation.',
        evidence: [
          { text: 'Numerous complex properties (liquidity, life, temperature) are uncontroversially emergent from simpler physical constituents without requiring any additional non-physical explanation', strength: 'moderate', source: 'Standard emergentist philosophy of mind literature' },
        ]
      }
    },
    {
      round: 2,
      forSide: {
        claim: 'The analogy to liquidity or life is disanalogous in the crucial respect: those are functional or structural properties, fully specifiable in third-person physical terms (a certain molecular arrangement just is liquidity, with nothing further to explain). Consciousness is different in kind because it has an irreducibly first-person, qualitative aspect (what it is like to see red) that cannot even in principle be captured by any third-person functional or structural description, however complete — this is precisely why the zombie thought experiment is conceivable for consciousness but not for liquidity (a "liquidity zombie," molecularly identical but not wet, is not conceivable in the same way).',
        evidence: [
          { text: 'Functional/structural emergent properties like liquidity are fully specifiable in third-person physical terms with nothing left unexplained, unlike phenomenal consciousness, which retains an explanatory gap even given complete physical/functional description', strength: 'strong', source: 'Chalmers, The Conscious Mind, 1996; Moreland, Consciousness and the Existence of God, 2008' },
        ]
      },
      againstSide: {
        claim: 'The conceivability of zombies does not establish their metaphysical possibility — many philosophers argue that what seems conceivable from the armchair (a physical duplicate lacking consciousness) may nonetheless be metaphysically impossible once we have a complete science of the brain, just as it once seemed conceivable that water might not be H2O before the relevant scientific identity was discovered; conceivability is a fallible guide to genuine possibility.',
        evidence: [
          { text: 'The "conceivability does not entail possibility" objection, developed extensively in analytic philosophy of mind, argues that a posteriori scientific identities (like water=H2O) can render initially-conceivable scenarios metaphysically impossible once fully understood', strength: 'moderate', source: 'Standard type-B physicalist response to the zombie argument' },
        ]
      }
    },
    {
      round: 3,
      forSide: {
        claim: 'The water/H2O analogy actually cuts against physicalism here: in the water case, we can explain why water necessarily has the properties it has (boiling point, transparency) once we know its molecular structure, because those properties are themselves structural/functional, fully entailed by the microphysical facts. But no comparable a posteriori identity has ever been proposed for consciousness that entails why the relevant brain state is accompanied by any experience at all, rather than none — physicalists gesture at a future explanation of this kind without ever specifying what it could even look like, unlike the water case where the explanatory bridge (molecular structure entailing macro-properties) is fully worked out.',
        evidence: [
          { text: 'Unlike successful scientific identities (water/H2O, heat/molecular motion) where the reductive explanation is fully specified, no comparable specification has been given of how any physical state could entail the qualitative character of experience', strength: 'strong', source: 'Chalmers, The Conscious Mind, 1996; Moreland, Consciousness and the Existence of God, 2008' },
        ]
      },
      againstSide: {
        claim: 'Panpsychism offers an alternative naturalistic account that avoids positing theism: perhaps consciousness (or proto-consciousness) is a fundamental, primitive feature of all matter at the most basic physical level, rather than something that must emerge from non-conscious matter — on this view, complex consciousness in brains results from the combination of already-conscious micro-constituents, requiring no theistic explanation, only a revision to our conception of matter\'s basic nature.',
        evidence: [
          { text: 'Panpsychism proposes that fundamental physical entities possess a primitive form of experience, potentially dissolving the hard problem by denying that consciousness needs to "emerge" from non-experiential matter at all', strength: 'moderate', source: 'Standard contemporary panpsychist literature in philosophy of mind (e.g., Goff, Strawson)' },
        ]
      }
    },
    {
      round: 4,
      forSide: {
        claim: 'Panpsychism faces its own severe and unresolved "combination problem": it is deeply unclear how billions of simple micro-experiences (in individual particles or fields) could combine into the single, unified, richly structured conscious experience of a human mind, rather than remaining a mere aggregate of disconnected micro-experiences — this combination problem is at least as difficult as the original hard problem it was meant to solve, and panpsychism remains a minority, highly speculative position even among naturalist philosophers. Theism, by contrast, needs no combination story: a single, already-unified, infinite conscious being (God) is the fundamental reality, and grounds both the physical universe and finite conscious minds made to reflect, in a creaturely way, that same fundamental consciousness — a more economical and coherent picture than requiring both a proliferation of primitive micro-experiences and an unsolved combination mechanism.',
        evidence: [
          { text: 'The "combination problem" — how billions of micro-experiences combine into one unified macro-experience — is widely recognized as a severe, unresolved difficulty for panpsychism, arguably as hard as the problem it was proposed to solve', strength: 'strong', source: 'Moreland, Consciousness and the Existence of God, 2008' },
          { text: 'Theism requires positing only one fundamental conscious being rather than universal micro-experience plus an unexplained combination mechanism, offering greater theoretical economy', strength: 'moderate', source: 'Moreland, Consciousness and the Existence of God, 2008' },
        ]
      },
      againstSide: {
        claim: 'Positing a single, already-unified infinite consciousness as fundamental reality does not obviously solve the analogous problem in the opposite direction: theism must still explain how this single, unified divine consciousness gives rise to many distinct, separate, finite conscious minds (the "individuation problem" for theism), a difficulty structurally similar to panpsychism\'s combination problem — trading one hard, unsolved metaphysical puzzle for the mirror image of that same puzzle is not obviously an explanatory improvement.',
        evidence: [
          { text: 'Critics note that positing a single fundamental consciousness generating many distinct finite minds raises its own difficult "individuation problem," structurally analogous to panpsychism\'s combination problem', strength: 'moderate', source: 'Standard philosophical critique of "cosmopsychism" and theistic grounding-of-mind proposals' },
        ]
      }
    }
  ]
};

export const argumentFromReasonLewisDebate: Debate = {
  id: 'argument-from-reason-lewis-debate',
  argumentId: 'argument-from-reason-lewis',
  title: 'The Argument from Reason (C.S. Lewis)',
  forLabel: 'Theist',
  againstLabel: 'Naturalist',
  rounds: [
    {
      round: 1,
      forSide: {
        claim: 'If naturalism is true, all reasoning is ultimately a matter of physical causation between brain states, governed by chemistry and physics — processes entirely indifferent to logical validity. But for reasoning to yield genuine knowledge, it must be governed by logical relations, not merely physical ones. Naturalism therefore undermines the very rational inference required to argue for it — a self-defeating position — whereas theism, positing a rational Creator who made minds capable of grasping logical truth, provides no such undercutting.',
        evidence: [
          { text: 'A neural state causing another neural state by physical necessity is not thereby sensitive to the logical relation between the corresponding propositions — it merely mimics logical inference without being constituted by it', strength: 'strong', source: 'Lewis, Miracles, 1947/1960, ch. 3' },
          { text: 'Naturalism, if true, provides no guarantee that physical causal processes in the brain track logical validity rather than merely producing behaviorally useful outputs', strength: 'strong', source: 'Reppert, C.S. Lewis\'s Dangerous Idea, 2003' },
        ]
      },
      againstSide: {
        claim: 'Natural selection favors accurate perception and reasoning because organisms with more reliable cognitive faculties tend to survive and reproduce better than those with unreliable ones — evolution therefore gives naturalists good reason to expect our reasoning faculties are, on the whole, reliable truth-trackers, without requiring any additional theistic explanation.',
        evidence: [
          { text: 'Accurate beliefs about one\'s environment (the location of predators, food, and mates) are generally more adaptive than inaccurate ones, giving evolutionary naturalism a plausible story for why cognitive faculties would track truth', strength: 'moderate', source: 'Standard evolutionary reliabilist response to the argument from reason' },
        ]
      }
    },
    {
      round: 2,
      forSide: {
        claim: 'Natural selection favors adaptive behavior, not necessarily true belief — the two can and do come apart. A creature could have systematically false beliefs that nonetheless reliably produce survival-enhancing behavior (for instance, believing every rustling bush conceals a predator, which is usually false but keeps the organism cautious and alive); Plantinga\'s Evolutionary Argument Against Naturalism formalizes this concern, showing that the probability our cognitive faculties are reliable, given naturalism and evolution, is low or inscrutable.',
        evidence: [
          { text: 'Adaptive behavior can be produced by false beliefs just as reliably as by true ones, since natural selection "sees" only behavioral outputs, not the truth-value of the beliefs generating them', strength: 'strong', source: 'Plantinga, Where the Conflict Really Lies, 2011' },
          { text: 'The Evolutionary Argument Against Naturalism concludes that the conjunction of naturalism and evolutionary theory gives one a defeater for trusting the reliability of one\'s own cognitive faculties, including the faculties used to reason to naturalism itself', strength: 'strong', source: 'Plantinga, Where the Conflict Really Lies, 2011' },
        ]
      },
      againstSide: {
        claim: 'While false beliefs could in principle be adaptive in specific isolated cases, a general policy of holding systematically false or logically incoherent beliefs across the whole range of an organism\'s cognitive life would almost certainly be maladaptive in the long run, since organisms need to track their environment accurately across a huge range of situations to survive and reproduce — the occasional adaptive false belief is the exception, not evidence of general unreliability, and does not establish that reasoning in general fails to track logical validity.',
        evidence: [
          { text: 'General cognitive reliability across a broad range of environmental interactions is plausibly required for long-term survival and reproduction, making systematic, wholesale unreliability implausible even on naturalism', strength: 'moderate', source: 'Standard naturalist response to Plantinga\'s EAAN' },
        ]
      }
    },
    {
      round: 3,
      forSide: {
        claim: 'This response addresses reliability about practical, survival-relevant beliefs (the location of food or predators) but does not address the specific target of Lewis\'s and Plantinga\'s argument: our capacity for abstract logical and rational inference (following a valid syllogism, grasping mathematical proof, drawing sound scientific conclusions from evidence) that has no direct survival payoff and often postdates the evolutionary pressures that shaped our ancestors\' cognition — there is no clear evolutionary story explaining why natural selection, operating on Pleistocene survival problems, would also produce faculties reliably tracking the abstract validity of, say, modern mathematical or logical proofs.',
        evidence: [
          { text: 'The specific human capacity for abstract logical and mathematical reasoning, as opposed to practical survival-relevant belief formation, has no obvious direct connection to ancestral survival pressures, making its reliability especially puzzling on a purely evolutionary account', strength: 'strong', source: 'Reppert, C.S. Lewis\'s Dangerous Idea, 2003' },
        ]
      },
      againstSide: {
        claim: 'General-purpose reasoning capacities that evolved for practical, survival-relevant problem-solving (tool use, social strategizing, planning) could plausibly generalize to abstract domains as a byproduct, without requiring separate evolutionary pressure specifically for abstract logic — much as general pattern-recognition capacities can be applied to chess or mathematics despite not evolving specifically for those purposes.',
        evidence: [
          { text: 'General-purpose cognitive capacities selected for practical problem-solving are commonly argued to generalize as byproducts (spandrels) to abstract domains never specifically selected for', strength: 'moderate', source: 'Standard evolutionary psychology "spandrel" response, cf. Gould & Lewontin, 1979' },
        ]
      }
    },
    {
      round: 4,
      forSide: {
        claim: 'Even granting a general-purpose capacity could "generalize" to abstract reasoning, this still does not address Lewis\'s deeper, categorial point: on naturalism, whatever reasoning capacity we have is, at bottom, a chain of physical causes between brain states — and physical causation, by its very nature, is blind to logical relations regardless of how "general-purpose" or evolutionarily useful the underlying capacity is. The problem is not merely whether the capacity generalizes usefully but whether physical causation as such can ever constitute (rather than merely correlate with) rational inference — and no naturalistic account, however sophisticated the evolutionary story, has shown how mere physical causation between brain states could be, rather than merely mimic, the grasping of a logical relation between propositions. Theism alone explains this by grounding reason in a rational Creator whose own rationality is not reducible to blind physical causation, and who made minds capable of a real, non-illusory participation in that rationality.',
        evidence: [
          { text: 'The core objection is categorial, not merely about evolutionary adequacy: physical causation between brain states is, by its nature, indifferent to logical relations, regardless of how the causal capacity arose', strength: 'strong', source: 'Lewis, Miracles, 1947/1960, ch. 3' },
          { text: 'Theism grounds rational inference in a rational Creator whose nature includes reason as a basic, non-derivative feature of reality, avoiding the categorial problem naturalism faces', strength: 'moderate', source: 'Reppert, C.S. Lewis\'s Dangerous Idea, 2003' },
        ]
      },
      againstSide: {
        claim: 'This "categorial" objection assumes a strong distinction between physical causation and rational inference that some naturalist philosophers reject outright, holding instead that rational inference simply is (is identical to, or is constituted by) a particular kind of physical causal process operating in accordance with certain structural/functional patterns — on this "constitutive" naturalist view, there is no further gap to explain, any more than there is a further gap between "being water" and "being H2O"; Lewis\'s argument, on this response, presupposes rather than demonstrates that physical and rational description must be categorially distinct.',
        evidence: [
          { text: 'Constitutive/functionalist accounts of rationality in naturalist philosophy of mind hold that rational inference simply is a certain kind of appropriately-structured physical/causal process, denying any further explanatory gap needing to be bridged', strength: 'moderate', source: 'Standard functionalist response to the argument from reason' },
        ]
      }
    }
  ]
};

export const religiousExperienceSwinburneDebate: Debate = {
  id: 'religious-experience-swinburne-debate',
  argumentId: 'religious-experience-swinburne',
  title: 'The Argument from Religious Experience (Swinburne)',
  forLabel: 'Theist',
  againstLabel: 'Skeptic',
  rounds: [
    {
      round: 1,
      forSide: {
        claim: 'Vast numbers of people across all cultures and eras report experiences that feel like genuine perception of a divine reality. By the Principle of Credulity (perceptual reports should be taken at face value absent specific counter-evidence) and the Principle of Testimony (others\' reports of experience are prima facie reliable), this widespread, cross-cultural testimony constitutes significant cumulative evidence for God\'s existence.',
        evidence: [
          { text: 'The phenomenology of religious experience — a sense of a personal, powerful, good presence, feelings of awe and dependence — recurs with striking consistency across unconnected cultures and eras', strength: 'strong', source: 'Swinburne, The Existence of God, 2004, ch. 13; James, The Varieties of Religious Experience, 1902' },
          { text: 'The Principles of Credulity and Testimony are the same epistemic principles that justify ordinary perceptual belief and reliance on others\' reports generally, and applying a double standard specifically to religious experience requires independent justification', strength: 'strong', source: 'Swinburne, The Existence of God, 2004' },
        ]
      },
      againstSide: {
        claim: 'Religious experiences can be reliably induced through temporal lobe stimulation, certain drugs, hypoxia, and sleep deprivation, showing they are straightforwardly neurological events rather than genuine perceptions of an external divine reality — the neural correlates and inducibility of these experiences suggest a physiological rather than a perceptual explanation.',
        evidence: [
          { text: 'Temporal lobe stimulation and certain neurological conditions can reliably induce experiences phenomenologically similar to reported religious/mystical experiences, suggesting a purely physiological origin', strength: 'moderate', source: 'Standard neuroscience-of-religion literature (e.g., research following Persinger\'s "God helmet" studies)' },
        ]
      }
    },
    {
      round: 2,
      forSide: {
        claim: 'The existence of a neural correlate or an artificially inducible trigger for an experience does not establish that the experience is non-veridical — every experience, including ordinary sense perception, has a neural correlate and can in principle be triggered artificially (electrical stimulation of the visual cortex produces visual experiences without a corresponding external object), yet we do not conclude from this that ordinary vision is generally unreliable. If God exists and typically communicates or manifests presence through natural cognitive and neurological processes, we would expect religious experience to have identifiable neural correlates, just as it does.',
        evidence: [
          { text: 'All perceptual experiences, veridical or not, have neural correlates and can in principle be triggered by direct stimulation, so the mere existence of a neural correlate or an inducing stimulus does not by itself establish non-veridicality', strength: 'strong', source: 'Swinburne, The Existence of God, 2004' },
        ]
      },
      againstSide: {
        claim: 'Different religious traditions report experiences of radically incompatible divine realities — a personal Trinitarian God, an impersonal Brahman, a non-theistic ultimate reality (as in some Buddhist traditions) — and these cannot all be equally veridical perceptions of the same actual reality; this diversity of content suggests the experiences are shaped primarily by prior cultural and theological expectation rather than by genuine perception of a single external divine object.',
        evidence: [
          { text: 'The content of reported religious experiences varies substantially across traditions in ways that track prior doctrinal and cultural expectations, suggesting the experiences are at least partly constructed by pre-existing belief rather than purely perceptual', strength: 'moderate', source: 'Standard comparative religious-experience critique, drawing on the diversity documented in Otto and James' },
        ]
      }
    },
    {
      round: 3,
      forSide: {
        claim: 'Swinburne and Otto both argue that beneath the surface diversity of theological interpretation lies a more basic, structurally convergent experiential core: a sense of encountering a powerful, personal, good presence beyond the self, which is then interpreted through the available theological vocabulary of the experiencer\'s tradition — much as people from different cultures who all perceive the same physical object will describe it using their own culturally available concepts and vocabulary, without this variability showing that no genuine perception of a common external object occurred.',
        evidence: [
          { text: 'Rudolf Otto\'s analysis of "the numinous" identifies a structurally convergent core (mysterium tremendum et fascinans) across highly diverse religious traditions, suggesting a common experiential core beneath varying theological interpretation', strength: 'strong', source: 'Otto, The Idea of the Holy, 1917/1958' },
          { text: 'Diversity of interpretive vocabulary across cultures perceiving a common object is a standard and unremarkable feature of ordinary cross-cultural perception generally, not unique to or especially damaging for religious experience', strength: 'moderate', source: 'Swinburne, The Existence of God, 2004' },
        ]
      },
      againstSide: {
        claim: 'The claimed "structural core" (Otto\'s numinous) is itself a contested, theory-laden interpretive category imposed by scholars of comparative religion, not a theory-neutral datum directly given in the raw reports themselves — describing highly diverse experiences (encountering a personal Trinitarian God versus dissolving into an impersonal, non-personal ultimate reality in some non-theistic traditions) as sharing "a common core" may itself be an artifact of the comparative method rather than evidence of a real common perceptual object.',
        evidence: [
          { text: 'Critics of comparative religious phenomenology argue that claims of a shared "numinous core" across traditions can reflect the interpretive framework of scholars rather than a theory-neutral description of the experiences themselves', strength: 'moderate', source: 'Standard methodological critique in comparative religious studies (e.g., constructivist critiques of the "common core" thesis, following Katz)' },
        ]
      }
    },
    {
      round: 4,
      forSide: {
        claim: 'Even granting legitimate scholarly debate about how much theoretical interpretation is embedded in comparative descriptions of religious experience, Swinburne\'s argument does not actually require settling this dispute, since it can proceed more modestly and specifically from the sheer volume, consistency, and cross-cultural persistence of experiences reported as encountering a personal, powerful, good, and transcendent reality — a description common enough across enough traditions (theistic ones specifically) to meet the modest evidential bar the Principles of Credulity and Testimony require, without needing to resolve every dispute in comparative religious phenomenology about non-theistic traditions specifically.',
        evidence: [
          { text: 'The core theistic argument targets experiences reported as encountering a personal, transcendent divine reality — common across a wide range of traditions — and does not require resolving disputes about non-theistic mystical experience to establish its more modest cumulative evidential claim', strength: 'moderate', source: 'Swinburne, The Existence of God, 2004' },
        ]
      },
      againstSide: {
        claim: 'Restricting the claim to theistic-type experiences specifically still leaves unresolved why the Principle of Credulity should be applied so readily to religious perceptual claims specifically, when we do apply significant skepticism and demand corroborating evidence for many other kinds of extraordinary first-person perceptual reports (alien abduction claims, some paranormal experiences) that share a similar phenomenological profile of vivid, sincere, cross-culturally-recurring testimony — a principled, non-arbitrary reason is needed for applying the Principle of Credulity generously to religious experience while withholding it from these other categories of extraordinary testimony.',
        evidence: [
          { text: 'Skeptics note that other categories of vivid, sincere, and even cross-culturally recurring extraordinary experience (certain paranormal or anomalous perceptual claims) are typically treated with far greater skepticism than religious experience, raising a consistency concern about selectively applying the Principle of Credulity', strength: 'moderate', source: 'Standard skeptical parity objection to Swinburne\'s Principle of Credulity' },
        ]
      }
    }
  ]
};

export const argumentFromDesireLewisDebate: Debate = {
  id: 'argument-from-desire-lewis-debate',
  argumentId: 'argument-from-desire-lewis',
  title: "The Argument from Desire (Lewis's Sehnsucht)",
  forLabel: 'Theist',
  againstLabel: 'Naturalist',
  rounds: [
    {
      round: 1,
      forSide: {
        claim: 'Every natural desire corresponds to some real object capable of satisfying it: hunger to food, thirst to water, sexual desire to sexual union. Human beings universally experience a distinctive longing (Sehnsucht) — evoked by beauty, love, or achievement — that is never fully satisfied by any finite good, however good. Since this desire is unique in not being satisfiable by anything in the natural world, its corresponding object must be transcendent — pointing to a reality (God) beyond nature that alone can satisfy it.',
        evidence: [
          { text: 'The phenomenology of Sehnsucht is distinctive: unlike ordinary desires frustrated merely because their object is temporarily unavailable, this longing persists and reasserts itself even in the very presence and enjoyment of the finite good that evoked it', strength: 'strong', source: 'Lewis, "The Weight of Glory," 1949; Lewis, Surprised by Joy, 1955' },
          { text: 'The premise that natural, universal desires correspond to real satisfying objects is supported by the pattern found in every other basic human desire (hunger, thirst, desire for companionship)', strength: 'moderate', source: 'Kreeft, Heaven: The Heart\'s Deepest Longing, 1989' },
        ]
      },
      againstSide: {
        claim: 'Not every desire corresponds to a real object — humans commonly experience desires with no genuine satisfying object at all, such as the desire for personal immortality free of any cost, the desire for a flawless romantic partner, or various fantasy-driven wishes; Sehnsucht could simply be one more such desire without a real referent, an artifact of imagination and unmet expectation rather than evidence of a transcendent reality.',
        evidence: [
          { text: 'Human psychology is replete with desires (for perfect romantic fulfillment, effortless success, or various idealized fantasies) that appear to have no real corresponding satisfying object, showing the "every desire has an object" premise admits clear counterexamples', strength: 'moderate', source: 'Standard objection to the argument from desire' },
        ]
      }
    },
    {
      round: 2,
      forSide: {
        claim: 'Lewis explicitly anticipates and answers this: he distinguishes desires that are frustrated because their object, though real, is temporarily or permanently unattainable (the desire for a perfect romantic partner is frustrated because no actual person is flawless, not because "flawless love" as a category is incoherent) from Sehnsucht, which is not frustrated by unavailability but persists unsatisfied even in the full presence and enjoyment of the specific finite goods (beauty, achievement, love) that evoke it — this structural difference (dissatisfaction despite possession, not merely due to non-possession) is what marks Sehnsucht as pointing beyond any finite object rather than merely being an ordinary unfulfilled fantasy.',
        evidence: [
          { text: 'Lewis specifically distinguishes Sehnsucht\'s persistent dissatisfaction-in-possession from ordinary frustrated desires whose objects are merely unattainable, identifying this structural difference as the basis for concluding it points beyond nature', strength: 'strong', source: 'Lewis, "The Weight of Glory," 1949' },
        ]
      },
      againstSide: {
        claim: 'This structural difference can be explained naturalistically without positing a transcendent object: evolutionary psychology suggests that desire mechanisms evolved to motivate continued striving and resource acquisition rather than final contentment, since organisms that became fully satisfied would stop pursuing further adaptive advantage — persistent, never-fully-satisfied longing could simply be this evolved "hedonic treadmill" mechanism operating exactly as natural selection would favor, misinterpreted by humans as evidence of something transcendent.',
        evidence: [
          { text: 'Evolutionary psychology\'s "hedonic treadmill" or "hedonic adaptation" research documents how humans return to a baseline level of satisfaction after achieving goals, a mechanism plausibly favored by selection to sustain continued motivation and striving', strength: 'moderate', source: 'Standard evolutionary psychology literature on hedonic adaptation' },
        ]
      }
    },
    {
      round: 3,
      forSide: {
        claim: 'The "hedonic treadmill" explains why satisfaction fades and motivation resumes generally, but it does not explain the specific, positive phenomenological content of Sehnsucht that Lewis describes — not mere boredom or a return to a neutral baseline (which the treadmill model would predict), but an acute, often joyful, unmistakably meaningful stab of longing with a specific quality ("as if reminded of something") oriented toward a good beyond the world, rather than simply toward more or different worldly goods. The treadmill model would predict renewed appetite for more of the same kind of finite good; Sehnsucht is characteristically not resolved by more of the same finite good, but points to a different kind of object altogether.',
        evidence: [
          { text: 'Lewis specifically describes the content of Sehnsucht as pointing toward "a country we have never yet visited" — qualitatively different from renewed appetite for more of the same worldly goods, which is what hedonic-treadmill-style explanations would predict', strength: 'strong', source: 'Lewis, "The Weight of Glory," 1949' },
        ]
      },
      againstSide: {
        claim: 'Even granting this distinctive phenomenological quality, the "genetic fallacy" cuts both ways: just as explaining the origin of a belief in evolutionary terms does not settle its truth, neither does the mere subjective feeling of "pointing beyond the world" establish that there actually is something beyond the world corresponding to it — subjective feelings of transcendence, however psychologically vivid and distinct from ordinary appetite, are not on their own reliable evidence of an actual transcendent object, any more than a vivid dream is evidence of the reality of its content.',
        evidence: [
          { text: 'The subjective vividness or distinctiveness of a feeling is not, by itself, sufficient evidence of a real external object corresponding to it, a standard epistemological caution applicable to Sehnsucht as much as to any other subjective experience', strength: 'moderate', source: 'Standard epistemological objection to inferring objective reality directly from subjective phenomenology' },
        ]
      }
    },
    {
      round: 4,
      forSide: {
        claim: 'Lewis\'s argument does not rest on the subjective vividness of the feeling alone but on the broader inductive pattern across all other known human desires: in every other clear case (hunger, thirst, sexual desire, desire for companionship, curiosity), a genuine, universal, specifically-structured desire does correspond to a real satisfying object — this is not a logical necessity but a well-evidenced empirical regularity. Sehnsucht is universal, cross-cultural, specifically structured (unsatisfied by finite goods, oriented toward something beyond them), and simply exhibits the same general pattern found in every other basic human desire; positing that this one desire, alone among all others, is a mere non-referring artifact requires a special exception to an otherwise well-supported general pattern, which is a weaker, more ad hoc position than accepting the pattern holds here too.',
        evidence: [
          { text: 'The universal correspondence between other basic human desires and their real satisfying objects (hunger/food, thirst/water) establishes an inductive pattern that Sehnsucht, sharing the same structural features (universality, specificity, non-satisfaction by inappropriate objects), plausibly continues rather than breaks', strength: 'moderate', source: 'Lewis, "The Weight of Glory," 1949; Kreeft, Heaven: The Heart\'s Deepest Longing, 1989' },
        ]
      },
      againstSide: {
        claim: 'The inductive pattern itself is selectively drawn: basic biological appetites (hunger, thirst, sexual desire) are a special, evolutionarily well-understood category with clear adaptive functions and correspondingly clear real objects, whereas more diffuse, culturally-elaborated longings (for meaning, transcendence, or the sublime) are a different kind of psychological phenomenon shaped by culture, art, and narrative expectation, not obviously governed by the same "desire implies real object" rule that applies to biological drives — treating Sehnsucht as continuous with hunger and thirst may itself beg the question about which category of mental state it actually belongs to.',
        evidence: [
          { text: 'Basic biological drives and culturally-elaborated existential longings are plausibly different psychological kinds, and it is not established that the "desire implies object" generalization, well-supported for biological drives, extends to the latter category', strength: 'moderate', source: 'Standard naturalist rejoinder distinguishing biological appetite from culturally-shaped existential longing' },
        ]
      }
    }
  ]
};

export const universalityOfReligionDebate: Debate = {
  id: 'universality-of-religion-debate',
  argumentId: 'universality-of-religion',
  title: 'The Argument from the Universality of Religion',
  forLabel: 'Theist',
  againstLabel: 'Cognitive Scientist of Religion',
  rounds: [
    {
      round: 1,
      forSide: {
        claim: 'Religious belief — belief in personal supernatural agents and a sacred, transcendent reality — is a near-universal feature of human cultures across all eras and geographies, and cognitive science shows human minds are architecturally predisposed toward it from early childhood, prior to instruction. On naturalism, this near-universal, architecturally basic predisposition toward a belief that (on naturalism) is false represents a puzzling, massive, and systematic cognitive malfunction; theism, by contrast, explains this universal impulse as tracking something real.',
        evidence: [
          { text: 'Virtually every documented human culture across history and geography has exhibited some form of religious belief, with the rare exceptions requiring special explanation rather than representing the norm', strength: 'strong', source: 'Stark, Discovering God, 2007' },
          { text: 'Cognitive science research shows children spontaneously form theistic-type beliefs (intuitive theism, teleological reasoning about natural objects) prior to explicit religious instruction', strength: 'strong', source: 'Barrett, Why Would Anyone Believe in God?, 2004' },
        ]
      },
      againstSide: {
        claim: 'Cognitive science offers a full naturalistic explanation for this universality without requiring the beliefs to be true: humans possess an evolved "Hyperactive Agency Detection Device" (HADD) that, for good adaptive reasons (better to falsely detect a predator in the rustling grass than to miss a real one), is biased toward over-attributing agency to ambiguous stimuli — religious belief in invisible personal agents is a natural byproduct of this adaptively useful but truth-indifferent cognitive bias, fully explicable without positing any real divine agents.',
        evidence: [
          { text: 'The Hyperactive Agency Detection Device hypothesis proposes that an evolved bias toward over-attributing agency (better safe than sorry regarding potential predators or rivals) naturally generates false-positive detections of invisible agents, providing a fully naturalistic account of widespread belief in supernatural agents', strength: 'strong', source: 'Barrett, Why Would Anyone Believe in God?, 2004 (presenting HADD, though Barrett himself is a theist using the same data differently)' },
        ]
      }
    },
    {
      round: 2,
      forSide: {
        claim: 'Explaining the cognitive mechanism by which a belief is formed does not by itself determine whether the belief is true or false — this is a version of the genetic fallacy. HADD, for instance, evolved because agents (predators, rivals) are genuinely present in the environment and it is adaptive to detect them reliably; a mechanism selected for detecting real agents is not thereby shown to be malfunctioning when it detects a genuinely present agent (including, potentially, a real divine agent) — the mere existence of an agency-detection mechanism is fully compatible with, and arguably supports, the reality of the agents it is generally tracking.',
        evidence: [
          { text: 'Evolved cognitive mechanisms for tracking features of the physical world (e.g., ordinary sense perception) are not thereby debunked as unreliable simply because they have an evolutionary origin and occasionally err — the same principle applies to agency detection', strength: 'strong', source: 'Barrett, Why Would Anyone Believe in God?, 2004' },
        ]
      },
      againstSide: {
        claim: 'The disanalogy with ordinary perception is instructive rather than favorable to theism: ordinary sense perception is calibrated by extensive corrective feedback (we quickly learn when we have misjudged a distance or misidentified an object, through direct interaction with the physical environment), whereas HADD\'s systematic bias toward false-positive agency detection (in rustling leaves, random noises, or ambiguous patterns) is well-documented specifically as an over-sensitive, error-prone mechanism, generating many more false positives (imagined agents where none exist) than false negatives — a mechanism known to be systematically biased toward over-detection is a poor candidate for reliably tracking a genuinely existing but empirically elusive agent like God.',
        evidence: [
          { text: 'HADD is specifically characterized in the cognitive science literature as a "hyperactive" mechanism generating substantially more false positives (imagined threats/agents) than false negatives, unlike ordinary perceptual systems calibrated by corrective feedback', strength: 'moderate', source: 'Standard cognitive science of religion literature on HADD\'s asymmetric error profile' },
        ]
      }
    },
    {
      round: 3,
      forSide: {
        claim: 'A hyperactive, error-prone mechanism specifically calibrated to err on the side of over-detecting agency is exactly what we would expect a good, providential God to have built into human cognitive architecture if God wanted to ensure that virtually no human culture, across the vast range of historical and environmental conditions, would fail to at least form some rudimentary awareness of a personal, transcendent reality — an "easy believism" cognitive design, oriented toward false-positive rather than false-negative error, is precisely the kind of mechanism a Creator who "is not far from each one of us" (Acts 17:27) and desires universal access to some awareness of Himself might be expected to install, rather than a narrowly calibrated mechanism that could easily miss Him under adverse conditions.',
        evidence: [
          { text: 'A cognitive bias calibrated toward the "safer" error (false positive rather than false negative) for detecting a reality of maximal importance is consistent with, and arguably predicted by, a providential Creator wanting broad, low-barrier access to some awareness of the divine across all human conditions', strength: 'moderate', source: 'Standard reformed epistemology / sensus divinitatis line of argument, paralleling Barrett\'s own theistic reading of his data' },
        ]
      },
      againstSide: {
        claim: 'This theistic re-reading of HADD\'s error-proneness is unfalsifiable and equally compatible with any observed data: whatever the actual empirical profile of the cognitive mechanism turned out to be (whether hyperactive or finely calibrated, whether producing widespread or rare belief), a sufficiently flexible theistic interpretation could be constructed to explain it as exactly what a wise Creator "would have done" — this flexibility to accommodate any possible finding is a mark of an unfalsifiable, rather than a well-evidenced, hypothesis.',
        evidence: [
          { text: 'A hypothesis flexible enough to retroactively accommodate whatever empirical profile a cognitive mechanism turns out to have is correspondingly weak as a specific, falsifiable prediction, a standard concern in philosophy of science applied here to providential design explanations', strength: 'moderate', source: 'Standard philosophy-of-science concern about unfalsifiable post-hoc theistic explanations' },
        ]
      }
    },
    {
      round: 4,
      forSide: {
        claim: 'The argument need not rest on this specific providential-design point alone to retain force: even setting it aside, the core comparative claim stands — naturalism, on its own terms, predicts that a cognitive faculty shaped purely by blind selection for reproductive advantage should track adaptively useful outputs, not necessarily truths about invisible, non-physical, causally undetectable agents specifically; the near-universal, cross-culturally robust, developmentally early emergence of belief in such agents is, at minimum, equally well or better explained by there being a real personal transcendent reality that human cognitive architecture (however shaped) is in fact sensitive to, than by an elaborate cognitive-bias story that must be constructed and defended anew for this one belief category, when analogous "hyperactive" biases are not typically invoked to debunk our other reliably-adaptive, broadly truth-tracking cognitive faculties.',
        evidence: [
          { text: 'The comparative theoretical economy favors an explanation in which a widespread, early-emerging, cross-culturally robust cognitive tendency actually tracks a real feature of reality, rather than requiring an elaborate special debunking story reserved uniquely for this one belief category among otherwise generally-trusted cognitive faculties', strength: 'moderate', source: 'Barrett, Why Would Anyone Believe in God?, 2004' },
        ]
      },
      againstSide: {
        claim: 'This comparative claim assumes what is precisely in question — that theistic belief, unlike, say, belief in witches, ghosts, or other equally widespread and cross-culturally recurring supernatural beliefs throughout history (many of which theists themselves regard as false despite similar cognitive origins and near-universality), should be singled out as the one instance of the mechanism actually tracking truth; without independent evidence for God\'s existence beyond the mere fact of the belief\'s universality and cognitive naturalness, there is no principled way to distinguish theistic belief from the many other equally widespread, cognitively natural, but (by most theists\' own lights) false supernatural beliefs that share the very same cognitive origin story.',
        evidence: [
          { text: 'Belief in witches, ghosts, ancestor spirits, and other supernatural agents shares the same HADD-based cognitive origin and comparable historical/cross-cultural prevalence as theistic belief, yet most theists themselves regard these other beliefs as false — undermining the claim that universality and cognitive naturalness alone can distinguish true from false supernatural beliefs', strength: 'moderate', source: 'Standard "parity of reasoning" objection drawing on the broader cognitive science of religion literature (e.g., Boyer)' },
        ]
      }
    }
  ]
};

export const existentialDebates: Record<string, Debate> = {
  'consciousness-moreland': consciousnessMorelandDebate,
  'argument-from-reason-lewis': argumentFromReasonLewisDebate,
  'religious-experience-swinburne': religiousExperienceSwinburneDebate,
  'argument-from-desire-lewis': argumentFromDesireLewisDebate,
  'universality-of-religion': universalityOfReligionDebate,
};
