import { Link } from "react-router-dom";
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navi.css";
const Navi = () => {
  return (
    <Navbar className="Navi" bg="myBg" variant="dark" sticky="top" expand="md">
      <Navbar.Brand className="Header" as={Link} to="/">
        My Todo-app
      </Navbar.Brand>
      <Navbar.Toggle className="Toggle" aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Container className="Links">
          <Nav className="col justify-content-center">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/settings">
              Settings
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navi;
