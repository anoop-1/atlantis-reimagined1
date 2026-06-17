import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { blogService } from '@/services/BlogService';
import { ChevronLeft } from 'lucide-react';
import { useEffect, useState, useMemo } from 'react';
import { RelatedArticles } from '@/components/RelatedArticles';
import { RelatedProducts } from '@/components/RelatedProducts';
import { ErpDtCrossPromoBlock } from '@/components/ErpDtCrossPromoBlock';
import QuickAnswerBox from '@/components/QuickAnswerBox';
import { buildTechArticleSchema } from '@/data/author-schema';

/**
 * Pick a contextually-relevant Odoo-app pillar URL for a blog slug.
 * Used to drive the dynamic Card 3 of <ErpDtCrossPromoBlock> on data-driven
 * blog posts (rendered by this component, not by a standalone .tsx file).
 *
 * Falls back to CMMS for inspection — the safest default for compliance /
 * cert / inspection-leaning content, which dominates the blog cluster.
 */
function pickRelevantApp(slug: string | undefined): { app: string; href: string } {
  const s = (slug || '').toLowerCase();
  if (s.includes('salary') || s.includes('career') || s.includes('hr ') || s.includes('payroll')) {
    return { app: 'HR & Payroll', href: '/erp/hr-payroll-for-ndt-companies' };
  }
  if (s.includes('training') || s.includes('course') || s.includes('timesheet')) {
    return { app: 'Timesheet Software', href: '/erp/timesheet-software-for-ndt-companies' };
  }
  if (s.includes('quality') || s.includes('iso-9001') || s.includes('audit') || s.includes('rt-vs-ut') || s.includes('comparison')) {
    return { app: 'Quality Management', href: '/erp/quality-management-for-ndt-companies' };
  }
  if (s.includes('consulting') || s.includes('project') || s.includes('turnaround')) {
    return { app: 'Project Management', href: '/erp/project-management-for-ndt-companies' };
  }
  if (s.includes('document') || s.includes('procedure') || s.includes('record')) {
    return { app: 'Document Control', href: '/erp/document-control-for-ndt-companies' };
  }
  if (s.includes('crm') || s.includes('sales') || s.includes('market')) {
    return { app: 'CRM', href: '/erp/crm-for-ndt-companies' };
  }
  // Default — compliance / inspection / cert leaning content
  return { app: 'CMMS', href: '/erp/cmms-for-inspection-companies' };
}

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

  // Helper: convert human date to ISO format
  const toISODate = (dateStr: string): string => {
    try {
      const d = new Date(dateStr);
      return isNaN(d.getTime()) ? dateStr : d.toISOString().split('T')[0];
    } catch { return dateStr; }
  };

  // Detect if blog is a "guide" or "how-to" type post
  const isGuidePost = useMemo(() => {
    if (!blog) return false;
    const title = (blog.title || '').toLowerCase();
    return title.includes('guide') || title.includes('how to') || title.includes('implementation') || title.includes('step') || title.includes('requirements');
  }, [blog]);

  // Extract H2 headings from content for HowTo steps
  const howToSteps = useMemo(() => {
    if (!blog?.content || !isGuidePost) return [];
    const h2Regex = /<h2[^>]*>(.*?)<\/h2>/gi;
    const steps: { name: string; text: string }[] = [];
    let match;
    while ((match = h2Regex.exec(blog.content)) !== null) {
      const name = match[1].replace(/<[^>]+>/g, '').trim();
      if (name && !name.toLowerCase().includes('conclusion') && !name.toLowerCase().includes('contact') && !name.toLowerCase().includes('request') && !name.toLowerCase().includes('atlantis')) {
        steps.push({ name, text: `Learn about ${name} in this comprehensive guide.` });
      }
    }
    return steps;
  }, [blog?.content, isGuidePost]);

  // Generate rich structured data with TechArticle (Person author) + optional HowTo
  // Day-8: cascade ATLANTIS_AUTHOR_ANOOP Person schema for YMYL E-E-A-T signal.
  const articleSchema = useMemo(() => {
    if (!blog) return null;
    const isoPublished = blog.createdAt || toISODate(blog.date);
    const isoModified = blog.updatedAt || isoPublished;
    const graph: any[] = [
      buildTechArticleSchema({
        url: `https://atlantisndt.com/blog/${blog.slug}`,
        headline: blog.title,
        description: blog.metaDescription || blog.snippet,
        image: blog.image || "https://atlantisndt.com/og-image.jpg",
        datePublished: isoPublished,
        dateModified: isoModified,
        section: blog.category || "NDT Technical",
        keywords: `NDT, ${blog.title}, non-destructive testing`,
      })
    ];

    // Add HowTo schema for guide-type posts
    if (isGuidePost && howToSteps.length >= 3) {
      graph.push({
        "@type": "HowTo",
        "name": blog.title,
        "description": blog.metaDescription || blog.snippet,
        "step": howToSteps.map((step, i) => ({
          "@type": "HowToStep",
          "position": i + 1,
          "name": step.name,
          "text": step.text
        })),
        "totalTime": `PT${Math.max(10, howToSteps.length * 3)}M`
      });
    }

    return {
      "@context": "https://schema.org",
      "@graph": graph
    };
  }, [blog, isGuidePost, howToSteps]);

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
        article={{
          headline: blog.title,
          datePublished: blog.createdAt || toISODate(blog.date),
          dateModified: blog.updatedAt || blog.createdAt || toISODate(blog.date),
          author: blog.author || 'Anoop Rayavarapu',
          image: blog.image,
          section: blog.category,
        }}
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
                {blog.quickAnswer && (
                  <QuickAnswerBox
                    question={blog.quickAnswer.question}
                    answer={blog.quickAnswer.answer}
                    bullets={blog.quickAnswer.bullets}
                  />
                )}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  dangerouslySetInnerHTML={{ __html: cleanedContent }}
                  className="blog-content"
                />
              </CardContent>
            </Card>

            <p className="mt-8 pt-4 border-t border-slate-200 text-sm italic text-slate-500" data-atlantis-pricing-disclaimer="1">Disclaimer: Any salary, cost, or pricing figures in this article are general industry estimates for informational purposes only and do not represent Atlantis NDT pricing.</p>

            {/* Related Articles */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-16"
            >
              <RelatedProducts tags={[blog?.title, blog?.category, ...(blog?.tags || [])].filter(Boolean)} count={3} />

              {/* 2026-05-23: ERP/DT cross-promo block — SEO link-equity distribution */}
              {(() => {
                const rel = pickRelevantApp(slug);
                return (
                  <ErpDtCrossPromoBlock
                    relevantApp={rel.app}
                    relevantAppHref={rel.href}
                  />
                );
              })()}

              <RelatedArticles currentSlug={slug || ''} maxArticles={3} />

              <div className="mt-8 pt-8 border-t text-center">
                <h3 className="text-xl font-bold mb-4">Explore More Insights</h3>
                <Button onClick={() => navigate('/blog')} className="btn-primary">
                  View All Articles
                </Button>
              </div>
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
