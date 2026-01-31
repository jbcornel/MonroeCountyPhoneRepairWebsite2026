import Hero from '@/components/home/Hero';
import ServicesGrid from '@/components/home/ServicesGrid';
import HowItWorks from '@/components/home/HowItWorks';
import ReviewsTeaser from '@/components/home/ReviewsTeaser';
import MapSection from '@/components/home/MapSection';
import FaqAccordion from '@/components/home/FaqAccordion';

export default function HomePage() {
  return (
    <>
    <main className="mcpr-alt">
      <Hero />
      <ServicesGrid />
      <HowItWorks />
      <ReviewsTeaser />
      <MapSection />
      <FaqAccordion />
      </main>
    </>
  );
}
