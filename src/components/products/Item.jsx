import { Link } from 'react-router-dom'

function Item({ id, nombre, precio, imagen }) {
  return (
    <article>
      <img src={imagen} alt={nombre} loading="lazy" />
      <h3>{nombre}</h3>
      <p>${precio}</p>
      <Link to={`/producto/${id}`}>Ver detalle</Link>
    </article>
  )
}

export default Item