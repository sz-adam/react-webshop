import React, { useState, createContext } from 'react';


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart)




  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
       
      });

      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      console.log(product.quantity)
    }
  };

  const removeCart = (product) => {
    const updatedCart = cart.filter(item => item.id!== product.id);
    setCart(updatedCart);
  };

  const plusQuantity =(product) =>{
   
  }

  const minusQuantity =(product) =>{
   
  }




  return (
    <CartContext.Provider value={{ cart, addToCart,removeCart,plusQuantity,}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
