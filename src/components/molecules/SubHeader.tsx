import { memo } from 'react'
import { Toolbar, Button, Breadcrumbs, Typography, Link as MuiLink } from '@mui/material'
import Link from 'next/link'

import { Spacer } from '@/components/atoms/Spacer'

import type { FC } from 'react'
import type { SubHeaderProps } from '@/types/ui'

type Props = SubHeaderProps

export const SubHeader: FC<Props> = memo(({ breadcrumbs, button, sx }) => {
  const breadcrumbsChildren = breadcrumbs.map(({ text, href }) => href ?
    (<Link href={href} passHref key={text}>
      <MuiLink>{text}</MuiLink>
    </Link>) :
    (<Typography key={text}>{text}</Typography>)
  )

  return (
    <Toolbar sx={{ backgroundColor: '#fff', ...sx }}>
      <Spacer />
      <Breadcrumbs separator="›" sx={{ mr: 2 }}>{breadcrumbsChildren}</Breadcrumbs>
      {button && <Button variant="contained" startIcon={button.icon} onClick={button.handleClick}>{button.text}</Button>}
    </Toolbar>
  )
})
SubHeader.displayName = 'SubHeader'
