import { useState } from 'react'
import styles from './ProductoForm.module.css'

const VACIO = {
  nombre: '',
  precio: '',
  stock: '',
  categoria: '',
  imagen: '',
  descripcion: '',
}

function validar(valores) {
  const errores = {}
  const precio = Number(valores.precio)
  const stock = Number(valores.stock)
  const imagen = valores.imagen.trim()

  if (!valores.nombre.trim()) errores.nombre = 'El nombre es obligatorio.'
  else if (valores.nombre.trim().length > 80) errores.nombre = 'Máximo 80 caracteres.'

  if (valores.precio === '' || !(precio > 0)) errores.precio = 'El precio debe ser mayor que cero.'

  if (valores.stock === '' || !Number.isInteger(stock) || stock < 0) {
    errores.stock = 'El stock debe ser un número entero mayor o igual a cero.'
  }

  if (!valores.categoria.trim()) errores.categoria = 'La categoría es obligatoria.'

  if (!imagen) errores.imagen = 'La imagen es obligatoria.'
  else if (!imagen.startsWith('/img/') && !imagen.startsWith('https://')) {
    errores.imagen = 'Usá una ruta que empiece con /img/ o una URL que empiece con https://'
  }

  if (valores.descripcion.length > 300) errores.descripcion = 'Máximo 300 caracteres.'

  return errores
}

function ProductoForm({ productoInicial, onGuardar, onCancelar }) {
  const [valores, setValores] = useState(() =>
    productoInicial
      ? {
          nombre: productoInicial.nombre ?? '',
          precio: String(productoInicial.precio ?? ''),
          stock: String(productoInicial.stock ?? ''),
          categoria: productoInicial.categoria ?? '',
          imagen: productoInicial.imagen ?? '',
          descripcion: productoInicial.descripcion ?? '',
        }
      : VACIO
  )
  const [errores, setErrores] = useState({})
  const [errorGeneral, setErrorGeneral] = useState(null)
  const [guardando, setGuardando] = useState(false)

  const esEdicion = Boolean(productoInicial)

  const manejarCambio = (evento) => {
    const { name, value } = evento.target
    setValores((prev) => ({ ...prev, [name]: value }))
  }

  const manejarEnvio = async (evento) => {
    evento.preventDefault()
    const nuevosErrores = validar(valores)
    setErrores(nuevosErrores)
    if (Object.keys(nuevosErrores).length > 0) return

    const datos = {
      nombre: valores.nombre.trim(),
      precio: Number(valores.precio),
      stock: Number(valores.stock),
      categoria: valores.categoria.trim().toLowerCase(),
      imagen: valores.imagen.trim(),
      descripcion: valores.descripcion.trim(),
    }

    setErrorGeneral(null)
    setGuardando(true)
    try {
      await onGuardar(datos)
    } catch (err) {
      console.error('Error al guardar el producto:', err.code ?? err)
      setErrorGeneral(
        err.code === 'permission-denied'
          ? 'No tenés permisos para guardar productos.'
          : 'No pudimos guardar el producto. Intentá de nuevo.'
      )
    } finally {
      setGuardando(false)
    }
  }

  const campo = (name, etiqueta, props = {}) => (
    <div className={styles.campo}>
      <label htmlFor={`producto-${name}`}>{etiqueta}</label>
      <input
        id={`producto-${name}`}
        name={name}
        value={valores[name]}
        onChange={manejarCambio}
        aria-invalid={Boolean(errores[name])}
        aria-describedby={errores[name] ? `error-${name}` : undefined}
        {...props}
      />
      {errores[name] && (
        <p id={`error-${name}`} className={styles.error}>{errores[name]}</p>
      )}
    </div>
  )

  return (
    <form className={styles.formulario} onSubmit={manejarEnvio} noValidate>
      <h3 className={styles.titulo}>{esEdicion ? 'Editar producto' : 'Nuevo producto'}</h3>

      {campo('nombre', 'Nombre *', { type: 'text', maxLength: 80 })}

      <div className={styles.fila}>
        {campo('precio', 'Precio ($) *', { type: 'number', min: '0.01', step: '0.01', inputMode: 'decimal' })}
        {campo('stock', 'Stock *', { type: 'number', min: '0', step: '1', inputMode: 'numeric' })}
      </div>

      {campo('categoria', 'Categoría *', { type: 'text', placeholder: 'teclados' })}
      {campo('imagen', 'Imagen *', { type: 'text', placeholder: '/img/productos/teclado.jpg' })}

      <div className={styles.campo}>
        <label htmlFor="producto-descripcion">Descripción</label>
        <textarea
          id="producto-descripcion"
          name="descripcion"
          rows="3"
          maxLength={300}
          value={valores.descripcion}
          onChange={manejarCambio}
          aria-invalid={Boolean(errores.descripcion)}
        />
        {errores.descripcion && <p className={styles.error}>{errores.descripcion}</p>}
      </div>

      {errorGeneral && <p className={styles.errorGeneral} role="alert">{errorGeneral}</p>}

      <div className={styles.acciones}>
        <button type="submit" className="boton" disabled={guardando}>
          {guardando ? 'Guardando...' : esEdicion ? 'Guardar cambios' : 'Crear producto'}
        </button>
        <button type="button" className={styles.cancelar} onClick={onCancelar} disabled={guardando}>
          Cancelar
        </button>
      </div>
    </form>
  )
}

export default ProductoForm