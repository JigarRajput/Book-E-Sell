import React, { Component } from 'react';
import '../index.css';
import Searchbox from './Searchbox';
import Footer from './Footer';
import Header from './Header';
import CartCard from './CartCard';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import store from '../redux/store';
import { priceIncreaseAction } from '../redux/actions/totalPriceAction';

const Cart = () => {

    const dispatch = useDispatch
    const items = useSelector((state) => state.cart.cartItems)
    var total_price = useSelector((state) => state.cart.total_price)
    console.log(total_price)

    //total price calculation
    //var total_price = 0
    items.forEach(function (book) {
        // dispatch(priceIncreaseAction(book.price))
        //total_price = total_price + book.price - book.price * (book.discount / 100);


    })

    return (
        <div>
            <Header />
            <div className='cart-page'>

                <h1> Cart Page </h1>
                <div className='status-container'>
                    <div className='shopping-status'>
                        <div className='bag-status-left ms-4'>
                            <p id='my-bag'>Products: </p>
                            <label id='no-of-items'>{items.length}</label>
                        </div>
                        <div className='total-bag-price'>
                            <label id="bag-price">{total_price}</label>
                            <p className='nett-price'>Total Price: </p>

                        </div>
                    </div>
                </div>

                <div className='main-layout-container mb-5'>
                    <div className='cart-card-container'>
                        {items.map((book) => <CartCard book={book} />)}
                        {/* <CartCard books={items} /> */}
                    </div>
                </div>

                <div className='place-order-container'>
                    <div className='place-order-wrapper'>
                        <button className='btn btn-danger ms-4'>Place Order</button>
                    </div>
                </div>

            </div>
            <Footer />
        </div>

    )
};


export default Cart;