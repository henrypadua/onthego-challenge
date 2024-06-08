export interface Research {
  name: string
  id: number
  status: string
}

export interface Researches {
  running: string
  scripting: number
  myresearches: Research[]
}

export interface Audience {
  balance: number
  sended: number
  contacts: number
}

export interface Credits {
  running: number
  reserved: number
  available: number
}

export interface Data {
  researches: Researches
  audience: Audience
  credits: Credits
  id: string
  createAt: string
}
