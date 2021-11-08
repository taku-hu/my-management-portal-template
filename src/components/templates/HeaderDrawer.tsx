import { useEffect, useState, useCallback } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useMediaQuery, useTheme, Box } from '@mui/material'
import { InfoOutlined, DirectionsCarFilled, EventNote } from '@mui/icons-material'
import { AppBar } from '@/components/molecules/AppBar'
import { StyledDrawerHeader, Drawer } from '@/components/molecules/Drawer'
import { BottomNav } from '@/components/molecules/BottomNav'

import type { FC } from 'react'

export const drawerWidth = 200
export const navItems = [
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
  const theme = useTheme()
  const isMediaXs = useMediaQuery(theme.breakpoints.only('xs'))
  const { signOut } = useAuth()
  const initialOpen = !isMediaXs
  const [isOpen, setIsOpen] = useState(initialOpen)
  const handleToggleDrawer = useCallback(() => {
    if (isMediaXs) {
      return
    }

    setIsOpen(preIsOpen => !preIsOpen)
  }, [isMediaXs])

  useEffect(() => {
    if (!isMediaXs) {
      return
    }

    setIsOpen(false)
  }, [isMediaXs])

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar {...{ isOpen, isMediaXs, handleToggleDrawer }} />
      {!isMediaXs && <Drawer {...{ isOpen, signOut }} /> }

      <Box component="main" sx={{ flexGrow: 1 }}>
        <StyledDrawerHeader />
        <Box sx={{ p: 2 }}>
          {children}
        </Box>
      </Box>

      {isMediaXs && <BottomNav />}
    </Box>
  )
}
