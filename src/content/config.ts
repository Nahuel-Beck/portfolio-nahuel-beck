import { defineCollection, z } from 'astro:content';

const serviceCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string().optional(),
    }),
});

export const collections = {
    services: serviceCollection,
};