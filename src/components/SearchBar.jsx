import { useState } from 'react';

export const SearchBar = ({ search, setSearch }) => {
  //Grab the searchbar value
  const filterHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <h2>Search</h2>
      <input
        type="text"
        placeholder="search products"
        onChange={filterHandler}
        value={search}
      />
      <input type="checkbox" />
      <span>Only show products in stock</span>
    </div>
  );
};
