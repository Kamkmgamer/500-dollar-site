import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
        alt="Bella Italia restaurant"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <p className="text-accent text-sm md:text-base uppercase tracking-[0.3em] mb-4">
          Authentic Italian Cuisine
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
          Experience the Taste of Italy
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          Fresh handmade pasta, wood-fired pizzas, and traditional recipes passed down through generations. 
          Join us for an unforgettable dining experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/menu" size="lg">
            Explore Our Menu
          </Button>
          <Button href="/contact#reservation" variant="outline-light" size="lg">
            Make Reservation
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
