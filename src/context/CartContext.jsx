import React, { useState, createContext } from 'react';


export const CartContext = createContext();

export const CartProvider = ({ children}) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {  
   
      console.log(product.id)    
 
  };



  return (
    <CartContext.Provider value={{ cart, addToCart}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
