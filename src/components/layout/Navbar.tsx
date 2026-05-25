// src/components/layout/Navbar.tsx
'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import { LensToggle } from '@/components/lens';
import { CommandBarTrigger } from '@/components/command';
import { KeystoneDivider } from '@/components/ornament';

const NAV_ITEMS = [
  { href: '/defend',    labelKey: 'defend' },
  { href: '/compare',   labelKey: 'compare' },
  { href: '/explore',   labelKey: 'explore' },
  { href: '/semantics', labelKey: 'semantics' },
  { href: '/sources',   labelKey: 'sources' },
] as const;

const WAY_ITEM = { href: '/way', label: 'The Way' } as const;

export default function Navbar() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: 'var(--color-bg-primary)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="t-caps text-sm" style={{ color: 'var(--color-text-primary)', letterSpacing: '0.32em' }}>
            THEOLOGIA
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map(({ href, labelKey }) => {
              const isActive = pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className="t-caps text-xs relative py-1"
                  style={{
                    color: isActive ? 'var(--color-accent-gold)' : 'var(--color-text-secondary)',
                    transition: 'color var(--motion-duration-base) var(--motion-ease-out)',
                  }}
                >
                  {t(labelKey)}
                  {isActive && (
                    <span
                      className="absolute left-0 right-0 -bottom-1 h-0.5"
                      style={{ background: 'var(--color-accent-gold)' }}
                    />
                  )}
                </Link>
              );
            })}
            <Link
              href={WAY_ITEM.href}
              className="relative py-1"
              style={{
                fontFamily: 'var(--font-body, serif)',
                fontStyle: 'italic',
                fontSize: '0.875rem',
                color: pathname.startsWith(WAY_ITEM.href) ? 'var(--color-accent-gold)' : 'var(--color-text-secondary)',
                transition: 'color var(--motion-duration-base) var(--motion-ease-out)',
                textDecoration: 'none',
              }}
            >
              {WAY_ITEM.label}
              {pathname.startsWith(WAY_ITEM.href) && (
                <span
                  className="absolute left-0 right-0 -bottom-1 h-0.5"
                  style={{ background: 'var(--color-accent-gold)' }}
                />
              )}
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <CommandBarTrigger />
            <ThemeToggle />
            <LensToggle />
            <LanguageSwitcher />
            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden" style={{ background: 'var(--color-bg-primary)', borderTop: '1px solid var(--color-border)' }}>
          <div className="px-4 py-4">
            {NAV_ITEMS.map(({ href, labelKey }, i) => (
              <div key={href}>
                <Link
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="block t-caps text-xs py-3"
                  style={{ color: pathname.startsWith(href) ? 'var(--color-accent-gold)' : 'var(--color-text-secondary)' }}
                >
                  {t(labelKey)}
                </Link>
                {i < NAV_ITEMS.length - 1 && <KeystoneDivider />}
              </div>
            ))}
            <div>
              <KeystoneDivider />
              <Link
                href={WAY_ITEM.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3"
                style={{
                  fontFamily: 'var(--font-body, serif)',
                  fontStyle: 'italic',
                  fontSize: '0.875rem',
                  color: pathname.startsWith(WAY_ITEM.href) ? 'var(--color-accent-gold)' : 'var(--color-text-secondary)',
                  textDecoration: 'none',
                }}
              >
                {WAY_ITEM.label}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
