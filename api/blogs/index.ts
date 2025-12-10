import type { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs';
import path from 'path';

interface Blog {
  id: string;
  title: string;
  slug: string;
  date: string;
  snippet: string;
  content: string;
  author?: string;
  order: number;
  createdAt: string;
  updatedAt: string;
}

const BLOGS_FILE_PATH = path.join(process.cwd(), 'src/data/blogs.json');

// Helper to read blogs from JSON file
function readBlogs(): Blog[] {
  try {
    const data = fs.readFileSync(BLOGS_FILE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading blogs:', error);
    return [];
  }
}

// Helper to write blogs to JSON file
function writeBlogs(blogs: Blog[]): void {
  try {
    fs.writeFileSync(BLOGS_FILE_PATH, JSON.stringify(blogs, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing blogs:', error);
    throw new Error('Failed to save blog data');
  }
}

// Helper to regenerate sitemap
async function regenerateSitemap(blogs: Blog[]): Promise<void> {
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
    <loc>https://atlantisndt.com/training</loc>
    <lastmod>2025-12-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://atlantisndt.com/training-usa</loc>
    <lastmod>2025-12-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://atlantisndt.com/training-me</loc>
    <lastmod>2025-12-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://atlantisndt.com/training-india</loc>
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

  const sitemapPath = path.join(process.cwd(), 'public/sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap, 'utf-8');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // GET /api/blogs - Get all blogs
    if (req.method === 'GET') {
      const blogs = readBlogs();
      return res.status(200).json(blogs.sort((a, b) => a.order - b.order));
    }

    // POST /api/blogs - Create new blog
    if (req.method === 'POST') {
      const blogs = readBlogs();
      const { title, slug, date, snippet, content, author, order } = req.body;

      // Validate required fields
      if (!title || !slug || !content) {
        return res.status(400).json({ error: 'Missing required fields: title, slug, content' });
      }

      // Check for duplicate slug
      if (blogs.some(blog => blog.slug === slug)) {
        return res.status(400).json({ error: 'Blog with this slug already exists' });
      }

      const newBlog: Blog = {
        id: Date.now().toString(),
        title,
        slug,
        date: date || new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        snippet: snippet || '',
        content,
        author: author || 'Atlantis NDT',
        order: order || (blogs.length > 0 ? Math.max(...blogs.map(b => b.order)) + 1 : 1),
        createdAt: new Date().toISOString().split('T')[0],
        updatedAt: new Date().toISOString().split('T')[0],
      };

      blogs.push(newBlog);
      writeBlogs(blogs);
      
      // Regenerate sitemap
      await regenerateSitemap(blogs);

      return res.status(201).json(newBlog);
    }

    // PUT /api/blogs - Update blog
    if (req.method === 'PUT') {
      const blogs = readBlogs();
      const { id, title, slug, date, snippet, content, author, order } = req.body;

      if (!id) {
        return res.status(400).json({ error: 'Blog ID is required' });
      }

      const index = blogs.findIndex(blog => blog.id === id);
      if (index === -1) {
        return res.status(404).json({ error: 'Blog not found' });
      }

      // Check for duplicate slug (excluding current blog)
      if (slug && blogs.some(blog => blog.slug === slug && blog.id !== id)) {
        return res.status(400).json({ error: 'Blog with this slug already exists' });
      }

      const updatedBlog: Blog = {
        ...blogs[index],
        title: title || blogs[index].title,
        slug: slug || blogs[index].slug,
        date: date || blogs[index].date,
        snippet: snippet !== undefined ? snippet : blogs[index].snippet,
        content: content || blogs[index].content,
        author: author !== undefined ? author : blogs[index].author,
        order: order !== undefined ? order : blogs[index].order,
        updatedAt: new Date().toISOString().split('T')[0],
      };

      blogs[index] = updatedBlog;
      writeBlogs(blogs);
      
      // Regenerate sitemap
      await regenerateSitemap(blogs);

      return res.status(200).json(updatedBlog);
    }

    // DELETE /api/blogs - Delete blog
    if (req.method === 'DELETE') {
      const blogs = readBlogs();
      const { id } = req.query;

      if (!id || typeof id !== 'string') {
        return res.status(400).json({ error: 'Blog ID is required' });
      }

      const filteredBlogs = blogs.filter(blog => blog.id !== id);
      
      if (filteredBlogs.length === blogs.length) {
        return res.status(404).json({ error: 'Blog not found' });
      }

      writeBlogs(filteredBlogs);
      
      // Regenerate sitemap
      await regenerateSitemap(filteredBlogs);

      return res.status(200).json({ message: 'Blog deleted successfully' });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
