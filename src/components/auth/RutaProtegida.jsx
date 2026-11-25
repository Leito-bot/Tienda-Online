import { Link, Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

function RutaProtegida({ children, soloAdmin = false }) {
  const { usuario, esAdmin, cargando } = useAuth()
  const location = useLocation()

  if (cargando) return <p className="mensaje">Verificando sesión...</p>

  if (!usuario) {
    return <Navigate to="/login" replace state={{ desde: location.pathname }} />
  }

  if (soloAdmin && !esAdmin) {
    return (
      <section className="estado-vacio">
        <h2>Acceso denegado</h2>
        <p>Esta sección es solo para administradores.</p>
        <Link to="/" className="boton">Volver al inicio</Link>
      </section>
    )
  }

  return children
}

export default RutaProtegida