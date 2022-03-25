import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
    const [cars, setcars] = useState([])
    useEffect(()=>{
        fetch('cars.json')
        .then(res=> res.json())
        .then(data => setcars(data))

    },[])
    return (
        <div className='shop-container'>
            <div className="car-container">
            {
            cars.map()
            }
            </div>
            <div className="cart-container">

            </div>
        </div>
    );
};

export default Shop;