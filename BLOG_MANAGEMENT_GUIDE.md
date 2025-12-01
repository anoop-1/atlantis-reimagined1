# Blog Management System - Admin Guide

## Overview
The Atlantis NDT website now includes a complete blog management system where administrators can create, edit, delete, and organize blog posts directly from the frontend dashboard.

## Admin Login Credentials
- **Email:** `anoop@atlantisinspection.com`
- **Password:** `Atlantis9$`

## Accessing the Admin Panel

### From the Website
1. Click the **"Admin"** link in the top navigation bar
2. You'll be redirected to `/admin/login`
3. Enter your email and password
4. Click "Sign In"

### Direct URL
Navigate directly to: `https://your-domain.com/admin/login`

## Admin Dashboard Features

### 1. **Create New Blog Post**
- Fill in all required fields in the left sidebar form:
  - **Title:** The headline of your blog post
  - **Slug:** URL-friendly identifier (e.g., `my-blog-post` → `/blog/my-blog-post`)
  - **Date:** Publication date
  - **Author:** Author name
  - **Preview Snippet:** Short description shown in blog list (150-200 characters recommended)
  - **Content:** Full blog post content (supports HTML tags)

- Click **"Create Post"** to publish

### 2. **Edit Blog Posts**
- Click the **"Edit"** button on any blog post card
- Modify the content as needed
- Click **"Update Post"** to save changes
- Click **"Cancel"** to discard changes

### 3. **Delete Blog Posts**
- Click the **"Delete"** button on any blog post
- Confirm the deletion in the dialog that appears
- The post will be permanently removed

### 4. **Reorder Blog Posts**
- Use the **up ↑** and **down ↓** arrow buttons on each post card
- Drag posts to change their display order on the blog list page
- The order persists automatically

## Content Guidelines

### Slugs (URL identifiers)
- Use lowercase letters and hyphens only
- Examples: `ultrasonic-testing`, `ndt-best-practices`, `industry-news`
- Slugs must be unique (no duplicates)

### Content Format
You can use basic HTML in the content field:

```html
<h2>Section Title</h2>
<p>Paragraph text here</p>
<h3>Subsection</h3>
<ul>
  <li>List item 1</li>
  <li>List item 2</li>
</ul>
```

### Recommended Structure
1. Use `<h2>` for main headings
2. Use `<h3>` for subheadings
3. Use `<p>` for paragraphs
4. Use `<ul>` for bullet lists
5. Keep paragraphs concise (2-3 sentences)

## Blog Pages

### 1. Blog List Page (`/blog`)
- Displays all published blog posts in a grid layout
- Shows post title, date, author, and snippet
- Features a **"Read More →"** button for each post
- Posts are displayed in the order set in the admin dashboard

### 2. Blog Detail Page (`/blog/[slug]`)
- Full article view opens in a new tab (target="_blank")
- Displays complete content with proper formatting
- Shows publication date and author
- Includes "Back to Blog" navigation

## SEO & Search Engines

### How It Works
- Each blog post automatically generates unique SEO metadata
- The sitemap (`/public/sitemap.xml`) is pre-configured with blog routes
- New blog posts will be automatically discoverable by Google Search Console
- The system maintains proper canonical URLs for duplicate prevention

### Google Search Console
1. Submit the sitemap: `https://your-domain.com/public/sitemap.xml`
2. Each new blog post is automatically indexed
3. The blog list page has weekly crawl frequency for freshness

## Data Storage

### Local Storage
- Blog posts are stored in the browser's localStorage
- Data persists across browser sessions
- Each post includes:
  - Unique ID (auto-generated)
  - Creation timestamp
  - Last updated timestamp

### Backup Recommendations
- Periodically export your blog data
- Browser localStorage is limited to ~5MB
- Consider implementing server-side storage for large sites

## Security Notes

⚠️ **Important:** 
- Admin login credentials are hardcoded for demo purposes
- For production, implement proper authentication (JWT, OAuth, etc.)
- Add server-side validation for content
- Consider adding password change functionality

## Troubleshooting

### Blog Not Appearing
1. Check that the slug is unique
2. Ensure content field is not empty
3. Clear browser cache and refresh

### Post Order Not Saving
- Use the arrow buttons to reorder
- Changes save automatically
- Hard refresh if order appears incorrect

### Content Not Displaying
- Verify HTML syntax in content field
- Check for special characters that need escaping
- Test with simpler HTML first

## Blog URLs Format

All blog posts follow this URL pattern:
```
https://your-domain.com/blog/[slug]
```

Examples:
- `/blog/ultrasonic-testing`
- `/blog/ndt-best-practices`
- `/blog/industry-trends-2025`

## Performance Tips

1. **Keep snippets concise** - Improves blog list load time
2. **Use descriptive slugs** - Better for SEO
3. **Structure content with headers** - Easier to read and scan
4. **Optimize images** - Reduce file sizes before adding to HTML

## Logout

Click the **"Logout"** button in the top-right corner of the dashboard to end your admin session.

## Additional Resources

- **Blog List Component:** `/src/pages/Blog.tsx`
- **Blog Detail Component:** `/src/pages/BlogDetail.tsx`
- **Admin Dashboard:** `/src/pages/AdminDashboard.tsx`
- **Blog Service:** `/src/services/BlogService.ts`
- **Authentication Context:** `/src/context/AuthContext.tsx`

---

**Need Help?** Contact the development team for any issues or feature requests.
