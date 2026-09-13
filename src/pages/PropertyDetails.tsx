import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { propertyBySlug } from '../data/properties';
import { agentById } from '../data/agents';
import { formatPrice, formatArea } from '../lib/format';
import PropertyGallery from '../components/PropertyGallery';
import PropertyFeatures from '../components/PropertyFeatures';
import PropertyLocation from '../components/PropertyLocation';
import AgentCard from '../components/AgentCard';
import ContactForm from '../components/ContactForm';
import FavoriteButton from '../components/FavoriteButton';
import Reveal from '../components/ui/Reveal';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { BedIcon, AreaIcon, FloorIcon, ShareIcon, ArrowIcon, CheckIcon } from '../components/icons';

export default function PropertyDetails() {
  const { slug } = useParams<{ slug: string }>();
  const property = slug ? propertyBySlug(slug) : undefined;
  const [shared, setShared] = useState(false);

  useDocumentMeta({
    title: property ? `${property.title} | Urban Estate` : 'נכס | Urban Estate',
    description: property?.description[0],
  });

  if (!property) return <Navigate to="/404" replace />;

  const agent = agentById(property.agentId);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: property.title, url });
      } catch {
        /* user cancelled */
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        setShared(true);
        window.setTimeout(() => setShared(false), 2000);
      } catch {
        /* clipboard unavailable */
      }
    }
  };

  const metaChips = [
    { icon: BedIcon, label: `${property.rooms} חדרים` },
    { icon: AreaIcon, label: formatArea(property.area) },
    { icon: FloorIcon, label: property.floor > 0 ? `קומה ${property.floor}` : 'קרקע' },
  ];

  return (
    <div className="container-px max-w-container mx-auto py-8 sm:py-12">
      <nav aria-label="ניווט משני" className="mb-6 text-[13px] text-charcoal-muted">
        <Link to="/properties" className="hover:text-clay-dark">נכסים</Link>
        <span className="mx-1.5">/</span>
        <span className="text-charcoal-soft">{property.title}</span>
      </nav>

      <PropertyGallery images={property.images} title={property.title} seed={property.id} />

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-12">
        <div>
          <Reveal>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="badge mb-3 inline-block">{property.status}</span>
                <h1 className="text-display-sm sm:text-display-md font-serif text-charcoal">{property.title}</h1>
                <p className="mt-2 text-[15px] text-charcoal-muted">
                  {property.neighborhood}, {property.city}
                </p>
              </div>
              <p className="text-2xl sm:text-3xl font-serif text-charcoal shrink-0">
                {formatPrice(property.price, property.listingType)}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {metaChips.map((c) => (
                <span key={c.label} className="flex items-center gap-2 rounded-full bg-stone-100 px-4 py-2 text-[13.5px] text-charcoal-soft">
                  <c.icon width={16} height={16} />
                  {c.label}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#lead-form" className="btn-primary">
                תיאום ביקור בנכס
              </a>
              <FavoriteButton propertyId={property.id} className="!h-11 !w-11 border-stone-300" />
              <button type="button" onClick={handleShare} className="btn-secondary relative">
                <ShareIcon width={16} height={16} />
                שתף
                {shared && (
                  <span className="absolute -top-9 right-0 flex items-center gap-1 rounded bg-charcoal px-2.5 py-1 text-[12px] text-ivory">
                    <CheckIcon width={12} height={12} /> הקישור הועתק
                  </span>
                )}
              </button>
            </div>
          </Reveal>

          <hr className="my-10 border-stone-200" />

          <Reveal>
            <h2 className="font-serif text-2xl mb-4">אודות הנכס</h2>
            <div className="space-y-4">
              {property.description.map((p, i) => (
                <p key={i} className="text-[15.5px] leading-[1.8] text-charcoal-soft">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <hr className="my-10 border-stone-200" />

          <Reveal>
            <h2 className="font-serif text-2xl mb-5">מאפייני הנכס</h2>
            <PropertyFeatures property={property} />
          </Reveal>

          <hr className="my-10 border-stone-200" />

          <Reveal>
            <h2 className="font-serif text-2xl mb-5">המיקום</h2>
            <PropertyLocation city={property.city} neighborhood={property.neighborhood} nearby={property.nearby} />
          </Reveal>

          <hr className="my-10 border-stone-200" />

          <Reveal>
            <h2 className="font-serif text-2xl mb-5">היועץ המלווה</h2>
            <AgentCard agent={agent} />
          </Reveal>
        </div>

        <div id="lead-form" className="scroll-mt-28">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <h2 className="font-serif text-2xl mb-1">רוצים לראות את הנכס?</h2>
              <p className="text-[14.5px] text-charcoal-muted mb-5">
                ספרו לנו מתי נוח לכם ונציג שלנו יחזור אליכם לתיאום ביקור.
              </p>
              <ContactForm title="תיאום ביקור" submitLabel="תיאום ביקור" context={property.title} compact />
              <a
                href={`https://wa.me/${agent.whatsapp}?text=${encodeURIComponent(`היי, אשמח לשמוע פרטים על ${property.title}`)}`}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary w-full mt-4"
              >
                שלחו לנו הודעה ב-WhatsApp
                <ArrowIcon width={15} height={15} className="rotate-180" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
