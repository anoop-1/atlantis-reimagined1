import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';
import { blogService, Blog } from '@/services/BlogService';
import { Plus, Trash2, LogOut, ArrowUp, ArrowDown, Edit2, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { isAdmin, logout } = useAuth();
  const { toast } = useToast();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    date: '',
    snippet: '',
    content: '',
    metaDescription: '',
    author: '',
  });

  useEffect(() => {
    if (!isAdmin) {
      navigate('/admin/login');
      return;
    }
    loadBlogs();
  }, [isAdmin, navigate]);

  const loadBlogs = async () => {
    try {
      setLoading(true);
      const allBlogs = await blogService.getBlogs();
      setBlogs(allBlogs);
    } catch (error) {
      console.error('Error loading blogs:', error);
      toast({
        title: 'Error',
        description: 'Failed to load blog posts',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      date: '',
      snippet: '',
      content: '',
      metaDescription: '',
      author: '',
    });
    setEditingId(null);
  };

  const handleEditClick = (blog: Blog) => {
    setFormData({
      title: blog.title,
      slug: blog.slug,
      date: blog.date,
      snippet: blog.snippet,
      content: blog.content,
      metaDescription: blog.metaDescription || '',
      author: blog.author || '',
    });
    setEditingId(blog.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.slug || !formData.content) {
      toast({
        title: 'Validation Error',
        description: 'Please fill in all required fields',
        variant: 'destructive',
      });
      return;
    }

    try {
      setSubmitting(true);
      if (editingId) {
        await blogService.updateBlog(editingId, {
          ...formData,
          order: blogs.find(b => b.id === editingId)?.order || 0,
        });
        toast({
          title: 'Success',
          description: 'Blog post updated successfully',
        });
      } else {
        const maxOrder = blogs.length > 0 ? Math.max(...blogs.map(b => b.order)) : 0;
        await blogService.addBlog({
          ...formData,
          order: maxOrder + 1,
        });
        toast({
          title: 'Success',
          description: 'Blog post created successfully. Sitemap updated automatically!',
        });
      }

      await loadBlogs();
      resetForm();
    } catch (error: any) {
      console.error('Error saving blog:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to save blog post',
        variant: 'destructive',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await blogService.deleteBlog(id);
      toast({
        title: 'Success',
        description: 'Blog post deleted successfully. Sitemap updated!',
      });
      await loadBlogs();
      setDeleteId(null);
    } catch (error: any) {
      console.error('Error deleting blog:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to delete blog post',
        variant: 'destructive',
      });
    }
  };

  const handleMoveOrder = async (id: string, direction: 'up' | 'down') => {
    const currentIndex = blogs.findIndex(b => b.id === id);
    if (
      (direction === 'up' && currentIndex === 0) ||
      (direction === 'down' && currentIndex === blogs.length - 1)
    ) {
      return;
    }

    try {
      const newBlogs = [...blogs];
      const swapIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
      [newBlogs[currentIndex].order, newBlogs[swapIndex].order] = [
        newBlogs[swapIndex].order,
        newBlogs[currentIndex].order,
      ];

      await blogService.reorderBlogs(
        newBlogs.map(b => ({ id: b.id, order: b.order }))
      );
      await loadBlogs();
    } catch (error) {
      console.error('Error reordering blogs:', error);
      toast({
        title: 'Error',
        description: 'Failed to reorder blog posts',
        variant: 'destructive',
      });
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Blog Management</h1>
            <p className="text-muted-foreground">Add, edit, and manage blog posts</p>
          </div>
          <Button variant="outline" onClick={handleLogout} className="gap-2">
            <LogOut size={18} />
            Logout
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="text-xl">
                  {editingId ? 'Edit Blog Post' : 'Create New Post'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Title *</label>
                    <Input
                      placeholder="Blog title"
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Slug *</label>
                    <Input
                      placeholder="url-slug"
                      value={formData.slug}
                      onChange={(e) =>
                        setFormData({ ...formData, slug: e.target.value })
                      }
                      required
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Used in URL (e.g., /blog/url-slug)
                    </p>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Date</label>
                    <Input
                      placeholder="October 1, 2025"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Author</label>
                    <Input
                      placeholder="Author name"
                      value={formData.author}
                      onChange={(e) =>
                        setFormData({ ...formData, author: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Preview Snippet *</label>
                    <Textarea
                      placeholder="Short preview text for blog list"
                      value={formData.snippet}
                      onChange={(e) =>
                        setFormData({ ...formData, snippet: e.target.value })
                      }
                      className="resize-none h-20"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Meta Description (SEO)</label>
                    <Textarea
                      placeholder="SEO meta description (150-160 characters recommended)"
                      value={formData.metaDescription}
                      onChange={(e) =>
                        setFormData({ ...formData, metaDescription: e.target.value })
                      }
                      className="resize-none h-20"
                      maxLength={160}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      {formData.metaDescription.length}/160 characters - Used for search engine results
                    </p>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Content (HTML) *</label>
                    <Textarea
                      placeholder="Full blog content (supports HTML)"
                      value={formData.content}
                      onChange={(e) =>
                        setFormData({ ...formData, content: e.target.value })
                      }
                      className="resize-none h-32 font-mono text-xs"
                      required
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      You can use HTML tags like &lt;h2&gt;, &lt;p&gt;, &lt;ul&gt;, etc.
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button type="submit" className="flex-1 btn-primary" disabled={submitting}>
                      {submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      {editingId ? 'Update Post' : 'Create Post'}
                    </Button>
                    {editingId && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={resetForm}
                      >
                        Cancel
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Blog List Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Blog Posts ({blogs.length})</h2>
              </div>

              {loading ? (
                <Card>
                  <CardContent className="pt-6 text-center text-muted-foreground">
                    <Loader2 size={40} className="mx-auto mb-2 animate-spin" />
                    <p>Loading blog posts...</p>
                  </CardContent>
                </Card>
              ) : blogs.length === 0 ? (
                <Card>
                  <CardContent className="pt-6 text-center text-muted-foreground">
                    <Plus size={40} className="mx-auto mb-2 opacity-50" />
                    <p>No blog posts yet. Create your first post!</p>
                  </CardContent>
                </Card>
              ) : (
                blogs.map((blog, index) => (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1">
                            <h3 className="font-bold text-lg mb-1">{blog.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              {blog.date} • {blog.slug}
                            </p>
                            <p className="text-sm line-clamp-2 text-muted-foreground">
                              {blog.snippet}
                            </p>
                          </div>

                          <div className="flex flex-col gap-2">
                            <button
                              onClick={() => handleMoveOrder(blog.id, 'up')}
                              disabled={index === 0}
                              className="p-2 hover:bg-primary/10 rounded disabled:opacity-50 disabled:cursor-not-allowed transition"
                              title="Move up"
                            >
                              <ArrowUp size={18} />
                            </button>
                            <button
                              onClick={() => handleMoveOrder(blog.id, 'down')}
                              disabled={index === blogs.length - 1}
                              className="p-2 hover:bg-primary/10 rounded disabled:opacity-50 disabled:cursor-not-allowed transition"
                              title="Move down"
                            >
                              <ArrowDown size={18} />
                            </button>
                          </div>
                        </div>

                        <div className="flex gap-2 mt-4">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEditClick(blog)}
                            className="gap-2"
                          >
                            <Edit2 size={16} />
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => setDeleteId(blog.id)}
                            className="gap-2"
                          >
                            <Trash2 size={16} />
                            Delete
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Blog Post</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this blog post? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex gap-3">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteId && handleDelete(deleteId)}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
