import { NavLink } from 'react-router-dom'
import { useCarrito } from '../../hooks/useCarrito'
import styles from './NavBar.module.css'

function NavBar() {
  const { totalUnidades } = useCarrito()

  const claseLink = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.activo}` : styles.link

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
      </ul>
    </nav>
  )
}

export default NavBar