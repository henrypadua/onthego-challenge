import { useState } from 'react'
import { MoreVert } from '@mui/icons-material'
import CloseIcon from '@mui/icons-material/Close'
import NotificationsIcon from '@mui/icons-material/Notifications'
import {
  Box,
  Button,
  ButtonProps,
  IconButton,
  Link,
  styled,
  Typography,
} from '@mui/material'
import { Turn as Hamburger } from 'hamburger-react'
import Image from 'next/image'

import { NotificationData } from '@/interfaces/notification'

import { DropDownMenu } from '../DropDownMenu'
import { Card } from '../Notifications/Card'

import { STYLES } from '@/constants/styles'
import { NotificationsGroupByDate } from '@/utils/functions'

const navBarItems = [
  'Pesquisas',
  'Créditos',
  'Campanhas',
  'Equipe',
  'Configurações',
]

type NavBarProps = {
  notifications: NotificationData[]
}

const MenuButton = styled(IconButton)<ButtonProps>({
  color: '#FFFFFF',
  backgroundColor: 'transparent',
})

export function NavBar({ notifications }: Readonly<NavBarProps>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const notificationsGrouped = NotificationsGroupByDate(notifications)

  return (
    <Box
      position="fixed"
      zIndex={99}
      bgcolor="#000000"
      px="26px"
      py="8px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width={'100%'}
      borderBottom="1px solid"
      borderColor={'#8A9099'}
    >
      <Box
        display="flex"
        gap="16px"
        alignItems="center"
        sx={{
          [STYLES.breakpoints.lg]: {
            gap: '32px',
          },
        }}
      >
        <Image
          src="/images/logo.svg"
          alt="Company"
          width={36}
          height={36}
          style={{ cursor: 'pointer' }}
        />

        <Box
          sx={{
            [STYLES.breakpoints.md]: {
              display: 'none',
            },
          }}
        >
          <Hamburger
            color={'#FFFFFF'}
            toggled={isMenuOpen}
            toggle={setIsMenuOpen}
          />
        </Box>
        {navBarItems.map((item) => (
          <Link
            key={navBarItems.indexOf(item)}
            href="#"
            underline="none"
            color={'#8A9099'}
            textTransform="uppercase"
            fontSize="0.75rem"
            display="none"
            sx={{
              '&:hover': {
                color: '#FFFFFF',
              },
              transitionDuration: '0.3s',
              [STYLES.breakpoints.md]: {
                display: 'block',
              },
            }}
          >
            {item}
          </Link>
        ))}
      </Box>
      <Box
        sx={{
          [STYLES.breakpoints.md]: {
            display: 'none',
          },
        }}
      >
        <Button
          onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
          color="inherit"
          sx={{
            position: 'relative',
            minWidth: '0',
            width: '44px',
            height: '44px',
            borderRadius: 999,
            background: '#242528',
            color: '#FFFFFF',
            '&:hover': {
              background: '#242528',
            },
          }}
        >
          {isNotificationsOpen ? (
            <CloseIcon />
          ) : (
            <>
              <NotificationsIcon sx={{ zIndex: 9 }} />
              <Box
                position="absolute"
                top="18%"
                right="22%"
                zIndex={10}
                width="12px"
                height="12px"
                borderRadius={999}
                bgcolor="primary.main"
                border="2px solid"
                borderColor={'#242528'}
              />
            </>
          )}
        </Button>
      </Box>
      <Box
        alignItems="center"
        gap="16px"
        display="none"
        sx={{
          [STYLES.breakpoints.lg]: {
            gap: '24px',
          },

          [STYLES.breakpoints.md]: {
            display: 'flex',
          },
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          gap="0.625rem"
          border="1px solid"
          borderRadius="4px"
          borderColor={'#242528'}
          px="0.75rem"
          py="0.375rem"
        >
          <Image src="/images/logo.svg" alt="Company" width={34} height={34} />
          <Typography color={'#FFFFFF'} fontWeight="medium" fontSize="0.875rem">
            ACME Corporation
          </Typography>
        </Box>
        <Box>
          <Typography
            color={'#FFFFFF'}
            fontWeight="medium"
            fontSize="0.875rem"
            lineHeight="1rem"
          >
            Adriano lima
          </Typography>
          <Typography color={'#8A9099'} fontSize="0.875rem" lineHeight="1rem">
            adriano.lima@acmecorp.com
          </Typography>
        </Box>
        <MenuButton>
          <MoreVert />
        </MenuButton>
      </Box>

      <DropDownMenu open={isMenuOpen}>
        <Box
          px="12px"
          py="22px"
          bgcolor="#E0E4E7"
          display="flex"
          alignItems="center"
          gap="12px"
          borderBottom="1px solid"
          borderColor={'#C9D1D6'}
        >
          <Image src="/images/logo.svg" alt="Company" width={34} height={34} />
          <Typography fontWeight="medium" fontSize="1rem">
            ACME Corporation
          </Typography>
        </Box>

        {navBarItems.map((item) => (
          <Link
            key={navBarItems.indexOf(item)}
            href="#"
            underline="none"
            color={'#8A9099'}
            textTransform="uppercase"
            fontSize="0.875rem"
            width="100%"
            textAlign="center"
            py="17px"
            borderBottom="1px solid"
            borderColor={'#C9D1D6'}
            sx={{
              '&:hover': {
                color: '#FFFFFF',
                backgroundColor: '#000000',
              },
              transitionDuration: '0.5s',
            }}
          >
            {item}
          </Link>
        ))}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          pt="32px"
          pb="28px"
        >
          <Typography fontWeight="bold" fontSize="1rem" lineHeight="1rem">
            Adriano lima
          </Typography>
          <Typography
            color={'#8A9099'}
            fontWeight="regular"
            fontSize="0.875rem"
            lineHeight="1rem"
            mt="5px"
          >
            adriano.lima@acmecorp.com
          </Typography>
        </Box>
        <Link
          href="#"
          underline="none"
          color="#000000"
          fontSize="1rem"
          fontWeight="regular"
          width="50%"
          mx="auto"
          mb="20px"
          textAlign="center"
          py="17px"
          borderTop="1px solid"
          borderColor={'#C9D1D6'}
          sx={{
            '&:hover': {
              color: '#FFFFFF',
              backgroundColor: '#000000',
            },
            transitionDuration: '0.5s',
          }}
        >
          Logout
        </Link>
      </DropDownMenu>
      <DropDownMenu open={isNotificationsOpen}>
        <Box
          px="17px"
          py="30px"
          display="flex"
          flexDirection="column"
          flex={1}
          maxHeight="calc(100vh - 174px)"
          overflow="scroll"
        >
          {Object.keys(notificationsGrouped).map((key) => (
            <Box key={key}>
              <Typography variant="body2" ml={2.8} pb={1}>
                Hoje
              </Typography>
              {notificationsGrouped[key].map((notification) => (
                <Card
                  key={notification.id}
                  item={notification}
                  onClick={() => console.log('click')}
                />
              ))}
            </Box>
          ))}
        </Box>
      </DropDownMenu>
    </Box>
  )
}
