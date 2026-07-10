import { Debate } from '../arguments/types';

export const paulDamascusConversionDebate: Debate = {
  id: 'paul-damascus-conversion-debate',
  argumentId: 'paul-damascus-conversion',
  title: "The Argument from Paul's Damascus Road Conversion",
  forLabel: 'Christian Historian',
  againstLabel: 'Skeptical Historian',
  rounds: [
    {
      round: 1,
      forSide: {
        claim: 'Paul was a zealous persecutor of Christians, by his own admission against his own interest, who underwent a sudden total reversal, becoming Christianity\'s most effective missionary and eventually suffering and dying for his testimony that he had personally encountered the risen Jesus. The best explanation for a hostile witness\'s total reversal is a genuine encounter.',
        evidence: [
          { text: 'Paul admits his own persecution of the church against his own interest in Galatians 1:13 — the criterion of embarrassment strengthens rather than weakens this datum', strength: 'strong', source: 'Habermas & Licona, The Case for the Resurrection of Jesus, 2004; Galatians 1:13-14' },
          { text: 'Paul\'s extensive suffering for his testimony is documented in his own undisputed letters (2 Cor. 11:23-28), showing sincerity beyond social pressure or self-interest', strength: 'strong', source: '2 Corinthians 11:23-28' },
        ]
      },
      againstSide: {
        claim: 'Paul\'s experience, as he himself describes it in his letters, is consistently a visionary or revelatory experience ("God revealed his Son in me," Gal. 1:16), not a physical encounter with a walking, talking body — this is fully consistent with a powerful subjective religious experience (a vision, or a psychologically generated event) rather than an objective, bodily resurrection appearance.',
        evidence: [
          { text: 'Paul\'s own description of the experience uses revelatory/visionary language ("apokalypto" — to reveal) rather than describing physical, sensory contact with a body', strength: 'moderate', source: 'Galatians 1:16; standard critical scholarship on Pauline visionary language' },
        ]
      }
    },
    {
      round: 2,
      forSide: {
        claim: 'Paul explicitly places his own experience in the same category and same list as the physical, bodily appearances to Peter and the Twelve in 1 Corinthians 15:5-8, using the same Greek verb ("ophthe" — appeared) for both — he did not consider his experience a different kind of subjective vision but continuous with the same category of appearance the other apostles received, which the earliest tradition described as bodily (Jesus eating, being touched, showing his wounds).',
        evidence: [
          { text: 'Paul lists his own experience using the identical verb "ophthe" applied to Peter, the Twelve, the 500, and James in 1 Corinthians 15:5-8, treating them as the same category of event', strength: 'strong', source: '1 Corinthians 15:5-8' },
          { text: 'The pre-Pauline creed in 1 Corinthians 15:3-8 dates to within two to five years of the crucifixion, showing this was the earliest, most foundational understanding of the resurrection appearances, not a later theological gloss', strength: 'strong', source: 'Habermas & Licona, The Case for the Resurrection of Jesus, 2004' },
        ]
      },
      againstSide: {
        claim: 'Using the same word does not establish the same kind of experience: Paul may simply be asserting continuity of apostolic authority and legitimacy (placing himself in the same authoritative line as Peter and the Twelve) rather than making a precise phenomenological claim that his experience was physically identical to theirs — ancient near-eastern religious literature frequently uses similar visionary language for a range of different types of experience.',
        evidence: [
          { text: 'Paul\'s primary concern in 1 Corinthians 15 is establishing his own apostolic legitimacy alongside the other apostles, which does not require his experience to have been phenomenologically identical to theirs', strength: 'moderate', source: 'Standard critical scholarship on Pauline apostolic self-defense, e.g., Lüdemann' },
        ]
      }
    },
    {
      round: 3,
      forSide: {
        claim: 'This reading struggles against the internal logic of Paul\'s own argument in 1 Corinthians 15: he is specifically defending the reality of bodily resurrection against Corinthian doubters who denied any bodily resurrection at all, and his entire argument depends on the appearances being of the same real, embodied kind — if his own experience were merely a private vision categorically different from a bodily appearance, his argument for the reality and physicality of the general resurrection would be self-undermining, since his own case (the last appearance listed) would then be evidence against, not for, bodily resurrection.',
        evidence: [
          { text: 'The entire argument of 1 Corinthians 15 addresses Corinthians who denied bodily resurrection outright; Paul\'s rhetorical strategy requires all the listed appearances, including his own, to support rather than undercut a bodily resurrection', strength: 'strong', source: '1 Corinthians 15:12-19; Wright, The Resurrection of the Son of God, 2003' },
        ]
      },
      againstSide: {
        claim: 'Even granting Paul intended his experience to support bodily resurrection theologically, this does not settle what actually happened to him psychologically or physiologically on the Damascus road — Paul, a highly stressed persecutor operating under intense guilt and cognitive dissonance (having just participated in Stephen\'s stoning), is a plausible candidate for an intense psychologically-generated experience that he then interpreted, in good faith, through the theological categories available to him.',
        evidence: [
          { text: 'Psychological models of religious conversion under conditions of guilt, stress, and cognitive dissonance have been proposed to explain sudden dramatic conversions like Paul\'s without requiring an objective external event', strength: 'moderate', source: 'Standard psychological/skeptical explanations of religious conversion, cf. discussions responding to Habermas' },
        ]
      }
    },
    {
      round: 4,
      forSide: {
        claim: 'A purely psychological account struggles to explain the content and consequences of the experience, not merely its intensity: guilt and stress can produce anxiety, remorse, or even auditory/visual disturbances, but they do not typically produce a specific, coherent conviction that a particular executed criminal has bodily risen and is the divine Messiah — nor do they typically issue in decades of sophisticated, internally consistent theological writing and a complete, permanent reversal of core convictions sustained under repeated physical suffering and eventual martyrdom. The specificity of the content (encountering Jesus specifically, receiving a commission to the Gentiles) and its durability under persecution outstrip what guilt-induced psychological states are known to produce.',
        evidence: [
          { text: 'Psychologically-generated experiences from guilt or stress do not typically generate the specific theological content (a particular identified risen person, a specific missionary commission) that Paul describes, nor sustain decades of coherent, costly commitment', strength: 'moderate', source: 'Habermas & Licona, The Case for the Resurrection of Jesus, 2004' },
        ]
      },
      againstSide: {
        claim: 'Even if a purely psychological account cannot explain every detail with certainty, this does not license concluding a supernatural bodily resurrection is the best explanation by default — the historian\'s task is to weigh the relative probability of a naturalistic (if imperfectly understood) psychological event against an event (bodily resurrection) that is, on any account, maximally improbable given our uniform background experience that dead bodies do not return to life; the argument, at most, shows existing psychological explanations are incomplete, not that a miracle is the superior historical inference.',
        evidence: [
          { text: 'Standard Humean/Bayesian objections to miracle claims hold that even a compelling but incompletely-explained testimony is more probably explained by some as-yet-unspecified naturalistic cause than by an event contradicting all uniform prior experience', strength: 'moderate', source: 'Standard Humean argument against miracles, applied to resurrection claims' },
        ]
      }
    }
  ]
};

export const emptyTombDebate: Debate = {
  id: 'empty-tomb-debate',
  argumentId: 'empty-tomb',
  title: 'The Argument from the Empty Tomb',
  forLabel: 'Christian Historian',
  againstLabel: 'Skeptical Historian',
  rounds: [
    {
      round: 1,
      forSide: {
        claim: 'Multiple independent sources — Mark, the pre-Pauline creed in 1 Corinthians 15:4, Matthew, Luke, and John — attest that the tomb of Jesus was found empty. The women are named as the primary witnesses, which is unlikely to be an invention in a culture where women\'s testimony was legally devalued (the criterion of embarrassment). The Jewish authorities\' own counter-explanation — that the disciples stole the body — presupposes and concedes the tomb was empty.',
        evidence: [
          { text: 'Women as first witnesses to the empty tomb, attested across all four Gospels, is highly unlikely to be a later invention given the low evidentiary status of female testimony in first-century Jewish culture', strength: 'strong', source: 'Wright, The Resurrection of the Son of God, 2003' },
          { text: 'The earliest recorded Jewish counter-explanation (Matt. 28:12-15) — bribing guards to claim the disciples stole the body — concedes the tomb was empty rather than disputing it', strength: 'strong', source: 'Craig, Assessing the New Testament Evidence for the Historicity of the Resurrection of Jesus, 1989' },
        ]
      },
      againstSide: {
        claim: 'Mark, our earliest Gospel, ends abruptly at 16:8 with the women fleeing the tomb in fear and telling no one — a strange, unresolved ending that some scholars take as evidence the empty tomb tradition developed and was elaborated over time in the later Gospels (Matthew, Luke, John), rather than being securely present from the very earliest layer of tradition alongside the appearances.',
        evidence: [
          { text: 'Mark 16:8\'s abrupt ending, with the women "afraid" and silent, is textually and historically puzzling and may indicate the empty tomb tradition was less settled or differently emphasized in the earliest stratum', strength: 'moderate', source: 'Standard critical scholarship on the Markan ending, e.g., discussions in Ehrman\'s work' },
        ]
      }
    },
    {
      round: 2,
      forSide: {
        claim: 'The pre-Pauline creed Paul received and passed on in 1 Corinthians 15:3-4 — dated by the near-consensus of critical scholars to within two to five years of the crucifixion, well before Mark was written — already states "he was buried, he was raised" using formal, structured language implying the tomb was vacated; an empty tomb is the necessary correlate of a bodily burial followed by bodily resurrection in first-century Jewish thought. This creedal evidence predates Mark and is not dependent on its unusual ending.',
        evidence: [
          { text: 'The 1 Corinthians 15:3-8 creed, dated by the wide scholarly consensus (including many skeptical scholars) to within a few years of the crucifixion, already presupposes burial followed by resurrection — implying vacated tomb — independent of any Gospel tradition', strength: 'strong', source: 'Habermas & Licona, The Case for the Resurrection of Jesus, 2004' },
          { text: 'In first-century Jewish thought, bodily resurrection necessarily entailed a vacated grave; the concepts are not separable in that cultural context', strength: 'moderate', source: 'Wright, The Resurrection of the Son of God, 2003' },
        ]
      },
      againstSide: {
        claim: 'The creed itself says nothing explicitly about an empty tomb, women witnesses, or any of the narrative details found in the later Gospel accounts — it is a terse formula that could be compatible with a range of understandings of "raised," and building a full empty-tomb narrative on this brief formula requires importing details the creed itself does not contain.',
        evidence: [
          { text: 'The 1 Corinthians 15 creed lists appearances but does not itself mention a tomb, women, or guards, leaving room for scholarly disagreement about how much of the later Gospel narrative detail it actually presupposes', strength: 'moderate', source: 'Standard critical-scholarship caution regarding creedal minimalism, e.g., Lüdemann' },
        ]
      }
    },
    {
      round: 3,
      forSide: {
        claim: 'The absence of narrative detail in a two-line creedal summary is expected and does not undermine the inference: creeds by their nature compress; the theological logic of "raised" (egegertai) in a Jewish context specifically meant bodily, physical resurrection requiring a vacated grave — this is confirmed independently by the fact that no strand of the extremely early Jerusalem controversy, which had every incentive to expose a still-occupied tomb, ever claimed the body remained in the grave. The silence of hostile, contemporaneous opponents on this point is a strong independent corroboration going beyond the creed alone.',
        evidence: [
          { text: 'No ancient Jewish or Roman source, despite obvious motive, ever claimed the body was still in the tomb or produced it — the earliest counter-narrative (stolen body) already concedes the tomb\'s vacancy', strength: 'strong', source: 'Craig, Assessing the New Testament Evidence, 1989' },
        ]
      },
      againstSide: {
        claim: 'The absence of a hostile source explicitly refuting a claim, decades after the events in a period from which we possess very few surviving contemporaneous Jewish sources on the subject at all, is an argument from silence — insufficient surviving evidence, not active concession, may explain why no rebuttal identifying an occupied tomb survives.',
        evidence: [
          { text: 'Very few Jewish sources from the relevant period survive at all, making arguments from the silence of the historical record methodologically weak on either side of the debate', strength: 'moderate', source: 'Standard historiographical caution about arguments from silence' },
        ]
      }
    },
    {
      round: 4,
      forSide: {
        claim: 'This is not a mere argument from silence but a positive datum: Matthew 28:12-15 explicitly records and responds to a live, circulating Jewish explanation ("his disciples stole the body") current at the time of writing — this is not our silence about a possible rebuttal, but direct attestation of what the actual, historically operative counter-narrative was, and that counter-narrative itself concedes the tomb was empty rather than offering the far simpler rebuttal of pointing to an occupied grave. Historians weighing competing explanations for a datum give special weight to what opponents contemporaneous with the events are recorded as actually having said, rather than speculating about explanations they might have given but did not.',
        evidence: [
          { text: 'Matthew records a specific, circulating counter-explanation ("guards bribed to say the disciples stole the body," Matt. 28:12-15) that was current "to this day" at the time of writing, which is positive evidence of what the operative Jewish response actually was, not mere silence', strength: 'strong', source: 'Craig, Assessing the New Testament Evidence, 1989; Matthew 28:12-15' },
        ]
      },
      againstSide: {
        claim: 'Matthew, writing decades after the events and with clear apologetic and polemical purposes against contemporary Jewish critics of the Christian movement, is not a neutral historical source for what Jewish authorities actually said in 30-33 CE — it is equally plausible that Matthew constructed this exchange for rhetorical purposes to answer objections circulating in his own later community, rather than accurately preserving a genuine, contemporaneous Jerusalem-authority position from the time of the crucifixion itself.',
        evidence: [
          { text: 'Matthew\'s Gospel, written decades later amid ongoing Jewish-Christian polemics, has clear motive and opportunity to construct or embellish this exchange for its own community\'s apologetic needs, limiting its reliability as a direct historical record of events at the time of the crucifixion', strength: 'moderate', source: 'Standard critical scholarship caution on Matthean redaction and polemical purpose' },
        ]
      }
    }
  ]
};

export const disciplesWillingnessToDieDebate: Debate = {
  id: 'disciples-willingness-to-die-debate',
  argumentId: 'disciples-willingness-to-die',
  title: "The Argument from the Disciples' Willingness to Die",
  forLabel: 'Christian Historian',
  againstLabel: 'Skeptical Historian',
  rounds: [
    {
      round: 1,
      forSide: {
        claim: 'The original disciples — Peter, James the brother of John, James the brother of Jesus, and Paul — suffered persecution and death for their testimony that Jesus rose from the dead. Unlike ordinary martyrs who die for inherited beliefs, the disciples claimed to be eyewitnesses; people sometimes die for beliefs held sincerely but wrongly, but no one willingly dies for what they personally know to be a fabrication.',
        evidence: [
          { text: 'The martyrdoms of Peter, James (son of Zebedee, in Acts 12), and Paul are attested by multiple independent early sources (Clement of Rome, Tertullian, Josephus for James the brother of Jesus)', strength: 'strong', source: 'McDowell, The Fate of the Apostles, 2015' },
          { text: 'Paul\'s extensive, non-lethal suffering (floggings, imprisonments) is independently documented in his own undisputed letters, apart from any later martyrdom tradition', strength: 'strong', source: '2 Corinthians 11:23-28' },
        ]
      },
      againstSide: {
        claim: 'The specific, detailed martyrdom traditions for most of the apostles (beyond Peter, Paul, and James the son of Zebedee) come from later, often legendary sources written decades or centuries after the events, making the historical case for "the disciples all died for their testimony" considerably weaker than popular apologetic presentations suggest.',
        evidence: [
          { text: 'Detailed martyrdom accounts for many of the Twelve (e.g., Thomas in India, Andrew\'s crucifixion) derive from apocryphal acts written generations later, with much lower historical reliability than the New Testament documents themselves', strength: 'moderate', source: 'Standard critical historiography on apostolic martyrdom traditions' },
        ]
      }
    },
    {
      round: 2,
      forSide: {
        claim: 'The argument does not depend on every detailed martyrdom tradition being historically certain — Sean McDowell\'s comprehensive scholarly analysis grades the evidence by strength and finds strong, multiply-attested support specifically for Peter, James the son of Zebedee (in the historically reliable book of Acts), James the brother of Jesus (independently in Josephus), and Paul. The argument rests on this well-attested core, not on every apocryphal account of every apostle\'s fate.',
        evidence: [
          { text: 'McDowell\'s systematic grading of the evidence finds "strong" historical support specifically for the martyrdoms of Peter, James (son of Zebedee), James (brother of Jesus), and Paul\'s suffering, distinguishing these from weaker, later traditions about other apostles', strength: 'strong', source: 'McDowell, The Fate of the Apostles, 2015' },
        ]
      },
      againstSide: {
        claim: 'Even restricting the claim to this stronger core, willingness to suffer or die for a belief — however sincerely held — only demonstrates the sincerity of that belief, not its truth; the psychological premise that "no one dies for a known lie" does not rule out the more modest possibility that the disciples experienced something (a vivid grief-vision, a collective delusion, a misidentification) that they sincerely but mistakenly interpreted as a resurrection appearance, and then died for that sincere, if mistaken, conviction.',
        evidence: [
          { text: 'Sincerity of belief under persecution is compatible with an honest but mistaken interpretation of an ambiguous or misidentified experience, not only with either deliberate fabrication or a genuine bodily resurrection', strength: 'moderate', source: 'Standard skeptical rejoinder distinguishing sincerity from accuracy' },
        ]
      }
    },
    {
      round: 3,
      forSide: {
        claim: 'This response actually concedes the core of the argument: it grants that the disciples were not knowingly lying, which is precisely what the willingness-to-die argument is designed to establish — it rules out the conspiracy/fabrication hypothesis (that the disciples invented the resurrection and then died to protect a hoax), which was historically the most common skeptical explanation before modern scholarship largely abandoned it as psychologically untenable. The remaining question — whether their sincere conviction was accurate — is a separate matter addressed by the other minimal facts (empty tomb, group appearances, conversions of skeptics like Paul and James), not by the martyrdom data alone.',
        evidence: [
          { text: 'The conspiracy/deliberate-fabrication theory is now widely regarded by scholars across the spectrum, including skeptics, as psychologically implausible, precisely because of the martyrdom and suffering data', strength: 'strong', source: 'Habermas & Licona, The Case for the Resurrection of Jesus, 2004' },
        ]
      },
      againstSide: {
        claim: 'Granting that a conspiracy theory is implausible does not, by itself, advance the case very far toward a bodily resurrection specifically, since sincere-but-mistaken accounts (grief hallucination, visionary experience, or even a legend that grew and was then sincerely believed by later tradents who were not themselves original eyewitnesses) remain live alternatives that are equally compatible with sincere willingness to suffer, without requiring an actual bodily resurrection.',
        evidence: [
          { text: 'A range of sincere-but-mistaken explanatory models (hallucination, honest legendary development believed sincerely by later generations) remain compatible with willing martyrdom without requiring a literal bodily resurrection', strength: 'moderate', source: 'Standard critical rejoinder to the willingness-to-die argument' },
        ]
      }
    },
    {
      round: 4,
      forSide: {
        claim: 'The specific combination this argument targets is decisive precisely because it is not a "later generation sincerely believing an inherited legend" (which would not distinguish disciples from any later martyr for any religion) but the original eyewitnesses themselves — the very people in the best position to know whether they had truly seen the risen Jesus — dying for their own personal, first-person testimony. This is a historically distinct and rarer category than dying for an inherited belief, and it is precisely this category — sincere, informed, first-person eyewitness testimony maintained under mortal threat — for which the resurrection remains the best explanation, since it rules out both intentional fabrication and later inherited legend, leaving either an actual resurrection or an as-yet-unspecified psychological anomaly affecting multiple named, named eyewitnesses independently and repeatedly.',
        evidence: [
          { text: 'The argument specifically targets original eyewitnesses (Peter, James, Paul) testifying to their own personal, first-hand experience, not later generations inheriting a tradition — a historically distinguishable and rarer category of martyrdom', strength: 'strong', source: 'Habermas, The Historical Jesus, 1996' },
        ]
      },
      againstSide: {
        claim: 'Historical and cross-cultural evidence does show cases of individuals sincerely testifying to and even dying for extraordinary first-person experiences (visions, apparitions, unusual religious encounters) later widely regarded as most probably psychological rather than veridical, which suggests eyewitness sincerity under threat of death, however historically striking, cannot by itself rule out a natural (if not fully understood) psychological explanation, and the resurrection hypothesis remains, for the historian committed to methodological naturalism, the least parsimonious of the live explanations.',
        evidence: [
          { text: 'Documented cases across religious history of sincere first-person claims of extraordinary encounters, later assessed by most historians as probably psychological rather than veridical, suggest sincerity alone is not sufficient to establish an objective supernatural event', strength: 'moderate', source: 'Standard comparative religious-studies caution regarding testimonial claims of the miraculous' },
        ]
      }
    }
  ]
};

export const spreadOfChristianityDebate: Debate = {
  id: 'spread-of-christianity-debate',
  argumentId: 'spread-of-christianity',
  title: 'The Argument from the Spread of Christianity',
  forLabel: 'Christian Historian',
  againstLabel: 'Sociologist of Religion',
  rounds: [
    {
      round: 1,
      forSide: {
        claim: 'Christianity spread with remarkable, sociologically unusual speed — from a small group of Galilean followers to the dominant religion of the Roman Empire within roughly 300 years, without military force, political backing, or philosophical prestige, and beginning explosively in Jerusalem itself, the very city where the crucifixion occurred and counter-evidence (a body, an occupied tomb) would have been most accessible. This explosive origin in the most hostile possible location is best explained by the resurrection actually having occurred.',
        evidence: [
          { text: 'Rodney Stark\'s sociological modeling estimates Christian growth from roughly 1,000 believers in 40 CE to about 6 million by 300 CE, a growth rate of roughly 40% per decade — sociologically remarkable for a persecuted minority movement', strength: 'strong', source: 'Stark, The Rise of Christianity, 1996' },
          { text: 'Early Christianity attracted persecution rather than social or political prestige, unlike movements that spread via conquest or patronage', strength: 'moderate', source: 'Hurtado, Destroyer of the Gods, 2016' },
        ]
      },
      againstSide: {
        claim: 'Rapid religious growth from small beginnings, even under persecution, is not sociologically unique to Christianity — new religious movements throughout history (early Islam, Mormonism, various millenarian and messianic Jewish movements of the same era) have grown rapidly through ordinary sociological mechanisms (network recruitment, appealing communal structures, meaning-making in times of social upheaval) without requiring any miraculous originating event.',
        evidence: [
          { text: 'Sociological studies of new religious movements identify recurring, non-miraculous growth mechanisms — dense social networks, appealing communal identity, response to social dislocation — that can produce rapid growth from small beginnings', strength: 'moderate', source: 'Standard sociology of religion literature on new religious movement growth' },
        ]
      }
    },
    {
      round: 2,
      forSide: {
        claim: 'The comparison to other new religious movements does not hold at the specific point that matters most: other rapidly-growing movements typically either had access to political/military power fairly early (Islam\'s early conquests, Mormonism\'s westward migration and eventual accommodation) or arose in contexts where the founding claims could not be so readily checked against physically present, falsifiable evidence — Christianity uniquely proclaimed its central, checkable claim (a specific person\'s bodily resurrection, with an identifiable tomb) in the very city and time where that claim could have been immediately and decisively falsified by producing a body, yet the movement not only survived but exploded there first.',
        evidence: [
          { text: 'The earliest, most explosive phase of Christian growth (Acts, Paul\'s letters) occurred specifically in Jerusalem, where the tomb, potential witnesses, and Jewish and Roman authorities with strong motive to disprove the claim were all present and accessible', strength: 'strong', source: 'Craig, Assessing the New Testament Evidence, 1989' },
        ]
      },
      againstSide: {
        claim: 'The claim that Christianity grew "explosively" specifically in Jerusalem in the earliest years may itself be overstated by later, theologically-motivated sources like Acts, written decades after the events with clear apologetic aims — actual early growth may have been considerably more modest, gradual, and geographically dispersed (largely diaspora-based, following Paul\'s missionary networks) than the triumphant narrative in Acts suggests.',
        evidence: [
          { text: 'Acts, written by a Christian author with clear theological and apologetic purposes decades after the events described, is not a neutral sociological record and may present an idealized picture of the early Jerusalem church\'s size and growth rate', strength: 'moderate', source: 'Standard critical scholarship caution regarding the historical reliability of Acts as a growth narrative' },
        ]
      }
    },
    {
      round: 3,
      forSide: {
        claim: 'Even setting aside the specific growth figures in Acts as possibly idealized, the core datum required for the argument is more modest and secure: a Jerusalem-based Christian community, proclaiming a bodily resurrection of a recently and publicly executed man, existed and persisted in that very city within the lifetime of contemporaries who could check the claim — this minimal fact is independently corroborated by Paul\'s own letters (written within roughly 20 years of the crucifixion, describing a Jerusalem-based apostolic leadership including Peter and James) and does not depend on trusting Acts\' specific numerical claims.',
        evidence: [
          { text: 'Paul\'s letters (Galatians 1-2), written independently of and prior to Acts, confirm an established, recognized apostolic leadership (Peter, James) based in Jerusalem within roughly two decades of the crucifixion', strength: 'strong', source: 'Galatians 1:18-19, 2:1-10; standard critical scholarly dating of Galatians' },
        ]
      },
      againstSide: {
        claim: 'Granting a persistent Jerusalem community existed and made resurrection claims, mere persistence of a minority religious claim in the face of official skepticism is unremarkable and well-attested for many messianic and millenarian Jewish movements of the era (such as followers of other failed messianic claimants) that persisted for a time on the sincere conviction of adherents without their central claims being true — persistence of belief is not, by itself, strong evidence for the truth of the belief.',
        evidence: [
          { text: 'Other first-century Jewish messianic movements persisted for a time among sincere adherents despite the death (and non-vindication) of their founder-figures, showing sincere persistence alone does not require the movement\'s central claims to be true', strength: 'moderate', source: 'Standard historical comparison to other Second Temple messianic movements' },
        ]
      }
    },
    {
      round: 4,
      forSide: {
        claim: 'This comparison actually highlights, rather than undermines, the peculiarity of the Christian case: virtually every other messianic movement whose leader died without an accompanying resurrection claim either dissolved, transferred hope to a new leader, or reinterpreted the founder\'s death in non-resurrection terms — precisely because a crucified, defeated messiah was a category failure within first-century Jewish messianic expectation. Christianity alone, uniquely among these movements, responded to the shameful execution of its founder not by abandoning or reinterpreting the claim in more modest terms but by the specific, historically anomalous, costly claim of a bodily resurrection and exaltation — a response with no ready sociological precedent, best explained by the community\'s conviction being grounded in an actual experienced event rather than by the ordinary sociological pressures that led other messianic movements toward different, less costly adaptations.',
        evidence: [
          { text: 'Historian scholars (including non-Christian ones) have noted that no other failed messianic movement of the period responded to the leader\'s death with a resurrection claim; the standard responses were movement dissolution or transfer of messianic hope to a successor', strength: 'moderate', source: 'Wright, The Resurrection of the Son of God, 2003, on comparative Jewish messianism' },
        ]
      },
      againstSide: {
        claim: 'The uniqueness of the Christian response, even if sociologically striking, shows only that the earliest community\'s theological creativity and conviction were unusual — it does not, on its own, adjudicate between the resurrection actually happening and the community sincerely, if mistakenly, generating and then defending an unprecedented but false theological innovation under conditions of grief, cognitive dissonance, and charismatic leadership, a pattern documented in the sociological literature on failed-prophecy movements (cognitive dissonance reduction) even if the specific content differs from other cases.',
        evidence: [
          { text: 'Classic sociological studies of failed-prophecy and disconfirmation among religious movements document cases of communities generating novel, unprecedented theological reinterpretations under cognitive dissonance rather than abandoning their core commitment', strength: 'moderate', source: 'Festinger, Riecken & Schachter, When Prophecy Fails, 1956, applied by critical scholars to earliest Christianity' },
        ]
      }
    }
  ]
};

export const fulfilledProphecyDebate: Debate = {
  id: 'fulfilled-prophecy-debate',
  argumentId: 'fulfilled-prophecy',
  title: 'The Argument from Fulfilled Prophecy',
  forLabel: 'Christian Apologist',
  againstLabel: 'Critical Scholar',
  rounds: [
    {
      round: 1,
      forSide: {
        claim: 'The Hebrew scriptures contain detailed prophecies about the Messiah — birthplace, lineage, manner of entry into Jerusalem, betrayal price, mode of suffering and death, and resurrection — composed centuries before Jesus, as confirmed by the pre-Christian dating of the Dead Sea Scrolls. Jesus fulfilled many of these in ways he could not have deliberately orchestrated, making the probability of chance fulfillment vanishingly small and pointing to genuine divine foreknowledge.',
        evidence: [
          { text: 'The Dead Sea Scrolls (dated 250-68 BCE) confirm the major messianic prophetic texts, including Isaiah 53, predate Jesus by centuries, ruling out after-the-fact composition', strength: 'strong', source: 'Payne, Encyclopedia of Biblical Prophecy, 1973' },
          { text: 'Details such as soldiers casting lots for Jesus\' garments (Psalm 22:18) or his bones remaining unbroken (Psalm 34:20, John 19:36) were not under Jesus\' control and represent independently fulfilled specifics', strength: 'strong', source: 'Kaiser, The Messiah in the Old Testament, 1995' },
        ]
      },
      againstSide: {
        claim: 'Many of the specific fulfillments described in the Gospels appear precisely in the Gospel narrative details most plausibly explained as later theological composition shaped to match known Old Testament texts — the Gospel writers, working decades after the events and thoroughly steeped in Jewish scripture, had strong theological motive and literary opportunity to narrate details (or select which details to report) in ways that echoed familiar prophetic texts, whether or not those details occurred exactly as described.',
        evidence: [
          { text: 'Critical scholars note that several Gospel passion details closely track specific Psalm and prophetic language in ways suggesting the narrative may have been shaped, consciously or unconsciously, by the theological expectation of fulfillment', strength: 'moderate', source: 'Standard form-critical scholarship on Gospel passion narratives, e.g., discussions following Bultmann and subsequent redaction critics' },
        ]
      }
    },
    {
      round: 2,
      forSide: {
        claim: 'This "Gospel-shaped-to-fit-prophecy" explanation cannot account for the earliest and most historically secure evidence of all: the pre-Pauline creed in 1 Corinthians 15:3-4, dated by near-consensus to within two to five years of the crucifixion, states plainly that Christ died and was raised "according to the scriptures" — this terse, early formula already claims scriptural fulfillment without any of the narrative embellishment later form-critics attribute to the Gospels, showing the fulfillment claim was foundational from the very earliest post-crucifixion period, not a later literary gloss.',
        evidence: [
          { text: 'The 1 Corinthians 15:3-4 creed explicitly claims fulfillment "according to the scriptures" and is dated by the broad critical consensus (including many skeptical scholars) to within a few years of the crucifixion, predating any plausible narrative embellishment', strength: 'strong', source: 'Habermas & Licona, The Case for the Resurrection of Jesus, 2004' },
        ]
      },
      againstSide: {
        claim: 'The creed\'s general claim of scriptural fulfillment ("according to the scriptures") is a broad theological affirmation, not a specific claim about any particular detailed prophecy (such as thirty pieces of silver, or lots cast for garments); the general claim that Christ\'s death and resurrection fit within Israel\'s broader scriptural narrative is compatible with the more specific narrative details of individual fulfillments being later additions or embellishments by the Gospel writers, since the creed itself makes no reference to these specific details.',
        evidence: [
          { text: 'The creed\'s language is general and theological ("according to the scriptures"), while the specific, detailed point-by-point fulfillment claims apologists often cite come from the later Gospel narratives, not from this early creedal formula itself', strength: 'moderate', source: 'Standard critical scholarship distinguishing general creedal claims from specific narrative details' },
        ]
      }
    },
    {
      round: 3,
      forSide: {
        claim: 'Even granting this distinction between the general creedal claim and specific narrative details, several of the most striking specific fulfillments involve incidental details unlikely to be deliberately fabricated to match prophecy, because they are reported without any accompanying editorial comment drawing attention to the fulfillment — the Gospel of Mark, for instance, reports soldiers casting lots for Jesus\' garments (Mark 15:24) as a bare narrative detail, without an explicit "this was to fulfill" citation formula (unlike Matthew\'s more overtly theological citation style), suggesting the detail was reported because it happened, not primarily to satisfy a theological agenda.',
        evidence: [
          { text: 'Mark reports the casting of lots for garments (echoing Psalm 22:18) as a plain narrative detail without an explicit fulfillment-citation formula, differing from Matthew\'s more overt "this was to fulfill" pattern, suggesting incidental rather than constructed reporting', strength: 'moderate', source: 'Mark 15:24; comparative Gospel source-critical analysis' },
        ]
      },
      againstSide: {
        claim: 'The absence of an explicit citation formula does not rule out unconscious shaping: Gospel authors, deeply immersed in the Psalms and prophetic literature from childhood liturgical use, could easily describe or select events in scripturally-resonant language without consciously intending to "construct" a fulfillment — this kind of unintentional narrative shaping by a writer\'s scriptural imagination is a well-documented phenomenon in ancient historiography generally, and is a more economical explanation than either deliberate fabrication or genuine predictive prophecy.',
        evidence: [
          { text: 'Ancient historiography more broadly shows examples of authors describing events using culturally resonant, scripturally-echoing language without deliberate intent to fabricate, a recognized category distinct from either conscious invention or literal prediction', strength: 'moderate', source: 'Standard form-critical and redaction-critical methodology applied to Gospel composition' },
        ]
      }
    },
    {
      round: 4,
      forSide: {
        claim: 'This "unconscious shaping" explanation, while plausible for a small number of isolated details, becomes increasingly strained as an account of the full cumulative pattern: the convergence of specific, independently composed prophecies spanning different books, authors, and centuries (birthplace in Micah, manner of entry in Zechariah, mode of death anticipating a form of execution not practiced by Jews in Isaiah 53 and Psalm 22, precise betrayal price in Zechariah 11) onto a single historical figure is a pattern of convergence that unconscious narrative shaping by later authors struggles to explain in its totality, particularly for details (birthplace, ancestry, the specific mode of Roman crucifixion) that were fixed historical facts about Jesus\' actual life circumstances, not narratable choices available to the Gospel writers to freely shape.',
        evidence: [
          { text: 'Details such as birthplace (Bethlehem) and lineage (Davidic descent) were fixed biographical facts, not narrative choices the Gospel writers could freely alter to match prophecy after the fact, unlike incidental narrative details in the passion account', strength: 'strong', source: 'Edersheim, The Life and Times of Jesus the Messiah, 1883' },
        ]
      },
      againstSide: {
        claim: 'Precisely because birthplace and lineage carried such obvious messianic significance in Jewish expectation, these are exactly the details most likely to be theologically motivated claims (whether accurate or not) circulating in the earliest Christian community specifically because they were needed to support a messianic identification, rather than being independent, uncontestable historical facts — critical scholars have long noted, for instance, discrepancies between Matthew\'s and Luke\'s birth narratives that suggest theological construction around messianic expectations rather than straightforward historical reporting on this specific point.',
        evidence: [
          { text: 'Matthew\'s and Luke\'s birth narratives differ substantially in their details and are widely regarded by critical scholars as showing signs of theological construction around messianic expectations rather than straightforward independent historical reporting', strength: 'moderate', source: 'Standard critical scholarship on the Matthean and Lukan infancy narratives' },
        ]
      }
    }
  ]
};

export const ntManuscriptReliabilityDebate: Debate = {
  id: 'nt-manuscript-reliability-debate',
  argumentId: 'nt-manuscript-reliability',
  title: 'The Argument from NT Manuscript Reliability',
  forLabel: 'Textual Scholar (Conservative)',
  againstLabel: 'Textual Critic (Skeptical)',
  rounds: [
    {
      round: 1,
      forSide: {
        claim: 'The New Testament is attested by over 5,800 Greek manuscripts, dwarfing the manuscript support for any other ancient document, with the earliest fragments dating within decades of the originals. Textual critics estimate roughly 99.5% of the text is established beyond reasonable doubt, with no core Christian doctrine resting on a disputed reading — establishing that we read essentially what the original authors wrote.',
        evidence: [
          { text: 'By comparison, Caesar\'s Gallic Wars survives in only 10 manuscripts with the earliest copy 900 years after Caesar, while the NT survives in thousands of manuscripts with fragments dating to within decades of composition (e.g., P52, c. 125 CE)', strength: 'strong', source: 'Bruce, The New Testament Documents: Are They Reliable?, 1943' },
          { text: 'Even Bart Ehrman, a prominent critical scholar of textual variants, concedes that none of the roughly 400,000 known variants affects any core Christian doctrine', strength: 'strong', source: 'Wallace, ed., Revisiting the Corruption of the New Testament, 2011' },
        ]
      },
      againstSide: {
        claim: 'The sheer number of manuscripts is not itself evidence of accuracy — it is evidence of extensive copying, and more copying over centuries by scribes of varying skill and theological commitment produces more opportunities for both accidental error and, in some documented cases, intentional theological alteration; quantity of manuscripts and quality/accuracy of the underlying text are distinct questions that apologetic arguments often conflate.',
        evidence: [
          { text: 'Bart Ehrman\'s scholarship on textual variants (e.g., "The Orthodox Corruption of Scripture") documents specific cases where scribes appear to have altered the text for theological reasons, showing quantity of manuscripts does not by itself guarantee an unaltered text', strength: 'moderate', source: 'Ehrman, The Orthodox Corruption of Scripture, 1993' },
        ]
      }
    },
    {
      round: 2,
      forSide: {
        claim: 'This is precisely why manuscript quantity matters for textual reconstruction: a larger, more geographically and chronologically diverse manuscript tradition allows textual critics to cross-check variants against each other and identify where and when alterations were introduced, using the standard tools of textual criticism (external evidence of date and manuscript families, internal evidence of scribal tendencies) — this is the opposite of a liability; a document surviving in only one or two manuscripts (like Tacitus\'s Annals) cannot be cross-checked at all, making its transmission history far less verifiable, not more secure.',
        evidence: [
          { text: 'Textual critics use the breadth and diversity of the manuscript tradition specifically to identify and correct for scribal alterations by comparing manuscript families across regions and eras — a method unavailable for texts surviving in only a handful of copies', strength: 'strong', source: 'Metzger, The Text of the New Testament, 1992' },
        ]
      },
      againstSide: {
        claim: 'Even granting the methodological value of a large manuscript base for identifying variants, Ehrman\'s own documented cases of theologically-motivated scribal alteration (e.g., changes to texts touching on Christ\'s divinity or the Trinity in disputed passages) show that at least some portions of the tradition were shaped by later doctrinal disputes, meaning the 99.5% certainty figure, while broadly accurate for most of the text, should not be read as implying complete confidence about every theologically significant passage.',
        evidence: [
          { text: 'Specific documented cases (such as the Comma Johanneum or textual variants at 1 Timothy 3:16) show demonstrable theologically-motivated scribal changes in the transmission history at particular disputed points', strength: 'moderate', source: 'Ehrman, The Orthodox Corruption of Scripture, 1993' },
        ]
      }
    },
    {
      round: 3,
      forSide: {
        claim: 'The specific cases Ehrman and others identify (such as the Comma Johanneum, a Trinitarian gloss absent from the earliest manuscripts and universally recognized as a later addition in modern critical editions) are precisely evidence of the method working correctly, not failing: modern critical Greek New Testaments (Nestle-Aland, UBS) explicitly flag and typically exclude these known later insertions from the primary text, based on exactly the manuscript-comparison method described above. The identified cases of alteration are the known exceptions that prove the rule — they are identified and corrected precisely because the manuscript tradition is broad enough to expose them.',
        evidence: [
          { text: 'The Comma Johanneum is universally recognized as a later addition by modern textual critics and is excluded from or bracketed in all critical editions of the Greek New Testament, demonstrating the corrective power of the broad manuscript tradition', strength: 'strong', source: 'Metzger, The Text of the New Testament, 1992' },
        ]
      },
      againstSide: {
        claim: 'The fact that some alterations have been successfully identified and corrected does not establish that all significant alterations have been — the text-critical method can only identify variants that left a detectable trace in the surviving manuscript tradition; alterations that were made early enough, or thoroughly enough, to leave no surviving witness to the original reading would be, by definition, undetectable by this method, leaving open the possibility of undetected early corruption at points we cannot now identify.',
        evidence: [
          { text: 'Textual criticism can only reconstruct readings attested in the surviving manuscript record; any alteration occurring prior to the earliest surviving witnesses, leaving no trace, is in principle undetectable by the comparative method', strength: 'moderate', source: 'Standard methodological limitation acknowledged within textual criticism itself' },
        ]
      }
    },
    {
      round: 4,
      forSide: {
        claim: 'This is a theoretically possible but practically minimal concern given the specific evidence available for the New Testament: papyrus fragments like P52 (c. 125 CE) and P66/P75 (late 2nd century) place substantial portions of the text within one to two generations of the autographs, well within the lifetime of communities (and in some cases eyewitnesses or their direct successors) who would have had access to and knowledge of the original apostolic teaching, making large-scale undetected early corruption implausible — this is a categorically stronger position than virtually any other ancient text, for which such early manuscript evidence simply does not exist, and by which classical historians nonetheless confidently reconstruct works like Homer, Plato, or Thucydides.',
        evidence: [
          { text: 'Papyrus P52, dated to roughly 125 CE, places a fragment of John\'s Gospel within 30-35 years of its likely composition, an extraordinarily narrow window by the standards of ancient manuscript transmission generally', strength: 'strong', source: 'Bruce, The New Testament Documents, 1943' },
          { text: 'Classical historians work confidently with texts like Homer and Thucydides despite manuscript gaps of centuries to a millennium, a standard far less rigorous than what the New Testament manuscript tradition actually provides', strength: 'moderate', source: 'Wallace, ed., Revisiting the Corruption of the New Testament, 2011' },
        ]
      },
      againstSide: {
        claim: 'Comparing the New Testament favorably to classical texts with even sparser manuscript evidence sets a relatively low bar and does not resolve the specific question of theological reliability that matters for apologetic purposes — classicists do not typically stake significant theological or metaphysical claims on getting every word of Thucydides exactly right, whereas claims about Christ\'s specific words and deeds carry much higher evidentiary stakes, for which even a small number of theologically consequential uncertain passages matters far more than it would for a secular historical text.',
        evidence: [
          { text: 'The evidentiary bar appropriate for reconstructing a general historical narrative (as with classical texts) may reasonably be lower than the bar required to support specific, doctrinally significant theological claims resting on precise wording', strength: 'moderate', source: 'Standard methodological point about differing evidentiary stakes between historical and theological claims' },
        ]
      }
    }
  ]
};

export const historicityOfJesusDebate: Debate = {
  id: 'historicity-of-jesus-debate',
  argumentId: 'historicity-of-jesus',
  title: 'The Argument from the Historicity of Jesus',
  forLabel: 'Historian',
  againstLabel: 'Mythicist',
  rounds: [
    {
      round: 1,
      forSide: {
        claim: 'The existence of Jesus of Nazareth as a historical figure is confirmed by multiple independent ancient sources — Paul\'s own letters (mentioning James "the Lord\'s brother" and Peter, direct companions of the historical Jesus), Josephus, and Tacitus — and is accepted even by secular historians hostile to Christian apologetics, such as Bart Ehrman, who wrote an entire book refuting mythicism from an agnostic perspective.',
        evidence: [
          { text: 'Paul\'s letters, unanimously accepted as authentic by critical scholars, mention personally meeting James "the Lord\'s brother" and Peter (Gal. 1:18-19), direct personal contacts with the historical Jesus\' inner circle within a few years of the crucifixion', strength: 'strong', source: 'Galatians 1:18-19' },
          { text: 'Josephus\'s reference to "James the brother of Jesus called Christ" (Antiquities 20.9.1) is regarded as authentic by the near-universal consensus of critical scholars, including non-Christian ones', strength: 'strong', source: 'Ehrman, Did Jesus Exist?, 2012' },
        ]
      },
      againstSide: {
        claim: 'Mythicist scholars argue that the earliest layer of Christian evidence (Paul\'s letters) describes a largely celestial, cosmic Christ figure known primarily through scripture and revelation rather than through eyewitness memory of a recent historical person, and that the later Gospel "biography" of an earthly Jesus of Nazareth may represent a subsequent euhemerization of an originally mythic or heavenly figure, similar to patterns seen in some other ancient savior-cult traditions.',
        evidence: [
          { text: 'Paul rarely mentions specific biographical or teaching details about the earthly life of Jesus, focusing overwhelmingly on the cosmic significance of his death and resurrection, which some mythicist scholars argue is consistent with an originally non-historical, celestial redeemer figure', strength: 'contested', source: 'Mythicist scholarship, e.g., Doherty, Carrier' },
        ]
      }
    },
    {
      round: 2,
      forSide: {
        claim: 'This reading is rejected by virtually the entire field of professional New Testament and classical historians, including committed skeptics of Christianity specifically because it does not fit the evidence: Paul explicitly describes Jesus as "born of a woman, born under the law" (Gal. 4:4), as a physical descendant of David (Rom. 1:3), and as having been betrayed "on the night he was handed over" (1 Cor. 11:23) — concrete biographical claims about a recent, specific historical human being, not the language used of purely mythical, non-historical savior figures in other ancient traditions.',
        evidence: [
          { text: 'Paul explicitly describes Jesus in concrete biographical and genealogical terms ("born of a woman," "descendant of David," betrayed "on the night he was handed over"), language inconsistent with a purely mythical, non-historical figure', strength: 'strong', source: 'Galatians 4:4; Romans 1:3; 1 Corinthians 11:23' },
          { text: 'Mythicism is regarded as a fringe position essentially unanimously rejected by professional historians and biblical scholars across the religious spectrum, including outspoken atheist and agnostic scholars', strength: 'strong', source: 'Ehrman, Did Jesus Exist?, 2012' },
        ]
      },
      againstSide: {
        claim: 'The near-unanimous rejection of mythicism by professional scholars, while a legitimate consideration, is not itself decisive evidence — expert consensus can in principle be wrong, and mythicist proponents argue that mainstream biblical scholarship has an institutional and cultural bias toward assuming historicity that has not been adequately tested against the alternative hypothesis with full rigor.',
        evidence: [
          { text: 'Mythicist writers argue that mainstream New Testament scholarship\'s historical assumptions have gone relatively unchallenged for so long that alternative hypotheses have not received the same rigorous scrutiny as the standard historicist position', strength: 'contested', source: 'Mythicist scholarship, e.g., Carrier, On the Historicity of Jesus, 2014' },
        ]
      }
    },
    {
      round: 3,
      forSide: {
        claim: 'This is not merely an appeal to authority but reflects the actual weight of the primary evidence when evaluated by the standard tools of ancient historiography: the criterion of multiple independent attestation (Paul, Mark, Josephus, Tacitus, all writing independently and using different genres and purposes), the criterion of embarrassment (a crucified messiah was a scandal, not something Jewish or early Christian communities would invent, as Paul himself acknowledges calling it "a stumbling block to Jews," 1 Cor. 1:23), and the near-total absence of any competing "Jesus never existed" tradition anywhere in the extensive early opposition literature (Jewish, pagan, or Gnostic), which attacked Christianity vigorously on many other grounds but never on the grounds that its founder was fictional.',
        evidence: [
          { text: 'Ancient opponents of Christianity (Celsus, later Jewish polemics, various pagan critics) attacked the movement on numerous grounds but never argued that Jesus himself was a purely fictional or non-historical figure, which would have been an obvious and devastating line of attack had it been credible', strength: 'strong', source: 'Meier, A Marginal Jew, Vol. 1, 1991' },
          { text: 'The crucifixion of the messianic claimant was a profound scandal and embarrassment within first-century Jewish messianic expectation, making it highly unlikely to have been invented rather than reported because it happened', strength: 'moderate', source: '1 Corinthians 1:23' },
        ]
      },
      againstSide: {
        claim: 'The absence of an explicit "Jesus never existed" counter-tradition in surviving ancient polemical literature may simply reflect that ancient critics, operating in a pre-critical historiographical context, had no reason to question the bare existence of a relatively obscure regional preacher and instead focused their attacks on the more theologically consequential claims (his divinity, his resurrection) — this silence is therefore not strong positive evidence for historicity, since ancient polemicists were not investigating the question in the way modern historians would.',
        evidence: [
          { text: 'Ancient polemical literature generally focused on theological rather than basic-existence questions, limiting how much weight can be placed on the absence of an explicit denial of Jesus\' bare existence', strength: 'moderate', source: 'Standard historiographical caution regarding ancient polemical priorities' },
        ]
      }
    },
    {
      round: 4,
      forSide: {
        claim: 'Even granting this caution about ancient polemical priorities, the cumulative case for historicity does not rest on this silence alone but converges from several independent angles simultaneously — non-Christian sources (Josephus, Tacitus) writing without any concern for Christian theological disputes nonetheless casually treat Jesus\' existence and crucifixion as unremarkable historical background fact, exactly as one would expect for a real, if regionally minor, historical figure, and precisely unlike the pattern we would expect if his existence itself were a live question even among early skeptical outsiders. The convergence of multiple, independent, non-apologetically-motivated lines of evidence is what leads even historians strongly opposed to Christian theological claims, like Ehrman, to reject mythicism decisively while still rejecting the resurrection and other supernatural claims.',
        evidence: [
          { text: 'Tacitus, writing as a Roman historian with no theological stake in the matter, casually mentions "Christus" suffering execution under Pontius Pilate as unremarkable background historical fact, exactly the pattern expected of a genuine, if minor, historical figure', strength: 'strong', source: 'Tacitus, Annals 15.44' },
          { text: 'Bart Ehrman, an agnostic scholar with no motive to defend Christian apologetics, nonetheless concludes decisively that Jesus was a real historical figure while continuing to reject the resurrection and other supernatural claims, illustrating that historicity and the truth of supernatural claims are separable questions', strength: 'strong', source: 'Ehrman, Did Jesus Exist?, 2012' },
        ]
      },
      againstSide: {
        claim: 'This converging case, while sufficient to establish the historicity of Jesus as a real figure — which most serious critics of Christianity, including this debate\'s own position, do not ultimately dispute — establishes considerably less than Christian apologists often wish to draw from it: historicity of the man tells us nothing by itself about the truth of the later theological claims (divinity, resurrection, virgin birth) built upon that historical core, which require separate and much stronger evidence than mere existence.',
        evidence: [
          { text: 'The gap between "Jesus existed as a historical figure" and "Jesus was divine and rose bodily from the dead" is considerable, and establishing the former does not by itself advance the case for the latter, more theologically loaded claims', strength: 'moderate', source: 'Standard distinction maintained even by scholars, like Ehrman, who affirm historicity while rejecting the supernatural claims' },
        ]
      }
    }
  ]
};

export const minimalFactsDebate: Debate = {
  id: 'minimal-facts-debate',
  argumentId: 'minimal-facts',
  title: 'The Minimal Facts Argument for the Resurrection',
  forLabel: 'Christian Apologist',
  againstLabel: 'Skeptical Scholar',
  rounds: [
    {
      round: 1,
      forSide: {
        claim: 'Using only facts accepted by the vast majority of scholars studying the subject, including skeptics — Jesus\' death by crucifixion, the disciples\' experiences they believed were resurrection appearances, the sudden conversions of the persecutor Paul and the skeptic James, and the discovery of the empty tomb — the bodily resurrection of Jesus emerges as the explanation that accounts for all the data simultaneously, better than any naturalistic alternative.',
        evidence: [
          { text: 'The minimal facts methodology, developed by Gary Habermas, restricts itself specifically to data points accepted by the wide majority of scholars including skeptics, making the resulting argument difficult to dismiss as relying on contested or faith-based premises', strength: 'strong', source: 'Habermas, The Risen Jesus and Future Hope, 2003' },
          { text: 'Alternative naturalistic explanations (hallucination, conspiracy, swoon, legend) each fail to account for the full convergence of facts, while the resurrection hypothesis explains all of them simultaneously', strength: 'strong', source: 'Habermas & Licona, The Case for the Resurrection of Jesus, 2004' },
        ]
      },
      againstSide: {
        claim: 'The minimal facts approach, while methodologically appealing, still frontloads a specific and contestable list of "facts" (particularly the empty tomb, and the specific characterization of James as a prior "skeptic") that are not, in fact, universally accepted even among mainstream non-evangelical critical scholars — the claimed scholarly consensus is narrower and more contested than popular apologetic presentations suggest.',
        evidence: [
          { text: 'Some critical scholars (e.g., Gerd Lüdemann) accept the disciples\' sincere conviction of having experienced appearances while explicitly rejecting the empty tomb as a later legendary development, showing the "minimal facts" list is not as universally agreed upon as claimed', strength: 'moderate', source: 'Lüdemann, The Resurrection of Jesus, 1994' },
        ]
      }
    },
    {
      round: 2,
      forSide: {
        claim: 'Habermas\'s own extensive survey of over 2,200 scholarly sources (including skeptical ones) across several languages found the empty tomb affirmed by roughly 75% of scholars who addressed the question — while not unanimous, this represents a strong majority position among specialists, meeting the "minimal facts" criterion of broad (not universal) scholarly acceptance, and Lüdemann\'s dissent is a recognized minority position within, not outside, this majority-consensus framework.',
        evidence: [
          { text: 'Habermas\'s survey of the scholarly literature on the resurrection found the empty tomb affirmed by a clear majority (roughly three out of four) of scholars addressing the question, including many non-evangelical and skeptical scholars', strength: 'strong', source: 'Habermas, "Experiences of the Risen Jesus," 2005, summarizing his scholarly survey' },
        ]
      },
      againstSide: {
        claim: 'A majority position, even a strong one, is not the same standard as the near-universal consensus the "minimal facts" branding implies, and the specific figures cited depend heavily on how the underlying survey defined and counted "scholars addressing the question" — a methodological point that has itself been disputed, since it is not always clear the survey adequately distinguished between evangelical and non-evangelical scholarly opinion in tallying the percentages.',
        evidence: [
          { text: 'Critics of the minimal facts survey methodology have questioned how consistently "scholars" were defined and whether the sample adequately distinguished evangelical from broader critical scholarly opinion', strength: 'moderate', source: 'Standard methodological critique of survey-based consensus claims in apologetics' },
        ]
      }
    },
    {
      round: 3,
      forSide: {
        claim: 'Even granting legitimate debate about the precise percentage, the core methodological strength of the minimal facts approach does not depend on any single contested figure: it depends on the convergence of multiple, independently-attested facts (crucifixion, the disciples\' sincere conviction of appearances, Paul\'s conversion, James\'s conversion) that remain robust across nearly the entire spectrum of critical scholarship, skeptical or otherwise — and even without the empty tomb specifically, Habermas has shown the resurrection hypothesis remains the best explanation for the remaining, even more broadly agreed-upon facts (the appearances and the conversions of a hostile persecutor and a family skeptic).',
        evidence: [
          { text: 'Habermas explicitly notes his argument can proceed even granting only the more narrowly and broadly agreed facts (excluding the empty tomb if necessary), since the appearances and the specific conversions of Paul and James remain difficult for naturalistic theories to explain even without appeal to the tomb', strength: 'strong', source: 'Habermas, The Risen Jesus and Future Hope, 2003' },
        ]
      },
      againstSide: {
        claim: 'Removing the empty tomb from the argument significantly weakens its force, since without a vacated tomb the "appearances" data becomes considerably more compatible with purely visionary or hallucinatory experiences (as scholars like Lüdemann argue) — the empty tomb is precisely the datum that makes a merely subjective, visionary explanation harder to sustain, so conceding its contested status is not a minor adjustment but removes much of what distinguishes the resurrection hypothesis from a naturalistic visionary-experience account.',
        evidence: [
          { text: 'Lüdemann and similar critical scholars argue that granting sincere visionary experiences without an accompanying empty tomb allows the entire resurrection tradition to be explained through a subjective-vision model without requiring an actual bodily resurrection', strength: 'moderate', source: 'Lüdemann, The Resurrection of Jesus, 1994' },
        ]
      }
    },
    {
      round: 4,
      forSide: {
        claim: 'This is precisely why the minimal facts approach draws its strength from the convergence of several independent facts together, not any single one in isolation: even setting the empty tomb aside for the sake of argument, a purely visionary/hallucination account still must explain group appearances to multiple people simultaneously (which hallucination theory struggles to do, since hallucinations are private psychological events not naturally shared identically by groups), the specific conversion of a hostile persecutor with every motive to disbelieve, and the specific conversion of a family skeptic (James) who had known Jesus his whole life and had no prior sympathy for his messianic claims. The resurrection hypothesis uniquely explains this full convergence; each naturalistic alternative explains at most one or two of the facts while leaving the others unaccounted for.',
        evidence: [
          { text: 'Group hallucinations, in which multiple individuals independently experience the identical detailed content simultaneously, are not a recognized phenomenon in the clinical psychological literature, making a hallucination account of the group appearances (500 people, the Twelve) particularly weak', strength: 'strong', source: 'Habermas & Licona, The Case for the Resurrection of Jesus, 2004' },
          { text: 'The specific, simultaneous conversion of both a hostile persecutor (Paul) and a family skeptic (James) alongside the group appearances presents a convergence that purely psychological/visionary theories address individually but not comprehensively as a unified set', strength: 'moderate', source: 'Habermas, The Risen Jesus and Future Hope, 2003' },
        ]
      },
      againstSide: {
        claim: 'A cumulative case built from several individually-contested facts does not automatically become stronger than its individual components — if each component (the empty tomb, the nature of "group" experiences, the precise psychological state of Paul and James at conversion) remains independently disputable among specialists, then the cumulative "convergence" argument inherits rather than resolves that underlying uncertainty, and reasonable, informed historians (including some who fully grant the disciples\' sincerity) continue to find naturalistic explanations, however individually imperfect, more probable than a unique, historically unparalleled bodily resurrection, given the extraordinarily low prior probability such an event carries against the uniform background of human experience.',
        evidence: [
          { text: 'Historians working within a methodologically naturalistic framework generally weigh even an imperfect naturalistic explanation as more probable than a maximally improbable miraculous event, given Bayesian considerations about extraordinarily low prior probabilities for events without parallel in ordinary experience', strength: 'moderate', source: 'Standard Humean/Bayesian historiographical objection to miracle claims' },
        ]
      }
    }
  ]
};

export const historicalDebates: Record<string, Debate> = {
  'paul-damascus-conversion': paulDamascusConversionDebate,
  'empty-tomb': emptyTombDebate,
  'disciples-willingness-to-die': disciplesWillingnessToDieDebate,
  'spread-of-christianity': spreadOfChristianityDebate,
  'fulfilled-prophecy': fulfilledProphecyDebate,
  'nt-manuscript-reliability': ntManuscriptReliabilityDebate,
  'historicity-of-jesus': historicityOfJesusDebate,
  'minimal-facts': minimalFactsDebate,
};
