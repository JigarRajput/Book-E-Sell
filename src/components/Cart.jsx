import React from 'react';
import '../index.css';
import Searchbox from './Searchbox';
import Footer from './Footer';
import Header from './Header';
const Cart = () => {

    return(
        <>
        <Header/>
        <Searchbox/>
        <div className='cart-page'>

            <h1> Cart Page </h1>
           
           <div className='status-container'>
                <div className='shopping-status'>
                  <div className='bag-status-left'>
                       <p id='my-bag'>My Shopping Bag </p>
                       <label id='no-of-items'> 3 items</label>
                   </div>

                    <div className='total-bag-price'>
                    <label id="bag-price"> 3000</label>
                    <p className='nett-price'>Total Price: </p>
                    
                    </div>
                
                </div>
            </div> 

            <div className='main-layout-container'>

                <div className='cart-cards-container'>

                    <div className='cart-card'>
                        <div className='cart-card-wrapper'>    
                        <div className='cart-card-left'>
                             <div className='cart-card-left-1'>   
                                 <img src="/images/dummy-image.png" className='cart-image' alt="Denim Jeans"/>
                             </div>

                             <div className='cart-card-left-2'>
                                 <div className='cart-card-left-text'>
                                    <label> Campus Sutra</label>
                                    <p> Cart item name</p>
                                 </div>

                                 <div className='cart-card-left-buttons'>
                                     <button>+</button>
                                     <input className='cart-button-input' type="number" maxLength="1"></input>
                                     <button>-</button>
                                 </div>

                             </div>
                        </div>

                        <div className='cart-card-right'>
                                 <label>500</label>
                           
                                 <div className='price-discount'> <label><del>1000</del><p>50% off</p></label></div>
                                 <a href=''>Remove</a>
                            
                        </div>
                    
                        </div>
                    </div>

                    <div className='cart-card'>
                        <div className='cart-card-wrapper'>
                        <div className='cart-card-left'>
                             <div className='cart-card-left-1'>   
                                 <img src="/images/dummy-image.png" className='cart-image' alt="Denim Jeans"/>
                             </div>

                             <div className='cart-card-left-2'>
                                 <div className='cart-card-left-text'>
                                    <label> Campus Sutra</label>
                                    <p> Cart item name</p>
                                 </div>

                                 <div className='cart-card-left-buttons'>
                                     <button>+</button>
                                     <input className='cart-button-input' type="number" maxLength="1"></input>
                                     <button>-</button>
                                 </div>

                             </div>
                        </div>

                        <div className='cart-card-right'>
                                 <label>500</label>
                           
                                 <div className='price-discount'> <label><del>1000</del><p>50% off</p></label></div>
                                 <a href=''>Remove</a>
                            
                        </div>
                    
                        </div>
                    </div>

                    <div className='cart-card'>
                        <div className='cart-card-wrapper'>
                        <div className='cart-card-left'>
                             <div className='cart-card-left-1'>   
                                 <img src="/images/dummy-image.png" className='cart-image' alt="Denim Jeans"/>
                             </div>

                             <div className='cart-card-left-2'>
                                 <div className='cart-card-left-text'>
                                    <label> Campus Sutra</label>
                                    <p> Cart item name</p>
                                 </div>

                                 <div className='cart-card-left-buttons'>
                                     <button>+</button>
                                     <input className='cart-button-input' type="number" maxLength="1"></input>
                                     <button>-</button>
                                 </div>

                             </div>
                        </div>

                        <div className='cart-card-right'>
                                 <label>500</label>
                           
                                 <div className='price-discount'> <label><del>1000</del><p>50% off</p></label></div>
                                 <a href=''>Remove</a>
                            
                        </div>
                    
                        </div>
                    </div>    

                    <div className='cart-card'>
                        <div className='cart-card-wrapper'>
                        <div className='cart-card-left'>
                             <div className='cart-card-left-1'>   
                                 <img src="/images/dummy-image.png" className='cart-image' alt="Denim Jeans"/>
                             </div>

                             <div className='cart-card-left-2'>
                                 <div className='cart-card-left-text'>
                                    <label> Campus Sutra</label>
                                    <p> Cart item name</p>
                                 </div>

                                 <div className='cart-card-left-buttons'>
                                     <button>+</button>
                                     <input className='cart-button-input' type="number" maxLength="1"></input>
                                     <button>-</button>
                                 </div>

                             </div>
                        </div>

                        <div className='cart-card-right'>
                                 <label>500</label>
                           
                                 <div className='price-discount'> <label><del>1000</del><p>50% off</p></label></div>
                                 <a href=''>Remove</a>
                            
                        </div>
                    
                        </div>
                    </div>    

                </div>    

            </div>  

            <div className='place-order-container'>
                <div className='place-order-wrapper'>
                    <button>Place Order</button>
                </div>
            </div>          


        </div>
        <Footer/>
    </>    
    )
};


export default Cart;