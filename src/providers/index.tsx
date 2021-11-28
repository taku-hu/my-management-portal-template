import { AuthProvider } from '@/providers/AuthProvider'
import type { FC } from 'react'

export const AllProviders: FC = ({ children }) => (
  <AuthProvider>
    {children}
  </AuthProvider>
)
