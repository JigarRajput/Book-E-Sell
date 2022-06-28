import React, { Component } from 'react'
import Searchbox from './Searchbox';
import ProductCard from './ProductCard';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './Header';



export default class Listing extends Component {

    state = {
        books: []
    }

    componentDidMount() {
        fetch('http://localhost:8121/api/getbooks')
            .then(res => res.json())
            .then((data) => {
                this.setState({ books: data })
                //   console.log(this.state.books)
            })
            .catch(console.log)
    }


    render() {
        return (
            <div>

                <Header />
                {/* <Searchbox /> */}



                <div className='listing-page bg-light' >
                    <h1 className='listing-title'>Product Listing</h1>

                    <div className='name-drop-down-container d-flex align-items-center justify-content-between container'>

                        <div className='name-number ms-2 '><strong> {this.state.books.length} <i>books found</i></strong></div>
                        <div className='sort-by-drop-down me-4'>
                            <form>
                                <label><strong>Sort By:</strong></label>
                                <select id="product-sort">
                                    <option >a-z</option>
                                    <option >price</option>
                                    <option >categories</option>
                                    <option >trends</option>
                                </select>
                            </form>
                        </div>

                    </div>

                    <div className='cards-container container mt-4 rounded-4'>

                        <ProductCard books={this.state.books} />
                    </div>




                </div>


                <Footer />

            </div>

        )
    }
}






{/* <div className="card rounded-3">
                    <img src="./images/dummy-image.png" className='rounded-top' alt="Denim Jeans"/>
                    <div className='card-bottom'>
                        <h2>Product Title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero maiores distinctio tempora ut amet, natus ullam enim susci</p>
                            <div className='price-container'><p>MRP <del>1000</del> <p className='discount'>20.00% OFF</p></p></div>
                        <p className='net-price'>800</p>
                        <button className="btn btn-danger rounded-3">Add to Cart</button>
                    </div>    
                </div> 

                <div className="card">
                    <img src="/images/dummy-image.png" alt="Denim Jeans"/>
                    <div className='card-bottom'>
                        <h2>Product Title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero maiores distinctio tempora ut amet, natus ullam enim susci</p>
                            <div className='price-container'><p>MRP <del>1000</del> <p className='discount'>20.00% OFF</p></p></div>
                        <p className='net-price'>800</p>
                        <button>Add to Cart</button>
                    </div>    
                </div> 


                <div className="card">
                    <img src="/images/dummy-image.png" alt="Denim Jeans"/>
                    <div className='card-bottom'>
                        <h2>Product Title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero maiores distinctio tempora ut amet, natus ullam enim susci</p>
                            <div className='price-container'><p>MRP <del>1000</del> <p className='discount'>20.00% OFF</p></p></div>
                        <p className='net-price'>800</p>
                        <button>Add to Cart</button>
                    </div>    
                </div> 


                <div className="card">
                    <img src="/images/dummy-image.png" alt="Denim Jeans"/>
                    <div className='card-bottom'>
                        <h2>Product Title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero maiores distinctio tempora ut amet, natus ullam enim susci</p>
                            <div className='price-container'><p>MRP <del>1000</del> <p className='discount'>20.00% OFF</p></p></div>
                        <p className='net-price'>800</p>
                        <button>Add to Cart</button>
                    </div>    
                </div> 

                <div className="card">
                    <img src="/images/dummy-image.png" alt="Denim Jeans"/>
                    <div className='card-bottom'>
                        <h2>Product Title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero maiores distinctio tempora ut amet, natus ullam enim susci</p>
                            <div className='price-container'><p>MRP <del>1000</del> <p className='discount'>20.00% OFF</p></p></div>
                        <p className='net-price'>800</p>
                        <button>Add to Cart</button>
                    </div>    
                </div> 


                <div className="card">
                    <img src="/images/dummy-image.png" alt="Denim Jeans"/>
                    <div className='card-bottom'>
                        <h2>Product Title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero maiores distinctio tempora ut amet, natus ullam enim susci</p>
                            <div className='price-container'><p>MRP <del>1000</del> <p className='discount'>20.00% OFF</p></p></div>
                        <p className='net-price'>800</p>
                        <button>Add to Cart</button>
                    </div>    
                </div> 


                <div className="card">
                    <img src="/images/dummy-image.png" alt="Denim Jeans"/>
                    <div className='card-bottom'>
                        <h2>Product Title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero maiores distinctio tempora ut amet, natus ullam enim susci</p>
                            <div className='price-container'><p>MRP <del>1000</del> <p className='discount'>20.00% OFF</p></p></div>
                        <p className='net-price'>800</p>
                        <button>Add to Cart</button>
                    </div>    
                </div> 


                <div className="card">
                    <img src="/images/dummy-image.png" alt="Denim Jeans"/>
                    <div className='card-bottom'>
                        <h2>Product Title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero maiores distinctio tempora ut amet, natus ullam enim susci</p>
                            <div className='price-container'><p>MRP <del>1000</del> <p className='discount'>20.00% OFF</p></p></div>
                        <p className='net-price'>800</p>
                        <button>Add to Cart</button>
                    </div>    
                </div> 


                <div className="card">
                    <img src="/images/dummy-image.png" alt="Denim Jeans"/>
                    <div className='card-bottom'>
                        <h2>Product Title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero maiores distinctio tempora ut amet, natus ullam enim susci</p>
                            <div className='price-container'><p>MRP <del>1000</del> <p className='discount'>20.00% OFF</p></p></div>
                        <p className='net-price'>800</p>
                        <button>Add to Cart</button>
                    </div>    
                </div> 


                <div className="card">
                    <img src="/images/dummy-image.png" alt="Denim Jeans"/>
                    <div className='card-bottom'>
                        <h2>Product Title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero maiores distinctio tempora ut amet, natus ullam enim susci</p>
                            <div className='price-container'><p>MRP <del>1000</del> <p className='discount'>20.00% OFF</p></p></div>
                        <p className='net-price'>800</p>
                        <button>Add to Cart</button>
                    </div>    
                </div>  */}