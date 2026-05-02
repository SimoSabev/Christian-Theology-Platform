// src/components/lens/LensProvider.tsx
'use client';

import { createContext, useCallback, useEffect, useState, ReactNode } from 'react';
import { DEFAULT_LENS, Lens, LENSES, STORAGE_KEY } from './types';

type Ctx = {
  lens: Lens;
  setLens: (l: Lens) => void;
  hydrated: boolean;
};

export const LensContext = createContext<Ctx>({
  lens: DEFAULT_LENS,
  setLens: () => {},
  hydrated: false,
});

function isLens(value: string | null): value is Lens {
  return !!value && (LENSES as readonly string[]).includes(value);
}

export default function LensProvider({ children }: { children: ReactNode }) {
  const [lens, setLensState] = useState<Lens>(DEFAULT_LENS);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (isLens(stored)) setLensState(stored);
    } catch {
      // localStorage unavailable — ignore
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.dataset.lens = lens;
  }, [lens, hydrated]);

  const setLens = useCallback((l: Lens) => {
    setLensState(l);
    try { localStorage.setItem(STORAGE_KEY, l); } catch { /* ignore */ }
  }, []);

  return <LensContext.Provider value={{ lens, setLens, hydrated }}>{children}</LensContext.Provider>;
}
