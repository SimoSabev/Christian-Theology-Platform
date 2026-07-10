// src/components/ornament/InscribedDate.tsx

const ROMAN: ReadonlyArray<readonly [number, string]> = [
  [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
  [100, 'C'],  [90, 'XC'],  [50, 'L'],  [40, 'XL'],
  [10, 'X'],   [9, 'IX'],   [5, 'V'],   [4, 'IV'],
  [1, 'I'],
];

function toRoman(n: number): string {
  let out = '';
  let rem = n;
  for (const [val, sym] of ROMAN) {
    while (rem >= val) { out += sym; rem -= val; }
  }
  return out;
}

type Props = { year: number; prefix?: string; className?: string };

/**
 * Stone-inscription date, e.g. A · D · MMXXVI.
 * `prefix` defaults to 'A·D'.
 */
export default function InscribedDate({ year, prefix = 'A·D', className = '' }: Props) {
  return (
    <span className={`t-eyebrow ${className}`} style={{ letterSpacing: '0.5em' }}>
      {prefix.split('').join('·')} · {toRoman(year)}
    </span>
  );
}
