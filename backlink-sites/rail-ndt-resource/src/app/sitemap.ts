import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rail-ndt-resource.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-24', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/methods`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/track-assessment`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/wheel-inspection`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/rail`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/rail/rail-flaw-detection-vehicle-types-and-tradeoffs`, lastModified: '2024-09-20', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/rail/rolling-stock-wheel-set-ndt-paut-and-mt`, lastModified: '2025-02-21', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/rail/thermite-weld-inspection-on-continuous-welded-rail`, lastModified: '2025-07-25', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/rail/rail-corrosion-fatigue-detection-rcf-cracking`, lastModified: '2025-12-04', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/rail/rail-bridge-truss-inspection-aar-mra`, lastModified: '2026-04-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/rail/rail-track-bolt-and-fishplate-inspection`, lastModified: '2025-05-18', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/rail/rail-axle-ultrasonic-inspection-procedure`, lastModified: '2025-09-29', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/rail/frog-and-switch-component-inspection-on-mainline-rail`, lastModified: '2025-12-12', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/rail/rail-coach-and-locomotive-shell-inspection`, lastModified: '2026-03-23', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/rail/rail-bearing-and-axlebox-ndt-program`, lastModified: '2026-05-14', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
