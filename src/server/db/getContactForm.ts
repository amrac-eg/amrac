import { cache } from "react";
import { db } from "./prisma";

export const getContactForm = cache(async () => {
  const contacts = await db.contactForm.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return contacts;
});
