import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { useCarrito } from '../../hooks/useCarrito'
import styles from './ItemDetail.module.css'

function ItemDetail({ id, nombre, precio, imagen, descripcion, categoria, stock }) {
  const { agregarAlCarrito } = useCarrito()
  const [agregado, setAgregado] = useState(0)

  const manejarAgregar = (cantidad) => {
    agregarAlCarrito({ id, nombre, precio, imagen, stock }, cantidad)
    setAgregado(cantidad)
  }

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

        {agregado > 0 ? (
          <div className={styles.confirmacion}>
            <p role="status">Agregaste {agregado} unidad(es) al carrito.</p>
            <Link to="/carrito" className="boton">Ir al carrito</Link>
          </div>
        ) : (
          stock > 0 && <ItemCount stock={stock} onAdd={manejarAgregar} />
        )}

        <Link to="/productos" className={styles.volver}>← Volver al catálogo</Link>
      </div>
    </article>
  )
}

export default ItemDetail