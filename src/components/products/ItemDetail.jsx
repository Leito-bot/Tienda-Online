import { Link } from 'react-router-dom'

function ItemDetail({ nombre, precio, imagen, descripcion, categoria, stock }) {
  return (
    <article>
      <img src={imagen} alt={nombre} />
      <div>
        <p>{categoria}</p>
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
        <p>${precio.toLocaleString('es-AR')}</p>
        <p>{stock > 0 ? `Stock disponible: ${stock} unidades` : 'Sin stock'}</p>
        <Link to="/productos">← Volver al catálogo</Link>
      </div>
    </article>
  )
}

export default ItemDetail