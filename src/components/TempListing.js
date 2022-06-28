import React from 'react'
import Header from './Header';
import Searchbox from './Searchbox';
import App from '../App';
import Footer from './Footer';

const Templisting = () => {
  return (
<div>
 
    <Searchbox/>
    <div className='listing-page mx-3 bg-danger'>
        <h1 className='listing-title my-4 '>Product Listing</h1>

            <div className='name-drop-down-container container my-5 '>

                    <div className='name-number'> Product name - 14366 items </div>
                    <div className='sort-by-drop-down me-3'> 
                        <form>
                            <label >Sort By:</label>
                            <select  id="product-sort">
                                <option >a-z</option>
                                <option >price</option>
                                <option >categories</option>
                                <option >trends</option>
                            </select>
                        </form>
                       </div> 
            </div>

    

        <div className='cards-container bg-warning'>


                <div className="card rounded-3">
                    <img src="./images/dummy-image.png" className='rounded-top' alt="Denim Jeans"/>
                    <div className='card-bottom'>
                        <h2>Product Title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero maiores distinctio tempora ut amet, natus ullam enim susci</p>
                            <div className='price-container'><p>MRP <del>1000</del> <p className='discount'>20.00% OFF</p></p></div>
                        <p className='net-price'>800</p>
                        <button className="btn btn-danger rounded-3">Add to Cart</button>
                    </div>    
                </div> 

                <div className="card rounded-3">
                    <img src="/images/dummy-image.png" className='rounded-top' alt="Denim Jeans"/>
                    <div className='card-bottom'>
                        <h2>Product Title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero maiores distinctio tempora ut amet, natus ullam enim susci</p>
                            <div className='price-container'><p>MRP <del>1000</del> <p className='discount'>20.00% OFF</p></p></div>
                        <p className='net-price'>800</p>
                        <button>Add to Cart</button>
                    </div>    
                </div> 


                <div className="card rounded-3">
                    <img src="/images/dummy-image.png" className='rounded-3' alt="Denim Jeans"/>
                    <div className='card-bottom'>
                        <h2>Product Title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero maiores distinctio tempora ut amet, natus ullam enim susci</p>
                            <div className='price-container'><p>MRP <del>1000</del> <p className='discount'>20.00% OFF</p></p></div>
                        <p className='net-price'>800</p>
                        <button>Add to Cart</button>
                    </div>    
                </div> 


      

        </div>
        <Footer/>
        
    </div>

</div>
  )
}

export default Templisting;
