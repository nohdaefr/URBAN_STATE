import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

const Properties = lazy(() => import('./pages/Properties'));
const PropertyDetails = lazy(() => import('./pages/PropertyDetails'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Favorites = lazy(() => import('./pages/Favorites'));
const BuyingGuide = lazy(() => import('./pages/BuyingGuide'));
const SellingGuide = lazy(() => import('./pages/SellingGuide'));
const Legal = lazy(() => import('./pages/Legal'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageFallback() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div
        className="h-8 w-8 rounded-full border-2 border-stone-300 border-t-clay animate-spin"
        role="status"
        aria-label="טוען"
      />
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:slug" element={<PropertyDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/guides/buying" element={<BuyingGuide />} />
          <Route path="/guides/selling" element={<SellingGuide />} />
          <Route path="/legal/terms" element={<Legal page="terms" />} />
          <Route path="/legal/privacy" element={<Legal page="privacy" />} />
          <Route path="/legal/accessibility" element={<Legal page="accessibility" />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
