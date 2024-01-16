import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preload" as="script" href="/config.js" />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="/config.js" type="text/javascript"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
