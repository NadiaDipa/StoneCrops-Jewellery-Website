import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const handleOnChange= e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        

    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match')
            return
        }
        e.preventDefault();
    }
    return (
         <div class="container">
            <div class="row row-cols-2">
                <div class="col">
                    <form onSubmit={handleLoginSubmit}>
                <div className="mb-4">
                    <p className="text-center">Welcome Back</p>
                    <h2 className="login-header">Register</h2>
                    <hr />
                </div>
                        

                {/* email input field */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input required onBlur="" type="email"
                    name="email"
                    onChange={handleOnChange}
                    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />      
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                        


                {/* password input field */}
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input onBlur="" type="password" name="password"
                    onChange={handleOnChange} className="form-control" id="exampleInputPassword1" required />

                    {/* retype-password */}
                    <label for="exampleInputPassword1" className="form-label">Re-type Your Password</label>
                    <input onBlur="" type="password" name="password2"
                    onChange={handleOnChange} className="form-control" id="exampleInputPassword1" required />
                 
                </div>
                        


                <div className="mb-3 form-check">
                    <input onBlur="" type="password"
                    name="password"
                    onChange={handleOnChange}
                    className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Keep me logged in</label>
                    
                    <Link style={{textDecoration:'none'}} className="forget-pass"> Forget Your Password?</Link>
                    
                </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    {/* <NavLink  to="/register"></NavLink>
                    <Button variant="text">New User? Please Register</Button> */}
                    <p> Already Registered? <Link style={{textDecoration:'none'}} to="/login"> Please Login</Link></p>
                
            </form>
                </div>
                <div class="col">Yes I'm here</div>
            </div>
        </div>      
    );
};

export default Register;