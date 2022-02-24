import { Routes, Route } from 'react-router-dom';

import MainHeader from './components/MainHeader';

import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="welcome" element={<Welcome />} />
          <Route index="products" element={<Products />}>
            <Route path=":id" element={<ProductDetail />}/>
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
