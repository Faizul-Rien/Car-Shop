import React from 'react';
import './Cars.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cars = (props) => {
const {name,img,origin,price} = props.car;

    return (
        <div className='car'>
           <img src={img} alt="" /> 
           <div className='p-container'>
           <p>Name: {name}</p>
           <p>Origin: {origin}</p>
           <p>Price: ${price}</p>
           </div>
           <button onClick={() => props.handleAddToCart(props.car.name)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Cars;