import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://oil-gas-inspection-guide.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-24', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/api-codes`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/api-codes/api-510-pressure-vessels`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/api-codes/api-570-piping`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/api-codes/api-571-damage-mechanisms`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/api-codes/api-579-fitness-for-service`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/api-codes/api-580-rbi`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/api-codes/api-653-complete-guide`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/downstream`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/downstream/boiler-inspection`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/downstream/heat-exchanger-tubes`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/downstream/refinery-turnaround`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/downstream/storage-tank-inspection`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/resources/api-code-comparison`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/resources/glossary`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/standards`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/standards/asme-section-v`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/standards/aws-d1-1`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/technology`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/technology/automated-ut-pipelines`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/technology/digital-twins-oil-gas`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/technology/drone-inspection`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/upstream`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/upstream/fpso-inspection`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/upstream/offshore-platform-ndt`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/upstream/subsea-pipeline`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/sectors`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/sectors/upstream-midstream-downstream-inspection-budget-allocation`, lastModified: '2024-10-02', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/sectors/crude-oil-storage-tank-inspection-api-653-walkthrough`, lastModified: '2025-02-25', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/sectors/gathering-system-pipeline-inspection-cost-effective`, lastModified: '2025-07-09', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/sectors/wellhead-inspection-and-pressure-testing`, lastModified: '2025-12-08', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/sectors/lact-skid-and-meter-prover-inspection`, lastModified: '2026-04-11', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/sectors/gas-processing-plant-inspection-priority-units`, lastModified: '2025-05-22', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/sectors/subsurface-safety-valve-inspection-essentials`, lastModified: '2025-08-24', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/sectors/separator-and-knockout-drum-inspection`, lastModified: '2025-12-04', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/sectors/midstream-station-yard-inspection-pump-compressor`, lastModified: '2026-03-15', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/sectors/lease-tank-battery-inspection-program`, lastModified: '2026-05-12', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
