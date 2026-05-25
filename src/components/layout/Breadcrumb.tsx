// src/components/layout/Breadcrumb.tsx
'use client';

import { Link } from '@/i18n/navigation';
import { Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-2 flex-wrap"
      style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}
    >
      <Link
        href="/"
        className="flex items-center gap-1 transition-colors hover:opacity-80"
        aria-label="Home"
        style={{ color: 'var(--color-text-muted)' }}
      >
        <Home size={11} />
      </Link>

      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {/* Separator — SectionMark style diamond */}
          <span
            aria-hidden="true"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.5rem',
              color: 'var(--color-accent-gold)',
              opacity: 0.5,
            }}
          >
            ✦
          </span>

          {item.href ? (
            <Link
              href={item.href}
              className="transition-colors hover:opacity-80"
              style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-display)', letterSpacing: '0.05em', fontSize: '0.65rem', textTransform: 'uppercase' }}
            >
              {item.label}
            </Link>
          ) : (
            <span
              style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-display)', letterSpacing: '0.05em', fontSize: '0.65rem', textTransform: 'uppercase' }}
            >
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
