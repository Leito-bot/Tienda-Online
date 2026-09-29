import Item from './Item'
import styles from './ItemList.module.css'

function ItemList({ productos }) {
  return (
    <div className={styles.grilla}>
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