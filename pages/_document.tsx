import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/prism-themes@1.9.0/themes/prism-coldark-dark.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/line-numbers/prism-line-numbers.min.css"
          rel="stylesheet"
        />
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css"
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/prism-themes@1.9.0/index.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/show-language/prism-show-language.min.js" />
      </body>
    </Html>
  );
}
