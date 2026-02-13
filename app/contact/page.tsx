import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ContactForm } from '@/components/contact/ContactForm';
import { ReservationForm } from '@/components/contact/ReservationForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Bella Italia for reservations, inquiries, or feedback. Find our location, hours, and contact information.',
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <section className="bg-secondary text-white py-20 mt-16">
          <Container>
            <div className="text-center">
              <p className="text-accent text-sm uppercase tracking-[0.2em] mb-2">Get in Touch</p>
              <h1 className="font-heading text-4xl md:text-5xl mb-4">Contact Us</h1>
              <div className="w-16 h-0.5 bg-accent mx-auto" />
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24 bg-cream">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-heading text-2xl text-secondary mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>

              <div>
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                  <h3 className="font-heading text-xl text-secondary mb-4">Contact Information</h3>
                  <div className="space-y-4 text-gray-600">
                    <div>
                      <p className="font-semibold text-secondary">Address</p>
                      <p>123 Main Street</p>
                      <p>Anytown, USA 12345</p>
                    </div>
                    <div>
                      <p className="font-semibold text-secondary">Phone</p>
                      <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                        (555) 123-4567
                      </a>
                    </div>
                    <div>
                      <p className="font-semibold text-secondary">Email</p>
                      <a href="mailto:info@bellaitalia.example.com" className="hover:text-primary transition-colors">
                        info@bellaitalia.example.com
                      </a>
                    </div>
                    <div>
                      <p className="font-semibold text-secondary">Hours</p>
                      <p>Mon-Thu: 11:00 AM - 9:00 PM</p>
                      <p>Fri-Sat: 11:00 AM - 10:00 PM</p>
                      <p>Sun: 12:00 PM - 8:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Map Embed</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="reservation" className="py-16 md:py-24 bg-white">
          <Container>
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <p className="text-accent text-sm uppercase tracking-[0.2em] mb-2">Book a Table</p>
                <h2 className="font-heading text-3xl text-secondary mb-4">Make a Reservation</h2>
                <div className="w-16 h-0.5 bg-primary mx-auto mb-4" />
                <p className="text-gray-500">
                  Request a table and we&apos;ll confirm your reservation within 24 hours.
                </p>
              </div>

              <div className="bg-cream p-6 md:p-8 rounded-lg">
                <ReservationForm />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
