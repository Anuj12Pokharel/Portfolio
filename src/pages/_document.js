import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <meta name="title" content="Anuj Pokharel - Computer Engineer" />
          <meta name="description" content="Anuj POkharel, computer Engoneer graduated from Kathford International Engineering college." />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Anuj Pokharel - Computer Engineer" />
          <meta property="og:description" content="Anuj Pokharel, computer Engoneer graduated from Kathford International Engineering college." />
          <meta property="og:image" content="https://x.com/AnujPokharel222" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="Anuj Pokharel-Computer Engineer" />
          <meta property="twitter:description" content="Anuj POkharel, computer Engoneer graduated from Kathford International Engineering college." />
          <meta property="twitter:image" content="https://x.com/AnujPokharel222" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
