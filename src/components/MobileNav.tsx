import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import { CloseIcon, HeartIcon, PhoneIcon, MailIcon } from './icons';

interface NavItem {
  label: string;
  to: string;
}

export default function MobileNav({
  open,
  onClose,
  items,
  favCount,
}: {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
  favCount: number;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    triggerRef.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      triggerRef.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden opacity-100"
      role="dialog"
      aria-modal="true"
      aria-label="תפריט ניווט"
    >
      <div
        className="absolute inset-0 bg-charcoal"
      >
        <div className="flex flex-col h-full container-px pt-4 pb-8">
          <div className="flex items-center justify-between py-2">
            <Logo dark />
            <button
              type="button"
              aria-label="סגירת תפריט"
              onClick={onClose}
              ref={closeRef}
              className="h-10 w-10 inline-flex items-center justify-center rounded-full text-ivory hover:bg-ivory/10"
            >
              <CloseIcon />
            </button>
          </div>

          <nav aria-label="ניווט נייד" className="flex-1 flex flex-col justify-center gap-1 -mt-8">
            {items.map((item, i) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={onClose}
                style={{ transitionDelay: open ? `${i * 40 + 80}ms` : '0ms' }}
                className={`group flex items-center justify-between border-b border-ivory/10 py-4 font-serif text-3xl
                  text-ivory transition-all duration-500 ease-premium
                  ${open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}
              >
                <span>{item.label}</span>
                <span className="text-clay opacity-0 group-hover:opacity-100 transition-opacity">←</span>
              </NavLink>
            ))}
            <NavLink
              to="/favorites"
              onClick={onClose}
              className="flex items-center gap-2.5 border-b border-ivory/10 py-4 font-serif text-3xl text-ivory"
            >
              <HeartIcon filled={favCount > 0} />
              <span>שמורים{favCount ? ` (${favCount})` : ''}</span>
            </NavLink>
          </nav>

          <div className="flex flex-col gap-4">
            <NavLink to="/contact" onClick={onClose} className="btn-ghost-light w-full">
              דברו איתנו
            </NavLink>
            <div className="flex items-center gap-6 text-ivory/70 text-sm">
              <a href="tel:+972501234567" className="flex items-center gap-1.5 hover:text-ivory">
                <PhoneIcon /> 050-123-4567
              </a>
              <a href="mailto:hello@urban-estate.co.il" className="flex items-center gap-1.5 hover:text-ivory">
                <MailIcon /> אימייל
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
