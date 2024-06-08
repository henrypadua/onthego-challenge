import { Box, Button, Typography } from '@mui/material'

import { CardContent } from '@/components/CardContent'

import { Credits } from '@/interfaces/home'

import { CardInfo } from './CardInfo'

interface CardCreditsProps {
  data: Credits
}

export function CardCredits({ data }: Readonly<CardCreditsProps>) {
  return (
    <CardContent>
      <Typography color="#000000" fontWeight="regular" fontSize="0.75rem">
        CRÉDITOS PARA PAINEL
      </Typography>

      <Box
        display={{
          xl: 'grid',
          md: 'grid',
        }}
        gridTemplateAreas={{ xl: `"a b c"`, md: `"a a" "b c"` }}
        gridTemplateColumns={{ xl: '1fr 1fr 1fr', md: '1fr 1fr' }}
        columnGap="16px"
        rowGap="12px"
        my="18px"
        px="45px"
      >
        <CardInfo
          styleType="green"
          value={data.available}
          gridArea="a"
          title={
            <>
              CRÉDITOS <br /> DISPONÍVEIS
            </>
          }
        />
        <CardInfo
          styleType="purple"
          value={data.running}
          gridArea="b"
          title={
            <>
              CRÉDITOS <br /> EM CAMPO
            </>
          }
        />
        <CardInfo
          styleType="gray"
          value={data.reserved}
          gridArea="c"
          title={
            <>
              CRÉDITOS <br /> RESERVADOS
            </>
          }
        />
      </Box>

      <Button
        variant="contained"
        sx={{
          bgcolor: '#000000',

          '&:hover': {
            bgcolor: '#000000',
          },
        }}
      >
        Gerenciar Créditos
      </Button>
    </CardContent>
  )
}
