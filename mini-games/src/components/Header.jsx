import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const style = {
  borderBottom: '1px solid #E7E7E7',
  padding: '10px 20px',
  marginBottom: '40px',
}

function Header ({ title }) {
  return (
    <header>
      <Navbar collapseOnSelect bg="light" expand="lg" style={style}>
        <Navbar.Brand className='navbar-brand'>
          <Link to={'/'}>{title}</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}
  
export default Header
  