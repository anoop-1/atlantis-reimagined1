import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://weld-quality-resource.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-23', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/defects`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/methods`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/methods/aws-d1-1-weld-acceptance-cracks-vs-incomplete-fusion`, lastModified: '2024-10-08', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/methods/phased-array-vs-radiography-girth-welds-which-finds-more`, lastModified: '2025-01-19', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/methods/visual-weld-inspection-vt-pitfalls-cwi-experience`, lastModified: '2025-06-17', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/methods/welder-qualification-vs-procedure-qualification-records`, lastModified: '2025-11-08', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/methods/orbital-welding-inspection-semiconductor-pharma-piping`, lastModified: '2026-04-29', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
