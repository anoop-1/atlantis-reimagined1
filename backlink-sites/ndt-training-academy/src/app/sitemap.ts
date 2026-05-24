import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ndt-training-academy.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-24', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/career`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/certifications`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/certifications/api-exam-prep`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/certifications/asnt-study-guide`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/regional`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/regional/india`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/regional/middle-east`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/regional/usa`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/training`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/training/mt-pt-training`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/training/rt-training`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/training/ut-training`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/curriculum`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/curriculum/designing-a-level-ii-ut-course-syllabus`, lastModified: '2024-09-09', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/curriculum/practical-vs-theory-hours-snt-tc-1a-vs-cp-189`, lastModified: '2025-02-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/curriculum/building-an-ndt-school-business-model`, lastModified: '2025-07-12', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/curriculum/online-vs-in-person-ndt-courses-where-each-wins`, lastModified: '2025-11-25', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/curriculum/eye-exam-jaeger-near-vision-ndt-acceptance`, lastModified: '2026-04-06', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/curriculum/designing-a-paut-level-ii-practical-program`, lastModified: '2025-05-11', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/curriculum/mt-and-pt-practical-stations-for-classroom-courses`, lastModified: '2025-09-19', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/curriculum/how-to-write-an-snt-tc-1a-employer-written-practice`, lastModified: '2025-12-17', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/curriculum/scheduling-and-tracking-on-the-job-training-hours`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/curriculum/pcn-vs-cswip-vs-asnt-for-european-students`, lastModified: '2026-05-08', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
