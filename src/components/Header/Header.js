import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from "./../../logo.png";
import "./Header.css";

const Header = () => {
    return (
        <Navbar style={{backgroundColor:'#000000'}} expand="lg">
            <Container>
                <img width="80px" src={logo} alt="" />{" "}
                <Navbar.Brand className="fs-2 fw-bold text-light" to="/home">Stone<span style={{color: '#bba151'}}>Crops</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavLink className="header-item ms-4 text-decoration-none nav-item text-light fw-bold" to="/home">Home</NavLink>
                    <NavLink className="header-item ms-4 text-decoration-none nav-item text-light fw-bold" to="/addServices">Add Services</NavLink>
                    <NavLink className="header-item header-item ms-4 text-decoration-none nav-item text-light fw-bold" to="/myOrders">My Orders</NavLink>
                        
                    <NavLink to="/adminDashboard">
                        <button className="header-btn items btn p-1 ms-4 fw-bold">Admin</button>
                    </NavLink>
                    <NavLink to="/admin">
                        <button className="header-btn items btn p-1 ms-4 fw-bold">
                      Logout
                    </button>
                    </NavLink>
                  
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;