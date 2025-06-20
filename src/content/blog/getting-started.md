---
title: "Getting Started with Our Minimal Blog"
description: "Learn how to use this minimal blog theme with Astro and Tailwind CSS"
date: 2024-01-15
tags: ["tutorial", "astro", "tailwind"]
author: "Blog Admin"
---

Welcome to our minimal blog theme! This post will guide you through the features and capabilities of this Astro-powered blog.

## Features Overview

This blog theme includes:

- **Dark/Light Theme Toggle**: Switch between themes with a single click
- **Responsive Design**: Works perfectly on all devices
- **Markdown Support**: Write your posts in Markdown with full syntax highlighting
- **Table of Contents**: Automatically generated from your headings
- **Search Functionality**: Find posts quickly with built-in search

## Writing Your First Post

Creating a new blog post is simple:

1. Create a new `.md` or `.mdx` file in `src/content/blog/`
2. Add frontmatter with title, description, date, and tags
3. Write your content in Markdown
4. The post will automatically appear in your blog

### Example Frontmatter

```yaml
---
title: "My Amazing Post"
description: "A brief description of my post"
date: 2024-01-20
tags: ["web", "development"]
---
```

## Code Highlighting

The blog supports syntax highlighting for various languages:

```javascript
// JavaScript example
function greet(name) {
  console.log(`Hello, ${name}!`);
  return `Welcome to the blog`;
}

const message = greet('World');
```

```python
# Python example
def calculate_sum(numbers):
    """Calculate the sum of a list of numbers."""
    return sum(numbers)

result = calculate_sum([1, 2, 3, 4, 5])
print(f"The sum is: {result}")
```

## Using Components

You can also use custom components in MDX files:

```jsx
import CustomCard from '@/components/CustomCard.astro';

<CustomCard title="Special Note">
  This is a custom component embedded in the blog post!
</CustomCard>
```

## Images and Media

Add images to your posts by placing them in the `public` folder:

```markdown
![Alt text](/images/my-image.jpg)
```

## Lists and Formatting

### Unordered Lists

- First item
- Second item
  - Nested item
  - Another nested item
- Third item

### Ordered Lists

1. First step
2. Second step
3. Third step

### Task Lists

- [x] Completed task
- [ ] Pending task
- [ ] Another pending task

## Blockquotes

> "The best way to predict the future is to invent it."
> 
> — Alan Kay

## Tables

| Feature | Description | Status |
|---------|-------------|--------|
| Dark Mode | Toggle between light and dark themes | ✅ Completed |
| Search | Find posts quickly | 🚧 In Progress |
| RSS Feed | Subscribe to updates | 📋 Planned |

## Conclusion

This minimal blog theme provides everything you need to start blogging with style. The clean design, excellent typography, and powerful features make it perfect for developers, writers, and content creators.

Happy blogging! 🚀