import { useRouter } from 'next/router'
import { GlobalLoading } from '@/components/templates/GlobalLoading'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  const router = useRouter()
  router.replace(`/information`)

  return (
    <GlobalLoading />
  )
}

export default Home
