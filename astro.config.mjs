// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://serrexlabs.com',
  // No base path needed for custom domain
  // base: '/minimal_press',
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