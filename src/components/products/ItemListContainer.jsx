import { useEffect, useMemo, useState } from 'react'
import ItemList from './ItemList'
import Buscador from './Buscador'
import Paginador from './Paginador'
import { obtenerProductos } from '../../services/productos'
import { normalizar } from '../../utils/texto'
import styles from './ItemListContainer.module.css'

const PRODUCTOS_POR_PAGINA = 6

function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [busqueda, setBusqueda] = useState('')
  const [pagina, setPagina] = useState(1)

  useEffect(() => {
    obtenerProductos()
      .then((datos) => setProductos(datos))
      .catch((err) => {
        console.error('Error al cargar productos:', err)
        setError('No pudimos cargar los productos. Intentá de nuevo más tarde.')
      })
      .finally(() => setCargando(false))
  }, [])

  const filtrados = useMemo(() => {
    const termino = normalizar(busqueda)
    if (!termino) return productos
    return productos.filter((producto) =>
      normalizar(`${producto.nombre} ${producto.categoria} ${producto.descripcion}`).includes(termino)
    )
  }, [productos, busqueda])

  const totalPaginas = Math.max(1, Math.ceil(filtrados.length / PRODUCTOS_POR_PAGINA))
  const paginaActual = Math.min(pagina, totalPaginas)
  const inicio = (paginaActual - 1) * PRODUCTOS_POR_PAGINA
  const visibles = filtrados.slice(inicio, inicio + PRODUCTOS_POR_PAGINA)

  const manejarBusqueda = (valor) => {
    setBusqueda(valor)
    setPagina(1)
  }

  const cambiarPagina = (numero) => {
    setPagina(numero)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (cargando) return <p className="mensaje">Cargando productos...</p>
  if (error) return <p className="mensaje">{error}</p>

  return (
    <section>
      <h2 className="titulo-seccion">Catálogo de productos</h2>

      <Buscador valor={busqueda} onCambiar={manejarBusqueda} />

      <p className={styles.resultado} aria-live="polite">
        {filtrados.length === 1 ? '1 producto' : `${filtrados.length} productos`}
      </p>

      {filtrados.length === 0 ? (
        <p className="mensaje">
          {busqueda
            ? `No encontramos productos para "${busqueda}".`
            : 'Todavía no hay productos cargados.'}
        </p>
      ) : (
        <>
          <ItemList productos={visibles} />
          {totalPaginas > 1 && (
            <Paginador
              paginaActual={paginaActual}
              totalPaginas={totalPaginas}
              onCambiar={cambiarPagina}
            />
          )}
        </>
      )}
    </section>
  )
}

export default ItemListContainer