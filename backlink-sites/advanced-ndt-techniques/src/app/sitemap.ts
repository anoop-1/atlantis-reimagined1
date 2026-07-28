import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://advanced-ndt-techniques.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-24', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/automation`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/phased-array`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/software`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/deepdives`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/deepdives/paut-vs-tofd-when-to-combine`, lastModified: '2024-10-14', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/deepdives/guided-wave-screening-program-design`, lastModified: '2025-02-22', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/deepdives/eddy-current-array-for-heat-exchanger-tubes`, lastModified: '2025-08-09', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/deepdives/digital-radiography-cr-vs-dr-which-system`, lastModified: '2025-11-26', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/deepdives/automated-ut-scanner-deployment-2026`, lastModified: '2026-04-08', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/deepdives/full-matrix-capture-fmc-tfm-when-it-justifies-its-cost`, lastModified: '2025-05-27', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/deepdives/low-frequency-eddy-current-thick-aluminum-and-clad`, lastModified: '2025-09-25', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/deepdives/industrial-ct-scanning-buyers-mindset`, lastModified: '2025-12-23', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/deepdives/electromagnetic-acoustic-transducer-emat-realistic-uses`, lastModified: '2026-03-06', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/deepdives/time-of-flight-diffraction-tofd-on-thin-wall-pipe`, lastModified: '2026-05-14', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/blog/managing-paut-tofd-data-in-a-digital-twin`, lastModified: '2024-11-05', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/blog/automating-ndt-reporting-with-inspection-erp`, lastModified: '2025-09-02', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/blog/encoded-paut-data-is-worthless-without-location-identity`, lastModified: '2026-07-22', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: '2026-07-28', changeFrequency: 'weekly' as const, priority: 0.8 },
  ];
}
