import * as z from "zod";

export const ourWorkSchema = () => {
  return z.object({
    title: z.string().min(1, { message: "Arabic title is required" }),
    image: z.custom((val) => val instanceof File).optional(),
    publicId: z.string().optional(),
    date: z
      .preprocess(
        (val) => (val ? new Date(val as string) : undefined),
        z.date()
      )
      .optional(),
  });
};

export const ourWorkUpdateSchema = () => {
  return z.object({
    title: z.string().min(1, { message: "Arabic title is required" }),

    image: z.custom((val) => val instanceof File).optional(),
    publicId: z.string().optional(),
    date: z
      .preprocess(
        (val) => (val ? new Date(val as string) : undefined),
        z.date()
      )
      .optional(),
  });
};

export const imageToOurWorkSchema = () => {
  return z.object({ image: z.custom((val) => val instanceof File).optional() });
};
