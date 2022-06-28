import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import Cart from "./Cart";

const Header = () => {

    return (
        <div className='header-container-main '>
            <div className='header-wrapper-main bg-secondary '>
                <div className='logo-container'>
                    <Link to="/" ><img src="https://www.tatvasoft.com/blog/wp-content/uploads/2015/12/logo.png" alt="Tatvasoft" /></Link>
                </div>

                <form className="" action="">
                    <input type="text" placeholder="What are you looking for.." name="search" id="search-input-bar" className="form-control "></input>
                    <button type="submit" id="search-button" className="btn btn-success text-center"><img src="./images/search.svg" className="align-middle" />Search</button>
                    <button type="reset" id="cancel-button" className="btn btn-danger text-center p-2">Cancel</button>
                </form>

                <div className='link-cart-container'>

                    <div className='cart-container '>
                        <Link to="/cart"><img src='images/cart.svg' /><span className='text-light'>0</span></Link>
                    </div>

                    <div className='link-container'>
                        <Link to="/login" className='text-decoration-none text-light '>Login</Link>
                        <Link to="/Register" className='text-decoration-none text-light '>Register</Link>

                    </div>

                </div>

            </div>
        </div>

    )


};

export default Header;