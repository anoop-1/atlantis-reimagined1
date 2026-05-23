import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://advanced-ndt-techniques.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-23', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/automation`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/phased-array`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/software`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/deepdives`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/deepdives/paut-vs-tofd-when-to-combine`, lastModified: '2024-10-14', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/deepdives/guided-wave-screening-program-design`, lastModified: '2025-02-22', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/deepdives/eddy-current-array-for-heat-exchanger-tubes`, lastModified: '2025-08-09', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/deepdives/digital-radiography-cr-vs-dr-which-system`, lastModified: '2025-11-26', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/deepdives/automated-ut-scanner-deployment-2026`, lastModified: '2026-04-08', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
