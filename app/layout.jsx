import './globals.css';
import { Manrope, Space_Grotesk, Space_Mono, Playfair_Display } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MotionProvider from '../components/motion/MotionProvider';
import { IDENTITY } from '../content/facts';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-manrope',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-space-mono',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-playfair',
});

import { SITE_URL, ROOT_METADATA } from '../content/seo';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: ROOT_METADATA.title,
  description: ROOT_METADATA.description,
  alternates: {
    canonical: ROOT_METADATA.canonical,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: ROOT_METADATA.title.default,
    description: ROOT_METADATA.description,
    url: '/',
    siteName: ROOT_METADATA.siteName,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: ROOT_METADATA.title.default,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: ROOT_METADATA.title.default,
    description: ROOT_METADATA.description,
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${spaceGrotesk.variable} ${spaceMono.variable} ${playfairDisplay.variable}`}
    >
      <head>
        <noscript>
          <style>{`[data-motion]{opacity:1!important;transform:none!important;clip-path:none!important;}`}</style>
        </noscript>
      </head>
      <body
        suppressHydrationWarning
        className="bg-surface font-body-md text-on-surface antialiased selection:bg-secondary-container selection:text-on-secondary min-h-screen flex flex-col"
      >
        <MotionProvider>
          <Navbar />
          <div className="flex-1 w-full">{children}</div>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
