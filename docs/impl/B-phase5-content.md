# B — Phase 5: Content Writing

**Mode:** "The Way" — Experience Mode
**Output:** Text content populated into data files from Phase 2

---

> **Note for coding agents:** This phase is content creation, not code. The output of each task goes directly into the corresponding data file (Phase 2). Tasks are listed with the exact data file and field to populate.

## Writing Guidelines

All content in The Way must follow these rules:

1. **Tone:** Warm, honest, reverent — not academic, not preachy, not triumphalist
2. **Vocabulary:** No unexplained jargon. When a theological term is used, define it immediately.
3. **Person:** Write in second person ("you") for practical guidance. Write in first person for prayers.
4. **Length:** Hit the target word counts. Don't pad. Don't truncate.
5. **Sources:** All historical claims must be attributable to a published source. Add source comments in the data file.
6. **Scripture:** Use ESV for most content (check license — ESV is licensed for non-commercial use but not arbitrary distribution). For Scripture in data files used for UI display, use KJV (public domain) or clearly marked ESV with proper attribution.

---

## W-01 — "What is Prayer?" Introduction

**Target file:** `src/data/way/prayer-types.ts` — `introText` field (add to module)
**Length:** 150 words
**Tone:** Warm, simple, completely accessible

Starting point: "Prayer is not a religious performance. It is a conversation — honest, imperfect, and welcome..."

Do not use: "lifting up," "just," "Lord we just," or any cliché phrasing.

---

## W-02 — 6 Prayer Type Descriptions + Starter Prayers

**Target file:** `src/data/way/prayer-types.ts` — `description` and `starterPrayer` fields
**Length per type:** 100-word description + 50-word starter prayer

Write for each:
1. **Petition** — asking honestly; not a vending machine; God welcomes specific requests
2. **Thanksgiving** — gratitude as a discipline; training attention to gifts; not forced positivity
3. **Intercession** — praying for others; standing in the gap; love in verbal form
4. **Confession** — honest self-examination; not shame-inducing; the relief of being known and forgiven
5. **Adoration** — praise that asks for nothing; contemplating who God is; Julian of Norwich's "All shall be well"
6. **Contemplation** — listening rather than speaking; the prayer of quiet; sitting with God

---

## W-03 — Lord's Prayer Phrase Commentaries

**Target file:** `src/data/way/lords-prayer.ts` — `theologicalNote` and `reflectionQuestion` fields
**Length per phrase:** 100-word theological note + 1 reflection question

8 phrases:
1. "Our Father in heaven" — the audacity of "our"; Jesus teaching us to share his relationship with the Father
2. "hallowed be your name" — not a wish but a commitment; we are agents of God's holiness being seen
3. "your kingdom come" — this is political, not just spiritual; a vision of justice and shalom
4. "your will be done, on earth as in heaven" — aligning my will with God's; the prayer of surrender
5. "give us this day our daily bread" — dependence as a spiritual practice; manna in the wilderness
6. "forgive us our debts, as we also have forgiven our debtors" — the most dangerous phrase in the prayer
7. "lead us not into temptation" — the Greek peirasmos means "testing"; asking God to keep us from what we cannot handle
8. "deliver us from evil" — the cosmic battle; we are not strong enough alone

---

## W-04 — Lectio Divina Guide + Practice Passage

**Target file:** `src/data/way/` — embed in `LectioDivinaGuide` component's data or a separate `lectio.ts`
**Length:** Guide (200 words total, ~50 per step) + practice passage introduction (50 words)

4 steps:
- **Read (Lectio):** Read the passage aloud, slowly. Once. Notice which word or phrase catches you.
- **Meditate (Meditatio):** Return to that word. Repeat it slowly. Let it become a question.
- **Pray (Oratio):** Speak to God from what the word stirred in you. No agenda.
- **Contemplate (Contemplatio):** Be still. Stop talking. Simply rest in God's presence for a few minutes.

Practice passage recommendation: Psalm 23 (familiar enough to not require study, deep enough to always yield something new).

---

## W-05 — Jesus Prayer / Hesychasm Explainer

**Target file:** `src/data/way/` — content for the jesus-prayer page (can be a `page-content.ts` or inline in the page component)
**Length:** 400 words

Structure:
1. The prayer itself and its origins in the Desert Fathers (4th century)
2. The hesychast controversy and Gregory Palamas (14th century) — one paragraph
3. The Philokalia — what it is and why it matters
4. Method: posture, breathing, rhythm, frequency (practical and specific)
5. The theology: the Name of Jesus as his living presence (Acts 4:12)

---

## W-06 — "Why Pray" Section Texts

**Target file:** Page content for `src/app/[locale]/way/why-pray/page.tsx`
**Length:** 6 sub-sections × 200 words each = 1,200 words total

Sub-sections:
1. The Theology of Prayer
2. The Relational God (contrast with deism, unmoved mover — God as Father of the Prodigal)
3. Does Prayer Change Things? (C.S. Lewis: "Letters to Malcolm" — excerpts + commentary)
4. What Science Suggests (cautious, 200 words, MANTRA study)
5. Testimonies (use D-07 data — 3 vignettes here)
6. The God Who Hides (pastoral, not polemical — Pascal, the dark night as a feature)

---

## W-07 — 8 Beatitude Applications

**Target file:** `src/data/way/beatitudes.ts` — `application` field
**Length:** 100 words per beatitude × 8 = 800 words

Write applications in second person. Be concrete — give a real-life scenario.

Example for "Blessed are the meek":
"Meekness is not weakness — it is strength held in check. In a world that rewards self-promotion, meekness is the refusal to fight for status at the expense of others. You are meek when you let someone else take credit for your work, when you stay quiet in an argument you could win, when you choose influence over power. Meekness is trusting that God's valuation of you is more permanent than any opinion of the room."

---

## W-08 — Sermon on the Mount Overview

**Target file:** Page content for sermon-on-the-mount page
**Length:** 500 words

Frame Matthew 5-7 as: the constitution of the Kingdom of God. Jesus is not giving laws to be kept — he is describing the character that emerges when a person is transformed by God's love.

Structure: Introduction → The Beatitudes as Character Formation → The Antitheses ("You have heard it said... but I say") → The Disciplines of the Kingdom (fasting, giving, prayer) → The Great Summons (seek first the Kingdom).

---

## W-09 — 12 Spiritual Discipline Descriptions + Starter Practices

**Target file:** `src/data/way/disciplines.ts` — `description` and `starterPractice` fields
**Length:** 100-word description + 1-week guide per discipline × 12 = ~2,400 words

Keep starter practices achievable. Do not ask for 2 hours of fasting on Day 1 of the fasting discipline. Begin with 15 minutes.

---

## W-10 — "Loving Your Enemies" Exposition

**Target file:** Page content for love-your-enemies page
**Length:** 600 words

Structure:
1. Matthew 5:44 — why this is the hardest command (200 words)
2. Corrie ten Boom story — the moment she shook the hand of a former guard in the concentration camp (150 words, sourced from *The Hiding Place*)
3. Martin Luther King Jr. — the theology of non-violence, Letter from Birmingham Jail (100 words)
4. The Amish response at Nickel Mines (2006) — forgiveness announced within hours (100 words)
5. How to begin — 5 practical steps for a person who genuinely cannot forgive yet (50 words)

---

## W-11 — 7 Scripture Passage Meditations

**Target file:** `src/data/way/love-passages.ts` — `meditation` field
**Length:** 100 words × 7 = 700 words

Write meditations as contemplative prose — not explanation, not argument, but an invitation to encounter what the passage is saying. Use second person. Move from the text outward into the reader's experience.

---

## W-12 — Prodigal Son Verse-by-Verse Commentary

**Target file:** `src/components/way/ProdigalSonReader.tsx` — embedded commentary data or separate `prodigal-son.ts`
**Length:** 32 verse segments × 2-sentence poetic commentary = ~640 words

For each verse or 2-3-verse group:
- The verse text
- 2 sentences of poetic commentary (not explanation — evocation)

Closing "Which character are you?" — 3 profiles:
- The Father: 1 paragraph on scandalous welcome
- The Son: 1 paragraph on the courage of returning
- The Elder Brother: 1 paragraph — for the religious person who has been faithful but joyless

---

## W-13 — 1 Corinthians 13 Deep Study

**Target file:** Page content or component data
**Length:** 15 love characteristics × 80 words each = 1,200 words

For each: Greek word (if applicable) + what it means + how it describes God + how it describes the life we are called to.

15 characteristics from 1 Cor 13:4-7: patient, kind, not envious, not boastful, not arrogant, not rude, not self-seeking, not irritable, not resentful, does not rejoice in wrong, rejoices in truth, bears all things, believes all things, hopes all things, endures all things.

---

## W-14 — 6 Testimony Vignettes

**Target file:** `src/data/way/testimonies.ts`
**Length:** 2-3 sentences × 6 testimonies

Sourced from published accounts (see R-05). No fabrication. Cite source in a comment.

---

## W-15 — 4 Saint Profiles

**Target file:** `src/data/way/saints.ts`
**Length:** 200-word story + 1 quote × 4 saints

Saints: Francis of Assisi, Thérèse of Lisieux, Mother Teresa, Maximilian Kolbe.

Focus on one specific love-in-action event per saint. Not a biography summary — a scene.

---

## W-16 — A Letter from God

**Target file:** `src/components/way/LetterFromGod.tsx` — as a static string constant
**Length:** 400 words

Written from God's perspective in first person. Clearly labeled "Devotional Meditation — Not Scripture."

Themes: You are known. You are loved before you earned it. I have been waiting for you. The prodigal's father running is me. Come home.

Must not feel manipulative or coercive. Must not make specific claims about circumstances. Must honor the reader's free will.

---

## W-17 — 5 Journey Stage Descriptions

**Target file:** `src/data/way/journey-stages.ts` — `description` and `encouragement` fields
**Length:** 150-word description + 2-sentence encouragement × 5 stages

---

## W-18 — 7-Day Retreat Full Content

**Target file:** `src/data/way/retreat.ts`

For each of 7 days:
- `prayerGuide`: 100-word step-by-step prayer instructions
- `reflectionPrompt`: 1 open question (cannot be answered with yes/no)
- `actionStep`: 1 specific achievable action for the next 24 hours
- `transitionNote`: 1 sentence connecting to the next day's theme

---

## W-19 — "For the Skeptic" Section Copy

**Target file:** `src/data/way/skeptic.ts` — all text fields
**Length:** 6 sub-sections × 150 words = 900 words

Must: honor the skeptic's position. Must not: be a stealth argument. The section is genuinely not trying to win a debate — only to open a door.

---

## W-20 — Onboarding Copy

**Target file:** `src/components/way/WayOnboarding.tsx` — inline strings
**Length:** 4 stage options × 1 sentence + welcome message 100 words

Language must be completely secular-friendly. Do not use "Christian" as the default assumed identity. "Just curious" is as valid an entry point as "deep believer."

---

## W-21 — Ambient Audio Labels

**Target file:** `src/components/way/AmbientAudioToggle.tsx` — track description strings
**Length:** 3-5 words per track (poetic, not functional)

Examples:
- "Cathedral silence" (for silence option)
- "Benedictine chant, 9th century" (Gregorian)
- "Byzantine vespers" (Byzantine)
- "Rain on stone" (nature)

---

## Acceptance Criteria

- [ ] All 21 content tasks have text populated in the correct data files/components
- [ ] No placeholder `// TODO` remains in production content
- [ ] All Scripture citations verified against the referenced passage
- [ ] All historical claims (Corrie ten Boom, MANTRA study, etc.) have source comments
- [ ] No jargon left undefined
- [ ] Tone consistent across all content (warm, honest, non-preachy)
- [ ] Word count targets met (±20%)
