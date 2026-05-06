import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    REGISTER_API_URL: process.env.REGISTER_API_URL,
    SPONSORS_API_URL: process.env.SPONSORS_API_URL,
  },
};

export default nextConfig;
