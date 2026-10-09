import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: '*', allow: '/' }, sitemap: "https://subsea-inspection-guide.vercel.app/sitemap.xml" }; }
