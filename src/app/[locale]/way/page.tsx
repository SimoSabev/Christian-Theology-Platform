import type { Metadata } from 'next';
import WayHomeClient from '@/components/way/WayHomeClient';

export const metadata: Metadata = {
  title: 'The Way — Living the Christian Faith | Theosis',
  description:
    'A contemplative space for encountering the love of Christ — for believers, seekers, and skeptics alike.',
};

export default function WayEntryPage() {
  return <WayHomeClient />;
}
