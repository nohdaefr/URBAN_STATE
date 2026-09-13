import type { ReactNode } from 'react';
import Reveal from './Reveal';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'start',
  action,
  dark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'start' | 'center';
  action?: ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-4 ${
        align === 'center' ? 'items-center text-center mx-auto' : 'items-start'
      } ${action ? 'sm:flex-row sm:items-end sm:justify-between text-start' : ''}`}
    >
      <Reveal>
        <div className={align === 'center' ? 'text-center' : ''}>
          {eyebrow && <p className="label-eyebrow mb-3">{eyebrow}</p>}
          <h2 className={`text-display-md font-serif max-w-2xl ${dark ? 'text-ivory' : 'text-charcoal'}`}>{title}</h2>
          {subtitle && (
            <p className={`mt-4 max-w-xl text-[15.5px] leading-relaxed ${dark ? 'text-ivory/65' : 'text-charcoal-muted'}`}>
              {subtitle}
            </p>
          )}
        </div>
      </Reveal>
      {action && <Reveal delay={100}>{action}</Reveal>}
    </div>
  );
}
