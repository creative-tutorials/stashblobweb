/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/docs",
        destination: "https://stashblob.gitbook.io/docs/",
      },
      {
        source: "/docs/getting-started/appdir",
        destination: "https://stashblob.gitbook.io/docs/getting-started/appdir",
      },
      {
        source: "/docs/getting-started/pagedir",
        destination:
          "https://stashblob.gitbook.io/docs/getting-started/pagedir",
      },
      {
        source: "/docs/backend-adapters/express",
        destination:
          "https://stashblob.gitbook.io/docs/backend-adapters/express",
      },
      {
        source: "/docs/backend-adapters/curl",
        destination: "https://stashblob.gitbook.io/docs/backend-adapters/curl",
      },
      {
        source: "/docs/errors",
        destination: "https://stashblob.gitbook.io/docs/errors",
      },
    ];
  },
};

module.exports = nextConfig;
