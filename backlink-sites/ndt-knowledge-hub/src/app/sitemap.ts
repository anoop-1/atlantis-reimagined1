import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ndt-knowledge-hub.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-24', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/certifications`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/certifications/api-510`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/certifications/api-570`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/certifications/api-653`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/certifications/asnt-level-iii`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/glossary`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/methods`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/methods/eddy-current-testing`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/methods/liquid-penetrant-testing`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/methods/magnetic-particle-testing`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/methods/radiographic-testing`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/methods/ultrasonic-testing`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/methods/visual-testing`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/resources`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/software-reviews`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/software-reviews/digital-twin-technology`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/software-reviews/ndt-erp-systems`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/guides`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/guides/ndt-method-selection-decision-framework-2026`, lastModified: '2024-11-12', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/guides/how-to-pass-asnt-level-iii-basic-exam-study-plan`, lastModified: '2025-02-04', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/guides/reading-ndt-procedures-asme-section-v-walkthrough`, lastModified: '2025-06-21', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/guides/common-ndt-acronyms-explained-glossary-2026`, lastModified: '2026-01-09', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/guides/ndt-career-paths-from-level-i-to-level-iii-engineer`, lastModified: '2026-03-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/guides/ndt-procedure-writing-from-blank-page-to-approved-doc`, lastModified: '2025-05-08', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/guides/practical-vt-checklist-for-new-level-i-inspectors`, lastModified: '2025-09-14', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/guides/reading-ut-a-scans-without-getting-fooled`, lastModified: '2025-12-02', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/guides/building-a-personal-ndt-study-library-2026`, lastModified: '2026-02-19', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/guides/practical-rt-film-interpretation-from-density-to-defect`, lastModified: '2026-05-12', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
