import { useCallback, useContext } from 'react'
import { LoginUserContext } from '@/providers/LoginUserProvider'
import { useRouter } from 'next/router'
import { axios, isAxiosError } from '@/libs/axios'

import type {AuthDto } from '@/types/api/auth'
import type { AuthInput } from '@/types/auth/form'

export const useAuth = () => {
  const { loginUser, setLoginUser } = useContext(LoginUserContext)
  const router = useRouter()

  const isLoadingLoginUser = !Object.keys(loginUser).length

  const signIn = useCallback(async ({ id: username, password }: AuthInput) => {
    try {
      const { data } = await axios.post<AuthDto>('/api-auth', { username, password })
      setLoginUser(data)
      router.push('/')
    } catch (err) {
      const errorNum = isAxiosError(err) ? err.response?.status ?? 500 : 'Unexpected'
      throw new Error(`${errorNum} Error Occured!`)
    }
  }, [router, setLoginUser])
  const signOut = useCallback(() => setLoginUser({ token: '' }), [setLoginUser])
  const sessionCheck = useCallback(() => setLoginUser({ token: '' }), [setLoginUser])

  return {
    loginUser,
    isLoadingLoginUser,
    setLoginUser,
    signIn,
    signOut,
    sessionCheck
  }
}
