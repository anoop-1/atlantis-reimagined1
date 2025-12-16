export interface Blog {
  id: string;
  title: string;
  slug: string;
  date: string;
  snippet: string;
  content: string;
  metaDescription?: string;
  author?: string;
  order: number;
  createdAt: string;
  updatedAt: string;
}

import blogsData from '@/data/blogs.json';

const API_BASE_URL = '/api/blogs';

class BlogService {
  // Fetch all blogs - try API first, fallback to local JSON
  async getBlogs(): Promise<Blog[]> {
    try {
      const response = await fetch(API_BASE_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch blogs');
      }
      const blogs = await response.json();
      return blogs.sort((a: Blog, b: Blog) => a.order - b.order);
    } catch (error) {
      console.error('Error fetching blogs from API, using local data:', error);
      // Use imported JSON data instead of hardcoded defaults
      return (blogsData as Blog[]).sort((a: Blog, b: Blog) => a.order - b.order);
    }
  }

  // Get a single blog by slug
  async getBlogBySlug(slug: string): Promise<Blog | undefined> {
    try {
      const blogs = await this.getBlogs();
      return blogs.find(blog => blog.slug === slug);
    } catch (error) {
      console.error('Error fetching blog by slug:', error);
      return undefined;
    }
  }

  // Get a single blog by ID
  async getBlogById(id: string): Promise<Blog | undefined> {
    try {
      const blogs = await this.getBlogs();
      return blogs.find(blog => blog.id === id);
    } catch (error) {
      console.error('Error fetching blog by ID:', error);
      return undefined;
    }
  }

  // Add a new blog
  async addBlog(blog: Omit<Blog, 'id' | 'createdAt' | 'updatedAt'>): Promise<Blog> {
    try {
      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blog),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to create blog');
      }

      return await response.json();
    } catch (error) {
      console.error('Error adding blog:', error);
      throw error;
    }
  }

  // Update an existing blog
  async updateBlog(id: string, updates: Partial<Blog>): Promise<Blog | null> {
    try {
      const response = await fetch(API_BASE_URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, ...updates }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to update blog');
      }

      return await response.json();
    } catch (error) {
      console.error('Error updating blog:', error);
      throw error;
    }
  }

  // Delete a blog
  async deleteBlog(id: string): Promise<boolean> {
    try {
      const response = await fetch(`${API_BASE_URL}?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to delete blog');
      }

      return true;
    } catch (error) {
      console.error('Error deleting blog:', error);
      throw error;
    }
  }

  // Reorder blogs
  async reorderBlogs(newOrder: Array<{ id: string; order: number }>): Promise<void> {
    try {
      // Update each blog's order
      const updatePromises = newOrder.map(item =>
        this.updateBlog(item.id, { order: item.order })
      );
      await Promise.all(updatePromises);
    } catch (error) {
      console.error('Error reordering blogs:', error);
      throw error;
    }
  }

  // Fallback: Get default blogs (for offline/error scenarios)
  private getDefaultBlogs(): Blog[] {
    return [
      {
        id: '1',
        title: 'Understanding Ultrasonic Testing in NDT',
        slug: 'ultrasonic-testing',
        date: 'October 1, 2025',
        snippet: 'Explore how ultrasonic testing helps detect internal flaws in materials without causing damage.',
        content: `<h2>Understanding Ultrasonic Testing in NDT</h2>
<p>Ultrasonic testing is a non-destructive testing method that uses high-frequency sound waves to detect internal defects in materials.</p>
<h3>How It Works</h3>
<p>Ultrasonic waves are transmitted through the material being tested. When these waves encounter a defect or boundary, they are reflected back to the receiver. By analyzing the reflected signals, inspectors can determine the size, location, and nature of defects.</p>
<h3>Applications</h3>
<ul>
<li>Detecting cracks in metals</li>
<li>Measuring material thickness</li>
<li>Inspecting welds</li>
<li>Finding voids and inclusions</li>
</ul>
<h3>Advantages</h3>
<p>Ultrasonic testing offers excellent penetration, quick results, and can be applied to thick materials. It's also safe and doesn't require radiation.</p>`,
        author: 'Atlantis NDT',
        order: 1,
        createdAt: '2025-10-01',
        updatedAt: '2025-10-01'
      },
      {
        id: '2',
        title: 'Magnetic Particle Testing: Best Practices',
        slug: 'magnetic-particle-testing',
        date: 'October 3, 2025',
        snippet: 'Learn how magnetic particle testing detects surface and near-surface defects efficiently.',
        content: `<h2>Magnetic Particle Testing: Best Practices</h2>
<p>Magnetic particle testing (MPT) is a non-destructive method used to detect surface and near-surface defects in ferromagnetic materials.</p>
<h3>Principle</h3>
<p>When a ferromagnetic material is magnetized, surface and near-surface defects create disturbances in the magnetic field. Iron particles, when applied to the magnetized surface, accumulate at these defect areas, making them visible.</p>
<h3>Best Practices</h3>
<ul>
<li>Ensure proper surface preparation</li>
<li>Use appropriate magnetic field strength</li>
<li>Apply particles correctly</li>
<li>Maintain proper lighting for inspection</li>
<li>Document all findings</li>
</ul>
<h3>Limitations</h3>
<p>MPT only works on ferromagnetic materials and has limited penetration for subsurface defects. However, it's excellent for detecting surface discontinuities.</p>`,
        author: 'Atlantis NDT',
        order: 2,
        createdAt: '2025-10-03',
        updatedAt: '2025-10-03'
      },
      {
        id: '3',
        title: 'Visual Testing Techniques for Modern NDT',
        slug: 'visual-testing',
        date: 'October 5, 2025',
        snippet: 'A guide to direct and remote visual inspection methods for industrial assets.',
        content: `<h2>Visual Testing Techniques for Modern NDT</h2>
<p>Visual testing is the most widely used non-destructive testing method. It includes both direct visual inspection and remote visual inspection.</p>
<h3>Direct Visual Inspection</h3>
<p>The inspector directly observes the component using natural or artificial lighting. This method is simple and requires minimal equipment.</p>
<h3>Remote Visual Inspection (RVI)</h3>
<p>RVI employs cameras, endoscopes, and borescopes to inspect areas that are not directly accessible. This is useful in confined spaces and hazardous environments.</p>
<h3>Modern Tools</h3>
<ul>
<li>High-resolution cameras</li>
<li>Thermal imaging</li>
<li>Fiber optics</li>
<li>Digital documentation</li>
</ul>`,
        author: 'Atlantis NDT',
        order: 3,
        createdAt: '2025-10-05',
        updatedAt: '2025-10-05'
      },
      {
        id: '4',
        title: 'Radiographic Testing in Industrial Applications',
        slug: 'radiographic-testing',
        date: 'October 7, 2025',
        snippet: 'Understand X-ray and gamma ray techniques for internal flaw detection and weld inspections.',
        content: `<h2>Radiographic Testing in Industrial Applications</h2>
<p>Radiographic testing uses X-rays or gamma rays to create images of components, revealing internal defects and material variations.</p>
<h3>X-Ray Radiography</h3>
<p>X-rays are generated by equipment and provide good control over parameters. They're ideal for portable applications.</p>
<h3>Gamma Ray Radiography</h3>
<p>Gamma rays are emitted by radioactive sources like Iridium-192. They're excellent for field work but require strict safety protocols.</p>
<h3>Applications</h3>
<ul>
<li>Weld inspections</li>
<li>Casting quality control</li>
<li>Foreign object detection</li>
<li>Corrosion assessment</li>
</ul>`,
        author: 'Atlantis NDT',
        order: 4,
        createdAt: '2025-10-07',
        updatedAt: '2025-10-07'
      },
      {
        id: '5',
        title: 'Eddy Current Testing Explained',
        slug: 'eddy-current-testing',
        date: 'October 10, 2025',
        snippet: 'An introduction to eddy current testing and its applications in quality control.',
        content: `<h2>Eddy Current Testing Explained</h2>
<p>Eddy current testing is an electromagnetic method for detecting surface and near-surface defects in conductive materials.</p>
<h3>How It Works</h3>
<p>An alternating current through a coil creates an alternating magnetic field. When placed near a conductive material, this induces eddy currents in the material. Defects disrupt these currents, and the changes are detected by the probe.</p>
<h3>Advantages</h3>
<ul>
<li>Rapid inspection speed</li>
<li>Excellent for thin materials</li>
<li>Can detect very small defects</li>
<li>Non-contact method</li>
</ul>
<h3>Applications</h3>
<ul>
<li>Detecting cracks in aircraft components</li>
<li>Heat exchanger tube inspection</li>
<li>Quality control in manufacturing</li>
</ul>`,
        author: 'Atlantis NDT',
        order: 5,
        createdAt: '2025-10-10',
        updatedAt: '2025-10-10'
      },
      {
        id: '6',
        title: 'Penetrant Testing: Detecting Surface Defects',
        slug: 'penetrant-testing',
        date: 'October 12, 2025',
        snippet: 'A deep dive into liquid penetrant testing and its role in non-destructive inspections.',
        content: `<h2>Penetrant Testing: Detecting Surface Defects</h2>
<p>Penetrant testing, also known as liquid penetrant testing (LPT), is a non-destructive method for detecting surface-breaking defects in non-porous materials.</p>
<h3>Process</h3>
<p>A low-viscosity liquid penetrant is applied to the clean surface of the component. The penetrant enters surface-breaking discontinuities through capillary action. After removal of excess penetrant, a developer is applied to draw the penetrant out of defects, making them visible.</p>
<h3>Types of Penetrants</h3>
<ul>
<li>Fluorescent penetrants</li>
<li>Red dye penetrants</li>
<li>Visible dye penetrants</li>
</ul>
<h3>Best For</h3>
<ul>
<li>Detecting cracks</li>
<li>Finding porosity</li>
<li>Identifying sealing surface defects</li>
<li>Quality assurance</li>
</ul>`,
        author: 'Atlantis NDT',
        order: 6,
        createdAt: '2025-10-12',
        updatedAt: '2025-10-12'
      }
    ];
  }
}

export const blogService = new BlogService();
