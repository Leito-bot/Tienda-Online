import { useCarrito } from '../../hooks/useCarrito'
import styles from './CartItem.module.css'

function CartItem({ id, nombre, precio, imagen, cantidad, stock }) {
  const { incrementar, decrementar, eliminarDelCarrito } = useCarrito()
  const subtotal = precio * cantidad

  return (
    <li className={styles.item}>
      <img src={imagen} alt={nombre} className={styles.imagen} />

      <div className={styles.info}>
        <h3 className={styles.nombre}>{nombre}</h3>
        <p className={styles.precio}>${precio.toLocaleString('es-AR')} c/u</p>
      </div>

      <div className={styles.controles}>
        <button
          type="button"
          onClick={() => decrementar(id)}
          disabled={cantidad <= 1}
          aria-label={`Restar una unidad de ${nombre}`}
        >
          −
        </button>
        <span className={styles.cantidad} aria-live="polite">{cantidad}</span>
        <button
          type="button"
          onClick={() => incrementar(id)}
          disabled={cantidad >= stock}
          aria-label={`Sumar una unidad de ${nombre}`}
        >
          +
        </button>
      </div>

      <p className={styles.subtotal}>${subtotal.toLocaleString('es-AR')}</p>

      <button
        type="button"
        onClick={() => eliminarDelCarrito(id)}
        className={styles.eliminar}
        aria-label={`Eliminar ${nombre} del carrito`}
      >
        ✕
      </button>
    </li>
  )
}

export default CartItem