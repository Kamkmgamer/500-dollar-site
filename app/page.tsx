import { Container } from '@/components/layout/Container';
import { Navigation } from '@/components/layout/Navigation';
import { Hero } from '@/components/home/Hero';
import { FeaturedDishes } from '@/components/home/FeaturedDishes';
import { Testimonials } from '@/components/home/Testimonials';
import { About } from '@/components/home/About';
import { ReservationCTA } from '@/components/home/ReservationCTA';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <FeaturedDishes />
        <About />
        <Testimonials />
        <ReservationCTA />
      </main>
      <Footer />
    </>
  );
}
