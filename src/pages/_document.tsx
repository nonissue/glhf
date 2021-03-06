import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return (
      <Html lang="en-CA">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta
            name="Description"
            content="Nonissue: The portfolio and online home of Andy Williams"
          />
          <meta name="robots" content="index, follow" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="text-gray-800 dark:bg-gray-900 dark:text-gray-100 ">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
