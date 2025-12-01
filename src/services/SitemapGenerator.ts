import { blogService } from './BlogService';

/**
 * Generates a dynamic sitemap based on current blog posts
 * This should be called to generate the public/sitemap.xml file
 */
export function generateSitemap(): string {
  const blogs = blogService.getBlogs();
  const today = new Date().toISOString().split('T')[0];

  const blogEntries = blogs
    .map(
      (blog) => `
  <url>
    <loc>https://atlantisndt.com/blog/${blog.slug}</loc>
    <lastmod>${blog.updatedAt}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://atlantisndt.com/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>https://atlantisndt.com/about</loc>
    <lastmod>2025-10-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://atlantisndt.com/training</loc>
    <lastmod>2025-10-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://atlantisndt.com/consulting</loc>
    <lastmod>2025-12-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://atlantisndt.com/consulting-usa</loc>
    <lastmod>2025-12-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://atlantisndt.com/consulting-me</loc>
    <lastmod>2025-12-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://atlantisndt.com/consulting-india</loc>
    <lastmod>2025-12-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://atlantisndt.com/contact</loc>
    <lastmod>2025-10-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://atlantisndt.com/digital-twins</loc>
    <lastmod>2025-10-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://atlantisndt.com/erp</loc>
    <lastmod>2025-10-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://atlantisndt.com/ndt-connect</loc>
    <lastmod>2025-10-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- Blog index -->
  <url>
    <loc>https://atlantisndt.com/blog</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Dynamic blog posts -->
${blogEntries}
</urlset>`;

  return sitemap;
}

/**
 * Logs the current sitemap to console (for debugging)
 */
export function logSitemap(): void {
  console.log(generateSitemap());
}
