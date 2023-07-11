import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import '../styles/Cart.css'
import { AiFillMinusCircle } from 'react-icons/ai'
import { AiFillPlusCircle } from 'react-icons/ai'
import { AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import CartButtons from '../components/CartButtons';

export default function Cart() {
  const { cart, removeCart, plusQuantity, minusQuantity } = useContext(CartContext);
  return (
    <div className='cartContainer'>
      {cart.length === 0 && <h2>You haven't bought anything yet! <Link to="/">
        Come on </Link></h2>}
      {cart.length !== 0 && (
        <div>
          {cart.map((cartItem, index) => (
            <div key={index} className='cartItem'>
              <div className='cartImage'>
                <img
                  src={cartItem.image}
                  alt={cartItem.name}
                />
              </div>
              <div className='cartTitle'>
                <p>{cartItem.title.substring(0, 20)}...</p>
                <p>${cartItem.price}</p>
                <div className='cartButtons'>
                  <button className='cartButton' disabled={cartItem.quantity === 1} onClick={() => minusQuantity(cartItem)}><AiFillMinusCircle /></button>
                  <span className='cartSpan'>{cartItem.quantity}</span>
                  <button className='cartButton' onClick={() => plusQuantity(cartItem)}><AiFillPlusCircle /></button>
                </div>
                <button className='cartDelete' onClick={() => removeCart(cartItem)}><AiFillDelete /></button>

              </div>
            </div>
          ))}
          <div>
          </div>
          <p className='fullPrice'>Full Price: <span>{cart.reduce((total, item) => total + (item.quantity * item.price), 0).toFixed(2)}</span> </p>
          <div className='shoppingPayment'>
            <CartButtons />
          </div>
        </div>


      )}



    </div>
  )
}
