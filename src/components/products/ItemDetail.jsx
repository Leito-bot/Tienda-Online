import { Link } from 'react-router-dom'
import styles from './ItemDetail.module.css'

function ItemDetail({ nombre, precio, imagen, descripcion, categoria, stock }) {
  return (
    <article className={styles.detalle}>
      <img src={imagen} alt={nombre} className={styles.imagen} />
      <div className={styles.info}>
        <p className={styles.categoria}>{categoria}</p>
        <h2 className={styles.nombre}>{nombre}</h2>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio.toLocaleString('es-AR')}</p>
        <p className={stock > 0 ? styles.stock : styles.sinStock}>
          {stock > 0 ? `Stock disponible: ${stock} unidades` : 'Sin stock'}
        </p>
        <Link to="/productos" className={styles.volver}>← Volver al catálogo</Link>
      </div>
    </article>
  )
}

export default ItemDetail