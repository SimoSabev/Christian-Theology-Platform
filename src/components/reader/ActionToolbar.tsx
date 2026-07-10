'use client';

import { useState } from 'react';
import { Copy, BookOpen, Share2 } from 'lucide-react';
import { useLens } from '@/components/lens/useLens';

type Props = {
  argName: string;
  formattedArg: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function ActionToolbar({ argName, formattedArg, className = '', style }: Props) {
  const { lens, hydrated } = useLens();
  const [copied, setCopied] = useState(false);
  const isDefender = hydrated && lens === 'defender';

  function handleCopy() {
    navigator.clipboard.writeText(formattedArg).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function handleCite() {
    const citation = `${argName}. Study Theology Platform.`;
    navigator.clipboard.writeText(citation);
  }

  function handleShare() {
    if (typeof navigator.share !== 'undefined') {
      navigator.share({ title: argName, url: location.href });
    }
  }

  const btnStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: isDefender ? '8px 16px' : '6px 12px',
    border: '1px solid var(--color-border)',
    borderRadius: 2,
    fontFamily: 'var(--font-display)',
    fontSize: '0.625rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase' as const,
    color: 'var(--color-accent-gold)',
    background: 'transparent',
    cursor: 'pointer',
  };

  return (
    <div className={`flex flex-wrap gap-3 ${className}`} style={style}>
      <button onClick={handleCopy} style={btnStyle}>
        <Copy size={12} />
        {copied ? 'COPIED' : 'COPY ARGUMENT'}
      </button>
      <button onClick={handleCite} style={btnStyle}>
        <BookOpen size={12} />
        CITE
      </button>
      <button onClick={handleShare} style={btnStyle}>
        <Share2 size={12} />
        SHARE
      </button>
    </div>
  );
}
