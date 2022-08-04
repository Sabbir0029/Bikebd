import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="pt-4">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/home">BikeBD</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home" className="text-light">Home</Nav.Link>
              <Nav.Link as={Link} to="/order" className="text-light">My Order</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/register" className="text-light">
                Register
              </Nav.Link>
              {user?.email ? (
                <Link to="/" onClick={logOut} className="text-decoration-none mt-2 mx-2 text-light">LogOut</Link>
              ) : (
                <Nav.Link as={Link} to="/login" className="text-light">
                  Login
                </Nav.Link>
              )}
              {user?.email ? (
                <div className="d-flex photo">
                  {user?.photoURL ? (
                    <img src={user.photoURL} className=" ms-3 rounded-circle" />
                  ) : ""}
                  <p className="text-light text-decoration-none mt-2">
                    <small>{user.displayName}</small>
                  </p>
                </div>
              ) : (
                ""
              )}
              {/* {!user?.email ||<p className="text-light text-decoration-none mt-1">
                    <small>{user.displayName}</small>
                  </p>} */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
