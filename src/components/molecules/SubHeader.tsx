import { memo } from 'react'
import { Toolbar, Button, Breadcrumbs, Typography, Link as MuiLink } from '@mui/material'
import { Spacer } from '@/components/atoms/Spacer'
import Link from 'next/link'

import type { FC, ReactNode } from 'react'
import type { SxProps } from '@mui/system'

type MyBreadCrumsProps = {
  text: string
  href?: string
}[]

type Props = {
  breadcrumbs: MyBreadCrumsProps
  buttonText?: string
  buttonIcon?: ReactNode
  handleClickSubHeaderButton?: () => void
  sx?: SxProps
}

export const SubHeader: FC<Props> = memo(({ breadcrumbs, buttonText, buttonIcon, handleClickSubHeaderButton, sx }) => {
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
      {buttonText && <Button variant="contained" startIcon={buttonIcon} onClick={handleClickSubHeaderButton}>{buttonText}</Button>}
    </Toolbar>
  )
})
SubHeader.displayName = 'SubHeader'
