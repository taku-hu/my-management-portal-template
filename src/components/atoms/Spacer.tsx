import { memo } from 'react'
import { Box } from '@mui/material'

import type { FC } from 'react'

export const Spacer: FC = memo(() => <Box sx={{ flexGrow: 1 }} />)
Spacer.displayName = 'Spacer'
