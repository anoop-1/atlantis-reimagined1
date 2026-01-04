import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { blogService } from "@/services/BlogService";

export default function BlogPage() {
   const [blogs, setBlogs] = useState<any[]>([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchBlogs = async () => {
         try {
            setLoading(true);
            const allBlogs = await blogService.getBlogs();
            setBlogs(allBlogs);
         } catch (error) {
            console.error('Error fetching blogs:', error);
         } finally {
            setLoading(false);
         }
      };
      fetchBlogs();
   }, []);

   // CollectionPage schema for blog listing
   const structuredData = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "NDT Blog - Non-Destructive Testing Articles & Guides",
      "description": "Expert articles, guides, and tutorials on NDT methods including ultrasonic testing, radiographic testing, eddy current testing, and more.",
      "url": "https://atlantisndt.com/blog",
      "publisher": {
         "@type": "Organization",
         "name": "Atlantis NDT",
         "url": "https://atlantisndt.com",
         "logo": {
            "@type": "ImageObject",
            "url": "https://atlantisndt.com/favicon-96x96.jpg"
         }
      },
      "mainEntity": {
         "@type": "ItemList",
         "name": "NDT Articles",
         "numberOfItems": blogs.length,
         "itemListElement": blogs.slice(0, 10).map((blog, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `https://atlantisndt.com/blog/${blog.slug}`,
            "name": blog.title
         }))
      }
   };

   return (
      <div className="min-h-screen pt-20">
         <Navigation />
         <SEOHead
            title="NDT Blog | Non-Destructive Testing Articles, Guides & Tutorials"
            description="Explore expert articles on ultrasonic testing, radiographic testing, eddy current testing, magnetic particle testing, and more. Stay updated with NDT industry trends and techniques."
            keywords="NDT blog, ultrasonic testing guide, radiographic testing tutorial, magnetic particle testing, eddy current testing, penetrant testing, visual testing, NDT methods, NDT training articles"
            canonical="https://atlantisndt.com/blog"
            structuredData={structuredData}
         />

         {/* Hero Section */}
         <motion.section
            className="py-20 bg-gradient-to-r from-primary/10 to-accent/10 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
         >
            <div className="container mx-auto px-6">
               <motion.h1
                  className="text-4xl md:text-6xl font-bold mb-6"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
               >
                  NDT Connect <span className="gradient-text">Blog</span>
               </motion.h1>
               <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Stay updated with the latest insights, techniques, and
                  industry trends in Non-Destructive Testing.
               </p>
            </div>
         </motion.section>

         {/* Blogs Grid */}
         <section className="py-20">
            <div className="container mx-auto px-6">
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {loading ? (
                     <div className="text-center py-20">
                        <p className="text-muted-foreground">Loading blog posts...</p>
                     </div>
                  ) : blogs.length === 0 ? (
                     <div className="text-center py-20">
                        <p className="text-muted-foreground">No blog posts available yet.</p>
                     </div>
                  ) : (
                     blogs.map((blog, index) => (
                        <motion.div
                           key={blog.id}
                           initial={{ y: 30, opacity: 0 }}
                           whileInView={{ y: 0, opacity: 1 }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                           <Card className="h-full hover-scale border-0 shadow-md group">
                              <CardHeader>
                                 <CardTitle className="text-xl">
                                    {blog.title}
                                 </CardTitle>
                                 <p className="text-sm text-muted-foreground">
                                    {blog.date}
                                 </p>
                              </CardHeader>
                              <CardContent>
                                 <p className="text-muted-foreground mb-4">
                                    {blog.snippet}
                                 </p>
                                 <Link
                                    to={`/blog/${blog.slug}`}
                                    target="_blank"
                                    className="text-primary font-semibold hover:underline"
                                 >
                                    Read More →
                                 </Link>
                              </CardContent>
                           </Card>
                        </motion.div>
                     ))
                  )}
               </div>
            </div>
         </section>
      </div>
   );
}
