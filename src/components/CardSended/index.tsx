import { ArrowForward, Mail } from '@mui/icons-material'
import { Box, Button, Typography, useMediaQuery } from '@mui/material'

import { CardContent } from '@/components/CardContent'

import { Audience } from '@/interfaces/home'

import { STYLES } from '@/constants/styles'

interface CardSendedProps {
  data: Audience
}

export function CardSended({ data }: Readonly<CardSendedProps>) {
  const isMobile = useMediaQuery(STYLES.breakpoints.md)

  return (
    <CardContent
      minWidth={isMobile ? '100%' : '731px'}
      title="disparos"
      icon={<Mail fontSize="small" />}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography
            color="#000000"
            fontWeight="bold"
            fontSize="2.375rem"
            lineHeight="2.791rem"
          >
            {data.sended.toLocaleString('pt-BR')}
          </Typography>

          <Typography
            color="#000000"
            lineHeight="1.028rem"
            fontWeight="bold"
            fontSize="0.875rem"
          >
            Disparos feitos
          </Typography>
        </Box>

        <Button
          sx={{
            border: '1px solid',
            borderColor: '#C9D1D6',
            height: '46px',
            minWidth: '46px !important',

            '&:hover': {
              bgcolor: '#000000',

              '& svg': {
                color: '#FFFFFF',
              },
            },
          }}
        >
          <ArrowForward
            fontSize="small"
            sx={{
              color: '#000000',
              position: 'relative',
              transition: 'color 0.3s ease',
            }}
          />
        </Button>
      </Box>
    </CardContent>
  )
}
