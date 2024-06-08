import { useQuery } from '@tanstack/react-query'

import { api } from '@/libs/axios'

import { NotificationData } from '@/interfaces/notification'

export function useGetNotifications() {
  return useQuery({
    queryKey: ['useGetNotifications'],
    queryFn: () =>
      api
        .get<NotificationData[]>('/notifications')
        .then((response) => response.data)
        .catch((error) => {
          throw new Error(error)
        }),
    retry: 1,
  })
}
