import { WhatsappIcon, PhoneIcon } from './icons';

export default function StickyMobileCta() {
  return (
    <div
      className="fixed bottom-0 inset-x-0 z-30 md:hidden border-t border-stone-200 bg-ivory/95 backdrop-blur-md
        px-4 py-2.5 flex items-center gap-2.5"
      style={{ paddingBottom: 'max(0.625rem, env(safe-area-inset-bottom))' }}
    >
      <a
        href="tel:+972501234567"
        className="btn-secondary flex-1 py-3 text-[13.5px]"
        aria-label="התקשרו אלינו"
      >
        <PhoneIcon width={16} height={16} />
        התקשרו
      </a>
      <a
        href="https://wa.me/972501234567"
        target="_blank"
        rel="noreferrer"
        className="btn-primary flex-1 py-3 text-[13.5px]"
        aria-label="שלחו הודעה בוואטסאפ"
      >
        <WhatsappIcon width={16} height={16} />
        WhatsApp
      </a>
    </div>
  );
}
