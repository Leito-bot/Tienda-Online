import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'

const productosRef = collection(db, 'productos')

export async function obtenerProductos() {
  const snapshot = await getDocs(productosRef)
  return snapshot.docs.map((documento) => ({ id: documento.id, ...documento.data() }))
}

export async function obtenerProductoPorId(id) {
  const snapshot = await getDoc(doc(db, 'productos', id))
  if (!snapshot.exists()) return null
  return { id: snapshot.id, ...snapshot.data() }
}