import { Debate } from '../arguments/types';

export const moralKnowledgePlantingaDebate: Debate = {
  id: 'moral-knowledge-plantinga-debate',
  argumentId: 'moral-knowledge-plantinga',
  title: 'The Argument from Moral Knowledge (Plantinga)',
  forLabel: 'Theist',
  againstLabel: 'Naturalist',
  rounds: [
    {
      round: 1,
      forSide: {
        claim: 'We possess genuine moral knowledge — we know, with the same confidence as any other knowledge, that gratuitous cruelty and genocide are wrong. But on naturalism, our moral faculties were shaped by natural selection for reproductive survival, not for truth-tracking, giving us no reason to trust that they reliably access objective moral reality. Theism, positing faculties designed by a good God to perceive moral truth, better explains our moral knowledge.',
        evidence: [
          { text: 'The wrongness of torturing children for amusement is a paradigm case of moral knowledge as certain as any perceptual or logical knowledge', strength: 'strong', source: 'Plantinga, Where the Conflict Really Lies, 2011' },
          { text: 'Sharon Street\'s "Darwinian Dilemma" shows naturalists cannot simultaneously hold that moral beliefs are evolutionary adaptations and that they reliably track independent moral truth', strength: 'strong', source: 'Street, "A Darwinian Dilemma for Realist Theories of Value," 2006' },
        ]
      },
      againstSide: {
        claim: 'Cornell Realism shows moral properties can be identified with natural, non-mysterious properties (such as those that promote flourishing or well-being), giving naturalists a straightforward account of moral facts and moral knowledge without requiring any theistic grounding.',
        evidence: [
          { text: 'Moral properties like "wrongness" can be analyzed as complex natural properties (e.g., properties that tend to frustrate flourishing), knowable through ordinary empirical and rational inquiry', strength: 'moderate', source: 'Cornell Realism, e.g., Boyd, Brink, Sturgeon' },
        ]
      }
    },
    {
      round: 2,
      forSide: {
        claim: 'Cornell Realism faces the classical is-ought problem in a new guise: even granting that "wrongness" can be identified with some natural property like "tends to frustrate flourishing," it remains unexplained why frustrating flourishing generates a genuine, binding obligation rather than merely a fact we happen to disprefer. Natural properties, however precisely described, are descriptive; morality is essentially prescriptive, and no amount of natural description bridges that gap on its own.',
        evidence: [
          { text: 'Identifying moral properties with natural properties does not, by itself, explain why those natural properties carry normative, binding force rather than being merely descriptive facts about the world', strength: 'strong', source: 'Plantinga, Where the Conflict Really Lies, 2011' },
          { text: 'The is-ought gap, first articulated by Hume, remains a live problem for any naturalistic reduction of moral properties to purely descriptive natural facts', strength: 'moderate', source: 'Standard meta-ethical literature following Hume' },
        ]
      },
      againstSide: {
        claim: 'The is-ought gap is a general problem in metaethics, not one unique to naturalism — theists face an analogous "Euthyphro-style" gap in explaining why God\'s nature or commands generate binding obligation rather than merely being another descriptive fact (about what God happens to be like or want), so invoking God does not obviously solve the normativity problem naturalism is accused of having.',
        evidence: [
          { text: 'The Euthyphro dilemma applies with equal force to theistic metaethics: it is unclear why "grounded in God\'s nature" bridges the is-ought gap any more successfully than "grounded in natural flourishing"', strength: 'moderate', source: 'Standard metaethical parity objection' },
        ]
      }
    },
    {
      round: 3,
      forSide: {
        claim: 'The theistic answer to this parity objection is that God\'s nature is not merely another descriptive fact among others, but is itself the paradigm and standard of goodness — obligation flows from the essential, necessary character of a maximally perfect, personal being who created rational creatures with a purpose, which is a categorically different kind of explanatory ground than an impersonal natural property like "flourishing." A personal ground can generate genuine obligation (a person can bind another through relationship, authority, and design) in a way an impersonal natural fact cannot.',
        evidence: [
          { text: 'Robert Adams and C. Stephen Evans argue that a personal, necessarily good being provides a categorically different — and more adequate — ground for binding obligation than impersonal natural facts', strength: 'strong', source: 'Adams, Finite and Infinite Goods, 1999; Evans, God and Moral Obligation, 2013' },
          { text: 'Obligations in ordinary human experience typically arise from personal relationships and authority (parent-child, promises, commands), suggesting personal grounding is the natural model for moral obligation generally', strength: 'moderate', source: 'C. Stephen Evans, God and Moral Obligation, 2013' },
        ]
      },
      againstSide: {
        claim: 'Even granting a personal ground provides one model of obligation, it is not clear this uniquely favors theism: purely secular accounts of obligation as arising from social contracts, rational agency (Kantian autonomy), or reciprocal human relationships also invoke "personal" or agential grounds for binding obligation without requiring a transcendent, necessarily-good being.',
        evidence: [
          { text: 'Kantian ethics grounds obligation in the rational agency and autonomy of persons themselves, providing a personal (if not theistic) ground for binding moral duty', strength: 'moderate', source: 'Standard Kantian deontological ethics' },
        ]
      }
    },
    {
      round: 4,
      forSide: {
        claim: 'Kantian autonomy still faces Plantinga\'s original evolutionary challenge in a different form: if human reason and rational agency are themselves products of unguided natural selection, we have no independent guarantee that the moral conclusions our "autonomous reason" reaches track objective moral truth rather than merely reflecting whatever cognitive dispositions happened to be adaptive for our ancestors. The theistic account alone explains both the existence of a personal ground for obligation and the reliability of the faculties (reason, conscience) by which we come to know it — since a good God who designed us for relationship with Himself has reason to give us faculties that track moral truth, whereas natural selection has no analogous reason to do so.',
        evidence: [
          { text: 'The evolutionary reliability challenge applies to any naturalistic account of moral cognition, including Kantian autonomy grounded in evolved rational faculties, not merely to first-order naturalistic ethical theories', strength: 'strong', source: 'Plantinga, Where the Conflict Really Lies, 2011 (Evolutionary Argument Against Naturalism, applied to moral cognition)' },
          { text: 'A good, purposive Creator has independent reason to design creatures with morally reliable cognitive faculties, whereas natural selection\'s "goal" (differential reproduction) provides no such guarantee', strength: 'moderate', source: 'Plantinga 2011' },
        ]
      },
      againstSide: {
        claim: 'This reliability argument, even if it shows naturalism faces a genuine explanatory burden, does not on its own establish theism specifically as the answer — it is compatible with various non-theistic metaphysical pictures (e.g., some form of moral realism built into an unexplained necessary feature of reality, as Thomas Nagel has explored) that stop short of positing a personal God.',
        evidence: [
          { text: 'Nagel\'s Mind and Cosmos explores non-theistic teleological alternatives that also attempt to accommodate the reliability of moral and rational cognition without positing a personal deity', strength: 'moderate', source: 'Nagel, Mind and Cosmos, 2012' },
        ]
      }
    }
  ]
};

export const humanDignityBudziszewskiDebate: Debate = {
  id: 'human-dignity-budziszewski-debate',
  argumentId: 'human-dignity-budziszewski',
  title: 'The Argument from Human Dignity',
  forLabel: 'Theist',
  againstLabel: 'Secular Humanist',
  rounds: [
    {
      round: 1,
      forSide: {
        claim: 'Every human being possesses intrinsic, inalienable dignity — not conferred by others, not reducible to capability or usefulness, and not forfeitable. This dignity is presupposed by universal human rights discourse. On naturalism, however, human worth must be grounded either in capacities (which excludes infants and the severely disabled) or in social consensus (which can be revoked) — neither of which yields the inalienable dignity the language of rights requires. The imago Dei — humans made in the image of God — grounds dignity in an unconditional relation that cannot be lost.',
        evidence: [
          { text: 'Infants, the severely cognitively disabled, and those in comas are universally recognized as bearers of rights despite contributing no functional capacities, showing dignity is not capacity-based in ordinary moral practice', strength: 'strong', source: 'Budziszewski, Written on the Heart, 1997' },
          { text: 'The Nazi regime\'s treatment of the disabled and Jewish people was consistent with a purely naturalistic, capacity- or consensus-based value theory, illustrating the danger of grounding dignity in anything other than an unconditional standard', strength: 'moderate', source: 'Budziszewski, Written on the Heart, 1997; Meilaender, Neither Beast Nor God, 2009' },
        ]
      },
      againstSide: {
        claim: 'Secular humanism grounds human dignity in rational agency and the capacity for suffering (sentience) — properties that, while admitting of degrees, are possessed to at least some minimal degree by essentially all human beings, and this provides a workable, non-theistic basis for near-universal human rights without requiring any reference to God.',
        evidence: [
          { text: 'Kantian humanism grounds dignity in the capacity for rational autonomy, a property distinguishing persons from mere objects and grounding respect owed to them', strength: 'moderate', source: 'Standard Kantian and secular humanist rights theory' },
        ]
      }
    },
    {
      round: 2,
      forSide: {
        claim: 'Grounding dignity in even a "minimal" degree of rational agency or sentience still makes dignity a matter of degree and threshold rather than an inalienable, absolute status — and it struggles precisely at the margins that matter most in practice: early-stage embryos, late-stage dementia patients, and those in persistent vegetative states possess little or no functioning rational agency or sentience by the relevant medical definitions, yet our strongest moral intuitions insist they retain full dignity. A threshold account cannot explain this without either lowering the threshold to near-vacuity or biting the bullet and denying full dignity to these vulnerable populations.',
        evidence: [
          { text: 'Capacity-based dignity theories face acute difficulty extending full moral status to early gestation, advanced dementia, and persistent vegetative state patients — precisely the hardest and most consequential bioethical cases', strength: 'strong', source: 'Budziszewski, Written on the Heart, 1997' },
        ]
      },
      againstSide: {
        claim: 'Secular ethical theories can respond by grounding dignity in species-typical potential or in "personhood" understood more broadly than momentary functioning capacity — a human being who is not currently exercising rational agency but belongs to a kind that characteristically develops it (or once possessed it) can still be granted full moral status without invoking theism.',
        evidence: [
          { text: 'Species-membership or potentiality-based accounts of moral status are actively defended in secular bioethics as an alternative to strict capacity-based accounts', strength: 'moderate', source: 'Standard bioethics literature on potentiality and species-typical functioning' },
        ]
      }
    },
    {
      round: 3,
      forSide: {
        claim: 'A "species-typical potential" account still requires explaining why membership in a biological kind, rather than an individual\'s actual properties, confers dignity — and on a purely naturalistic picture, species categories are themselves fuzzy, historically contingent products of evolutionary branching with no privileged moral significance beyond what we stipulate. It is precisely this stipulative, ad hoc quality that the imago Dei avoids: dignity is grounded not in an arbitrary biological category but in a real, metaphysically grounded relation — being made by, and in relation to, a personal Creator — that applies without degree or threshold to every human being.',
        evidence: [
          { text: 'Evolutionary biology treats species boundaries as historically contingent and often indeterminate, making "species membership" a shaky non-arbitrary foundation for something as weighty as inalienable dignity', strength: 'moderate', source: 'Standard philosophy of biology critique of species essentialism' },
          { text: 'The imago Dei grounds dignity in an unconditional relational fact (being made by God) rather than a graded or stipulated biological property', strength: 'strong', source: 'Budziszewski, Written on the Heart, 1997; Wolterstorff, Justice: Rights and Wrongs, 2008' },
        ]
      },
      againstSide: {
        claim: 'Even granting the difficulties of secular grounding, adopting the imago Dei as a foundation requires accepting substantive theological commitments (the existence of God, the doctrine of creation in God\'s image) that are precisely what is in dispute — a purely philosophical argument cannot simply presuppose these premises without argument, and doing so risks assuming the very conclusion the broader debate over theism is meant to settle.',
        evidence: [
          { text: 'Any theistic grounding of dignity presupposes the truth of theism, which is the very question at issue between theists and secular humanists, raising a question-begging concern', strength: 'moderate', source: 'Standard objection to theistic ethical foundationalism' },
        ]
      }
    },
    {
      round: 4,
      forSide: {
        claim: 'This is not straightforwardly question-begging, because the argument does not simply assume theism to prove dignity — it is a comparative inference to the best explanation: given that (1) we are strongly committed, on reflection, to the reality of inalienable, non-gradable human dignity, and (2) naturalistic groundings face severe, well-documented difficulties accounting for this commitment at the margins, the imago Dei is offered as the account that best explains a datum (universal, inalienable dignity) both sides already accept as real. The argument moves from an agreed moral datum to its best available explanation, exactly as other arguments do throughout natural theology.',
        evidence: [
          { text: 'The argument\'s structure is inference to the best explanation from a widely shared moral datum, not a bare assumption of theism as a premise', strength: 'strong', source: 'Budziszewski, Written on the Heart, 1997; Wolterstorff, Justice: Rights and Wrongs, 2008' },
          { text: 'Wolterstorff traces how historical rights movements (abolition, civil rights) appealed to a dignity that transcended existing legal and social consensus, evidence that dignity is experienced as a discovered rather than merely constructed reality', strength: 'moderate', source: 'Wolterstorff, Justice: Rights and Wrongs, 2008' },
        ]
      },
      againstSide: {
        claim: 'Even accepted as inference to the best explanation rather than question-begging assumption, the argument only shows theism is one candidate explanation among competing philosophical accounts (Kantian autonomy, contractualism, capabilities approaches) still actively defended by secular philosophers — it falls short of showing these alternatives are inadequate beyond dispute, leaving reasonable disagreement about which grounding is genuinely "best."',
        evidence: [
          { text: 'Secular moral philosophy continues to actively develop and defend non-theistic accounts of human dignity (capabilities approach, contractualism), suggesting the "best explanation" claim remains contested rather than settled', strength: 'moderate', source: 'Standard contemporary secular ethics literature (e.g., capabilities approach of Nussbaum and Sen)' },
        ]
      }
    }
  ]
};

export const moralProgressDebate: Debate = {
  id: 'moral-progress-debate',
  argumentId: 'moral-progress',
  title: 'The Argument from Moral Progress',
  forLabel: 'Theist',
  againstLabel: 'Secular Progressive',
  rounds: [
    {
      round: 1,
      forSide: {
        claim: 'History exhibits genuine moral progress — the abolition of slavery, the expansion of rights, the recognition of practices once accepted as evil. But "progress" logically presupposes a fixed standard against which change is measured; on relativism or purely evolutionary accounts of ethics, there is no such standard, only shifting consensus, which cannot be called progress in any meaningful sense.',
        evidence: [
          { text: 'Abolitionists, suffragists, and civil rights reformers believed and argued that they were appealing to moral truths that transcended the prevailing consensus of their time, not merely proposing a new consensus', strength: 'strong', source: 'Lewis, Mere Christianity, 1952; Wolterstorff, Justice: Rights and Wrongs, 2008' },
          { text: '"Progress" as a concept requires a fixed reference point; without one, historical moral change is merely difference, not improvement', strength: 'strong', source: 'Lewis, Mere Christianity, 1952' },
        ]
      },
      againstSide: {
        claim: 'What we call moral progress can be explained naturalistically as the expansion of the "moral circle" through increasing empathy, cooperation, and rational reflection — as documented empirically by researchers like Steven Pinker — without requiring any transcendent, fixed moral standard, only an expanding application of already-present human capacities for fairness and reciprocity.',
        evidence: [
          { text: 'Pinker\'s data on declining rates of violence and expanding rights documents a real historical pattern explainable through increasing literacy, trade, governance, and empathic reasoning', strength: 'moderate', source: 'Pinker, The Better Angels of Our Nature, 2011' },
        ]
      }
    },
    {
      round: 2,
      forSide: {
        claim: 'An "expanding moral circle" account still smuggles in the very fixed standard it claims to avoid: to call the circle\'s expansion "progress" rather than mere "change" already presupposes that including more beings within moral consideration is objectively better — a normative claim the purely descriptive, empirical data about empathy and cooperation cannot itself supply. Pinker\'s statistics describe what happened; they do not, by themselves, establish that what happened was good.',
        evidence: [
          { text: 'A purely descriptive account of historical change (more inclusion, less violence) requires an independent normative premise to be characterized as "progress" rather than simply "difference"', strength: 'strong', source: 'Lewis, Mere Christianity, 1952' },
        ]
      },
      againstSide: {
        claim: 'The normative premise needed — that reducing suffering and expanding fair treatment is good — need not come from a transcendent source; it can be grounded in near-universal features of human psychology and rational self-interest (the recognition that a stable, cooperative society benefits nearly everyone), a broadly Humean or contractualist account requiring no appeal to God.',
        evidence: [
          { text: 'Contractualist and Humean sentimentalist ethical theories ground the value of reduced suffering and increased cooperation in widely shared human psychological facts, without positing an objective transcendent standard', strength: 'moderate', source: 'Standard Humean sentimentalist and contractualist ethics literature' },
        ]
      }
    },
    {
      round: 3,
      forSide: {
        claim: 'Grounding "progress" merely in widely shared psychological facts or self-interest cannot account for the reformers whose moral vision ran directly against the self-interest and psychological comfort of their own societies — Wilberforce campaigned against the economic self-interest of the British slave trade; the abolitionists of the American South risked (and often lost) social standing, safety, and even their lives specifically because their moral conviction contradicted the psychological and material interests of the majority around them. A merely psychological or self-interest-based standard cannot explain why these reformers were right to defy the prevailing sentiment of their own time and place.',
        evidence: [
          { text: 'Many key abolitionists (Wilberforce, Clarkson, the Quakers) acted directly against the economic self-interest of their societies, motivated by explicitly theological convictions about the inherent worth of all persons', strength: 'strong', source: 'Wolterstorff, Justice: Rights and Wrongs, 2008' },
          { text: 'A standard reducible to prevailing psychological sentiment or self-interest cannot explain moral reformers who succeeded precisely by opposing the prevailing sentiment and self-interest of their era', strength: 'moderate', source: 'Lewis, Mere Christianity, 1952' },
        ]
      },
      againstSide: {
        claim: 'Reformers can be explained as appealing to a broader, longer-term, or more inclusive conception of collective self-interest and empathic identification (extending fellow-feeling to previously excluded groups) rather than the narrower short-term self-interest of their immediate community — this still requires no transcendent standard, only a wider application of existing human capacities for empathy and reasoned self-interest.',
        evidence: [
          { text: 'Expanding circles of empathy and long-term enlightened self-interest are documented mechanisms for moral change in the historical and psychological literature on the decline of violence and expansion of rights', strength: 'moderate', source: 'Pinker, The Better Angels of Our Nature, 2011' },
        ]
      }
    },
    {
      round: 4,
      forSide: {
        claim: 'This move still cannot explain why "wider empathic identification" constitutes genuine moral improvement rather than an arbitrary psychological preference among many equally possible directions of change — a naturalistic account can describe the mechanism of change (expanding empathy) but not certify its direction as objectively correct, since on naturalism there is, ex hypothesi, no fact of the matter about which direction of change is truly better. The theistic account alone supplies both a real, fixed standard (grounded in the unchanging character and will of a personal God) against which we can meaningfully say some historical changes were genuine improvements and others (such as the rise of totalitarian ideologies) were genuine regressions — a judgment secular progressives themselves clearly want to make but cannot fully ground without such a standard.',
        evidence: [
          { text: 'Even committed secular progressives condemn certain historical changes (fascism, totalitarian purges) as moral regressions, implicitly appealing to a fixed standard their own meta-ethics has difficulty supplying', strength: 'strong', source: 'Lewis, Mere Christianity, 1952' },
          { text: 'A transcendent, unchanging moral standard grounded in God\'s nature provides the fixed reference point that both "progress" and "regress" require to be meaningfully distinguished', strength: 'moderate', source: 'Wolterstorff, Justice: Rights and Wrongs, 2008' },
        ]
      },
      againstSide: {
        claim: 'Secular philosophers can and do offer non-theistic accounts of objective or quasi-objective moral standards (rational constructivism, ideal observer theories, or reflective equilibrium) that permit meaningful judgments of moral progress and regress without positing a transcendent personal God — the argument shows secular meta-ethics owes an account of moral direction, not that only theism can supply one.',
        evidence: [
          { text: 'Rational constructivist and reflective equilibrium approaches in secular ethics attempt to supply objective or quasi-objective standards for evaluating moral change without theistic commitment', strength: 'moderate', source: 'Standard secular meta-ethics literature, e.g., Rawlsian reflective equilibrium' },
        ]
      }
    }
  ]
};

export const nagelMindCosmosDebate: Debate = {
  id: 'nagel-mind-cosmos-debate',
  argumentId: 'nagel-mind-cosmos',
  title: "Nagel's Mind and Cosmos Challenge to Naturalist Moral Realism",
  forLabel: 'Theist (using Nagel)',
  againstLabel: 'Naturalist Defender',
  rounds: [
    {
      round: 1,
      forSide: {
        claim: 'Thomas Nagel — an atheist philosopher with no theological motive — argues that moral realism is nearly impossible to consistently deny, yet is deeply problematic for naturalism, since natural selection selects for adaptive behavior, not true moral belief. Nagel concludes the universe must contain, at its foundation, the grounds for value and normativity — a conclusion that clears the ground for theism even though Nagel himself resists that step.',
        evidence: [
          { text: 'Nagel argues that even committed moral skeptics cannot consistently act as though all values are illusory — they resist injustice and demand reasons, showing the practical unavoidability of moral realism', strength: 'strong', source: 'Nagel, Mind and Cosmos, 2012' },
          { text: 'Nagel concludes that the neo-Darwinian materialist picture of nature is "almost certainly false" as a complete account, precisely because it cannot accommodate consciousness, reason, and value', strength: 'strong', source: 'Nagel, Mind and Cosmos, 2012 (subtitle)' },
        ]
      },
      againstSide: {
        claim: 'Citing Nagel\'s conclusions in support of theism misrepresents his actual project: Nagel explicitly rejects theism and proposes instead a naturalistic teleology in which value and mind are somehow built into the fundamental laws of nature without any personal deity — using his critique of neo-Darwinism as evidence for God ignores that his own proposed solution is emphatically non-theistic.',
        evidence: [
          { text: 'Nagel states his atheism plainly and explicitly rejects theism as an acceptable resolution to the problems he raises, proposing instead an expanded, non-theistic naturalism', strength: 'strong', source: 'Nagel, Mind and Cosmos, 2012, preface' },
        ]
      }
    },
    {
      round: 2,
      forSide: {
        claim: 'Using Nagel\'s argument apologetically does not require endorsing his personal conclusion — it only requires that his diagnosis of the problem (standard neo-Darwinian materialism cannot account for consciousness, reason, and value) is sound, which is a separate question from what the correct alternative is. A reluctant, philosophically rigorous atheist conceding that the dominant naturalist paradigm fails on its own terms is significant independent testimony, whatever his own preferred (and admittedly underdeveloped) alternative may be.',
        evidence: [
          { text: 'Nagel explicitly describes his own proposed teleological naturalism as speculative and underdeveloped, distinguishing his diagnosis of the problem (which is rigorously argued) from his tentative proposed solution (which he does not claim to have fully worked out)', strength: 'strong', source: 'Nagel, Mind and Cosmos, 2012' },
          { text: 'The evidential force of a critique does not depend on the critic sharing the conclusion that critique is later used to support — a hostile or reluctant witness\'s testimony to a fact remains testimony to that fact', strength: 'moderate', source: 'Standard evidential/dialectical principle' },
        ]
      },
      againstSide: {
        claim: 'Nagel\'s diagnosis of neo-Darwinism\'s limits is itself controversial and rejected by many working philosophers of biology and mind, who argue that emergent or non-reductive physicalist accounts can, in principle, accommodate consciousness and normativity without abandoning naturalism or invoking either theism or an as-yet-unspecified teleological principle.',
        evidence: [
          { text: 'Numerous naturalist philosophers of mind defend non-reductive physicalism or emergentism as adequate to accommodate consciousness without abandoning a broadly naturalistic framework, directly disputing Nagel\'s central claim', strength: 'moderate', source: 'Standard responses to Nagel from the philosophy of mind community, e.g., reviews by Brian Leiter, Elliott Sober, and others' },
        ]
      }
    },
    {
      round: 3,
      forSide: {
        claim: 'Emergentist and non-reductive physicalist responses face the same underlying difficulty Nagel identifies: they typically assert that consciousness, reason, and value "emerge" from purely physical processes without explaining how or why such emergence should occur or why it would track truth (particularly moral truth) rather than mere function — emergence, absent a positive account of the mechanism, functions more as a label for the mystery than a solution to it. Nagel\'s point is precisely that simply asserting emergence, without explanatory content, does not discharge the explanatory burden.',
        evidence: [
          { text: 'Nagel explicitly criticizes emergentist responses as failing to explain the "why" of consciousness and value arising from purely physical processes, treating "emergence" as a redescription of the puzzle rather than its resolution', strength: 'strong', source: 'Nagel, Mind and Cosmos, 2012, ch. 2-3' },
        ]
      },
      againstSide: {
        claim: 'Demanding a complete mechanistic explanation of emergence before accepting it as scientifically respectable applies an inconsistent standard, since many now-uncontroversial scientific phenomena (temperature as emergent from molecular motion, life as emergent from chemistry) were once considered equally mysterious "brute emergences" before being explained by further scientific progress — the history of science counsels patience rather than a leap to theism merely because a full mechanistic account of conscious, valuing minds is not yet available.',
        evidence: [
          { text: 'Historical precedent shows many phenomena once considered inexplicable in reductive physical terms were later successfully explained by scientific progress (e.g., the chemical basis of heredity, the physical basis of temperature)', strength: 'moderate', source: 'Standard historical argument about the trajectory of scientific explanation' },
        ]
      }
    },
    {
      round: 4,
      forSide: {
        claim: 'The historical-precedent reply works for many phenomena but not obviously for this one, because Nagel\'s argument is not merely that we currently lack a mechanistic story but that the very structure of the neo-Darwinian explanatory framework — selection for reproductive fitness — is the wrong kind of explanation to ever account for truth-directed reason and objective value, no matter how much further empirical detail is added. This is a principled, not merely temporary, explanatory gap, similar in kind to the classical is-ought problem: no additional facts about adaptive fitness, however detailed, will by themselves yield an "ought." Theism, by positing a rational, valuing Creator as the ultimate ground of both mind and moral reality, supplies the different kind of explanation the problem requires — one many other prior scientific mysteries (temperature, heredity) never actually needed, since those were purely descriptive puzzles, not puzzles about the origin of normativity itself.',
        evidence: [
          { text: 'Nagel argues the problem with neo-Darwinism accounting for reason and value is one of explanatory kind, not merely of currently missing empirical detail — an in-principle rather than a merely temporary gap', strength: 'strong', source: 'Nagel, Mind and Cosmos, 2012' },
          { text: 'A personal, rational, valuing Creator supplies a explanatorily adequate ground for both consciousness and objective value in a single unified account, addressing the specific "kind" of gap Nagel identifies', strength: 'moderate', source: 'Plantinga, Where the Conflict Really Lies, 2011 (parallel argument)' },
        ]
      },
      againstSide: {
        claim: 'Granting that the neo-Darwinian framework alone cannot bridge the is-ought gap, this does not uniquely privilege theism over Nagel\'s own preferred non-theistic teleological naturalism, or over other proposed non-naturalist but non-theistic metaphysical frameworks (such as certain forms of Platonism about value) — the argument establishes that standard naturalism is inadequate, not that theism specifically is the only remaining option.',
        evidence: [
          { text: 'Nagel himself, despite acknowledging the inadequacy of standard neo-Darwinism, continues to resist theism in favor of a non-theistic teleological or panpsychist alternative, showing the argument does not compel a uniquely theistic conclusion even in the eyes of its own originator', strength: 'moderate', source: 'Nagel, Mind and Cosmos, 2012' },
        ]
      }
    }
  ]
};

export const objectiveMoralValuesDebate: Debate = {
  id: 'objective-moral-values-debate',
  argumentId: 'objective-moral-values',
  title: 'The Moral Argument',
  forLabel: 'Theist',
  againstLabel: 'Atheist',
  rounds: [
    {
      round: 1,
      forSide: {
        claim: 'If God does not exist, objective moral values and duties do not exist, since morality would reduce to subjective preference, social convention, or evolutionary instinct with no binding force. But objective moral values and duties do exist — it is objectively wrong, in every culture and era, to torture an innocent child for fun. Therefore, God exists.',
        evidence: [
          { text: 'Dostoevsky\'s dictum captures the logical implication of atheistic naturalism: "If God does not exist, everything is permitted"', strength: 'moderate', source: 'Craig, Reasonable Faith, 2008, citing Dostoevsky' },
          { text: 'We apprehend some moral truths (the wrongness of torturing children for fun) with the same confidence as basic logical truths, and treat moral relativists as objectively mistaken, not merely differently opinionated', strength: 'strong', source: 'Lewis, Mere Christianity, 1952; Craig, Reasonable Faith, 2008' },
        ]
      },
      againstSide: {
        claim: 'The Euthyphro Dilemma undercuts the first premise: either God commands what is good because it is independently good (in which case goodness does not depend on God and the argument fails), or something is good merely because God commands it (in which case morality is arbitrary — God could have commanded torture and it would then be "good"). Either horn is fatal to the claim that God is needed to ground objective morality.',
        evidence: [
          { text: 'The dilemma, going back to Plato\'s Euthyphro, presents a genuine logical fork: divine command ethics is either redundant (goodness is prior to God) or arbitrary (goodness is whatever God happens to will)', strength: 'strong', source: 'Standard formulation of the Euthyphro Dilemma, Plato, Euthyphro' },
        ]
      }
    },
    {
      round: 2,
      forSide: {
        claim: 'The dilemma is a false dichotomy: there is a third option, standard in classical theism, whereby God\'s own nature — not an external standard, and not an arbitrary decree — is the standard of goodness. God is essentially, necessarily loving, just, and good; His commands flow necessarily from this unchanging character rather than being either external constraints on Him or arbitrary fiats unconnected to any deeper feature of His being.',
        evidence: [
          { text: 'God\'s commands are understood as necessary expressions of His unchanging, essentially good nature, avoiding both arbitrariness and appeal to an external standard', strength: 'strong', source: 'Craig, Reasonable Faith, 2008; Adams, Finite and Infinite Goods, 1999' },
          { text: 'This is analogous to asking whether a perfectly rational being could believe a contradiction — the question dissolves once we recognize necessary character constrains possibility without external imposition', strength: 'moderate', source: 'Craig, Reasonable Faith, 2008' },
        ]
      },
      againstSide: {
        claim: 'Grounding goodness in "God\'s nature" merely relocates the dilemma rather than resolving it: we can still ask whether God\'s nature is good because it has certain nature-independent features that make it good, or whether it is good merely by definitional stipulation that "good" means "whatever God\'s nature happens to be" — the same fork reappears one level up, at the level of divine nature rather than divine command.',
        evidence: [
          { text: 'Critics argue the "God\'s nature is the standard" move simply pushes the original Euthyphro question back to the nature itself, without ultimately escaping the underlying dilemma', strength: 'moderate', source: 'Standard philosophical critique of the "third horn" response to Euthyphro' },
        ]
      }
    },
    {
      round: 3,
      forSide: {
        claim: 'This regress does not, in fact, recur in the same problematic form, because the original dilemma assumed goodness must be either external to a willing/commanding agent or an arbitrary decree of that agent\'s will — but a necessary nature is neither: it is not "external" (it just is what the being essentially is) and it is not "arbitrary" (necessary features, unlike free decrees, could not have been otherwise and are not a matter of unconstrained choice). Asking "is God\'s nature good because of further features, or merely by definition" presupposes there must be some yet more fundamental standard behind any candidate — but every explanatory chain must terminate somewhere in an ungrounded terminus, and God\'s essentially good nature is a metaphysically satisfying place for that regress to end, being necessary rather than arbitrary or contingent.',
        evidence: [
          { text: 'A necessary nature is categorically distinct from both an external standard and an arbitrary decree, escaping the original dilemma\'s framing rather than merely restating it one level up', strength: 'strong', source: 'Adams, Finite and Infinite Goods, 1999' },
          { text: 'Every explanatory regress, in ethics as in metaphysics, must terminate in some ungrounded terminus; a necessarily existing, necessarily good being is a principled terminus, avoiding infinite regress or brute unexplained contingency', strength: 'moderate', source: 'Craig, Reasonable Faith, 2008' },
        ]
      },
      againstSide: {
        claim: 'Even granting a necessary terminus is required somewhere, this does not show the terminus must be personal or divine — one could equally hold that certain moral facts (e.g., "gratuitous cruelty is wrong") are themselves necessary, brute, and ungrounded in the way theists claim God\'s nature is, without requiring a personal God as the bearer of that necessary nature. Necessary moral Platonism offers the same regress-stopping structure without theism.',
        evidence: [
          { text: 'Non-theistic moral Platonists (e.g., Erik Wielenberg) argue that objective moral facts can themselves be necessary, ungrounded, brute features of reality, without requiring a personal being to instantiate them', strength: 'moderate', source: 'Wielenberg, Robust Ethics, 2014' },
        ]
      }
    },
    {
      round: 4,
      forSide: {
        claim: 'Necessary moral Platonism faces a distinctive problem that theistic grounding avoids: abstract moral facts, even if necessarily true, are causally and explanatorily inert — they cannot, by themselves, explain why any particular agent is bound or obligated to comply, since abstract objects have no power to command, create, or enter into relationship with moral agents. A binding obligation, by its nature, seems to require a person capable of authoring and enforcing it, or at least standing in the right kind of relational authority — exactly what an impersonal, static Platonic realm of moral facts cannot supply, but a personal, necessarily good Creator who made rational agents for relationship with Himself can.',
        evidence: [
          { text: 'Abstract objects (including hypothetical brute moral facts) lack causal powers and cannot explain why any concrete agent is bound to comply with them, unlike a personal being capable of authority and relationship', strength: 'strong', source: 'Craig, Reasonable Faith, 2008; Adams, Finite and Infinite Goods, 1999' },
          { text: 'Moral obligation, in ordinary usage, functions like a command or a debt owed to someone — a structure that fits personal grounding (a Creator to whom creatures are accountable) far more naturally than an impersonal abstract realm', strength: 'moderate', source: 'Evans, God and Moral Obligation, 2013' },
        ]
      },
      againstSide: {
        claim: 'Defenders of non-theistic moral realism respond that binding force need not come from a commanding person at all — moral facts can simply be brute normative truths that rational agents are capable of recognizing and are thereby bound by, in the same way mathematical or logical truths bind our reasoning without any personal "commander" of logic; requiring a personal source for all binding normativity may itself be an unargued assumption rather than a demonstrated necessity.',
        evidence: [
          { text: 'Analogies to logical and mathematical necessity are used by non-theistic moral realists to argue that binding normativity does not require a personal source, since logical and mathematical truths bind reasoning without any commanding agent', strength: 'moderate', source: 'Wielenberg, Robust Ethics, 2014' },
        ]
      }
    }
  ]
};

export const moralDebates: Record<string, Debate> = {
  'moral-knowledge-plantinga': moralKnowledgePlantingaDebate,
  'human-dignity-budziszewski': humanDignityBudziszewskiDebate,
  'moral-progress': moralProgressDebate,
  'nagel-mind-cosmos': nagelMindCosmosDebate,
  'objective-moral-values': objectiveMoralValuesDebate,
};
