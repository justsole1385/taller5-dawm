import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <div className="text-center py-5">
      <h1>404 - Página no encontrada</h1>
      <p className="mb-3">La dirección que buscas no existe.</p>
      <Link to="/" className="btn btn-primary">
        Volver al inicio
      </Link>
    </div>
  )
}

export default NotFoundPage
