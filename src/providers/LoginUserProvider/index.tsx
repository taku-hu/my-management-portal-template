import { createContext, useState } from 'react'
import { AuthDto } from '@/types/api/auth'

import type { Dispatch, SetStateAction, FC } from 'react'

type LoginUserContextType = {
  loginUser: AuthDto
  setLoginUser: Dispatch<SetStateAction<AuthDto>>
}

const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType)

const LoginUserProvider: FC = ({ children }) => {
  const [loginUser, setLoginUser] = useState<AuthDto>({} as AuthDto)

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  )
}

export { LoginUserContext, LoginUserProvider }
