import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
  const { id } = useParams()
  const [producto, setProducto] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setCargando(true)
    setError(null)

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
      .catch((err) => {
        console.error('Error al cargar el producto:', err)
        setError('No pudimos cargar el producto. Intentá de nuevo más tarde.')
      })
      .finally(() => setCargando(false))
  }, [id])

  if (cargando) return <p className="mensaje">Cargando producto...</p>
  if (error) return <p className="mensaje">{error}</p>
  if (!producto) return <p className="mensaje">Producto no encontrado.</p>

  return <ItemDetail {...producto} />
}

export default ItemDetailContainer