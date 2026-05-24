import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://subsea-inspection-guide.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-24', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/certification`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/materials`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/deepwater`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/deepwater/rov-inspection-class-iii-vs-class-iv-which-tooling`, lastModified: '2024-09-08', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/deepwater/subsea-pipeline-fjellsiganger-inspection-flooded-member`, lastModified: '2025-01-29', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/deepwater/cathodic-protection-survey-deepwater-cp-monitoring`, lastModified: '2025-06-04', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/deepwater/subsea-weld-flaw-sizing-with-paut-and-tofd`, lastModified: '2025-11-19', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/deepwater/fpso-hull-inspection-program-class-survey-coordination`, lastModified: '2026-03-09', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/deepwater/subsea-jumper-and-spool-inspection-2026-workflow`, lastModified: '2025-05-25', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/deepwater/subsea-manifold-anode-program-design`, lastModified: '2025-08-16', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/deepwater/rov-pilot-handoff-from-vessel-to-onshore-team`, lastModified: '2025-11-08', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/deepwater/mattress-and-stabilization-cover-inspection-pipelines`, lastModified: '2026-02-25', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/deepwater/subsea-bolts-inspection-and-replacement-strategy`, lastModified: '2026-05-08', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
