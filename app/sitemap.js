import { SITE_URL } from '@/content/seo';

export default function sitemap() {
  const routes = [
    '',
    '/experience',
    '/contact',
    '/project-visionfacts',
    '/project-analytics-agent',
    '/project-edubotix',
    '/project-drill-bit-inspection',
    '/project-led-inspection',
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/project-') ? 0.8 : 0.7,
  }));
}
