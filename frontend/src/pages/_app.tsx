import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { UserProvider } from '../lib/contexts/UserContext'
import { FlightsContextProvider } from '../lib/contexts/FlightsContext'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>U-GO</title>
        <link rel="icon" href="/logo-1.png" />
      </Head>
      <UserProvider>
        <FlightsContextProvider>
          <Component {...pageProps} />
        </FlightsContextProvider>
      </UserProvider>
    </>
  )
}

export default MyApp
