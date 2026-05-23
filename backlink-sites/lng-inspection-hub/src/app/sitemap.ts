import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lng-inspection-hub.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-23', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/equipment`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/safety`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/terminals`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/guides`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/guides/cryogenic-tank-inspection-9-percent-nickel-steel`, lastModified: '2024-08-16', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/guides/lng-loading-arm-inspection-program`, lastModified: '2025-01-14', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/guides/lng-piping-weld-acceptance-criteria`, lastModified: '2025-06-30', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/guides/small-scale-lng-asset-integrity-program`, lastModified: '2025-11-21', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/guides/bog-compressor-inspection-and-monitoring`, lastModified: '2026-04-09', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
