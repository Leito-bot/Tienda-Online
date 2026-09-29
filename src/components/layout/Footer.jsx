import PersonCard from '../common/PersonCard'
import styles from './Footer.module.css'

const equipo = [
  { id: 1, nombre: 'Leonel Rosso', rol: 'Desarrollador' },
  { id: 2, nombre: 'Priscila Hernandez', rol: 'Arquitecta' },
  { id: 3, nombre: 'Nahuel Florentin', rol: 'Técnico en sistemas' },
]

function Footer() {
  const manejarSuscripcion = (evento) => {
    evento.preventDefault()
    alert('¡Gracias por suscribirte! Pronto vas a recibir nuestras ofertas.')
    evento.target.reset()
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.columnas}>
        <section>
          <h3 className={styles.titulo}>Sucursales</h3>
          <ul className={styles.lista}>
            <li>Monte Grande — Lunes a sábados de 08:00 a 17:00 hs</li>
            <li>Lomas de Zamora — Lunes a sábados de 08:00 a 17:00 hs</li>
          </ul>
        </section>

        <section>
          <h3 className={styles.titulo}>Contacto</h3>
          <address className={styles.contacto}>
            <a href="mailto:ventas@protecno.com">ventas@protecno.com</a>
            <a href="tel:+541124817992">11 2481-7992</a>
          </address>
        </section>

        <section>
          <h3 className={styles.titulo}>Newsletter</h3>
          <form className={styles.form} onSubmit={manejarSuscripcion}>
            <label htmlFor="newsletter-email">Recibí nuestras ofertas por email</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="tuemail@ejemplo.com"
              required
            />
            <button type="submit">Suscribirme</button>
          </form>
        </section>
      </div>

      <section className={styles.equipo}>
        <h3 className={styles.titulo}>Nuestro equipo</h3>
        <div className={styles.tarjetas}>
          {equipo.map((persona) => (
            <PersonCard key={persona.id} nombre={persona.nombre} rol={persona.rol} />
          ))}
        </div>
      </section>

      <section className={styles.legal}>
        <a href="#">Política de privacidad</a>
        <a href="#">Términos y condiciones</a>
        <p>© 2026 ProTecno. Todos los derechos reservados.</p>
      </section>
    </footer>
  )
}

export default Footer