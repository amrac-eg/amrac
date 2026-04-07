import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
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
