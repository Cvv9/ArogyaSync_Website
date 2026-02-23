import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Images are now served locally from public/images/
    // Add remote patterns here only if hosting on S3/CDN
    remotePatterns: [],
  },
};

export default nextConfig;
