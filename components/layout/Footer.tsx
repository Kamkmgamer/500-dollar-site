import Link from 'next/link';
import { Container } from './Container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="font-display text-2xl mb-4">Bella Italia</h3>
            <p className="text-gray-300 leading-relaxed">
              Authentic Italian cuisine since 2010. Experience the taste of Italy in every bite.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors" aria-label="Facebook">
                <span className="text-sm">FB</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors" aria-label="Instagram">
                <span className="text-sm">IG</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors" aria-label="Twitter">
                <span className="text-sm">TW</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/menu', label: 'Menu' },
                { href: '/about', label: 'About Us' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg mb-4">Hours</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Monday - Thursday</li>
              <li className="text-white">11:00 AM - 9:00 PM</li>
              <li className="mt-2">Friday - Saturday</li>
              <li className="text-white">11:00 AM - 10:00 PM</li>
              <li className="mt-2">Sunday</li>
              <li className="text-white">12:00 PM - 8:00 PM</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg mb-4">Contact</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <p>123 Main Street</p>
              <p>Anytown, USA 12345</p>
              <p className="mt-3">
                <a href="tel:+15551234567" className="hover:text-accent transition-colors">
                  (555) 123-4567
                </a>
              </p>
              <p>
                <a href="mailto:info@bellaitalia.example.com" className="hover:text-accent transition-colors">
                  info@bellaitalia.example.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 py-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Bella Italia. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
