import { drawerWidth, navItems } from '@/components/templates/HeaderDrawer'
import { memo } from 'react'
import { useRouter } from 'next/router'
import { styled, Theme, CSSObject } from '@mui/material/styles'

import { colors, Drawer as MuiDrawer, List, Typography, Divider, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Logout } from '@mui/icons-material'
import Link from 'next/link'

import type { FC } from 'react'

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
})
const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(4)} + 1.5em)`
})

export const StyledDrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar
}))
const StyledDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    })
  })
)

type Props = {
  isOpen: boolean
  signOut: () => void
}

export const Drawer: FC<Props> = memo(({ isOpen, signOut }) => {
  const router = useRouter()

  return (
    <StyledDrawer variant="permanent" open={isOpen}>
      <StyledDrawerHeader>
        <Typography align="center" sx={{ width: '100%' }}>U＆COMPANY</Typography>
      </StyledDrawerHeader>
      <Divider />
      <List>
        {navItems.map(({ title, icon, path }) => {
          const isCurrentPath = router.pathname.includes(path)
          return (
            <Link href={path} passHref key={title}>
              <ListItemButton component="a" selected={isCurrentPath}>
                <ListItemIcon sx={{ margin: 0, color: isCurrentPath ? colors.blue[400] : undefined }} >
                  {icon}
                </ListItemIcon>
                <ListItemText primary={title} primaryTypographyProps={{ color: isCurrentPath ? colors.blue[400] : undefined }} />
              </ListItemButton>
            </Link>
          )
        }
        )}
        <Divider sx={{ my: 1 }} />
        <ListItemButton onClick={signOut}>
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          <ListItemText primary="ログアウト" />
        </ListItemButton>
      </List>
    </StyledDrawer>
  )
})
Drawer.displayName = 'Drawer'
