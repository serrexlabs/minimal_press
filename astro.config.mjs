// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { siteConfig } from './src/config.ts';

// https://astro.build/config
export default defineConfig({
  site: 'https://serrexlabs.github.io',
  base: '/minimal_press',
  integrations: [
    mdx(),
    sitemap({
      customPages: [
        // Add any additional custom pages that aren't auto-discovered
        `${siteConfig.url}/about`,
        `${siteConfig.url}/`,
      ],
      // Custom sitemap generation with priority levels
      serialize(item) {
        // Set priority based on page type
        if (item.url === `${siteConfig.url}/`) {
          // Homepage gets highest priority
          item.priority = 1.0;
          item.changefreq = 'daily';
        } else if (item.url.includes('/blog/')) {
          // Blog posts get high priority
          item.priority = 0.8;
          item.changefreq = 'weekly';
        } else if (item.url.includes('/about')) {
          // About page gets medium priority
          item.priority = 0.6;
          item.changefreq = 'monthly';
        } else {
          // Other pages get default priority
          item.priority = 0.5;
          item.changefreq = 'monthly';
        }
        
        return item;
      },
      // Filter out any unwanted URLs
      filter: (page) => {
        // Exclude draft pages or admin pages
        return !page.includes('/admin') && !page.includes('/draft');
      },
    }),
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