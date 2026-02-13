import { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { menuCategories } from '@/data/menu';

export const metadata: Metadata = {
  title: 'Menu',
  description: 'Explore our authentic Italian menu featuring fresh handmade pasta, wood-fired pizza, and classic Italian dishes.',
};

export default function MenuPage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <section className="bg-secondary text-white py-20 mt-16">
          <Container>
            <div className="text-center">
              <p className="text-accent text-sm uppercase tracking-[0.2em] mb-2">Culinary Excellence</p>
              <h1 className="font-heading text-4xl md:text-5xl mb-4">Our Menu</h1>
              <div className="w-16 h-0.5 bg-accent mx-auto" />
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24 bg-cream">
          <Container size="narrow">
            {menuCategories.map((category, catIndex) => (
              <div key={category.id} className={catIndex > 0 ? 'mt-12' : ''}>
                <div className="text-center mb-8">
                  <h2 className="font-heading text-2xl md:text-3xl text-secondary mb-2">
                    {category.name}
                  </h2>
                  {category.description && (
                    <p className="text-gray-500 text-sm">{category.description}</p>
                  )}
                  <div className="w-12 h-0.5 bg-primary mx-auto mt-3" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                    >
                      {item.image && (
                        <div className="relative h-48 w-full">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-heading text-lg text-secondary">{item.name}</h3>
                              {item.popular && (
                                <span className="bg-accent text-gray-900 text-xs px-2 py-0.5 rounded font-semibold">
                                  Popular
                                </span>
                              )}
                            </div>
                            <p className="text-gray-500 text-sm">{item.description}</p>
                            {item.tags && item.tags.length > 0 && (
                              <div className="flex gap-2 mt-2">
                                {item.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                          <span className="text-primary font-semibold text-lg whitespace-nowrap">
                            ${item.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
