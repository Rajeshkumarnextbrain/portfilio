import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Rajesh Kumar S — Senior AI Engineer & Vision Systems Architect',
  description:
    'Editorial engineering portfolio of Rajesh Kumar S. Computer Vision, Vision-Language Models, and Generative AI systems serving real-world operations at scale.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-surface font-body-md text-on-surface antialiased selection:bg-secondary-container selection:text-on-secondary min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
