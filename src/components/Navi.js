import { Link } from "react-router-dom";

import { Navbar, Nav, Container } from "react-bootstrap";

import { useState } from "react";

/*
Navi.js contains the Navi component that uses Navbar, Nav and Container elements from react-bootstrap.
It's a navbar that is responsive. I modded it's looks with some custom css.
*/

const Navi = ({ theme }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar
      className="Navi"
      bg={theme === "alt" ? "myBg2" : "myBg"}
      style={{ borderRadius: theme === "alt" ? "0px" : null }}
      variant="dark"
      sticky="top"
      expand="md"
      expanded={expanded}
    >
      <Navbar.Brand
        className={theme === "alt" ? "header-alt" : "Header"}
        as={Link}
        to="/"
      >
        My Todo-app
      </Navbar.Brand>
      <Navbar.Toggle
        className="Toggle"
        aria-controls="responsive-navbar-nav"
        onClick={() => setExpanded(expanded ? false : "expanded")}
      />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Container className="Links">
          <Nav
            className="col justify-content-center"
            style={{
              fontFamily: theme === "alt" ? "sans-serif" : null,
            }}
          >
            <Nav.Link
              className={theme === "alt" ? "nav-link-alt" : "nav-link"}
              as={Link}
              to="/"
              onClick={() => setExpanded(false)}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={theme === "alt" ? "nav-link-alt" : "nav-link"}
              as={Link}
              to="/settings"
              onClick={() => setExpanded(false)}
            >
              Settings
            </Nav.Link>
            <Nav.Link
              className={theme === "alt" ? "nav-link-alt" : "nav-link"}
              as={Link}
              to="/about"
              onClick={() => setExpanded(false)}
            >
              Info
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navi;
