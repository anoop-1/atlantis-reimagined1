import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ndt-automation-future.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-23', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/implementation`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/technologies`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/trends`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/future`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/future/ai-defect-detection-on-rt-films-state-of-art`, lastModified: '2024-10-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/future/robotic-crawler-pipeline-inspection-trends`, lastModified: '2025-03-19', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/future/digital-twin-for-ndt-data-architecture-2026`, lastModified: '2025-08-26', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/future/auto-paut-data-interpretation-where-its-reliable`, lastModified: '2025-12-26', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/future/cloud-vs-on-prem-ndt-data-the-2026-decision`, lastModified: '2026-04-28', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
