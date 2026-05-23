import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://marine-offshore-ndt.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-23', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/career`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/career/offshore-salary`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/components`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/components/ballast-tank`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/components/hull-thickness`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/components/mooring-chain`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/standards`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/standards/dnv`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/standards/iacs`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/techniques`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/techniques/acfm`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/techniques/mfl-pipeline`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/vessels`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/vessels/container-ship`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/vessels/lng-carrier`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/vessels/tanker-hull`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/offshore`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/offshore/class-survey-ndt-scope-abs-dnv-lloyd`, lastModified: '2024-10-10', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/offshore/tanker-ballast-tank-inspection-coating-and-thickness`, lastModified: '2025-03-01', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/offshore/jacket-platform-girth-weld-inspection-from-rope-access`, lastModified: '2025-08-14', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/offshore/flexible-riser-inspection-techniques-emerging`, lastModified: '2025-12-19', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/offshore/in-water-survey-vs-drydock-survey-ndt-coverage`, lastModified: '2026-04-30', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
