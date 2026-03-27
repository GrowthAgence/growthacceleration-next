import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "(.+)\\.vercel\\.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "(.+)\\.vercel\\.app" }],
        destination: "https://www.growth-acceleration.fr/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "growth-acceleration.fr" }],
        destination: "https://www.growth-acceleration.fr/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
