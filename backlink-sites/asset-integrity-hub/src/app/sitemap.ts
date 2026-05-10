import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://asset-integrity-hub.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-09', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/digital-twins`, lastModified: '2026-05-09', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/digital-twins/oil-gas`, lastModified: '2026-05-09', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/digital-twins/predictive-maintenance`, lastModified: '2026-05-09', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/erp-solutions`, lastModified: '2026-05-09', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/erp-solutions/implementation-guide`, lastModified: '2026-05-09', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/ndt-software`, lastModified: '2026-05-09', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/ndt-software/ndtconnect-review`, lastModified: '2026-05-09', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/ndt-software/reporting-tools`, lastModified: '2026-05-09', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: '2026-05-09', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/blog/risk-based-inspection-vs-time-based-which-cuts-cost-more`, lastModified: '2024-09-30', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/blog/building-an-asset-integrity-management-system-12-month-roadmap`, lastModified: '2025-01-15', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/blog/fitness-for-service-api-579-when-to-use-which-level`, lastModified: '2025-05-22', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/blog/measuring-asset-integrity-kpis-that-actually-matter`, lastModified: '2025-10-04', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/blog/integrity-operating-windows-ow-best-practices-refineries`, lastModified: '2026-02-11', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
