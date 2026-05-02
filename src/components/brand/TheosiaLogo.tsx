'use client';

export default function TheosiaLogo({ className = '', size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Dark navy background rounded square */}
      <rect x="0" y="0" width="120" height="120" rx="24" fill="#0f1b2d" />

      {/* Open book - left page */}
      <path
        d="M24 35 Q36 31 56 33 L56 88 Q36 86 24 90 Z"
        fill="#f5f0e8"
        stroke="#d4c9a8"
        strokeWidth="0.5"
      />

      {/* Open book - right page */}
      <path
        d="M96 35 Q84 31 64 33 L64 88 Q84 86 96 90 Z"
        fill="#f5f0e8"
        stroke="#d4c9a8"
        strokeWidth="0.5"
      />

      {/* Book spine shadow */}
      <line x1="60" y1="33" x2="60" y2="88" stroke="#c4b898" strokeWidth="1.5" />

      {/* Page lines - left */}
      <line x1="32" y1="45" x2="52" y2="44" stroke="#d4c9a8" strokeWidth="0.5" />
      <line x1="32" y1="52" x2="52" y2="51" stroke="#d4c9a8" strokeWidth="0.5" />
      <line x1="32" y1="59" x2="52" y2="58" stroke="#d4c9a8" strokeWidth="0.5" />
      <line x1="32" y1="66" x2="52" y2="65" stroke="#d4c9a8" strokeWidth="0.5" />
      <line x1="32" y1="73" x2="52" y2="72" stroke="#d4c9a8" strokeWidth="0.5" />
      <line x1="32" y1="80" x2="52" y2="79" stroke="#d4c9a8" strokeWidth="0.5" />

      {/* Page lines - right */}
      <line x1="68" y1="44" x2="88" y2="45" stroke="#d4c9a8" strokeWidth="0.5" />
      <line x1="68" y1="51" x2="88" y2="52" stroke="#d4c9a8" strokeWidth="0.5" />
      <line x1="68" y1="58" x2="88" y2="59" stroke="#d4c9a8" strokeWidth="0.5" />
      <line x1="68" y1="65" x2="88" y2="66" stroke="#d4c9a8" strokeWidth="0.5" />
      <line x1="68" y1="72" x2="88" y2="73" stroke="#d4c9a8" strokeWidth="0.5" />
      <line x1="68" y1="79" x2="88" y2="80" stroke="#d4c9a8" strokeWidth="0.5" />

      {/* Golden Cross - centered on the book */}
      <rect x="57" y="38" width="6" height="30" rx="1" fill="#c9a84c" />
      <rect x="49" y="46" width="22" height="6" rx="1" fill="#c9a84c" />

      {/* Subtle gold glow behind cross */}
      <circle cx="60" cy="54" r="18" fill="url(#crossGlow)" />
      <defs>
        <radialGradient id="crossGlow" cx="60" cy="54" r="18" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#c9a84c" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
