import { Link } from 'react-router-dom'

function Cart() {
  return (
    <section>
      <h2>Tu carrito</h2>
      <p>Tu carrito está vacío.</p>
      <Link to="/productos">Ver catálogo</Link>
    </section>
  )
}

export default Cart