import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-dark">
                <div className="footer-link">
                    <div>
                        <h4 className="text-light">Contact Us</h4>
                       <ul className="footer-item">
                            <li>60,24th Road No #12, Wireless Gate, CA 902945, Mohakhali, Dhaka, Bangladesh</li>
                            <li>+01 7779 990 / +91 4447 343</li>
                            <li>stonecrops@gmail.com</li>
                           
                        </ul>

                    </div>
                    <div>
                        <h5 className="text-light ms-4 mb-4">Information</h5>
                        <ul className="footer-item">
                            <li >About Us</li>
                            <li >Contact Us</li>
                          
                            <li >Terms & Conditons</li>
                            <li >shipping & Delivery</li>
                            <li >Privacy Policy</li>
                        </ul>

                    </div>
                    <div className="text-light">
                        <h5 className="ms-4 mb-3">Follow Us</h5>
                         <ul className="footer-item">
                            <li>FACEBOOk</li>
                            <li>INSTAGRAM</li>
                            <li>Whatsapp</li>
                            <li>TWITTER</li>
                            <li>YOUTUBE</li>
                        </ul>
                    </div>
                    
                    <div className="text-danger">
                        <h5 className="text-light ms-4 mb-3">Need Help</h5>
                        <ul>
                            <Link className="footer-ancor-link footer-item" to="/home"><li>Your Account</li></Link>
                            <Link className="footer-ancor-link footer-item" to="/about"><li>Returns Center</li></Link>
                            <Link className="footer-ancor-link footer-item" to="/manage-orders"><li>Purchase</li></Link>
                            <Link className="footer-ancor-link footer-item" to="/my-orders"><li>App Download</li></Link>
                            <Link className="footer-ancor-link footer-item" to="/add-service"><li>Help</li></Link>
                           
                        </ul>
                    </div>
                </div>
                
                <hr style={{color: 'white'}} />
                <p className="text-center text-light fs-6 mt-4">Copyright &copy; 2021 <span style={{color: '#bba151'}}>StoneCrops</span></p>
               
            </footer>
        </div>
    );
};

export default Footer;