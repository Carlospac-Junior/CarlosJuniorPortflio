import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Force the dev server root to this project folder to avoid multi-lockfile confusion on Windows/OneDrive
    root: __dirname,
  },
};

export default nextConfig;
