import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://corrosion-management-ndt.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-24', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/industry`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/industry/pipeline`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/industry/refinery`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/ndt-methods`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/ndt-methods/guided-wave`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/ndt-methods/mfl`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/ndt-methods/ut-thickness`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/standards`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/standards/nace`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/types`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/types/cui`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/types/erosion`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/types/mic`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/types/pitting`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/types/scc`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/management`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/management/cui-inspection-strategy-when-to-strip-insulation`, lastModified: '2024-08-28', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/management/ph-monitoring-vs-corrosion-coupons-which-data-trust`, lastModified: '2025-03-04', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/management/msl-stress-corrosion-cracking-austenitic-stainless`, lastModified: '2025-08-19', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/management/inhibitor-injection-program-effectiveness-monitoring`, lastModified: '2025-12-22', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/management/building-corrosion-management-program-iso-55000`, lastModified: '2026-04-30', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/management/sweet-vs-sour-corrosion-inspection-program-design`, lastModified: '2025-05-26', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/management/microbiologically-influenced-corrosion-mic-detection`, lastModified: '2025-09-19', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/management/erosion-corrosion-vs-flow-accelerated-corrosion`, lastModified: '2025-12-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/management/galvanic-corrosion-prevention-design-and-inspection`, lastModified: '2026-03-14', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/management/corrosion-rate-vs-thickness-trends-what-the-data-says`, lastModified: '2026-05-10', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
