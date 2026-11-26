import { useEffect, useState } from 'react'
import ProductoForm from '../components/admin/ProductoForm'
import {
  actualizarProducto,
  crearProducto,
  eliminarProducto,
  obtenerProductos,
} from '../services/productos'
import styles from './Admin.module.css'

function Admin() {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [mensaje, setMensaje] = useState(null)
  const [editando, setEditando] = useState(null)

  useEffect(() => {
    obtenerProductos()
      .then((datos) => setProductos(datos))
      .catch((err) => {
        console.error('Error al cargar productos:', err)
        setError('No pudimos cargar los productos. Intentá de nuevo más tarde.')
      })
      .finally(() => setCargando(false))
  }, [])

  const recargar = async () => {
    const datos = await obtenerProductos()
    setProductos(datos)
  }

  const manejarGuardar = async (datos) => {
    if (editando === 'nuevo') {
      await crearProducto(datos)
      setMensaje(`Se creó "${datos.nombre}".`)
    } else {
      await actualizarProducto(editando.id, datos)
      setMensaje(`Se actualizó "${datos.nombre}".`)
    }
    setEditando(null)
    await recargar()
  }

  const manejarEliminar = async (producto) => {
    const confirmado = window.confirm(
      `¿Eliminar "${producto.nombre}"?\nEsta acción no se puede deshacer.`
    )
    if (!confirmado) return

    setError(null)
    try {
      await eliminarProducto(producto.id)
      setProductos((prev) => prev.filter((p) => p.id !== producto.id))
      setMensaje(`Se eliminó "${producto.nombre}".`)
      if (editando?.id === producto.id) setEditando(null)
    } catch (err) {
      console.error('Error al eliminar:', err.code ?? err)
      setError('No pudimos eliminar el producto. Intentá de nuevo.')
    }
  }

  const abrirFormulario = (producto) => {
    setMensaje(null)
    setEditando(producto)
  }

  return (
    <section>
      <div className={styles.encabezado}>
        <h2 className="titulo-seccion">Panel de administración</h2>
        {editando === null && (
          <button type="button" className="boton" onClick={() => abrirFormulario('nuevo')}>
            + Nuevo producto
          </button>
        )}
      </div>

      {mensaje && <p className={styles.exito} role="status">{mensaje}</p>}
      {error && <p className={styles.error} role="alert">{error}</p>}

      {editando !== null && (
        <ProductoForm
          key={editando === 'nuevo' ? 'nuevo' : editando.id}
          productoInicial={editando === 'nuevo' ? null : editando}
          onGuardar={manejarGuardar}
          onCancelar={() => setEditando(null)}
        />
      )}

      {cargando ? (
        <p className="mensaje">Cargando productos...</p>
      ) : productos.length === 0 ? (
        <p className="mensaje">Todavía no hay productos. Creá el primero.</p>
      ) : (
        <div className={styles.tablaContenedor}>
          <table className={styles.tabla}>
            <thead>
              <tr>
                <th scope="col">Producto</th>
                <th scope="col">Categoría</th>
                <th scope="col">Precio</th>
                <th scope="col">Stock</th>
                <th scope="col"><span className={styles.oculto}>Acciones</span></th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto) => (
                <tr key={producto.id}>
                  <td>
                    <div className={styles.producto}>
                      <img src={producto.imagen} alt="" className={styles.miniatura} loading="lazy" />
                      <span>{producto.nombre}</span>
                    </div>
                  </td>
                  <td>{producto.categoria}</td>
                  <td>${producto.precio.toLocaleString('es-AR')}</td>
                  <td>{producto.stock}</td>
                  <td>
                    <div className={styles.acciones}>
                      <button
                        type="button"
                        className={styles.editar}
                        onClick={() => abrirFormulario(producto)}
                        aria-label={`Editar ${producto.nombre}`}
                      >
                        Editar
                      </button>
                      <button
                        type="button"
                        className={styles.eliminar}
                        onClick={() => manejarEliminar(producto)}
                        aria-label={`Eliminar ${producto.nombre}`}
                      >
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default Admin