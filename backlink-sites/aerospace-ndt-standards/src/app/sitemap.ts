import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aerospace-ndt-standards.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-09', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/applications`, lastModified: '2026-05-09', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/applications/composite-inspection`, lastModified: '2026-05-09', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/applications/engine-overhaul`, lastModified: '2026-05-09', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/applications/fuselage-fatigue`, lastModified: '2026-05-09', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/applications/landing-gear`, lastModified: '2026-05-09', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/applications/turbine-blade`, lastModified: '2026-05-09', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/career`, lastModified: '2026-05-09', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/career/mro-vs-oem`, lastModified: '2026-05-09', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/career/salary-guide`, lastModified: '2026-05-09', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/methods`, lastModified: '2026-05-09', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/methods/digital-radiography-aviation`, lastModified: '2026-05-09', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/methods/eddy-current-aircraft`, lastModified: '2026-05-09', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/methods/phased-array-aerospace`, lastModified: '2026-05-09', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/methods/thermography-composites`, lastModified: '2026-05-09', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/standards`, lastModified: '2026-05-09', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/standards/nas-410-vs-en-4179-aerospace-certification-paths`, lastModified: '2024-08-05', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/standards/composite-aircraft-structure-ndt-cfrp-inspection`, lastModified: '2024-12-15', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/standards/engine-disk-bore-inspection-eddy-current-array`, lastModified: '2025-05-06', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/standards/nadcap-audit-readiness-aerospace-ndt-shop`, lastModified: '2025-10-21', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/standards/fluorescent-penetrant-inspection-fpi-aerospace-process-control`, lastModified: '2026-03-30', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
