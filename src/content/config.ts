import { defineCollection, z } from 'astro:content';

const exercisesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    level: z.string(),
    topik: z.string(),
    pubDate: z.date(),
    solution: z.string(),
  }),
});

export const collections = {
  exercises: exercisesCollection,
};
