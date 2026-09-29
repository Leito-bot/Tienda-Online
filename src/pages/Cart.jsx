import { Link } from 'react-router-dom'

function Cart() {
  return (
    <section className="estado-vacio">
      <h2>Tu carrito</h2>
      <p>Tu carrito está vacío.</p>
      <Link to="/productos" className="boton">Ver catálogo</Link>
    </section>
  )
}

export default Cart