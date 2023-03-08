import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
      <Script src="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;200;300;400;500;600&family=Playfair+Display:wght@400;500;600&display=swap"  />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}