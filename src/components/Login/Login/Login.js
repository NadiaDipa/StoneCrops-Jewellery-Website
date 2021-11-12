// import React from 'react';
// import { useHistory, useLocation } from 'react-router';
// import useFirebase from '../../../hooks/useFirebase';




// const Login = () => {
//    const { handleGoogleSignIn, setError , setIsLoading} = useFirebase();
//     const history = useHistory();
//     const location = useLocation();
//     const redirect_url = location.state?.from || '/home'
//     const signInUsingGoogle = () => {
//         handleGoogleSignIn()
//             .then(result => {
//                 history.push(redirect_url)
//             })
//             .catch((error) => {
//                 const errorMessage = error.message;
//                 setError(errorMessage);
//             })
//             .finally(() => {
//                 setIsLoading(false);
//             })
//     }
//     return (
//         <div className="google-button w-50 mt-5 px-5 py-5 mx-auto shadow bg-dark">
//             <h1 className="mb-4 fs-3 mt-2 text-danger">Login Using <span className="text-Warning">Google</span></h1>
//             <button className="google-sign-in btn btn-outline-danger" onClick={signInUsingGoogle}><i className="fab fa-google fs-3 me-2 google-sign"></i> Google Login</button>
//         </div>
//     );
// };

// export default Login;









// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Login = () => {
//     const [loginData, setLoginData] = useState({})
//     const handleOnChange= e => {
//         const field = e.target.name;
//         const value = e.target.value;
//         // console.log(field, value)
//         const newLoginData = { ...loginData };
//         newLoginData[field] = value;
//         setLoginData(newLoginData);
        

//     }
//     const handleLoginSubmit = e => {
        
//         e.preventDefault();
//     }
//     return (
//         <div class="container">
//             <div class="row row-cols-2">
//                 <div class="col">
//                     <form onSubmit={handleLoginSubmit}>
//                 <div className="mb-4">
//                     <p className="text-center">Welcome Back</p>
//                     <h2 className="login-header">Login to your account</h2>
//                     <hr />
//                 </div>
                        

//                 {/* email input field */}
//                 <div className="mb-3">
//                     <label for="exampleInputEmail1" className="form-label">Email address</label>
//                     <input required onBlur="" type="email"
//                     name="email"
//                     onChange={handleOnChange}
//                     className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />      
//                     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//                 </div>
                        


//                 {/* password input field */}
//                 <div className="mb-3">
//                     <label for="exampleInputPassword1" className="form-label">Password</label>
//                     <input onBlur="" type="password" name="password"
//                     onChange={handleOnChange} className="form-control" id="exampleInputPassword1" required />
                 
//                 </div>
                        


//                 <div className="mb-3 form-check">
//                     <input onBlur="" type="password"
//                     name="password"
//                     onChange={handleOnChange}
//                     className="form-check-input" id="exampleCheck1" />
//                     <label className="form-check-label" for="exampleCheck1">Keep me logged in</label>
                    
//                     <Link style={{textDecoration:'none'}} className="forget-pass"> Forget Your Password?</Link>
                    
//                 </div>
//                     <button type="submit" className="btn btn-primary">Submit</button>
//                     {/* <NavLink  to="/register"></NavLink>
//                     <Button variant="text">New User? Please Register</Button> */}
//                     <p> Don't have an account? <Link style={{textDecoration:'none'}} to="/register">New User? Please Register</Link></p>
                
//             </form>
//                 </div>
//                 <div class="col">Yes I'm here</div>
//             </div>
//         </div>      
//     );
// };

// export default Login;





import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../../Hook/useFirebase';




const Login = () => {
   const { handleGoogleSignIn, setError , setIsLoading} = useFirebase();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home'
    const signInUsingGoogle = () => {
        handleGoogleSignIn()
            .then(result => {
                history.push(redirect_url)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }
    return (
        <div className="google-button w-50 mt-5 px-5 py-5 mx-auto shadow bg-dark">
            <h1 className="mb-4 fs-3 mt-2 text-danger">Login Using <span className="text-Warning">Google</span></h1>
            <button className="google-sign-in btn btn-outline-danger" onClick={signInUsingGoogle}><i className="fab fa-google fs-3 me-2 google-sign"></i> Google Login</button>
        </div>
    );
};

export default Login;