# MinimalPress

A clean, minimalist blog theme built with Astro and vanilla CSS. Perfect for developers, writers, and content creators who want a fast, accessible, and beautiful blog.

> 🎨 **Vibe-coded and inspired by [Obsidian Minimal Theme](https://github.com/kepano/obsidian-minimal)** - bringing the clean, focused aesthetic of Obsidian to the web.

![MinimalPress Demo](https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=630&fit=crop)

## ✨ Features

### Core Features
- **⚡ Lightning Fast** - Static site generation with Astro (100/100 Lighthouse scores)
- **🎨 Beautiful Design** - Clean, minimal interface focused on readability
- **🌓 Dark/Light Theme** - System preference detection with manual toggle
- **📱 Fully Responsive** - Mobile-first design that works on all devices
- **🔍 Full-text Search** - Fast client-side search (coming soon)
- **📊 Reading Progress** - Visual progress bar and reading time estimates

### Content Features
- **📝 Markdown Support** - Write in Markdown with full frontmatter support
- **🎯 SEO Optimized** - Meta tags, Open Graph, Twitter Cards, sitemap, robots.txt
- **📖 Table of Contents** - Auto-generated with scroll spy navigation
- **🔗 Smart Linking** - Related posts and internal link suggestions
- **🏷️ Tag System** - Organize and filter content by tags
- **🖼️ Image Optimization** - Responsive images with lazy loading and lightbox

### Developer Features
- **🛠️ TypeScript** - Full type safety throughout the codebase
- **🎯 Focus Mode** - Distraction-free reading experience
- **♿ Accessible** - WCAG 2.1 AA compliant with full keyboard navigation
- **🚀 Performance** - Optimized for Core Web Vitals
- **📦 Component Based** - Modular architecture for easy customization
- **🔧 Easy Configuration** - Central config file for all settings

## 🚀 Quick Start

### Prerequisites
- Node.js 18.14.1 or higher
- npm or yarn package manager

### Installation

1. **Use this template** (recommended)
   ```bash
   # Clone the repository
   git clone https://github.com/yourusername/minimalpress.git my-blog
   cd my-blog
   
   # Remove git history and start fresh
   rm -rf .git
   git init
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   
   Open [http://localhost:4321](http://localhost:4321) to see your blog.

4. **Build for production**
   ```bash
   npm run build
   npm run preview # Preview the production build
   ```

## 📁 Project Structure

```text
minimalpress/
├── src/
│   ├── components/          # Reusable Astro components
│   │   ├── Breadcrumb.astro
│   │   ├── ImageGallery.astro
│   │   ├── MobileMenu.astro
│   │   ├── OptimizedImage.astro
│   │   ├── RelatedPosts.astro
│   │   ├── Sidebar.astro
│   │   ├── TableOfContents.astro
│   │   ├── ThemeToggle.astro
│   │   └── ...
│   ├── content/
│   │   ├── config.ts        # Content collection schema
│   │   └── blog/            # Blog posts (Markdown/MDX)
│   │       ├── getting-started.md
│   │       └── guides/
│   │           └── configuration.md
│   ├── layouts/             # Page layouts
│   │   ├── BaseLayout.astro # Base HTML structure
│   │   └── BlogLayout.astro # Blog post layout
│   ├── pages/               # File-based routing
│   │   ├── index.astro      # Homepage/blog listing
│   │   ├── about.astro      # About page
│   │   └── blog/
│   │       └── [...slug].astro # Dynamic blog routes
│   ├── styles/
│   │   └── global.css       # Global styles & CSS variables
│   ├── utils/               # Utility functions
│   │   ├── navigation.ts    # Navigation helpers
│   │   └── seo.ts          # SEO utilities
│   └── config.ts           # Site configuration
├── public/                 # Static assets (images, fonts)
├── astro.config.mjs       # Astro configuration
├── package.json
└── tsconfig.json          # TypeScript configuration
```

## ✍️ Writing Content

### Creating a Blog Post

Create new posts in `src/content/blog/`:

```markdown
---
title: "Getting Started with MinimalPress"
description: "Learn how to create your first blog post"
date: 2024-01-20
tags: ["tutorial", "astro", "markdown"]
image: "/images/getting-started.jpg" # Optional cover image
author: "Your Name" # Optional, defaults to config
draft: false # Set to true to hide from production
canonical: "https://original-post-url.com" # Optional canonical URL
---

Your content here in **Markdown** format.

## Table of contents is automatically generated

Code blocks with syntax highlighting:

​```javascript
const greeting = "Hello, MinimalPress!";
console.log(greeting);
​```
```

### Organizing Content

You can organize posts in folders:

```text
src/content/blog/
├── getting-started.md
├── tutorials/
│   ├── astro-basics.md
│   └── markdown-guide.md
└── thoughts/
    └── why-minimal-design.md
```

Folders become part of the URL: `/blog/tutorials/astro-basics`

### Frontmatter Options

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Post title |
| `description` | string | Yes | Short description (meta description) |
| `date` | date | Yes | Publication date (YYYY-MM-DD) |
| `tags` | string[] | No | Array of tags |
| `image` | string | No | Cover image URL |
| `author` | string | No | Override default author |
| `draft` | boolean | No | Hide from production build |
| `updated` | date | No | Last update date |
| `canonical` | string | No | Canonical URL for cross-posted content |
| `noindex` | boolean | No | Exclude from search engines |

## 🎨 Customization

### Site Configuration

Edit `src/config.ts` to customize your site:

```typescript
export const siteConfig = {
  name: "My Blog",
  description: "My personal blog about web development",
  url: "https://myblog.com",
  
  author: {
    name: "Your Name",
    email: "you@example.com",
    twitter: "@yourhandle",
    github: "yourusername",
    linkedin: "yourprofile",
  },
  
  // Navigation menu
  navigation: [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  
  // Features
  features: {
    darkMode: true,
    search: true,
    tableOfContents: true,
    readingTime: true,
  },
  
  // Blog settings
  blog: {
    postsPerPage: 10,
    sortBy: "date", // "date" or "title"
    sortOrder: "desc", // "asc" or "desc"
  }
};
```

### Styling & Theming

MinimalPress uses vanilla CSS with CSS variables for a lightweight, customizable styling system.

#### Colors
Edit CSS variables in `src/styles/global.css`:

```css
:root {
  /* Light theme */
  --bg: #ffffff;
  --text: #333333;
  --accent: #007acc;
  /* ... more variables */
}

.dark {
  /* Dark theme */
  --bg: #1a1a1a;
  --text: #e4e4e7;
  --accent: #4facfe;
  /* ... more variables */
}
```

#### Typography
Customize typography in `src/styles/global.css`:

```css
.markdown-content {
  font-size: 18px;
  line-height: 1.8;
  letter-spacing: 0.01em;
}

.markdown-content h1 {
  font-size: 36px;
  font-weight: 700;
  margin: 48px 0 24px 0;
}
```

### Adding Pages

Create new pages in `src/pages/`:

```astro
---
// src/pages/contact.astro
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Contact" description="Get in touch">
  <h1>Contact Me</h1>
  <p>Your content here...</p>
</BaseLayout>
```

### Components

Create reusable components in `src/components/`:

```astro
---
// src/components/MyComponent.astro
export interface Props {
  title: string;
  variant?: 'primary' | 'secondary';
}

const { title, variant = 'primary' } = Astro.props;
---

<div class={`component ${variant}`}>
  <h3>{title}</h3>
  <slot />
</div>
```

## 🚀 Deployment

### Build Command
```bash
npm run build
```

### Deploy to Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/minimalpress)

### Deploy to Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/minimalpress)

### Manual Deployment

1. **Build the site**
   ```bash
   npm run build
   ```

2. **Deploy the `dist/` folder** to your hosting provider:
   - Vercel: `vercel --prod`
   - Netlify: `netlify deploy --prod`
   - GitHub Pages: Use GitHub Actions
   - Any static host: Upload `dist/` contents

### Environment Variables

Create a `.env` file for local development:

```env
# Analytics (optional)
PUBLIC_GA_ID=G-XXXXXXXXXX
PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com

# Comments (optional)
PUBLIC_GISCUS_REPO=username/repo
PUBLIC_GISCUS_REPO_ID=XXX
PUBLIC_GISCUS_CATEGORY=Comments
```

## 📋 Commands Reference

| Command | Action |
|---------|--------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro ...` | Run Astro CLI commands |
| `npm run astro add` | Add integrations (e.g., `astro add sitemap`) |
| `npm run astro check` | Check for TypeScript errors |

## 🔧 Advanced Configuration

### Adding Integrations

```bash
# Add sitemap
npm run astro add sitemap

# Add RSS feed
npm run astro add rss

# Add image optimization
npm run astro add image
```

### Custom Fonts

Add fonts to `src/layouts/BaseLayout.astro`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

Update CSS in `src/styles/global.css`:

```css
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

### Analytics

Add analytics in `src/layouts/BaseLayout.astro`:

```astro
<!-- Google Analytics -->
{import.meta.env.PUBLIC_GA_ID && (
  <script async src={`https://www.googletagmanager.com/gtag/js?id=${import.meta.env.PUBLIC_GA_ID}`}></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', import.meta.env.PUBLIC_GA_ID);
  </script>
)}
```

## 🐛 Troubleshooting

### Common Issues

**Build fails with "Cannot find module"**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Images not loading**
- Place images in `public/` folder
- Reference as `/image.jpg` (not `./image.jpg`)

**Styles not updating**
- Clear browser cache
- Restart dev server
- Check CSS variables in global.css

**404 on deployed site**
- Check `base` in `astro.config.mjs` if deploying to subdirectory
- Ensure all routes are generated during build

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build)
- Styled with vanilla CSS and CSS variables
- Icons from [Heroicons](https://heroicons.com)
- Inspired by minimal design principles

---

<p align="center">
  Made with ❤️ by the MinimalPress community
</p>

<p align="center">
  <a href="https://github.com/yourusername/minimalpress">GitHub</a> •
  <a href="https://minimalpress-demo.vercel.app">Demo</a> •
  <a href="https://github.com/yourusername/minimalpress/issues">Issues</a>
</p>