import type { Contact, ContactDetail } from '../types/contact'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

function isContact(value: unknown): value is Contact {
  if (typeof value !== 'object' || value === null) return false

  const contact = value as Record<string, unknown>
  return (
    typeof contact.id === 'number' &&
    typeof contact.name === 'string' &&
    typeof contact.email === 'string'
  )
}

function isContactDetail(value: unknown): value is ContactDetail {
  if (!isContact(value)) return false

  const detail = value as ContactDetail
  return (
    typeof detail.phone === 'string' &&
    typeof detail.website === 'string' &&
    typeof detail.company?.name === 'string'
  )
}

async function fetchJson(url: string): Promise<unknown> {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Error HTTP ${response.status} al consultar los contactos.`)
  }
  return response.json()
}

export async function getContacts(): Promise<Contact[]> {
  const data = await fetchJson(API_URL)
  if (!Array.isArray(data) || !data.every(isContact)) {
    throw new Error('La API devolvió una lista de contactos con formato inválido.')
  }
  return data
}

export async function getContact(id: string): Promise<ContactDetail | null> {
  const response = await fetch(`${API_URL}/${encodeURIComponent(id)}`)
  if (response.status === 404) return null
  if (!response.ok) {
    throw new Error(`Error HTTP ${response.status} al consultar los contactos.`)
  }

  const data: unknown = await response.json()
  if (
    typeof data === 'object' &&
    data !== null &&
    !('id' in data)
  ) {
    return null
  }
  if (!isContactDetail(data)) {
    throw new Error('La API devolvió un contacto con formato inválido.')
  }
  return data
}
