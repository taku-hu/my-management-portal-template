import { LoginUserProvider } from '@/providers/LoginUserProvider'
import type { FC } from 'react'

export const AllProviders: FC = ({ children }) => (
  <LoginUserProvider>
    {children}
  </LoginUserProvider>
)
