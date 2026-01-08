import { sections } from "./sections";
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articleSchema = z.object({
  title: z.string(),
  desc: z.string().optional(),
  date: z.string(),
  slug: z.string(),
});

export type Article = z.infer<typeof articleSchema>;

// Dynamically create collections for each section
const collections = Object.fromEntries(
  sections.map((section) => [
    section.id,
    defineCollection({
      loader: glob({
        pattern: "**/*.md",
        base: `./src/content/${section.id}`,
      }),
      schema: articleSchema,
    }),
  ])
);
export { collections };
