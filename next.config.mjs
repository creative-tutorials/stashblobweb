// // import remarkP
// const withMDX = require("@next/mdx")({
//   options: {
//     remarkPlugins: [require("remark-prism"), require("remark-rehype")],
//   },
// });

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],

//   async rewrites() {
//     return [
//       {
//         source: "/docs",
//         destination: "https://stashblob.gitbook.io/docs/",
//       },
//       {
//         source: "/docs/getting-started/appdir",
//         destination: "https://stashblob.gitbook.io/docs/getting-started/appdir",
//       },
//       {
//         source: "/docs/getting-started/pagedir",
//         destination:
//           "https://stashblob.gitbook.io/docs/getting-started/pagedir",
//       },
//       {
//         source: "/docs/backend-adapters/express",
//         destination:
//           "https://stashblob.gitbook.io/docs/backend-adapters/express",
//       },
//       {
//         source: "/docs/backend-adapters/curl",
//         destination: "https://stashblob.gitbook.io/docs/backend-adapters/curl",
//       },
//       {
//         source: "/docs/errors",
//         destination: "https://stashblob.gitbook.io/docs/errors",
//       },
//     ];
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "qhgpubnqzskccobolzai.supabase.co",
//         port: "",
//         pathname: "/**",
//       },
//     ],
//   },
// };

// module.exports = withMDX(nextConfig);

import createMDX from "@next/mdx";
import Nextra from "nextra";
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
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
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qhgpubnqzskccobolzai.supabase.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

const withNextra = Nextra({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.jsx",
});

// Merge MDX config with Next.js config
export default withNextra(nextConfig);
