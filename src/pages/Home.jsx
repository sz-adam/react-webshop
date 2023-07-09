import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Products from '../components/Products';
import Category from '../components/Category';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const categories = ["all", ...new Set(products.map(product => product.category))]; 

  const filteredProducts = selectedCategory === "all" ? products : products.filter(product => product.category === selectedCategory);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
    <Category categories={categories} selectedCategory={selectedCategory} handleCategoryClick={handleCategoryClick}/>

      <Products products={filteredProducts} />
    </div>
  );
}
