// src/data/way/journey-stages.ts
import { JourneyStage } from '@/types/way';

export const journeyStages: JourneyStage[] = [
  {
    id: 'awakening',
    name: 'Awakening',
    description:
      'The stage of Awakening is the beginning of spiritual consciousness — the moment when a soul becomes aware, perhaps for the first time, that there is more to existence than the material and the immediately visible. It may come as a sudden crisis that strips away former certainties, a persistent sense of longing that worldly satisfactions cannot quiet, a brush with beauty or tragedy that opens a crack in the everyday surface of things, or simply a growing restlessness with the shallowness of a life lived without transcendent anchor. The awakened person has not yet committed, has not yet resolved their questions, but they have heard a voice — however faintly — that calls them deeper. Classic spiritual writers have called this the via purgativa, the beginning of purification, or the "first love" that Scripture celebrates in Revelation 2:4. The danger of this stage is either paralysis in the face of unanswered questions or a premature resolution that quiets the longing before it has done its work. The gift of this stage is the awakening itself — the irreplaceable moment when a soul stops sleepwalking.',
    icon: 'sunrise',
    characteristics: [
      'A persistent sense of spiritual longing or restlessness',
      'Questions about meaning, purpose, and transcendence',
      'Openness to new perspectives without firm commitment',
      'Attraction to beauty, mystery, and the sacred',
    ],
    practices: [
      'Journal about the questions you cannot silence',
      'Spend time in nature without distractions',
      'Read one spiritual autobiography or honest memoir of faith',
      'Visit a contemplative space — a cathedral, monastery, or chapel — simply to sit',
    ],
    scripture: 'My heart and flesh sing for joy to the living God. (Psalm 84:2)',
    order: 1,
  },
  {
    id: 'formation',
    name: 'Formation / Discipleship',
    description:
      'The stage of Formation marks the transition from awakening to intentional discipleship — the decision to learn, to be shaped, to sit at the feet of a teacher. In the New Testament, the word for disciple (μαθητής, mathetes) literally means "learner." This stage is characterized by the hunger to understand: to know what Christians actually believe, why they believe it, how the Scriptures hold together, what the great tradition of the Church has to say about prayer and ethics and doctrine. It is the stage of catechesis — both formal and informal. The formation stage is also the stage of community: the individual begins to find her place in the body of Christ, to worship regularly, to serve in small ways, to develop relationships with more mature believers. This is often the stage of greatest visible growth — of dramatic changes in behaviour, of enthusiastic engagement with new practices. The danger here is superficiality: a formation that fills the mind without reaching the heart, or the legalism that comes from learning the rules before internalizing the grace. The practice of the spiritual disciplines — especially Bible reading, prayer, and corporate worship — is central to this stage.',
    icon: 'book',
    characteristics: [
      'Active learning and engagement with Scripture and doctrine',
      'Integration into a worshipping community',
      'Adoption of basic spiritual disciplines',
      'Growing self-awareness of patterns of sin and grace',
    ],
    practices: [
      'Commit to daily Scripture reading using a structured plan',
      'Find a spiritual mentor or accountability partner',
      'Serve in one area of the local church each week',
      'Begin a prayer journal tracking requests and answers',
    ],
    scripture:
      'Do not be conformed to this world, but be transformed by the renewal of your mind. (Romans 12:2)',
    order: 2,
  },
  {
    id: 'deepening',
    name: 'Deepening / Contemplative',
    description:
      'The stage of Deepening is entered, more often than not, through difficulty rather than success. It is the stage where the initial enthusiasm of the formation years begins to meet the harder ground of life — unanswered prayer, persistent sin, suffering without resolution, the dark night of the soul that John of the Cross described so precisely. The contemplative stage is marked by a shift in prayer: away from talking at God and toward listening to God, away from performance and toward presence, away from information and toward transformation. This is the stage where the soul discovers that it cannot manage its spiritual life through discipline and effort alone — that something deeper is required, something that can only be received rather than achieved. The classic contemplative practices — centering prayer, Lectio Divina, silent retreat, the Examen — become not exotic options but necessities. The soul learns to dwell in uncertainty without anxiety, to rest in God\'s love without requiring visible proof of it. Many people spend a long time in this stage, and some — by God\'s mercy — never leave it entirely.',
    icon: 'heart',
    characteristics: [
      'Movement from activity-centered to presence-centered prayer',
      'Greater comfort with silence, mystery, and unknowing',
      'Awareness of spiritual consolations and desolations',
      'Increasing surrender of the need to control outcomes',
    ],
    practices: [
      'Practise daily Centering Prayer (20 minutes)',
      'Make an annual silent retreat of at least two days',
      'Pray the Examen each evening for 30 days',
      'Study the mystics: John of the Cross, Julian of Norwich, Thomas Merton',
    ],
    scripture:
      'Be still, and know that I am God. (Psalm 46:10)',
    order: 3,
  },
  {
    id: 'mature-faith',
    name: 'Mature Faith / Unitive',
    description:
      'The unitive stage is what the great mystics of the Christian tradition called the summit of the spiritual journey — not because it is a permanent achievement, but because it describes a quality of relationship with God characterized by deep union, stability, and what Bernard of Clairvaux called "ordered love": everything in its right place, God first and everything else flowing from that ordering. The soul at this stage has been purified, not without pain, of the gross attachments and self-deceptions of earlier stages. It has entered what the tradition calls the via unitiva — the unitive way. This does not mean sinlessness or the absence of struggle, but a kind of settled peace beneath all the surface turbulence of life: what Julian of Norwich called "all shall be well, and all shall be well, and all manner of thing shall be well." The mature believer is often characterised by great freedom — freedom from the need for approval, freedom from excessive self-preoccupation, freedom to love others without calculation. They carry an authority that does not come from position or achievement but from years of hidden communion with God.',
    icon: 'flame',
    characteristics: [
      'Deep, stable peace coexisting with full engagement in life\'s difficulties',
      'Freedom from excessive self-concern and the need for approval',
      'Love that flows naturally rather than being effortfully maintained',
      'Integration of prayer and action into a single seamless life',
    ],
    practices: [
      'Practise the prayer of abandonment (surrender of outcomes to God)',
      'Engage in regular spiritual direction',
      'Serve as a spiritual mentor to those earlier in the journey',
      'Dwell with Scripture in unhurried contemplation, without agenda',
    ],
    scripture:
      'I have learned, in whatever state I am, to be content. (Philippians 4:11)',
    order: 4,
  },
  {
    id: 'witness',
    name: 'Witness / Apostolic',
    description:
      'The apostolic stage does not come after the contemplative — it is better understood as the fruit of it. Those who have dwelt long enough in God\'s love inevitably find that love overflowing toward the world. The Greek word ἀπόστολος (apostolos) means "one who is sent," and the apostolic soul is precisely that: sent from the place of inner communion back into the world with something to give. This is not activism that replaces prayer, but action that is continuously fed by contemplation. The apostolic witness may take many forms: prophetic speech that names what others dare not name, healing and compassionate presence with the suffering, creative work that embodies beauty and truth, leadership that serves rather than dominates, or the quiet faithful witness of a life lived with such integrity and love that it becomes a question others cannot ignore. In the tradition of the Church, this stage is associated with the great missionaries, reformers, and saints who changed history not through earthly power but through inner transformation expressed outward. The witness is always ready to return to solitude — because the mission depends on it.',
    icon: 'globe',
    characteristics: [
      'Prayer and action integrated into a single vocation',
      'Courage to speak and live truth in the face of opposition',
      'Capacity to bear suffering for the sake of others',
      'Continual return to contemplation as the source of mission',
    ],
    practices: [
      'Identify and commit to one regular practice of service to the poor or marginalised',
      'Share your faith story with one person this month',
      'Engage in prophetic prayer — interceding for systemic injustice',
      'Maintain a rule of life that holds together action and contemplation',
    ],
    scripture:
      'As the Father has sent me, even so I am sending you. (John 20:21)',
    order: 5,
  },
];
