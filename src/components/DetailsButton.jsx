import React, { useContext } from 'react'
import '../styles/DetailsButton.css'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BsFillCartCheckFill } from 'react-icons/bs'

export default function DetailsButton({ details }) {
    const { addToCart } = useContext(CartContext);
    return (
        <div>
            <div className="detailsButtons">
                <button className="detailsCartBtn" onClick={() => addToCart(details)}>
                    <span className="IconContainer">
                        <BsFillCartCheckFill size={16} className="cart" />
                    </span>
                    <p className="text">Add to Cart</p>
                </button>
                <button className="detailsCartBtn">
                    <span className="IconContainer">
                        <AiOutlineArrowLeft size={16} className="cart" />
                    </span>
                    <p>
                        <Link className="detailsButton" to={'/'}>
                            Home
                        </Link>
                    </p>
                </button>
            </div>
        </div>
    )
}


