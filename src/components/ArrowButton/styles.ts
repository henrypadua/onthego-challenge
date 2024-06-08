export const buttonStyles = (hover: boolean) => {
  return {
    '&::before': {
      backgroundColor: '#FF5D55',
      content: '""',
      height: '100%',
      left: 0,
      position: 'absolute',
      top: 0,
      transform: hover ? 'translateX(0)' : 'translateX(-100%)',
      transition: 'transform 0.3s ease',
      width: '100%',
      zIndex: 1,
    },

    '& .MuiSvgIcon-root': {
      color: hover ? '#FFFFFF' : '#000000',
    },
    borderColor: hover ? '#FF5D55' : '#C9D1D6',
    height: '38px',
    minWidth: '38px !important',
    overflow: 'hidden',
    p: 0,
    position: 'relative',
  }
}

export const arrowStyles = {
  color: '#000000',
  position: 'relative',
  transition: 'color 0.3s ease',
  zIndex: 2,
}
