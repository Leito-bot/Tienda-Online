import styles from './PersonCard.module.css'

function PersonCard({ nombre, rol }) {
  return (
    <article className={styles.tarjeta}>
      <span className={styles.avatar} aria-hidden="true">
        {nombre.charAt(0)}
      </span>
      <h4 className={styles.nombre}>{nombre}</h4>
      <p className={styles.rol}>{rol}</p>
    </article>
  )
}

export default PersonCard