import { useState, useEffect } from 'react'
import ItemList from './ItemList'

function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    fetch('/productos.json')
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error(`Error HTTP: ${respuesta.status}`)
        }
        return respuesta.json()
      })
      .then((datos) => setProductos(datos))
      .catch((error) => console.error('Error al cargar productos:', error))
      .finally(() => setCargando(false))
  }, [])

  return (
    <section>
      <h2 className="titulo-seccion">Catálogo de productos</h2>
      {cargando ? (
        <p className="mensaje">Cargando productos...</p>
      ) : (
        <ItemList productos={productos} />
      )}
    </section>
  )
}

export default ItemListContainer