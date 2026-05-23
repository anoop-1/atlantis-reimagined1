import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ndt-equipment-reviews.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-23', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/ultrasonic`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/reviews`, lastModified: '2026-05-23', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/reviews/epoch-6lt-vs-epoch-650-real-world-comparison`, lastModified: '2024-10-26', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/reviews/omniscan-x3-vs-x3-64-which-channel-count-fits`, lastModified: '2025-03-08', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/reviews/crawler-vs-handheld-aut-for-pipeline-girths`, lastModified: '2025-08-12', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/reviews/calibration-blocks-buying-guide-2026`, lastModified: '2025-11-29', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/reviews/digital-rt-detectors-flat-panel-vs-line-scan`, lastModified: '2026-04-13', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
