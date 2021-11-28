import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

import { Box, Paper } from '@mui/material'
import { AddCircle } from '@mui/icons-material'

import { SubHeader } from '@/components/molecules/SubHeader'
import { HeaderDrawer } from '@/components/templates/HeaderDrawer'

import type { ReactElement } from 'react'
import type { SubHeaderProps } from '@/types/ui'

const Reserve = () => {
  const subHeaderProps: SubHeaderProps = {
    breadcrumbs: [
      {
        text: '予約管理'
      }
    ],
    button: {
      text: '新規作成',
      icon: <AddCircle />,
      handleClick: () => {}
    }
  }

  return (
    <Box>
      <SubHeader {...subHeaderProps} sx={{ mb: 2 }} />

      <Box sx={{ p: 1 }}>
        <Paper square sx={{ p: 2 }}>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            locale="ja"
          />
        </Paper>
      </Box>
    </Box>
  )
}

Reserve.getLayout = (page: ReactElement) => <HeaderDrawer>{page}</HeaderDrawer>

export default Reserve
