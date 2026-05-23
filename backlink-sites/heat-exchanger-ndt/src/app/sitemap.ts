import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://heat-exchanger-ndt.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-23', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/tube-inspection`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/tubes`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/tubes/iris-vs-ecit-vs-rfet-tube-inspection-decision`, lastModified: '2024-10-04', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/tubes/cleaning-tubes-before-ndt-why-it-decides-everything`, lastModified: '2025-02-26', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/tubes/air-cooler-tube-bundle-inspection-program`, lastModified: '2025-07-21', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/tubes/fouling-vs-corrosion-tube-signal-interpretation`, lastModified: '2025-11-30', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/tubes/plugging-vs-retubing-heat-exchanger-economics`, lastModified: '2026-04-14', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
