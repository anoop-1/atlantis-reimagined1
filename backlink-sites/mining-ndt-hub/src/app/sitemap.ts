import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mining-ndt-hub.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-23', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/equipment`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/safety`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/mining`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/mining/haul-truck-frame-crack-inspection-program`, lastModified: '2024-09-26', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/mining/mill-shell-girth-weld-inspection-sag-ball`, lastModified: '2025-02-28', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/mining/conveyor-pulley-inspection-mt-ut-vt`, lastModified: '2025-07-31', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/mining/tailings-dam-instrumentation-and-ndt-overlap`, lastModified: '2025-12-05', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/mining/underground-mining-shaft-rope-inspection`, lastModified: '2026-04-20', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
