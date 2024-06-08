import { Box } from '@mui/material'

type PointsProps = {
  value: number
  goal: number
}

export function Points({ value, goal }: Readonly<PointsProps>) {
  const points = Array.from({ length: goal }, (_, i) => i + 1)

  return (
    <Box display="flex" gap="0.375rem">
      {points.map((point) => (
        <Box
          key={point}
          width={12}
          height={12}
          border="1px solid"
          borderColor="white"
          borderRadius={999}
          bgcolor={point <= value ? 'white' : 'transparent'}
        />
      ))}
    </Box>
  )
}
