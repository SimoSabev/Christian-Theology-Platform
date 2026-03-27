'use client';

import { useState, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { localeNames, localeRegions, type Locale } from '@/i18n/config';

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function switchLocale(newLocale: Locale) {
    router.replace(pathname, { locale: newLocale });
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-glass transition-colors text-sm"
        aria-label="Language"
      >
        <Globe size={16} />
        <span className="hidden sm:inline">{localeNames[locale]}</span>
        <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute end-0 top-full mt-2 w-72 max-h-96 overflow-y-auto bg-bg-elevated rounded-xl border border-border shadow-2xl z-50">
          {Object.entries(localeRegions).map(([region, regionLocales]) => (
            <div key={region}>
              <div className="px-3 py-2 text-xs font-semibold text-text-muted uppercase tracking-wider border-b border-border/50">
                {region}
              </div>
              {regionLocales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => switchLocale(loc)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 text-sm transition-colors ${
                    loc === locale
                      ? 'text-accent-gold bg-accent-gold/5'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface-glass'
                  }`}
                >
                  <span>{localeNames[loc]}</span>
                  {loc === locale && <Check size={14} className="text-accent-gold" />}
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
