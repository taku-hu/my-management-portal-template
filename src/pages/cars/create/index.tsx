import { Box } from '@mui/material'
import { AddCircle } from '@mui/icons-material'
import { SubHeader } from '@/components/molecules/SubHeader'
import { HeaderDrawer } from '@/components/templates/HeaderDrawer'


import type { ReactElement } from 'react'

const CarsCreate = () => {
  const subHeaderProps = {
    breadcrumbs: [
      {
        text: '車管理',
        href: '/cars'
      },
      {
        text: '新車種追加'
      }
    ],
    buttonText: '作成',
    buttonIcon: <AddCircle />,
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
