import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://oil-gas-inspection-guide.vercel.app/sitemap.xml',
  };
}
