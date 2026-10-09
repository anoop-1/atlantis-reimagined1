import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: '*', allow: '/' }, sitemap: "https://ndt-training-academy.vercel.app/sitemap.xml" }; }
