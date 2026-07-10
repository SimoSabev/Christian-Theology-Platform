// src/components/layout/Navbar.tsx
'use client';

import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { Menu } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import { LensToggle } from '@/components/lens';
import { CommandBarTrigger } from '@/components/command';
import NavMenuOverlay from './NavMenuOverlay';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <CommandBarTrigger />
            <ThemeToggle />
            <LensToggle />
            <LanguageSwitcher />
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="flex items-center gap-2 px-3 py-2 t-caps text-xs border"
              style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}
            >
              <Menu size={14} />
              <span className="hidden sm:inline">Menu</span>
            </button>
          </div>
        </div>
      </nav>

      <NavMenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
