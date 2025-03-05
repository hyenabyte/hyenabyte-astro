import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blogPostSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  tags: z.string().array().optional(),
});

export type BlogPost = {
  id: string;
  slug: string;
  body: string;
  collection: 'blog';
  data: z.infer<typeof blogPostSchema>;
};
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: blogPostSchema,
});

export const collections = { blog };
