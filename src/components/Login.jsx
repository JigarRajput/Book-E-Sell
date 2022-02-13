import React from 'react';
import Commonheader from './Commonheader';
import Footer from './Footer';
import Searchbox from './Searchbox';
const Login = () => {

    return (
        <div className='login-page'>
           <Commonheader />
            <Searchbox />
            <div className='login-wrapper'>
            <div class="breadcrumb-wrapper">
              <ol>
                <li>
                  <a href="#" title="Home">Home</a>
                </li>
                <li>
                  <p>login</p>
                </li>
              </ol>
            </div>
            <h1>Login or Create an Account</h1>

            <div className='login-form-main-container'>
                <div className='left-side-container'>
                    <h4 className='new-customer'>New Customer</h4>
                    <hr/>

                        <p className='text-left-start'>Registration is free and easy</p>
                        <ul className='left-list-items'>
                            <li>Faster Checkout</li>
                            <li>Save multiple shipping addresses</li>
                            <li>View and track orders and more</li>

                        </ul>

                        <button className='create-account-button'>Create an Account</button>

                </div>
                <div className='right-side-container'>
                     <h4 className='new-customer'>Registered Customer</h4>
                     <hr/>
                     <p className='text-left-start'>If you have account with us, please login</p>
                     <form className='login-info'>
                     <label className='email-label-right'>Email Adress *</label>
                     <br/>
                          <input
                            type="text"
                            class="form-control"
                            id="email-address"
                          />
                      <br/>
                      <label className='password-label-right'>Password *</label>
                      <br id='email-password-margin'/>
                      <input
                            type="password"
                            class="form-control"
                            id="password"
                          /> 

                          
                    </form>   
                    <button className='login-button'>Login</button>
                </div>


            </div>
          <Footer/>
           
            </div>
        </div>



    )
};
export default Login;   