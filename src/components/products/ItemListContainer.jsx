import Item from './Item'

function ItemListContainer() {
  return (
    <section>
      <h2>Catálogo de productos</h2>
      <Item id={1} nombre="Teclado Logitech K120" precio={15000} imagen="/img/productos/teclado.jpg" />
    </section>
  )
}

export default ItemListContainer