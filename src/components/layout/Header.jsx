/*Todo componente de React tiene siempre 4 partes, en este orden: */

import foto from '../../assets/imagenes/logo.png'

function Header() {

  return (
    <header>
      <img src={foto} alt="ProTecno" />
      <h1>Venta Mayorista</h1>
    </header>
  )
}

export default Header