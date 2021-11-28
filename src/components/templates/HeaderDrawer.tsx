import { useEffect, useState, useCallback, memo } from 'react'
import { useAuth } from '@/hooks/useAuth'

import { useMediaQuery, useTheme, Box } from '@mui/material'
import { InfoOutlined, DirectionsCarFilled, EventNote } from '@mui/icons-material'

import { AppBar } from '@/components/organisms/AppBar'
import { StyledDrawerHeader, Drawer } from '@/components/organisms/Drawer'
import { BottomNav } from '@/components/organisms/BottomNav'

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

export const HeaderDrawer: FC = memo(({ children }) => {
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
        {children}
      </Box>

      {isMediaXs && <BottomNav />}
    </Box>
  )
})
HeaderDrawer.displayName = 'HeaderDrawer'
