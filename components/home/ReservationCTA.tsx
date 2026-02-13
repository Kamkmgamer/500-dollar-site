import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export function ReservationCTA() {
  return (
    <section className="py-20 md:py-28 bg-secondary relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <Container>
        <div className="relative text-center max-w-3xl mx-auto">
          <p className="text-accent text-sm uppercase tracking-[0.2em] mb-2">Reserve Your Table</p>
          <h2 className="font-heading text-3xl md:text-5xl text-white mb-6">
            Join Us for an Unforgettable Evening
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Whether it&apos;s a romantic dinner, family celebration, or business gathering, 
            we&apos;re here to make your experience special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact#reservation" variant="secondary" size="lg">
              Make Reservation
            </Button>
            <Button href="tel:+15551234567" variant="outline-light" size="lg">
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
