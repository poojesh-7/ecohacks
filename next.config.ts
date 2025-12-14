import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  images: {
    domains: ["res.cloudinary.com","i.ibb.co"],
  }, 
  typescript: {
    ignoreBuildErrors: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)", 
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            value: "unsafe-none", 
          },
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "unsafe-none", 
          },
        ],
      },
    ];
  },
};

export default nextConfig;
