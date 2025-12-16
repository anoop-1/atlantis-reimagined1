# Blog System - UI/UX & Theme Consistency Guide

## 🎨 Design System Overview

The blog system maintains 100% consistency with the Atlantis NDT website design language and theme.

---

## 🎭 Color Palette

### Primary Colors
```
Primary Blue:      #004aad (RGB: 0, 74, 173)
Primary Light:     #1a5fcf
Primary Dark:      #003a7a
Accent Cyan:       #00d4ff (RGB: 0, 212, 255)
```

### Neutral Colors
```
White:             #ffffff
Light Gray:        #f5f5f5
Medium Gray:       #999999
Dark Gray:         #333333
Black:             #1a1a1a
```

### Semantic Colors
```
Success:           #10b981 (Green)
Warning:           #f59e0b (Amber)
Error:             #ef4444 (Red)
Info:              #0891b2 (Cyan)
```

---

## 📝 Typography System

### Font Stack
```
Primary:   -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto
Monospace: "Monaco", "Courier New", monospace
```

### Font Sizes
```
H1: 48px (Desktop), 36px (Mobile)
H2: 32px (Desktop), 28px (Mobile)
H3: 24px (Desktop), 20px (Mobile)
Body: 16px
Small: 14px
```

### Font Weights
```
Light:    300
Regular:  400
Medium:   500
Semibold: 600
Bold:     700
```

---

## 🎯 Component Styling

### Admin Login Page
- **Background:** Gradient (primary/10 → accent/10)
- **Card:** White with shadow
- **Inputs:** Light gray border, focus primary
- **Button:** Primary gradient
- **Error:** Red text with alert icon

### Admin Dashboard
- **Layout:** Two-column sticky layout
- **Form Card:** White background, sticky top
- **Blog List:** Cards with hover effect
- **Buttons:** Primary (create/update), Outline (cancel), Destructive (delete)
- **Icons:** Lucide icons with 18-24px size
- **Animations:** Smooth fade-in, stagger on list

### Blog List Page
- **Hero:** Gradient background with text overlay
- **Grid:** 3 columns (desktop), 2 (tablet), 1 (mobile)
- **Cards:** White with subtle shadow
- **Spacing:** 8px grid (24, 32, 48px gaps)
- **Hover:** Scale transform + shadow increase

### Blog Detail Page
- **Hero:** Gradient background with breadcrumb
- **Content:** Max-width 768px, left-aligned
- **Typography:** Professional prose styling
- **Links:** Primary color, underline on hover
- **Spacing:** Generous padding (2rem+)

---

## 🎬 Animation Guidelines

### Motion Principles
- **Duration:** 300-600ms for most animations
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1)
- **Stagger:** 50-100ms delay between items

### Animation Types

#### Entrance Animations
```
opacity: 0 → 1
y: 20px → 0
duration: 0.5s
```

#### Hover Animations
```
scale: 1 → 1.02
shadow: md → lg
duration: 0.2s
```

#### List Item Animations
```
stagger: index * 0.05
opacity: 0 → 1
y: 10px → 0
```

---

## 📱 Responsive Breakpoints

```
Mobile:    < 640px (sm)
Tablet:    640px - 1024px (md)
Desktop:   1024px - 1536px (lg)
Large:     > 1536px (xl)
```

### Grid Layouts
```
Mobile:    1 column
Tablet:    2 columns
Desktop:   3 columns
Large:     4 columns (if needed)
```

### Spacing Adjustments
```
Mobile:    12-16px
Tablet:    16-24px
Desktop:   24-32px
Large:     32-48px
```

---

## 🎨 Component Usage

### Buttons
```typescript
// Primary (CTA)
<Button className="btn-primary">Create Post</Button>

// Outline (Secondary)
<Button variant="outline">Cancel</Button>

// Destructive (Delete)
<Button variant="destructive">Delete</Button>

// Ghost (Tertiary)
<Button variant="ghost">Back</Button>
```

### Cards
```typescript
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Subtitle</CardDescription>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
</Card>
```

### Forms
```typescript
<div className="space-y-4">
  <div>
    <label>Field Label</label>
    <Input placeholder="..." />
  </div>
</div>
```

---

## 🔍 Visual Hierarchy

### Blog List Page
1. **Hero Section** - Largest, most prominent
2. **Blog Cards** - Equal prominence
3. **Snippets** - Smaller, supporting
4. **Buttons** - Action focal points

### Blog Detail Page
1. **Title (H1)** - 48px, bold
2. **Metadata** - Smaller, secondary
3. **Content (H2)** - 32px, bold
4. **Paragraphs** - 16px, regular
5. **Subheadings (H3)** - 24px, semibold

### Admin Dashboard
1. **Header** - Title + Logout
2. **Form Title** - Primary action
3. **Blog List** - Secondary list
4. **Individual Items** - Tertiary

---

## ✨ Interactive States

### Button States
```
Default:  Primary color, full opacity
Hover:    Lighter shade, slight scale
Active:   Darker shade, full opacity
Disabled: Gray, 50% opacity, no cursor
Loading:  Spinner animation
```

### Input States
```
Default:    Light border, transparent
Focus:      Primary border, shadow
Error:      Red border, error text
Disabled:   Gray background, no interaction
Success:    Green border, check icon
```

### Card States
```
Default:    Subtle shadow
Hover:      Increased shadow, slight scale
Active:     Primary border highlight
Selected:   Primary background tint
```

---

## 📐 Spacing System

Based on 8px grid:

```
xs:    4px (1)
sm:    8px (2)
md:    16px (4)
lg:    24px (6)
xl:    32px (8)
2xl:   48px (12)
3xl:   64px (16)
```

### Common Patterns
```
Padding:     md (16px) to lg (24px)
Margin:      md (16px) to lg (24px)
Gap:         md (16px) to lg (24px)
Radius:      6px to 12px
```

---

## 🖼️ Image & Icon Guidelines

### Icons (Lucide React)
```
Size:       16px (small), 18px (default), 20px (large), 24px (hero)
Color:      Inherit from parent
Stroke:     2px (default)
Spacing:    4px gap from text
```

### Images
```
Format:     PNG, JPEG, WebP
Max Width:  100% of container
Aspect:     16:9 (hero), 4:3 (card), 1:1 (icon)
Optimization: Compressed, lazy-loaded
```

---

## 🎯 Accessibility Features

### Color Contrast
- Text on white: WCAG AA (4.5:1 minimum)
- Interactive elements: Sufficient contrast
- Focus indicators: Visible (2px min)

### Interactive Elements
- Minimum size: 44x44px (touch targets)
- Keyboard navigation: Full support
- Screen reader: Semantic HTML
- Focus visible: Clear outline

### Text
- Line height: 1.5-1.75 for body
- Letter spacing: 0.5-1px for headings
- Max width: 70-80 characters
- Font size: 16px minimum

---

## 🎬 CSS Classes Reference

### Utility Classes
```
.btn-primary       - Primary button styling
.hover-scale       - Hover scale animation
.glass             - Glassmorphic effect
.prose             - Typography styling
.gradient-text     - Gradient text effect
.shadow-md         - Medium shadow
.rounded-lg        - Large border radius
```

### Layout Classes
```
.container         - Max-width wrapper
.flex              - Flexbox layout
.grid              - Grid layout
.space-y-*         - Vertical spacing
.gap-*             - Grid gap
```

---

## 📊 Design Tokens

### Shadows
```
shadow-sm:  0 2px 8px rgba(0, 0, 0, 0.08)
shadow-md:  0 8px 25px rgba(0, 0, 0, 0.15)
shadow-lg:  0 25px 50px rgba(0, 0, 0, 0.25)
shadow-xl:  0 40px 80px rgba(0, 0, 0, 0.35)
```

### Gradients
```
gradient-primary: linear-gradient(135deg, #004aad, #1a5fcf)
gradient-hero:    linear-gradient(135deg, #004aad, #00d4ff)
gradient-card:    linear-gradient(145deg, #ffffff, #f5f5f5)
gradient-text:    linear-gradient(90deg, #004aad, #00d4ff)
```

### Borders
```
border-sm:   1px solid
border:      2px solid
border-lg:   4px solid
radius-sm:   4px
radius-md:   8px
radius-lg:   12px
```

---

## 🎨 Dark Mode Support (Future)

Current: Light theme only  
Prepared for: Dark mode implementation

Colors would be:
```
Dark Background: #0f0f0f
Dark Surface:    #1a1a1a
Dark Border:     #333333
Light Text:      #f5f5f5
```

---

## ✅ Quality Checklist

- [ ] Colors match design system
- [ ] Typography follows hierarchy
- [ ] Spacing is consistent (8px grid)
- [ ] Animations are smooth (300-600ms)
- [ ] Buttons have proper states
- [ ] Forms have clear labels
- [ ] Cards have sufficient shadow
- [ ] Text has proper contrast
- [ ] Interactive elements are 44x44px+
- [ ] Responsive breakpoints work
- [ ] Icons are properly sized
- [ ] Hover states are visible
- [ ] Loading states are clear
- [ ] Error states are obvious
- [ ] Focus indicators are visible

---

## 🔗 Related Files

- `src/index.css` - CSS variables and utilities
- `tailwind.config.ts` - Tailwind configuration
- `components.json` - Component configuration
- Individual component files for specific styles

---

## 📞 Design System Support

For questions about:
- **Colors:** Check `src/index.css` root variables
- **Typography:** Check `tailwind.config.ts`
- **Components:** Check shadcn/ui documentation
- **Icons:** Check Lucide React documentation
- **Animations:** Check Framer Motion documentation

---

**Last Updated:** December 1, 2025  
**Version:** 1.0  
**Status:** Complete & Consistent
