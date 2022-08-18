import type { AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import { useEffect } from 'react'
import { getToken } from 'src/lib/hooks/useToken'
import '../../styles/globals.css'
import { FlightsContextProvider } from '../lib/contexts/FlightsContext'
import { UserProvider } from '../lib/contexts/UserContext'

function MyApp({ Component, pageProps }: AppProps) {
  // Simple authentication
  useEffect(() => {
    if (!getToken() && !Router.pathname.includes('/auth')) {
      Router.push('/auth/sign-in')
    }
    if (getToken() && Router.pathname.includes('/auth')) {
      Router.push('/')
    }
  }, [])

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
