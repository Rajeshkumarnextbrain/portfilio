import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Rajesh Kumar S | Senior AI Engineer — Computer Vision & GenAI',
  description: 'Portfolio of Rajesh Kumar S, Senior AI Engineer specializing in low-latency RTSP video analytics, Vision-Language Models (Gemma E4B), and high-throughput TensorRT / Triton pipelines.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-surface-container-lowest font-body-md text-body-md text-on-surface min-h-screen selection:bg-primary-container selection:text-on-primary-container">
        <Navbar />
        <main className="w-full pt-16 bg-surface-container-lowest">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
