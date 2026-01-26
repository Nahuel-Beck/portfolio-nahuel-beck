import { defineCollection, z } from 'astro:content';

const serviceCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string().optional(),
    }),
});

const projectCollection = defineCollection({
    // type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        link: z.string().url().optional(),
        tag: z.string().optional(),
        date: z.string().optional(),
        summary: z.string().optional(),
        tools: z.string().optional(),
        image: z.string().optional(),
    }),
});

export const collections = {
    services: serviceCollection,
    projects: projectCollection,
};