import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["res.cloudinary.com","i.ibb.co"],
  },
  async headers() {
    return [
      {
        source: "/(.*)", // applies to all routes
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            value: "unsafe-none", // ✅ disable strict isolation
          },
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "unsafe-none", // ✅ disable embedder restrictions
          },
        ],
      },
    ];
  },
};

export default nextConfig;
