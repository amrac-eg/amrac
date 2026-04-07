import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  api: {
    bodyParser: {
      sizeLimit: "100mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // ← هذا يسمح بجميع الدومينات
      },
    ],
  },
};

export default nextConfig;
