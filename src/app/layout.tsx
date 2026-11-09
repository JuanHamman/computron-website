import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-space-grotesk', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.computrontech.com'),
  title: {
    default: 'Computron Tech — Web, Mobile and Desktop Software Studio',
    template: '%s · Computron Tech',
  },
  description: 'Software that ships, from a team that owns it. Computron Tech designs, builds and runs web, desktop and mobile software for clients worldwide, and makes Doppelgone. Based in South Africa.',
  keywords: 'software development, web apps, mobile apps, SaaS, API development, UI/UX design, South Africa',
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Computron Tech',
  legalName: 'Computron Tech (Pty) Ltd',
  url: 'https://www.computrontech.com',
  email: 'hello@computrontech.com',
  foundingDate: '2021',
  address: { '@type': 'PostalAddress', addressCountry: 'ZA' },
  brand: { '@type': 'Brand', name: 'Doppelgone', url: 'https://doppelgone.app' },
  owns: {
    '@type': 'SoftwareApplication',
    name: 'Doppelgone',
    url: 'https://doppelgone.app',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Chrome, Windows, macOS, iOS, Android',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
