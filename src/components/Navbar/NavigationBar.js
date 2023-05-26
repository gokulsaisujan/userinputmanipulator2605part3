import React from "react";
// import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavigationBar() {
  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="lg"
      variant="light"
      bg="light"
      className="shadow"
      id="navTop"
      // style={{
      //   backgroundColor: "#FFDEE9",
      //   backgroundImage: "linear-gradient(0deg, #e5dbd950 0%, #173d4830 100%)",
      // }}
    >
      <Container>
        <Navbar.Brand
          href="/"
          style={{ fontWeight: "500", fontSize: "1em" }}
        >
          Website responsiveness study
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {/* <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link
              eventKey={2}
              href="https://twitter.com/urstrulyMahesh"
              target="_blank"
            >
              For DDP: ursTrulyGokul
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
