# NDT Training Academy - Satellite Site #4

A comprehensive Next.js 14 satellite site dedicated to NDT (Non-Destructive Testing) training and certification. This site drives traffic to atlantisndt.com's training, certification, and career pages.

## Project Overview

**Site Focus:** NDT Training & Certification Excellence  
**Primary Purpose:** Drive traffic to atlantisndt.com training and certification pages  
**Theme:** Amber/Orange professional color scheme  
**Technology:** Next.js 14, TypeScript, Tailwind CSS

## Site Architecture

### Configuration Files
- `package.json` - Dependencies and scripts
- `next.config.js` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Tailwind CSS with amber/orange theme
- `postcss.config.js` - PostCSS configuration
- `.gitignore` - Git ignore patterns

### Core Files
- `src/app/layout.tsx` - Root layout with navigation and footer
- `src/app/globals.css` - Global styles with amber theme

### Page Structure

#### Homepage & Training
- `src/app/page.tsx` - Homepage with training method cards, certifications, regions, and CTA
- `src/app/training/page.tsx` - Complete guide to NDT training programs (duration, costs, choosing provider)
- `src/app/training/ut-training/page.tsx` - Ultrasonic Testing guide (Level I, II, III curriculum)
- `src/app/training/rt-training/page.tsx` - Radiographic Testing guide (safety, film interpretation, digital RT)
- `src/app/training/mt-pt-training/page.tsx` - Magnetic Particle & Penetrant Testing guide

#### Certifications
- `src/app/certifications/page.tsx` - Certification roadmap with Level I→II→III visual flow
- `src/app/certifications/asnt-study-guide/page.tsx` - ASNT exam prep guide with study tips and resources
- `src/app/certifications/api-exam-prep/page.tsx` - API 510/570/653 consolidated exam prep guide

#### Regional Training
- `src/app/regional/page.tsx` - Regional training guide index
- `src/app/regional/usa/page.tsx` - NDT training in USA
- `src/app/regional/india/page.tsx` - NDT training in India (Hyderabad)
- `src/app/regional/middle-east/page.tsx` - NDT training in Middle East (Dubai, Saudi Arabia)

#### Career
- `src/app/career/page.tsx` - NDT career guide with job opportunities, salary, and advancement paths

## Content Backlinks to Atlantis NDT

Each page includes 2-3 natural backlinks to atlantisndt.com:

### Key Landing Pages Targeted
- https://atlantisndt.com/training (main training page)
- https://atlantisndt.com/training-usa
- https://atlantisndt.com/training-india
- https://atlantisndt.com/training-me
- https://atlantisndt.com/ndt-training-dubai
- https://atlantisndt.com/ndt-training-saudi-arabia
- https://atlantisndt.com/ndt-training-hyderabad
- https://atlantisndt.com/asnt-certification
- https://atlantisndt.com/api-570-certification
- https://atlantisndt.com/api-570-training
- https://atlantisndt.com/api-653-certification
- https://atlantisndt.com/api-510-certification
- https://atlantisndt.com/blog/ndt-career-guide

## Page Specifications

All pages include:
- **Metadata:** Title, description, keywords, Open Graph tags
- **Schema Markup:** JSON-LD structured data for SEO
- **Breadcrumbs:** Navigation hierarchy
- **Word Count:** 1000+ words per main page
- **Internal Links:** Cross-linking to related pages
- **External Links:** 2-3 natural backlinks to atlantisndt.com per page

## Design Features

### Color Scheme
- **Primary:** Amber/Orange (from-amber-500 to-amber-600)
- **Accent Colors:** Blue, Purple, Red, Green (for different sections)
- **Background:** Slate gradients
- **Text:** Slate gray for readability

### UI Components
- Custom button styles (primary, secondary, outline)
- Card components with hover effects
- Badge styles for certifications
- Breadcrumb navigation
- Responsive grid layouts
- Gradient backgrounds

## Navigation Structure

**Main Navigation:**
- Home
- Training Programs
- Certifications
- Regional Guides
- Career

**Footer Links:**
- Training Programs (UT, RT, MT/PT)
- Certifications (Roadmap, ASNT, API)
- Training Partners (Atlantis NDT links)
- Regional Training (USA, India, Middle East)

## Development Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Key Features

### Content Depth
- Comprehensive training method guides
- Certification preparation resources
- Regional training analysis
- Career opportunity exploration
- Practical tips and strategies

### SEO Optimization
- Semantic HTML structure
- Schema markup for articles
- Breadcrumb navigation
- Internal linking strategy
- Descriptive page titles and meta descriptions

### User Experience
- Clear information hierarchy
- Multiple call-to-action buttons
- Related content suggestions
- Easy navigation between sections
- Mobile-responsive design

## NDT Training Coverage

### Methods Covered
- Ultrasonic Testing (UT)
- Radiographic Testing (RT)
- Magnetic Particle Testing (MT)
- Penetrant Testing (PT)

### Certification Types
- ASNT Certifications (Level I, II, III)
- API 510 (Pressure Vessel Inspector)
- API 570 (Piping Inspector)
- API 653 (Tank Inspector)

### Regions Covered
- United States
- India (Hyderabad emphasis)
- Middle East (Dubai, Saudi Arabia)

### Career Topics
- Job opportunities by industry
- Salary ranges and compensation
- Career progression paths
- Skills development
- Industry growth trends

## Deployment

This is a standard Next.js 14 application. Deploy to:
- Vercel (recommended)
- AWS Amplify
- Netlify
- Any Node.js-compatible hosting

## Maintenance Notes

- Update page content as Atlantic NDT training programs change
- Add new regional training pages as programs expand
- Update salary and job market information annually
- Monitor and optimize SEO performance
- Keep Atlantic NDT backlinks current

## File Locations

**Root Directory:** `/sessions/modest-cool-bohr/mnt/atlantis-reimagined1/backlink-sites/ndt-training-academy/`

All files follow Next.js 14 app directory structure with TypeScript.
