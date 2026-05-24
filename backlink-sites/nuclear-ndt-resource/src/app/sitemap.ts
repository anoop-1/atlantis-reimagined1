import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nuclear-ndt-resource.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-24', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/reactor-systems`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/regulatory`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/techniques`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/techniques/asme-section-xi-isi-program-essentials`, lastModified: '2024-07-17', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/techniques/reactor-vessel-head-penetration-inspection-pdi-qualification`, lastModified: '2025-02-12', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/techniques/piping-weld-inspection-class-1-vs-class-2-rules`, lastModified: '2025-08-04', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/techniques/small-modular-reactor-smr-ndt-emerging-considerations`, lastModified: '2026-02-26', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/techniques/phased-array-qualification-for-nuclear-applications`, lastModified: '2026-04-15', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/techniques/asme-section-xi-iwe-iwl-containment-inspection`, lastModified: '2025-05-13', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/techniques/steam-generator-tube-inspection-eddy-current-strategies`, lastModified: '2025-09-22', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/techniques/reactor-coolant-pump-inspection-asme-xi-rules`, lastModified: '2025-12-12', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/techniques/spent-fuel-pool-liner-leak-detection-and-inspection`, lastModified: '2026-03-17', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/techniques/pdi-paut-procedure-qualification-deep-dive-2026`, lastModified: '2026-05-07', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
