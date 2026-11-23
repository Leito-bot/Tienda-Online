import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { obtenerProductos } from '../../services/productos'

function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    obtenerProductos()
      .then((datos) => setProductos(datos))
      .catch((err) => {
        console.error('Error al cargar productos:', err)
        setError('No pudimos cargar los productos. Intentá de nuevo más tarde.')
      })
      .finally(() => setCargando(false))
  }, [])

  return (
    <section>
      <h2 className="titulo-seccion">Catálogo de productos</h2>
      {cargando ? (
        <p className="mensaje">Cargando productos...</p>
      ) : error ? (
        <p className="mensaje">{error}</p>
      ) : productos.length === 0 ? (
        <p className="mensaje">Todavía no hay productos cargados.</p>
      ) : (
        <ItemList productos={productos} />
      )}
    </section>
  )
}

export default ItemListContainer