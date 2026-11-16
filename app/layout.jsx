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

const pageTitle = `${IDENTITY.name} · ${IDENTITY.headlineRole}`;
const pageDescription = `${IDENTITY.name} · ${IDENTITY.shortSummary}`;

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://rajeshkumar.dev'),
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/',
    siteName: `${IDENTITY.name} Portfolio`,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
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
