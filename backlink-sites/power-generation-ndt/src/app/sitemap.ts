import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://power-generation-ndt.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-23', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/career/salary-guide`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/components`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/components/boiler-tubes`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/components/condenser-tubes`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/components/hrsg`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/components/steam-turbine`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/plant-types`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/plant-types/boiler`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/plant-types/gas-turbine`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/plant-types/nuclear`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/plant-types/wind-turbine`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/standards`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/technology`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/technology/digital-twins-power`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/technology/rbi-power-plants`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/plant`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/plant/boiler-tube-inspection-program-for-fossil-plants`, lastModified: '2024-09-30', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/plant/turbine-blade-root-inspection-eddy-current-and-paut`, lastModified: '2025-03-04', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/plant/gas-turbine-hot-section-inspection-borescope-and-fpi`, lastModified: '2025-08-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/plant/condenser-tube-inspection-for-power-plants`, lastModified: '2025-12-21', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/plant/inspection-of-wind-turbine-tower-flange-bolts`, lastModified: '2026-04-17', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
