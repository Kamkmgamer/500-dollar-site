import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Gallery } from '@/components/gallery/Gallery';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Browse photos of our restaurant, dishes, events, and team at Bella Italia.',
};

export default function GalleryPage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <section className="bg-secondary text-white py-20 mt-16">
          <Container>
            <div className="text-center">
              <p className="text-accent text-sm uppercase tracking-[0.2em] mb-2">Visual Journey</p>
              <h1 className="font-heading text-4xl md:text-5xl mb-4">Our Gallery</h1>
              <div className="w-16 h-0.5 bg-accent mx-auto" />
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24 bg-cream">
          <Container>
            <Gallery />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
