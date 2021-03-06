import React, { Component } from 'react'
import ProductCard from './ProductCard';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useState, useEffect } from 'react';
import { setProductsAction } from '../redux/actions/setProductsAction';
import { SET_PRODUCTS, SORT_BY_ALPHA, SORT_BY_PRICE } from '../redux/actions/constants';
import { sortActionA, sortActionAlphabets, sortActionP } from '../redux/actions/sortActionAlphabets';
import { sortActionPrice } from '../redux/actions/sortActionPrice';

const Listing = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://rest-api-tatvasoft.herokuapp.com/api/getbooks')
            .then(res => res.json())
            .then((data) => {
                setBooks(data)
            })
            .catch(console.log)
    }, [])

    const dispatch = useDispatch()

    // dispatch(setProductsAction(books))

    const search_term = useSelector((state) => state.search.term)
    const foundBook = books.filter((book) => book.title.toUpperCase().includes(search_term.toUpperCase()));

    if (search_term === "") {
        var books_to_render = books;
    }

    else {
        var books_to_render = foundBook;
    }

    // flag keeps track if the sorting order is changed

    let sorted_books = books_to_render;

    const handleChange = (event) => {

        const sort_order = event.target.value
        console.log("sort order", sort_order)

        if (sort_order === "a-z") {
            console.log("sort order", sort_order)
            dispatch(sortActionAlphabets(books_to_render))
            console.log(sorted_books)
        }

        if (sort_order === "price") {
            console.log("sort order", sort_order)
            dispatch(sortActionPrice(books_to_render))
            console.log(sorted_books)
        }


    }


    return (
        <div className='bg-light'>
            <Header />
            {/* <div className='container-fluid bg-light d-flex flex-row col-12 rounded justify-content-around py-2' style={{ height: "6rem", backgroundColor: "red" }}>
                <div className=''><div className='card d-flex flex-column align-items-center' style={{ width: "90px", height: "80px" }}><img src='https://cdn-icons-png.flaticon.com/512/1830/1830844.png' className='' style={{ width: "50px", height: "50px" }} /><p className='card-title'>comics</p></div></div>
                <div className=''><div className='card d-flex flex-column align-items-center ' style={{ width: "90px", height: "80px" }}><img src='https://cdn-icons-png.flaticon.com/512/1830/1830844.png' style={{ width: "50px", height: "50px" }} /><p>magazines</p></div></div>
                <div className=''><div className='card d-flex flex-column align-items-center ' style={{ width: "90px", height: "80px" }}><img src='https://cdn-icons-png.flaticon.com/512/1830/1830844.png' style={{ width: "50px", height: "50px" }} /><p>syllabus</p></div></div>
                <div className=''><div className='card d-flex flex-column align-items-center ' style={{ width: "90px", height: "80px" }}><img src='https://cdn-icons-png.flaticon.com/512/1830/1830844.png' style={{ width: "50px", height: "50px" }} /><p>bollywood</p></div></div>
                <div className=''><div className='card d-flex flex-column align-items-center ' style={{ width: "90px", height: "80px" }}><img src='https://cdn-icons-png.flaticon.com/512/1830/1830844.png' style={{ width: "50px", height: "50px" }} /><p>History</p></div></div>
            </div> */}
            <div className='listing-page bg-light' >
                <h1 className='listing-title text-dark'>Product Listing</h1>

                <div className='name-drop-down-container d-flex align-items-center justify-content-between container'>

                    <div className='name-number ms-2 text-dark '><strong> {books_to_render.length} <i>books found</i></strong></div>
                    <div className='sort-by-drop-down me-4'>
                        <form>
                            <label><strong>Sort By:</strong></label>
                            <select id="product-sort" name='select' onChange={handleChange}>
                                <option >categories</option>
                                <option >a-z</option>
                                <option >price</option>
                            </select>
                        </form>
                    </div>

                </div>

                <div className='cards-container container mt-4 rounded-4'>
                    <ProductCard books={sorted_books} />
                </div>

            </div>
            <Footer />
        </div>

    )



}

export default Listing;





