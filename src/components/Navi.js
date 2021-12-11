import { Link } from "react-router-dom";

import { Navbar, Nav, Container } from "react-bootstrap";

import { useState } from "react";

const Navi = ({ theme }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar
      className="Navi"
      bg={theme === "alt" ? "myBg2" : "myBg"}
      variant="dark"
      sticky="top"
      expand="md"
      expanded={expanded}
    >
      <Navbar.Brand className="Header" as={Link} to="/">
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
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/settings"
              onClick={() => setExpanded(false)}
            >
              Settings
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navi;
