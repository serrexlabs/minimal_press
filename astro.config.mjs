// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://serrexlabs.github.io/minimal_press',
  // Always use base path for GitHub Pages
  base: '/minimal_press',
  integrations: [
    mdx(),
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  // Build optimizations for better SEO
  build: {
    inlineStylesheets: 'auto',
  },
});