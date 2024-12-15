import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config optireons here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:  'i.ytimg.com'
      },
    ],
  },
};

export default nextConfig;
