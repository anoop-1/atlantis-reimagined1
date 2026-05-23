import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://manufacturing-ndt-quality.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-23', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/automation`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/automation/ai-defect-detection`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/automation/inline-testing`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/automation/robotic-inspection`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/career`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/career/qc-inspector`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/industries`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/industries/automotive`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/industries/electronics`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/industries/heavy-equipment`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/industries/semiconductor`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/processes`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/processes/additive-manufacturing`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/processes/casting-inspection`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/processes/forging-ndt`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/standards`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/practices`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/practices/inline-ut-on-tube-mills-defect-detection`, lastModified: '2024-09-23', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/practices/casting-radiography-acceptance-by-grade`, lastModified: '2025-02-15', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/practices/supplier-quality-audit-ndt-shop`, lastModified: '2025-07-26', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/practices/additive-manufactured-parts-ndt-cap-cct-vs-ut`, lastModified: '2025-12-12', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/practices/in-process-quality-control-vs-final-ndt-trade-offs`, lastModified: '2026-04-23', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
