import { z, defineCollection } from "astro:content";
import { toZonedTime } from "date-fns-tz";

// const ZodImageMetadata = z.object({
//   src: z.string(),
//   width: z.number(),
//   height: z.number(),
//   format: z.enum(["jpeg", "jpg", "png", "tiff", "webp", "gif", "svg", "avif"]),
//   orientation: z.number().optional(),
// });

const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      isDraft: z.boolean().optional(),
      title: z.string(),
      pubDate: z
        .string()
        .transform((str: string) => toZonedTime(str, "Asia/Tokyo")),
      modDate: z
        .string()
        .transform((str: string) => toZonedTime(str, "Asia/Tokyo"))
        .optional(),
      image: image().refine((img) => img.width >= 1080, {
        message: "Cover image must be at least 1080 pixels wide!",
      }),
      pageImg: z.string(),
      category: z.array(z.string()),
      description: z.string(),
    }),
});

export const collections = {
  blog: blogCollection,
};
