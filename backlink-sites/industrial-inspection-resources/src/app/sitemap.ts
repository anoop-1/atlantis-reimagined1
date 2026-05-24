import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://industrial-inspection-resources.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-24', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/case-studies`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/industries`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/industries/aerospace-inspection`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/industries/oil-gas-inspection`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/industries/power-generation-inspection`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/standards`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/standards/api-inspection-codes`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/standards/asme-codes-ndt`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/technology`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/technology/digital-twins-asset-management`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/technology/erp-for-inspection-companies`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/technology/ndt-reporting-software`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/topics`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/topics/cross-sector-ndt-program-benchmarks-2026`, lastModified: '2024-09-04', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/topics/building-an-in-house-vs-outsourced-ndt-program`, lastModified: '2025-02-05', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/topics/integrity-data-management-platforms-buyer-guide`, lastModified: '2025-06-25', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/topics/training-budget-allocation-ndt-team`, lastModified: '2025-10-08', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/topics/iso-9712-vs-asnt-snt-tc-1a-multi-region-teams`, lastModified: '2026-03-12', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/topics/multi-method-ndt-team-staffing-model`, lastModified: '2025-05-30', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/topics/inspection-contract-clauses-that-protect-the-owner`, lastModified: '2025-09-13', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/topics/mobilization-demobilization-cost-discipline`, lastModified: '2025-12-10', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/topics/standard-operating-procedures-for-cross-discipline-teams`, lastModified: '2026-03-11', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/topics/benchmarking-cost-per-weld-inspected-2026`, lastModified: '2026-05-04', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
