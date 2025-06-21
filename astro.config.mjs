// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://serrexlabs.github.io',
  // Only use base path for GitHub Pages deployment
  base: process.env.GITHUB_ACTIONS ? '/minimal_press' : undefined,
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