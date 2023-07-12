import React, { useContext } from 'react'
import '../styles/ProductsButton.css'
import { FaCartArrowDown } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function ProductsButton({ product }) {
    const { addToCart } = useContext(CartContext);
    return (
        <div>
            <button onClick={() => addToCart(product)}><FaCartArrowDown /></button>
            <button > <Link className='productLink' to={`/details/${product.id}`} ><FaEye /></Link></button>
        </div>
    )
}
