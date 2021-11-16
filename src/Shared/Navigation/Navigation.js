import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from "./../../logo.png";


const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar style={{backgroundColor: '#0C0C10', height:'80px'}} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/home" className="fw-bold fs-2" >
          <img width="80px" src={logo} alt="" />{" "}
          <span className='text-light'>Stone</span> <span style={{color: '#bba151'}}>Crops</span>
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
            <Nav.Link as={Link} to="/dashboardnav" className="text-light fs-6 me-2 fw-bold">
              DashBoard
            </Nav.Link>

            {!user.email ? (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </>
            ) : (
              <button
                onClick={logOut}
                className="btn btn-outline-secondary fw-bold"
              >
                Log Out
              </button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
