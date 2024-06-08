import EastIcon from '@mui/icons-material/East'
import { Box, Button, Typography } from '@mui/material'

export function AllCard() {
  return (
    <Button
      color="inherit"
      sx={{
        background: '#000000',
        width: '230px',
        height: '242px',
        '&:hover': {
          backgroundColor: '#000000',
          '>div': {
            marginLeft: '60px',
          },
        },
      }}
    >
      <Box
        display="flex"
        alignItems="flex-end"
        flexDirection="column"
        gap="10px"
        color="#FFFFFF"
        sx={{
          transition: 'all 0.5s ease',
        }}
      >
        <Typography
          textTransform="uppercase"
          fontSize="0.875rem"
          fontWeight={700}
        >
          Ver todas
        </Typography>
        <EastIcon fontSize="small" />
      </Box>
    </Button>
  )
}
