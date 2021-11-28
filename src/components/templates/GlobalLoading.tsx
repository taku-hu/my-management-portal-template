import { memo } from 'react'

import { colors, Box, LinearProgress } from '@mui/material'

import type { FC } from 'react'

export const GlobalLoading: FC = memo(() => {
  return (
    <Box sx={{ width: '100%', height: '100%', backgroundColor: colors.grey[50] }}>
      <LinearProgress />
    </Box>
  )
})
GlobalLoading.displayName = 'GlobalLoading'
