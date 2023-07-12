import React from 'react'
import '../styles/Products.css'
import ProductsButton from './ProductsButton';

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
                        <div >
                            <p>{product.title.substring(0, 20)}...</p>
                            <span>{product.price} $</span>

                            <div className="buttons">
                                <ProductsButton product={product}/>   
                            </div>
                        </div>
                    </div>
                ))}
            </div >
        </div>
    )
}
