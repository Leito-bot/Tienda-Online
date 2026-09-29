import { Link } from 'react-router-dom'
import styles from './Item.module.css'

function Item({ id, nombre, precio, imagen }) {
  return (
    <article className={styles.tarjeta}>
      <img src={imagen} alt={nombre} loading="lazy" className={styles.imagen} />
      <div className={styles.info}>
        <h3 className={styles.nombre}>{nombre}</h3>
        <p className={styles.precio}>${precio.toLocaleString('es-AR')}</p>
        <Link to={`/producto/${id}`} className={`boton ${styles.boton}`}>
          Ver detalle
        </Link>
      </div>
    </article>
  )
}

export default Item