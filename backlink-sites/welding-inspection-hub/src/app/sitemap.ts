import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://welding-inspection-hub.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-23', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/career`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/career/cwi`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/career/salary`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/defects`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/defects/cracks`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/defects/lack-of-fusion`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/defects/porosity`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/ndt-methods`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/ndt-methods/mt-weld`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/ndt-methods/paut-weld`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/ndt-methods/rt-weld`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/ndt-methods/tofd-weld`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/ndt-methods/ut-weld`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/processes`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/processes/smaw-ndt`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/standards`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/standards/api-1104`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/standards/asme-ix`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/standards/aws-d1-1`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/inspect`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/inspect/cwi-vs-cswip-vs-iwi-which-cert-for-which-market`, lastModified: '2024-08-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/inspect/visual-weld-acceptance-by-code-asme-vs-aws`, lastModified: '2025-02-01', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/inspect/weld-procedure-qualification-record-pqr-from-zero`, lastModified: '2025-06-08', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/inspect/welding-distortion-control-on-thin-plate-fabrication`, lastModified: '2025-10-26', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/inspect/macro-etch-test-on-welds-what-it-actually-shows`, lastModified: '2026-03-28', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
