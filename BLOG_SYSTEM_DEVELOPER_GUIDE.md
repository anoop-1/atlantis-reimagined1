# Blog System - Developer Documentation

## Architecture Overview

The blog system consists of several key components working together:

### 1. **Authentication (`src/context/AuthContext.tsx`)**
- Manages admin login state
- Stores credentials in localStorage
- Provides `useAuth()` hook for components

### 2. **Blog Service (`src/services/BlogService.ts`)**
- `Blog` interface with all blog post properties
- `BlogService` class with CRUD methods
- Default blog data (6 sample posts)
- localStorage persistence
- Methods:
  - `getBlogs()` - Get all blogs sorted by order
  - `getBlogBySlug(slug)` - Get single blog
  - `getBlogById(id)` - Get blog by ID
  - `addBlog(blog)` - Create new post
  - `updateBlog(id, updates)` - Update existing post
  - `deleteBlog(id)` - Delete post
  - `reorderBlogs(newOrder)` - Change display order

### 3. **Pages**

#### Admin Login Page (`src/pages/AdminLogin.tsx`)
- Route: `/admin/login`
- Features password visibility toggle
- Error handling with toast notifications
- Auto-redirect to dashboard if already logged in

#### Admin Dashboard (`src/pages/AdminDashboard.tsx`)
- Route: `/admin/dashboard`
- Protected route (checks `isAdmin` from context)
- Two-column layout:
  - Left: Blog form (create/edit)
  - Right: Blog list with management tools
- Features:
  - Form validation
  - Edit mode with cancel
  - Delete confirmation dialog
  - Drag-to-reorder functionality
  - Sticky form sidebar

#### Blog List Page (`src/pages/Blog.tsx`)
- Route: `/blog`
- Displays all blogs dynamically
- Card-based grid layout (responsive)
- Each card shows:
  - Title
  - Date
  - Snippet
  - "Read More" link

#### Blog Detail Page (`src/pages/BlogDetail.tsx`)
- Route: `/blog/:slug`
- Dynamic routing by blog slug
- Full HTML content rendering
- SEO metadata generation
- Back navigation
- Opens in new tab with `target="_blank"`

### 4. **Navigation (`src/components/Navigation.tsx`)**
- Updated with admin link
- Desktop and mobile views
- Admin link visible on both

### 5. **App Routing (`src/App.tsx`)**
- Wraps entire app with `AuthProvider`
- New routes:
  - `/blog/:slug` - Dynamic blog detail
  - `/admin/login` - Admin login
  - `/admin/dashboard` - Admin dashboard
- Maintains compatibility with old hardcoded blog routes

## Data Model

```typescript
interface Blog {
  id: string;                // Unique identifier (timestamp)
  title: string;             // Blog post title
  slug: string;              // URL-friendly identifier
  date: string;              // Publication date
  snippet: string;           // Preview text for list view
  content: string;           // Full HTML content
  author?: string;           // Author name
  order: number;             // Display order on list
  createdAt: string;         // ISO date created
  updatedAt: string;         // ISO date last updated
}
```

## Styling & UI

- Uses shadcn/ui components
- Tailwind CSS for styling
- Framer Motion for animations
- Consistent with site design system
- Responsive on all devices

### CSS Classes Used
- `.btn-primary` - Primary action buttons
- `.hover-scale` - Hover animation
- `.glass` - Glassmorphic effect
- `.prose` - Content typography

## Key Features

### 1. **Security**
- Admin credentials hardcoded (demo only)
- localStorage session management
- Protected routes via context check

### 2. **SEO**
- Unique SEO metadata per blog post
- Proper canonical URLs
- Dynamic sitemap support
- Blog index page optimization

### 3. **UX**
- Form validation before submission
- Delete confirmation dialogs
- Toast notifications
- Smooth animations
- Responsive design

### 4. **Data Persistence**
- localStorage for blog data
- Auto-initialization with default blogs
- Order persistence
- Update timestamps

## File Structure

```
src/
├── pages/
│   ├── Blog.tsx              # Blog list page
│   ├── BlogDetail.tsx        # Blog detail page
│   ├── AdminLogin.tsx        # Admin login
│   └── AdminDashboard.tsx    # Admin dashboard
├── services/
│   ├── BlogService.ts        # Blog CRUD operations
│   └── SitemapGenerator.ts   # Dynamic sitemap generation
├── context/
│   └── AuthContext.tsx       # Auth state management
└── App.tsx                   # Updated with new routes
```

## Browser Compatibility

- Modern browsers with localStorage support
- ES2015+ JavaScript
- CSS Grid and Flexbox
- HTML5 semantic elements

## Performance Considerations

1. **localStorage limit** - 5-10MB per domain
2. **Blog count** - Optimized for 100+ posts
3. **Bundle size** - Minimal additional dependencies
4. **Load time** - No external API calls

## Future Enhancements

- [ ] Server-side storage (Firebase, Supabase)
- [ ] Image upload functionality
- [ ] Rich text editor instead of HTML
- [ ] Markdown support
- [ ] Search functionality
- [ ] Categories/tags system
- [ ] Comments system
- [ ] Social sharing
- [ ] Analytics tracking
- [ ] Draft/published states
- [ ] Scheduled publishing
- [ ] Author management

## Testing

### Manual Testing Checklist
- [ ] Login with correct credentials
- [ ] Reject wrong credentials
- [ ] Create new blog post
- [ ] Edit existing post
- [ ] Delete post with confirmation
- [ ] Reorder posts
- [ ] View blog list
- [ ] Click "Read More" opens detail
- [ ] Blog detail page renders HTML
- [ ] SEO metadata appears
- [ ] Logout and redirect
- [ ] Responsive on mobile

## Deployment Notes

1. Blog data is stored in localStorage (client-side only)
2. Data will not persist between devices
3. For production, migrate to server-side storage
4. Update admin credentials after deployment
5. Update sitemap in Google Search Console
6. Test with robots.txt to allow `/blog/*` paths

## Common Issues & Solutions

### Issue: Blog not appearing
**Solution:** Check slug uniqueness and that content is not empty

### Issue: Order not persisting
**Solution:** Hard refresh browser, check console for errors

### Issue: Content HTML not rendering
**Solution:** Verify HTML syntax, test with simple HTML first

### Issue: Login not working
**Solution:** Check exact email/password, clear localStorage

## Related Files

- `BLOG_MANAGEMENT_GUIDE.md` - User guide for admins
- `public/sitemap.xml` - SEO sitemap
- `src/services/SitemapGenerator.ts` - Sitemap generation utility

---

**Last Updated:** December 1, 2025
