// src/components/way/WayLayout.tsx
import { ReactNode } from 'react';

interface WayLayoutProps {
  children: ReactNode;
  sidebar?: ReactNode;
}

export default function WayLayout({ children, sidebar }: WayLayoutProps) {
  return (
    <div
      style={{
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
        {sidebar && (
          <aside
            style={{
              width: '240px',
              flexShrink: 0,
              minHeight: '100vh',
              borderRight: '1px solid rgba(201,168,76,0.25)',
              background: 'var(--color-bg-secondary)',
            }}
            className="way-sidebar"
          >
            {sidebar}
          </aside>
        )}
        <main
          style={{
            flex: 1,
            padding: '2rem 1.5rem',
            maxWidth: sidebar ? '48rem' : '56rem',
            margin: '0 auto',
          }}
        >
          {children}
        </main>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .way-sidebar { display: none; }
        }
      `}</style>
    </div>
  );
}
