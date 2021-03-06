import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Fade from 'react-reveal/Fade';
import logo from "./../../logo.png";


const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
     <Fade top>
    <Navbar style={{backgroundColor: '#010101', height:'80px'}} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/home" className="fw-bold fs-2" >
          <img width="80px" src={logo} alt="" />{" "}
          <span className='text-light' style={{letterSpacing:'5px'}}>STONE</span> <span style={{color: '#bba151',letterSpacing:'5px'}}>CROPS</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/home" className="text-light fs-6 me-2 fw-bold">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/explore" className="text-light fs-6 me-2 fw-bold">
              Explore
            </Nav.Link>
          

            {!user.email ? (
              <>
                <Nav.Link as={Link} to="/login" className="text-light">
                  Login
                </Nav.Link>
              </>
              ) : (
              <>
                <Nav.Link as={Link} to="/dashboard" className="text-light fs-6 me-2 fw-bold">
                DashBoard
                </Nav.Link>
              
              
              <button
                onClick={logOut}
                className="btn btn-secondary fw-bold"
              >
                Log Out
              </button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    </Fade>
  );
};

export default Navigation;
