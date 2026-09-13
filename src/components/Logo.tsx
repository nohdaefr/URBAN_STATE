import { Link } from 'react-router-dom';

export default function Logo({ dark = false }: { dark?: boolean }) {
  const color = dark ? '#FAF7F1' : '#1B1A18';
  return (
    <Link
      to="/"
      className="flex items-center gap-2.5 shrink-0"
      aria-label="Urban Estate — דף הבית"
    >
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
        <path d="M4 19L13 6L22 19" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
        <line x1="4" y1="19" x2="22" y2="19" stroke="#A6552F" strokeWidth="1.6" />
      </svg>
      <span
        className={`font-serif text-[18px] tracking-[0.08em] leading-none ${dark ? 'text-ivory' : 'text-charcoal'}`}
      >
        URBAN ESTATE
      </span>
    </Link>
  );
}
