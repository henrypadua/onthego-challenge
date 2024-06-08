import { ReactNode } from 'react'
import { Box } from '@mui/material'

import { STYLES } from '@/constants/styles'

interface MainProps {
  children: ReactNode
}

export function Main({ children }: Readonly<MainProps>) {
  return (
    <Box
      display="flex"
      pt="65px"
      flexDirection="column"
      sx={{
        gridTemplateColumns: '1fr 1fr minmax(0, 384px)',
        gridTemplateAreas: `"metrics metrics metrics"
      "main main notification"`,
        [STYLES.breakpoints.md]: {
          display: 'grid',
        },
        [STYLES.breakpoints.xl]: {
          gridTemplateAreas: `"metrics metrics notification"
        "main main notification"`,
        },
      }}
    >
      {children}
    </Box>
  )
}
