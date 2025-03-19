import { glob } from 'astro/loaders';
import { defineCollection, z, type SchemaContext } from 'astro:content';

const blogPostSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  tags: z.string().array().optional(),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: blogPostSchema,
});

export type BlogPost = {
  id: string;
  slug: string;
  body: string;
  collection: 'blog';
  data: z.infer<typeof blogPostSchema>;
};

const portfolioItemSchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: image(),
    thumbnailAlt: z.string(),
    url: z.string().optional(),
    tags: z.string().array().optional(),
  });

// export type PortfolioItem = {
//   id: string;
//   slug: string;
//   body: string;
//   collection: 'portfolio';
//   data: z.infer<typeof portfolioItemSchema>;
// };

const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/portfolio' }),
  schema: portfolioItemSchema,
});

export const collections = { blog, portfolio };
