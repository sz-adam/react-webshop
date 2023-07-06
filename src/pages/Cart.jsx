import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import '../styles/Cart.css'
import { AiFillMinusCircle } from 'react-icons/ai'
import { AiFillPlusCircle } from 'react-icons/ai'
import {AiFillDelete } from 'react-icons/ai'

export default function Cart() {
  const { cart } = useContext(CartContext);
  return (
    <div className='cartContainer'>
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
              <button className='cartButton'><AiFillMinusCircle /></button>
              <span className='cartSpan'>1</span>
              <button className='cartButton'><AiFillPlusCircle /></button>
            </div>
            <button className='cartDelete'><AiFillDelete /></button>
          </div>
        </div>
      ))}
      <div>
        <p>Összesen: 232434</p>
      </div>
    </div>
  )
}
