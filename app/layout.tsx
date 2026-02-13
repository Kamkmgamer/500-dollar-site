import type { Metadata } from "next";
import { Playfair_Display, DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-heading",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Bella Italia | Authentic Italian Restaurant",
    template: "%s | Bella Italia",
  },
  description: "Experience authentic Italian cuisine at Bella Italia. Fresh handmade pasta, wood-fired pizza, and classic Italian dishes in an elegant atmosphere.",
  keywords: ["Italian restaurant", "pasta", "pizza", "fine dining", "Anytown"],
  authors: [{ name: "Bella Italia" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bellaitalia.example.com",
    siteName: "Bella Italia",
    title: "Bella Italia | Authentic Italian Restaurant",
    description: "Experience authentic Italian cuisine at Bella Italia",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${dmSerif.variable} ${inter.variable} font-body antialiased`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded z-50">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
