import { z, defineCollection } from "astro:content";
import { toZonedTime } from "date-fns-tz";

const blogCollection = defineCollection({
  schema: z.object({
    isDraft: z.boolean().optional(),
    title: z.string(),
    pubDate: z
      .string()
      .transform((str: string) => toZonedTime(str, "Asia/Tokyo")),
    modDate: z
      .string()
      .transform((str: string) => toZonedTime(str, "Asia/Tokyo"))
      .optional(),
    image: z.string(),
    category: z.array(z.string()),
    description: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
