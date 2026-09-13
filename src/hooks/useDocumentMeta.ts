import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function useDocumentMeta({ title, description }: { title: string; description?: string }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const prevTitle = document.title;
    const canonicalUrl = `https://urban-estate.co.il${pathname}`;
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }

    document.title = title;
    canonical.href = canonicalUrl;
    setMeta('og:url', canonicalUrl, 'property');
    setMeta('og:title', title, 'property');
    setMeta('description', description ?? '');
    setMeta('og:description', description ?? '', 'property');

    return () => {
      document.title = prevTitle;
    };
  }, [title, description, pathname]);
}
