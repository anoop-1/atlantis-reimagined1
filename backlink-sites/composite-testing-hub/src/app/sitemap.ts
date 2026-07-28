import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://composite-testing-hub.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-24', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/defects`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/methods`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/techniques`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/techniques/cfrp-phased-array-vs-thermography-which-finds-disbonds`, lastModified: '2024-09-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/techniques/wind-blade-inspection-from-rope-access-to-drones`, lastModified: '2025-03-25', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/techniques/sandwich-panel-honeycomb-core-defects-and-detection`, lastModified: '2025-08-20', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/techniques/shearography-on-composite-pressure-vessels`, lastModified: '2025-12-15', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/techniques/pulse-thermography-vs-lock-in-thermography-quick-decision-guide`, lastModified: '2026-04-26', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/techniques/composite-bolted-joint-inspection-aerospace`, lastModified: '2025-05-16', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/techniques/visual-inspection-of-composite-tooling-cure-defects`, lastModified: '2025-08-31', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/techniques/wind-blade-trailing-edge-bond-line-inspection`, lastModified: '2025-11-27', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/techniques/composite-overwrapped-pressure-vessel-copv-inspection`, lastModified: '2026-03-08', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/techniques/composite-repair-patch-inspection-and-validation`, lastModified: '2026-05-03', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/blog/managing-composite-inspection-data-in-erp`, lastModified: '2024-11-19', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/blog/digital-twin-for-composite-structure-integrity`, lastModified: '2025-06-27', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/blog/why-composite-inspection-records-are-harder-than-metal`, lastModified: '2026-07-06', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: '2026-07-28', changeFrequency: 'weekly' as const, priority: 0.8 },
  ];
}
