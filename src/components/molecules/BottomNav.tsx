import { memo } from 'react'
import { useRouter } from 'next/router'
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import { navItems } from '@/components/templates/HeaderDrawer'

import type { FC } from 'react'

export const BottomNav: FC = memo(() => {
  const router = useRouter()

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation value={router.pathname} onChange={() => router.push(router.pathname)}>
        {navItems.map(({ title, path, icon }) => (
          <BottomNavigationAction key={path} label={title} value={path} icon={icon} onClick={() => router.push(path)} />
        ))}
      </BottomNavigation>
    </Paper>
  )
})
BottomNav.displayName = 'BottomNav'
