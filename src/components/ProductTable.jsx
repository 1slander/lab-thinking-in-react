import { ProductRow } from './ProductRow';
import { useState } from 'react';

export const ProductTable = ({ products, search }) => {
  //Filter the products and compare them with the search bar
  const filteredProduct = products.filter((product) => {
    const searchProduct = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return searchProduct;
  });
  // We pass the filter list and add the products to the table
  const items = filteredProduct.map((item) => {
    return <ProductRow key={item.id} product={item} search={search} />;
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </table>
    </div>
  );
};
