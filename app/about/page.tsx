import { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { team } from '@/data/menu';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Bella Italia\'s story, our passion for authentic Italian cuisine, and meet our talented team.',
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <section className="bg-secondary text-white py-20 mt-16">
          <Container>
            <div className="text-center">
              <p className="text-accent text-sm uppercase tracking-[0.2em] mb-2">Since 2010</p>
              <h1 className="font-heading text-4xl md:text-5xl mb-4">Our Story</h1>
              <div className="w-16 h-0.5 bg-accent mx-auto" />
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl text-secondary mb-6">Welcome to Bella Italia</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Bella Italia was founded in 2010 by Chef Marco Rossi, bringing authentic Italian recipes 
                  passed down through generations. Our kitchen uses only the freshest locally-sourced 
                  ingredients to create dishes that transport you straight to the Italian countryside.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Every dish we serve is crafted with love and dedication to tradition. From our handmade 
                  pasta to our signature sauces, we believe in the power of simple, quality ingredients 
                  prepared with care and expertise.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our cozy dining room provides the perfect setting for romantic dinners, family gatherings, 
                  and celebrations of all kinds. We invite you to join us and experience the warmth of 
                  Italian hospitality.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-lg shadow-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
                    alt="Bella Italia restaurant interior"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-lg -z-10" />
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24 bg-cream">
          <Container>
            <div className="text-center mb-12">
              <p className="text-accent text-sm uppercase tracking-[0.2em] mb-2">Our Values</p>
              <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-4">Our Mission</h2>
              <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
            </div>
            <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              To provide an unforgettable dining experience through exceptional food, warm hospitality, 
              and a passion for Italian culinary traditions. We strive to make every guest feel like 
              family and every meal a celebration.
            </p>
          </Container>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <Container>
            <div className="text-center mb-12">
              <p className="text-accent text-sm uppercase tracking-[0.2em] mb-2">The Team</p>
              <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-4">Meet Our Experts</h2>
              <div className="w-16 h-0.5 bg-primary mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-40 h-40 mx-auto mb-4 relative rounded-full shadow-lg overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="160px"
                    />
                  </div>
                  <h3 className="font-heading text-xl text-secondary">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-gray-500 text-sm mb-2">{member.years} experience</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24 bg-secondary">
          <Container>
            <div className="text-center">
              <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
                Join Us for Dinner
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Experience the flavors of Italy in our warm, welcoming restaurant. 
                We look forward to serving you.
              </p>
              <Button href="/contact#reservation" variant="secondary" size="lg">
                Make Reservation
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
