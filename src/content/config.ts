import { defineCollection, z } from 'astro:content';

const formatos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    documento: z.string().optional(),
  }),
});

const especialidades = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    area: z.string(),
    documento: z.string().optional(),
  }),
});

const manuales = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    version: z.string(),
    documento: z.string().optional(),
  }),
});

export const collections = { formatos, especialidades, manuales };