import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [], // Empty for now, only needed for external images
    unoptimized: false, // Ensure this is NOT set to true globally
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'live.staticflickr.com',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        port: ''
      }
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // Prevent ESLint errors from breaking deployment
  },
  typescript: {
    ignoreBuildErrors: false, // Set to `true` if you want to prevent build failures due to TypeScript errors
  }
};

export default nextConfig;
