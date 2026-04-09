import * as z from "zod";

export const serviceSchema = () => {
  return z.object({
    image: z.custom((val) => val instanceof File).optional(),
    publicId: z.string().optional(), // ← أضفنا ده هنا

    title_ar: z.string().min(1, { message: "Title in Arabic is required" }),
    title_en: z.string().min(1, { message: "Title in English is required" }),
    description_ar: z
      .string()
      .min(1, { message: "Description in Arabic is required" }),
    description_en: z
      .string()
      .min(1, { message: "Description in English is required" }),
  });
};
