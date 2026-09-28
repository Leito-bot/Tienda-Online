import PersonCard from "../common/PersonCard"

const equipo = [
    {id:1, nombre: "Leonel Rosso", rol:"Desarrollador"},
    {id:2, nombre: "Priscila Hernandez", rol:"Arquitecta"},
    {id:3, nombre: "Nahuel Florentin", rol:"Tecnico en sistemas"}
]

function Footer() {

  return (
    <footer>
        {equipo.map((persona) => (
            <PersonCard key={persona.id} nombre={persona.nombre} rol={persona.rol} />
        ))}
        <p>© 2026 ProTecno</p>
    </footer>
  )
}

export default Footer