import { TreeNode } from '../arguments/types';

export const minimalFactsTree: TreeNode = {
  id: 'mf-root',
  type: 'argument',
  text: 'The Minimal Facts Argument for the Resurrection',
  children: [
    {
      id: 'mf-conclusion',
      type: 'conclusion',
      text: "Therefore, God raised Jesus from the dead, confirming Jesus's divine claims and the truth of Christianity",
      children: []
    },
    {
      id: 'mf-p1',
      type: 'premise',
      text: "Five minimal facts are accepted by the vast majority of historical scholars, including skeptics: Jesus died by crucifixion; the disciples had experiences they believed were appearances of the risen Jesus; the persecutor Paul was suddenly converted; the skeptic James (Jesus's brother) was suddenly converted; the tomb was found empty",
      status: 'granted',
      children: [
        {
          id: 'mf-p1-s1',
          type: 'support',
          text: "These facts are established by multiple independent sources — Paul's letters, the Gospels, Acts, Josephus, and Tacitus — converging on the same core data",
          sources: ['Habermas, The Risen Jesus and Future Hope (2003)']
        },
        {
          id: 'mf-p1-s2',
          type: 'support',
          text: "The criterion of embarrassment strengthens several facts: women are named as the first witnesses to the empty tomb, and James was a prior skeptic, both unlikely details for anyone inventing a persuasive legend",
          sources: ['Licona, The Resurrection of Jesus: A New Historiographical Approach (2010)']
        },
        {
          id: 'mf-p1-s3',
          type: 'support',
          text: "Enemy attestation corroborates the empty tomb — the Jewish authorities' claim that the body was stolen implicitly concedes the tomb was empty — while the disciples' transformation from fearful fugitives to bold proclaimers willing to die for their testimony corroborates the sincerity of their experiences",
          sources: ['Habermas, The Risen Jesus and Future Hope (2003)']
        }
      ]
    },
    {
      id: 'mf-p2',
      type: 'premise',
      text: 'The best explanation for these minimal facts is that God raised Jesus from the dead',
      status: 'defended',
      children: [
        {
          id: 'mf-p2-s1',
          type: 'support',
          text: 'Hallucination theory fails: hallucinations are private, individual events with no known mechanism for a group to share the same experience simultaneously, and hallucinations do not explain the empty tomb',
          sources: ['Habermas & Licona, The Case for the Resurrection of Jesus (2004)']
        },
        {
          id: 'mf-p2-s2',
          type: 'support',
          text: 'Conspiracy theory fails: it requires the disciples to be tortured and killed for a claim they knew to be a lie, a pattern of behavior without clear parallel in human psychology',
          sources: ['Habermas & Licona, The Case for the Resurrection of Jesus (2004)']
        },
        {
          id: 'mf-p2-s3',
          type: 'support',
          text: 'Swoon and legend theories fail: medical evidence rules out surviving Roman scourging and crucifixion to appear as a triumphant risen figure, and the early dating of the 1 Corinthians 15 creed — within two to five years of the crucifixion — leaves no time for legendary development',
          sources: ['Wright, The Resurrection of the Son of God (2003)']
        },
        {
          id: 'mf-p2-obj1',
          type: 'objection',
          text: 'The disciples experienced grief hallucinations or religious ecstasy that they interpreted as seeing the risen Jesus',
          children: [
            {
              id: 'mf-p2-obj1-r1',
              type: 'response',
              text: 'Hallucinations are private, individual psychological events; there is no known mechanism for a group of people to share the same hallucination simultaneously',
              sources: ['Habermas, The Risen Jesus and Future Hope (2003)']
            },
            {
              id: 'mf-p2-obj1-r2',
              type: 'response',
              text: 'Paul was hostile rather than grieving, and James was a prior skeptic — neither fits the psychological profile that produces hallucinations, and hallucination cannot explain the empty tomb or the fact that Jewish theology had no expectation of an individual bodily resurrection in the middle of history',
              sources: ['Licona (2010)']
            }
          ]
        }
      ]
    }
  ]
};

export const emptyTombTree: TreeNode = {
  id: 'et-root',
  type: 'argument',
  text: 'The Argument from the Empty Tomb',
  children: [
    {
      id: 'et-conclusion',
      type: 'conclusion',
      text: 'The best explanation for an empty tomb, resurrection appearances, and transformed disciples is that the tomb was empty because Jesus was raised',
      children: []
    },
    {
      id: 'et-p1',
      type: 'premise',
      text: 'Multiple independent sources attest that the tomb of Jesus was found empty on the third day',
      status: 'defended',
      children: [
        {
          id: 'et-p1-s1',
          type: 'support',
          text: 'The empty tomb tradition is multiply and independently attested — in Mark (the earliest Gospel), in the pre-Pauline creed of 1 Corinthians 15:4 ("he was buried... he was raised"), and again in Matthew, Luke, and John',
          sources: ['Wright, The Resurrection of the Son of God (2003)']
        },
        {
          id: 'et-p1-s2',
          type: 'support',
          text: 'The criterion of embarrassment strengthens the tradition: all four Gospels name women as the first witnesses, whose testimony was legally devalued in first-century Jewish and Greco-Roman courts — an unlikely detail for anyone fabricating a persuasive legend to invent',
          sources: ['Craig, Assessing the NT Evidence for the Resurrection (1989)']
        },
        {
          id: 'et-p1-obj1',
          type: 'objection',
          text: 'The women mistakenly visited the wrong tomb (the Kirsopp Lake theory)',
          children: [
            {
              id: 'et-p1-obj1-r1',
              type: 'response',
              text: 'This does not explain why the Jewish authorities, who certainly knew the correct tomb, never simply corrected the mistake and produced the body; it also leaves the resurrection appearances entirely unexplained',
              sources: ['Wright, The Resurrection of the Son of God (2003)']
            }
          ]
        }
      ]
    },
    {
      id: 'et-p2',
      type: 'premise',
      text: "The Jewish authorities' response — bribing the guards to say the disciples stole the body — presupposes an empty tomb; they never produced a body",
      status: 'defended',
      children: [
        {
          id: 'et-p2-s1',
          type: 'support',
          text: "The oldest recorded Jewish response to the resurrection proclamation (Matt. 28:12-15) — bribing the guards to claim the disciples stole the body — concedes the tomb's emptiness rather than disputing it",
          sources: ['Craig, Assessing the NT Evidence for the Resurrection (1989)']
        },
        {
          id: 'et-p2-s2',
          type: 'support',
          text: 'If the tomb were not empty, the authorities — who had every motive and means to end the movement in the very city where it began — could simply have produced the body or pointed to the correct tomb; their silence instead is powerful evidence',
          sources: ['Licona, The Resurrection of Jesus (2010)']
        },
        {
          id: 'et-p2-obj1',
          type: 'objection',
          text: 'Someone moved or stole the body',
          children: [
            {
              id: 'et-p2-obj1-r1',
              type: 'response',
              text: 'The disciples-stole-the-body theory is the oldest alternative, but it does not explain their subsequent willingness to die for what would then be a known lie, nor does it account for the resurrection appearances',
              sources: ['Habermas & Licona, The Case for the Resurrection (2004)']
            },
            {
              id: 'et-p2-obj1-r2',
              type: 'response',
              text: 'Joseph of Arimathea secretly moving the body is equally implausible — such an act would be nearly impossible to keep hidden under the intense scrutiny of early persecution',
              sources: ['Habermas & Licona, The Case for the Resurrection (2004)']
            }
          ]
        }
      ]
    }
  ]
};

export const disciplesWillingnessToDieTree: TreeNode = {
  id: 'dtd-root',
  type: 'argument',
  text: "The Argument from the Disciples' Willingness to Die",
  children: [
    {
      id: 'dtd-conclusion',
      type: 'conclusion',
      text: 'The disciples genuinely believed they had seen the risen Jesus — which is best explained by the resurrection actually occurring',
      children: []
    },
    {
      id: 'dtd-p1',
      type: 'premise',
      text: 'The original disciples — Peter, James, Paul, and others — suffered persecution, imprisonment, torture, and death for their testimony that Jesus rose from the dead',
      status: 'defended',
      children: [
        {
          id: 'dtd-p1-s1',
          type: 'support',
          text: "Peter's crucifixion (Clement of Rome, Tertullian), James the son of Zebedee's beheading (Acts 12), and James the brother of Jesus's death (Josephus, Antiquities 20.9.1) are each attested by independent sources",
          sources: ['McDowell, The Fate of the Apostles (2015)']
        },
        {
          id: 'dtd-p1-s2',
          type: 'support',
          text: "Paul's own undisputed letters independently catalogue his extensive suffering — floggings, imprisonments, shipwrecks, constant danger — apart from any later martyrdom tradition",
          sources: ['Habermas, The Historical Jesus (1996)']
        },
        {
          id: 'dtd-p1-obj1',
          type: 'objection',
          text: 'The martyrdom traditions are late and unreliable, so we do not know the disciples died for this specifically',
          children: [
            {
              id: 'dtd-p1-obj1-r1',
              type: 'response',
              text: "McDowell's comprehensive scholarly survey rates the historical evidence as strong specifically for Peter, both men named James, and Paul",
              sources: ['McDowell, The Fate of the Apostles (2015)']
            },
            {
              id: 'dtd-p1-obj1-r2',
              type: 'response',
              text: "More importantly, the willingness to suffer — floggings, imprisonment, exile — is attested directly in Paul's own letters written within decades of the events, independent of any martyrdom tradition",
              sources: ['McDowell, The Fate of the Apostles (2015)']
            }
          ]
        }
      ]
    },
    {
      id: 'dtd-p2',
      type: 'premise',
      text: 'People sometimes die for beliefs they hold sincerely but incorrectly; but no one willingly dies for what they know to be a deliberate fabrication',
      status: 'defended',
      children: [
        {
          id: 'dtd-p2-s1',
          type: 'support',
          text: 'The disciples were not dying for an inherited creed but for a first-person factual claim about an event they said they personally witnessed — that they had seen, touched, and eaten with the risen Jesus',
          sources: ['McDowell, The Fate of the Apostles (2015)']
        },
        {
          id: 'dtd-p2-s2',
          type: 'support',
          text: 'To maintain a claim under torture and threat of execution that one privately knows to be a deliberate fabrication is a pattern without clear parallel in human psychology; their consistent testimony under coercion is best explained by genuine conviction',
          sources: ['Habermas & Licona, The Case for the Resurrection (2004)']
        },
        {
          id: 'dtd-p2-obj1',
          type: 'objection',
          text: 'History is full of martyrs for false causes; sincerity does not prove truth',
          children: [
            {
              id: 'dtd-p2-obj1-r1',
              type: 'response',
              text: 'Other religious martyrs die for beliefs held on inherited testimony or faith, never for a first-person claim about what they themselves personally witnessed; dying for a known-false eyewitness claim is psychologically unprecedented',
              sources: ['Habermas & Licona, The Case for the Resurrection (2004)']
            }
          ]
        }
      ]
    }
  ]
};

export const paulDamascusConversionTree: TreeNode = {
  id: 'paul-root',
  type: 'argument',
  text: "The Argument from Paul's Damascus Road Conversion",
  children: [
    {
      id: 'paul-conclusion',
      type: 'conclusion',
      text: "The best explanation for a hostile witness's sudden total reversal — from persecutor to martyr — is that he genuinely encountered the risen Christ",
      children: []
    },
    {
      id: 'paul-p1',
      type: 'premise',
      text: 'Paul was a zealous persecutor of Christians who consented to their execution',
      status: 'defended',
      children: [
        {
          id: 'paul-p1-s1',
          type: 'support',
          text: 'Paul\'s own letters attest his persecution against his own interest — "I persecuted the church of God violently and tried to destroy it" (Gal. 1:13) — a claim strengthened by the criterion of embarrassment',
          sources: ['Galatians 1:13–14']
        },
        {
          id: 'paul-p1-s2',
          type: 'support',
          text: "Acts independently places him at Stephen's stoning, corroborating his active role in persecuting the early church",
          sources: ['Acts 7:58']
        },
        {
          id: 'paul-p1-obj1',
          type: 'objection',
          text: "Paul's account is self-serving — he wrote his own letters, and we have no independent confirmation",
          children: [
            {
              id: 'paul-p1-obj1-r1',
              type: 'response',
              text: "Paul's admission of his own persecution of the church is a claim against his own interest — the criterion of embarrassment strengthens rather than weakens its historicity",
              sources: ["Kim, The Origin of Paul's Gospel (1981)"]
            },
            {
              id: 'paul-p1-obj1-r2',
              type: 'response',
              text: 'Galatians 1–2 is considered one of the most historically reliable New Testament texts by critical scholars across the theological spectrum',
              sources: ['Dunn, Jesus Remembered (2003)']
            }
          ]
        }
      ]
    },
    {
      id: 'paul-p2',
      type: 'premise',
      text: 'Paul underwent a sudden conversion attributing it to a personal appearance of the risen Jesus, and subsequently suffered and died for this testimony',
      status: 'defended',
      children: [
        {
          id: 'paul-p2-s1',
          type: 'support',
          text: 'Paul\'s extensive suffering — floggings, imprisonments, shipwrecks, constant danger — is documented in his own letters',
          sources: ['1 Corinthians 15:8; 2 Corinthians 11:23–28']
        },
        {
          id: 'paul-p2-s2',
          type: 'support',
          text: 'Paul was a sophisticated Jewish intellectual trained under Gamaliel, not a credulous believer swept up by social pressure — his willingness to die shows sincerity beyond any external inducement',
          sources: ['Habermas & Licona, The Case for the Resurrection (2004)']
        },
        {
          id: 'paul-p2-obj1',
          type: 'objection',
          text: 'Paul experienced a psychological breakdown or epileptic episode — the light and sound in Acts 9 suggest a neurological event',
          children: [
            {
              id: 'paul-p2-obj1-r1',
              type: 'response',
              text: 'Physical phenomena like light and sound do not explain the specific content of the experience — an encounter with Jesus specifically — nor the rationality and coherence of Paul\'s subsequent theology',
              sources: ['Habermas & Licona, The Case for the Resurrection (2004)']
            },
            {
              id: 'paul-p2-obj1-r2',
              type: 'response',
              text: 'Epilepsy does not produce complex, coherent, historically grounded theological systems capable of withstanding intellectual scrutiny for decades',
              sources: ['Habermas & Licona, The Case for the Resurrection (2004)']
            }
          ]
        }
      ]
    }
  ]
};

export const historicityOfJesusTree: TreeNode = {
  id: 'hj-root',
  type: 'argument',
  text: 'The Argument from the Historicity of Jesus',
  children: [
    {
      id: 'hj-conclusion',
      type: 'conclusion',
      text: 'Jesus of Nazareth was a real historical figure — crucified under Pontius Pilate — providing a secure anchor for the historical case for Christianity',
      children: []
    },
    {
      id: 'hj-p1',
      type: 'premise',
      text: 'The existence of Jesus of Nazareth is attested by multiple independent ancient sources: Paul, Josephus, Tacitus, Pliny the Younger, and the four Gospels',
      status: 'defended',
      children: [
        {
          id: 'hj-p1-s1',
          type: 'support',
          text: 'Paul\'s undisputed letters casually mention meeting James "the Lord\'s brother" (Gal. 1:19) and Peter — direct companions of the historical Jesus',
          sources: ['Ehrman, Did Jesus Exist? (2012)']
        },
        {
          id: 'hj-p1-s2',
          type: 'support',
          text: 'Josephus\'s reference to "James the brother of Jesus called Christ" (Ant. 20.9.1) is universally accepted as authentic by critical scholars',
          sources: ['Josephus, Antiquities 20.9.1']
        },
        {
          id: 'hj-p1-s3',
          type: 'support',
          text: 'Tacitus, writing around 116 CE with evident distaste for the movement, independently confirms that "Christus... suffered the extreme penalty... at the hands of... Pontius Pilatus"',
          sources: ['Tacitus, Annals 15.44']
        },
        {
          id: 'hj-p1-obj1',
          type: 'objection',
          text: 'The Testimonium Flavianum (Josephus, Ant. 18.3.3) is widely regarded as partially interpolated by Christian scribes',
          children: [
            {
              id: 'hj-p1-obj1-r1',
              type: 'response',
              text: 'Most scholars accept only a partial interpolation of the Testimonium Flavianum — a genuine core reference to Jesus was later embellished by Christian copyists',
              sources: ['Ehrman, Did Jesus Exist? (2012)']
            },
            {
              id: 'hj-p1-obj1-r2',
              type: 'response',
              text: 'The separate reference to "James the brother of Jesus called Christ" (Ant. 20.9.1) is universally accepted as authentic and uncontroversially establishes that Josephus knew of Jesus',
              sources: ['Ehrman, Did Jesus Exist? (2012)']
            }
          ]
        },
        {
          id: 'hj-p1-obj2',
          type: 'objection',
          text: 'All sources for Jesus are either late or Christian-authored; no contemporary secular sources mention him',
          children: [
            {
              id: 'hj-p1-obj2-r1',
              type: 'response',
              text: "Very few individuals of Jesus's social level left contemporary secular records; Josephus and Tacitus writing 60–80 years after the events is comparable to our sources for most ancient figures",
              sources: ['Meier, A Marginal Jew, Vol. 1 (1991)']
            },
            {
              id: 'hj-p1-obj2-r2',
              type: 'response',
              text: 'The absence of contemporary secular records is an argument from silence, not positive counter-evidence',
              sources: ['Meier, A Marginal Jew, Vol. 1 (1991)']
            }
          ]
        }
      ]
    },
    {
      id: 'hj-p2',
      type: 'premise',
      text: 'Even secular historians who reject the resurrection uniformly accept the historicity of Jesus; mythicism is a fringe position rejected by virtually all scholars including atheist scholars',
      status: 'granted',
      children: [
        {
          id: 'hj-p2-s1',
          type: 'support',
          text: 'Bart Ehrman, an agnostic scholar and prominent critic of Christian apologetics, wrote an entire book — Did Jesus Exist? — for the specific purpose of refuting mythicism from a secular standpoint',
          sources: ['Ehrman, Did Jesus Exist? (2012)']
        },
        {
          id: 'hj-p2-s2',
          type: 'support',
          text: 'John Meier, applying rigorous secular historical methodology with no apologetic motive, reaches the same conclusion of historicity',
          sources: ['Meier, A Marginal Jew, Vol. 1 (1991)']
        }
      ]
    }
  ]
};

export const ntManuscriptReliabilityTree: TreeNode = {
  id: 'ntmr-root',
  type: 'argument',
  text: 'The Argument from NT Manuscript Reliability',
  children: [
    {
      id: 'ntmr-conclusion',
      type: 'conclusion',
      text: 'The New Testament manuscript tradition establishes that we are reading essentially what the original authors wrote — making the NT historically trustworthy as evidence for the life, death, and resurrection of Jesus',
      children: []
    },
    {
      id: 'ntmr-p1',
      type: 'premise',
      text: 'The New Testament is attested by over 5,800 Greek manuscripts plus ~19,000 in other languages — far more than any other ancient document — with the earliest fragments dating to within decades of the originals',
      status: 'defended',
      children: [
        {
          id: 'ntmr-p1-s1',
          type: 'support',
          text: "By comparison, Caesar's Gallic Wars survives in 10 manuscripts with the earliest copy 900 years later, Tacitus's Annals in just 2, and Thucydides in about 8 — the NT's manuscript wealth dwarfs all of classical literature",
          sources: ['Bruce, The New Testament Documents (1943)']
        },
        {
          id: 'ntmr-p1-s2',
          type: 'support',
          text: "The papyrus P52 dates to ~125 CE, within 30–35 years of John's composition, and P66/P75 preserve major portions of John and Luke from the late 2nd century",
          sources: ['Wallace, ed., Revisiting the Corruption of the NT (2011)']
        },
        {
          id: 'ntmr-p1-obj1',
          type: 'objection',
          text: 'The canon was politically shaped — the "reliable" documents were selected to support orthodoxy, and Gnostic gospels were suppressed',
          children: [
            {
              id: 'ntmr-p1-obj1-r1',
              type: 'response',
              text: "The core NT books — Paul's major letters and the four Gospels — are attested as authoritative by the late 1st or early 2nd century, well before any imperial canonization process",
              sources: ['Bruce, The New Testament Documents (1943)']
            },
            {
              id: 'ntmr-p1-obj1-r2',
              type: 'response',
              text: 'Gnostic gospels are dated 100–200 years later and show no independent access to the historical Jesus',
              sources: ['Bruce, The New Testament Documents (1943)']
            }
          ]
        }
      ]
    },
    {
      id: 'ntmr-p2',
      type: 'premise',
      text: 'Textual critics estimate that ~99.5% of the NT text is established beyond reasonable doubt; no core doctrine rests on a disputed text',
      status: 'defended',
      children: [
        {
          id: 'ntmr-p2-s1',
          type: 'support',
          text: 'The 400,000+ textual variants are overwhelmingly trivial — spelling variations, word order differences, and obvious scribal slips — not substantive disputes over meaning',
          sources: ['Metzger, The Text of the New Testament (1992)']
        },
        {
          id: 'ntmr-p2-s2',
          type: 'support',
          text: 'Even Bart Ehrman, no defender of Christian orthodoxy, concedes that none of the variants affect any core Christian doctrine, and the NT is reconstructed with greater confidence than Homer, Plato, or Thucydides',
          sources: ['Wallace, ed., Revisiting the Corruption of the NT (2011)']
        },
        {
          id: 'ntmr-p2-obj1',
          type: 'objection',
          text: 'A large manuscript tradition just means more copying, hence more variants (Ehrman)',
          children: [
            {
              id: 'ntmr-p2-obj1-r1',
              type: 'response',
              text: 'A larger manuscript tradition allows textual critics to cross-check and correct errors more reliably — the variants are evidence of the copying process, not of uncertainty about the original text',
              sources: ['Wallace, Revisiting the Corruption of the NT (2011)']
            }
          ]
        }
      ]
    }
  ]
};

export const fulfilledProphecyTree: TreeNode = {
  id: 'fp-root',
  type: 'argument',
  text: 'The Argument from Fulfilled Prophecy',
  children: [
    {
      id: 'fp-conclusion',
      type: 'conclusion',
      text: 'The best explanation for precise fulfillment of independently composed prophecies over centuries is divine foreknowledge and intentional divine action in history',
      children: []
    },
    {
      id: 'fp-p1',
      type: 'premise',
      text: 'The Hebrew scriptures contain detailed prophecies about the Messiah — birthplace, lineage, manner of entry, betrayal for thirty pieces of silver, suffering and death, resurrection — written centuries before Jesus',
      status: 'defended',
      children: [
        {
          id: 'fp-p1-s1',
          type: 'support',
          text: 'The Dead Sea Scrolls (discovered 1947, dated 250–68 BCE) confirm that the major prophetic texts — including Isaiah 53 — predate Jesus by at least two centuries',
          sources: ['Edersheim, The Life and Times of Jesus the Messiah (1883)']
        },
        {
          id: 'fp-p1-s2',
          type: 'support',
          text: 'The specificity of the prophecies — birthplace, lineage, thirty pieces of silver, unbroken bones, garments divided by lot — is remarkable for texts composed centuries apart from any single fulfillment',
          sources: ['Payne, Encyclopedia of Biblical Prophecy (1973)']
        },
        {
          id: 'fp-p1-obj1',
          type: 'objection',
          text: 'Many Old Testament texts cited as prophecies had different original meanings — for example, Isaiah 53 is about Israel corporately, not an individual',
          children: [
            {
              id: 'fp-p1-obj1-r1',
              type: 'response',
              text: 'The Dead Sea Scrolls show that pre-Christian Judaism already interpreted some Isaiah 53 and Psalm 22 texts messianically, prior to any Christian influence',
              sources: ['Payne, Encyclopedia of Biblical Prophecy (1973)']
            },
            {
              id: 'fp-p1-obj1-r2',
              type: 'response',
              text: 'The convergence of so many independent texts on a single figure remains striking even granting genuine interpretive disputes about individual passages',
              sources: ['Payne, Encyclopedia of Biblical Prophecy (1973)']
            }
          ]
        }
      ]
    },
    {
      id: 'fp-p2',
      type: 'premise',
      text: 'Jesus fulfilled these prophecies in historically documented ways, many of which he could not have deliberately orchestrated',
      status: 'defended',
      children: [
        {
          id: 'fp-p2-s1',
          type: 'support',
          text: "Birthplace in Bethlehem, descent from David, and the specific manner of his death were beyond Jesus's own control to orchestrate",
          sources: ['Kaiser, The Messiah in the Old Testament (1995)']
        },
        {
          id: 'fp-p2-s2',
          type: 'support',
          text: 'Soldiers casting lots for his garments and his bones remaining unbroken were incidental actions of others entirely outside his influence',
          sources: ['McDowell, Evidence That Demands a Verdict (1972)']
        },
        {
          id: 'fp-p2-obj1',
          type: 'objection',
          text: 'Gospel authors narrated events to match Old Testament texts rather than reporting history',
          children: [
            {
              id: 'fp-p2-obj1-r1',
              type: 'response',
              text: 'Many fulfilled details are incidental background elements, not theological emphases — soldiers casting lots is reported matter-of-factly, not staged for effect',
              sources: ['Kaiser, The Messiah in the Old Testament (1995)']
            },
            {
              id: 'fp-p2-obj1-r2',
              type: 'response',
              text: "Paul's early creed (1 Cor. 15:3–4) cites scriptural fulfillment without Gospel-style narrative embellishment, predating any alleged legendary development",
              sources: ['Kaiser, The Messiah in the Old Testament (1995)']
            }
          ]
        }
      ]
    }
  ]
};

export const spreadOfChristianityTree: TreeNode = {
  id: 'soc-root',
  type: 'argument',
  text: 'The Argument from the Spread of Christianity',
  children: [
    {
      id: 'soc-conclusion',
      type: 'conclusion',
      text: 'The sociologically unprecedented spread of Christianity in the face of persecution and without structural advantages is best explained by the truth of the resurrection claim',
      children: []
    },
    {
      id: 'soc-p1',
      type: 'premise',
      text: 'Christianity spread with remarkable speed from a small group of Galilean followers in Judea to the dominant religion of the Roman Empire within ~300 years — without military force, political backing, or philosophical prestige in its early phase',
      status: 'defended',
      children: [
        {
          id: 'soc-p1-s1',
          type: 'support',
          text: "The movement began among Galilean followers who had personally known Jesus and spread first in Jerusalem, the very city of his execution",
          sources: ['Stark, The Rise of Christianity (1996)']
        },
        {
          id: 'soc-p1-s2',
          type: 'support',
          text: 'It grew without military force, political backing, or philosophical prestige, attracting persecution rather than social advantage in its early phase',
          sources: ['Hurtado, Destroyer of the Gods (2016)']
        },
        {
          id: 'soc-p1-s3',
          type: 'support',
          text: "Independent pagan sources (Pliny the Younger, ~112 CE) confirm rapid spread, and Stark's demographic modeling shows a sociologically remarkable growth rate of ~40% per decade",
          sources: ['Stark, The Rise of Christianity (1996)']
        },
        {
          id: 'soc-p1-obj1',
          type: 'objection',
          text: 'Other movements also grew rapidly — Islam, Buddhism, and other religions spread quickly without requiring a miraculous origin',
          children: [
            {
              id: 'soc-p1-obj1-r1',
              type: 'response',
              text: 'Islam spread substantially through military conquest and state patronage, and Buddhism through royal patronage in several kingdoms — early Christianity, by contrast, spread through a message centered on a shameful execution, offering only marginalization and often death',
              sources: ['Hurtado, Destroyer of the Gods (2016)']
            }
          ]
        }
      ]
    },
    {
      id: 'soc-p2',
      type: 'premise',
      text: 'The original explosive growth in Jerusalem, within weeks of the crucifixion, where authorities could most easily disprove the resurrection, is best explained by the resurrection actually having occurred',
      status: 'defended',
      children: [
        {
          id: 'soc-p2-s1',
          type: 'support',
          text: 'If the resurrection were fabricated, the authorities in Jerusalem — with access to the tomb, the body, and living witnesses — had every motive and means to disprove it on the spot',
          sources: ['Stark, The Rise of Christianity (1996)']
        },
        {
          id: 'soc-p2-s2',
          type: 'support',
          text: 'Instead the movement took root and grew explosively in exactly this hostile, falsifiable environment rather than being crushed by immediate counter-evidence',
          sources: ['Hurtado, Destroyer of the Gods (2016)']
        },
        {
          id: 'soc-p2-obj1',
          type: 'objection',
          text: "Urban networking and Jewish synagogue infrastructure explain Christian expansion, not a miraculous cause",
          children: [
            {
              id: 'soc-p2-obj1-r1',
              type: 'response',
              text: 'Urban networking and synagogue infrastructure explain the mechanism of later spread, but they do not explain the initial explosion in Jerusalem itself',
              sources: ['Stark, The Rise of Christianity (1996)']
            },
            {
              id: 'soc-p2-obj1-r2',
              type: 'response',
              text: 'Nor do they explain the willingness of eyewitnesses and their immediate circle to suffer for the resurrection claim within the very first years',
              sources: ['Stark, The Rise of Christianity (1996)']
            }
          ]
        }
      ]
    }
  ]
};

export const historicalTrees: Record<string, TreeNode> = {
  'minimal-facts': minimalFactsTree,
  'empty-tomb': emptyTombTree,
  'disciples-willingness-to-die': disciplesWillingnessToDieTree,
  'paul-damascus-conversion': paulDamascusConversionTree,
  'historicity-of-jesus': historicityOfJesusTree,
  'nt-manuscript-reliability': ntManuscriptReliabilityTree,
  'fulfilled-prophecy': fulfilledProphecyTree,
  'spread-of-christianity': spreadOfChristianityTree,
};
