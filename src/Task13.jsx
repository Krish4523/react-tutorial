import React, { useState } from "react";
import data from "./product/data.json";

export function Task13() {
  const [products, setProducts] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  // Get unique brands from the products data
  const uniqueBrands = [...new Set(data.map((product) => product.brand))];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand =
      selectedBrand === "" || product.brand === selectedBrand;
    return matchesSearchTerm && matchesBrand;
  });

  return (
    <div>
      <div className="flex gap-2 justify-center w-1/2">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="px-4 py-2 rounded-md w-full"
        />
        <select
          value={selectedBrand}
          onChange={handleBrandChange}
          className="px-4 py-2 rounded-md"
        >
          <option value="">All Brands</option>
          {uniqueBrands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.name} className="product-item">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.brand}</p>
            <p>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
