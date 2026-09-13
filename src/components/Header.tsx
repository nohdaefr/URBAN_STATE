import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import MobileNav from './MobileNav';
import { HeartIcon, SearchIcon, MenuIcon } from './icons';
import { useFavorites } from '../context/FavoritesContext';

const navItems = [
  { label: 'נכסים', to: '/properties' },
  { label: 'לקנייה', to: '/properties?listingType=sale' },
  { label: 'למכירה', to: '/guides/selling' },
  { label: 'אודות', to: '/about' },
  { label: 'מדריך', to: '/guides/buying' },
  { label: 'צור קשר', to: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { count } = useFavorites();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full border-b transition-all duration-300 ease-premium backdrop-blur-md
          ${scrolled ? 'bg-ivory/92 border-stone-200 py-2.5' : 'bg-ivory/80 border-transparent py-4'}`}
      >
        <div className="container-px max-w-container mx-auto flex items-center justify-between gap-6">
          <Logo />

          <nav aria-label="ניווט ראשי" className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `text-[14.5px] font-medium transition-colors duration-200 hover:text-clay-dark ${
                    isActive ? 'text-clay-dark' : 'text-charcoal-soft'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              aria-label="חיפוש נכסים"
              onClick={() => navigate('/properties')}
              className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full text-charcoal-soft
                hover:bg-stone-100 hover:text-charcoal transition-colors duration-200"
            >
              <SearchIcon />
            </button>
            <button
              type="button"
              aria-label={`נכסים שמורים${count ? `, ${count} נכסים` : ''}`}
              onClick={() => navigate('/favorites')}
              className="relative hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full text-charcoal-soft
                hover:bg-stone-100 hover:text-charcoal transition-colors duration-200"
            >
              <HeartIcon filled={count > 0} className={count > 0 ? 'text-clay' : ''} />
              {count > 0 && (
                <span className="absolute -top-0.5 -left-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-clay text-[10px] font-semibold text-ivory">
                  {count}
                </span>
              )}
            </button>

            <NavLink to="/contact" className="hidden lg:inline-flex btn-primary mr-1">
              דברו איתנו
            </NavLink>

            <button
              type="button"
              aria-label="פתיחת תפריט"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              className="inline-flex lg:hidden h-10 w-10 items-center justify-center rounded-full text-charcoal
                hover:bg-stone-100 transition-colors duration-200"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} items={navItems} favCount={count} />
    </>
  );
}
