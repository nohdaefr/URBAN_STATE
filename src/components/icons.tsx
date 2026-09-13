import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export const HeartIcon = ({ filled, ...p }: IconProps & { filled?: boolean }) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} fill={filled ? 'currentColor' : 'none'} {...p}>
    <path d="M12 20.5s-7.5-4.6-9.9-9.3C.6 8 2 4.5 5.4 3.8c2-.4 3.9.5 5 2.2a5.6 5.6 0 0 1 1.6-1.7c1.6-1.1 3.7-.9 5.1.2 2.3 1.9 2.7 5.1 1 7.7C15.6 15.9 12 20.5 12 20.5Z" />
  </svg>
);

export const SearchIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="M20 20l-4.3-4.3" />
  </svg>
);

export const MenuIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width={22} height={22} {...base} {...p}>
    <path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" />
  </svg>
);

export const CloseIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width={22} height={22} {...base} {...p}>
    <path d="M5 5l14 14M19 5L5 19" />
  </svg>
);

export const PhoneIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...p}>
    <path d="M6 3.5c.9 0 1.7.6 1.9 1.5l.6 2.5c.2.8-.1 1.6-.7 2.1l-1 .8c1 2.4 3 4.4 5.4 5.4l.8-1c.5-.6 1.3-.9 2.1-.7l2.5.6c.9.2 1.5 1 1.5 1.9v2c0 1.1-.9 2-2 2-8.3 0-15-6.7-15-15 0-1.1.9-2 2-2Z" />
  </svg>
);

export const WhatsappIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...p}>
    <path d="M4 20l1.3-4.1A8 8 0 1 1 8.6 19L4 20Z" />
    <path d="M8.5 9.3c0 3.6 3 6.5 6.5 6.5.5 0 .9-.4.9-1v-1a.8.8 0 0 0-.6-.8l-1.7-.5a.8.8 0 0 0-.8.2l-.4.4a6 6 0 0 1-2.6-2.6l.4-.4c.2-.2.3-.5.2-.8l-.5-1.7a.8.8 0 0 0-.8-.6h-1c-.6 0-1 .4-1 .9Z" />
  </svg>
);

export const MailIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M4 6.5l8 6.5 8-6.5" />
  </svg>
);

export const MapPinIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...p}>
    <path d="M12 21s7-6.3 7-11.5a7 7 0 1 0-14 0C5 14.7 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.3" />
  </svg>
);

export const BedIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...p}>
    <path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6" />
    <path d="M3 18v2M21 18v2" />
    <path d="M3 13V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    <path d="M13 10h6" />
  </svg>
);

export const AreaIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...p}>
    <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
  </svg>
);

export const FloorIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...p}>
    <path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" />
  </svg>
);

export const ParkingIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...p}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M9.5 16V8h2.6a2.6 2.6 0 1 1 0 5.2H9.5" />
  </svg>
);

export const ElevatorIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...p}>
    <rect x="5" y="3" width="14" height="18" rx="1.5" />
    <path d="M10 8l1.5-2L13 8M10 15l1.5 2 1.5-2" />
  </svg>
);

export const BalconyIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...p}>
    <path d="M4 21V9l8-5 8 5v12" />
    <path d="M4 21h16M8 21v-6M12 21v-6M16 21v-6M4 13h16" />
  </svg>
);

export const StorageIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...p}>
    <rect x="4" y="4" width="16" height="16" rx="1.5" />
    <path d="M4 10h16M9 4v6" />
  </svg>
);

export const SafeRoomIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...p}>
    <path d="M12 3l8 3.5v5c0 5-3.4 8.4-8 9.5-4.6-1.1-8-4.5-8-9.5v-5L12 3Z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const AcIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...p}>
    <rect x="3" y="6" width="18" height="7" rx="1.5" />
    <path d="M6 17v2M10 17v3M14 17v2M18 17v3" />
  </svg>
);

export const KitchenIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...p}>
    <path d="M4 3v18M4 8h4M4 4.5c2 0 2 2 4 2" />
    <path d="M14 3v7a3 3 0 0 0 6 0V3M17 10v11" />
  </svg>
);

export const ViewIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12c2.5-3 5.5-4.5 9-4.5s6.5 1.5 9 4.5c-2.5 3-5.5 4.5-9 4.5S5.5 15 3 12Z" />
    <circle cx="12" cy="12" r="2.2" />
  </svg>
);

export const CheckIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...p}>
    <path d="M4 12.5l5 5L20 6.5" />
  </svg>
);

export const ArrowIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ChevronIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width={16} height={16} {...base} {...p}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const ShareIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...p}>
    <circle cx="18" cy="5.5" r="2.3" />
    <circle cx="6" cy="12" r="2.3" />
    <circle cx="18" cy="18.5" r="2.3" />
    <path d="M8.1 10.8l7.8-4.3M8.1 13.2l7.8 4.3" />
  </svg>
);

export const ExpandIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...p}>
    <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
  </svg>
);

export const FilterIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...p}>
    <path d="M4 6h16M7 12h10M10 18h4" />
  </svg>
);

export const SortIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...p}>
    <path d="M7 4v16M4 7l3-3 3 3M17 20V4M14 17l3 3 3-3" />
  </svg>
);
