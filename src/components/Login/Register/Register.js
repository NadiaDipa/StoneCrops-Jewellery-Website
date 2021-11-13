import React, { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const {user, registerUser, isLoading, authError} = useAuth();

    const handleOnChange= e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        

    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
         <div class="container">
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div class="signup-form">
               {!isLoading && <form onSubmit={handleLoginSubmit} class="mt-5 border p-4 bg-light shadow">
                    <h4 class="mb-5 text-secondary">Create Your Account</h4>
                    <div class="row">
                       

                        <div class="mb-3 col-md-6">
                            <label>email<span class="text-danger">*</span></label>
                            <input type="email" name="email"
                            onChange={handleOnChange} class="form-control" placeholder="Enter Email"/>
                        </div>

                        <div class="mb-3 col-md-12">
                            <label>Password<span class="text-danger">*</span></label>
                            <input type="password" name="password" onChange={handleOnChange} class="form-control" placeholder="Enter Password"/>
                        </div>
                        <div class="mb-3 col-md-12">
                            <label>Confirm Password<span class="text-danger">*</span></label>
                            <input type="password" name="password2" onChange={handleOnChange} class="form-control" placeholder="Confirm Password"/>
                        </div>
                        <div class="col-md-12">
                           <button class="btn btn-primary float-end">Signup</button>
                        </div>
                    </div>
                    </form>}
                        {isLoading && <Spinner animation="border" />}
                        {user?.email && <div class="alert alert-success" role="alert">
                        User Created Successfully!
                        </div>}
                        {authError && <div class="alert alert-success" role="alert">
                        {authError}
                        </div>}


                        <NavLink to="/login" class="text-center mb-0" style={{textDecoration: 'none'}}>Have not account yet? <Button to="/login" variant="text">Login</Button></NavLink>
            </div>
        </div>
    </div>
</div>
    );
};

export default Register;