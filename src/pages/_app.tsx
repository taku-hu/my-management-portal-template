import '@/styles/globals.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { CssBaseline } from '@mui/material'
import { AllProviders } from '@/providers'
import { AuthProtect } from '@/protectRoutes/AuthProtect'

import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AllProviders>
      <CssBaseline />
      <AuthProtect>
        <Component {...pageProps} />
      </AuthProtect>
    </AllProviders>
  )
}

export default MyApp
