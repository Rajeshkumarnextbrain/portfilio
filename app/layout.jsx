import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HydrationFix from '../components/HydrationFix';

export const viewport = {
  themeColor: '#0a0e13',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  title: 'Rajesh Kumar S | Senior AI Engineer — Computer Vision & GenAI',
  description: 'Portfolio of Rajesh Kumar S, Senior AI Engineer specializing in low-latency RTSP video analytics, Vision-Language Models (Gemma E4B), and high-throughput TensorRT / Triton pipelines.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth scroll-pt-20" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var origSet = Element.prototype.setAttribute;
                  Element.prototype.setAttribute = function(name, val) {
                    if (name === 'bis_skin_checked') return;
                    return origSet.call(this, name, val);
                  };
                  var origSetNode = Element.prototype.setAttributeNode;
                  Element.prototype.setAttributeNode = function(attr) {
                    if (attr && attr.name === 'bis_skin_checked') return null;
                    return origSetNode.call(this, attr);
                  };
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-surface-container-lowest font-body-md text-body-md text-on-surface min-h-screen selection:bg-primary-container selection:text-on-primary-container" suppressHydrationWarning>
        <HydrationFix />
        <Navbar />
        <main className="w-full pt-16 bg-surface-container-lowest">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
