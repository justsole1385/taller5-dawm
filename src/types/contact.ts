export interface Contact {
  id: number
  name: string
  email: string
}

export interface ContactDetail extends Contact {
  phone: string
  website: string
  company: {
    name: string
  }
}