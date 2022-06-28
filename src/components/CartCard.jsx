import React from 'react';
import '../index.css';


export default function CartCard() {
    return (
        <div className='cart-card rounded-4'>

            <div className='cart-left'>
                <img src="/images/dummy-image.png" className='cart-image' alt="Denim Jeans" />
            </div>
            <div className='cart-right'>
                <div className='cart-right_left'>
                    <label> Campus Sutra</label>
                    <p> Cart item name</p>
                    <button className='btn btn-danger btn-sm ' type='button'> + </button>
                    <input className='cart-button-input mx-2 ' type="number" maxLength="1"></input>
                    <button className='btn btn-danger btn-sm' type='button'>-</button>
                </div>
                <div className='cart-right_right'>
                    <label>500</label>
                    <div className='price-discount mt-1'> <label className='mb-1'><del>1000</del><p>50% off</p></label></div>
                    <a href='' className='mt-1'>Remove</a>
                </div>
            </div>
            {/* <div className='cart-card-left'>
                <div className='cart-card-left-1'>   
                    <img src="/images/dummy-image.png" className='cart-image' alt="Denim Jeans"/>
                </div>

                <div className='cart-card-left-2 '>
                    <div className='cart-card-left-text'>
                    <label> Campus Sutra</label>
                    <p> Cart item name</p>
                    </div>

                    <div className='py-2 mt-1 '>
                        <button className='btn btn-danger btn-sm ' type='button'> + </button>
                        <input className='cart-button-input mx-2 ' type="number" maxLength="1"></input>
                        <button  className='btn btn-danger btn-sm' type='button'>-</button>
                    </div>

                </div>
        </div>

        <div className='cart-card-right me-4 mt-3'>
                    <label>500</label>
            
                    <div className='price-discount mt-3'> <label className='mb-3'><del>1000</del><p>50% off</p></label></div>
                    <a href='' className='mt-3'>Remove</a>
            
        </div> */}
        </div>


    )
}

