import { PAGE_METADATA } from '@/content/seo';

const meta = PAGE_METADATA.ledInspection;

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates: {
    canonical: meta.canonical,
  },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.canonical,
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.title,
    description: meta.description,
  },
};

export default function LedInspectionLayout({ children }) {
  return children;
}
