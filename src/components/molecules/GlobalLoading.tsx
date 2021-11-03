

import { colors, Box, LinearProgress } from '@mui/material'

export const GlobalLoading = () => {
  return (
    <Box sx={{ width: '100%', height: '100%', backgroundColor: colors.grey[300] }}>
      <LinearProgress />
    </Box>
  )
}