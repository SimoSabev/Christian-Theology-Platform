// src/components/command/CommandBarTrigger.tsx
'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Search } from 'lucide-react';
import CommandPalette from './CommandPalette';

export default function CommandBarTrigger() {
  const t = useTranslations('command');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handle(e: KeyboardEvent) {
      const isMac = navigator.platform.toUpperCase().includes('MAC');
      if ((isMac ? e.metaKey : e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen(true);
      }
    }
    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label={t('triggerAriaLabel')}
        className="flex items-center gap-2 px-3 py-2 t-caps text-xs border"
        style={{
          borderColor: 'var(--color-border)',
          color: 'var(--color-text-secondary)',
        }}
      >
        <Search size={14} />
        <span className="hidden sm:inline">{t('triggerLabel')}</span>
        <kbd
          className="hidden sm:inline"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            border: '1px solid var(--color-border)',
            padding: '0 4px',
            marginLeft: 4,
          }}
        >
          ⌘K
        </kbd>
      </button>
      <CommandPalette open={open} onClose={() => setOpen(false)} />
    </>
  );
}
