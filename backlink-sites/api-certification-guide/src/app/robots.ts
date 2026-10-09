import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: '*', allow: '/' }, sitemap: "https://api-certification-guide.vercel.app/sitemap.xml" }; }
