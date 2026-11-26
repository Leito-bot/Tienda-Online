import styles from './Buscador.module.css'

function Buscador({ valor, onCambiar }) {
  return (
    <div className={styles.buscador} role="search">
      <label htmlFor="buscador-productos" className={styles.etiqueta}>
        Buscar productos
      </label>
      <input
        id="buscador-productos"
        type="search"
        placeholder="Buscar por nombre, categoría o descripción..."
        value={valor}
        onChange={(e) => onCambiar(e.target.value)}
        autoComplete="off"
      />
    </div>
  )
}

export default Buscador