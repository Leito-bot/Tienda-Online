import { useState } from 'react'
import { CarritoContext } from './CarritoContext'

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (producto, cantidad) => {
    setCarrito((prev) => {
      const existente = prev.find((item) => item.id === producto.id)

      if (existente) {
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: Math.min(item.cantidad + cantidad, item.stock) }
            : item
        )
      }

      return [...prev, { ...producto, cantidad: Math.min(cantidad, producto.stock) }]
    })
  }

  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id))
  }

  const incrementar = (id) => {
    setCarrito((prev) =>
      prev.map((item) =>
        item.id === id && item.cantidad < item.stock
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      )
    )
  }

  const decrementar = (id) => {
    setCarrito((prev) =>
      prev.map((item) =>
        item.id === id && item.cantidad > 1
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
    )
  }

  const vaciarCarrito = () => setCarrito([])

  const totalUnidades = carrito.reduce((total, item) => total + item.cantidad, 0)
  const totalPrecio = carrito.reduce((total, item) => total + item.precio * item.cantidad, 0)

  const valor = {
    carrito,
    agregarAlCarrito,
    eliminarDelCarrito,
    incrementar,
    decrementar,
    vaciarCarrito,
    totalUnidades,
    totalPrecio,
  }

  return <CarritoContext.Provider value={valor}>{children}</CarritoContext.Provider>
}