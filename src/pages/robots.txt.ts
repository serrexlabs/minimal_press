import type { APIRoute } from 'astro';
import { siteConfig } from '../config';

export const GET: APIRoute = () => {
  const robotsTxt = `
# Robots.txt for ${siteConfig.name}
# This file tells search engine crawlers which pages they can and cannot access

# Allow all web crawlers access to all content
User-agent: *
Allow: /

# Specific rules for different crawlers
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 1

User-agent: Slurp
Allow: /
Crawl-delay: 2

# Block access to admin areas and draft content
Disallow: /admin/
Disallow: /draft/
Disallow: /_astro/
Disallow: /*.json$

# Allow crawling of images and assets
User-agent: Googlebot-Image
Allow: /images/
Allow: /assets/

# Sitemap location (automatically generated during build)
Sitemap: ${siteConfig.url}/sitemap-index.xml
Sitemap: ${siteConfig.url}/sitemap-0.xml

# Additional directives for SEO optimization
# Cache directive for faster crawling
Cache-delay: 86400

# Host directive (specify the preferred domain)
Host: ${siteConfig.url}
`.trim();

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};