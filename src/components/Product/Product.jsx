import React from 'react';
import './Product.css';
// Font Awesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCartShopping } from '@fortawesome/free-solid-svg-icons'

                                                         
const Product = (props) => {
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className='product'>
            <div className='image'>
                <img src={img} alt="" />                             
            </div>
            <div className='content'>
                <h4 className='product-name'>{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - order now</small></p>
                <button 
                className='addBtn'
                onClick={() => props.handleAddProduct(props.product)}
                ><FontAwesomeIcon icon={faCartShopping} />Add to cart</button>
            </div>
        </div>
    );
};

export default Product;