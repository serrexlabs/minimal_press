import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    keywords: z.array(z.string()).optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    draft: z.boolean().default(false),
    author: z.string().default('Anonymous'),
    canonical: z.string().url().optional(),
    noindex: z.boolean().default(false),
    priority: z.number().min(0).max(1).default(0.5),
  }),
});

export const collections = { blog };