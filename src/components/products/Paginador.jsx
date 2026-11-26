import styles from './Paginador.module.css'

function Paginador({ paginaActual, totalPaginas, onCambiar }) {
  const paginas = Array.from({ length: totalPaginas }, (_, indice) => indice + 1)

  return (
    <nav className={styles.paginador} aria-label="Paginación de productos">
      <ul className={styles.lista}>
        <li>
          <button
            type="button"
            onClick={() => onCambiar(paginaActual - 1)}
            disabled={paginaActual === 1}
            aria-label="Página anterior"
          >
            ‹
          </button>
        </li>

        {paginas.map((numero) => (
          <li key={numero}>
            <button
              type="button"
              onClick={() => onCambiar(numero)}
              className={numero === paginaActual ? styles.actual : undefined}
              aria-current={numero === paginaActual ? 'page' : undefined}
              aria-label={`Página ${numero}`}
            >
              {numero}
            </button>
          </li>
        ))}

        <li>
          <button
            type="button"
            onClick={() => onCambiar(paginaActual + 1)}
            disabled={paginaActual === totalPaginas}
            aria-label="Página siguiente"
          >
            ›
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Paginador