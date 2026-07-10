// src/data/way/prayer-types.ts
import { PrayerType } from '@/types/way';

export const prayerTypes: PrayerType[] = [
  {
    id: 'liturgical',
    title: 'Liturgical Prayer',
    description:
      'Liturgical prayer is the structured, communal prayer of the Church offered at set hours and in set forms. Drawing from the Psalms, the canticles, and the prayers of the saints across centuries, it roots the individual soul in the body of Christ. The Liturgy of the Hours — also called the Divine Office — sanctifies the entire day, from Lauds at dawn to Compline at night. Rather than relying on private inspiration alone, liturgical prayer teaches us to pray beyond our own moods and desires, joining a vast chorus of believers who have offered these same words in monasteries, cathedrals, and homes across two millennia. It is the voice of the Bride speaking to her Bridegroom through sacred time.',
    icon: '⛪',
    tradition: 'Catholic / Orthodox',
    starterPrayer:
      'Lord, open my lips, and my mouth shall declare your praise. Glory to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and will be forever. Amen. O God, come to my assistance. O Lord, make haste to help me.',
    durationMinutes: 15,
  },
  {
    id: 'lectio-divina',
    title: 'Lectio Divina',
    description:
      'Lectio Divina — Latin for "sacred reading" — is a Benedictine practice of slowly reading Scripture not to acquire information but to encounter the living God. The method moves through four classical movements: Lectio (read the passage aloud slowly, noticing which word or phrase arrests you), Meditatio (chew on that word as a cow chews its cud — repeat it, turn it over, let it reveal layers), Oratio (speak back to God from what arose in you), and Contemplatio (rest silently in God\'s presence, beyond words). Benedictine monks have practised this for fifteen centuries, and it remains one of the most transformative ways to let the Word dwell richly in you. Begin with a short passage — five to ten verses — and resist the urge to read further.',
    icon: '📖',
    tradition: 'Benedictine',
    starterPrayer:
      'Begin with John 1:1-5. Read it aloud once slowly. Then again. Notice which word or phrase seems to glow for you. Sit with it. Whisper it back to God. Then rest in silence for two minutes, simply present to Him.',
    durationMinutes: 20,
  },
  {
    id: 'centering-prayer',
    title: 'Contemplative / Centering Prayer',
    description:
      'Centering Prayer is a method of silent prayer that opens the practitioner to God\'s presence and action within. Developed in the 1970s by Trappist monks drawing on the fourteenth-century classic The Cloud of Unknowing, it differs from meditation that uses words and images. You choose a single sacred word — such as "Jesus," "Abba," or "Come" — as your intention to consent to God\'s presence. When thoughts arise (and they will), you gently return to the sacred word, not fighting thoughts but releasing them. The method is not about achieving a mystical state but about surrendering control. In the Christian mystical tradition, this form of prayer aligns with the apophatic way: approaching God beyond concepts, beyond images, in holy unknowing and trust.',
    icon: '🕯',
    tradition: 'Christian Mysticism',
    starterPrayer:
      'Find stillness. Choose a sacred word — perhaps "Peace" or "Come" or simply "Yes." Set a timer for 20 minutes. Close your eyes. Offer your sacred word as your consent to God\'s presence. When thoughts arise, gently return to the word. Do not grasp, do not analyze. Simply remain. Simply consent.',
    durationMinutes: 20,
  },
  {
    id: 'intercessory',
    title: 'Intercessory Prayer',
    description:
      'Intercession is the practice of standing before God on behalf of others — neighbours, enemies, the sick, the suffering, nations, and the Church. It reflects a profound theological conviction: that God invites human participation in His redemptive work. The intercessor does not inform God of news He does not know, but aligns his or her will with God\'s compassion for the world. Paul commands that "requests, prayers, intercession and thanksgiving be made for all people" (1 Timothy 2:1). Throughout Church history, communities of prayer — from the Desert Fathers to modern-day prayer networks — have sustained unbroken intercession. Intercessory prayer is both intimate and cosmic: a single soul partnering with the Holy Spirit who "intercedes for us with groans too deep for words" (Romans 8:26).',
    icon: '🙏',
    tradition: 'Evangelical / Universal',
    starterPrayer:
      'Lord, I lift before you today those I love and those who are difficult to love. I pray for the sick, the lonely, the grieving. I pray for leaders of nations, that wisdom would guide them. I pray for the persecuted Church around the world. Have mercy, Lord. Move. Heal. Reconcile. Your kingdom come.',
    durationMinutes: 15,
  },
  {
    id: 'jesus-prayer',
    title: 'Jesus Prayer',
    description:
      'The Jesus Prayer — "Lord Jesus Christ, Son of God, have mercy on me, a sinner" — is one of the most ancient and beloved prayers of the Eastern Church, rooted in the cry of Bartimaeus in Mark 10:47 and the parable of the tax collector in Luke 18:13. Hesychast monks of the Orthodox tradition developed it into an entire spiritual science, seeking to pray this prayer continuously until it became the very rhythm of the heartbeat — what the Philokalia calls "prayer of the heart." The goal is not mechanical repetition but an ever-deepening awareness of one\'s own poverty before God and God\'s inexhaustible mercy. The prayer is brief enough to be carried anywhere, profound enough for a lifetime of deepening. Beginners often use prayer beads (a komboskini) to count repetitions, typically 33 or 100 at a time.',
    icon: '✝',
    tradition: 'Eastern Orthodox',
    starterPrayer:
      'Lord Jesus Christ, Son of God, have mercy on me, a sinner. (Repeat slowly, 10–33 times. Breathe in: "Lord Jesus Christ, Son of God." Breathe out: "have mercy on me, a sinner.")',
    durationMinutes: 10,
  },
  {
    id: 'spontaneous',
    title: 'Spontaneous Prayer',
    description:
      'Spontaneous prayer is the free, unscripted conversation with God that flows from the heart in the moment — no set words, no required posture, no liturgical calendar. It is prayer as conversation between a child and Father. Charismatic and Protestant traditions have particularly championed this form, seeing it as evidence of a living, personal relationship with God. Scripture itself models it: the Psalms contain raw outpourings of grief, joy, anger, gratitude, and longing. Jesus prayed spontaneously in the garden of Gethsemane. The value of spontaneous prayer is its authenticity: God does not require polished prose. He invites your actual heart. Bring what is there — your fears, your thanks, your confusion, your delight. He can handle it. And He is listening.',
    icon: '💬',
    tradition: 'Charismatic / Protestant',
    starterPrayer:
      'God, I come as I am. I don\'t have the right words. I just want to be honest with you. Here is what is on my heart today... [speak or write freely for five minutes]. Thank you for listening. Thank you for caring. Amen.',
    durationMinutes: 10,
  },
];
