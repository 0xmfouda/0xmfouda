import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const articleSchema = z.object({
  title: z.string(),
  desc: z.string().optional(),
  date: z.string(),
  slug: z.string(),
});

export type Article = z.infer<typeof articleSchema>;

const software = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/software",
  }),
  schema: articleSchema,
});
const llms = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/llms",
  }),
  schema: articleSchema,
});

export const collections = {
  software,
  llms,
};
