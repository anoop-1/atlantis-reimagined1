import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ndt-standards-library.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-24', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/api`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/asme`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/international`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/library`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/library/asme-section-v-2025-edition-changes`, lastModified: '2024-08-26', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/library/iso-9712-vs-en-iso-vs-asnt-cross-recognition`, lastModified: '2025-01-31', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/library/choosing-the-right-pipe-code-asme-b31-1-vs-b31-3-vs-b31-8`, lastModified: '2025-06-12', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/library/aws-d1-1-vs-aws-d1-5-vs-aws-d1-6-pick-the-correct-code`, lastModified: '2025-10-22', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/library/api-vs-asme-vs-iso-pressure-equipment-rules-quick-map`, lastModified: '2026-03-22', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/library/asme-bpvc-section-ix-welding-requirements-walkthrough`, lastModified: '2025-05-23', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/library/astm-e2375-bulk-ultrasonic-examination-of-pipe`, lastModified: '2025-09-26', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/library/asme-section-viii-div-2-vs-div-1-ndt-comparison`, lastModified: '2025-12-23', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/library/iso-17640-vs-en-iso-17640-piping-paut`, lastModified: '2026-03-21', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/library/european-pressure-equipment-directive-ped-ndt-rules`, lastModified: '2026-05-06', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
