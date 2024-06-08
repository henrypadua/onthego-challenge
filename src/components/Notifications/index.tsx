import React, { useState } from 'react'
import { Box, Stack, Tab, Tabs, Typography } from '@mui/material'

import { NotificationData } from '@/interfaces/notification'

import { Card } from './Card'

import { NotificationsGroupByDate } from '@/utils/functions'

type TabPanelProps = {
  children?: React.ReactNode
  index: number
  value: number
}

type NotificationTabProps = {
  notifications: NotificationData[]
  gridArea: string
}

function TabPanel(props: Readonly<TabPanelProps>) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            px: '17px',
            pt: '33px',
            height: '100vh',
            overflowY: 'auto',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            '&': {
              scrollbarWidth: 'none',
            },
          }}
        >
          {children}
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  }
}

export function Notifications({
  notifications,
  gridArea,
}: Readonly<NotificationTabProps>) {
  const [valueTab, setValueTab] = useState(0)
  const notificationsGrouped = NotificationsGroupByDate(notifications)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValueTab(newValue)
  }

  return (
    <Box
      flex={1}
      width="100%"
      display="none"
      maxWidth="384px"
      overflow="hidden"
      bgcolor="#FFFFFF"
      flexDirection="column"
      maxHeight="min-content"
      sx={{
        '@media (min-width: 1010px)': {
          display: 'flex',
        },
      }}
      gridArea={gridArea}
    >
      <Box>
        <Tabs
          value={valueTab}
          onChange={handleChange}
          aria-label="Notifications"
          sx={{
            filter: 'drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.16))',
            boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
            px: 3,
            pt: 2,
            flex: 1,
            '& .MuiTab-root.Mui-selected': {
              p: 0,
            },
            '& .MuiTabs-indicator': {
              backgroundColor: 'primary.main',
              minHeight: 4,
              maxWidth: 42,
            },
          }}
        >
          <Tab
            disableRipple
            label={
              <Stack alignItems="flex-start" spacing={5.5}>
                <Box gap="6px" display="flex" alignItems="center">
                  <Typography
                    color="#000000"
                    textTransform="none"
                    fontWeight={700}
                    variant="h6"
                  >
                    Atualizações
                  </Typography>

                  <Typography
                    bgcolor="primary.main"
                    color="#FFFFFF"
                    width={28}
                    height={18}
                    borderRadius={9}
                    textAlign="center"
                    variant="overline"
                    p="2px 10px"
                  >
                    {notifications.length}
                  </Typography>
                </Box>

                <Typography pb={1} color="primary.main" variant="overline">
                  Todas
                </Typography>
              </Stack>
            }
            {...a11yProps(0)}
          />
        </Tabs>

        <TabPanel value={valueTab} index={0}>
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
        </TabPanel>
      </Box>
    </Box>
  )
}
