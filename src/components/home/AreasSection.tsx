import { cities } from '../../data/cities';
import CityCard from '../CityCard';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function AreasSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-px max-w-container mx-auto">
        <SectionHeading
          eyebrow="פריסה גאוגרפית"
          title="אנחנו מכירים את האזור מבפנים"
          subtitle="הפעילות שלנו ממוקדת בערים שאנחנו באמת מכירים — כל רחוב, כל שכונה וההיסטוריה שמאחוריה."
          align="center"
        />

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {cities.map((city, i) => (
            <Reveal key={city.id} delay={i * 60} className={i === 0 ? 'col-span-2 sm:col-span-1' : ''}>
              <CityCard city={city} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
