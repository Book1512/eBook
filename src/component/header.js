import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import css
import '../App.css';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="219150" variant="light" fixed='top' className='navbar'>
      <Container>
        <Navbar.Brand>
          <h2>Book Archive</h2>
        </Navbar.Brand>


        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

         {/* Menubar start here */}
         
          <Nav className="me-auto header" style={{margin:'auto'}}>
            <Nav.Link href="#home"  className='menu'>Home</Nav.Link>
            <Nav.Link href="#category"  className='menu'>Category</Nav.Link>
            <Nav.Link href="#author"  className='menu'>Author</Nav.Link>
            <Nav.Link href="#book_corner"  className='menu'>Book Corner</Nav.Link>
            <Nav.Link href="#our_team"  className='menu'>Our Team</Nav.Link>


            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary" className=''>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;