import React from 'react'
import '../styles/Products.css'
import { FaCartArrowDown } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'

export default function Products({ products }) {

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
                                <button><FaCartArrowDown /></button>
                                <button><FaEye /></button>
                            </div>
                        </div>

                    </div>
                ))}

            </div >
        </div>
    )
}
