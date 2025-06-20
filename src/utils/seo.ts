// SEO utility functions for the blog

/**
 * Calculate reading time for a given text
 * @param text - The text content to analyze
 * @param wordsPerMinute - Average reading speed (default: 200 words per minute)
 * @returns Reading time in minutes
 */
export function calculateReadingTime(text: string, wordsPerMinute: number = 200): number {
  const words = text.trim().split(/\s+/).filter(word => word.length > 0);
  const minutes = words.length / wordsPerMinute;
  return Math.ceil(minutes);
}

/**
 * Extract keywords from text content and frontmatter tags
 * @param content - The main text content
 * @param tags - Tags from frontmatter
 * @param maxKeywords - Maximum number of keywords to return
 * @returns Array of keywords
 */
export function extractKeywords(content: string, tags: string[] = [], maxKeywords: number = 10): string[] {
  // Clean content: remove markdown syntax, code blocks, and special characters
  const cleanContent = content
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]*`/g, '') // Remove inline code
    .replace(/[#*_\[\]()]/g, '') // Remove markdown syntax
    .replace(/[^\w\s]/g, ' ') // Remove special characters
    .toLowerCase();

  // Split into words and filter
  const words = cleanContent
    .split(/\s+/)
    .filter(word => 
      word.length > 3 && // Minimum word length
      !isStopWord(word) && // Not a stop word
      !/^\d+$/.test(word) // Not just numbers
    );

  // Count word frequency
  const wordCount = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Sort by frequency and get top keywords
  const contentKeywords = Object.entries(wordCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, maxKeywords - tags.length)
    .map(([word]) => word);

  // Combine with tags (prioritize tags)
  return [...tags, ...contentKeywords].slice(0, maxKeywords);
}

/**
 * Common stop words to filter out
 */
const stopWords = new Set([
  'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have',
  'i', 'it', 'for', 'not', 'on', 'with', 'he', 'as', 'you',
  'do', 'at', 'this', 'but', 'his', 'by', 'from', 'they',
  'we', 'say', 'her', 'she', 'or', 'an', 'will', 'my',
  'one', 'all', 'would', 'there', 'their', 'what', 'so',
  'up', 'out', 'if', 'about', 'who', 'get', 'which', 'go',
  'me', 'when', 'make', 'can', 'like', 'time', 'no', 'just',
  'him', 'know', 'take', 'people', 'into', 'year', 'your',
  'good', 'some', 'could', 'them', 'see', 'other', 'than',
  'then', 'now', 'look', 'only', 'come', 'its', 'over',
  'think', 'also', 'back', 'after', 'use', 'two', 'how',
  'our', 'work', 'first', 'well', 'way', 'even', 'new',
  'want', 'because', 'any', 'these', 'give', 'day', 'most', 'us'
]);

function isStopWord(word: string): boolean {
  return stopWords.has(word.toLowerCase());
}

/**
 * Generate SEO-friendly meta description
 * @param content - The content to extract description from
 * @param frontmatterDescription - Description from frontmatter
 * @param maxLength - Maximum length of description (default: 160)
 * @returns SEO-optimized meta description
 */
export function generateMetaDescription(
  content: string,
  frontmatterDescription?: string,
  maxLength: number = 160
): string {
  if (frontmatterDescription && frontmatterDescription.length <= maxLength) {
    return frontmatterDescription;
  }

  // Extract first paragraph from content
  const firstParagraph = content
    .replace(/^#.*$/gm, '') // Remove headings
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]*`/g, '') // Remove inline code
    .replace(/[#*_\[\]()]/g, '') // Remove markdown syntax
    .split('\n')
    .find(line => line.trim().length > 50);

  if (firstParagraph) {
    const description = firstParagraph.trim();
    if (description.length <= maxLength) {
      return description;
    }
    // Truncate at word boundary
    return description.substring(0, maxLength).replace(/\s+\w*$/, '') + '...';
  }

  return frontmatterDescription || 'Read more on our blog.';
}

/**
 * Generate structured data for organization/website
 * @param config - Site configuration object
 * @returns JSON-LD structured data
 */
export function generateOrganizationSchema(config: {
  name: string;
  description: string;
  url: string;
  social?: Record<string, string>;
  seo: { favicon: string };
}) {
  const socialLinks = config.social ? Object.values(config.social).filter(Boolean) : [];
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: config.name,
    url: config.url,
    description: config.description,
    logo: {
      '@type': 'ImageObject',
      url: `${config.url}${config.seo.favicon}`
    },
    sameAs: socialLinks
  };
}

/**
 * Generate structured data for blog post articles
 * @param post - Blog post data
 * @param config - Site configuration object
 * @returns JSON-LD structured data
 */
export function generateArticleSchema(
  post: {
    title: string;
    description: string;
    date: Date;
    updated?: Date;
    author?: string;
    image?: string;
    tags?: string[];
    slug: string;
    content: string;
  },
  config: {
    name: string;
    url: string;
    author: { name: string };
    seo: { defaultImage: string; favicon: string };
  }
) {
  const readingTime = calculateReadingTime(post.content);
  const wordCount = post.content.trim().split(/\s+/).length;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.image ? `${config.url}${post.image}` : `${config.url}${config.seo.defaultImage}`,
    datePublished: post.date.toISOString(),
    dateModified: (post.updated || post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author || config.author.name
    },
    publisher: {
      '@type': 'Organization',
      name: config.name,
      logo: {
        '@type': 'ImageObject',
        url: `${config.url}${config.seo.favicon}`
      }
    },
    url: `${config.url}/blog/${post.slug}`,
    wordCount: wordCount,
    timeRequired: `PT${readingTime}M`,
    keywords: post.tags?.join(', ') || '',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${config.url}/blog/${post.slug}`
    }
  };
}

/**
 * Find related posts based on tags and content similarity
 * @param currentPost - The current post to find related posts for
 * @param allPosts - Array of all blog posts
 * @param maxResults - Maximum number of related posts to return
 * @returns Array of related posts sorted by relevance
 */
export function findRelatedPosts(
  currentPost: {
    slug: string;
    tags?: string[];
    title: string;
    description?: string;
  },
  allPosts: Array<{
    slug: string;
    data: {
      title: string;
      description?: string;
      tags?: string[];
      date: Date;
    };
  }>,
  maxResults: number = 3
): Array<{
  slug: string;
  data: {
    title: string;
    description?: string;
    tags?: string[];
    date: Date;
  };
  score: number;
}> {
  const currentTags = new Set(currentPost.tags || []);
  const currentTitle = currentPost.title.toLowerCase();
  const currentDescription = (currentPost.description || '').toLowerCase();

  const relatedPosts = allPosts
    .filter(post => post.slug !== currentPost.slug) // Exclude current post
    .map(post => {
      let score = 0;
      const postTags = new Set(post.data.tags || []);

      // Score based on shared tags (highest weight)
      const sharedTags = [...currentTags].filter(tag => postTags.has(tag));
      score += sharedTags.length * 10;

      // Score based on title similarity
      const titleWords = post.data.title.toLowerCase().split(/\s+/);
      const currentTitleWords = currentTitle.split(/\s+/);
      const titleMatches = titleWords.filter(word => 
        word.length > 3 && currentTitleWords.includes(word)
      );
      score += titleMatches.length * 5;

      // Score based on description similarity
      if (post.data.description && currentDescription) {
        const descWords = post.data.description.toLowerCase().split(/\s+/);
        const currentDescWords = currentDescription.split(/\s+/);
        const descMatches = descWords.filter(word => 
          word.length > 3 && currentDescWords.includes(word)
        );
        score += descMatches.length * 2;
      }

      return {
        ...post,
        score
      };
    })
    .filter(post => post.score > 0) // Only posts with some relevance
    .sort((a, b) => b.score - a.score) // Sort by score descending
    .slice(0, maxResults); // Limit results

  return relatedPosts;
}

/**
 * Generate internal linking suggestions for a post
 * @param content - The post content to analyze
 * @param allPosts - Array of all blog posts
 * @param maxSuggestions - Maximum number of suggestions
 * @returns Array of internal linking suggestions
 */
export function generateInternalLinkSuggestions(
  content: string,
  allPosts: Array<{
    slug: string;
    data: {
      title: string;
      tags?: string[];
      keywords?: string[];
    };
  }>,
  maxSuggestions: number = 5
): Array<{
  post: {
    slug: string;
    data: {
      title: string;
      tags?: string[];
      keywords?: string[];
    };
  };
  anchor: string;
  relevance: number;
}> {
  const contentLower = content.toLowerCase();
  const suggestions: Array<{
    post: typeof allPosts[0];
    anchor: string;
    relevance: number;
  }> = [];

  allPosts.forEach(post => {
    let relevance = 0;
    let bestAnchor = '';

    // Check if post title appears in content
    const titleInContent = contentLower.includes(post.data.title.toLowerCase());
    if (titleInContent) {
      relevance += 10;
      bestAnchor = post.data.title;
    }

    // Check tags
    const postTags = post.data.tags || [];
    postTags.forEach(tag => {
      if (contentLower.includes(tag.toLowerCase())) {
        relevance += 5;
        if (!bestAnchor) bestAnchor = tag;
      }
    });

    // Check keywords
    const postKeywords = post.data.keywords || [];
    postKeywords.forEach(keyword => {
      if (contentLower.includes(keyword.toLowerCase())) {
        relevance += 3;
        if (!bestAnchor) bestAnchor = keyword;
      }
    });

    if (relevance > 0) {
      suggestions.push({
        post,
        anchor: bestAnchor || post.data.title,
        relevance
      });
    }
  });

  return suggestions
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, maxSuggestions);
}