import store from '../redux/store';
import { addToCartAction } from '../redux/actions/addCartActions';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_CART } from '../redux/actions/constants';
import { priceIncreaseAction } from '../redux/actions/totalPriceAction';
//import { ADD_TO_CART } from '../redux/actions/addCartActions';
//const dispatch = useDispatch()
// { books }
export default function ProductCard({ books }) {
    console.warn("action props", books)
    const dispatch = useDispatch()

    const addToCartHandler = (book) => {
        dispatch(addToCartAction(book))
        dispatch(priceIncreaseAction(book.price - book.price * (book.discount / 100)))
    }

    const sorted_books = useSelector((state) => state.sort.sorted_books)
    if (sorted_books.length != 0)
        books = sorted_books

    const search_term = useSelector((state) => state.search.term)
    const foundBook = books.filter((book) => book.title.toUpperCase().includes(search_term.toUpperCase()));

    if (search_term != "")
        books = foundBook

    if (search_term === "")
        books = books;

    return (
        <div className='p-c-container'>

            {books.map((book) => (
                <div className="card rounded-4 shadow-lg bg-light">
                    <img src={book.image} className='rounded-top ' alt="Denim Jeans" />
                    {/* {console.log(book.image)} */}
                    <div className='card-body'>
                        <h4 className='card-title text-dark'><strong>{book.title}</strong></h4>
                        <p className='card-text text-dark'>{book.description}</p>
                        <div className='price-container text-dark'><p>MRP <del>{book.price}</del> <p className='discount'>{book.discount} % OFF</p></p></div>
                        <p className='net-price text-dark'><strong>Net price: &nbsp; {book.price - book.price * book.discount / 100}</strong></p>
                        {/* () => { dispatch(addtoCartAction(data)) } */}
                        {/* () => { store.dispatch({ type: ADD_TO_CART, data: book  */}
                        {/* console.log("state changed", store.getState()) */}
                        <button className="btn btn-danger btn-lg rounded-3 mb-0" onClick={() => { addToCartHandler(book); console.log("updated state", store.getState()) }} >Add to Cart</button>
                    </div>
                </div>
            ))


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
                </div>  */}

            {/* {contacts.map((contact) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{contact.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
                <p class="card-text">{contact.company.catchPhrase}</p>
              </div>
            </div>
          ))} */}
        </div>
    )
}
