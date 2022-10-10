import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'


function Header() {
  return (
    <Navbar bg="warning" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><FontAwesomeIcon icon={faPuzzlePiece} size={'xl'}/>Quiz Contest</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
           <div className='link-section'>
           <Link to='/home'>Home</Link>
            <Link to='/service'>service</Link>
            <Link to='/order'>order</Link>
           </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;