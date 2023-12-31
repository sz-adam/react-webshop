import React, { useState, createContext, useEffect } from 'react';


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }

  }, []);

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
    const plus = cart.map(item => {
      if (item.id === product.id) {
        return {
        ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCart(plus);
  }

  const minusQuantity =(product) =>{
    const minus = cart.map(item => {
      if (item.id === product.id) {
        return {
        ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setCart(minus);
  }




  return (
    <CartContext.Provider value={{ cart, addToCart,removeCart,plusQuantity,minusQuantity}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
