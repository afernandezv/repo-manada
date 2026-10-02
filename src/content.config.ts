import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // <-- Importamos el nuevo loader

const formatos = defineCollection({
  // Le decimos a Astro exactamente dónde buscar los archivos Markdown
  loader: glob({ pattern: "**/*.md", base: "./src/content/formatos" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    documento: z.string().optional(),
  }),
});

const especialidades = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/especialidades" }),
  schema: z.object({
    title: z.string(),
    area: z.string(),
    documento: z.string().optional(),
  }),
});

const manuales = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/manuales" }),
  schema: z.object({
    title: z.string(),
    version: z.string(),
    documento: z.string().optional(),
  }),
});

export const collections = { formatos, especialidades, manuales };