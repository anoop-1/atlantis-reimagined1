import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pressure-vessel-ndt.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-23', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/design`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/fabrication`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/operation`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/operation/api-510-internal-vs-external-inspection-decision`, lastModified: '2024-09-25', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/operation/asme-section-viii-fabrication-ndt-requirements-walkthrough`, lastModified: '2025-02-19', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/operation/reformer-tubes-creep-damage-monitoring-strategies`, lastModified: '2025-07-15', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/operation/corrosion-monitoring-locations-cml-selection-guide`, lastModified: '2025-12-03', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/operation/long-range-ut-screening-pressure-vessels`, lastModified: '2026-04-22', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
