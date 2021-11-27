import { Box, Paper, Typography } from '@mui/material'
import { HeaderDrawer } from '@/components/templates/HeaderDrawer'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

import type { ReactElement } from 'react'

const Reserve = () => {
  return (
    <Box>
      <Paper square sx={{ padding: 2 }}>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          locale="ja"
        />
      </Paper>
    </Box>
  )
}

Reserve.getLayout = (page: ReactElement) => <HeaderDrawer>{page}</HeaderDrawer>

export default Reserve
