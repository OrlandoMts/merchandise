import React from 'react';
import '../styles/components/Products.css';

const Product = ({ product, handleAddToCart }) => {

    const { image, title, price, description } = product;
    
    return (
        <div className='Products-item'>
            <img src={image} alt={title} />
            <div className="Products-item-info">
                <h2>
                    {title} <span>$ {price}</span>
                </h2>
                <p>{description}</p>
            </div>
            <button type="button" onClick={ () => handleAddToCart(product)}>Comprar</button>
        </div>
    )
}

export { Product }
