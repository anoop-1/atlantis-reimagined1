import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://construction-ndt-guide.vercel.app';
  return [
    { url: `${baseUrl}`, lastModified: '2026-05-24', changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/applications`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/applications/dams`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/applications/high-rise`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/applications/tunnels`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/career`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/methods`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/methods/gpr`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/methods/impact-echo`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/methods/upv`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/standards`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/structural`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/structural/bridges`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/structural/concrete`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/structural/rebar`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/structural/steel-structures`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/practice`, lastModified: '2026-05-24', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/practice/gpr-vs-rebar-locator-when-which`, lastModified: '2024-08-22', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/practice/concrete-strength-with-rebound-hammer-vs-ut-velocity`, lastModified: '2025-01-30', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/practice/bridge-deck-deterioration-mapping-methods`, lastModified: '2025-07-08', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/practice/post-tensioned-cable-inspection-impact-echo-and-ut`, lastModified: '2025-11-12', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/practice/steel-structure-weld-inspection-aws-d1-5`, lastModified: '2026-04-02', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/practice/concrete-cover-meter-vs-gpr-accuracy-realities`, lastModified: '2025-05-20', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/practice/masonry-and-stone-structure-ndt-techniques`, lastModified: '2025-09-08', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/practice/post-fire-concrete-inspection-strategy`, lastModified: '2025-12-04', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/practice/high-strength-bolt-inspection-on-structural-connections`, lastModified: '2026-03-15', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/practice/tunnel-lining-inspection-impact-echo-and-radar`, lastModified: '2026-05-06', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/blog/construction-qa-qc-erp-for-weld-inspection`, lastModified: '2024-11-04', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/blog/digital-twin-for-structural-integrity-monitoring`, lastModified: '2026-01-22', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/blog/the-quality-record-is-what-gets-audited-not-the-programme`, lastModified: '2026-07-24', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: '2026-07-28', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/blog/fab-shop-inspection-reporting-speed`, lastModified: '2026-08-02', changeFrequency: 'monthly' as const, priority: 0.7 },
  ];
}
