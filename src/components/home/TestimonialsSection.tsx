import { testimonials } from '../../data/testimonials';
import TestimonialCard from '../TestimonialCard';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 bg-stone-100/60">
      <div className="container-px max-w-container mx-auto">
        <SectionHeading eyebrow="לקוחות מספרים" title="מה אומרים עלינו" align="center" />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 80}>
              <TestimonialCard testimonial={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
