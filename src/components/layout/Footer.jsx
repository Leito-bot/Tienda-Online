import PersonCard from "../common/PersonCard"

const equipo = [
    {id:1, nombre: "Leonel Rosso", rol:"Desarrollador"},
    {id:2, nombre: "Priscila Hernandez", rol:"Arquitecta"},
    {id:3, nombre: "Nahuel Florentin", rol:"Tecnico en sistemas"}
]

function Footer() {

  return (
    <footer>
        <section>
            <h3>Sucursales</h3>
            <ul>
                <li>Monte Grande / Lunes a Sabados de 08:00 a 17:00hs</li>
                <li>Lomas de Zamora / Lunes a Sabados de 08:00 a 17:00hs</li>
            </ul>
        </section>
        <section>
            <h3>Contacto</h3>
            <address>
                <a href="mailto:ventas@protecno">ventas@protecno</a>
                <a href="tel:+541124817992">1124817992</a>
            </address>
        </section>
        <section>
            <h3>Newsletter</h3>
            <form>
                <label htmlFor="buscar">Recibi nuestras ofertas</label>
                <input id="buscar" type="email" placeholder="ejemplo@gmail.com" required/>
                <button type="submit">Suscribete</button>
            </form>
        </section>
        {equipo.map((persona) => (
            <PersonCard key={persona.id} nombre={persona.nombre} rol={persona.rol} />
        ))}
        <section>
            <a href="#">Política de privacidad</a>
            <a href="#">Términos y condiciones</a>
            <p>© 2026 ProTecno</p>
        </section>

    </footer>
    
  )
}

export default Footer