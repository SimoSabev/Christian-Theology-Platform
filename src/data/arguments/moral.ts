import { Argument } from './types';

export const moralArguments: Argument[] = [
  {
    id: 'moral-knowledge-plantinga',
    slug: 'moral-knowledge-plantinga',
    name: 'The Argument from Moral Knowledge (Plantinga)',
    category: 'moral',
    shortDescription: 'We have genuine moral knowledge; naturalism cannot account for how our faculties reliably track objective moral truth; theism provides the best explanation.',
    historicalBackground: `Alvin Plantinga developed the argument from moral knowledge as part of his broader case in Where the Conflict Really Lies (2011). Building on his Evolutionary Argument Against Naturalism and his reformed epistemology, Plantinga argues that on naturalism, our moral faculties were shaped by natural selection for survival, not moral truth-tracking. Theism, by contrast, posits moral faculties designed by God to reliably perceive moral reality.`,
    premises: [
      {
        id: 'mk-p1',
        text: 'We have genuine moral knowledge — we know that torturing children for amusement is wrong, that the Holocaust was evil, etc.',
        defense: 'Moral knowledge is as certain as any knowledge we possess. The wrongness of gratuitous cruelty, genocide, and betrayal are paradigm examples of things we know. To deny them is not scepticism but absurdity. Our moral experience presents moral facts with the same force that perception presents physical facts.',
        sources: ['Plantinga, Where the Conflict Really Lies (2011)', 'Huemer, Ethical Intuitionism (2005)']
      },
      {
        id: 'mk-p2',
        text: 'On naturalism, our moral faculties cannot reliably track objective moral truth.',
        defense: 'Natural selection shapes faculties for survival, not truth. On evolutionary naturalism, our moral intuitions are adaptations — they track what promoted reproduction in ancestral environments, not objective moral reality. Street\'s "Darwinian dilemma" shows that either our moral beliefs were selected for adaptive reasons (in which case they likely do not track moral truth) or they were selected for truth-tracking (in which case naturalism must explain why selection would produce truth-tracking moral cognition, which it cannot).',
        sources: ['Plantinga, Where the Conflict Really Lies (2011)', 'Street, "A Darwinian Dilemma for Realist Theories of Value" (2006)']
      }
    ],
    conclusion: 'Therefore theism — which grounds moral facts in God\'s nature and designs moral faculties to track them — best explains moral knowledge.',
    proponents: [
      { name: 'Alvin Plantinga', era: 'Contemporary' },
      { name: 'C. Stephen Evans', era: 'Contemporary' },
      { name: 'Michael Huemer', era: 'Contemporary' },
    ],
    objections: [
      {
        id: 'mk-obj1',
        title: 'Cornell Realism',
        description: 'Moral properties are natural properties; we can have naturalistic moral knowledge.',
        response: 'Cornell realists have difficulty explaining why natural properties (like "promotes flourishing") are intrinsically normative — the is-ought gap remains. Normativity appears irreducible to natural description. The identification of moral properties with natural ones does not explain why those natural properties are binding.',
        sources: ['Plantinga, Where the Conflict Really Lies (2011)']
      },
      {
        id: 'mk-obj2',
        title: 'Religious believers have committed moral atrocities',
        description: 'If God designs moral faculties, why have religious believers committed great moral evils?',
        response: 'The argument is about the metaphysical grounding and general reliability of moral faculties, not the infallibility of religious practitioners. Human sin and self-deception are consistent with theism and are predicted by it. The argument does not require moral infallibility but only that theism better explains how there is moral knowledge at all.',
        sources: ['Plantinga, Where the Conflict Really Lies (2011)']
      }
    ],
    significance: 'Plantinga\'s argument turns the evolutionary objection to religion back on naturalism: if evolution shapes all our faculties, it undermines the reliability of moral beliefs on atheistic naturalism. It is part of the broader Evolutionary Argument Against Naturalism that generates a dilemma for the naturalist.',
    relatedArguments: ['moral-argument', 'nagel-mind-cosmos'],
    keySources: [
      'Alvin Plantinga, Where the Conflict Really Lies (Oxford University Press, 2011)',
      'C. Stephen Evans, God and Moral Obligation (Oxford University Press, 2013)',
      'Michael Huemer, Ethical Intuitionism (Palgrave Macmillan, 2005)',
    ],
    body: `The Moral Argument for the existence of God is among the most personally compelling of all theistic arguments, because it confronts every human being with something undeniable: we make moral judgments. We say that gratuitous cruelty is wrong, that the Holocaust was evil, that heroic self-sacrifice is genuinely admirable — and we do not mean merely that we personally dislike these things or that our culture happens to disapprove of them. We mean they are really, objectively wrong or right, independent of what anyone happens to think.

The Argument from Moral Knowledge, as developed by Alvin Plantinga, C.S. Lewis, and many others, draws out the implications of this universal human experience. If moral truths are objective — if they hold regardless of cultural convention or personal preference — then they require a grounding explanation. What in the nature of reality could make moral propositions objectively true?

Naturalism, the worldview that posits only physical reality governed by natural laws, faces a severe challenge here. On naturalism, human beings are the products of undirected evolutionary processes that selected for survival and reproduction, not for moral truth-tracking. As Plantinga argues in his Evolutionary Argument Against Naturalism, if evolution shaped all our cognitive faculties, we have no guarantee that those faculties track truth — including moral truth — rather than merely producing survival-enhancing behavior. A behavior might be adaptive without being morally correct, and morally correct without being adaptive. On naturalism, there is no principled reason to trust that our moral faculties are reliable guides to genuine moral reality.

Theism, by contrast, provides a coherent explanation. If God exists as the perfect, maximally good being — as classical theism affirms — then moral truths are grounded in His nature. God's nature is the standard of goodness: not arbitrary commands, but the eternal character of a perfectly good being. Human moral knowledge is possible because God created human beings in His image (imago Dei), with faculties that are designed to apprehend moral reality — not perfectly, due to the noetic effects of sin, but genuinely. C.S. Lewis put the point vividly in Mere Christianity: the existence of the Moral Law — experienced universally as an obligation from without rather than a preference from within — is best explained by a Moral Lawgiver who transcends humanity.

The deeper metaphysical form of the Moral Argument, developed by William Lane Craig after G.E. Moore and Robert Adams, focuses not merely on knowledge but on ontological grounding: if objective moral facts exist, they require a metaphysical foundation. Numbers and mathematical truths are commonly taken to exist necessarily, as abstract objects. But moral facts are prescriptive — they tell us how we ought to behave — and abstract objects have no causal power. The prescription of the Moral Law demands a personal prescriber. A moral law without a moral lawgiver is a conceptual orphan: a binding obligation with no one to bind it, a command with no commander.

The objection that God could command evil — the Euthyphro dilemma — is answered by the recognition that the good is not determined by God's arbitrary will but by God's unchanging nature. God commands what He commands because it reflects His essential character: He is necessarily good, not by external constraint but by internal nature. This is analogous to asking whether a perfectly rational being could believe a logical contradiction: the question answers itself.

The Argument from Human Dignity adds a complementary dimension. If humans are merely biological organisms produced by undirected processes, then statements like "all persons have inherent dignity" are at best useful fictions. Yet we cannot consistently deny this dignity: we recognize it in our moral outrage at oppression, slavery, and dehumanization. The Christian account — that every human being is made in the image of God (Genesis 1:27), has intrinsic worth derived from their Creator — provides the metaphysical foundation for human dignity that naturalism cannot supply.

Taken together, the moral arguments do not merely suggest theism as a possible explanation; they present it as the best explanation — perhaps the only coherent explanation — for the objectivity, universality, and prescriptive force of morality that every human being experiences as a brute given of conscious life.`,
    churchFatherQuotes: [
      {
        author: 'Augustine of Hippo',
        work: 'Confessions, Book III, Ch. 7',
        quote: 'For it is one thing not to know, another to refuse to know: for the will is concerned with the former, the understanding with the latter. For when men say that God is not just, and that God is not good, they are using a standard of justice and goodness above God — but whence comes this standard, if not from God Himself?',
      },
      {
        author: 'Thomas Aquinas',
        work: 'Summa Theologiae, I-II, Question 91, Article 2',
        quote: 'The rational creature is subject to Divine providence in the most excellent way, in so far as it partakes of a share of providence, by being provident both for itself and for others. Wherefore it has a share of the Eternal Reason, whereby it has a natural inclination to its proper act and end: and this participation of the eternal law in the rational creature is called the natural law.',
      },
      {
        author: 'C.S. Lewis',
        work: 'Mere Christianity, Book I, Ch. 1',
        quote: 'These, then, are the two points I wanted to make. First, that human beings, all over the earth, have this curious idea that they ought to behave in a certain way, and cannot really get rid of it. Secondly, that they do not in fact behave in that way. They know the Law of Nature; they break it. These two facts are the foundation of all clear thinking about ourselves and the universe we live in.',
      },
    ],
    simpleObjections: [
      {
        title: 'Morality is just a social construct or evolutionary adaptation',
        rebuttal: 'If morality were merely a social construct, then the Holocaust would not be evil in any objective sense — just contrary to some cultures\' preferences. But virtually everyone recognizes this conclusion as monstrous. Social constructs and evolutionary adaptations can explain why we have moral feelings; they cannot explain why those feelings track genuine moral truth or why some actions are genuinely obligatory rather than merely culturally preferred. The universality of basic moral intuitions across cultures — the wrongness of murder, theft, betrayal — is better explained by a common moral reality than by independent cultural invention.',
      },
      {
        title: 'Objective morality exists without God — as abstract Platonic moral facts',
        rebuttal: 'Abstract Platonic moral facts, even if they existed, would be causally inert — they cannot explain why we have an obligation to follow them, or why they exist in the first place. Prescriptive moral facts — facts about what we ought to do — are not merely descriptive propositions but binding obligations. A binding obligation requires a binder: a personal moral authority. Furthermore, abstract moral facts floating free of any grounding agent are metaphysically unexplained brute facts, more mysterious than the theistic alternative.',
      },
      {
        title: 'God\'s commands are arbitrary — the Euthyphro dilemma',
        rebuttal: 'The Euthyphro dilemma presents a false dichotomy. Theists do not claim that God arbitrarily wills what is good (making morality arbitrary) or that God is subject to an external moral standard above Him (limiting His sovereignty). Instead, God\'s nature is the standard of goodness: He is essentially, necessarily good. His commands flow from His perfectly good character and are therefore neither arbitrary nor externally constrained. The good is what God is, not merely what He says.',
      },
    ],
    bibliography: [
      'Plantinga, Alvin. Where the Conflict Really Lies. Oxford University Press, 2011.',
      'Lewis, C.S. Mere Christianity. HarperCollins, 1952.',
      'Craig, William Lane. The Moral Argument. Paternoster, 2009.',
      'Adams, Robert Merrihew. Finite and Infinite Goods. Oxford University Press, 1999.',
      'Evans, C. Stephen. God and Moral Obligation. Oxford University Press, 2013.',
    ],
  },
  {
    id: 'human-dignity-budziszewski',
    slug: 'human-dignity-budziszewski',
    name: 'The Argument from Human Dignity',
    category: 'moral',
    shortDescription: 'The intrinsic, inalienable dignity of every human being — the foundation of human rights — requires an objective ground that naturalism cannot supply but the imago Dei provides.',
    historicalBackground: `J. Budziszewski (University of Texas) developed a natural law–based argument for human dignity in Written on the Heart (1997). The argument draws on the classical doctrine of the imago Dei (Genesis 1:26-27) and engages with contemporary rights theory. Nicholas Wolterstorff's Justice: Rights and Wrongs (2008) provides a complementary argument that universal human rights require a theistic foundation.`,
    premises: [
      {
        id: 'hd-p1',
        text: 'Human beings possess an intrinsic, inalienable dignity — a worth that cannot be conferred or rescinded by others, not reducible to utility, capability, or social consensus.',
        defense: 'The language of universal human rights — invoked to condemn slavery, genocide, torture — presupposes that every human being has worth independent of their capacities, usefulness, or social standing. Infants, the severely disabled, those in vegetative states — all are recognised as having rights even when they contribute nothing. This dignity is non-negotiable, not earned, and cannot be forfeited.',
        sources: ['Budziszewski, Written on the Heart (1997)', 'Wolterstorff, Justice: Rights and Wrongs (2008)']
      },
      {
        id: 'hd-p2',
        text: 'On naturalism, persons are recombinations of matter subject to evolutionary pressures; there is no metaphysical basis for inalienable worth not grounded in function or agreement.',
        defense: 'On naturalism, human worth is either grounded in capacities (rationality, sentience) — which excludes the severely cognitively disabled, infants, and the unborn — or in social consensus — which can be unmade. Neither provides the inalienable, non-negotiable dignity that human rights discourse requires. The Nazi regime\'s treatment of Jews and the disabled was consistent with naturalistic value theory.',
        sources: ['Budziszewski, Written on the Heart (1997)', 'Meilaender, Neither Beast Nor God (2009)']
      }
    ],
    conclusion: 'Theism — specifically the imago Dei: humans are made in the image of God — provides a non-arbitrary, objective ground for irreducible human dignity.',
    proponents: [
      { name: 'J. Budziszewski', era: 'Contemporary' },
      { name: 'Nicholas Wolterstorff', era: 'Contemporary' },
      { name: 'Francis Beckwith', era: 'Contemporary' },
    ],
    objections: [
      {
        id: 'hd-obj1',
        title: 'Secular humanism grounds dignity',
        description: 'Dignity can be grounded in rational agency or sentience without God.',
        response: 'Grounding dignity in rationality or sentience makes it contingent on cognitive capacity, excluding infants, the severely disabled, and the unborn from full moral status. The imago Dei grounds dignity in a relation to God that is not ability-dependent. Secular humanism borrows from the theistic tradition without the metaphysical framework to sustain it.',
        sources: ['Budziszewski, Written on the Heart (1997)', 'Wolterstorff, Justice: Rights and Wrongs (2008)']
      },
      {
        id: 'hd-obj2',
        title: 'Rights are social constructs',
        description: 'Human rights are legal-political constructs with no metaphysical grounding needed.',
        response: 'This collapses into might-makes-right: social constructs can be unmade. The force of human rights discourse — that some violations are wrong regardless of what any legal system says — requires that dignity is not merely constructed. Wolterstorff argues that the abolitionist and civil rights movements appealed to rights that transcended the legal order.',
        sources: ['Wolterstorff, Justice: Rights and Wrongs (2008)']
      }
    ],
    significance: 'The argument has contemporary urgency as debates about bioethics, abortion, euthanasia, and AI personhood all require some account of what confers human dignity. The imago Dei provides the only account that grounds dignity in a relation that cannot be taken away.',
    relatedArguments: ['moral-argument', 'moral-knowledge-plantinga'],
    keySources: [
      'J. Budziszewski, Written on the Heart: The Case for Natural Law (InterVarsity Press, 1997)',
      'Nicholas Wolterstorff, Justice: Rights and Wrongs (Princeton University Press, 2008)',
      'Gilbert Meilaender, Neither Beast Nor God (Encounter Books, 2009)',
    ]
  },
  {
    id: 'moral-progress',
    slug: 'moral-progress',
    name: 'The Argument from Moral Progress',
    category: 'moral',
    shortDescription: 'Genuine moral progress — the abolition of slavery, expansion of rights — presupposes a fixed moral standard against which change is measured; relativism and evolutionary ethics cannot supply that standard.',
    historicalBackground: `C.S. Lewis argued in Mere Christianity (1952) that our recognition of moral progress requires a transcendent standard. Nicholas Wolterstorff developed related arguments in Justice: Rights and Wrongs (2008). Steven Pinker's empirical data on declining violence (The Better Angels of Our Nature, 2011) is often cited by apologists as evidence of real moral progress, which then raises the question of what makes it progress.`,
    premises: [
      {
        id: 'mp-p1',
        text: 'History exhibits genuine moral progress: abolition of slavery, expansion of rights, recognition of the wrongness of practices once widely accepted.',
        defense: 'Virtually everyone — including secular progressives — speaks of moral progress as real. The abolition of chattel slavery, the recognition of women\'s rights, the condemnation of torture as a judicial tool: these are not merely changes but improvements. The people who drove these changes — abolitionists, suffragists, civil rights activists — believed they were appealing to truths that transcended current consensus.',
        sources: ['Lewis, Mere Christianity (1952)', 'Wolterstorff, Justice: Rights and Wrongs (2008)']
      },
      {
        id: 'mp-p2',
        text: '"Progress" implies a fixed moral standard against which change is measured; on relativism or evolutionary ethics, there is no such standard.',
        defense: 'On relativism, "progress" means only "change in the direction our culture currently prefers" — but that is not progress, it is just change. The abolitionist was not right because the consensus eventually agreed with him; he was right because slavery was always wrong. To make sense of reformers who challenged the consensus, we need a standard outside the consensus itself.',
        sources: ['Lewis, Mere Christianity (1952)']
      }
    ],
    conclusion: 'Genuine moral progress is only coherent if there is an objective moral order — a standard independent of human preference — which theism supplies.',
    proponents: [
      { name: 'C.S. Lewis', era: '20th century' },
      { name: 'Nicholas Wolterstorff', era: 'Contemporary' },
    ],
    objections: [
      {
        id: 'mp-obj1',
        title: 'Progress is just consensus expansion',
        description: 'Moral progress means wider social agreement, not movement toward objective truth.',
        response: 'This cannot explain why abolitionists who challenged the consensus were right and the majority wrong. Moral reformers appeal to something beyond current consensus, which only makes sense if there is a moral reality to appeal to. On consensus theory, Wilberforce was not right — he was merely ahead of the majority.',
        sources: ['Lewis, Mere Christianity (1952)']
      },
      {
        id: 'mp-obj2',
        title: 'Secular reason drove progress',
        description: 'Enlightenment rationalism, not theism, produced abolitionism and rights movements.',
        response: 'Many abolitionists (Wilberforce, Clarkson, the Quakers) were explicitly motivated by theological convictions. More importantly, the grounding question is separate from the historical question: theism provides the metaphysical basis — that all humans bear the image of God — that secular reason borrowed without justifying.',
        sources: ['Wolterstorff, Justice: Rights and Wrongs (2008)']
      }
    ],
    significance: 'The argument from moral progress is rhetorically powerful because it turns a progressive presupposition — that history is improving — into an argument for theism. The secularist who insists on moral progress is tacitly committed to a moral realism that naturalism cannot sustain.',
    relatedArguments: ['moral-argument', 'human-dignity-budziszewski'],
    keySources: [
      'C.S. Lewis, Mere Christianity (Geoffrey Bles, 1952)',
      'Nicholas Wolterstorff, Justice: Rights and Wrongs (Princeton University Press, 2008)',
      'Steven Pinker, The Better Angels of Our Nature (Viking, 2011)',
    ]
  },
  {
    id: 'nagel-mind-cosmos',
    slug: 'nagel-mind-cosmos',
    name: "Nagel's Mind and Cosmos Challenge to Naturalist Moral Realism",
    category: 'moral',
    shortDescription: 'Thomas Nagel — an atheist philosopher — argues that naturalism is fundamentally incomplete: the universe must contain at its foundation the grounds for value, rationality, and consciousness; theism is the most developed available answer.',
    historicalBackground: `Thomas Nagel published Mind and Cosmos: Why the Materialist Neo-Darwinian Conception of Nature Is Almost Certainly False (Oxford, 2012), creating a firestorm among secular philosophers. Nagel, himself an atheist who hopes naturalism can be saved, argues that consciousness, reason, and moral value cannot be explained by the neo-Darwinian materialist story. His critique clears the ground for theism even as he personally resists it.`,
    premises: [
      {
        id: 'nagel-p1',
        text: 'Moral realism — the view that some things really are right or wrong — is nearly impossible to avoid; we cannot consistently act as if all values are illusory.',
        defense: 'Nagel argues that the objective reality of value is something we cannot coherently deny in practice. Even those who profess moral scepticism cannot consistently act on it — they resist injustice, demand reasons, condemn cruelty. The practical unavoidability of moral realism is a data point that any adequate philosophy must accommodate.',
        sources: ['Nagel, Mind and Cosmos (2012)', 'Nagel, The Last Word (1997)']
      },
      {
        id: 'nagel-p2',
        text: 'Moral realism is deeply problematic for naturalism: natural selection selects for adaptive behavior, not true moral beliefs; the naturalist picture is fundamentally incomplete.',
        defense: 'If our moral beliefs were shaped by evolution for reproductive fitness, there is no reason to think they track objective moral truth. Nagel concludes that the universe must contain, at its foundation, the grounds for value and normativity — not merely particles and forces. He proposes teleological naturalism but acknowledges it is underdeveloped; theism is the most historically developed account of a value-containing universe.',
        sources: ['Nagel, Mind and Cosmos (2012)']
      }
    ],
    conclusion: 'If nature must be "value-friendly" at its base, a personal God who is the source of value is the most developed available account.',
    proponents: [
      { name: 'Thomas Nagel', era: 'Contemporary (secular framing)' },
      { name: 'Alvin Plantinga', era: 'Contemporary (parallel argument)' },
    ],
    objections: [
      {
        id: 'nagel-obj1',
        title: 'Nagel is not a theist',
        description: 'He explicitly rejects theism; using his argument apologetically misrepresents him.',
        response: 'The apologetic use acknowledges Nagel\'s own position while noting that his critique of naturalism, if sound, removes the primary alternative to theism. His intellectual honesty about the problem is the point, not his personal theological conclusion. Even a reluctant witness\'s testimony can establish facts.',
        sources: ['Nagel, Mind and Cosmos (2012)']
      },
      {
        id: 'nagel-obj2',
        title: 'Non-theistic teleology suffices',
        description: 'Nagel proposes teleological naturalism — value is built into the structure of the universe without a personal God.',
        response: 'Nagel\'s teleological naturalism is underdeveloped and controversial. What makes values "built in" requires explanation; the most natural candidate for a universe with built-in values and goals is a person — i.e., God. A universe that has values at its foundation but no mind behind it is philosophically more puzzling than theism.',
        sources: ['Nagel, Mind and Cosmos (2012)', 'Plantinga, Where the Conflict Really Lies (2011)']
      }
    ],
    significance: 'Nagel\'s argument is apologetically powerful precisely because of its source: a secular philosopher with no theistic ax to grind, whose intellectual honesty led him to acknowledge that materialism cannot account for consciousness, reason, and value. His book generated intense controversy among secular philosophers.',
    relatedArguments: ['moral-argument', 'moral-knowledge-plantinga'],
    keySources: [
      'Thomas Nagel, Mind and Cosmos (Oxford University Press, 2012)',
      'Thomas Nagel, The Last Word (Oxford University Press, 1997)',
      'Alvin Plantinga, Where the Conflict Really Lies (Oxford University Press, 2011)',
    ]
  },
  {
    id: 'moral-argument',
    slug: 'objective-moral-values',
    name: 'The Moral Argument',
    category: 'moral',
    shortDescription: 'If objective moral values exist, then God exists. Objective moral values do exist. Therefore, God exists.',
    historicalBackground: `The moral argument for God's existence has a long history. Immanuel Kant, while rejecting the theoretical proofs (cosmological, ontological, teleological), argued that God's existence was a necessary postulate of practical reason — morality requires God as its ultimate ground. C.S. Lewis popularized a version through "Mere Christianity" (1952). William Lane Craig has formulated the argument most rigorously in contemporary analytic philosophy.`,
    premises: [
      {
        id: 'moral-p1',
        text: 'If God does not exist, objective moral values and duties do not exist.',
        defense: 'Without God, moral values lack an objective ontological foundation. On atheistic naturalism, human beings are the accidental products of evolution on a tiny planet in a vast, indifferent universe. Moral feelings evolved for survival value, not truth-tracking. Without a transcendent moral lawgiver, "morality" reduces to subjective preference, social convention, or evolutionary instinct — none of which provide objective, binding moral obligations. As Dostoevsky observed: "If God does not exist, everything is permitted."',
        sources: ['Craig, Reasonable Faith (2008)', 'Lewis, Mere Christianity (1952)']
      },
      {
        id: 'moral-p2',
        text: 'Objective moral values and duties do exist.',
        defense: 'We apprehend objective moral truths with the same confidence that we apprehend basic logical and mathematical truths: it is objectively wrong to torture an innocent child for fun. This is not merely a cultural preference — it is true in every possible world, in every culture, at all times. Holocaust deniers and moral relativists can be — and are — objectively wrong. Our moral experience presents moral values as objective, and in the absence of a defeater, we are rationally justified in trusting this experience.',
        sources: ['Lewis, Mere Christianity (1952)', 'Craig, "The Moral Argument" in Reasonable Faith (2008)']
      }
    ],
    conclusion: 'Therefore, God exists.',
    proponents: [
      { name: 'Immanuel Kant', era: '18th century' },
      { name: 'C.S. Lewis', era: '20th century' },
      { name: 'William Lane Craig', era: 'Contemporary' },
    ],
    objections: [
      {
        id: 'moral-obj1',
        title: 'The Euthyphro Dilemma',
        description: 'Is something good because God commands it, or does God command it because it is good? If the former, morality is arbitrary (God could command murder). If the latter, goodness is independent of God, undermining the argument.',
        response: 'This is a false dilemma. The correct answer is a third option: God\'s commands are not arbitrary (horn 1) nor does He appeal to an external standard (horn 2). Rather, God\'s own nature IS the standard of goodness. God is essentially loving, just, faithful, and kind — and His commands necessarily flow from His nature. Morality is grounded in the character of God, not in arbitrary divine fiat.',
        sources: ['Craig, Reasonable Faith (2008)', 'Adams, Finite and Infinite Goods (1999)']
      },
      {
        id: 'moral-obj2',
        title: 'Evolution explains morality without God',
        description: 'Moral feelings are the product of evolution — cooperation, altruism, and fairness conferred survival advantages on social species.',
        response: 'Evolutionary accounts explain why we have moral beliefs, but not whether those beliefs are true. Evolution selects for survival-enhancing behavior, not truth-tracking beliefs. If morality is just an evolved instinct, then we have no reason to trust that our moral beliefs correspond to objective reality — they are just neurological states selected for reproductive fitness. This is the "evolutionary debunking argument," which actually undermines moral realism on atheism, not theism.',
        sources: ['Plantinga, Where the Conflict Really Lies (2011)', 'Street, "A Darwinian Dilemma for Realist Theories of Value" (2006)']
      }
    ],
    significance: 'The moral argument is powerful because it appeals to universal moral experience. Nearly everyone, in practice, lives as though objective moral values exist — even those who deny them in theory.',
    relatedArguments: ['fine-tuning', 'kalam'],
    keySources: [
      'C.S. Lewis, Mere Christianity (1952)',
      'William Lane Craig, Reasonable Faith, ch. 4 (2008)',
    ]
  }
];
