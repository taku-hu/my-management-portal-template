import { useState } from 'react'
import { styled, Theme, CSSObject, useTheme } from '@mui/material/styles';
import { Box, Drawer as MuiDrawer, AppBar as MuiAppBar, Toolbar, List, Typography, Divider, IconButton, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Menu, ChevronLeft, InfoOutlined, DirectionsCarFilled, EventNote, Logout } from '@mui/icons-material'
import Link from 'next/link'

import type { FC } from 'react'
import type { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

const drawerWidth = 200;
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
  width:theme.spacing(6),
  [theme.breakpoints.up('sm')]: {
    width:theme.spacing(7)
  }
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar
}))

type AppBarProps = {
  open?: boolean
} & MuiAppBarProps
const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open', })<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
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

const drawerItems = [
  {
    icon: <InfoOutlined />,
    title: 'お知らせ',
    path: '/information'
  },
  {
    icon: <DirectionsCarFilled />,
    title: '車管理',
    path: '/cars'
  },
  {
    icon: <EventNote />,
    title: '予約管理',
    path: '/reserve'
  }
]

export const HeaderDrawer: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const theme = useTheme()
  const handleToggleDrawer = () => setIsOpen(preIsOpen => !preIsOpen)

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" open={isOpen}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ marginRight: '36px' }}
            onClick={handleToggleDrawer}
          >
            {isOpen ?  <ChevronLeft /> : <Menu />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={isOpen}>
        <DrawerHeader>
          <Typography align="center" sx={{ width: '100%' }}>U＆COMPANY</Typography>
        </DrawerHeader>
        <Divider />
        <List>
          {drawerItems.map(({ title, icon, path }) => (
            <Link href={path} passHref key={title}>
              <ListItemButton component="a">
                <ListItemIcon sx={{ margin: 0 }}>
                  {icon}
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </Link>
          ))}
          <Divider sx={{ mt: 1 }} />
          <ListItemButton>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="ログアウト" />
          </ListItemButton>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <DrawerHeader />
        <Box sx={{ p: 2 }}>
          {children}
        </Box>
      </Box>
    </Box>
  )
}
