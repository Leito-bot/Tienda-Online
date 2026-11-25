import { NavLink, useNavigate } from 'react-router-dom'
import { useCarrito } from '../../hooks/useCarrito'
import { useAuth } from '../../hooks/useAuth'
import styles from './NavBar.module.css'

function NavBar() {
  const { totalUnidades, vaciarCarrito } = useCarrito()
  const { usuario, esAdmin, logout } = useAuth()
  const navigate = useNavigate()

  const claseLink = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.activo}` : styles.link

  const manejarSalir = async () => {
    await logout()
    vaciarCarrito()
    navigate('/')
  }

  return (
    <nav className={styles.nav}>
      <ul className={styles.lista}>
        <li><NavLink to="/" end className={claseLink}>Inicio</NavLink></li>
        <li><NavLink to="/productos" className={claseLink}>Productos</NavLink></li>
        <li>
          <NavLink to="/carrito" className={claseLink}>
            Carrito
            {totalUnidades > 0 && (
              <span className={styles.contador} aria-label={`${totalUnidades} productos en el carrito`}>
                {totalUnidades}
              </span>
            )}
          </NavLink>
        </li>
        {esAdmin && (
          <li><NavLink to="/admin" className={claseLink}>Admin</NavLink></li>
        )}
        {usuario ? (
          <li>
            <button type="button" onClick={manejarSalir} className={styles.salir}>
              Salir
            </button>
          </li>
        ) : (
          <li><NavLink to="/login" className={claseLink}>Ingresar</NavLink></li>
        )}
      </ul>
    </nav>
  )
}

export default NavBar