import Head from 'next/head'

import { Content } from '@/components/Content'
import { Main } from '@/components/Main'
import { Metrics } from '@/components/Metrics'
import { NavBar } from '@/components/NavBar'
import { Notifications } from '@/components/Notifications'

import { useGetHomeData } from '@/services/useGetHomeData'
import { useGetNotifications } from '@/services/useGetNotifications'

export default function Home() {
  const { data } = useGetHomeData()
  const { data: notifications } = useGetNotifications()

  return (
    <>
      <Head>
        <title>On The Go Challenge</title>
      </Head>

      {notifications && <NavBar notifications={notifications} />}

      <Main>
        {data && <Metrics data={data} gridArea="metrics" />}

        {data && <Content data={data} gridArea="main" />}

        {notifications && (
          <Notifications
            notifications={notifications}
            gridArea="notification"
          />
        )}
      </Main>
    </>
  )
}
