// src/components/way/WayNavSidebar.tsx
'use client';

import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/way', label: 'Home', icon: '🕯' },
  { href: '/way/pray', label: 'Pray', icon: '🕯' },
  { href: '/way/act', label: 'Act', icon: '🕯' },
  { href: '/way/love', label: 'Love', icon: '🕯' },
  { href: '/way/journey', label: 'Journey', icon: '🕯' },
  { href: '/way/retreat', label: 'Retreat', icon: '🕯' },
  { href: '/way/skeptic', label: 'For the Skeptic', icon: '🕯' },
];

export default function WayNavSidebar() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        padding: '2rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.55rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'var(--color-text-secondary)',
          marginBottom: '1rem',
          paddingBottom: '0.75rem',
          borderBottom: '1px solid rgba(201,168,76,0.2)',
        }}
      >
        The Way
      </div>
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href || (link.href !== '/way' && pathname.startsWith(link.href));
        return (
          <a
            key={link.href}
            href={link.href}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              padding: '0.5rem 0.75rem',
              borderRadius: '4px',
              textDecoration: 'none',
              fontFamily: 'var(--font-body)',
              fontSize: '0.9375rem',
              fontStyle: isActive ? 'italic' : 'normal',
              color: isActive ? 'var(--color-accent-gold)' : 'var(--color-text-primary)',
              background: isActive ? 'rgba(201,168,76,0.08)' : 'transparent',
              borderLeft: isActive ? '2px solid var(--color-accent-gold)' : '2px solid transparent',
              transition: 'all 0.2s ease',
            }}
          >
            <span style={{ fontSize: '0.875rem' }}>{link.icon}</span>
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}
