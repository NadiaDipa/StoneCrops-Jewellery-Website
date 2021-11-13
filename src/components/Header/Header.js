import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import logo from "./../../logo.png";
import './Header.css';


const Header = () => {
    const {user, logout} = useAuth();
    return (
        <div>
            <Navbar className="header-color" expand="lg">
                <Container className="d-flex justify-content-center align-items-center">
                     <img width="80px" src={logo} alt="" />{" "}
                    <Navbar.Brand className="fs-2 fw-bold text-light" to="/home">Stone <span style={{color: '#bba151'}}>Crops</span> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <NavLink className="ms-4 text-decoration-none nav-item text-light fw-bold header-section" to="/home">Home</NavLink>
                        <NavLink className="ms-4 text-decoration-none nav-item text-light fw-bold header-section" to="/manage-orders">Manage Orders</NavLink>
                        <NavLink className="ms-4 text-decoration-none nav-item text-light fw-bold header-section" to="/add-services">Add Services</NavLink>
                        <NavLink className="ms-4 me-4 text-decoration-none nav-item text-light fw-bold header-section" to="/my-orders">My Orders</NavLink>

                        
                        {
                            user?.email ?
                            <NavLink onClick={logout} className="ms-4 text-decoration-none nav-item text-light fw-bold" to="/logout">Logout</NavLink>

                            :
                            <NavLink className="ms-4 text-decoration-none nav-item text-light fw-bold" to="/login">Log In</NavLink>

                        }











                        {/* <Nav Nav className = "ms-auto d-flex align-items-center"
                        style = {
                            {
                                color: 'white'
                            }
                        } >
                            <NavLink className="ms-4 text-decoration-none nav-item text-light fw-bold header-section" to="/home">Home</NavLink>
                            {
                                !user.displayName ? (<> <NavLink className="ms-4 text-decoration-none nav-item text-light fw-bold" to="/login">Log In</NavLink>
                                    
                                </>) : (<>
                                    <NavLink className="ms-4 text-decoration-none nav-item text-light fw-bold header-section" to="/manage-orders">Manage Orders</NavLink>
                                    <NavLink className="ms-4 text-decoration-none nav-item text-light fw-bold header-section" to="/add-services">Add Services</NavLink>
                                    <NavLink className="ms-4 me-4 text-decoration-none nav-item text-light fw-bold header-section" to="/my-orders">My Orders</NavLink>
                                        
                                    <NavDropdown title={<img className="user-photo" src={user.photoURL} alt="user" />} id="basic-nav-dropdown">
                                    <NavDropdown.Item className="nav-login text-dark fw-bold" to="">{user.displayName}</NavDropdown.Item>
                                            <NavDropdown.Item className="nav-login fs-5" to=""><Button variant="dark" style={{ backgroundColor:'#bba151',color: '#000000' , fontSize: 17, fontWeight:"bold"}} onClick={logOut}>Log Out</Button> </NavDropdown.Item>
                                    </NavDropdown>
                                </>)
                            }
                        </Nav> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;