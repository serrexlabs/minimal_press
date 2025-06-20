# MinimalPress

A clean, minimalist blog theme built with Astro and Tailwind CSS. Perfect for developers, writers, and content creators who want a fast, accessible, and beautiful blog.

## 🚀 Features

- ✨ **Clean, minimal design** - Focus on content, not clutter
- 🌓 **Dark/Light theme** - Automatic theme detection with manual toggle
- 📱 **Fully responsive** - Beautiful on all devices
- ⚡ **Lightning fast** - Static site generation with Astro
- 🎯 **SEO optimized** - Built-in meta tags, sitemaps, and structured data
- 📝 **Markdown support** - Write content in Markdown with frontmatter
- 🔍 **Full-text search** - Fast client-side search
- 📊 **Reading progress** - Track reading progress with visual indicators
- 🎨 **Syntax highlighting** - Beautiful code blocks with Shiki
- 🏷️ **Tag system** - Organize content with tags
- 📖 **Table of contents** - Auto-generated from headings
- 🔗 **Smart linking** - Related posts and internal link suggestions
- 🎯 **Focus mode** - Distraction-free reading experience
- ♿ **Accessible** - WCAG compliant with keyboard navigation

## 🛠️ Tech Stack

- **[Astro](https://astro.build)** - Static site generator
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org)** - Type safety
- **[MDX](https://mdxjs.com)** - Enhanced Markdown support

## 📦 Quick Start

1. **Clone this repository**
   ```bash
   git clone https://github.com/yourusername/minimalpress.git
   cd minimalpress
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```text
minimalpress/
├── src/
│   ├── content/
│   │   ├── config.ts        # Content collection schema
│   │   └── blog/            # Your blog posts (markdown)
│   ├── layouts/             # Page layouts
│   ├── components/          # Reusable components
│   ├── pages/              # Static pages
│   ├── styles/             # Global styles
│   └── utils/              # Utility functions
├── public/                 # Static assets
├── astro.config.mjs       # Astro configuration
├── tailwind.config.mjs    # Tailwind configuration
└── package.json
```

## ✍️ Writing Content

Create new blog posts in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "A brief description"
date: 2024-01-20
tags: ["astro", "blog"]
image: "/images/cover.jpg" # optional
draft: false # optional
---

Your content here...
```

## 🎨 Customization

### Site Configuration

Edit `src/config.ts` to customize:
- Site name and description
- Author information
- Social links
- Navigation menu
- SEO defaults

### Styling

- Colors and theme: `tailwind.config.mjs`
- Global styles: `src/styles/global.css`
- Component styles: Use Tailwind classes or component-scoped CSS

## 🚀 Deployment

MinimalPress can be deployed to any static hosting service:

- **Vercel**: `vercel`
- **Netlify**: `netlify deploy`
- **GitHub Pages**: Use GitHub Actions
- **Cloudflare Pages**: Connect your repository

## 📝 License

MIT License - feel free to use this theme for your own projects!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using [Astro](https://astro.build)