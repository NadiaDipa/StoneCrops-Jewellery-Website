import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/home">
              Home
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
