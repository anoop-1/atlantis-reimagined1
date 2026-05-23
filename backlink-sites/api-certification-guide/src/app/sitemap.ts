import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://api-certification-guide.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-23', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/api-510`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/study`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/study/api-570-piping-inspector-study-plan-2026`, lastModified: '2024-09-12', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/study/api-653-aboveground-tank-inspector-prep`, lastModified: '2025-01-22', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/study/api-510-vs-api-570-which-cert-first`, lastModified: '2025-05-14', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/study/api-icp-recertification-2-cycle-cycle`, lastModified: '2025-10-30', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/study/open-book-questions-api-510-test-strategy`, lastModified: '2026-03-25', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
