// src/app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import authOptions from "@/server/auth";

console.log("Route handler for NextAuth is being invoked");

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
