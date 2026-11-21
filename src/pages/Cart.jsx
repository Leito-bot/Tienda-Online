import { Link } from 'react-router-dom'
import { useCarrito } from '../hooks/useCarrito'
import CartItem from '../components/cart/CartItem'
import styles from './Cart.module.css'

function Cart() {
  const { carrito, vaciarCarrito, totalUnidades, totalPrecio } = useCarrito()

  if (carrito.length === 0) {
    return (
      <section className="estado-vacio">
        <h2>Tu carrito</h2>
        <p>Tu carrito está vacío.</p>
        <Link to="/productos" className="boton">Ver catálogo</Link>
      </section>
    )
  }

  const manejarVaciar = () => {
    if (window.confirm('¿Seguro que querés vaciar el carrito?')) {
      vaciarCarrito()
    }
  }

  return (
    <section>
      <h2 className="titulo-seccion">Tu carrito</h2>

      <div className={styles.contenido}>
        <ul className={styles.lista}>
          {carrito.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </ul>

        <aside className={styles.resumen}>
          <h3 className={styles.tituloResumen}>Resumen</h3>
          <p className={styles.fila}>
            <span>Unidades</span>
            <span>{totalUnidades}</span>
          </p>
          <p className={`${styles.fila} ${styles.total}`}>
            <span>Total</span>
            <span>${totalPrecio.toLocaleString('es-AR')}</span>
          </p>
          <button type="button" onClick={manejarVaciar} className={styles.vaciar}>
            Vaciar carrito
          </button>
          <Link to="/productos" className={styles.seguir}>← Seguir comprando</Link>
        </aside>
      </div>
    </section>
  )
}

export default Cart