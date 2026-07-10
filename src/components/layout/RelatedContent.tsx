// src/components/layout/RelatedContent.tsx
import { Link } from '@/i18n/navigation';
import { KeystoneDivider } from '@/components/ornament';

type RelatedItemType = 'argument' | 'manuscript' | 'father' | 'council' | 'denomination' | 'way' | 'prophecy' | 'cult';

interface RelatedItem {
  title: string;
  href: string;
  type: RelatedItemType;
  description?: string;
}

interface RelatedContentProps {
  items: RelatedItem[];
}

const TYPE_LABELS: Record<RelatedItemType, string> = {
  argument: 'Argument',
  manuscript: 'Manuscript',
  father: 'Church Father',
  council: 'Council',
  denomination: 'Denomination',
  way: 'The Way',
  prophecy: 'Prophecy',
  cult: 'Cult Defense',
};

const TYPE_COLORS: Record<RelatedItemType, string> = {
  argument: 'rgba(212,168,83,0.8)',
  manuscript: 'rgba(99,179,237,0.8)',
  father: 'rgba(154,122,67,0.8)',
  council: 'rgba(160,174,192,0.8)',
  denomination: 'rgba(104,211,145,0.8)',
  way: 'rgba(183,148,244,0.8)',
  prophecy: 'rgba(252,196,25,0.8)',
  cult: 'rgba(252,129,74,0.8)',
};

export default function RelatedContent({ items }: RelatedContentProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="mt-16 mb-8">
      <KeystoneDivider className="mb-8" />
      <div
        className="mb-4"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.55rem',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'var(--color-text-muted)',
        }}
      >
        Related Content
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block group transition-opacity hover:opacity-90"
          >
            <div
              className="p-4 h-full"
              style={{
                border: '1px solid var(--color-border)',
                background: 'var(--color-bg-secondary)',
                borderRadius: 2,
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="px-2 py-0.5"
                  style={{
                    border: `1px solid ${TYPE_COLORS[item.type]}`,
                    color: TYPE_COLORS[item.type],
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.5rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    borderRadius: 2,
                  }}
                >
                  {TYPE_LABELS[item.type]}
                </span>
              </div>
              <h3
                className="mb-1 group-hover:underline"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-primary)',
                }}
              >
                {item.title}
              </h3>
              {item.description && (
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
                >
                  {item.description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
