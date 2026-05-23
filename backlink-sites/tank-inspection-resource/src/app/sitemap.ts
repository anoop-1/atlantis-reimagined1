import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tank-inspection-resource.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-23', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/above-ground`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/maintenance`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/underground`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/tanks`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/tanks/api-653-out-of-service-internal-inspection-checklist`, lastModified: '2024-09-06', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/tanks/tank-floor-mfl-vs-paut-which-fits-the-job`, lastModified: '2025-01-28', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/tanks/tank-shell-thickness-program-with-out-of-service-inspection`, lastModified: '2025-06-26', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/tanks/floating-roof-seal-inspection-and-leak-detection`, lastModified: '2025-11-15', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/tanks/soil-side-corrosion-on-tank-floors-and-detection`, lastModified: '2026-04-05', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
