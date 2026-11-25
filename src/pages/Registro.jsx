import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { traducirErrorAuth } from '../firebase/erroresAuth'
import styles from './Auth.module.css'

function Registro() {
  const { usuario, registrar } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmacion, setConfirmacion] = useState('')
  const [error, setError] = useState(null)
  const [enviando, setEnviando] = useState(false)

  if (usuario) return <Navigate to="/" replace />

  const validar = () => {
    if (!email.trim()) return 'El email es obligatorio.'
    if (password.length < 6) return 'La contraseña debe tener al menos 6 caracteres.'
    if (password !== confirmacion) return 'Las contraseñas no coinciden.'
    return null
  }

  const manejarEnvio = async (evento) => {
    evento.preventDefault()
    const mensajeError = validar()
    if (mensajeError) {
      setError(mensajeError)
      return
    }

    setError(null)
    setEnviando(true)
    try {
      await registrar(email.trim(), password)
      navigate('/', { replace: true })
    } catch (err) {
      setError(traducirErrorAuth(err))
    } finally {
      setEnviando(false)
    }
  }

  return (
    <section className={styles.contenedor}>
      <form className={styles.formulario} onSubmit={manejarEnvio} noValidate>
        <h2 className={styles.titulo}>Crear cuenta</h2>

        <label htmlFor="registro-email">Email</label>
        <input
          id="registro-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="registro-password">Contraseña (mínimo 6 caracteres)</label>
        <input
          id="registro-password"
          type="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="registro-confirmacion">Repetí la contraseña</label>
        <input
          id="registro-confirmacion"
          type="password"
          autoComplete="new-password"
          value={confirmacion}
          onChange={(e) => setConfirmacion(e.target.value)}
          required
        />

        {error && <p className={styles.error} role="alert">{error}</p>}

        <button type="submit" className="boton" disabled={enviando}>
          {enviando ? 'Creando cuenta...' : 'Crear cuenta'}
        </button>

        <p className={styles.alternativa}>
          ¿Ya tenés cuenta? <Link to="/login">Ingresá</Link>
        </p>
      </form>
    </section>
  )
}

export default Registro