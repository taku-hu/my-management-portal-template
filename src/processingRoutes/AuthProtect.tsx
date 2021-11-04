import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/useAuth'

import { GlobalLoading } from '@/components/molecules/GlobalLoading'

import type { FC } from 'react'

export const AuthProtect: FC = ({ children }) => {
  const router = useRouter()
  const { loginUser, isLoadingLoginUser, sessionCheck } = useAuth()

  const isRequiredAuth = router.pathname !== '/login'
  const isAuthenticated = loginUser?.isAuthenticated

  const isLoginPageWithAuthneticated = !isRequiredAuth && isAuthenticated
  const isAuthRequiredPageWithNoAuthneticated = isRequiredAuth && !isAuthenticated
  const isNeedToWait = isLoadingLoginUser || isLoginPageWithAuthneticated || isAuthRequiredPageWithNoAuthneticated

  useEffect(() => {
    // ファーストビューでセッション確認
    if (isLoadingLoginUser) {
      sessionCheck()
      return
    }
    // 認証状態でのログインページアクセス時
    if (isLoginPageWithAuthneticated) {
      router.replace('/')
      return
    }
    // 非認証状態でのログインページ以外へのアクセス時
    if (isAuthRequiredPageWithNoAuthneticated) {
      router.replace('/login')
    }
  }, [router, sessionCheck, isLoadingLoginUser, isLoginPageWithAuthneticated, isAuthRequiredPageWithNoAuthneticated])

  return isNeedToWait ? <GlobalLoading /> :  <>{children}</>
}
