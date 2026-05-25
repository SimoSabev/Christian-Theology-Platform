import type { Metadata } from 'next';
import SkepticPageClient from '@/components/way/SkepticPageClient';

export const metadata: Metadata = {
  title: "If You Don't Believe Yet | The Way | Theosis",
  description: "You don't have to believe to explore. Start here.",
};

export default function SkepticPage() {
  return <SkepticPageClient />;
}
