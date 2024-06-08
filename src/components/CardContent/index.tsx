import { ReactNode } from 'react'
import { Box, Icon, Typography } from '@mui/material'

interface CardContentProps {
  children: ReactNode
  title?: string
  icon?: ReactNode
  minWidth?: string
}

export function CardContent({
  children,
  icon,
  title,
}: Readonly<CardContentProps>) {
  return (
    <Box
      display="flex"
      flex={1}
      flexDirection="column"
      alignItems="center"
      borderRadius="4px"
      bgcolor="#FFFFFF"
      border="1px solid"
      borderColor="#C9D1D6"
    >
      {title && (
        <Box
          py="14px"
          alignItems="center"
          px="16px"
          width="100%"
          gap="4px"
          display="flex"
          borderBottom="1px solid"
          borderColor="#C9D1D6"
          justifyContent="flex-start"
        >
          <Icon
            sx={{
              color: '#000000',
              fontSize: '1.25rem',
              marginRight: '8px',
            }}
          >
            {icon}
          </Icon>

          <Typography
            fontSize="0.75rem"
            color="#000000"
            textTransform="uppercase"
          >
            {title}
          </Typography>
        </Box>
      )}
      <Box
        px="20px"
        py="16px"
        width="100%"
        display="flex"
        flex={1}
        flexDirection="column"
        justifyContent="center"
      >
        {children}
      </Box>
    </Box>
  )
}
