# $500 Restaurant Website - "Professional Restaurant Site"

## Project Overview

**Budget**: $500
**Target**: Established local business
**Development Time**: 8-16 hours
**Best For**: Competitive local market presence, serious small business

---

## Technical Specifications

### Stack
- **Frontend**: Next.js 14+ (App Router)
- **Backend**: Next.js API Routes (serverless functions)
- **Database**: None (static data or JSON files)
- **Hosting**: Vercel (Pro tier recommended)
- **Forms**: Custom API route + email service (Resend/SendGrid free tier)
- **Styling**: Tailwind CSS
- **Animations**: CSS animations + transitions

### File Structure
```
five_hundred_dollar_site/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    # Home
│   ├── menu/
│   │   └── page.tsx                # Menu with images
│   ├── about/
│   │   └── page.tsx                # About + team
│   ├── gallery/
│   │   └── page.tsx                # Photo gallery
│   ├── contact/
│   │   └── page.tsx                # Contact + reservation request
│   ├── api/
│   │   └── contact/
│   │       └── route.ts            # Contact form API
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── FeaturedDishes.tsx
│   │   ├── Testimonials.tsx
│   │   ├── About.tsx
│   │   └── ReservationCTA.tsx
│   ├── menu/
│   │   ├── MenuCategory.tsx
│   │   ├── MenuCard.tsx
│   │   └── CategoryNav.tsx
│   ├── gallery/
│   │   └── Gallery.tsx
│   ├── contact/
│   │   ├── ContactForm.tsx
│   │   ├── ReservationForm.tsx
│   │   └── Map.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Input.tsx
├── data/
│   ├── menu.ts                     # Menu data
│   └── testimonials.ts             # Testimonials data
├── lib/
│   └── email.ts                    # Email sending utility
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── menu/
│   │   ├── gallery/
│   │   └── team/
│   └── logo.svg
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## Pages

### 1. Home Page (`/`)
**Sections:**
1. Hero - Full-screen with background video/image slider
2. Featured Dishes - Horizontal scroll or grid
3. About Preview - Story snippet + link
4. Testimonials - Carousel or grid
5. Reservation CTA - Form or link
6. Footer

### 2. Menu Page (`/menu`)
- Category navigation (tabs or sidebar)
- Menu cards with:
  - High-quality food photo
  - Name and description
  - Price
  - Dietary tags (vegetarian, gluten-free, etc.)
- Download PDF option

### 3. About Page (`/about`)
- Restaurant history/story
- Mission and values
- Team section with photos
- Photo gallery preview
- Awards/press mentions (if any)

### 4. Gallery Page (`/gallery`)
- Grid layout of photos
- Categories: Interior, Food, Events, Team
- Lightbox on click (CSS or simple JS)
- Load more or pagination

### 5. Contact Page (`/contact`)
- Contact form (general inquiries)
- Reservation request form
- Google Maps embed (interactive)
- Business hours
- Parking info
- Social media links

---

## Design Specifications

### Brand Identity
```css
/* Color Palette */
--primary: #8B2635;           /* Burgundy red */
--primary-light: #B83A4B;
--primary-dark: #6B1D29;
--secondary: #1E3A5F;         /* Navy blue */
--accent: #D4A574;            /* Gold */
--success: #2E7D32;
--warning: #F9A825;

/* Neutrals */
--white: #FFFFFF;
--cream: #FFFBF5;
--gray-100: #F5F5F5;
--gray-200: #EEEEEE;
--gray-300: #E0E0E0;
--gray-500: #9E9E9E;
--gray-700: #616161;
--gray-900: #212121;
--black: #0A0A0A;
```

### Typography
```css
/* Fonts */
--font-display: 'Playfair Display', serif;
--font-heading: 'DM Serif Display', serif;
--font-body: 'Inter', sans-serif;

/* Scale */
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */
--text-5xl: 3rem;       /* 48px */
--text-6xl: 3.75rem;    /* 60px */
```

### Spacing System
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-24: 6rem;     /* 96px */
```

### Layout
- Container max: 1280px
- Content max: 960px (for readability)
- Grid columns: 12
- Section padding: 64px mobile, 96px desktop

---

## Features

### Must Have
- [ ] 5 pages with consistent navigation
- [ ] Fully responsive (mobile-first)
- [ ] Professional animations (CSS-based)
- [ ] Working contact form with email notifications
- [ ] Reservation request form
- [ ] Menu with images and categories
- [ ] Image gallery with lightbox
- [ ] Testimonials section
- [ ] Social media integration
- [ ] Full SEO with schema markup
- [ ] Accessibility compliant (WCAG AA)

### Nice to Have
- [ ] Hero image slider/carousel
- [ ] Parallax scrolling effects
- [ ] Back-to-top button
- [ ] Loading states for forms
- [ ] Success/error notifications
- [ ] Newsletter signup
- [ ] Print-friendly menu

### Must NOT Have
- [ ] NO CMS
- [ ] NO database
- [ ] NO user accounts
- [ ] NO real-time features
- [ ] NO payment processing
- [ ] NO online ordering
- [ ] NO booking calendar

---

## Components Detail

### Hero Component
```tsx
interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaButtons?: {
    primary: { text: string; href: string };
    secondary?: { text: string; href: string };
  };
}
```
- Full viewport height (100vh) or 80vh
- Background image with dark overlay (40-50% opacity)
- Centered content
- Animated entrance (fade in)
- Scroll indicator at bottom

### Menu Card Component
```tsx
interface MenuCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  tags?: ('vegetarian' | 'gluten-free' | 'vegan' | 'spicy')[];
}
```
- Image on left or top
- Name, description, price
- Dietary tags with icons
- Hover effect (subtle scale or shadow)

### Testimonial Card
```tsx
interface TestimonialProps {
  quote: string;
  author: string;
  rating?: number;
  date?: string;
  source?: 'google' | 'yelp' | 'facebook';
}
```
- Quote with quotation marks
- Author name
- Star rating (optional)
- Platform logo (optional)

### Contact Form
```tsx
interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
}

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}
```
- Required fields validation
- Email format validation
- Success/error states
- Loading indicator

### Reservation Request Form
```tsx
interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  occasion?: string;
  specialRequests?: string;
}
```
- Date picker (native or simple)
- Time dropdown
- Guest count selector
- Occasion selector (optional)
- Special requests textarea

---

## Animations

### CSS-Based Animations
```css
/* Fade in on scroll */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Subtle hover effects */
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
}

/* Button transitions */
.button {
  transition: all 0.2s ease;
}

.button:hover {
  transform: translateY(-2px);
}

/* Image zoom on hover */
.image-container:hover img {
  transform: scale(1.05);
}
```

### Intersection Observer for Scroll Animations
```tsx
// Simple hook for scroll reveal
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  
  return { ref, isVisible };
}
```

---

## Performance Requirements

### Target Metrics
- **Lighthouse Performance**: 85+
- **Lighthouse Accessibility**: 95+
- **Lighthouse Best Practices**: 95+
- **Lighthouse SEO**: 100
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

### Optimizations Required
- [ ] Static generation for all pages
- [ ] Next.js Image with blur placeholder
- [ ] Font subsetting and preloading
- [ ] CSS code splitting
- [ ] Lazy loading for below-fold content
- [ ] Proper caching headers
- [ ] Critical CSS inlining (handled by Next.js)

### Image Requirements
| Location | Dimensions | Format | Max Size |
|----------|------------|--------|----------|
| Hero | 1920x1080 | WebP/JPEG | 200KB |
| Menu items | 800x600 | WebP/JPEG | 60KB |
| Gallery | 1200x800 | WebP/JPEG | 100KB |
| Team | 400x400 | WebP/JPEG | 40KB |
| Thumbnails | 400x300 | WebP | 30KB |

---

## SEO Requirements

### Page-Level Meta
```tsx
export const metadata: Metadata = {
  title: 'Page Title | Bella Italia',
  description: 'Page-specific description...',
  openGraph: {
    title: 'Bella Italia - Page Title',
    description: '...',
    images: ['/images/og-page.jpg'],
  },
};
```

### Schema Markup (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Bella Italia",
  "image": "https://example.com/images/restaurant.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "Anytown",
    "addressRegion": "CA",
    "postalCode": "12345"
  },
  "telephone": "(555) 123-4567",
  "priceRange": "$$",
  "servesCuisine": "Italian",
  "openingHoursSpecification": [...],
  "menu": "https://example.com/menu",
  "acceptsReservations": true
}
```

### Menu Item Schema
```json
{
  "@context": "https://schema.org",
  "@type": "MenuItem",
  "name": "Spaghetti Marinara",
  "description": "Classic spaghetti with house-made marinara sauce",
  "offers": {
    "@type": "Offer",
    "price": "14.00",
    "priceCurrency": "USD"
  }
}
```

---

## Accessibility Requirements

### WCAG 2.1 Level AA Compliance
- [ ] Color contrast ratio ≥ 4.5:1 (text)
- [ ] Color contrast ratio ≥ 3:1 (large text, UI)
- [ ] All images have meaningful alt text
- [ ] Form inputs have visible labels
- [ ] Error messages are descriptive
- [ ] Focus states visible
- [ ] Keyboard navigation works
- [ ] Skip to content link
- [ ] Proper heading hierarchy
- [ ] Links have descriptive text
- [ ] No content depends solely on color

---

## Content Requirements

### Menu Data Structure
```typescript
interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  tags?: string[];
  popular?: boolean;
  new?: boolean;
}

interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  items: MenuItem[];
}
```

### Sample Categories
1. Antipasti (Appetizers)
2. Zuppe e Insalate (Soups & Salads)
3. Pasta
4. Carne e Pesce (Meat & Fish)
5. Dolci (Desserts)
6. Bevande (Beverages)

---

## Email Integration

### Using Resend (Free Tier)
```typescript
// lib/email.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: ContactFormData) {
  return resend.emails.send({
    from: 'contact@bellaitalia.com',
    to: 'info@bellaitalia.com',
    subject: `New inquiry from ${data.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `,
  });
}
```

---

## Implementation Checklist

### Phase 1: Setup
- [ ] Initialize Next.js project
- [ ] Configure Tailwind CSS
- [ ] Set up fonts (Google Fonts)
- [ ] Create folder structure
- [ ] Set up Resend/SendGrid account

### Phase 2: Components
- [ ] Build UI components (Button, Card, Input)
- [ ] Build Navigation component
- [ ] Build Footer component
- [ ] Build Hero component
- [ ] Build MenuCard component
- [ ] Build TestimonialCard component
- [ ] Build ContactForm component
- [ ] Build ReservationForm component

### Phase 3: Pages
- [ ] Build Home page
- [ ] Build Menu page
- [ ] Build About page
- [ ] Build Gallery page
- [ ] Build Contact page

### Phase 4: Integration
- [ ] Connect forms to API routes
- [ ] Set up email notifications
- [ ] Add Google Maps
- [ ] Implement SEO

### Phase 5: Polish
- [ ] Add animations
- [ ] Optimize images
- [ ] Test responsiveness
- [ ] Accessibility audit
- [ ] Performance optimization

### Phase 6: Launch
- [ ] Final testing
- [ ] Deploy to Vercel
- [ ] Configure custom domain
- [ ] Submit sitemap to Google

---

## Comparison to $200 Tier

| Feature | $200 | $500 |
|---------|------|------|
| Pages | 4 | 5 |
| Reservation Form | No | Request form |
| Gallery | Basic | Lightbox + categories |
| Animations | Hover only | Scroll + transitions |
| Email Service | Formspree | Custom + Resend |
| SEO | Basic | Full schema |
| Performance | ~70 | ~85 |
| Components | Minimal | Full component library |

---

## Notes for Developers

This tier establishes professional standards:
- Component-driven architecture
- Proper email handling
- Professional animations
- Complete SEO implementation
- Accessibility compliance

Focus on polish and attention to detail. The site should feel intentionally designed, not templated.
