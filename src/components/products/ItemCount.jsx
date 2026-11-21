import { useState } from 'react'
import styles from './ItemCount.module.css'

function ItemCount({ stock, inicial = 1, onAdd }) {
  const [cantidad, setCantidad] = useState(inicial)

  const restar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1)
  }

  const sumar = () => {
    if (cantidad < stock) setCantidad(cantidad + 1)
  }

  return (
    <div className={styles.contador}>
      <div className={styles.controles}>
        <button type="button" onClick={restar} disabled={cantidad <= 1} aria-label="Restar una unidad">−</button>
        <span className={styles.cantidad} aria-live="polite">{cantidad}</span>
        <button type="button" onClick={sumar} disabled={cantidad >= stock} aria-label="Sumar una unidad">+</button>
      </div>
      <button type="button" className="boton" onClick={() => onAdd(cantidad)}>
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount