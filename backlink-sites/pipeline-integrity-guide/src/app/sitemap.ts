import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pipeline-integrity-guide.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-23', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/methods`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/standards`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/case-studies`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/case-studies/in-line-inspection-tool-selection-mfl-vs-ut-vs-emat`, lastModified: '2024-08-19', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/case-studies/direct-assessment-eca-dca-ica-which-when`, lastModified: '2024-12-03', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/case-studies/crack-management-program-pipeline-asme-b31-8s`, lastModified: '2025-04-08', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/case-studies/pipeline-coating-disbondment-detection-tools`, lastModified: '2025-09-02', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/case-studies/pipeline-rehabilitation-options-composite-vs-steel-sleeve`, lastModified: '2026-04-04', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
