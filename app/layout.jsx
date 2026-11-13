import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MotionProvider from '../components/motion/MotionProvider';

export const metadata = {
  title: 'Rajesh Kumar S · AI Engineer & Team Lead',
  description:
    'Rajesh Kumar S · AI Engineer & Team Lead. I build AI that watches cameras, answers questions about data and tutors students.',
  openGraph: {
    title: 'Rajesh Kumar S · AI Engineer & Team Lead',
    description:
      'Rajesh Kumar S · AI Engineer & Team Lead. I build AI that watches cameras, answers questions about data and tutors students.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
