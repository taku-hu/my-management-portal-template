import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { colors, CssBaseline, Box } from '@mui/material'

import type { FC } from 'react'

export const StyleRoute: FC = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ width: '100%', height: '100%', backgroundColor: colors.grey[50] }}>
        {children}
      </Box>
    </>
  )
}
