import Layout from './components/layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ItemListContainer from './components/products/ItemListContainer';
import ItemDetailContainer from './components/products/ItemDetailContainer';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/producto/:id" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>    
    </Layout>
  );
}

export default App;
