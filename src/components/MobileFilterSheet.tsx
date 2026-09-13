import { useEffect, useRef } from 'react';
import type { FilterState } from '../lib/filters';
import { defaultFilters } from '../lib/filters';
import FilterControls from './FilterControls';
import { CloseIcon } from './icons';

export default function MobileFilterSheet({
  open,
  onClose,
  filters,
  onChange,
  resultCount,
}: {
  open: boolean;
  onClose: () => void;
  filters: FilterState;
  onChange: (f: FilterState) => void;
  resultCount: number;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    triggerRef.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
      triggerRef.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="מסננים"
    >
      <div
        onClick={onClose}
        className="absolute inset-0 bg-charcoal/50"
      />
      <div
        className={`absolute bottom-0 inset-x-0 max-h-[86vh] flex flex-col rounded-t-lg bg-ivory shadow-lift
          transition-transform duration-400 ease-premium translate-y-0`}
      >
        <div className="flex items-center justify-between border-b border-stone-200 px-5 py-4 shrink-0">
          <h2 className="font-serif text-xl">סינון נכסים</h2>
          <button
            type="button"
            onClick={onClose}
            ref={closeRef}
            aria-label="סגירה"
            className="h-9 w-9 inline-flex items-center justify-center rounded-full hover:bg-stone-100"
          >
            <CloseIcon width={20} height={20} />
          </button>
        </div>
        <div className="overflow-y-auto px-5 py-5 grow">
          <FilterControls filters={filters} onChange={onChange} />
        </div>
        <div className="shrink-0 border-t border-stone-200 px-5 py-4 flex items-center gap-3"
          style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}>
          <button type="button" onClick={() => onChange(defaultFilters)} className="btn-secondary flex-1">
            איפוס
          </button>
          <button type="button" onClick={onClose} className="btn-primary flex-[1.4]">
            הצגת {resultCount} נכסים
          </button>
        </div>
      </div>
    </div>
  );
}
