import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://petrochemical-ndt-hub.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-24', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/equipment`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/safety`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/processes`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/processes/high-temperature-hydrogen-attack-htha-inspection-strategy`, lastModified: '2024-10-22', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/processes/fcc-unit-inspection-priority-equipment-and-damage-mechanisms`, lastModified: '2025-03-11', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/processes/amine-unit-corrosion-monitoring-and-ut-strategies`, lastModified: '2025-07-29', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/processes/sulfidation-corrosion-crude-units-monitoring-program`, lastModified: '2026-01-23', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/processes/turnaround-inspection-planning-petrochemical-shutdown`, lastModified: '2026-04-12', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/processes/naphthenic-acid-corrosion-inspection-strategy`, lastModified: '2025-05-19', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/processes/hydroprocessing-reactor-internals-inspection-2026`, lastModified: '2025-08-14', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/processes/coker-drum-inspection-program-bulge-and-crack`, lastModified: '2025-11-04', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/processes/crude-furnace-tube-inspection-laser-and-paut`, lastModified: '2026-02-22', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/processes/sru-and-tail-gas-unit-inspection-corrosion-realities`, lastModified: '2026-05-06', changeFrequency: 'monthly' as const, priority: 0.7 }
  ];
}
