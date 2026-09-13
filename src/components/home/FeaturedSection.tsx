import { Link } from 'react-router-dom';
import { featuredProperties } from '../../data/properties';
import PropertyGrid from '../PropertyGrid';
import SectionHeading from '../ui/SectionHeading';
import { ArrowIcon } from '../icons';

export default function FeaturedSection() {
  const items = featuredProperties().slice(0, 6);
  return (
    <section className="py-20 sm:py-28">
      <div className="container-px max-w-container mx-auto">
        <SectionHeading
          eyebrow="מבחר אוצרות"
          title="נכסים נבחרים"
          subtitle="בחירה מצומצמת של נכסים שאנחנו באמת אוהבים."
          action={
            <Link to="/properties" className="btn-text hidden sm:inline-flex">
              לכל הנכסים
              <ArrowIcon width={14} height={14} className="rotate-180" />
            </Link>
          }
        />

        <div className="mt-12">
          <PropertyGrid properties={items} />
        </div>

        <div className="mt-10 sm:hidden">
          <Link to="/properties" className="btn-secondary w-full">
            לכל הנכסים
          </Link>
        </div>
      </div>
    </section>
  );
}
