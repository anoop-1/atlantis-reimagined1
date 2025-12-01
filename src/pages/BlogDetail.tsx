import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { blogService } from '@/services/BlogService';
import { ChevronLeft } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    if (slug) {
      const foundBlog = blogService.getBlogBySlug(slug);
      setBlog(foundBlog);
      if (!foundBlog) {
        navigate('/blog');
      }
    }
  }, [slug, navigate]);

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
        description={blog.snippet}
        keywords={`${blog.title}, NDT, blog, ${blog.slug}`}
        canonical={`https://atlantisndt.com/blog/${blog.slug}`}
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
          <div className="container mx-auto px-6 max-w-3xl">
            <Card className="border-0 shadow-md">
              <CardContent className="pt-8 prose prose-sm md:prose-base max-w-none">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                  className="
                    prose 
                    prose-headings:font-bold 
                    prose-h2:text-2xl 
                    prose-h2:mt-8 
                    prose-h2:mb-4 
                    prose-h3:text-xl 
                    prose-h3:mt-6 
                    prose-h3:mb-3
                    prose-p:text-muted-foreground
                    prose-p:leading-7
                    prose-p:mb-4
                    prose-ul:list-disc
                    prose-ul:ml-6
                    prose-ul:mb-4
                    prose-li:mb-2
                    prose-li:text-muted-foreground
                  "
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
    </div>
  );
}
