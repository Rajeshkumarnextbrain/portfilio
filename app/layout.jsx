import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
      <body
        suppressHydrationWarning
        className="bg-surface font-body-md text-on-surface antialiased selection:bg-secondary-container selection:text-on-secondary min-h-screen flex flex-col"
      >
        <Navbar />
        <div className="flex-1 w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
