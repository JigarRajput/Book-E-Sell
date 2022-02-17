import React from 'react';
import '../index.css';

const Header = () =>{

return(
<div className='header-container-main'>
<div className='header-wrapper-main'>    
<div className='logo-container'>
    <a href='#'><img src="/images/site-logo.svg" alt="Tatvasoft"/></a>
</div>

<div className='link-cart-container'>

    <div className='cart-container'>
        <a href='#'><img src='images/cart.svg'/><span>0</span></a>
    </div>

    <div className='link-container'>
        <a href='#'>Login</a>
        <a href='#'>Register</a>
    </div>

</div>

</div>
</div>

)


};

export default Header;