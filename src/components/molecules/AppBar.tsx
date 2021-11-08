import { memo } from 'react'
import { styled } from '@mui/material/styles'
import { AppBar as MuiAppBar, Toolbar, IconButton } from '@mui/material'
import { Menu, ChevronLeft } from '@mui/icons-material'
import { drawerWidth } from '@/components/templates/HeaderDrawer'

import type { FC } from 'react'
import type { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'

type AppBarProps = {
  open?: boolean
} & MuiAppBarProps
const StyledAppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open', })<AppBarProps>(({ theme, open }) => ({
  position: 'fixed',
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#4F5467',
  transition: theme.transitions.create(['width', 'transform'], {
    easing: theme.transitions.easing.sharp,
    duration: open ? theme.transitions.duration.leavingScreen : theme.transitions.duration.enteringScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transform: 'translateX(drawerWidth)'
  })
}))

type Props = {
  isOpen: boolean
  isMediaXs: boolean
  handleToggleDrawer: () => void
}

export const AppBar: FC<Props> = memo(({ isOpen, isMediaXs, handleToggleDrawer }) => {
  return (
    <StyledAppBar open={isOpen}>
      <Toolbar>
        {!isMediaXs &&
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ marginRight: '36px' }}
            onClick={handleToggleDrawer}
          >
            {isOpen ? <ChevronLeft /> : <Menu />}
          </IconButton>
        }
      </Toolbar>
    </StyledAppBar>
  )
})
AppBar.displayName = 'AppBar'
