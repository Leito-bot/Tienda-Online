import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

function NavBar() {
  const claseLink = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.activo}` : styles.link

  return (
    <nav className={styles.nav}>
      <ul className={styles.lista}>
        <li><NavLink to="/" end className={claseLink}>Inicio</NavLink></li>
        <li><NavLink to="/productos" className={claseLink}>Productos</NavLink></li>
        <li><NavLink to="/carrito" className={claseLink}>Carrito</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar