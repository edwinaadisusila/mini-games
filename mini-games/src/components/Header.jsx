import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const style = {
  borderBottom: '1px solid #E7E7E7',
  padding: '10px 20px',
  marginBottom: '10px',
}

function Header ({ title }) {
  return (
    <header>
      <Navbar collapseOnSelect bg="light" expand="lg" style={style}>
        <Navbar.Brand className='navbar-brand'>
          {title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#partners">Partners</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}
  
export default Header
  