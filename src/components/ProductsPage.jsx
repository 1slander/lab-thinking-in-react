// src/components/ProductsPage.js

import { useState } from 'react';
import jsonData from '../data.json';

import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  // Search bar Initial state
  const [search, setSearch] = useState('');

  return (
    <div>
      <h1>IronStore</h1>

      <SearchBar search={search} setSearch={setSearch} />
      <ProductTable products={products} search={search} setSearch={setSearch} />
    </div>
  );
}

export default ProductsPage;