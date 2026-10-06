import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import { getContact } from '../services/contactsService'
import type { ContactDetail } from '../types/contact'

type ContactDetailState =
  | { id: string | undefined; status: 'loading' }
  | { id: string | undefined; status: 'success'; contact: ContactDetail | null }
  | { id: string | undefined; status: 'error'; message: string }

function ContactDetailPage() {
  const { id } = useParams()
  const [detail, setDetail] = useState<ContactDetailState>({
    id,
    status: 'loading',
  })

  useEffect(() => {
    let active = true
    const request =
      id && /^\d+$/.test(id) ? getContact(id) : Promise.resolve(null)

    request
      .then((result) => {
        if (active) setDetail({ id, status: 'success', contact: result })
      })
      .catch((cause: unknown) => {
        if (active) {
          setDetail({
            id,
            status: 'error',
            message:
              cause instanceof Error
                ? cause.message
                : 'No se pudo cargar el contacto.',
          })
        }
      })

    return () => {
      active = false
    }
  }, [id])

  if (detail.id !== id || detail.status === 'loading') {
    return <p role="status">Cargando contacto...</p>
  }

  if (detail.status === 'error') {
    return (
      <div className="alert alert-danger" role="alert">
        <h1 className="h4">Error al cargar el contacto</h1>
        <p className="mb-2">{detail.message}</p>
        <Link to="/contactos">Volver a contactos</Link>
      </div>
    )
  }

  const contact = detail.contact
  if (!contact) {
    return (
      <div className="alert alert-danger" role="alert">
        <h1 className="h4">Contacto no encontrado</h1>
        <p className="mb-2">No existe un contacto con ese identificador.</p>
        <Link to="/contactos">Volver a contactos</Link>
      </div>
    )
  }

  return (
    <section className="card shadow-sm">
      <div className="card-body">
        <h1 className="card-title h3">{contact.name}</h1>
        <p className="card-text">
          <strong>Email:</strong> {contact.email}
        </p>
        <p className="card-text">
          <strong>Teléfono:</strong> {contact.phone}
        </p>
        <p className="card-text">
          <strong>Sitio web:</strong>{' '}
          <a href={`https://${contact.website}`} target="_blank" rel="noreferrer">
            {contact.website}
          </a>
        </p>
        <p className="card-text">
          <strong>Empresa:</strong> {contact.company.name}
        </p>
        <Link to="/contactos" className="btn btn-outline-primary">
          Volver a contactos
        </Link>
      </div>
    </section>
  )
}

export default ContactDetailPage
