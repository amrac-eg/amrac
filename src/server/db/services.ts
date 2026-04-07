import { cache } from "react";
import { db } from "./prisma";

export const getServices = cache(async () => {
  const services = await db.services.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });
  return services;
});
