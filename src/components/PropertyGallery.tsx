import { useCallback, useEffect, useRef, useState } from 'react';
import SmartImage from './ui/SmartImage';
import { ArrowIcon, CloseIcon, ExpandIcon } from './icons';

export default function PropertyGallery({ images, title, seed }: { images: string[]; title: string; seed: string }) {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i + dir + images.length) % images.length),
    [images.length]
  );

  useEffect(() => {
    if (!lightbox) return;
    triggerRef.current = document.activeElement as HTMLButtonElement | null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(false);
      if (e.key === 'ArrowRight') go(-1);
      if (e.key === 'ArrowLeft') go(1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      triggerRef.current?.focus();
    };
  }, [lightbox, go]);

  return (
    <div>
      <div className="relative aspect-[4/3] sm:aspect-[16/9] overflow-hidden rounded-md bg-stone-200">
        <SmartImage
          key={index}
          src={images[index]}
          seed={`${seed}-${index}`}
          alt={`${title} — תמונה ${index + 1} מתוך ${images.length}`}
          className="h-full w-full object-cover animate-fadeIn"
          loading="eager"
        />

        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="התמונה הקודמת"
          className="absolute top-1/2 -translate-y-1/2 right-3 h-10 w-10 rounded-full bg-ivory/90 backdrop-blur-sm
            flex items-center justify-center hover:bg-ivory transition-colors duration-200"
        >
          <ArrowIcon width={17} height={17} />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="התמונה הבאה"
          className="absolute top-1/2 -translate-y-1/2 left-3 h-10 w-10 rounded-full bg-ivory/90 backdrop-blur-sm
            flex items-center justify-center hover:bg-ivory transition-colors duration-200"
        >
          <ArrowIcon width={17} height={17} className="rotate-180" />
        </button>

        <button
          type="button"
          onClick={() => setLightbox(true)}
          className="absolute bottom-3 left-3 h-9 w-9 rounded-full bg-ivory/90 backdrop-blur-sm flex items-center justify-center hover:bg-ivory"
          aria-label="תצוגה מלאה"
        >
          <ExpandIcon width={15} height={15} />
        </button>

        <span className="absolute bottom-3 right-3 badge" dir="ltr">
          {index + 1} / {images.length}
        </span>
      </div>

      <div className="mt-3 flex gap-2.5 overflow-x-auto pb-1 -mx-1 px-1" role="tablist" aria-label="תמונות נוספות">
        {images.map((src, i) => (
          <button
            key={src + i}
            type="button"
            role="tab"
            aria-selected={i === index}
            onClick={() => setIndex(i)}
            className={`relative h-16 w-20 sm:h-20 sm:w-28 shrink-0 overflow-hidden rounded transition-all duration-200
              ${i === index ? 'ring-2 ring-clay' : 'opacity-70 hover:opacity-100'}`}
          >
            <SmartImage src={src} seed={`${seed}-${i}`} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] bg-charcoal flex flex-col animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label={`תצוגה מלאה — ${title}`}
        >
          <div className="flex items-center justify-between px-5 py-4 text-ivory">
            <span className="text-[13px]" dir="ltr">
              {index + 1} / {images.length}
            </span>
            <button
              type="button"
              onClick={() => setLightbox(false)}
              ref={closeRef}
              aria-label="סגירה"
              className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-ivory/10"
            >
              <CloseIcon />
            </button>
          </div>
          <div className="relative flex-1 flex items-center justify-center px-4 pb-6">
            <SmartImage
              key={index}
              src={images[index]}
              seed={`${seed}-${index}`}
              alt={`${title} — תמונה ${index + 1}`}
              className="max-h-full max-w-full object-contain animate-fadeIn"
            />
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="התמונה הקודמת"
              className="absolute top-1/2 -translate-y-1/2 right-4 h-11 w-11 rounded-full bg-ivory/10 text-ivory flex items-center justify-center hover:bg-ivory/20"
            >
              <ArrowIcon width={18} height={18} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="התמונה הבאה"
              className="absolute top-1/2 -translate-y-1/2 left-4 h-11 w-11 rounded-full bg-ivory/10 text-ivory flex items-center justify-center hover:bg-ivory/20"
            >
              <ArrowIcon width={18} height={18} className="rotate-180" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
