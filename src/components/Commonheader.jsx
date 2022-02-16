import React from 'react';
import '../index.css';

const Commonheader = () => {

    return (
  <div>
      <header className='site-header' id='header'>
       <div className='site-header-wrapper'>
        <div className='container'>
          <div className='header-wrapper'>
            <div className='logo-wrapper'>
              <a className='site-logo' title="logo" href="#"><img src="/images/site-logo.svg" alt="Tatvasoft"/></a>
            </div>
            <div className='nav-wrapper'>
              <div className='top-right-bar'>
                <ul className='top-nav-bar'>
                  <li>
                    <a title="Login" href="#">Login</a>
                  </li>
                  <li>
                    <a title="Register" href="#">Register</a>
                  </li>
                </ul>
                <ul className='cart-country-wrap'>
                  <li className='cart-link'>
                    <a title="Cart" href="#"><img src="images/cart.svg" alt="cart" /><span>0</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
    );
}

export default Commonheader;