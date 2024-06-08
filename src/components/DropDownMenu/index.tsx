import { ReactNode, useEffect, useState } from 'react'
import { Box, Collapse } from '@mui/material'

type DropDownMenuProps = {
  open: boolean
  children: ReactNode
}

export function DropDownMenu({ open, children }: Readonly<DropDownMenuProps>) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (open) {
      setShow(true)
    } else {
      setTimeout(() => {
        setShow(false)
      }, 300)
    }
  }, [open])

  return (
    <Box position="absolute" left={0} right={0} top="100%" zIndex={999}>
      <Collapse in={open} timeout={500}>
        <Box
          width="100%"
          bgcolor="#ffffff"
          display="flex"
          flexDirection="column"
        >
          {children}
        </Box>
      </Collapse>
      <Box
        height="100vh"
        flex={1}
        bgcolor="rgba(0, 0, 0, 0.6)"
        display={show ? 'flex' : 'none'}
        sx={{ transition: 'all 0.5s ease-in-out', opacity: open ? 1 : 0 }}
      />
    </Box>
  )
}
