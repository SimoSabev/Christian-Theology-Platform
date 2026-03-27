import { TreeNode } from '../arguments/types';

export const kalamTree: TreeNode = {
  id: 'kalam-root',
  type: 'argument',
  text: 'Kalam Cosmological Argument',
  children: [
    {
      id: 'kalam-conclusion',
      type: 'conclusion',
      text: 'The universe has a cause of its existence',
      children: []
    },
    {
      id: 'kalam-p1',
      type: 'premise',
      text: 'Everything that begins to exist has a cause',
      status: 'defended',
      children: [
        {
          id: 'kalam-p1-s1',
          type: 'support',
          text: 'Metaphysical intuition: ex nihilo nihil fit',
          sources: ['Aquinas ST I.2.3', 'Craig 1979']
        },
        {
          id: 'kalam-p1-s2',
          type: 'support',
          text: 'Empirical confirmation: all observed origins are caused',
          sources: ['Scientific consensus']
        },
        {
          id: 'kalam-p1-obj1',
          type: 'objection',
          text: 'Quantum events are uncaused',
          children: [
            {
              id: 'kalam-p1-obj1-r1',
              type: 'response',
              text: 'Quantum vacuum is not "nothing" — it is a structured physical state',
              sources: ['Vilenkin 2006', 'Craig 2008']
            }
          ]
        },
        {
          id: 'kalam-p1-obj2',
          type: 'objection',
          text: 'The causal principle only applies within the universe, not to the universe itself',
          children: [
            {
              id: 'kalam-p1-obj2-r1',
              type: 'response',
              text: 'The causal principle is a metaphysical truth, not limited to intra-universe events',
              sources: ['Craig, Reasonable Faith (2008)']
            }
          ]
        }
      ]
    },
    {
      id: 'kalam-p2',
      type: 'premise',
      text: 'The universe began to exist',
      status: 'defended',
      children: [
        {
          id: 'kalam-p2-s1',
          type: 'support',
          text: 'Big Bang cosmology (Hubble, CMB, nucleosynthesis)',
          sources: ['Hawking 1988', 'Penrose 1989']
        },
        {
          id: 'kalam-p2-s2',
          type: 'support',
          text: 'Borde-Guth-Vilenkin theorem (2003) — expanding universes must have a past boundary',
          sources: ['Borde, Guth, Vilenkin 2003']
        },
        {
          id: 'kalam-p2-s3',
          type: 'support',
          text: 'Impossibility of an actual infinite past — traversing an infinite cannot be completed',
          sources: ['Craig 1979', 'Al-Ghazali 11th c.']
        },
        {
          id: 'kalam-p2-obj1',
          type: 'objection',
          text: 'Cyclic/bouncing cosmologies avoid a beginning',
          children: [
            {
              id: 'kalam-p2-obj1-r1',
              type: 'response',
              text: 'BGV theorem applies to all models expanding on average; entropy growth prevents eternal cycling',
              sources: ['Vilenkin 2006']
            }
          ]
        },
        {
          id: 'kalam-p2-obj2',
          type: 'objection',
          text: 'Quantum gravity models may eliminate the singularity',
          children: [
            {
              id: 'kalam-p2-obj2-r1',
              type: 'response',
              text: 'Even if the singularity is avoided, the BGV theorem still requires a past boundary for any expanding spacetime',
              sources: ['Vilenkin 2006']
            }
          ]
        }
      ]
    }
  ]
};

export const allTrees: Record<string, TreeNode> = {
  kalam: kalamTree,
};
