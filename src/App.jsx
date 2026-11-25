import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import RutaProtegida from './components/auth/RutaProtegida'
import Home from './pages/Home'
import ItemListContainer from './components/products/ItemListContainer'
import ItemDetailContainer from './components/products/ItemDetailContainer'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Registro from './pages/Registro'
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/producto/:id" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route
          path="/admin"
          element={
            <RutaProtegida soloAdmin>
              <Admin />
            </RutaProtegida>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App