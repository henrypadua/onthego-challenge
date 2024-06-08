import { useQuery } from '@tanstack/react-query'

import { api } from '@/libs/axios'

import { Data } from '@/interfaces/home'

export function useGetHomeData() {
  return useQuery({
    queryKey: ['useGetHomeData'],
    queryFn: () =>
      api
        .get<Data>('/home/7a581b0e16b559ff9a9957')
        .then((response) => response.data)
        .catch((error) => {
          throw new Error(error)
        }),
    retry: 1,
  })
}
