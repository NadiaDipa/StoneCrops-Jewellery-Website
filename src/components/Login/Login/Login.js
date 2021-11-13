import React, { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
        
        <div class="container">
            <div class="row">
            <div class="col-md-4 offset-md-4">
                <div class="login-form bg-light mt-4 p-4">
                    <form onSubmit={handleLoginSubmit} method="" class="row g-3">
                        <h4>Welcome Back</h4>
                        <div class="col-12">
                            <label>Username</label>
                            <input type="text" name="email"
                            onChange={handleOnChange}
                            class="form-control" placeholder="Username"/>
                        </div>
                        <div class="col-12">
                            <label>Password</label>
                            <input type="password" name="password"
                            onChange={handleOnChange}
                            class="form-control" placeholder="Password" />
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="rememberMe"/>
                                <label class="form-check-label" for="rememberMe"> Remember me</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <button type="submit" to="/login" class="btn btn-dark float-end">Login</button>
                        </div>
                    </form>
                    <hr class="mt-4" />
                    <div class="col-12">
                        <NavLink to="/register" class="text-center mb-0" style={{textDecoration: 'none'}}>Have not account yet? <Button to="/register" variant="text">Signup</Button></NavLink>
                    </div>
                        {isLoading && <Spinner animation="grow" />}
                        {user?.email && <div class="alert alert-success" role="alert">
                        Login Successful!
                        </div>}
                        {authError && <div class="alert alert-success" role="alert">
                        {authError}</div>}
                </div>
            </div>
        </div>
    </div>
    
    );
};

export default Login;