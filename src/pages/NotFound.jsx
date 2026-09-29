import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="estado-vacio">
      <h2>Página inexistente</h2>
      <p>La página que buscás no existe o fue movida.</p>
      <Link to="/" className="boton">Volver al inicio</Link>
    </section>
  )
}

export default NotFound