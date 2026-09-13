import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import StickyMobileCta from './StickyMobileCta';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-[100] focus:rounded focus:bg-charcoal focus:px-4 focus:py-2 focus:text-ivory"
      >
        דלג לתוכן הראשי
      </a>
      <Header />
      <main id="main-content" className="flex-1 pb-[74px] md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <StickyMobileCta />
    </div>
  );
}
