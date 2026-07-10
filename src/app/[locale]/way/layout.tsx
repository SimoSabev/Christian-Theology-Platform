import { ReactNode } from 'react';

export default function WayRootLayout({ children }: { children: ReactNode }) {
  return <div data-section="way">{children}</div>;
}
