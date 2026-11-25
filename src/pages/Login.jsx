import { useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { traducirErrorAuth } from '../firebase/erroresAuth'
import styles from './Auth.module.css'

function Login() {
  const { usuario, login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const destino = location.state?.desde ?? '/'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [enviando, setEnviando] = useState(false)

  if (usuario) return <Navigate to={destino} replace />

  const manejarEnvio = async (evento) => {
    evento.preventDefault()
    setError(null)
    setEnviando(true)
    try {
      await login(email.trim(), password)
      navigate(destino, { replace: true })
    } catch (err) {
      setError(traducirErrorAuth(err))
    } finally {
      setEnviando(false)
    }
  }

  return (
    <section className={styles.contenedor}>
      <form className={styles.formulario} onSubmit={manejarEnvio} noValidate>
        <h2 className={styles.titulo}>Ingresar</h2>

        <label htmlFor="login-email">Email</label>
        <input
          id="login-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="login-password">Contraseña</label>
        <input
          id="login-password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className={styles.error} role="alert">{error}</p>}

        <button type="submit" className="boton" disabled={enviando || !email || !password}>
          {enviando ? 'Ingresando...' : 'Ingresar'}
        </button>

        <p className={styles.alternativa}>
          ¿No tenés cuenta? <Link to="/registro">Registrate</Link>
        </p>
      </form>
    </section>
  )
}

export default Login