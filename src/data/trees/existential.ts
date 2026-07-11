import { TreeNode } from '../arguments/types';

export const consciousnessTree: TreeNode = {
  id: 'consciousness-root',
  type: 'argument',
  text: 'The Argument from Consciousness (Moreland)',
  children: [
    {
      id: 'consciousness-conclusion',
      type: 'conclusion',
      text: 'The existence of consciousness is best explained by a universe grounded in and created by a supremely conscious being — God — whose consciousness is ontologically basic, not derived',
      children: []
    },
    {
      id: 'consciousness-p1',
      type: 'premise',
      text: 'Consciousness — the felt, subjective, first-person dimension of experience (qualia, intentionality, self-awareness) — is a pervasive feature of reality',
      status: 'granted',
      children: [
        {
          id: 'consciousness-p1-s1',
          type: 'support',
          text: 'There is "something it is like" to have an experience (seeing red, tasting coffee) — a felt quality no physical description captures; this is what Chalmers calls the "hard problem"',
          sources: ['Chalmers, The Conscious Mind (1996)']
        },
        {
          id: 'consciousness-p1-s2',
          type: 'support',
          text: 'Physical science can describe correlates of consciousness — neural firing patterns, brain states — but cannot bridge the explanatory gap to subjective experience itself',
          sources: ['Moreland, Consciousness and the Existence of God (2008)']
        },
        {
          id: 'consciousness-p1-s3',
          type: 'support',
          text: 'The existence of first-person experience is as certain as anything we know — Descartes\'s cogito itself rests on the indubitability of conscious awareness',
          sources: ['Moreland, Consciousness and the Existence of God (2008)']
        }
      ]
    },
    {
      id: 'consciousness-p2',
      type: 'premise',
      text: 'A universe consisting solely of mindless matter and physical laws has no resources to generate or explain first-person subjectivity',
      status: 'defended',
      children: [
        {
          id: 'consciousness-p2-s1',
          type: 'support',
          text: 'The hard problem is not one of empirical ignorance but conceptual impossibility: no amount of physical complexity explains why any physical process should be accompanied by subjective experience',
          sources: ['Chalmers, The Conscious Mind (1996)']
        },
        {
          id: 'consciousness-p2-s2',
          type: 'support',
          text: 'Chalmers\'s conceivability argument — philosophical zombies, beings physically identical to us but with no inner experience — shows the explanatory gap is logical, not merely a gap in current knowledge',
          sources: ['Chalmers, The Conscious Mind (1996)']
        },
        {
          id: 'consciousness-p2-s3',
          type: 'support',
          text: 'Emergence explains how functional properties arise from simpler ones (e.g., liquidity from molecules) but this model does not extend to phenomenal consciousness, which is categorially different from any functional property',
          sources: ['Moreland, Consciousness and the Existence of God (2008)']
        },
        {
          id: 'consciousness-p2-obj1',
          type: 'objection',
          text: 'Emergentism: consciousness is simply an emergent property of sufficiently complex physical systems',
          children: [
            {
              id: 'consciousness-p2-obj1-r1',
              type: 'response',
              text: 'Ordinary emergence (liquidity, solidity) explains new functional properties, but functional emergence is a different phenomenon from the appearance of subjective experience — the analogy does not transfer',
              sources: ['Chalmers, The Conscious Mind (1996)']
            },
            {
              id: 'consciousness-p2-obj1-r2',
              type: 'response',
              text: 'The zombie thought experiment shows the gap is not one of complexity: even a perfect physical duplicate could, in principle, lack inner experience, so complexity alone cannot be doing the explanatory work',
              sources: ['Chalmers, The Conscious Mind (1996)']
            }
          ]
        },
        {
          id: 'consciousness-p2-obj2',
          type: 'objection',
          text: 'Panpsychism: consciousness could be a primitive feature of all matter, avoiding the need to posit God',
          children: [
            {
              id: 'consciousness-p2-obj2-r1',
              type: 'response',
              text: 'Panpsychism faces the unresolved "combination problem" — how countless micro-experiences combine into the single, unified experience of a subject — and remains at least as far from scientific orthodoxy as theism',
              sources: ['Moreland, Consciousness and the Existence of God (2008)']
            },
            {
              id: 'consciousness-p2-obj2-r2',
              type: 'response',
              text: 'Theism is more parsimonious: a single infinite conscious being grounds both physical and mental reality, whereas panpsychism must posit primitive experience in every particle of matter',
              sources: ['Moreland, Consciousness and the Existence of God (2008)']
            }
          ]
        }
      ]
    }
  ]
};

export const argumentFromReasonTree: TreeNode = {
  id: 'reason-root',
  type: 'argument',
  text: 'The Argument from Reason (C.S. Lewis)',
  children: [
    {
      id: 'reason-conclusion',
      type: 'conclusion',
      text: 'The existence of valid rational inference is best explained by a universe created and sustained by a rational God, not by blind physical processes',
      children: []
    },
    {
      id: 'reason-p1',
      type: 'premise',
      text: 'If naturalism is true, all mental events — including acts of reasoning — are determined by prior physical causes (neural events governed by chemistry and physics)',
      status: 'granted',
      children: [
        {
          id: 'reason-p1-s1',
          type: 'support',
          text: 'This is what physicalism itself requires: mental states are identical to, or supervene on, physical brain states, and physical states are governed exhaustively by physical law',
          sources: ["Lewis, Miracles (1947/1960)"]
        },
        {
          id: 'reason-p1-s2',
          type: 'support',
          text: 'On this picture, what actually happens when you "reason" from premises to a conclusion is that one brain state causes another brain state by ordinary physical causation, not by logical entailment',
          sources: ["Reppert, C.S. Lewis's Dangerous Idea (2003)"]
        }
      ]
    },
    {
      id: 'reason-p2',
      type: 'premise',
      text: 'Physical causation is entirely indifferent to logical validity; for reasoning to yield knowledge it must be governed by logical relations, not merely physical ones — but naturalism cannot provide this',
      status: 'defended',
      children: [
        {
          id: 'reason-p2-s1',
          type: 'support',
          text: 'A neural state causes another by physical necessity, not because one thought logically follows from another — if belief in the premises causes belief in the conclusion by a merely physical process, that process is not sensitive to the logical relation between them, it only mimics it',
          sources: ["Lewis, Miracles (1947/1960)"]
        },
        {
          id: 'reason-p2-s2',
          type: 'support',
          text: 'On naturalism there is no identifiable mechanism by which physical causation tracks logical validity rather than merely correlating with it',
          sources: ['Plantinga, Where the Conflict Really Lies (2011)']
        },
        {
          id: 'reason-p2-s3',
          type: 'support',
          text: 'The conclusion is self-undermining: naturalism, if true, undercuts the trustworthiness of all reasoning — including the very reasoning used to conclude that naturalism is true',
          sources: ["Lewis, Miracles (1947/1960)"]
        },
        {
          id: 'reason-p2-obj1',
          type: 'objection',
          text: 'Natural selection favors accurate perception of reality, so evolved cognitive faculties should be reliable truth-trackers',
          children: [
            {
              id: 'reason-p2-obj1-r1',
              type: 'response',
              text: 'Selection favors adaptive behavior, not necessarily true belief — a belief that predators are everywhere may aid survival even if wildly false, so adaptiveness and truth can come apart',
              sources: ['Plantinga, Where the Conflict Really Lies (2011)']
            },
            {
              id: 'reason-p2-obj1-r2',
              type: 'response',
              text: 'Plantinga\'s Evolutionary Argument Against Naturalism formalizes this: the probability that evolution plus naturalism would produce cognitive faculties that are reliable truth-trackers (rather than merely adaptive ones) is low or inscrutable',
              sources: ['Plantinga, Where the Conflict Really Lies (2011)']
            }
          ]
        },
        {
          id: 'reason-p2-obj2',
          type: 'objection',
          text: 'Compatibilism: physical causation and rational validity are not mutually exclusive; a deterministic physical process can simply be a process of reasoning',
          children: [
            {
              id: 'reason-p2-obj2-r1',
              type: 'response',
              text: 'The burden falls on the compatibilist to show the physical process is constitutively a rational process, not merely correlated with one — Lewis\'s challenge is precisely that this identity has never been demonstrated',
              sources: ["Reppert, C.S. Lewis's Dangerous Idea (2003)"]
            },
            {
              id: 'reason-p2-obj2-r2',
              type: 'response',
              text: 'Physical description and rational description are categorically different — physical causation as such tracks no logical relations — so simply asserting their identity begs the question against Lewis rather than answering it',
              sources: ["Lewis, Miracles (1947/1960)"]
            }
          ]
        }
      ]
    }
  ]
};

export const religiousExperienceTree: TreeNode = {
  id: 're-root',
  type: 'argument',
  text: 'The Argument from Religious Experience (Swinburne)',
  children: [
    {
      id: 're-conclusion',
      type: 'conclusion',
      text: 'The widespread, cross-cultural, phenomenologically convergent nature of theistic experience constitutes substantial cumulative evidence for the reality of God',
      children: []
    },
    {
      id: 're-p1',
      type: 'premise',
      text: 'Many people across all cultures and eras report experiences of the presence of God — experiences that feel like genuine perception of a divine reality, not imagination or emotion',
      status: 'defended',
      children: [
        {
          id: 're-p1-s1',
          type: 'support',
          text: 'The phenomenology of these experiences is remarkably consistent: a sense of a personal, powerful, good presence transcending the experiencer, accompanied by awe, dependence, love, and a sense of being known — as James catalogued extensively',
          sources: ['Swinburne, The Existence of God (2004)']
        },
        {
          id: 're-p1-s2',
          type: 'support',
          text: 'This phenomenological core recurs across unconnected traditions — Hindu, Christian, Jewish, Islamic, and indigenous — suggesting a common object of experience rather than mere cultural projection',
          sources: ['Alston, Perceiving God (1991)']
        },
        {
          id: 're-p1-obj1',
          type: 'objection',
          text: 'Diversity of religious experience: different religions report incompatible divine realities, so they cannot all be veridical',
          children: [
            {
              id: 're-p1-obj1-r1',
              type: 'response',
              text: 'Swinburne argues a core theistic experience — of a single, good, powerful presence — underlies most traditions and is more basic than the theological interpretations layered on top of it',
              sources: ['Swinburne, The Existence of God (2004)']
            },
            {
              id: 're-p1-obj1-r2',
              type: 'response',
              text: 'Diversity in how experiences are interpreted theologically is compatible with a shared experiential core; variation at the level of doctrine does not entail variation at the level of the underlying perception',
              sources: ['Swinburne, The Existence of God (2004)']
            }
          ]
        }
      ]
    },
    {
      id: 're-p2',
      type: 'premise',
      text: "The Principle of Credulity: absent specific counter-evidence, we should take perceptual reports at face value. The Principle of Testimony: others' reports of their experiences are prima facie reliable",
      status: 'defended',
      children: [
        {
          id: 're-p2-s1',
          type: 'support',
          text: "Swinburne's principles are simply extensions of the epistemic principles that already govern ordinary sense perception and testimony — we do not demand extraordinary evidence for ordinary perceptual reports and should not demand it here without specific reason to distrust",
          sources: ['Swinburne, The Existence of God (2004)']
        },
        {
          id: 're-p2-s2',
          type: 'support',
          text: 'The sheer accumulation of millions of independent reports across unconnected cultures and centuries constitutes significant cumulative evidence, on the same logic by which converging independent testimony strengthens any claim',
          sources: ['Alston, Perceiving God (1991)']
        },
        {
          id: 're-p2-obj1',
          type: 'objection',
          text: 'Neurological explanation: religious experiences can be induced by temporal lobe stimulation, drugs, and hypoxia, showing they are brain states rather than genuine perceptions',
          children: [
            {
              id: 're-p2-obj1-r1',
              type: 'response',
              text: 'Every act of perception has a physical/neural correlate; finding a correlate for religious experience no more disproves its veridicality than finding visual-cortex activity disproves ordinary seeing',
              sources: ['Swinburne, The Existence of God (2004)']
            },
            {
              id: 're-p2-obj1-r2',
              type: 'response',
              text: 'That a perception can be partially simulated or triggered by artificial means does not show the naturally occurring perception is illusory; God could act through, rather than despite, natural neurological processes',
              sources: ['Swinburne, The Existence of God (2004)']
            }
          ]
        }
      ]
    }
  ]
};

export const argumentFromDesireTree: TreeNode = {
  id: 'desire-root',
  type: 'argument',
  text: "The Argument from Desire (Lewis's Sehnsucht)",
  children: [
    {
      id: 'desire-conclusion',
      type: 'conclusion',
      text: 'The best explanation for this universal, unfulfillable-by-finitude desire is that humans are made for a transcendent reality — God — which alone can satisfy it',
      children: []
    },
    {
      id: 'desire-p1',
      type: 'premise',
      text: 'Humans universally experience a deep longing — not fully satisfied by anything in the natural world — that points always beyond finite goods',
      status: 'granted',
      children: [
        {
          id: 'desire-p1-s1',
          type: 'support',
          text: 'Lewis describes the characteristic phenomenology: the moment of beauty, love, or achievement fills one with longing rather than satisfaction — the sunset, the piece of music, the moment of friendship promises something it cannot deliver; "this was not it"',
          sources: ['Lewis, The Weight of Glory (1949)']
        },
        {
          id: 'desire-p1-s2',
          type: 'support',
          text: 'The experience is cross-cultural and recurs independently across traditions — Augustine, Wordsworth, and the Japanese aesthetic of mono no aware all describe the same bittersweet yearning',
          sources: ['Lewis, Surprised by Joy (1955)']
        },
        {
          id: 'desire-p1-s3',
          type: 'support',
          text: 'The longing is pre-theoretical — it is felt long before it is analysed or given theological interpretation, so it is not simply an artifact of prior religious belief',
          sources: ['Lewis, Surprised by Joy (1955)']
        }
      ]
    },
    {
      id: 'desire-p2',
      type: 'premise',
      text: 'Every natural desire corresponds to a real object capable of satisfying it; this longing — unique in not being satisfied by any finite good — corresponds to a transcendent reality',
      status: 'defended',
      children: [
        {
          id: 'desire-p2-s1',
          type: 'support',
          text: 'The general pattern holds throughout nature: hunger corresponds to food, thirst to water, sexual desire to sexual union, the desire for knowledge to truth — the existence of a natural desire is evidence that a real object answering to it exists',
          sources: ['Lewis, The Weight of Glory (1949)']
        },
        {
          id: 'desire-p2-s2',
          type: 'support',
          text: "The Sehnsucht is structurally distinctive: unlike ordinary frustrated desire (thirst in a desert, where the object exists but is unreachable), it persists unsatisfied even once its apparent finite object — beauty, love, achievement — has been fully attained",
          sources: ["Kreeft, Heaven: The Heart's Deepest Longing (1989)"]
        },
        {
          id: 'desire-p2-s3',
          type: 'support',
          text: 'This structural anomaly — persistence in the very presence of finite goods — points beyond natural satisfaction altogether, to a transcendent object rather than to the absence of any object',
          sources: ["Kreeft, Heaven: The Heart's Deepest Longing (1989)"]
        },
        {
          id: 'desire-p2-obj1',
          type: 'objection',
          text: 'Not all desires have real objects: some desires are illusory (the desire for immortality, for a perfect lover), and Sehnsucht could be one such illusory desire',
          children: [
            {
              id: 'desire-p2-obj1-r1',
              type: 'response',
              text: 'Lewis distinguishes frustrated desires, where an object exists but cannot be attained, from the Sehnsucht, which remains unsatisfied even when the relevant earthly goods are obtained — this unique structure points beyond natural satisfaction rather than signaling the absence of any object at all',
              sources: ['Lewis, The Weight of Glory (1949)']
            }
          ]
        },
        {
          id: 'desire-p2-obj2',
          type: 'objection',
          text: 'Evolutionary origin: the longing is simply an evolutionary overshoot — adaptations sometimes produce desires that outrun their adaptive function, with no further object required',
          children: [
            {
              id: 'desire-p2-obj2-r1',
              type: 'response',
              text: 'Even granting that evolutionary overshoot explains the psychological mechanism that produces the longing, this says nothing about whether the desire has a real object — the consistent structure of the desire, always pointing beyond the finite, is still best explained by there being something genuinely beyond',
              sources: ['Lewis, Surprised by Joy (1955)']
            },
            {
              id: 'desire-p2-obj2-r2',
              type: 'response',
              text: 'This is an instance of the genetic fallacy: explaining how a desire (or belief) arose does not settle whether it is veridical or tracks anything real',
              sources: ['Lewis, Surprised by Joy (1955)']
            }
          ]
        }
      ]
    }
  ]
};

export const universalityOfReligionTree: TreeNode = {
  id: 'universality-root',
  type: 'argument',
  text: 'The Argument from the Universality of Religion',
  children: [
    {
      id: 'universality-conclusion',
      type: 'conclusion',
      text: "The universal, spontaneous, architecturally basic religious impulse is better explained by God's existence than by massive universal cognitive error",
      children: []
    },
    {
      id: 'universality-p1',
      type: 'premise',
      text: 'Religious belief — belief in personal supernatural agents, the sacred, or divine reality — is a near-universal feature of human cultures across all eras and geographies',
      status: 'defended',
      children: [
        {
          id: 'universality-p1-s1',
          type: 'support',
          text: 'Every known human culture has had religion; cultures without it are the rare exception requiring special explanation, not the historical or anthropological rule',
          sources: ['Stark, Discovering God (2007)']
        },
        {
          id: 'universality-p1-s2',
          type: 'support',
          text: 'Children spontaneously form theistic beliefs before any religious instruction — what Kelemen calls "intuitive theism" — suggesting the disposition is built into cognitive development itself, not merely transmitted culturally',
          sources: ['Barrett, Why Would Anyone Believe in God? (2004)']
        },
        {
          id: 'universality-p1-s3',
          type: 'support',
          text: 'This universality is deeper and more robust across independent cultures than any other candidate cultural universal',
          sources: ['Stark, Discovering God (2007)']
        },
        {
          id: 'universality-p1-obj1',
          type: 'objection',
          text: 'Religious beliefs are highly variable in content; there is no convergent "universal religion", only local variation',
          children: [
            {
              id: 'universality-p1-obj1-r1',
              type: 'response',
              text: 'The argument claims universality of theistic structure — a personal agent, transcendence, moral demand — not identity of theological content; these are different levels of claim',
              sources: ['Barrett, Why Would Anyone Believe in God? (2004)']
            },
            {
              id: 'universality-p1-obj1-r2',
              type: 'response',
              text: 'Barrett and Boyer document convergent core features across traditions — gods are consistently personal, morally interested, and possess counterintuitive properties — so surface variability in doctrine is compatible with deep structural convergence',
              sources: ['Stark, Discovering God (2007)']
            }
          ]
        }
      ]
    },
    {
      id: 'universality-p2',
      type: 'premise',
      text: 'The cognitive science of religion shows that human minds have agent-detection and intuitive theism built into their architecture; on naturalism, this universally distributed cognitive predisposition toward false belief is puzzling',
      status: 'defended',
      children: [
        {
          id: 'universality-p2-s1',
          type: 'support',
          text: 'On evolutionary reliabilism, natural selection is generally expected to shape cognitive faculties that track truth, since accurate belief usually serves survival',
          sources: ['Barrett, Why Would Anyone Believe in God? (2004)']
        },
        {
          id: 'universality-p2-s2',
          type: 'support',
          text: 'If God does not exist, human minds are nevertheless universally and deeply predisposed to a fundamental error about the nature of reality — a massive, systematic malfunction of the very faculties evolution supposedly refined',
          sources: ['Stark, Discovering God (2007)']
        },
        {
          id: 'universality-p2-s3',
          type: 'support',
          text: 'The simpler, more unified explanation is that the universal religious impulse tracks something real: God exists and has left traces of himself in human cognitive architecture',
          sources: ['Barrett, Why Would Anyone Believe in God? (2004)']
        },
        {
          id: 'universality-p2-obj1',
          type: 'objection',
          text: 'Cognitive science explains religion away: if religious belief is produced by cognitive biases such as Hyperactive Agent Detection Device (HADD) and theory of mind, this debunks it',
          children: [
            {
              id: 'universality-p2-obj1-r1',
              type: 'response',
              text: 'Explaining the cognitive mechanism that produces a belief does not by itself determine whether the belief is true — we form beliefs about the physical world through evolved perceptual mechanisms too, and the evolutionary origin of ordinary perception does not debunk perception',
              sources: ['Barrett, Why Would Anyone Believe in God? (2004)']
            },
            {
              id: 'universality-p2-obj1-r2',
              type: 'response',
              text: 'HADD plausibly evolved because predators and other agents were genuinely present in the ancestral environment, not illusory — a mechanism tuned to detect real agents is not obviously a malfunction when it also detects a real divine agent',
              sources: ['Barrett, Why Would Anyone Believe in God? (2004)']
            }
          ]
        }
      ]
    }
  ]
};

export const existentialTrees: Record<string, TreeNode> = {
  'argument-from-desire-lewis': argumentFromDesireTree,
  'argument-from-reason-lewis': argumentFromReasonTree,
  'consciousness-moreland': consciousnessTree,
  'religious-experience-swinburne': religiousExperienceTree,
  'universality-of-religion': universalityOfReligionTree,
};
