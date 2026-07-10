'use client';

import { useEffect, useState } from 'react';
import { Link } from '@/i18n/navigation';
import type { Argument } from '@/data/arguments/types';
import { Eyebrow, RuleHairline } from '@/components/ornament';

type Props = {
  arg: Argument;
  categoryHref: string;
};

const SECTIONS = [
  { id: 'formal-statement',      label: 'FORMAL STATEMENT'      },
  { id: 'historical-background', label: 'HISTORICAL BACKGROUND' },
  { id: 'defense-of-premises',   label: 'DEFENSE OF PREMISES'   },
  { id: 'objections',            label: 'OBJECTIONS'            },
  { id: 'proponents',            label: 'PROPONENTS'            },
  { id: 'sources',               label: 'SOURCES'               },
];

export default function ArgumentSidebar({ arg, categoryHref }: Props) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) { setActive(entry.target.id); break; }
        }
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="hidden lg:block w-[220px] flex-shrink-0">
      <div className="sticky top-20">
        <Eyebrow className="mb-4">CONTENTS</Eyebrow>
        <nav>
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="block py-1.5 transition-colors"
              style={{
                color: active === s.id ? 'var(--color-accent-gold)' : 'var(--color-text-muted)',
                borderLeft: `2px solid ${active === s.id ? 'var(--color-accent-gold)' : 'transparent'}`,
                paddingLeft: 12,
                fontFamily: 'var(--font-display)',
                fontSize: '0.55rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              {s.label}
            </a>
          ))}
        </nav>

        {arg.relatedArguments.length > 0 && (
          <>
            <RuleHairline className="my-4" />
            <Eyebrow className="mb-3">RELATED</Eyebrow>
            <ul className="space-y-2">
              {arg.relatedArguments.map((slug) => (
                <li key={slug}>
                  <Link
                    href={`${categoryHref}/${slug}`}
                    className="block py-1 transition-colors"
                    style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)', fontSize: '0.7rem' }}
                  >
                    {slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())} →
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </aside>
  );
}
