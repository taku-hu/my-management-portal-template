import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/useAuth'

import { GlobalLoading } from '@/components/templates/GlobalLoading'

import type { FC } from 'react'

export const AuthProtectRoute: FC = ({ children }) => {
  const router = useRouter()
  const { loginUser, isLoadingLoginUser, sessionCheck } = useAuth()

  const noAuthRequiredPaths = ['/login']
  const isRootPage = router.pathname === '/'
  const isRequiredAuth = isRootPage || !noAuthRequiredPaths.some(path => path.includes(router.pathname))
  const isAuthenticated = !!loginUser.token
  
  const isLoginPage = router.pathname === '/login'
  // ログインページに認証状態でアクセスした時
  const isLoginPageWithAuthneticated = isLoginPage && isAuthenticated
  // 認証が必要なページに非認証状態でアクセスした時
  const isAuthRequiredPageWithNoAuthneticated = isRequiredAuth && !isAuthenticated
  // ローディングページを表示する条件
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
    // 非認証状態での認証が必要なページへのアクセス時
    if (isAuthRequiredPageWithNoAuthneticated) {
      router.replace('/login')
    }
  }, [router, sessionCheck, isLoadingLoginUser, isLoginPageWithAuthneticated, isAuthRequiredPageWithNoAuthneticated])

  return isNeedToWait ? <GlobalLoading /> :  <>{children}</>
}
