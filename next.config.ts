import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/**",
        search: ""
      }
    ],
  }
};

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
