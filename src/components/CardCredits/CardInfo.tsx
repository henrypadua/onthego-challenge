import { ReactNode } from 'react'
import { Box, Typography } from '@mui/material'

type CardInfoProps = {
  value: number
  title: ReactNode
  gridArea: 'a' | 'b' | 'c'
  styleType: 'green' | 'purple' | 'gray'
}

const COLOR = {
  green: '#0AD2A5',
  purple: '#C7B2FF',
  gray: '#8A9099',
}

export function CardInfo({
  styleType,
  value,
  title,
  gridArea,
}: Readonly<CardInfoProps>) {
  return (
    <Box
      gridArea={gridArea}
      bgcolor={COLOR[styleType]}
      p="2px"
      pb="10px"
      mx="auto"
      my="10px"
      borderRadius="4px"
      width="100%"
      maxWidth={{
        xl: '155px ',
      }}
    >
      <Box
        py="16px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        borderRadius="2px"
        maxWidth={{
          xl: '155px ',
        }}
        minHeight={{
          md: '110px',
          xl: '188px',
        }}
        bgcolor="#FFFFFF"
        color={styleType === 'gray' ? '#8A9099' : '#000000'}
      >
        <Typography
          color={styleType === 'gray' ? '#8A9099' : '#000000'}
          fontSize="2.375rem"
          lineHeight="2.791rem"
          fontWeight={700}
        >
          {value.toLocaleString('pt-BR')}
        </Typography>

        <Typography
          color={styleType === 'gray' ? '#8A9099' : '#000000'}
          fontSize="0.75rem"
          lineHeight="0.881rem"
          fontWeight={500}
          textAlign="center"
        >
          {title}
        </Typography>
      </Box>
    </Box>
  )
}
