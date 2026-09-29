import Item from './Item'

function ItemList({ productos }) {
  return (
    <div>
      {productos.map((producto) => (
        <Item
          key={producto.id}
          id={producto.id}
          nombre={producto.nombre}
          precio={producto.precio}
          imagen={producto.imagen}
        />
      ))}
    </div>
  )
}

export default ItemList