import { TreeNode } from '../arguments/types';

export const objectiveMoralValuesTree: TreeNode = {
  id: 'objective-moral-values-root',
  type: 'argument',
  text: 'The Moral Argument',
  children: [
    {
      id: 'objective-moral-values-conclusion',
      type: 'conclusion',
      text: 'Therefore, God exists',
      children: []
    },
    {
      id: 'objective-moral-values-p1',
      type: 'premise',
      text: 'If God does not exist, objective moral values and duties do not exist',
      status: 'defended',
      children: [
        {
          id: 'objective-moral-values-p1-s1',
          type: 'support',
          text: 'Without a transcendent moral lawgiver, atheistic naturalism reduces human beings to the accidental products of evolution in a vast, indifferent universe — moral feelings evolved for survival value, not truth-tracking',
          sources: ['Craig, Reasonable Faith (2008)']
        },
        {
          id: 'objective-moral-values-p1-s2',
          type: 'support',
          text: 'Absent God, morality reduces to subjective preference, social convention, or evolutionary instinct — none of which supply objective, binding moral obligations; as Dostoevsky observed, "If God does not exist, everything is permitted"',
          sources: ['Craig, Reasonable Faith (2008)', 'Lewis, Mere Christianity (1952)']
        },
        {
          id: 'objective-moral-values-p1-obj1',
          type: 'objection',
          text: 'The Euthyphro Dilemma: is something good because God commands it (making morality arbitrary), or does God command it because it is good (making goodness independent of God)?',
          children: [
            {
              id: 'objective-moral-values-p1-obj1-r1',
              type: 'response',
              text: "False dilemma — God's own nature, not arbitrary fiat or an external standard, is the standard of goodness; God is essentially loving, just, and faithful, and His commands necessarily flow from His unchanging character",
              sources: ['Craig, Reasonable Faith (2008)', 'Adams, Finite and Infinite Goods (1999)']
            }
          ]
        }
      ]
    },
    {
      id: 'objective-moral-values-p2',
      type: 'premise',
      text: 'Objective moral values and duties do exist',
      status: 'defended',
      children: [
        {
          id: 'objective-moral-values-p2-s1',
          type: 'support',
          text: 'We apprehend objective moral truths with the same confidence as basic logical and mathematical truths — it is objectively wrong to torture an innocent child for fun, in every culture, at all times',
          sources: ['Lewis, Mere Christianity (1952)']
        },
        {
          id: 'objective-moral-values-p2-s2',
          type: 'support',
          text: 'Denying this yields absurd consequences: Holocaust deniers and moral relativists can be, and are, objectively wrong; absent a defeater, we are rationally justified trusting this pervasive moral experience',
          sources: ['Craig, "The Moral Argument" in Reasonable Faith (2008)']
        },
        {
          id: 'objective-moral-values-p2-obj1',
          type: 'objection',
          text: 'Moral feelings are the product of evolution — cooperation, altruism, and fairness conferred survival advantages on social species, without needing God',
          children: [
            {
              id: 'objective-moral-values-p2-obj1-r1',
              type: 'response',
              text: 'Evolutionary accounts explain why we have moral beliefs, not whether those beliefs are true — natural selection selects for survival-enhancing behavior, not truth-tracking beliefs',
              sources: ['Plantinga, Where the Conflict Really Lies (2011)']
            },
            {
              id: 'objective-moral-values-p2-obj1-r2',
              type: 'response',
              text: 'This "evolutionary debunking argument" actually undermines moral realism on atheism, not theism — if morality is just an evolved instinct, we have no reason to trust that it corresponds to objective reality',
              sources: ['Street, "A Darwinian Dilemma for Realist Theories of Value" (2006)']
            }
          ]
        }
      ]
    }
  ]
};

export const moralKnowledgePlantingaTree: TreeNode = {
  id: 'moral-knowledge-plantinga-root',
  type: 'argument',
  text: 'The Argument from Moral Knowledge (Plantinga)',
  children: [
    {
      id: 'moral-knowledge-plantinga-conclusion',
      type: 'conclusion',
      text: "Therefore theism — which grounds moral facts in God's nature and designs moral faculties to track them — best explains moral knowledge",
      children: []
    },
    {
      id: 'moral-knowledge-plantinga-p1',
      type: 'premise',
      text: 'We have genuine moral knowledge — we know that torturing children for amusement is wrong, that the Holocaust was evil, etc.',
      status: 'granted',
      children: [
        {
          id: 'moral-knowledge-plantinga-p1-s1',
          type: 'support',
          text: 'Moral knowledge is as certain as any knowledge we possess — the wrongness of gratuitous cruelty, genocide, and betrayal are paradigm examples of things we know; to deny them is not scepticism but absurdity',
          sources: ['Plantinga, Where the Conflict Really Lies (2011)']
        },
        {
          id: 'moral-knowledge-plantinga-p1-s2',
          type: 'support',
          text: 'Our moral experience presents moral facts with the same evidential force that perception presents physical facts',
          sources: ['Huemer, Ethical Intuitionism (2005)']
        }
      ]
    },
    {
      id: 'moral-knowledge-plantinga-p2',
      type: 'premise',
      text: 'On naturalism, our moral faculties cannot reliably track objective moral truth',
      status: 'defended',
      children: [
        {
          id: 'moral-knowledge-plantinga-p2-s1',
          type: 'support',
          text: 'Natural selection shapes faculties for survival, not truth — on evolutionary naturalism, moral intuitions are adaptations that track what promoted reproduction in ancestral environments, not objective moral reality',
          sources: ['Plantinga, Where the Conflict Really Lies (2011)']
        },
        {
          id: 'moral-knowledge-plantinga-p2-s2',
          type: 'support',
          text: "Street's Darwinian dilemma: either moral beliefs were selected for adaptive reasons (unlikely to track moral truth) or for truth-tracking (which naturalism cannot explain why selection would produce)",
          sources: ['Street, "A Darwinian Dilemma for Realist Theories of Value" (2006)']
        },
        {
          id: 'moral-knowledge-plantinga-p2-obj1',
          type: 'objection',
          text: 'Cornell Realism: moral properties are natural properties, so naturalistic moral knowledge is possible without God',
          children: [
            {
              id: 'moral-knowledge-plantinga-p2-obj1-r1',
              type: 'response',
              text: 'Cornell realists struggle to explain why natural properties like "promotes flourishing" are intrinsically normative — the is-ought gap remains, and identifying moral properties with natural ones does not explain why those properties are binding',
              sources: ['Plantinga, Where the Conflict Really Lies (2011)']
            }
          ]
        },
        {
          id: 'moral-knowledge-plantinga-p2-obj2',
          type: 'objection',
          text: 'If God designs moral faculties to track truth, why have religious believers committed great moral evils throughout history?',
          children: [
            {
              id: 'moral-knowledge-plantinga-p2-obj2-r1',
              type: 'response',
              text: 'The argument concerns the metaphysical grounding and general reliability of moral faculties, not the infallibility of religious practitioners — human sin and self-deception are consistent with, and even predicted by, theism',
              sources: ['Plantinga, Where the Conflict Really Lies (2011)']
            },
            {
              id: 'moral-knowledge-plantinga-p2-obj2-r2',
              type: 'response',
              text: 'The argument does not require moral infallibility, only that theism better explains how there is moral knowledge at all',
              sources: ['Plantinga, Where the Conflict Really Lies (2011)']
            }
          ]
        }
      ]
    }
  ]
};

export const humanDignityBudziszewskiTree: TreeNode = {
  id: 'human-dignity-budziszewski-root',
  type: 'argument',
  text: 'The Argument from Human Dignity',
  children: [
    {
      id: 'human-dignity-budziszewski-conclusion',
      type: 'conclusion',
      text: 'Theism — specifically the imago Dei: humans are made in the image of God — provides a non-arbitrary, objective ground for irreducible human dignity',
      children: []
    },
    {
      id: 'human-dignity-budziszewski-p1',
      type: 'premise',
      text: 'Human beings possess an intrinsic, inalienable dignity — a worth that cannot be conferred or rescinded by others, not reducible to utility, capability, or social consensus',
      status: 'defended',
      children: [
        {
          id: 'human-dignity-budziszewski-p1-s1',
          type: 'support',
          text: 'The language of universal human rights — invoked to condemn slavery, genocide, torture — presupposes that every human being has worth independent of capacity, usefulness, or social standing',
          sources: ['Budziszewski, Written on the Heart (1997)', 'Wolterstorff, Justice: Rights and Wrongs (2008)']
        },
        {
          id: 'human-dignity-budziszewski-p1-s2',
          type: 'support',
          text: 'Infants, the severely disabled, and those in vegetative states are recognised as having rights even though they contribute nothing — this dignity is non-negotiable, not earned, and cannot be forfeited',
          sources: ['Budziszewski, Written on the Heart (1997)']
        },
        {
          id: 'human-dignity-budziszewski-p1-obj1',
          type: 'objection',
          text: 'Human rights are legal-political constructs with no metaphysical grounding needed',
          children: [
            {
              id: 'human-dignity-budziszewski-p1-obj1-r1',
              type: 'response',
              text: 'This collapses into might-makes-right: social constructs can be unmade, yet the force of human rights discourse — that some violations are wrong regardless of what any legal system says — requires that dignity is not merely constructed',
              sources: ['Wolterstorff, Justice: Rights and Wrongs (2008)']
            },
            {
              id: 'human-dignity-budziszewski-p1-obj1-r2',
              type: 'response',
              text: 'Wolterstorff argues the abolitionist and civil rights movements appealed to rights that transcended the legal order of their day, not rights the legal order itself had constructed',
              sources: ['Wolterstorff, Justice: Rights and Wrongs (2008)']
            }
          ]
        }
      ]
    },
    {
      id: 'human-dignity-budziszewski-p2',
      type: 'premise',
      text: 'On naturalism, persons are recombinations of matter subject to evolutionary pressures; there is no metaphysical basis for inalienable worth not grounded in function or agreement',
      status: 'defended',
      children: [
        {
          id: 'human-dignity-budziszewski-p2-s1',
          type: 'support',
          text: 'On naturalism, human worth is grounded either in capacities (rationality, sentience) — which excludes the severely cognitively disabled, infants, and the unborn — or in social consensus, which can be unmade',
          sources: ['Budziszewski, Written on the Heart (1997)', 'Meilaender, Neither Beast Nor God (2009)']
        },
        {
          id: 'human-dignity-budziszewski-p2-s2',
          type: 'support',
          text: "Neither option provides the inalienable, non-negotiable dignity that human rights discourse requires; the Nazi regime's treatment of Jews and the disabled was consistent with naturalistic value theory",
          sources: ['Budziszewski, Written on the Heart (1997)']
        },
        {
          id: 'human-dignity-budziszewski-p2-obj1',
          type: 'objection',
          text: 'Dignity can be grounded in rational agency or sentience without appeal to God',
          children: [
            {
              id: 'human-dignity-budziszewski-p2-obj1-r1',
              type: 'response',
              text: 'Grounding dignity in rationality or sentience makes it contingent on cognitive capacity, excluding infants, the severely disabled, and the unborn from full moral status — the imago Dei grounds dignity in a relation to God that is not ability-dependent',
              sources: ['Budziszewski, Written on the Heart (1997)', 'Wolterstorff, Justice: Rights and Wrongs (2008)']
            },
            {
              id: 'human-dignity-budziszewski-p2-obj1-r2',
              type: 'response',
              text: 'Secular humanism borrows the concept of inherent human worth from the theistic tradition without the metaphysical framework needed to sustain it',
              sources: ['Wolterstorff, Justice: Rights and Wrongs (2008)']
            }
          ]
        }
      ]
    }
  ]
};

export const moralProgressTree: TreeNode = {
  id: 'moral-progress-root',
  type: 'argument',
  text: 'The Argument from Moral Progress',
  children: [
    {
      id: 'moral-progress-conclusion',
      type: 'conclusion',
      text: 'Genuine moral progress is only coherent if there is an objective moral order — a standard independent of human preference — which theism supplies',
      children: []
    },
    {
      id: 'moral-progress-p1',
      type: 'premise',
      text: 'History exhibits genuine moral progress: abolition of slavery, expansion of rights, recognition of the wrongness of practices once widely accepted',
      status: 'defended',
      children: [
        {
          id: 'moral-progress-p1-s1',
          type: 'support',
          text: "Virtually everyone — including secular progressives — speaks of moral progress as real: the abolition of chattel slavery, the recognition of women's rights, and the condemnation of torture as a judicial tool are improvements, not merely changes",
          sources: ['Lewis, Mere Christianity (1952)']
        },
        {
          id: 'moral-progress-p1-s2',
          type: 'support',
          text: 'The reformers who drove these changes — abolitionists, suffragists, civil rights activists — believed they were appealing to truths that transcended current consensus, not merely expressing preferences',
          sources: ['Wolterstorff, Justice: Rights and Wrongs (2008)']
        },
        {
          id: 'moral-progress-p1-obj1',
          type: 'objection',
          text: 'Enlightenment rationalism, not theism, produced abolitionism and rights movements',
          children: [
            {
              id: 'moral-progress-p1-obj1-r1',
              type: 'response',
              text: 'Many abolitionists — Wilberforce, Clarkson, the Quakers — were explicitly motivated by theological conviction, not secular rationalism alone',
              sources: ['Wolterstorff, Justice: Rights and Wrongs (2008)']
            },
            {
              id: 'moral-progress-p1-obj1-r2',
              type: 'response',
              text: 'The grounding question is separate from the historical question: theism supplies the metaphysical basis — that all humans bear the image of God — that secular reason borrowed without justifying',
              sources: ['Wolterstorff, Justice: Rights and Wrongs (2008)']
            }
          ]
        }
      ]
    },
    {
      id: 'moral-progress-p2',
      type: 'premise',
      text: '"Progress" implies a fixed moral standard against which change is measured; on relativism or evolutionary ethics, there is no such standard',
      status: 'defended',
      children: [
        {
          id: 'moral-progress-p2-s1',
          type: 'support',
          text: 'On relativism, "progress" can only mean "change in the direction our culture currently prefers" — a covertly self-congratulatory redefinition, not a discovery of genuine improvement',
          sources: ['Lewis, Mere Christianity (1952)']
        },
        {
          id: 'moral-progress-p2-s2',
          type: 'support',
          text: 'The abolitionist was not right because the consensus eventually agreed with him; he was right because slavery was always wrong — explaining reformers who challenge the consensus requires a standard outside the consensus itself',
          sources: ['Lewis, Mere Christianity (1952)']
        },
        {
          id: 'moral-progress-p2-obj1',
          type: 'objection',
          text: 'Moral progress means wider social agreement over time, not movement toward objective truth',
          children: [
            {
              id: 'moral-progress-p2-obj1-r1',
              type: 'response',
              text: 'This cannot explain why abolitionists who challenged the consensus were right and the majority was wrong — reformers appeal to something beyond current consensus, which only makes sense if there is a moral reality to appeal to',
              sources: ['Lewis, Mere Christianity (1952)']
            },
            {
              id: 'moral-progress-p2-obj1-r2',
              type: 'response',
              text: 'On consensus theory, Wilberforce was not right — he was merely ahead of the majority — yet virtually no one, including secularists, actually judges him that way',
              sources: ['Lewis, Mere Christianity (1952)']
            }
          ]
        }
      ]
    }
  ]
};

export const nagelMindCosmosTree: TreeNode = {
  id: 'nagel-mind-cosmos-root',
  type: 'argument',
  text: "Nagel's Mind and Cosmos Challenge to Naturalist Moral Realism",
  children: [
    {
      id: 'nagel-mind-cosmos-conclusion',
      type: 'conclusion',
      text: 'If nature must be "value-friendly" at its base, a personal God who is the source of value is the most developed available account',
      children: []
    },
    {
      id: 'nagel-mind-cosmos-p1',
      type: 'premise',
      text: 'Moral realism — the view that some things really are right or wrong — is nearly impossible to avoid; we cannot consistently act as if all values are illusory',
      status: 'granted',
      children: [
        {
          id: 'nagel-mind-cosmos-p1-s1',
          type: 'support',
          text: 'Even those who profess moral scepticism cannot consistently act on it — they resist injustice, demand reasons, and condemn cruelty as more than mere preference',
          sources: ['Nagel, Mind and Cosmos (2012)']
        },
        {
          id: 'nagel-mind-cosmos-p1-s2',
          type: 'support',
          text: 'The practical unavoidability of moral realism is a data point that any adequate philosophy must accommodate, whatever one professes in theory',
          sources: ['Nagel, The Last Word (1997)']
        }
      ]
    },
    {
      id: 'nagel-mind-cosmos-p2',
      type: 'premise',
      text: 'Moral realism is deeply problematic for naturalism: natural selection selects for adaptive behavior, not true moral beliefs; the naturalist picture is fundamentally incomplete',
      status: 'defended',
      children: [
        {
          id: 'nagel-mind-cosmos-p2-s1',
          type: 'support',
          text: 'If our moral beliefs were shaped by evolution for reproductive fitness, there is no reason to think they track objective moral truth rather than merely favoring cooperation and reciprocity among social primates',
          sources: ['Nagel, Mind and Cosmos (2012)']
        },
        {
          id: 'nagel-mind-cosmos-p2-s2',
          type: 'support',
          text: 'Nagel concludes the universe must contain, at its very foundation, the grounds for value and normativity — not merely particles and forces; he proposes "natural teleology" as an alternative but acknowledges it remains speculative and underdeveloped',
          sources: ['Nagel, Mind and Cosmos (2012)']
        },
        {
          id: 'nagel-mind-cosmos-p2-obj1',
          type: 'objection',
          text: 'Nagel explicitly rejects theism; using his argument apologetically misrepresents his own position',
          children: [
            {
              id: 'nagel-mind-cosmos-p2-obj1-r1',
              type: 'response',
              text: "The apologetic use acknowledges Nagel's own position while noting that his critique of naturalism, if sound, removes the primary alternative to theism — his intellectual honesty about the problem is the point, not his personal theological conclusion",
              sources: ['Nagel, Mind and Cosmos (2012)']
            },
            {
              id: 'nagel-mind-cosmos-p2-obj1-r2',
              type: 'response',
              text: "Even a reluctant witness's testimony can establish facts he himself declines to draw the further conclusion from",
              sources: ['Nagel, Mind and Cosmos (2012)']
            }
          ]
        },
        {
          id: 'nagel-mind-cosmos-p2-obj2',
          type: 'objection',
          text: 'Nagel proposes teleological naturalism — value is built into the structure of the universe without a personal God',
          children: [
            {
              id: 'nagel-mind-cosmos-p2-obj2-r1',
              type: 'response',
              text: 'Nagel\'s teleological naturalism is underdeveloped and controversial by his own admission; what makes values "built in" to nature still requires explanation',
              sources: ['Nagel, Mind and Cosmos (2012)']
            },
            {
              id: 'nagel-mind-cosmos-p2-obj2-r2',
              type: 'response',
              text: 'The most natural candidate for a universe with built-in values and goals is a person — i.e., God; a universe with values at its foundation but no mind behind it is philosophically more puzzling than theism',
              sources: ['Plantinga, Where the Conflict Really Lies (2011)']
            }
          ]
        }
      ]
    }
  ]
};

export const moralTrees: Record<string, TreeNode> = {
  'objective-moral-values': objectiveMoralValuesTree,
  'moral-knowledge-plantinga': moralKnowledgePlantingaTree,
  'human-dignity-budziszewski': humanDignityBudziszewskiTree,
  'moral-progress': moralProgressTree,
  'nagel-mind-cosmos': nagelMindCosmosTree,
};
