import { useRouter } from 'next/router'
import { Box } from '@mui/material'
import { AddCircle, Save } from '@mui/icons-material'
import { SubHeader } from '@/components/molecules/SubHeader'
import { HeaderDrawer } from '@/components/templates/HeaderDrawer'


import type { ReactElement } from 'react'

const CarsCreate = () => {
  const router = useRouter()
  const isEditing = !!router.query.id

  const subHeaderProps = {
    breadcrumbs: [
      {
        text: 'お知らせ管理',
        href: '/information'
      },
      {
        text: 'お知らせ作成'
      }
    ],
    buttonText: isEditing ? '保存' : '新規作成',
    buttonIcon: isEditing ? <Save /> : <AddCircle />,
    handleClickSubHeaderButton: () => {}
  }

  return (
    <Box>
      <SubHeader {...subHeaderProps} sx={{ mb: 2 }} />
    </Box>
  )
}

CarsCreate.getLayout = (page: ReactElement) => <HeaderDrawer>{page}</HeaderDrawer>

export default CarsCreate
