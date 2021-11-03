import { useContext } from 'react'
import { LoginUserContext } from '@/providers/LoginUserProvider'
import { useRouter } from 'next/router'

type AuthFormInput = {
  id: string;
  password: string;
}

export const useAuth = () => {
  const { loginUser, setLoginUser } = useContext(LoginUserContext)
  const router = useRouter()

  const isLoadingLoginUser = !Object.keys(loginUser).length

  const signIn = (authFormInput: AuthFormInput) => {
    console.log(authFormInput)
    setLoginUser({ name: 'SampleUser', isAuthenticated: true })
    router.push('/')
  }
  const sessionCheck = () => setLoginUser({ isAuthenticated: false })

  return {
    loginUser,
    isLoadingLoginUser,
    setLoginUser,
    signIn,
    sessionCheck
  }
}