import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart,randoms} =props;

    return (
        <div className='cart'>
            <h2>Select Your Car</h2>
            {
             cart.map(cart => <p>{cart}</p>)
            
             }
             <p>{cart[randoms]}</p>
             
            <button onClick={() => props.chooseBtn(props.cart)} className='btn-one'>Choose One</button><br/>
            <button className='btn-two'>Choose Again</button>
        </div>
    );
};

export default Cart;