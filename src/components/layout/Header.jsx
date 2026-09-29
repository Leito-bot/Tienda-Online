import foto from '../../assets/imagenes/logo.png'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <img src={foto} alt="ProTecno" className={styles.logo} />
      <h1 className={styles.titulo}>Venta Mayorista</h1>
    </header>
  )
}

export default Header