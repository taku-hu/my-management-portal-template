import '@/styles/globals.css'

import { AllProviders } from '@/providers'
import { StyleRoute } from '@/processingRoutes/StyleRoute'
import { AuthProtectRoute } from '@/processingRoutes/AuthProtectRoute'

import type { AppPropsWithLayout } from '@/types/app'

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <AllProviders>
      <StyleRoute>
        <AuthProtectRoute>
          {getLayout(<Component {...pageProps} />)}
        </AuthProtectRoute>
      </StyleRoute>
    </AllProviders>
  )
}

export default App
