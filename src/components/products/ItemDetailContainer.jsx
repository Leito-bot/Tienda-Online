import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { obtenerProductoPorId } from '../../services/productos'

function DetalleProducto({ id }) {
  const [producto, setProducto] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    obtenerProductoPorId(id)
      .then((encontrado) => setProducto(encontrado))
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

function ItemDetailContainer() {
  const { id } = useParams()
  return <DetalleProducto key={id} id={id} />
}

export default ItemDetailContainer