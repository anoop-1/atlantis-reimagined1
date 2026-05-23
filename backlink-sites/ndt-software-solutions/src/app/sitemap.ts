import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ndt-software-solutions.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-23', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/buyer-guide`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/buyer-guide/implementation`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/buyer-guide/roi-calculator`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/comparisons`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/comparisons/digital-twin-platforms`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/comparisons/erp-software`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/comparisons/reporting-software`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/features`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/features/ai-defect-detection`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/features/automated-reports`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/features/inspection-dashboards`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/features/mobile-data-collection`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/industry`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/industry/aerospace`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/industry/oil-gas`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/resources`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/resources/paper-to-digital`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/solutions`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/solutions/ndt-reporting-software-buyer-checklist-2026`, lastModified: '2024-10-31', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/solutions/on-prem-vs-saas-ndt-platforms-trade-offs`, lastModified: '2025-03-22', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/solutions/integrating-ndt-data-with-cmms-sap-pm-maximo`, lastModified: '2025-08-29', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/solutions/mobile-data-capture-offline-inspection-apps`, lastModified: '2025-12-30', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/solutions/data-retention-policy-for-ndt-files-7-years-or-life-of-asset`, lastModified: '2026-04-27', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
