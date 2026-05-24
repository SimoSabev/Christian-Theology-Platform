import { Denomination, Schism } from './types';
import { catholicOrthodoxDenominations } from './denominations-catholic-orthodox';
import { protestantDenominations } from './denominations-protestant';
import { otherDenominations } from './denominations-other';
export type { Denomination, Schism, TraditionCategory } from './types';

export const denominations: Denomination[] = [
  ...catholicOrthodoxDenominations,
  ...protestantDenominations,
  ...otherDenominations,
];

export const schisms: Schism[] = [
  {
    id: 'great-schism-1054',
    slug: 'great-schism-1054',
    name: 'The Great Schism',
    year: 1054,
    parties: [
      {
        name: 'The See of Rome (Western Church)',
        position: 'The Bishop of Rome holds universal jurisdiction over the entire Church as the successor of St. Peter. The filioque ("and from the Son") properly describes the eternal procession of the Holy Spirit and was a legitimate addition to the Creed.',
      },
      {
        name: 'The Ecumenical Patriarchate of Constantinople (Eastern Church)',
        position: 'The Pope is first among equals (primus inter pares), not a monarch with universal jurisdiction. The unilateral addition of the filioque to the Nicene Creed by the West was canonically illegitimate and theologically erroneous.',
      },
    ],
    causes: [
      'The filioque controversy: The Western church added "and from the Son" (filioque) to the Nicene Creed, asserting that the Holy Spirit proceeds from both Father and Son. The East viewed this as a doctrinal error and a canonical violation — no council had authorized the addition.',
      'Papal primacy: Rome increasingly claimed monarchical jurisdiction over the entire church; Constantinople insisted on a pentarchy of five patriarchs (Rome, Constantinople, Alexandria, Antioch, Jerusalem) with Rome as honorary first.',
      'Jurisdictional conflict over newly converted Bulgaria — both Rome and Constantinople sought to bring the Bulgarian church under their authority.',
      'Cultural and linguistic estrangement: the Latin West and Greek East had grown apart over centuries; the use of unleavened bread (azymes) in the West was condemned by the East as a Judaizing practice.',
      'The mutual excommunications of July 1054 by Cardinal Humbert (representing Rome) and Patriarch Michael Cerularius (Constantinople).',
    ],
    resolution: 'The mutual excommunications were symbolically lifted by Pope Paul VI and Ecumenical Patriarch Athenagoras I in 1964. Full communion has not been restored; formal ecumenical dialogue continues.',
    currentStatus: 'East and West remain in schism. The Catholic and Orthodox churches share the seven sacraments and apostolic succession but are not in full communion. The theological issues of papal primacy and the filioque remain unresolved.',
    sources: [
      'Timothy Ware, The Orthodox Church (Penguin, 1993)',
      'Henry Chadwick, East and West: The Making of a Rift in the Church (Oxford, 2003)',
      'Yves Congar, I Believe in the Holy Spirit (Crossroad, 1983)',
    ],
  },
  {
    id: 'protestant-reformation-1517',
    slug: 'protestant-reformation-1517',
    name: 'The Protestant Reformation',
    year: 1517,
    parties: [
      {
        name: 'The Roman Catholic Church',
        position: 'Sacred Tradition and the Magisterium of the Church are authoritative alongside Scripture. Justification is by grace through faith and works, administered through the sacraments. The Pope has supreme doctrinal authority. The reformers were heretics and schismatics who should be condemned.',
      },
      {
        name: 'The Protestant Reformers (Luther, Calvin, Zwingli, et al.)',
        position: 'Scripture alone (Sola Scriptura) is the supreme authority for Christian faith and practice. Justification is by grace through faith alone (Sola Fide), apart from human works or merit. The Pope has no authority over the consciences of believers bound to Scripture.',
      },
    ],
    causes: [
      'The sale of indulgences: Johann Tetzel\'s preaching that the purchase of indulgences could release souls from purgatory prompted Martin Luther to post his Ninety-Five Theses (October 31, 1517).',
      'Luther\'s recovery of justification by faith alone from his study of Romans and Galatians, which placed him in direct conflict with the sacramental system of medieval Catholicism.',
      'Widespread clerical abuse, moral corruption, and intellectual stagnation within the late medieval church, creating a receptive audience for reform.',
      'The invention of the printing press (Gutenberg, c. 1440) enabled rapid dissemination of reforming ideas across Europe.',
      'Erasmus\'s publication of the Greek New Testament (1516), enabling scholars to read the New Testament in its original language and identify departures from it in Catholic tradition.',
      'The Diet of Worms (1521): Luther\'s refusal to recant before Emperor Charles V ("Here I stand") made the break definitive.',
    ],
    currentStatus: 'The Reformation permanently fractured Western Christianity into Catholic and Protestant streams. The Council of Trent (1545–63) defined Catholic doctrine in opposition to Protestantism. Lutheran and Catholic authorities signed the Joint Declaration on the Doctrine of Justification (1999), though significant theological differences remain. The Catholic and Reformed traditions continue separate ecclesiastical existences.',
    sources: [
      'Roland Bainton, Here I Stand: A Life of Martin Luther (Abingdon, 1950)',
      'Alister McGrath, Reformation Thought: An Introduction, 4th ed. (Wiley-Blackwell, 2012)',
      'Heiko Oberman, Luther: Man Between God and the Devil (Yale, 1989)',
      'Diarmaid MacCulloch, The Reformation: A History (Viking, 2003)',
    ],
  },
];

export function getDenominationBySlug(slug: string): Denomination | undefined {
  return denominations.find(d => d.slug === slug);
}

export function getDenominationsByCategory(category: Denomination['category']): Denomination[] {
  return denominations.filter(d => d.category === category);
}

export function getSchismBySlug(slug: string): Schism | undefined {
  return schisms.find(s => s.slug === slug);
}
