import { cache } from "react";
import { db } from "./prisma";

export const getProjects = cache(async () => {
    const projects = await db.ourwork.findMany({
        orderBy: {
            createdAt: "desc",
        },
        include: {
            images: true,
        },
    });
    return projects;
});