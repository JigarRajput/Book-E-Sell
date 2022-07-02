import React, { Component } from 'react'
import ProductCard from './ProductCard';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useState, useEffect } from 'react';
import { setProductsAction } from '../redux/actions/setProductsAction';
import { SET_PRODUCTS } from '../redux/actions/constants';

const FoundBooks = () => {


  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8121/api/getbooks')
      .then(res => res.json())
      .then((data) => {
        setBooks(data)
      })
      .catch(console.log)
  }, [])

  const search_term = useSelector((state) => state.search.term)



  return (
    <div>



    </div>
  )
}

export default FoundBooks;
