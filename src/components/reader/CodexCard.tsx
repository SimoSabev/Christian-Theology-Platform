// src/components/reader/CodexCard.tsx
import { ReactNode, ElementType, ComponentPropsWithoutRef } from 'react';

type Props<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>;

/**
 * Solid, firm replacement for .glass-card.
 * Polymorphic via `as` prop (defaults to <div>).
 */
export default function CodexCard<T extends ElementType = 'div'>({
  as,
  children,
  className = '',
  ...rest
}: Props<T>) {
  const Component = (as ?? 'div') as ElementType;
  return (
    <Component className={`codex-card p-6 ${className}`} {...rest}>
      {children}
    </Component>
  );
}
