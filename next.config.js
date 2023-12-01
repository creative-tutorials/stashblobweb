/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/docs",
        destination: "https://timi.gitbook.io/stashblob-docs/",
      },
    ];
  },
};

module.exports = nextConfig;
