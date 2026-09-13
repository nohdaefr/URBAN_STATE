import { useState, type ImgHTMLAttributes } from 'react';
import { fallbackFor } from '../../lib/image';

interface SmartImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  orientation?: 'wide' | 'tall';
  seed?: string;
}

export default function SmartImage({ src, alt, orientation = 'wide', seed, onError, ...rest }: SmartImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [fallbackFailed, setFallbackFailed] = useState(false);

  const terminalFallback =
    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"%3E%3Crect width="1200" height="800" fill="%23e9e0d0"/%3E%3Cpath d="M0 650 280 420l180 150 190-240 260 320h290v150H0z" fill="%23bfad8c"/%3E%3C/svg%3E';

  return (
    <img
      src={fallbackFailed ? terminalFallback : currentSrc}
      alt={alt}
      loading={rest.loading ?? 'lazy'}
      decoding="async"
      {...rest}
      onError={(e) => {
        if (!fallbackFailed) {
          setCurrentSrc(fallbackFor(seed ?? src, orientation));
          setFallbackFailed(true);
        }
        onError?.(e);
      }}
    />
  );
}
