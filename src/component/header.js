import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed='top'>
      <Container>


        {/* <Navbar.Brand>
          <img src='logo.png' alt='Logo is here' style={{width:200}}/>
        </Navbar.Brand> */}


        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

         {/* Menubar start here */}
         
          <Nav className="me-auto" style={{margin:'auto'}}>
            <Nav.Link href="#Home">Home</Nav.Link>
            
            <NavDropdown title="Catagories" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Envaronmant</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Lifestyle
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Personality</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>


            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;