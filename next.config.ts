import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint:{
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      // Mock or ignore Node.js modules in the browser
      config.resolve.fallback = {
        fs: false,
        net: false,
        http2: false,
        tls: false,  // Add other Node.js core modules if needed
        child_process: false,
      };
    }

    return config;
  },
};

export default nextConfig;
