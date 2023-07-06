import React, { useContext } from 'react'
import '../styles/Products.css'
import { FaCartArrowDown } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'
import { CartContext } from '../context/CartContext';

export default function Products({ products }) {
    const {cart, addToCart } = useContext(CartContext);

   


    return (
        <div>
            <div className="productsContainer">
                {products.map((product) => (
                    <div key={product.id} className="products">
                        <div className="products_img">
                            <img
                                src={product.image}
                                alt={product.name}
                            />
                        </div>
                        <div className="title">

                            <p>{product.title.substring(0, 20)}...</p>
                            <span>{product.price} $</span>

                            <div className="buttons">
                                <button onClick={()=>addToCart(product)}><FaCartArrowDown /></button>
                                <button ><FaEye /></button>
                            </div>
                        </div>

                    </div>
                ))}

            </div >
        </div>
    )
}
