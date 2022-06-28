import React, { Component } from 'react';
import '../index.css';
import Searchbox from './Searchbox';
import Footer from './Footer';
import Header from './Header';
import CartCard from './CartCard';

class Cart extends Component {

    constructor() {
        super()
        this.state = {

            total: 0,

        }
    }


    render() {
        return (
            <div>

                <>
                    <Header />
                    {/* <Searchbox/> */}
                    <div className='cart-page'>

                        <h1> Cart Page </h1>

                        <div className='status-container'>
                            <div className='shopping-status'>
                                <div className='bag-status-left ms-4'>
                                    <p id='my-bag'>My Shopping Bag </p>
                                    <label id='no-of-items'> 3 items</label>
                                </div>

                                <div className='total-bag-price'>
                                    <label id="bag-price"> 3000</label>
                                    <p className='nett-price'>Total Price: </p>

                                </div>

                            </div>
                        </div>

                        <div className='main-layout-container mb-5'>


                            <div className='cart-card-container'>

                                <CartCard />
                                <CartCard />
                                <CartCard />
                                <CartCard />


                            </div>

                        </div>

                        <div className='place-order-container'>
                            <div className='place-order-wrapper'>
                                <button className='btn btn-danger ms-4'>Place Order</button>
                            </div>
                        </div>


                    </div>
                    <Footer />
                </>

            </div>
        )
    }

}

// const Cart = () => {





//     return(
//         <>
//         <Header/>
//         <Searchbox/>
//         <div className='cart-page'>

//             <h1> Cart Page </h1>

//            <div className='status-container'>
//                 <div className='shopping-status'>
//                   <div className='bag-status-left'>
//                        <p id='my-bag'>My Shopping Bag </p>
//                        <label id='no-of-items'> 3 items</label>
//                    </div>

//                     <div className='total-bag-price'>
//                     <label id="bag-price"> 3000</label>
//                     <p className='nett-price'>Total Price: </p>

//                     </div>

//                 </div>
//             </div> 

//             <div className='main-layout-container'>

//                 <div className='cart-cards-container'>

//                     <div className='cart-card'>
//                         <div className='d-flex justify-content-between'>    
//                         <div className='cart-card-left'>
//                              <div className='cart-card-left-1'>   
//                                  <img src="/images/dummy-image.png" className='cart-image' alt="Denim Jeans"/>
//                              </div>

//                              <div className='cart-card-left-2 '>
//                                  <div className='cart-card-left-text'>
//                                     <label> Campus Sutra</label>
//                                     <p> Cart item name</p>
//                                  </div>

//                                  <div className='py-2 mt-1 '>
//                                      <button className='btn btn-danger btn-sm ' type='button'> + </button>
//                                      <input className='cart-button-input mx-2 ' type="number" maxLength="1"></input>
//                                      <button  className='btn btn-danger btn-sm' type='button'>-</button>
//                                  </div>

//                              </div>
//                         </div>

//                         <div className='cart-card-right me-4 mt-3'>
//                                  <label>500</label>

//                                  <div className='price-discount mt-3'> <label className='mb-3'><del>1000</del><p>50% off</p></label></div>
//                                  <a href='' className='mt-3'>Remove</a>

//                         </div>

//                         </div>
//                     </div>

//                     <div className='cart-card'>
//                         <div className='d-flex justify-content-between'>    
//                         <div className='cart-card-left'>
//                              <div className='cart-card-left-1'>   
//                                  <img src="/images/dummy-image.png" className='cart-image' alt="Denim Jeans"/>
//                              </div>

//                              <div className='cart-card-left-2 '>
//                                  <div className='cart-card-left-text'>
//                                     <label> Campus Sutra</label>
//                                     <p> Cart item name</p>
//                                  </div>

//                                  <div className='py-2 mt-1 '>
//                                      <button className='btn btn-danger btn-sm ' type='button'> + </button>
//                                      <input className='cart-button-input mx-2 ' type="number" maxLength="1"></input>
//                                      <button  className='btn btn-danger btn-sm' type='button'>-</button>
//                                  </div>

//                              </div>
//                         </div>

//                         <div className='cart-card-right me-4 mt-3'>
//                                  <label>500</label>

//                                  <div className='price-discount mt-3'> <label className='mb-3'><del>1000</del><p>50% off</p></label></div>
//                                  <a href='' className='mt-3'>Remove</a>

//                         </div>

//                         </div>
//                     </div>

//                     <div className='cart-card'>
//                         <div className='d-flex justify-content-between'>    
//                         <div className='cart-card-left'>
//                              <div className='cart-card-left-1'>   
//                                  <img src="/images/dummy-image.png" className='cart-image' alt="Denim Jeans"/>
//                              </div>

//                              <div className='cart-card-left-2 '>
//                                  <div className='cart-card-left-text'>
//                                     <label> Campus Sutra</label>
//                                     <p> Cart item name</p>
//                                  </div>

//                                  <div className='py-2 mt-1 '>
//                                      <button className='btn btn-danger btn-sm ' type='button'> + </button>
//                                      <input className='cart-button-input mx-2 ' type="number" maxLength="1"></input>
//                                      <button  className='btn btn-danger btn-sm' type='button'>-</button>
//                                  </div>

//                              </div>
//                         </div>

//                         <div className='cart-card-right me-4 mt-3'>
//                                  <label>500</label>

//                                  <div className='price-discount mt-3'> <label className='mb-3'><del>1000</del><p>50% off</p></label></div>
//                                  <a href='' className='mt-3'>Remove</a>

//                         </div>

//                         </div>
//                     </div>

//                     <div className='cart-card rounded'>
//                         <div className='d-flex justify-content-between rounded'>    
//                         <div className='cart-card-left'>
//                              <div className='cart-card-left-1'>   
//                                  <img src="/images/dummy-image.png" className='cart-image' alt="Denim Jeans"/>
//                              </div>

//                              <div className='cart-card-left-2 '>
//                                  <div className='cart-card-left-text'>
//                                     <label> Campus Sutra</label>
//                                     <p> Cart item name</p>
//                                  </div>

//                                  <div className='py-2 mt-1 '>
//                                      <button className='btn btn-danger btn-sm ' type='button'> + </button>
//                                      <input className='cart-button-input mx-2 ' type="number" maxLength="1"></input>
//                                      <button  className='btn btn-danger btn-sm' type='button'>-</button>
//                                  </div>

//                              </div>
//                         </div>

//                         <div className='cart-card-right me-4 mt-3'>
//                                  <label>500</label>

//                                  <div className='price-discount mt-3'> <label className='mb-3'><del>1000</del><p>50% off</p></label></div>
//                                  <a href='' className='mt-3'>Remove</a>

//                         </div>

//                         </div>
//                     </div>









//                 </div>    

//             </div>  

//             <div className='place-order-container'>
//                 <div className='place-order-wrapper'>
//                     <button className='btn btn-danger'>Place Order</button>
//                 </div>
//             </div>          


//         </div>
//         <Footer/>
//     </>    
//     )
// };


export default Cart;