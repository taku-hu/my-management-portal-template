import { useCallback } from 'react'
import { useRouter } from 'next/router'
import { Box } from '@mui/material'
import { AddCircle } from '@mui/icons-material'
import { SubHeader } from '@/components/molecules/SubHeader'
import { HeaderDrawer } from '@/components/templates/HeaderDrawer'

import type { ReactElement } from 'react'

const Information = () => {
  const router = useRouter()
  const handleClickSubHeaderButton = useCallback(() => {
    router.push('/information/create')
  }, [router])

  const subHeaderProps = {
    breadcrumbs: [
      {
        text: 'お知らせ管理'
      }
    ],
    buttonText: 'お知らせ作成',
    buttonIcon: <AddCircle />,
    handleClickSubHeaderButton
  }

  return (
    <Box>
      <SubHeader {...subHeaderProps} sx={{ mb: 2 }} />
    </Box>
  )
}

Information.getLayout = (page: ReactElement) => <HeaderDrawer>{page}</HeaderDrawer>

export default Information
