import React, { useMemo, useState } from 'react';
import { getProducts } from './api/products';
import { ProductsList } from './components/ProductsList';

import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

function App() {
  const [products, setProducts] = useState([]);

  useMemo(() => (
    getProducts(15)
      .then(actualProducts => setProducts(actualProducts))
  ), []);

  return (
    <div className="App">
      <ProductsList products={products} />
    </div>
  );
}

export default App;
