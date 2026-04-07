import { db } from "./prisma";
import { cache } from "react";

export const getProjectById = cache(async (id: string) => {
  const project = await db.ourwork.findUnique({
    where: {
      id,
    },
    include: {
      images: true,
    },
  });
  return project;
});
