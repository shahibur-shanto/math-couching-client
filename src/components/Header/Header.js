import React from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home"><h2>Computer Valley</h2></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Link className="menu-item" to="/">Home</Link>
      <Link  className="menu-item" to="/order">Order</Link>
      <Link className="menu-item" to="/admin">Admin</Link>
      <Link  className="menu-item" to="#">Deals</Link>
      <Link className="menu-item" to='/login'><button className="btn btn-primary">Login </button></Link>
    </Nav>

  </Navbar.Collapse>
  </Navbar>

        </>
        </div>
    );
};

export default Header;