import { Routes, Route } from 'react-router-dom';

import Products from './components/Products';
import Welcome from './components/Welcome';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
