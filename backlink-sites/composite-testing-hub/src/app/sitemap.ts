import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://composite-testing-hub.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-23', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/defects`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/methods`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/techniques`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/techniques/cfrp-phased-array-vs-thermography-which-finds-disbonds`, lastModified: '2024-09-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/techniques/wind-blade-inspection-from-rope-access-to-drones`, lastModified: '2025-03-25', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/techniques/sandwich-panel-honeycomb-core-defects-and-detection`, lastModified: '2025-08-20', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/techniques/shearography-on-composite-pressure-vessels`, lastModified: '2025-12-15', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/techniques/pulse-thermography-vs-lock-in-thermography-quick-decision-guide`, lastModified: '2026-04-26', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
