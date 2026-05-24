import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pipeline-integrity-guide.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-24', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/methods`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/standards`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/case-studies`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/case-studies/in-line-inspection-tool-selection-mfl-vs-ut-vs-emat`, lastModified: '2024-08-19', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/case-studies/direct-assessment-eca-dca-ica-which-when`, lastModified: '2024-12-03', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/case-studies/crack-management-program-pipeline-asme-b31-8s`, lastModified: '2025-04-08', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/case-studies/pipeline-coating-disbondment-detection-tools`, lastModified: '2025-09-02', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/case-studies/pipeline-rehabilitation-options-composite-vs-steel-sleeve`, lastModified: '2026-04-04', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/case-studies/ili-data-validation-workflow-anomaly-truth-table`, lastModified: '2025-05-15', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/case-studies/pipeline-girth-weld-quality-management-eca-strain`, lastModified: '2025-08-26', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/case-studies/class-location-changes-mop-and-the-inspector-implications`, lastModified: '2025-11-26', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/case-studies/pipeline-leak-detection-program-design-cpm-vs-extended`, lastModified: '2026-02-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/case-studies/integrity-verification-process-post-spike-hydrotest`, lastModified: '2026-05-04', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
