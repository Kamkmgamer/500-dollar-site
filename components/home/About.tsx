import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';

export function About() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-accent text-sm uppercase tracking-[0.2em] mb-2">Our Story</p>
            <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-6">
              A Passion for Authentic Italian Cuisine
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Bella Italia was founded in 2010 by Chef Marco Rossi, bringing authentic Italian recipes 
              passed down through generations. Our kitchen uses only the freshest locally-sourced 
              ingredients to create dishes that transport you straight to the Italian countryside.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Every dish we serve is crafted with love and dedication to tradition. From our handmade 
              pasta to our signature sauces, we believe in the power of simple, quality ingredients 
              prepared with care and expertise.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group"
            >
              Learn More About Us
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-square relative rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
                  alt="Restaurant interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent/20 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
