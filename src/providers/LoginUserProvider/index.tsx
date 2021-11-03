import { createContext, useState } from 'react'
import { User } from '@/types/api/user'

import type { Dispatch, SetStateAction, FC } from 'react'

type LoginUserContextType = {
  loginUser: User;
  setLoginUser: Dispatch<SetStateAction<User>>
}

const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType)

const LoginUserProvider: FC = ({ children }) => {
  const [loginUser, setLoginUser] = useState<User>({} as User)

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  )
}

export { LoginUserContext, LoginUserProvider }
