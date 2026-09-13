import type { Testimonial } from '../data/types';

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="card-surface p-7 sm:p-8 h-full flex flex-col">
      <span className="font-serif text-5xl text-clay/40 leading-none mb-2" aria-hidden="true">
        “
      </span>
      <blockquote className="text-[16px] leading-relaxed text-charcoal-soft grow">{testimonial.quote}</blockquote>
      <figcaption className="mt-6 pt-5 border-t border-stone-200 text-[14px]">
        <span className="font-medium text-charcoal">{testimonial.author}</span>
        <span className="text-charcoal-muted"> · {testimonial.city}</span>
      </figcaption>
    </figure>
  );
}
