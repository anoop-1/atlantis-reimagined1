import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ndt-safety-compliance.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-24', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/certifications`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/regulations`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/compliance`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/compliance/industrial-radiography-safety-program-essentials`, lastModified: '2024-09-15', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/compliance/transport-of-ndt-sources-iata-imdg`, lastModified: '2025-02-08', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/compliance/incident-investigation-after-ndt-source-loss`, lastModified: '2025-07-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/compliance/lockout-tagout-for-ut-and-mt-on-rotating-equipment`, lastModified: '2025-12-01', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/compliance/inspector-fatigue-and-pod-the-data-no-one-shares`, lastModified: '2026-04-25', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/compliance/iso-45001-and-ndt-safety-program-alignment`, lastModified: '2025-05-21', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/compliance/fume-control-during-magnetic-particle-and-penetrant`, lastModified: '2025-09-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/compliance/confined-space-entry-for-ndt-permits-and-rescue`, lastModified: '2025-12-22', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/compliance/crew-rotation-fatigue-and-fitness-for-duty-ndt`, lastModified: '2026-03-14', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/compliance/incident-reporting-near-miss-culture-for-ndt-teams`, lastModified: '2026-05-11', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
