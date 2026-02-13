import { Container } from '@/components/layout/Container';
import { testimonials } from '@/data/menu';

const sourceIcons = {
  google: 'G',
  yelp: 'Y',
  facebook: 'F',
};

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <Container>
        <div className="text-center mb-12">
          <p className="text-accent text-sm uppercase tracking-[0.2em] mb-2">Testimonials</p>
          <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-4">What Our Guests Say</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-sm mb-4 italic leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-secondary text-sm">— {testimonial.author}</span>
                <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs text-gray-500">
                  {sourceIcons[testimonial.source]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
