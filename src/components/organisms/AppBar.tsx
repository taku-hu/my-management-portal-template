import { useState, memo } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { styled } from '@mui/material/styles'
import { drawerWidth } from '@/components/templates/HeaderDrawer'

import { Box, AppBar as MuiAppBar, Toolbar, IconButton, Menu, MenuItem } from '@mui/material'
import { Menu as MenuIcon, ChevronLeft, MoreVert } from '@mui/icons-material'

import { Spacer } from '@/components/atoms/Spacer'

import type { FC, MouseEvent } from 'react'
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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const { signOut } = useAuth()
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

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
            {isOpen ? <ChevronLeft /> : <MenuIcon />}
          </IconButton>
        }
        <Spacer />
        {isMediaXs &&
          <Box>
            <IconButton
              id="menu-button"
              color="inherit"
              onClick={handleClick}
            >
              <MoreVert />
            </IconButton>
            <Menu
              id="nav-menu"
              anchorEl={anchorEl}
              open={!!anchorEl}
              onClose={handleClose}
            >
              <MenuItem onClick={signOut}>ログアウト</MenuItem>
            </Menu>
          </Box>
        }
      </Toolbar>
    </StyledAppBar>
  )
})
AppBar.displayName = 'AppBar'
