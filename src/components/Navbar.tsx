import { Link, NavLink } from 'react-router'

function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark px-3">
      <Link to="/" className="navbar-brand">
        Dashboard
      </Link>
      <div className="navbar-nav">
        <NavLink to="/" end className="nav-link">
          Inicio
        </NavLink>
        <NavLink to="/contactos" className="nav-link">
          Contactos
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
