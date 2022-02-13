import React from 'react';
import Commonheader from './Commonheader';
import Searchbox from './Searchbox';
import Footer from './Footer';

const Register = () => {

  return(
    <> 
    <Commonheader/>
    <Searchbox/>
    <section className="create-account-page-wrapper">
          <div className="container">
            <div className="breadcrumb-wrapper">
              <ol>
                <li>
                  <a href="#" title="Home">Home</a>
                </li>
                <li>
                  <p>Create an Account</p>
                </li>
              </ol>
            </div>
            <h1>Login or Create an Account</h1>
            <div className="create-account-row">
              <form>
                <div className="form-block">
                  <div className="personal-information">
                    <div className="personal-information-header">
                      <h2>Personal Information</h2>
                      <p>
                        Please enter the following information to create your
                        account.
                      </p>
                    </div>
                    <div className="form-row-wrapper">
                      <div className="form-col">
                        <div className="form-group">
                          <label for="first-name" id="first-name-label"
                            >First Name *</label
                          >
                          <input
                            type="text"
                            className="form-control"
                            id="first-name"
                          />
                          <span className="error-msg">Invalid</span>
                        </div>
                      </div>
                      <div className="form-col">
                        <div className="form-group">
                          <label for="last-name" id="last-name-label"
                            >Last Name *</label
                          >
                          <input
                            type="text"
                            className="form-control"
                            id="last-name"
                          />
                          <span className="error-msg">Invalid</span>
                        </div>
                      </div>
                      <div className="form-col full-width">
                        <div className="form-group">
                          <label for="email-address" id="email-address-label"
                            >Email Adress *</label
                          >
                          <input
                            type="text"
                            className="form-control"
                            id="email-address"
                          />
                          <span className="error-msg">Invalid</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="login-information">
                    <div className="personal-information-header">
                      <h2>Login Information</h2>
                    </div>
                    <div className="form-row-wrapper">
                      <div className="form-col">
                        <div className="form-group">
                          <label for="password" id="password-label"
                            >Password *</label
                          >
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                          />
                          <span className="error-msg">Invalid</span>
                        </div>
                      </div>
                      <div className="form-col">
                        <div className="form-group">
                          <label
                            for="confirm-password"
                            id="confirm-password-label"
                            >Confirm Password *</label
                          >
                          <input
                            type="password"
                            className="form-control"
                            id="confirm-password"
                          />
                          <span className="error-msg">Invalid</span>
                        </div>
                      </div>
                    </div>
                    <div className="btn-wrapper">
                      <button className="btn blue-btn" type="submit">
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
  
    <Footer/>
    </>

  )

};

export default Register;