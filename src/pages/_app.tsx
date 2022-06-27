import type { AppProps } from 'next/app'
import Head from 'next/head'

import 'styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,400;0,700;1,100&family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
