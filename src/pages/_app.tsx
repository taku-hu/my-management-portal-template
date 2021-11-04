import '@/styles/globals.css'

import { AllProviders } from '@/providers'
import { StyleRoute } from '@/processingRoutes/StyleRoute'
import { AuthProtect } from '@/processingRoutes/AuthProtect'

import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AllProviders>
      <StyleRoute>
        <AuthProtect>
          <Component {...pageProps} />
        </AuthProtect>
      </StyleRoute>
    </AllProviders>
  )
}

export default MyApp
