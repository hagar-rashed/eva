import React from 'react'
import Images from '../../images/images';
import { useState } from 'react';
 function Signup() {
    const [email ,setEmail] = useState("");  
    const [phone ,setPhone] = useState(""); 
    const [password ,setPassword] = useState("");
  return (
    <div className="login">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
          <div className="main-logo">
            <img src={Images.logo} alt="logo" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="login-form">
            <form >
              <div className="mb-3">
                <legend>Login</legend>
                <label for="exampleInputEmail1" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
             
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputphone1" className="form-label">
                 phone:
                </label>
                <input
                  type="phone"
                  className="form-control"
                  id="exampleInputphone1"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Forget Password
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
     
              <div className='continue'>
                  <p>or continue with</p>
              </div>
              <button  className="btn google-sign">
                Sign up with google
              </button>
              <button type="submit" className="btn btn-success mt-3">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Signup;