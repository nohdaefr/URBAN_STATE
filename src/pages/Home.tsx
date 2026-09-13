import Hero from '../components/home/Hero';
import FeaturedSection from '../components/home/FeaturedSection';
import WhySection from '../components/home/WhySection';
import AreasSection from '../components/home/AreasSection';
import ProcessSection from '../components/home/ProcessSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ValuationSection from '../components/home/ValuationSection';
import HomeContactSection from '../components/home/HomeContactSection';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function Home() {
  useDocumentMeta({
    title: 'Urban Estate | נדל״ן פרימיום בישראל',
    description: 'Urban Estate — נכסים נבחרים, ייעוץ מקצועי וליווי אישי בקנייה ומכירה של נכסים בישראל.',
  });

  return (
    <>
      <Hero />
      <FeaturedSection />
      <WhySection />
      <AreasSection />
      <ProcessSection />
      <TestimonialsSection />
      <ValuationSection />
      <HomeContactSection />
    </>
  );
}
