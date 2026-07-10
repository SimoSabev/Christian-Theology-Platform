// src/components/onboarding/OnboardingModal.tsx
'use client';

import { useEffect, useState } from 'react';
import { Link } from '@/i18n/navigation';
import { LENSES, type Lens } from '@/components/lens/types';
import { useLens } from '@/components/lens/useLens';
import { X, Shield, GitCompare, TreePine, BookOpen } from 'lucide-react';

const STORAGE_KEY = 'theosis-onboarding';

const LENS_LABELS: Record<Lens, { name: string; description: string }> = {
  seeker:   { name: 'Seeker',    description: 'I\'m exploring Christianity for the first time' },
  student:  { name: 'Student',   description: 'I want to study theology systematically' },
  defender: { name: 'Defender',  description: 'I want to answer objections and defend the faith' },
  researcher: { name: 'Researcher', description: 'I need scholarly depth and primary sources' },
  all:      { name: 'All',       description: 'Show me everything without filtering' },
};

const SECTIONS = [
  { href: '/defend',  label: 'Defend the Faith', icon: Shield,   description: 'Cosmological, ontological, and historical arguments' },
  { href: '/compare', label: 'Compare Traditions', icon: GitCompare, description: 'Side-by-side doctrinal comparison' },
  { href: '/explore', label: 'Explore',           icon: TreePine, description: 'Argument trees, debate mode, and timeline' },
  { href: '/sources', label: 'Primary Sources',   icon: BookOpen, description: 'Manuscripts, church fathers, and councils' },
];

export default function OnboardingModal() {
  const { setLens, hydrated } = useLens();
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(1);
  const [chosenLens, setChosenLens] = useState<Lens | null>(null);

  useEffect(() => {
    if (!hydrated) return;
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const timer = setTimeout(() => setShow(true), 1500);
        return () => clearTimeout(timer);
      }
    } catch { /* ignore */ }
  }, [hydrated]);

  function complete() {
    if (chosenLens) setLens(chosenLens);
    try { localStorage.setItem(STORAGE_KEY, 'complete'); } catch { /* ignore */ }
    setShow(false);
  }

  function skip() {
    try { localStorage.setItem(STORAGE_KEY, 'complete'); } catch { /* ignore */ }
    setShow(false);
  }

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="onboarding-title"
      className="fixed inset-0 z-[130] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.7)' }}
    >
      <div
        className="w-full max-w-lg relative"
        style={{
          background: 'var(--color-bg-elevated)',
          border: '1px solid var(--color-border)',
          padding: '2rem',
        }}
      >
        <button
          onClick={skip}
          aria-label="Close onboarding"
          className="absolute top-4 right-4 p-1"
          style={{ color: 'var(--color-text-muted)' }}
        >
          <X size={18} />
        </button>

        {/* Step indicators */}
        <div className="flex gap-1 mb-6">
          {[1, 2, 3].map(s => (
            <div
              key={s}
              className="h-0.5 flex-1"
              style={{ background: s <= step ? 'var(--color-accent-gold)' : 'var(--color-border)' }}
            />
          ))}
        </div>

        {/* Step 1: Welcome */}
        {step === 1 && (
          <div>
            <div
              className="mb-2"
              style={{ fontFamily: 'var(--font-display)', fontSize: '0.55rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}
            >
              Welcome to Theosis
            </div>
            <h2 id="onboarding-title" className="t-h2 mb-4" style={{ fontSize: '1.5rem' }}>
              A Platform for Theological Study
            </h2>
            <p className="t-body mb-6" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
              Theosis provides scholarly apologetics, denominational comparison, primary source archives, and interactive tools — all in one place. Whether you are a skeptic, seeker, student, or defender, this platform adapts to your needs.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setStep(2)}
                className="px-5 py-2 t-caps text-xs"
                style={{ background: 'var(--color-accent-gold)', color: '#0a0e1a' }}
              >
                Get Started
              </button>
              <button onClick={skip} className="px-5 py-2 t-caps text-xs" style={{ color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' }}>
                Skip
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Choose Lens */}
        {step === 2 && (
          <div>
            <div
              className="mb-2"
              style={{ fontFamily: 'var(--font-display)', fontSize: '0.55rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}
            >
              Step 2 of 3
            </div>
            <h2 className="t-h2 mb-2" style={{ fontSize: '1.25rem' }}>Which best describes you?</h2>
            <p className="t-body text-sm mb-5" style={{ color: 'var(--color-text-muted)' }}>
              This sets your reading lens — you can change it anytime from the navigation.
            </p>
            <div className="space-y-2 mb-6">
              {LENSES.map(l => (
                <button
                  key={l}
                  onClick={() => setChosenLens(l)}
                  className="w-full text-left px-4 py-3 transition-colors"
                  style={{
                    border: `1px solid ${chosenLens === l ? 'var(--color-accent-gold)' : 'var(--color-border)'}`,
                    background: chosenLens === l ? 'rgba(212,168,83,0.08)' : 'transparent',
                  }}
                >
                  <div className="t-caps text-xs mb-0.5" style={{ color: 'var(--color-text-primary)' }}>
                    {LENS_LABELS[l].name}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
                    {LENS_LABELS[l].description}
                  </div>
                </button>
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setStep(3)}
                className="px-5 py-2 t-caps text-xs"
                style={{ background: chosenLens ? 'var(--color-accent-gold)' : 'var(--color-border)', color: '#0a0e1a' }}
              >
                Continue
              </button>
              <button onClick={() => setStep(1)} className="t-meta" style={{ color: 'var(--color-text-muted)' }}>← Back</button>
            </div>
          </div>
        )}

        {/* Step 3: Section links */}
        {step === 3 && (
          <div>
            <div
              className="mb-2"
              style={{ fontFamily: 'var(--font-display)', fontSize: '0.55rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}
            >
              Step 3 of 3
            </div>
            <h2 className="t-h2 mb-2" style={{ fontSize: '1.25rem' }}>Where would you like to start?</h2>
            <p className="t-body text-sm mb-5" style={{ color: 'var(--color-text-muted)' }}>
              Select a section or just close this dialog and explore on your own.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {SECTIONS.map(({ href, label, icon: Icon, description }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={complete}
                  className="block p-4 transition-colors hover:border-[var(--color-accent-gold)]"
                  style={{ border: '1px solid var(--color-border)', background: 'var(--color-bg-secondary)' }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon size={14} style={{ color: 'var(--color-accent-gold)' }} />
                    <span className="t-caps text-xs" style={{ color: 'var(--color-text-primary)' }}>{label}</span>
                  </div>
                  <p className="text-xs" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>{description}</p>
                </Link>
              ))}
            </div>
            <button
              onClick={complete}
              className="t-meta underline"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Explore on my own →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
