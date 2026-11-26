import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import RutaProtegida from './components/auth/RutaProtegida'
import Home from './pages/Home'
import ItemListContainer from './components/products/ItemListContainer'
import ItemDetailContainer from './components/products/ItemDetailContainer'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'

const Login = lazy(() => import('./pages/Login'))
const Registro = lazy(() => import('./pages/Registro'))
const Admin = lazy(() => import('./pages/Admin'))

function App() {
  return (
    <Layout>
      <Suspense fallback={<p className="mensaje">Cargando...</p>}>
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
      </Suspense>
    </Layout>
  )
}

export default App