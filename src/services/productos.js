import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from 'firebase/firestore'
import { db } from '../firebase/config'

const productosRef = collection(db, 'productos')

export async function obtenerProductos() {
  const snapshot = await getDocs(query(productosRef, orderBy('nombre')))
  return snapshot.docs.map((documento) => ({ id: documento.id, ...documento.data() }))
}

export async function obtenerProductoPorId(id) {
  const snapshot = await getDoc(doc(db, 'productos', id))
  if (!snapshot.exists()) return null
  return { id: snapshot.id, ...snapshot.data() }
}

export async function crearProducto(datos) {
  const referencia = await addDoc(productosRef, datos)
  return referencia.id
}

export async function actualizarProducto(id, datos) {
  await updateDoc(doc(db, 'productos', id), datos)
}

export async function eliminarProducto(id) {
  await deleteDoc(doc(db, 'productos', id))
}