import { createContext, useState } from 'react'
import { AuthDto } from '@/types/api/auth'

import type { Dispatch, SetStateAction, FC } from 'react'

type AuthContextType = {
  loginUser: AuthDto
  setLoginUser: Dispatch<SetStateAction<AuthDto>>
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

const AuthProvider: FC = ({ children }) => {
  const [loginUser, setLoginUser] = useState<AuthDto>({} as AuthDto)

  return (
    <AuthContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
