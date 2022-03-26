import React, { useEffect, useState } from 'react';
import Cars from '../Cars/Cars';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {
    const [cars, setCars] = useState([])
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('cars.json')
        .then(res=> res.json())
        .then(data => setCars(data))

    },[])
    const handleAddToCart = (car) => {
        console.log(car)

    const newCart =[...cart, car]
    setCart(newCart);

    }
    const randoms = Math.floor(Math.random() * cart.length);
    const chooseBtn =(cart) =>{
        console.log(randoms,cart[randoms])
        const newBox = ['',cart]
    setCart(newBox)
    }
    return (
        <div className='shop-container'>
            <div className="car-container">
            {
            cars.map(car => <Cars
            key={car.id}
            car={car}
            handleAddToCart ={handleAddToCart}
            ></Cars>)
            }
            </div>


            <div className="cart-container">
            <Cart cart={cart}
            chooseBtn={chooseBtn}
            randoms={randoms}
                ></Cart>
              
            </div>

        </div>
    )
};

export default Shop;