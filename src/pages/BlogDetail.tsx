import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { blogService } from '@/services/BlogService';
import { ChevronLeft } from 'lucide-react';
import { useEffect, useState, useMemo } from 'react';

// Function to clean up blog content - removes DOCTYPE, html, head, body wrappers
function cleanBlogContent(content: string): string {
  let cleaned = content;

  // Remove DOCTYPE declaration
  cleaned = cleaned.replace(/<!DOCTYPE[^>]*>/gi, '');

  // Remove html tags
  cleaned = cleaned.replace(/<\/?html[^>]*>/gi, '');

  // Remove head section entirely (including content)
  cleaned = cleaned.replace(/<head[^>]*>[\s\S]*?<\/head>/gi, '');

  // Remove body tags (but keep content)
  cleaned = cleaned.replace(/<\/?body[^>]*>/gi, '');

  // Remove article tags (but keep content)
  cleaned = cleaned.replace(/<\/?article[^>]*>/gi, '');

  // Trim whitespace
  cleaned = cleaned.trim();

  return cleaned;
}

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      if (slug) {
        const foundBlog = await blogService.getBlogBySlug(slug);
        setBlog(foundBlog);
        if (!foundBlog) {
          navigate('/blog');
        }
      }
    };
    fetchBlog();
  }, [slug, navigate]);

  // Clean the blog content
  const cleanedContent = useMemo(() => {
    if (!blog?.content) return '';
    return cleanBlogContent(blog.content);
  }, [blog?.content]);

  // Generate Article schema for structured data (helps with Google indexing)
  const articleSchema = useMemo(() => {
    if (!blog) return null;
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": blog.title,
      "description": blog.metaDescription || blog.snippet,
      "datePublished": blog.date,
      "dateModified": blog.date,
      "author": {
        "@type": "Person",
        "name": blog.author || "Atlantis NDT Expert"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Atlantis NDT",
        "logo": {
          "@type": "ImageObject",
          "url": "https://atlantisndt.com/favicon-96x96.jpg"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://atlantisndt.com/blog/${blog.slug}`
      },
      "image": blog.image || "https://atlantisndt.com/og-image.jpg",
      "keywords": `NDT, ${blog.title}, non-destructive testing`
    };
  }, [blog]);

  if (!blog) {
    return (
      <div className="min-h-screen pt-20">
        <Navigation />
        <div className="container mx-auto px-6 py-20 text-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title={blog.title}
        description={blog.metaDescription || blog.snippet}
        keywords={`${blog.title}, NDT, non-destructive testing, blog, ${blog.slug}`}
        canonical={`https://atlantisndt.com/blog/${blog.slug}`}
        structuredData={articleSchema}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-6">
            <Button
              variant="ghost"
              onClick={() => navigate('/blog')}
              className="mb-6 gap-2"
            >
              <ChevronLeft size={20} />
              Back to Blog
            </Button>
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {blog.title}
            </motion.h1>
            <motion.div
              className="flex items-center gap-4 text-muted-foreground"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span>{blog.date}</span>
              {blog.author && (
                <>
                  <span>•</span>
                  <span>By {blog.author}</span>
                </>
              )}
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 md:p-12">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  dangerouslySetInnerHTML={{ __html: cleanedContent }}
                  className="blog-content"
                />
              </CardContent>
            </Card>

            {/* Related Articles */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-16 pt-16 border-t"
            >
              <h3 className="text-2xl font-bold mb-6">Back to Insights</h3>
              <Button onClick={() => navigate('/blog')} className="btn-primary">
                View All Articles
              </Button>
            </motion.div>
          </div>
        </section>
      </motion.div>

      {/* Blog Content Styles */}
      <style>{`
        .blog-content {
          color: hsl(var(--foreground));
          line-height: 1.8;
          font-size: 1.05rem;
        }
        
        .blog-content header,
        .blog-content footer,
        .blog-content section {
          margin-bottom: 2.5rem;
        }
        
        .blog-content header p {
          font-size: 1.1rem;
          color: hsl(var(--muted-foreground));
          background: hsl(var(--primary) / 0.05);
          padding: 1rem 1.25rem;
          border-radius: 0.5rem;
          border-left: 4px solid hsl(var(--primary));
          margin-top: 1rem;
        }
        
        .blog-content h1 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: hsl(var(--foreground));
          line-height: 1.3;
        }
        
        .blog-content h2 {
          font-size: 1.75rem;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          color: hsl(var(--foreground));
          padding-bottom: 0.5rem;
          border-bottom: 2px solid hsl(var(--primary) / 0.2);
        }
        
        .blog-content h3 {
          font-size: 1.35rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          color: hsl(var(--foreground));
        }
        
        .blog-content p {
          margin-bottom: 1.25rem;
          color: hsl(var(--muted-foreground));
          line-height: 1.8;
        }
        
        .blog-content ul,
        .blog-content ol {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        
        .blog-content ul {
          list-style-type: disc;
        }
        
        .blog-content ol {
          list-style-type: decimal;
        }
        
        .blog-content li {
          margin-bottom: 0.5rem;
          color: hsl(var(--muted-foreground));
          line-height: 1.7;
        }
        
        .blog-content li::marker {
          color: hsl(var(--primary));
        }
        
        .blog-content a {
          color: hsl(var(--primary));
          text-decoration: underline;
          text-underline-offset: 2px;
          transition: opacity 0.2s;
        }
        
        .blog-content a:hover {
          opacity: 0.8;
        }
        
        .blog-content strong {
          font-weight: 600;
          color: hsl(var(--foreground));
        }
        
        .blog-content blockquote {
          border-left: 4px solid hsl(var(--primary));
          padding-left: 1rem;
          margin: 1.5rem 0;
          font-style: italic;
          color: hsl(var(--muted-foreground));
        }
        
        .blog-content code {
          background: hsl(var(--muted));
          padding: 0.2rem 0.4rem;
          border-radius: 0.25rem;
          font-size: 0.9em;
        }
        
        .blog-content pre {
          background: hsl(var(--muted));
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin-bottom: 1.5rem;
        }
        
        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 1.5rem;
        }
        
        .blog-content th,
        .blog-content td {
          border: 1px solid hsl(var(--border));
          padding: 0.75rem;
          text-align: left;
        }
        
        .blog-content th {
          background: hsl(var(--muted));
          font-weight: 600;
        }
        
        .blog-content footer {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid hsl(var(--border));
        }
        
        .blog-content footer h2 {
          color: hsl(var(--primary));
        }
        
        .blog-content section:first-of-type {
          margin-top: 0;
        }
        
        .blog-content section h2:first-child {
          margin-top: 0;
        }
      `}</style>
    </div>
  );
}
