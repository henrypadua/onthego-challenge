import { ReactNode } from 'react'
import { Box, Typography } from '@mui/material'

import { Points } from './Points'
import { Progress } from './Progress'

interface CardMetricsProps {
  value: number
  goal: number
  title: ReactNode
  type?: 'points' | 'progress' | 'default'
  hasStatus?: boolean
  gridArea: 'a' | 'b' | 'c'
}

export function CardMetrics({
  value,
  goal,
  title,
  type = 'default',
  hasStatus = false,
  gridArea,
}: Readonly<CardMetricsProps>) {
  return (
    <Box
      position="relative"
      width="100%"
      borderRadius="4px"
      bgcolor="#242528"
      p="1.375rem"
      border="1px solid"
      borderColor="#242528"
      gridArea={gridArea}
    >
      {hasStatus && (
        <Box
          position="absolute"
          top="0.625rem"
          right="0.375rem"
          width="6px"
          height="6px"
          borderRadius={999}
          bgcolor="#0AD2A5"
        />
      )}
      <Box display="flex" alignItems="flex-end">
        <Typography variant="h1">{value.toLocaleString('pt-BR')}</Typography>

        {goal > 0 && (
          <Typography variant="h6" mb="2px">
            /{goal.toLocaleString('pt-BR')}
          </Typography>
        )}
      </Box>

      <Typography
        mb="2.625rem"
        mt="0.375rem"
        textTransform="uppercase"
        variant="subtitle2"
      >
        {title}
      </Typography>

      {type === 'points' && <Points value={value} goal={goal} />}
      {type === 'progress' && <Progress value={value} goal={goal} />}
    </Box>
  )
}
