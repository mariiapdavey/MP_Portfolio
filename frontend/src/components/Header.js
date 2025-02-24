import React from 'react';
import MP_logo from '../MP_logo.svg';
import { Container, Navbar, Nav } from 'react-bootstrap';


const Header = () => {
  return (
    <header className="custom-gradient">
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img 
                        src={MP_logo}
                        height="150"
                        className="d-inline-block align-top" 
                        alt="Mariia Pozhar logo" 
                       />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#about">About + Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header