import { Box, Typography } from '@mui/material'

import { Data } from '@/interfaces/home'

import { CardAudience } from '../CardAudience'
import { CardCredits } from '../CardCredits'
import { CardSended } from '../CardSended'
import { Carousel } from '../Carousel'

type ContentProps = {
  data: Data
  gridArea: string
}

export function Content({ data, gridArea }: Readonly<ContentProps>) {
  return (
    <Box
      width="100%"
      gridArea={gridArea}
      py="60px"
      px="14px"
      sx={{
        [`@media (min-width: 1010px)`]: {
          py: '55px',
        },
        '@media (min-width: 1010px) AND (max-width: 1920px)': {
          px: '80px',
        },
        '@media (min-width: 1920px)': {
          pr: '367px',
        },
      }}
    >
      <Box
        width="100%"
        maxWidth="480px"
        mx="auto"
        sx={{
          '@media (min-width: 1440px)': { maxWidth: '1230px' },
          '@media (max-width: 1010px)': { maxWidth: '731px' },
        }}
      >
        <Typography
          color="#000000"
          mb="48px"
          fontWeight="bold"
          fontSize="1.25rem"
        >
          Minhas Pesquisas
        </Typography>

        {data.researches.myresearches.length > 0 && (
          <Carousel data={data.researches.myresearches} />
        )}
        <Box
          display="flex"
          width="100%"
          gap="20px"
          pt="52px"
          flexDirection={'column'}
          sx={{
            '@media (min-width: 1280px)': {
              flexDirection: 'row',
            },
          }}
        >
          <CardCredits data={data.credits} />

          <Box
            display="flex"
            width="100%"
            maxWidth={'none'}
            flexDirection="column"
            gap="20px"
            sx={{
              '@media (min-width: 1280px)': {
                maxWidth: '343px',
              },
            }}
          >
            <CardAudience data={data.audience} />

            <CardSended data={data.audience} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
