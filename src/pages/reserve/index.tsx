import { Box, Paper } from '@mui/material'
import { AddCircle } from '@mui/icons-material'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { SubHeader } from '@/components/molecules/SubHeader'
import { HeaderDrawer } from '@/components/templates/HeaderDrawer'

import type { ReactElement } from 'react'

const Reserve = () => {
  const subHeaderProps = {
    breadcrumbs: [
      {
        text: '予約管理'
      }
    ],
    buttonText: '新規作成',
    buttonIcon: <AddCircle />,
    handleClickSubHeaderButton: () => {}
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
