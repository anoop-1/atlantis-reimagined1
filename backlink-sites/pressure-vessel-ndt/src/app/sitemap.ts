import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pressure-vessel-ndt.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-24', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/design`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/fabrication`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/operation`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/operation/api-510-internal-vs-external-inspection-decision`, lastModified: '2024-09-25', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/operation/asme-section-viii-fabrication-ndt-requirements-walkthrough`, lastModified: '2025-02-19', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/operation/reformer-tubes-creep-damage-monitoring-strategies`, lastModified: '2025-07-15', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/operation/corrosion-monitoring-locations-cml-selection-guide`, lastModified: '2025-12-03', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/operation/long-range-ut-screening-pressure-vessels`, lastModified: '2026-04-22', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/operation/pressure-vessel-nozzle-weld-inspection-deep-dive`, lastModified: '2025-05-17', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/operation/on-stream-inspection-with-pulsed-eddy-current`, lastModified: '2025-08-23', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/operation/pressure-vessel-thermal-relief-valve-and-prv-tie-ins`, lastModified: '2025-11-17', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/operation/low-temperature-vessel-impact-test-requirements`, lastModified: '2026-02-14', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/operation/rerating-pressure-vessels-when-it-is-worth-it`, lastModified: '2026-05-11', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
