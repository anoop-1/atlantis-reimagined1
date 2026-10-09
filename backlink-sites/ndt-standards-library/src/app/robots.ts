import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: '*', allow: '/' }, sitemap: "https://ndt-standards-library.vercel.app/sitemap.xml" }; }
