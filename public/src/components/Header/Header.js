import React from 'react';

import {Navbar,Button,Container ,Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../../assert/Logo.png';

import './Header.css';
const Header = () => {
    return (
      <Container>
      <Navbar>
      <Navbar.Brand href="/home"><img className='logo' src={logo} alt='logo'/></Navbar.Brand>
      <input type='text' placeholder='Search your destination' />
      <Nav className="ml-auto">
        <Nav.Link className='custom-color' href="/news">News</Nav.Link>
        <Nav.Link className='custom-color' href="/destination">Destination</Nav.Link>
        <Nav.Link className='custom-color' href="/blog">Blog</Nav.Link>
        <Nav.Link className='custom-color' href="/contact">Contact</Nav.Link>
      </Nav>
      
    
        <Button variant="warning">Login</Button>
    
    </Navbar>
    </Container>
    );
};

export default Header;