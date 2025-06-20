# MinimalPress Implementation Plan

## Project Overview
Building MinimalPress - a minimal blog theme based on design-guide.json with:
- Three-column layout (sidebar, main content, table of contents)
- Dark/light theme toggle
- Markdown-based content
- Responsive design
- Tailwind CSS for styling

## Tech Stack
**Astro** - Static site generator
- Built-in markdown support with frontmatter
- Excellent performance (ships zero JS by default)
- Native Tailwind CSS integration
- Great for SEO and static generation

**Dependencies:**
- Astro
- Tailwind CSS + Typography plugin
- Shiki (syntax highlighting)
- Remark/Rehype plugins
- Pagefind (search)

## Project Structure
```
minimalpress/
├── src/
│   ├── content/
│   │   ├── config.ts        # Content collection schema
│   │   └── blog/            # Markdown blog posts
│   │       ├── post-1.md
│   │       └── post-2.md
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── BlogLayout.astro
│   ├── components/
│   │   ├── Sidebar.astro
│   │   ├── TableOfContents.astro
│   │   ├── ThemeToggle.astro
│   │   ├── MobileMenu.astro
│   │   ├── SearchModal.astro
│   │   ├── CodeBlock.astro
│   │   └── ImageGallery.astro
│   ├── pages/
│   │   ├── index.astro      # Blog listing page
│   │   └── blog/
│   │       └── [...slug].astro  # Dynamic blog posts
│   └── styles/
│       └── global.css       # Global styles & CSS variables
├── public/
│   └── images/              # Static images
├── tailwind.config.js       # Custom theme configuration
├── astro.config.js          # Astro configuration
├── package.json
└── design-guide.json        # Design system reference
```

## Implementation Steps

### Phase 1: Project Setup
1. Initialize Astro project
   ```bash
   npm create astro@latest . -- --template minimal --typescript
   ```
2. Install Tailwind CSS
   ```bash
   npx astro add tailwind
   ```
3. Install additional dependencies
   ```bash
   npm install @astrojs/mdx @astrojs/sitemap
   npm install -D @tailwindcss/typography
   ```

### Phase 2: Configure Tailwind with Design System
1. Map colors from design-guide.json to Tailwind config
2. Set up CSS variables for theme switching
3. Configure typography plugin for markdown content
4. Create utility classes for common patterns

### Phase 3: Build Core Layout Components

#### BlogLayout.astro
- Three-column grid layout
- Fixed sidebar (280px)
- Main content area (max 800px)
- Table of contents (200px)
- Responsive breakpoints

#### Sidebar.astro
- Fixed navigation menu
- Collapsible sections
- Active state indicators
- Search trigger button

#### ThemeToggle.astro
- Dark/light mode switcher
- LocalStorage persistence
- Smooth transitions
- System preference detection

#### TableOfContents.astro
- Auto-generated from headings
- Scroll spy functionality
- Nested heading support
- Smooth scroll navigation

### Phase 4: Markdown Processing
1. Configure content collections
2. Set up frontmatter schema:
   ```yaml
   title: string
   date: Date
   description: string
   tags: string[]
   image?: string
   draft?: boolean
   ```
3. Configure remark/rehype plugins:
   - Syntax highlighting (Shiki)
   - Auto-linking headings
   - Image optimization
   - Reading time calculation

### Phase 5: Implement Features

#### Mobile Responsive Design
- Hamburger menu for mobile
- Slide-out sidebar
- Touch-friendly navigation
- Responsive typography

#### Search Functionality
- Pagefind integration
- Keyboard shortcut (Cmd+K)
- Modal search interface
- Real-time results

#### Image Gallery
- Grid layout for images
- Click to zoom functionality
- Lazy loading
- Caption support

#### Additional Features
- Scroll to top button
- Copy code button
- Share buttons
- RSS feed

### Phase 6: Performance Optimization
1. Image optimization
2. Font loading strategies
3. CSS purging
4. HTML minification
5. Sitemap generation

## Key Configurations

### tailwind.config.js
```javascript
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Map from design-guide.json
        dark: {
          bg: '#1a1a1a',
          surface: '#2d2d2d',
          card: '#363636',
          // ... etc
        },
        light: {
          bg: '#ffffff',
          surface: '#f8f9fa',
          card: '#ffffff',
          // ... etc
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // Custom typography styles
          }
        }
      })
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
```

### astro.config.js
```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://example.com',
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
```

## Build Commands
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run astro ...  # Run CLI commands
```

## Content Structure Example
```markdown
---
title: "Getting Started with Astro"
description: "Learn how to build fast websites with Astro"
date: 2024-01-15
tags: ["astro", "web development", "tutorial"]
image: "/images/astro-banner.jpg"
---

# Getting Started with Astro

Your content here...

## Table of Contents will be auto-generated

### Code blocks with syntax highlighting

```javascript
const greeting = "Hello, Astro!";
console.log(greeting);
```
```

## Deployment Options
- Vercel (recommended)
- Netlify
- GitHub Pages
- Cloudflare Pages

## SEO Optimization Plan

### Current Implementation Status
✅ **Completed Features:**
- Three-column layout with sidebar and TOC
- Working dark/light theme toggle
- Markdown content with frontmatter
- Basic meta tags and Open Graph
- Responsive design
- Content padding optimization

### SEO Optimization Roadmap

#### Phase 1: Enhanced Meta & Structured Data
**Goals:** Improve search engine understanding and rich snippets
1. **JSON-LD Structured Data**
   - Website/Organization schema
   - Article schema for blog posts (author, datePublished, wordCount)
   - Breadcrumb navigation schema
   - Author/Person schema

2. **Enhanced Meta Tags**
   - Dynamic keywords generation from content
   - Better OG image handling with fallbacks
   - Article-specific meta tags (reading time, author)
   - Twitter Card enhancements

3. **Content Collection Schema Updates**
   - Add SEO-specific frontmatter fields
   - Reading time calculation
   - Keywords/tags optimization

#### Phase 2: Content Optimization
**Goals:** Improve content discoverability and user experience
1. **Reading Time Calculator**
   - Automatic reading time estimation
   - Display in post meta information

2. **Internal Linking System**
   - Related posts suggestions
   - Automatic link generation between posts
   - Tag-based post relationships

3. **Enhanced Table of Contents**
   - Anchor links for all headings
   - Scroll spy functionality
   - SEO-friendly heading structure

4. **Image Optimization**
   - Automatic alt text generation
   - Responsive image handling
   - Lazy loading implementation

#### Phase 3: Technical SEO Improvements
**Goals:** Better crawling and indexing
1. **XML Sitemap Generation**
   - Dynamic sitemap with priority levels
   - Include images and last modified dates
   - Submit to search engines

2. **Robots.txt Configuration**
   - Proper crawler instructions
   - Sitemap location reference

3. **Breadcrumb Navigation**
   - Visual breadcrumbs for users
   - Structured data for search engines

4. **Performance Optimizations**
   - Core Web Vitals improvements
   - Critical CSS inlining
   - Font loading optimization

#### Phase 4: Analytics & Monitoring
**Goals:** Track SEO performance and user behavior
1. **Analytics Integration**
   - Google Analytics 4 or Plausible
   - Privacy-focused tracking options

2. **Search Console Setup**
   - Verification meta tags
   - Performance monitoring

3. **SEO Monitoring**
   - Core Web Vitals tracking
   - Search ranking monitoring

### Implementation Priority
🔥 **High Priority (Phase 1):**
- JSON-LD structured data
- Enhanced meta tags
- Reading time calculation

📋 **Medium Priority (Phase 2):**
- Internal linking system
- Image optimization
- Better TOC implementation

🔧 **Technical (Phase 3):**
- XML sitemap
- Robots.txt
- Breadcrumbs

📊 **Analytics (Phase 4):**
- Tracking implementation
- Performance monitoring

### SEO Best Practices Already Implemented
✅ Static site generation (great for SEO)
✅ Semantic HTML structure
✅ Mobile responsive design
✅ Fast loading times with Astro
✅ Clean URL structure
✅ Basic meta tags and Open Graph

## Next Steps
1. ✅ Complete core layout and theme toggle
2. ✅ **COMPLETED:** Implement SEO Phase 1 - Enhanced Meta & Structured Data
3. ✅ **COMPLETED:** Phase 2 - Content Optimization Features
4. ✅ **COMPLETED:** Phase 3 - Technical SEO Improvements
5. 🚀 **NEXT:** Phase 4 - Analytics and monitoring
6. Test and deploy with SEO optimizations

### Phase 1 Completed Features ✅
- **SEO Utility Functions**: Reading time calculation, keyword extraction, meta description generation
- **JSON-LD Structured Data**: Organization and Article schemas with rich metadata
- **Enhanced Meta Tags**: Dynamic keywords, improved Open Graph, Twitter Cards with article metadata
- **Content Collection Schema**: Added SEO fields (keywords, canonical, priority, etc.)
- **Reading Time Display**: Automatic calculation and display in blog post metadata
- **Site Configuration System**: Centralized config for site metadata, navigation, author info, and social links

### Site Configuration Features ✅
- **Centralized Config**: Single `src/config.ts` file for all site settings
- **Site Metadata**: Name, description, URL, and SEO defaults
- **Author Information**: Name, email, and social media profiles  
- **Navigation Menu**: Dynamic navigation from config
- **Social Links**: Twitter, GitHub, LinkedIn integration
- **About Page**: Auto-generated from config data
- **SEO Integration**: Config values used in meta tags and structured data

### Phase 2 Completed Features ✅
- **Related Posts System**: Intelligent post suggestions based on tags and content similarity scoring
- **Internal Linking Suggestions**: Automatic detection and suggestion of linking opportunities between posts
- **Enhanced Table of Contents**: Scroll spy, reading progress indicator, keyboard navigation (Alt+Arrow keys)
- **Image Optimization Components**: 
  - `OptimizedImage` with responsive loading, lazy loading, click-to-zoom modal
  - `ImageGallery` with lightbox navigation, thumbnails, keyboard controls
  - WebP format support, aspect ratio preservation, intersection observer optimization

### Phase 3 Completed Features ✅
- **XML Sitemap Generation**: Automatic sitemap with priority levels, change frequency, and custom filtering
- **Dynamic Robots.txt**: Auto-generated robots.txt using site configuration with proper crawler directives
- **Breadcrumb Navigation**: SEO-friendly breadcrumbs with JSON-LD structured data and responsive design
- **Core Web Vitals Optimizations**:
  - Font loading optimization with `font-display: swap`
  - DNS prefetching and resource preloading
  - Layout shift prevention with proper image sizing
  - GPU acceleration for animations and scrolling
  - Print styles and accessibility improvements (reduced motion, high contrast)