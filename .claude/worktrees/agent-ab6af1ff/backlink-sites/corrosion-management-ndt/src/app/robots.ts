import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://corrosion-management-ndt.vercel.app/sitemap.xml',
  };
}
