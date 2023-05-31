// src/components/ProductsPage.js

import { useState } from 'react';
import jsonData from '../data.json';

import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  // Search bar Initial state
  const [search, setSearch] = useState('');
  //Checkbox
  const [showStock, setShowStock] = useState(false);

  return (
    <div>
      <h1>IronStore</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
        showStock={showStock}
        setShowStock={setShowStock}
      />
      <ProductTable
        products={products}
        search={search}
        setSearch={setSearch}
        showStock={showStock}
      />
    </div>
  );
}

export default ProductsPage;
