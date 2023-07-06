import React, { useState, createContext } from 'react';


export const CartContext = createContext();

export const CartProvider = ({ children}) => {
  const [cart, setCart] = useState([]);
 console.log(cart)
  const addToCart = (product) => {  
    setCart([...cart, { ...product, quantity: 1 }]);
  };



  return (
    <CartContext.Provider value={{ cart, addToCart}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
