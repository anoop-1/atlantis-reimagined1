import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ndt-careers-portal.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-24', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/careers`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/careers/level-iii-consultant`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/careers/ndt-inspector`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/consulting-guide`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/job-markets`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/job-markets/asia-pacific`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/job-markets/houston`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/job-markets/middle-east`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/resources`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/salary`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/salary/by-location`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/salary/by-method`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/paths`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/paths/ndt-salary-by-method-and-region-2026`, lastModified: '2024-08-09', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/paths/transitioning-from-welder-to-ndt-inspector`, lastModified: '2025-01-08', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/paths/remote-ndt-jobs-are-they-real`, lastModified: '2025-05-29', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/paths/offshore-vs-onshore-ndt-careers-financial-and-lifestyle`, lastModified: '2025-10-15', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/paths/building-a-level-iii-consulting-practice`, lastModified: '2026-03-30', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/paths/ndt-resume-templates-that-actually-pass-screening`, lastModified: '2025-05-12', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/paths/interviewing-for-an-ndt-supervisor-role`, lastModified: '2025-09-06', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/paths/side-income-options-for-a-working-ndt-inspector`, lastModified: '2025-12-03', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/paths/mid-career-pivot-from-field-ndt-to-software`, lastModified: '2026-02-23', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/paths/visa-and-relocation-for-international-ndt-work`, lastModified: '2026-05-05', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
