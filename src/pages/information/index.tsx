import { useCallback } from 'react'
import { useRouter } from 'next/router'

import { Box } from '@mui/material'
import { AddCircle } from '@mui/icons-material'

import { SubHeader } from '@/components/molecules/SubHeader'
import { HeaderDrawer } from '@/components/templates/HeaderDrawer'

import type { ReactElement } from 'react'
import type { SubHeaderProps } from '@/types/ui'

const Information = () => {
  const router = useRouter()

  const subHeaderProps: SubHeaderProps = {
    breadcrumbs: [
      {
        text: 'お知らせ管理'
      }
    ],
    button: {
      text: 'お知らせ作成',
      icon: <AddCircle />,
      handleClick: useCallback(() => router.push('/information/create'), [router])
    }
  }

  return (
    <Box>
      <SubHeader {...subHeaderProps} sx={{ mb: 2 }} />
    </Box>
  )
}

Information.getLayout = (page: ReactElement) => <HeaderDrawer>{page}</HeaderDrawer>

export default Information
