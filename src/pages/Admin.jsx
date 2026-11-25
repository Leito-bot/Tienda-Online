import { useAuth } from '../hooks/useAuth'

function Admin() {
  const { usuario } = useAuth()

  return (
    <section>
      <h2 className="titulo-seccion">Panel de administración</h2>
      <p>Hola, {usuario.email}. Acá vas a gestionar los productos.</p>
    </section>
  )
}

export default Admin
