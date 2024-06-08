import { Add } from '@mui/icons-material'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'
import Image from 'next/image'

import { STYLES } from '@/constants/styles'

export function CardResearch() {
  return (
    <Card
      sx={{
        mt: { xs: '28px', md: '0' },
        gap: 2,
        px: '25px',
        pt: '13px',
        pb: '26px',
        width: '100%',
        display: 'flex',
        maxWidth: '731px',
        borderRadius: 0.5,
        bgcolor: '#C7B2FF',
        alignItems: 'center',
        flexDirection: 'column',
        [`${STYLES.breakpoints.md}`]: {
          maxWidth: '345px',
        },
        [`${STYLES.breakpoints.xl}`]: {
          maxWidth: '426px',
        },
      }}
    >
      <CardContent>
        <div style={{ textAlign: 'center' }}>
          <Image
            src="/images/starGif.gif"
            alt="starGif"
            width={92}
            height={92}
            unoptimized
            priority
          />
        </div>
        <Typography
          variant="h6"
          fontWeight={700}
          color="#000000"
          textAlign="center"
        >
          Pronto para conhecer o seu cliente?
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Button
          size="large"
          variant="contained"
          sx={{
            backgroundColor: '#000000',
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: '#ffffff',
              zIndex: 1,
              transition: 'transform 0.15s ease-out',
              transform: 'translateY(100%)',
            },
            '&:hover::before': {
              transform: 'translateY(0)',
            },
            '&:hover': {
              color: '#000000',
              '& .MuiSvgIcon-root': {
                transform: 'rotate(90deg)',
              },
            },
          }}
        >
          <span style={{ position: 'relative', fontWeight: 700, zIndex: 2 }}>
            Nova pesquisa
          </span>
          <Add
            sx={{
              marginLeft: '5px',
              transition: 'transform 0.15s ease-out',
              position: 'relative',
              zIndex: 2,
            }}
          />
        </Button>
      </CardActions>
    </Card>
  )
}
