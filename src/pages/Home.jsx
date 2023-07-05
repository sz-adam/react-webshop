import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Products from '../components/Products';

export default function Home() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/")
      .then(response => {
        setProducts(response.data)

      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  return (
    <div>
      <Products products={products} />
    </div>
  )
}
