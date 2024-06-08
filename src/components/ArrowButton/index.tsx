import { ArrowForward } from '@mui/icons-material'
import { Button, ButtonProps } from '@mui/material'

import { arrowStyles, buttonStyles } from './styles'

interface ArrowButtonProps extends ButtonProps {
  hover: boolean
}

export function ArrowButton({ hover, ...rest }: Readonly<ArrowButtonProps>) {
  return (
    <Button
      {...rest}
      disableRipple
      variant="outlined"
      size="small"
      sx={{ ...buttonStyles(hover) }}
    >
      <ArrowForward fontSize="small" sx={arrowStyles} />
    </Button>
  )
}
