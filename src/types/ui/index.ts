import type { ReactNode } from 'react'
import type { SxProps } from '@mui/system'

export type SubHeaderProps = {
  breadcrumbs: {
    text: string
    href?: string
  }[]
  button?: {
    text: string,
    icon: ReactNode,
    handleClick: () => void
  }
  sx?: SxProps
}
