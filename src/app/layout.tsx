import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.computrontech.com'),
  title: 'Computron Tech — Premium Software Development Studio',
  description: 'We build exceptional web apps, mobile apps, and SaaS platforms that drive growth. Custom software development studio based in South Africa, serving clients worldwide.',
  keywords: 'software development, web apps, mobile apps, SaaS, API development, UI/UX design',
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
    <html lang="en" className={inter.variable}>
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
