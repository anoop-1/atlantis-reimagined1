import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://heat-exchanger-ndt.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-24', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/tube-inspection`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/tubes`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/tubes/iris-vs-ecit-vs-rfet-tube-inspection-decision`, lastModified: '2024-10-04', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/tubes/cleaning-tubes-before-ndt-why-it-decides-everything`, lastModified: '2025-02-26', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/tubes/air-cooler-tube-bundle-inspection-program`, lastModified: '2025-07-21', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/tubes/fouling-vs-corrosion-tube-signal-interpretation`, lastModified: '2025-11-30', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/tubes/plugging-vs-retubing-heat-exchanger-economics`, lastModified: '2026-04-14', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/tubes/shell-and-tube-vs-plate-frame-inspection-realities`, lastModified: '2025-05-24', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/tubes/tube-bundle-extraction-and-rebundling-decisions`, lastModified: '2025-09-16', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/tubes/air-cooler-header-box-inspection-for-cracks`, lastModified: '2025-12-07', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/tubes/tube-to-tubesheet-weld-inspection-techniques`, lastModified: '2026-02-21', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/tubes/expansion-joint-inspection-on-shell-and-tube-exchangers`, lastModified: '2026-05-02', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
