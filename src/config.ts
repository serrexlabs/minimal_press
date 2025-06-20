// Site configuration
export const siteConfig = {
  // Basic site information
  name: "MinimalPress",
  description: "A clean, minimalist blog theme built with Astro and Tailwind CSS. Perfect for developers, writers, and content creators.",
  url: "https://minimalpress.example.com", // Your production domain
  
  // About information
  about: {
    title: "About Us",
    description: "We create clean, minimalist documentation and blog themes that help developers and writers focus on what matters most - their content.",
    mission: "To provide beautiful, fast, and accessible web experiences through thoughtful design and modern web technologies."
  },

  // Author/Organization details
  author: {
    name: "Blog Author",
    email: "hello@minimalpress.example.com",
    twitter: "@yourusername", // Optional: Twitter handle
    github: "yourusername",   // Optional: GitHub username
    linkedin: "yourprofile",  // Optional: LinkedIn profile
  },

  // Social media and external links
  social: {
    twitter: "https://twitter.com/yourusername",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourprofile",
    // Add more social links as needed
  },

  // SEO and metadata defaults
  seo: {
    defaultImage: "/og-image.jpg", // Default Open Graph image
    favicon: "/favicon.svg",
    keywords: ["astro", "blog", "minimal", "tailwind", "css", "documentation", "web development"],
    locale: "en_US",
    type: "website",
  },

  // Features and settings
  features: {
    darkMode: true,
    search: true,
    tableOfContents: true,
    readingTime: true,
    comments: false, // You can enable this later with services like Giscus
    analytics: false, // Set to true when you add analytics
  },

  // Navigation menu items
  navigation: [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],

  // Blog settings
  blog: {
    postsPerPage: 10,
    sortBy: "date", // "date" or "title"
    sortOrder: "desc", // "asc" or "desc"
  },

  // Development settings
  dev: {
    port: 4321,
    host: "localhost",
  }
};

// Type exports for TypeScript
export type SiteConfig = typeof siteConfig;
export type NavigationItem = typeof siteConfig.navigation[0];
export type SocialLinks = typeof siteConfig.social;