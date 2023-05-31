import { useState } from 'react';

export const SearchBar = ({ search, setSearch, setShowStock }) => {
  //Grab the searchbar value
  const filterHandler = (e) => {
    setSearch(e.target.value);
  };

  const checkHandler = (e) => {
    setShowStock(e.target.checked);
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
      <br />
      <input type="checkbox" onChange={checkHandler} />
      <span>Only show products in stock</span>
    </div>
  );
};
