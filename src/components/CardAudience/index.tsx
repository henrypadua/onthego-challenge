import { ArrowForward } from '@mui/icons-material'
import FolderSharedIcon from '@mui/icons-material/FolderShared'
import { Box, Button, Typography } from '@mui/material'

import { CardContent } from '@/components/CardContent'

import { Audience } from '@/interfaces/home'

interface CardAudienceProps {
  data: Audience
}

export function CardAudience({ data }: Readonly<CardAudienceProps>) {
  return (
    <CardContent title="audiência" icon={<FolderSharedIcon fontSize="small" />}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography
            color="#000000"
            fontWeight="bold"
            fontSize="2.375rem"
            lineHeight="2.791rem"
          >
            {data.contacts.toLocaleString('pt-BR')}
          </Typography>

          <Typography
            color="#000000"
            lineHeight="1.028rem"
            fontWeight="bold"
            fontSize="0.875rem"
          >
            Contatos
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
