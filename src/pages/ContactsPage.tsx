import { useEffect, useState } from 'react'
import ContactList from '../components/ContactList'
import { getContacts } from '../services/contactsService'
import type { Contact } from '../types/contact'

function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let active = true

    getContacts()
      .then((result) => {
        if (active) setContacts(result)
      })
      .catch((cause: unknown) => {
        if (active) {
          setError(
            cause instanceof Error
              ? cause.message
              : 'No se pudieron cargar los contactos.',
          )
        }
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [])

  return (
    <>
      <h1 className="mb-4">Contactos</h1>
      {loading && <p role="status">Cargando contactos...</p>}
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
      {!loading && !error && <ContactList contacts={contacts} />}
    </>
  )
}

export default ContactsPage
