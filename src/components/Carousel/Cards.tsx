import React, { useCallback, useState } from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'

import { Research } from '@/interfaces/home'

type CardsProps = {
  data: Research
}

const borderColor = '#000000'
const circleColor = '#0AD2A5'
const draftColor = '#C3C7CA'

export function Cards({ data }: Readonly<CardsProps>) {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
  }, [])

  return (
    <Box
      key={data.id}
      width="230px"
      height="242px"
      bgcolor="#000000"
      p="2px"
      pb="12px"
      borderRadius="6px"
      sx={{
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          mt: '-10px',
        },
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Box
        bgcolor="#FFFFFF"
        width="100%"
        height="100%"
        borderRadius="4px"
        pt="22px"
        px="18px"
        position="relative"
      >
        {data.status.toLocaleLowerCase().includes('campo') && (
          <Box
            position="absolute"
            top="0.5rem"
            right="0.56rem"
            width="6px"
            height="6px"
            borderRadius={999}
            bgcolor={circleColor}
          />
        )}
        <Box
          borderLeft="2px solid"
          borderColor={isHovered ? 'primary.main' : borderColor}
          pl="2px"
          sx={{
            transition: 'all 0.2s ease-in-out',
          }}
        >
          <Typography
            textTransform="uppercase"
            fontSize="0.75rem"
            fontWeight="medium"
            position="relative"
            lineHeight="0.875rem"
            color={isHovered ? 'primary.main' : borderColor}
            sx={{
              transition: 'all 0.2s ease-in-out',
            }}
          >
            {data.status}
            {data.status.toLowerCase() === 'rascunho' && (
              <Image
                src={isHovered ? '/images/starHovered.svg' : '/images/star.svg'}
                alt="stars"
                width={21}
                height={24}
                style={{ position: 'absolute', top: -12 }}
              />
            )}
          </Typography>
          <Typography
            fontSize="1.125rem"
            fontWeight="bold"
            color={
              isHovered
                ? 'primary.main'
                : data.status.toLocaleLowerCase() === 'rascunho'
                  ? draftColor
                  : borderColor
            }
            lineHeight="1.31rem"
            sx={{
              transition: 'all 0.2s ease-in-out',
            }}
          >
            {data.name}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
