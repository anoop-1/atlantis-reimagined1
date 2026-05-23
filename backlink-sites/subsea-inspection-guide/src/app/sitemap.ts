import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://subsea-inspection-guide.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-23', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/certification`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/materials`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/deepwater`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/deepwater/rov-inspection-class-iii-vs-class-iv-which-tooling`, lastModified: '2024-09-08', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/deepwater/subsea-pipeline-fjellsiganger-inspection-flooded-member`, lastModified: '2025-01-29', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/deepwater/cathodic-protection-survey-deepwater-cp-monitoring`, lastModified: '2025-06-04', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/deepwater/subsea-weld-flaw-sizing-with-paut-and-tofd`, lastModified: '2025-11-19', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/deepwater/fpso-hull-inspection-program-class-survey-coordination`, lastModified: '2026-03-09', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
