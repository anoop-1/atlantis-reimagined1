import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://renewable-energy-ndt.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-24', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/geothermal`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/solar`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/wind`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/renewables`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/renewables/wind-turbine-foundation-grout-inspection-offshore`, lastModified: '2024-10-12', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/renewables/green-hydrogen-pipeline-inspection-considerations`, lastModified: '2025-03-12', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/renewables/csp-receiver-tube-inspection-concentrated-solar`, lastModified: '2025-08-23', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/renewables/geothermal-well-casing-corrosion-and-inspection`, lastModified: '2025-12-17', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/renewables/wind-blade-leading-edge-erosion-detection-and-repair`, lastModified: '2026-04-21', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/renewables/floating-offshore-wind-inspection-emerging-practice`, lastModified: '2025-05-27', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/renewables/hydrogen-storage-vessel-inspection-considerations`, lastModified: '2025-09-20', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/renewables/pv-module-electroluminescence-and-infrared-inspection`, lastModified: '2025-12-09', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/renewables/wind-turbine-gearbox-and-bearing-condition-monitoring`, lastModified: '2026-03-20', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/renewables/tidal-and-wave-energy-asset-inspection-introduction`, lastModified: '2026-05-04', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
