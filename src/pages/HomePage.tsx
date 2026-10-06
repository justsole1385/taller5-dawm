import { Link } from 'react-router'

function HomePage() {
  return (
    <section className="p-5 mb-4 bg-white rounded-3 shadow-sm">
      <h1 className="display-5 fw-bold">Panel de contactos</h1>
      <p className="fs-5">Bienvenido al panel.</p>
      <Link to="/contactos" className="btn btn-primary mt-3">
        Ver contactos
      </Link>
    </section>
  )
}

export default HomePage
