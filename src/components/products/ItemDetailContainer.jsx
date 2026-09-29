import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
  const { id } = useParams()
  const [producto, setProducto] = useState(null)
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    setCargando(true)

    fetch('/productos.json')
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error(`Error HTTP: ${respuesta.status}`)
        }
        return respuesta.json()
      })
      .then((datos) => {
        const encontrado = datos.find((item) => item.id === Number(id))
        setProducto(encontrado || null)
      })
      .catch((error) => console.error('Error al cargar el producto:', error))
      .finally(() => setCargando(false))
  }, [id])

  if (cargando) return <p>Cargando producto...</p>
  if (!producto) return <p>Producto no encontrado.</p>

  return <ItemDetail {...producto} />
}

export default ItemDetailContainer