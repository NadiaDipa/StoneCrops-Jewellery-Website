import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                


                {/* form */}
                        <section class="">
                            <form action="">
                        
                                <div class="row d-flex justify-content-center">
                            
                                    <div class="col-auto">
                                        <p class="pt-2" style={{color:' #bba151'}}>
                                        <p className="fw-bold fs-3 text-white">Sign up for our newsletter</p>
                                        </p>
                                    </div>
                                    <div class="col-md-5 col-12 mt-2">
                                
                                        <div class="form-outline form-white mb-4">
                                            <input type="email" id="form5Example21" placeholder="Enter Your Email Address" class="form-control" />
                                        
                                        </div>
                                    </div>
                                    <div class="col-auto mt-2">
                        
                                        <button type="submit" className="btn btn-outline-light mb-4 subscribe-btn" style={{color: '#bba151'}}>
                                        SUBSCRIBE
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </section>

                <div className="footer-link mt-4">
                    <div>
                        <h4 className="ms-4" style={{color: '#bba151'}}>CONTACT US</h4>
                       <ul className="footer-item text-light">
                            <li>60,24th Road No #12, Wireless Gate, CA 902945, Mohakhali, Dhaka, Bangladesh</li>
                            <li>+01 7779 990 / +91 4447 343</li>
                            <li>stonecrops@gmail.com</li>
                           
                        </ul>

                    </div>
                    <div>
                        <h5 className="ms-4 mb-4 fs-4" style={{color: '#bba151'}}>INFORMATION</h5>
                        <ul className="footer-item text-light me-2">
                            <li >About Us</li>
                            <li >Contact Us</li>
                          
                            <li >Terms & Conditons</li>
                            <li >shipping & Delivery</li>
                            <li >Privacy Policy</li>
                        </ul>

                    </div>
                    <div className="text-light">
                        <h5 className="ms-4 mb-3 fs-4" style={{color: '#bba151'}}>Collection</h5>
                         <ul className="footer-item me-2">
                            <li>Rare Edge</li>
                            <li>Rare High</li>
                            <li>Rare Classic</li>
                            <li>Rare Jewellery</li>
                            <li>Rare Design</li>
                        </ul>
                    </div>
                    
                    <div className="text-danger">
                        <h5 className=" ms-4 mb-3" style={{color: '#bba151'}}>NEED HELP</h5>
                        <ul>
                            <Link className="footer-ancor-link footer-item text-white" to="/home"><li>Your Account</li></Link>
                            <Link className="footer-ancor-link footer-item text-white" to="/about"><li>Returns Center</li></Link>
                            <Link className="footer-ancor-link footer-item text-white" to="/manage-orders"><li>Purchase</li></Link>
                            <Link className="footer-ancor-link footer-item text-white" to="/my-orders"><li>App Download</li></Link>
                            <Link className="footer-ancor-link footer-item text-white" to="/add-service"><li>Help</li></Link>
                           
                        </ul>
                    </div>
                </div>
                
                <hr style={{color: 'white'}} />
                <div className="row">
                    <div className="col-6"><p className="text-center text-light fs-6 mt-4">Copyright &copy; 2021 <span style={{ color: '#bba151' }}>StoneCrops</span></p></div>
                    <div class="container pt-4 col-6">
                        <div class="container">
                           
                            </div>
                        <section class="">
                                                        {/* Facebook */}
                            <a class="btn btn-primary btn-floating m-1" style={{backgroundColor: '#3b5998'}} href="#!" role="button"><i class="fab fa-facebook-f"></i></a>

                            {/* Twitter  */}
                            <a class="btn btn-primary btn-floating m-1" style={{backgroundColor: '#55acee'}} href="#!" role="button"><i class="fab fa-twitter"></i></a>

                            {/* Google */}
                            <a class="btn btn-primary btn-floating m-1" style={{backgroundColor: '#dd4b39'}} href="#!" role="button"><i class="fab fa-google"></i></a>

                            {/* Instagram */}
                                <a class="btn btn-primary btn-floating m-1" style={{backgroundColor: '#ac2bac'}} href="#!" role="button"><i class="fab fa-instagram"></i></a>
                            

                            {/* Linkedin */}
                                <a class="btn btn-primary btn-floating m-1" style={{backgroundColor: '#0082ca'}} href="#!" role="button"><i class="fab fa-linkedin-in"></i></a>
                                                
                            {/* Github */}
                                <a class="btn btn-primary btn-floating m-1" style={{backgroundColor: '#333333'}} href="#!"
                                role="button"><i class="fab fa-github"></i></a>
                        </section>
                </div>
                </div>

               
            </footer>
        </div>
    );
};

export default Footer;