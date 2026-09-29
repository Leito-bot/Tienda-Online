import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
  return (
    <section className={styles.hero}>
      <h2 className={styles.titulo}>Bienvenidos a su proveedor de confianza</h2>
      <p className={styles.texto}>
        En ProTecno vendemos insumos informáticos al por mayor para comercios y empresas.
      </p>
      <Link to="/productos" className="boton">Ver catálogo</Link>
    </section>
  )
}

export default Home