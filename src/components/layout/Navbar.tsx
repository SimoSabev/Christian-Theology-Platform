'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { Shield, Scale, BookOpen, Compass, Search, Menu, X, Globe } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const navItems = [
  { href: '/defend', labelKey: 'defend', icon: Shield },
  { href: '/compare', labelKey: 'compare', icon: Scale },
  { href: '/sources', labelKey: 'sources', icon: BookOpen },
  { href: '/explore', labelKey: 'explore', icon: Compass },
] as const;

export default function Navbar() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border backdrop-blur-xl bg-bg-primary/80">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent-gold to-accent-amber flex items-center justify-center shadow-lg group-hover:shadow-accent-gold/20 transition-shadow">
                <span className="text-bg-primary font-bold text-lg">✝</span>
              </div>
              <span className="hidden sm:block font-semibold text-lg tracking-tight">
                <span className="gold-gradient">Theology</span>
                <span className="text-text-secondary font-normal"> Study</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map(({ href, labelKey, icon: Icon }) => {
                const isActive = pathname.startsWith(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-surface-glass text-accent-gold border border-accent-gold/20'
                        : 'text-text-secondary hover:text-text-primary hover:bg-surface-glass'
                    }`}
                  >
                    <Icon size={16} />
                    {t(labelKey)}
                  </Link>
                );
              })}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-glass transition-colors"
                aria-label={t('search')}
              >
                <Search size={18} />
              </button>
              <LanguageSwitcher />
              <button
                className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-glass transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-bg-primary/95 backdrop-blur-xl animate-in slide-in-from-top duration-200">
            <div className="px-4 py-3 space-y-1">
              {navItems.map(({ href, labelKey, icon: Icon }) => {
                const isActive = pathname.startsWith(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-surface-glass text-accent-gold'
                        : 'text-text-secondary hover:text-text-primary hover:bg-surface-glass'
                    }`}
                  >
                    <Icon size={18} />
                    {t(labelKey)}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-[20vh]" onClick={() => setSearchOpen(false)}>
          <div className="w-full max-w-2xl mx-4 bg-bg-elevated rounded-2xl border border-border shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center gap-3 p-4 border-b border-border">
              <Search size={20} className="text-text-muted" />
              <input
                autoFocus
                type="text"
                placeholder={t('search') + ' — Ctrl+K'}
                className="flex-1 bg-transparent text-lg text-text-primary placeholder-text-muted outline-none"
              />
              <button onClick={() => setSearchOpen(false)} className="text-text-muted hover:text-text-primary">
                <X size={18} />
              </button>
            </div>
            <div className="p-6 text-center text-text-muted text-sm">
              Start typing to search arguments, sources, and doctrines...
            </div>
          </div>
        </div>
      )}
    </>
  );
}
