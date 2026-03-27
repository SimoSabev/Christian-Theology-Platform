import { Argument } from './types';

export const teleologicalArguments: Argument[] = [
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

export const moralArguments: Argument[] = [
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

export const historicalArguments: Argument[] = [
  {
    id: 'minimal-facts',
    slug: 'minimal-facts',
    name: 'The Minimal Facts Argument for the Resurrection',
    category: 'historical',
    shortDescription: 'Using only facts accepted by the vast majority of scholars (including skeptics), the bodily resurrection of Jesus emerges as the best explanation.',
    historicalBackground: `The Minimal Facts Approach was developed by Gary Habermas and refined with Michael Licona. It establishes the historicity of Jesus's resurrection using only facts that meet two criteria: (1) they are supported by strong historical evidence, and (2) they are accepted by the vast majority of scholars who study the subject, including skeptics and non-Christians. This methodology makes the argument extraordinarily difficult to dismiss, as it uses the critics' own accepted data.`,
    premises: [
      {
        id: 'mf-p1',
        text: 'The following minimal facts are accepted by the vast majority of historical scholars: (1) Jesus died by crucifixion, (2) The disciples had experiences they believed were appearances of the risen Jesus, (3) The persecutor Paul was suddenly converted, (4) The skeptic James (Jesus\'s brother) was suddenly converted, (5) The tomb was found empty.',
        defense: 'These facts are established by multiple independent sources (Paul, Gospels, Acts, Josephus, Tacitus), criterion of embarrassment (women as first witnesses, James\'s prior skepticism), enemy attestation (Jewish authorities claimed the body was stolen, implicitly conceding the empty tomb), and the transformation of the disciples from fearful fugitives to bold proclaimers willing to die for their testimony.',
        sources: ['Habermas, The Risen Jesus and Future Hope (2003)', 'Licona, The Resurrection of Jesus: A New Historiographical Approach (2010)']
      },
      {
        id: 'mf-p2',
        text: 'The best explanation for these minimal facts is that God raised Jesus from the dead.',
        defense: 'Alternative explanations fail: The hallucination theory cannot account for group appearances, Paul\'s conversion, or the empty tomb. The conspiracy theory requires the disciples to die for a known lie — psychologically implausible. The swoon theory (Jesus survived crucifixion) is rejected by virtually all scholars based on medical evidence. The legend theory is ruled out by the early date of the 1 Corinthians 15 creed (within 2-5 years of the crucifixion). The Resurrection uniquely explains all the minimal facts simultaneously.',
        sources: ['Habermas & Licona, The Case for the Resurrection of Jesus (2004)', 'Wright, The Resurrection of the Son of God (2003)']
      }
    ],
    conclusion: 'Therefore, God raised Jesus from the dead, confirming Jesus\'s divine claims and the truth of Christianity.',
    proponents: [
      { name: 'Gary Habermas', era: 'Contemporary' },
      { name: 'Michael Licona', era: 'Contemporary' },
      { name: 'N.T. Wright', era: 'Contemporary' },
      { name: 'William Lane Craig', era: 'Contemporary' },
    ],
    objections: [
      {
        id: 'mf-obj1',
        title: 'Mass hallucination explains the appearances',
        description: 'The disciples experienced grief hallucinations or religious ecstasy that they interpreted as seeing the risen Jesus.',
        response: 'Hallucinations are private, individual experiences — they cannot be shared. Group hallucinations are unknown to psychology. Paul was not grief-stricken but hostile. James was a skeptic. Hallucinations also cannot explain the empty tomb. Furthermore, Jewish theology had no expectation of a single individual rising from the dead in the middle of history — the disciples had no psychological framework for "hallucinating" a resurrection.',
        sources: ['Habermas, The Risen Jesus and Future Hope (2003)', 'Licona (2010)']
      }
    ],
    significance: 'The Minimal Facts approach is the strongest historical argument for Christianity because it does not require one to accept the Bible as inspired or inerrant — it uses only facts accepted by mainstream scholarship, including skeptics.',
    relatedArguments: ['kalam', 'moral-argument'],
    keySources: [
      'Gary Habermas & Michael Licona, The Case for the Resurrection of Jesus (2004)',
      'N.T. Wright, The Resurrection of the Son of God (2003)',
    ]
  }
];
