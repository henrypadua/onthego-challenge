import { useState } from 'react'
import { Comment } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'

import { NotificationData } from '@/interfaces/notification'

import { ArrowButton } from '../ArrowButton'

interface TimelineCardProps {
  item: NotificationData
  onClick: () => void
}

function CommentCount({
  count,
  hover,
}: Readonly<{ count: number; hover: boolean }>) {
  return (
    <Typography
      variant="overline"
      display="flex"
      alignItems="center"
      color={hover ? 'primary.main' : '#000000'}
      sx={{
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Comment sx={{ marginRight: '6px', fontSize: '14px' }} />
      {count} NOVOS COMENTÁRIOS
    </Typography>
  )
}

function ReadIndicator({ read }: Readonly<{ read: boolean }>) {
  return (
    <Box
      width="10px"
      height="10px"
      bgcolor="primary.main"
      borderRadius={999}
      mt="-8px"
      sx={{
        opacity: read ? 0 : 1,
        transition: 'opacity 0.3s ease-in-out',
      }}
    />
  )
}

export function Card({ item, onClick }: Readonly<TimelineCardProps>) {
  const [hover, setHover] = useState(false)

  return (
    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      gap="26px"
      px="12px"
      py="22px"
      border="1px solid"
      borderColor="#C9D1D6"
      borderRadius="4px"
      mt="17px"
      position="relative"
      sx={{
        '&:before': {
          position: 'absolute',
          top: '-18px',
          left: '36px',
          content: "''",
          width: '1px',
          height: '17px',
          backgroundColor: '#E0E4E7',
        },

        transition: 'all 0.3s ease-in-out',

        '&:hover': {
          borderColor: 'primary.main',
        },
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        width="100%"
      >
        {item.comments > 0 && (
          <CommentCount count={item.comments} hover={hover} />
        )}
        <ReadIndicator read={item.read} />
      </Box>

      <Box display="flex" alignItems="center" gap="20px">
        <Typography
          component="div"
          variant="body1"
          color="#8A9099"
          lineHeight="1.125rem"
          dangerouslySetInnerHTML={{ __html: item.mensage }}
          sx={{
            '>b': {
              fontWeight: 600,
              fontSize: '0.875rem',
              color: '#000000',
            },
          }}
        />
        <ArrowButton onClick={onClick} hover={hover} />
      </Box>
    </Box>
  )
}
