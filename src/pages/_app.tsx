import '@/styles/globals.css'

import { AllProviders } from '@/providers'
import { StyleRoute } from '@/processingRoutes/StyleRoute'
import { AuthProtect } from '@/processingRoutes/AuthProtect'

import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import type { ReactElement, ReactNode } from 'react'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <AllProviders>
      <StyleRoute>
        <AuthProtect>
          {getLayout(<Component {...pageProps} />)}
        </AuthProtect>
      </StyleRoute>
    </AllProviders>
  )
}

export default MyApp
