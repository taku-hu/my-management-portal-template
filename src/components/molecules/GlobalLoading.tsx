import { colors, Box, LinearProgress } from '@mui/material'

import type { FC } from 'react'

export const GlobalLoading: FC = () => {
  return (
    <Box sx={{ width: '100%', height: '100%', backgroundColor: colors.grey[50] }}>
      <LinearProgress />
    </Box>
  )
}
