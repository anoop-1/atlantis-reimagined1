import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://coating-inspection-guide.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-24', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/defects`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/methods`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/standards`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/inspections`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/inspections/ssp-sp10-vs-sp5-blast-profile-decisions`, lastModified: '2024-08-30', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/inspections/wet-film-thickness-vs-dry-film-thickness-when-each-fails`, lastModified: '2025-02-10', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/inspections/holiday-detection-low-voltage-vs-high-voltage`, lastModified: '2025-07-03', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/inspections/tsa-thermal-spray-aluminum-inspection-cui`, lastModified: '2025-12-09', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/inspections/coating-failure-modes-osmotic-blistering-cathodic-disbondment`, lastModified: '2026-04-19', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/inspections/ndt-coating-inspector-day-one-jobsite-kit`, lastModified: '2025-05-23', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/inspections/dew-point-vs-substrate-temp-painting-decision-rule`, lastModified: '2025-09-02', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/inspections/fiber-glass-and-frp-coating-inspection-considerations`, lastModified: '2025-11-22', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/inspections/tank-internal-lining-inspection-acceptance-criteria`, lastModified: '2026-02-27', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/inspections/pipe-coating-fbe-vs-3lpe-vs-3lpp-when-each-fits`, lastModified: '2026-05-09', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/blog/managing-coating-inspection-data-with-erp`, lastModified: '2025-02-11', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/blog/corrosion-and-coating-in-a-digital-twin`, lastModified: '2025-06-19', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/blog/coating-inspection-records-that-survive-a-warranty-dispute`, lastModified: '2026-07-14', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: '2026-07-28', changeFrequency: 'weekly' as const, priority: 0.8 },
  ];
}
