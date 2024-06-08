import {
  Box,
  LinearProgress,
  linearProgressClasses,
  styled,
} from '@mui/material'

type ProgressProps = {
  value: number
  goal: number
}

export function Progress({ value, goal }: Readonly<ProgressProps>) {
  const percent = (value * 100) / goal

  return (
    <Box>
      <BorderLinearProgress variant="determinate" value={percent} />
    </Box>
  )
}

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 10,
  borderRadius: 5,
  border: '1px solid',
  borderColor: '#FFFFFF',
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: 'transparent',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
}))
