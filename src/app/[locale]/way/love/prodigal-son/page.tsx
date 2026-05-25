import type { Metadata } from 'next';
import WayLayout from '@/components/way/WayLayout';
import ProdigalSonReader from '@/components/way/ProdigalSonReader';

export const metadata: Metadata = {
  title: 'The Prodigal Son | The Way | Theosis',
  description: 'Luke 15:11-32 — read slowly, one verse at a time. Which character are you today?',
};

export default function ProdigalSonPage() {
  return (
    <WayLayout>
      <ProdigalSonReader />
    </WayLayout>
  );
}
