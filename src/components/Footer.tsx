import { Link } from 'react-router-dom';
import Logo from './Logo';
import { MailIcon, PhoneIcon, WhatsappIcon } from './icons';

const columns = [
  {
    title: 'החברה',
    links: [
      { label: 'אודות', to: '/about' },
      { label: 'נכסים', to: '/properties' },
      { label: 'צור קשר', to: '/contact' },
    ],
  },
  {
    title: 'שירותים',
    links: [
      { label: 'קנייה', to: '/properties?listingType=sale' },
      { label: 'מכירה', to: '/guides/selling' },
      { label: 'השכרה', to: '/properties?listingType=rent' },
    ],
  },
  {
    title: 'מדריכים',
    links: [
      { label: 'מדריך קנייה', to: '/guides/buying' },
      { label: 'מדריך מכירה', to: '/guides/selling' },
      { label: 'הערכת שווי', to: '/guides/selling#valuation' },
    ],
  },
];

const legal = [
  { label: 'תקנון', to: '/legal/terms' },
  { label: 'מדיניות פרטיות', to: '/legal/privacy' },
  { label: 'הצהרת נגישות', to: '/legal/accessibility' },
];

const socials = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/85">
      <div className="container-px max-w-container mx-auto py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10 sm:gap-8">
          <div>
            <Logo dark />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-ivory/60">
              בוטיק נדל״ן המתמחה באיתור וליווי רכישה ומכירה של נכסים נבחרים באזור המרכז והשרון.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-ivory/20 text-xs
                    hover:border-ivory/60 hover:bg-ivory/5 transition-colors duration-200"
                >
                  {s.label[0]}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[13px] font-semibold tracking-widest2 uppercase text-ivory/50 mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-[15px] text-ivory/75 hover:text-ivory transition-colors duration-200">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-ivory/10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-[15px] text-ivory/75">
          <a href="tel:+972501234567" className="flex items-center gap-2 hover:text-ivory">
            <PhoneIcon /> 050-123-4567
          </a>
          <a
            href="https://wa.me/972501234567"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-ivory"
          >
            <WhatsappIcon /> WhatsApp
          </a>
          <a href="mailto:hello@urban-estate.co.il" className="flex items-center gap-2 hover:text-ivory">
            <MailIcon /> hello@urban-estate.co.il
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-ivory/10 flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-4 text-[13px] text-ivory/45">
          <p>© {new Date().getFullYear()} Urban Estate. כל הזכויות שמורות.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legal.map((l) => (
              <Link key={l.label} to={l.to} className="hover:text-ivory/80">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
