import React from 'react';

const Cart = (props) => {
    const {cart} =props;

    return (
        <div>
            <p>{cart.length}</p>
        </div>
    );
};

export default Cart;