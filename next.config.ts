import type { NextConfig } from "next";
import type { Configuration as WebpackConfig } from "webpack"; // Import Webpack types

const nextConfig: NextConfig = {
  images: {
    domains: ["www.launchuicomponents.com", "assets.aceternity.com"],
  },
  webpack(config: WebpackConfig) {
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"], // Enables SVG import as React components
      issuer: /\.[jt]sx?$/, // Ensures rule applies to TSX/JSX files
    });
    return config;
  },
};

export default nextConfig;
