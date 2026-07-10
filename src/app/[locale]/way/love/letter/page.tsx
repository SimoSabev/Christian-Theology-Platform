import type { Metadata } from 'next';
import WayLayout from '@/components/way/WayLayout';
import LetterFromGod from '@/components/way/LetterFromGod';

export const metadata: Metadata = {
  title: 'A Letter from God | The Way | Theosis',
  description: 'A devotional meditation — written in the voice of the Father, for the weary, the wandering, and the wondering.',
};

export default function LetterPage() {
  return (
    <WayLayout>
      <LetterFromGod />
      <div
        style={{
          textAlign: 'center',
          padding: '2rem 0 3rem',
        }}
      >
        <a
          href="/way"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            fontStyle: 'italic',
            color: 'var(--color-text-secondary)',
            textDecoration: 'none',
          }}
        >
          ← Return to The Way
        </a>
      </div>
    </WayLayout>
  );
}
