import React, { useContext } from 'react'
import '../styles/Products.css'
import { FaCartArrowDown } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

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
                        <div >
                            <p>{product.title.substring(0, 20)}...</p>
                            <span>{product.price} $</span>

                            <div className="buttons">
                                <button onClick={()=>addToCart(product)}><FaCartArrowDown /></button>
                                <button > <Link className='productLink' to={`/details/${product.id}`} ><FaEye /></Link></button>
                               
                            </div>
                        </div>

                    </div>
                ))}

            </div >
        </div>
    )
}
