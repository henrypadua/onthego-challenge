import { NotificationData } from '@/interfaces/notification'

export function formatDate(dateStr: string) {
  const [day, month, year] = dateStr.split(' ')[0].split('/')

  const date = new Date(`${year}-${month}-${day}`)

  const formattedDate = date.toLocaleString('pt-BR', {
    month: 'long',
    year: 'numeric',
  })

  return formattedDate.replace(' de ', ', ')
}

interface NotificationsGroup {
  [date: string]: NotificationData[]
}

export function NotificationsGroupByDate(
  list: NotificationData[],
): NotificationsGroup {
  return list.reduce((acc: NotificationsGroup, obj: NotificationData) => {
    const date = new Date(obj.createAt)
    const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

    if (!acc[formattedDate]) {
      acc[formattedDate] = []
    }

    acc[formattedDate].push(obj)

    return acc
  }, {})
}
