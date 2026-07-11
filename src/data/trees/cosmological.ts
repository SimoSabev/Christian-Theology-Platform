import { TreeNode } from '../arguments/types';

export const kalamTree: TreeNode = {
  id: 'kalam-root',
  type: 'argument',
  text: 'Kalam Cosmological Argument',
  children: [
    {
      id: 'kalam-conclusion',
      type: 'conclusion',
      text: 'The universe has a cause of its existence',
      children: []
    },
    {
      id: 'kalam-p1',
      type: 'premise',
      text: 'Everything that begins to exist has a cause',
      status: 'defended',
      children: [
        {
          id: 'kalam-p1-s1',
          type: 'support',
          text: 'Metaphysical intuition: ex nihilo nihil fit',
          sources: ['Aquinas ST I.2.3', 'Craig 1979']
        },
        {
          id: 'kalam-p1-s2',
          type: 'support',
          text: 'Empirical confirmation: all observed origins are caused',
          sources: ['Scientific consensus']
        },
        {
          id: 'kalam-p1-obj1',
          type: 'objection',
          text: 'Quantum events are uncaused',
          children: [
            {
              id: 'kalam-p1-obj1-r1',
              type: 'response',
              text: 'Quantum vacuum is not "nothing" — it is a structured physical state',
              sources: ['Vilenkin 2006', 'Craig 2008']
            }
          ]
        },
        {
          id: 'kalam-p1-obj2',
          type: 'objection',
          text: 'The causal principle only applies within the universe, not to the universe itself',
          children: [
            {
              id: 'kalam-p1-obj2-r1',
              type: 'response',
              text: 'The causal principle is a metaphysical truth, not limited to intra-universe events',
              sources: ['Craig, Reasonable Faith (2008)']
            }
          ]
        }
      ]
    },
    {
      id: 'kalam-p2',
      type: 'premise',
      text: 'The universe began to exist',
      status: 'defended',
      children: [
        {
          id: 'kalam-p2-s1',
          type: 'support',
          text: 'Big Bang cosmology (Hubble, CMB, nucleosynthesis)',
          sources: ['Hawking 1988', 'Penrose 1989']
        },
        {
          id: 'kalam-p2-s2',
          type: 'support',
          text: 'Borde-Guth-Vilenkin theorem (2003) — expanding universes must have a past boundary',
          sources: ['Borde, Guth, Vilenkin 2003']
        },
        {
          id: 'kalam-p2-s3',
          type: 'support',
          text: 'Impossibility of an actual infinite past — traversing an infinite cannot be completed',
          sources: ['Craig 1979', 'Al-Ghazali 11th c.']
        },
        {
          id: 'kalam-p2-obj1',
          type: 'objection',
          text: 'Cyclic/bouncing cosmologies avoid a beginning',
          children: [
            {
              id: 'kalam-p2-obj1-r1',
              type: 'response',
              text: 'BGV theorem applies to all models expanding on average; entropy growth prevents eternal cycling',
              sources: ['Vilenkin 2006']
            }
          ]
        },
        {
          id: 'kalam-p2-obj2',
          type: 'objection',
          text: 'Quantum gravity models may eliminate the singularity',
          children: [
            {
              id: 'kalam-p2-obj2-r1',
              type: 'response',
              text: 'Even if the singularity is avoided, the BGV theorem still requires a past boundary for any expanding spacetime',
              sources: ['Vilenkin 2006']
            }
          ]
        }
      ]
    }
  ]
};

export const leibnizTree: TreeNode = {
  id: 'leibniz-root',
  type: 'argument',
  text: 'The Leibnizian Cosmological Argument (Contingency)',
  children: [
    {
      id: 'leibniz-conclusion',
      type: 'conclusion',
      text: 'A transcendent, necessary, personal being (God) exists',
      children: []
    },
    {
      id: 'leibniz-p1',
      type: 'premise',
      text: 'Everything that exists has an explanation of its existence, either in the necessity of its own nature or in an external cause',
      status: 'defended',
      children: [
        {
          id: 'leibniz-p1-s1',
          type: 'support',
          text: 'The Principle of Sufficient Reason is deeply intuitive and presupposed by all scientific inquiry — science assumes phenomena have explanations',
          sources: ['Leibniz, "On the Ultimate Origination of Things" (1697)']
        },
        {
          id: 'leibniz-p1-s2',
          type: 'support',
          text: 'The premise is modest: it permits two types of explanation — necessity of nature or external cause; denying it means accepting things exist for no reason at all',
          sources: ['Pruss, The Principle of Sufficient Reason (2006)']
        },
        {
          id: 'leibniz-p1-obj1',
          type: 'objection',
          text: 'The universe might exist as a brute fact, with no explanation at all',
          children: [
            {
              id: 'leibniz-p1-obj1-r1',
              type: 'response',
              text: 'Denying the PSR undermines the foundation of all rational inquiry and science; if brute facts are allowed, anything — consciousness, life, the laws of physics — could lack an explanation for no reason',
              sources: ['Pruss, The Principle of Sufficient Reason (2006)']
            }
          ]
        }
      ]
    },
    {
      id: 'leibniz-p2',
      type: 'premise',
      text: 'If the universe has an explanation of its existence, that explanation is a transcendent, necessary, personal being',
      status: 'defended',
      children: [
        {
          id: 'leibniz-p2-s1',
          type: 'support',
          text: 'The universe is the totality of physical reality, so its explanation cannot be another physical thing — that would just be another part of the universe needing its own explanation',
          sources: ['Leibniz, Monadology (1714)']
        },
        {
          id: 'leibniz-p2-s2',
          type: 'support',
          text: 'The only non-physical entities we know of that can serve as causes are minds, so the transcendent explanation must be personal',
          sources: ['Pruss & Gale, "A New Cosmological Argument" (1999)']
        },
        {
          id: 'leibniz-p2-obj1',
          type: 'objection',
          text: "If everything requires an explanation, what explains God? This leads to an infinite regress",
          children: [
            {
              id: 'leibniz-p2-obj1-r1',
              type: 'response',
              text: 'The argument explicitly allows explanation by necessity of nature, not only external cause — God exists by the necessity of His own nature, not as an unexplained brute fact',
              sources: ['Craig, Reasonable Faith (2008)']
            }
          ]
        }
      ]
    },
    {
      id: 'leibniz-p3',
      type: 'premise',
      text: 'The universe exists',
      status: 'granted',
      children: [
        {
          id: 'leibniz-p3-s1',
          type: 'support',
          text: 'This is self-evidently true — we observe the universe and exist within it; its existence is an undeniable brute fact',
          sources: []
        }
      ]
    }
  ]
};

export const thomisticTree: TreeNode = {
  id: 'thomistic-root',
  type: 'argument',
  text: "Aquinas's Five Ways",
  children: [
    {
      id: 'thomistic-conclusion',
      type: 'conclusion',
      text: 'There exists a being that is pure actuality, the first efficient cause, and a necessary being — this being is what everyone calls God',
      children: []
    },
    {
      id: 'thomistic-p1',
      type: 'premise',
      text: 'The First Way (Motion): whatever is in motion is moved by another, and there cannot be an infinite regress of movers — so there must be a First Unmoved Mover',
      status: 'defended',
      children: [
        {
          id: 'thomistic-p1-s1',
          type: 'support',
          text: '"Motion" means any change from potentiality to actuality; nothing can actualize its own potential without already being actual in that respect, which is contradictory',
          sources: ['Aquinas, Summa Theologiae I.2.3']
        },
        {
          id: 'thomistic-p1-s2',
          type: 'support',
          text: 'An essentially ordered series of causes — where each member depends simultaneously on what precedes it, like a hand moving a stick moving a ball — cannot regress infinitely; it must terminate in something that is pure actuality',
          sources: ['Feser, Aquinas (2009)']
        },
        {
          id: 'thomistic-p1-obj1',
          type: 'objection',
          text: 'The Five Ways depend on outdated Aristotelian physics that modern science has replaced',
          children: [
            {
              id: 'thomistic-p1-obj1-r1',
              type: 'response',
              text: "Aquinas's argument operates at the level of metaphysics, not physics — the potentiality/actuality distinction applies to quantum events as much as to falling stones, and can be formulated without dependence on Aristotelian physics specifically",
              sources: ['Feser, Aquinas (2009)', 'Feser, Five Proofs of the Existence of God (2017)']
            }
          ]
        }
      ]
    },
    {
      id: 'thomistic-p2',
      type: 'premise',
      text: 'The Second Way (Efficient Causation): nothing can be the efficient cause of itself, so there must be a First Efficient Cause',
      status: 'defended',
      children: [
        {
          id: 'thomistic-p2-s1',
          type: 'support',
          text: 'An essentially ordered series of efficient causes operates simultaneously and hierarchically — remove any member and the whole series fails, unlike an accidentally ordered series such as a chain of human generations',
          sources: ['Aquinas, Summa Theologiae I.2.3']
        },
        {
          id: 'thomistic-p2-s2',
          type: 'support',
          text: 'Such a series requires a first cause sustaining the causal power of every subsequent member, for the same reason an essentially ordered series of movers cannot regress infinitely',
          sources: ['Feser, Five Proofs of the Existence of God (2017)']
        }
      ]
    },
    {
      id: 'thomistic-p3',
      type: 'premise',
      text: 'The Third Way (Contingency): contingent beings, which can fail to exist, require a necessary being to ground their existence',
      status: 'defended',
      children: [
        {
          id: 'thomistic-p3-s1',
          type: 'support',
          text: 'If everything were merely contingent, it would be possible that at some point nothing at all existed',
          sources: ['Aquinas, Summa Theologiae I.2.3']
        },
        {
          id: 'thomistic-p3-s2',
          type: 'support',
          text: 'But since ex nihilo nihil fit, if there were ever absolutely nothing, nothing could ever begin to exist — yet things plainly exist now, so at least one necessary being must ground them',
          sources: ['Aquinas, Summa Theologiae I.2.3']
        }
      ]
    }
  ]
};

export const roweContingencyTree: TreeNode = {
  id: 'rowe-contingency-root',
  type: 'argument',
  text: 'The Argument from Contingency of the Cosmos (Rowe)',
  children: [
    {
      id: 'rowe-conclusion',
      type: 'conclusion',
      text: 'The cosmos is explained by a necessary, self-existent being — God',
      children: []
    },
    {
      id: 'rowe-p1',
      type: 'premise',
      text: 'Every contingent fact has an explanation',
      status: 'defended',
      children: [
        {
          id: 'rowe-p1-s1',
          type: 'support',
          text: 'The Principle of Sufficient Reason applies universally; science itself operates on the assumption that facts have explanations',
          sources: ['Rowe, The Cosmological Argument (1975)']
        },
        {
          id: 'rowe-p1-s2',
          type: 'support',
          text: 'Accepting brute contingency about the entire cosmos is more mysterious than positing a necessary being — denying that contingent facts have explanations undermines the rationality of all inquiry',
          sources: ['Pruss, The Principle of Sufficient Reason (2006)']
        },
        {
          id: 'rowe-p1-obj1',
          type: 'objection',
          text: 'The Brute Fact Reply: the cosmos simply exists as an unexplained brute fact; there is no reason to demand an explanation for the whole',
          children: [
            {
              id: 'rowe-p1-obj1-r1',
              type: 'response',
              text: 'Brute-fact acceptance for the whole cosmos is arbitrary: if the cosmos can be a brute fact, anything can be, and rational inquiry collapses — while science itself operates on the PSR',
              sources: ['Rowe, The Cosmological Argument (1975)']
            }
          ]
        }
      ]
    },
    {
      id: 'rowe-p2',
      type: 'premise',
      text: 'The cosmos as a whole — the totality of all contingent beings — is itself a contingent fact',
      status: 'defended',
      children: [
        {
          id: 'rowe-p2-s1',
          type: 'support',
          text: 'The cosmos is not a necessary being; it could have failed to exist or been different, and its existence is not self-explanatory',
          sources: ['Rowe, The Cosmological Argument (1975)']
        },
        {
          id: 'rowe-p2-s2',
          type: 'support',
          text: 'A collection of contingent things does not become necessary simply by being large or infinite — a sum of contingent IOU notes does not produce real money',
          sources: ['Craig & Moreland, The Blackwell Companion to Natural Theology (2009)']
        },
        {
          id: 'rowe-p2-obj1',
          type: 'objection',
          text: 'Composition Fallacy: each part of the cosmos has an explanation, so the whole does not need a separate one',
          children: [
            {
              id: 'rowe-p2-obj1-r1',
              type: 'response',
              text: 'This conflates explanations of the parts with explanation of the whole aggregate — a collection of IOU notes does not explain the money; the whole collection of contingent things is itself contingent and requires an external ground',
              sources: ['Pruss, The Principle of Sufficient Reason (2006)']
            }
          ]
        }
      ]
    },
    {
      id: 'rowe-p3',
      type: 'premise',
      text: 'The explanation of the cosmos cannot itself be contingent',
      status: 'defended',
      children: [
        {
          id: 'rowe-p3-s1',
          type: 'support',
          text: 'An infinite regress of contingencies explains nothing; each contingent member of the series requires its own explanation, and the series as a whole — being contingent — still demands an explanation outside itself',
          sources: ['Clarke, A Demonstration of the Being and Attributes of God (1705)']
        },
        {
          id: 'rowe-p3-s2',
          type: 'support',
          text: 'A chain of contingent dependencies cannot terminate in itself; it requires a ground that is not contingent',
          sources: ['Pruss & Gale, "A New Cosmological Argument" (1999)']
        },
        {
          id: 'rowe-p3-obj1',
          type: 'objection',
          text: 'Who created God? If everything requires an explanation, God requires one too',
          children: [
            {
              id: 'rowe-p3-obj1-r1',
              type: 'response',
              text: 'The argument specifically posits a necessary being — one whose non-existence is impossible and whose essence entails its existence; God is not "everything" but the terminus of the explanatory chain',
              sources: ['Craig, Reasonable Faith (2008)']
            }
          ]
        }
      ]
    }
  ]
};

export const hawkingPenroseSingularityTree: TreeNode = {
  id: 'hawking-penrose-singularity-root',
  type: 'argument',
  text: 'The Argument from the Big Bang Singularity',
  children: [
    {
      id: 'hps-conclusion',
      type: 'conclusion',
      text: 'The universe has a timeless, non-spatial, immensely powerful cause — consistent with the classical description of God',
      children: []
    },
    {
      id: 'hps-p1',
      type: 'premise',
      text: 'The Hawking-Penrose singularity theorems demonstrate that the universe began at a space-time singularity — a boundary of space, time, matter, and energy',
      status: 'defended',
      children: [
        {
          id: 'hps-p1-s1',
          type: 'support',
          text: 'Under general relativity with realistic energy conditions, all past-directed timelike and null geodesics are incomplete — spacetime itself, not merely matter, reaches a boundary',
          sources: ['Hawking & Penrose, "The Singularities of Gravitational Collapse" (1970)']
        },
        {
          id: 'hps-p1-s2',
          type: 'support',
          text: 'The Borde-Guth-Vilenkin theorem (2003) strengthens this: any spacetime with average positive Hubble expansion must be geodesically incomplete in the past, regardless of quantum corrections at the Planck era',
          sources: ['Borde, Guth & Vilenkin, "Inflationary Spacetimes Are Incomplete" (2003)']
        },
        {
          id: 'hps-p1-obj1',
          type: 'objection',
          text: "Hawking's no-boundary proposal and quantum cosmologies may avoid a hard singularity",
          children: [
            {
              id: 'hps-p1-obj1-r1',
              type: 'response',
              text: 'Even the no-boundary model posits a finite quantum past; the BGV theorem applies regardless of quantum effects at the Planck era, operating at the classical spacetime level',
              sources: ['Borde, Guth & Vilenkin (2003)', 'Vilenkin, Many Worlds in One (2006)']
            }
          ]
        },
        {
          id: 'hps-p1-obj2',
          type: 'objection',
          text: 'An eternally inflating multiverse could push the beginning back indefinitely, making the BGV theorem inapplicable',
          children: [
            {
              id: 'hps-p1-obj2-r1',
              type: 'response',
              text: 'The BGV theorem explicitly applies to inflationary multiverse models: if the multiverse has average positive Hubble expansion, it must have an absolute beginning',
              sources: ['Borde, Guth & Vilenkin (2003)']
            }
          ]
        }
      ]
    },
    {
      id: 'hps-p2',
      type: 'premise',
      text: 'Whatever begins to exist has a cause outside and prior to itself; since space and time began at the singularity, that cause must be timeless and non-spatial',
      status: 'defended',
      children: [
        {
          id: 'hps-p2-s1',
          type: 'support',
          text: 'If no space, time, or matter existed before the singularity, whatever caused the universe must transcend all of these — it cannot itself be physical',
          sources: ['Craig, "The Caused Beginning of the Universe" (1993)']
        },
        {
          id: 'hps-p2-s2',
          type: 'support',
          text: 'A timeless, non-spatial, immensely powerful cause matches precisely what theologians have always meant by God',
          sources: ['Craig, Reasonable Faith (2008)']
        },
        {
          id: 'hps-p2-obj1',
          type: 'objection',
          text: '"Cause" is a category error before time — causation requires temporal priority, and if time began, there can be no "before"',
          children: [
            {
              id: 'hps-p2-obj1-r1',
              type: 'response',
              text: '"Cause" can be understood as ontological dependence rather than temporal precedence; a timeless being can be the sufficient ground of a temporal effect without itself being in time',
              sources: ['Craig, Reasonable Faith (2008)']
            }
          ]
        }
      ]
    }
  ]
};

export const clarkeFirstCauseTree: TreeNode = {
  id: 'clarke-first-cause-root',
  type: 'argument',
  text: "Clarke's Argument from First Cause",
  children: [
    {
      id: 'clarke-conclusion',
      type: 'conclusion',
      text: 'There exists at least one necessarily existent being that sustains all contingent existence — this being is God',
      children: []
    },
    {
      id: 'clarke-p1',
      type: 'premise',
      text: 'Something exists now; therefore something has always existed',
      status: 'granted',
      children: [
        {
          id: 'clarke-p1-s1',
          type: 'support',
          text: 'If there were ever absolutely nothing, there would still be nothing now — since something presently exists, something must have always existed',
          sources: ['Clarke, A Demonstration of the Being and Attributes of God (1705)']
        },
        {
          id: 'clarke-p1-s2',
          type: 'support',
          text: 'This rests on ex nihilo nihil fit, among the most secure metaphysical principles there is',
          sources: ['Clarke, A Demonstration of the Being and Attributes of God (1705)']
        }
      ]
    },
    {
      id: 'clarke-p2',
      type: 'premise',
      text: 'Whatever exists either exists necessarily (cannot not exist) or contingently (could not exist)',
      status: 'defended',
      children: [
        {
          id: 'clarke-p2-s1',
          type: 'support',
          text: 'This is a logical dichotomy: a thing either exists by the necessity of its own nature or exists dependently on something else',
          sources: ['Clarke, A Demonstration of the Being and Attributes of God (1705)']
        },
        {
          id: 'clarke-p2-s2',
          type: 'support',
          text: 'Contingent beings can fail to exist; necessary beings cannot — the question is which type ultimately grounds the existence of contingent things',
          sources: ['Leftow, God and Necessity (2012)']
        },
        {
          id: 'clarke-p2-obj1',
          type: 'objection',
          text: 'The universe itself could be the necessary being',
          children: [
            {
              id: 'clarke-p2-obj1-r1',
              type: 'response',
              text: 'Physical laws and constants appear to admit of alternatives — fine-tuning evidence shows the constants could have been different, but what exists necessarily cannot coherently be conceived as non-existent',
              sources: ['Leftow, God and Necessity (2012)']
            }
          ]
        },
        {
          id: 'clarke-p2-obj2',
          type: 'objection',
          text: "Clarke's argument establishes a necessary being but not a personal God",
          children: [
            {
              id: 'clarke-p2-obj2-r1',
              type: 'response',
              text: 'Clarke goes on to argue that a being of infinite power, knowledge, and self-sufficiency must also possess will and intelligence — a being of infinite perfection without personality would be less than the greatest conceivable',
              sources: ['Clarke, A Demonstration of the Being and Attributes of God (1705)']
            }
          ]
        }
      ]
    },
    {
      id: 'clarke-p3',
      type: 'premise',
      text: 'The chain of contingent beings cannot extend infinitely, for an infinite series of dependent beings has no ultimate sustaining ground',
      status: 'defended',
      children: [
        {
          id: 'clarke-p3-s1',
          type: 'support',
          text: "Clarke's point is ontological, not temporal: even an infinite series of contingent items collectively fails to explain why anything at all exists",
          sources: ['Clarke, A Demonstration of the Being and Attributes of God (1705)']
        },
        {
          id: 'clarke-p3-s2',
          type: 'support',
          text: 'None of the series\'s members can confer necessary existence on the whole; an infinite chain of dependent things is still a chain of dependent things',
          sources: ['Rowe, The Cosmological Argument (1975)']
        },
        {
          id: 'clarke-p3-obj1',
          type: 'objection',
          text: 'Hume argued that a beginningless series of contingent causes is logically possible and requires no external explanation',
          children: [
            {
              id: 'clarke-p3-obj1-r1',
              type: 'response',
              text: "Clarke's point is not temporal but ontological: even an infinite series of contingent items collectively fails to explain why anything at all exists rather than nothing — the whole series is still contingent",
              sources: ['Clarke, A Demonstration of the Being and Attributes of God (1705)']
            }
          ]
        }
      ]
    }
  ]
};

export const prussPsrTree: TreeNode = {
  id: 'pruss-psr-root',
  type: 'argument',
  text: "Pruss's Modern Principle of Sufficient Reason Argument",
  children: [
    {
      id: 'pruss-conclusion',
      type: 'conclusion',
      text: 'The explanation of the contingent world involves a free, necessary being whose free choices explain why the contingent world is as it is — this is God',
      children: []
    },
    {
      id: 'pruss-p1',
      type: 'premise',
      text: 'The weak PSR: for every contingent truth, there is an explanation, even if we do not know it',
      status: 'defended',
      children: [
        {
          id: 'pruss-p1-s1',
          type: 'support',
          text: 'The weak PSR does not require that we can find explanations, only that they exist — this underlies all scientific inquiry, which assumes phenomena have explanations',
          sources: ['Pruss, The Principle of Sufficient Reason (2006)']
        },
        {
          id: 'pruss-p1-s2',
          type: 'support',
          text: 'Denying it leads to radical scepticism about explanation generally, and the weak form specifically avoids the modal collapse objection while still generating the argument',
          sources: ['Pruss & Gale, "A New Cosmological Argument" (1999)']
        },
        {
          id: 'pruss-p1-obj1',
          type: 'objection',
          text: 'The PSR is itself unjustified — why accept it?',
          children: [
            {
              id: 'pruss-p1-obj1-r1',
              type: 'response',
              text: 'The weak PSR merely requires that explanations exist, not that we can always find them; denying it leads to radical scepticism, and it is a presupposition of all scientific and philosophical inquiry — those who deny it in argument rely on it in practice',
              sources: ['Koons, "A New Look at the Cosmological Argument" (1997)']
            }
          ]
        }
      ]
    },
    {
      id: 'pruss-p2',
      type: 'premise',
      text: 'The conjunction of all contingent truths is itself a contingent truth and requires an explanation',
      status: 'defended',
      children: [
        {
          id: 'pruss-p2-s1',
          type: 'support',
          text: 'If every contingent truth has an explanation, the Big Conjunctive Contingent Fact (BCCF) — the conjunction of all contingent truths — has one too; that explanation cannot be another contingent truth, since it would simply enlarge the BCCF',
          sources: ['Pruss, The Principle of Sufficient Reason (2006)']
        },
        {
          id: 'pruss-p2-s2',
          type: 'support',
          text: 'Nor can a purely necessary truth explain it alone, since necessary truths only entail further necessary truths, never contingent ones — so the explanation must involve a free act of a necessary being',
          sources: ['Pruss, The Principle of Sufficient Reason (2006)']
        },
        {
          id: 'pruss-p2-obj1',
          type: 'objection',
          text: 'Modal Collapse: if a necessary being necessarily explains all contingent truths, those truths become necessary, collapsing modal distinctions',
          children: [
            {
              id: 'pruss-p2-obj1-r1',
              type: 'response',
              text: 'Pruss distinguishes between a necessary being and necessary explanations — the being can freely choose among possible worlds, so the necessity of the explainer does not transfer to what is explained',
              sources: ['Pruss, The Principle of Sufficient Reason (2006)']
            }
          ]
        },
        {
          id: 'pruss-p2-obj2',
          type: 'objection',
          text: 'Some facts, like mathematical truths, may be self-explanatory — why not physical facts too?',
          children: [
            {
              id: 'pruss-p2-obj2-r1',
              type: 'response',
              text: 'Self-explanation applies only to necessary truths; contingent physical facts — things that could have been otherwise — cannot explain themselves, and their contingency is evidenced by fine-tuning data showing the constants could have been different',
              sources: ['Pruss, The Principle of Sufficient Reason (2006)']
            }
          ]
        }
      ]
    }
  ]
};

export const cosmologicalTrees: Record<string, TreeNode> = {
  kalam: kalamTree,
  leibniz: leibnizTree,
  thomistic: thomisticTree,
  'rowe-contingency': roweContingencyTree,
  'hawking-penrose-singularity': hawkingPenroseSingularityTree,
  'clarke-first-cause': clarkeFirstCauseTree,
  'pruss-psr': prussPsrTree,
};
