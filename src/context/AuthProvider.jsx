import { useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { auth } from '../firebase/config'
import { AuthContext } from './AuthContext'

const ADMIN_EMAIL = 'admin@gmail.com'

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null)
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const desuscribir = onAuthStateChanged(auth, (usuarioActual) => {
      setUsuario(usuarioActual)
      setCargando(false)
    })
    return desuscribir
  }, [])

  const login = (email, password) => signInWithEmailAndPassword(auth, email, password)
  const registrar = (email, password) => createUserWithEmailAndPassword(auth, email, password)
  const logout = () => signOut(auth)

  const esAdmin = usuario?.email === ADMIN_EMAIL

  const valor = { usuario, cargando, esAdmin, login, registrar, logout }

  return <AuthContext.Provider value={valor}>{children}</AuthContext.Provider>
}