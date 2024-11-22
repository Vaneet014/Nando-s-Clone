import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import './Header.css';



function Header() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container className="navbar-container">
        <Navbar.Brand as={Link} to="/" className="brand">
          <img 
            src="https://www.nandos.co.uk/sites/all/themes/nandos/nandos-2015-styleguide-dist/images/layout/barci-Icon.svg" 
            alt="Nando's Logo" 
            className="brand-logo" 
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="menu-items">
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>

            <NavDropdown title="Restaurants" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/locations">Find a Restaurant</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/delivery">Delivery Options</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Nando's Rewards" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/rewards">Sign Up</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/rewards-details">How it Works</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Cook" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/recipes">Recipes</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sauces">Our Sauces</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/our-story">Our Story</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/careers">Careers</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sustainability">Sustainability</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Help" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/faq">FAQ</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contact">Contact Us</NavDropdown.Item>
            </NavDropdown>
           
            <Nav.Link as={Link} to="/to-do-list">To-Do List</Nav.Link>
          <Button as={Link} to="/order-online" className="order-online-btn">
            Order Online
          </Button>
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
