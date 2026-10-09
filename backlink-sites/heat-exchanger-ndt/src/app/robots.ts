import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: '*', allow: '/' }, sitemap: "https://heat-exchanger-ndt.vercel.app/sitemap.xml" }; }
