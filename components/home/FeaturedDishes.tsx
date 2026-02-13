import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { menuCategories } from '@/data/menu';

export function FeaturedDishes() {
  const featuredItems = menuCategories
    .flatMap((cat) => cat.items.filter((item) => item.popular))
    .slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="text-center mb-12">
          <p className="text-accent text-sm uppercase tracking-[0.2em] mb-2">Our Specialties</p>
          <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-4">Featured Dishes</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-cream rounded-lg overflow-hidden card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 relative">
                <Image
                  src={item.image || ''}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {item.popular && (
                  <span className="absolute top-3 right-3 bg-accent text-gray-900 text-xs font-semibold px-2 py-1 rounded">
                    Popular
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-heading text-lg text-secondary mb-1">{item.name}</h3>
                <p className="text-gray-500 text-sm mb-2 line-clamp-2">{item.description}</p>
                <p className="text-primary font-semibold">${item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/menu" variant="outline">
            View Full Menu
          </Button>
        </div>
      </Container>
    </section>
  );
}
