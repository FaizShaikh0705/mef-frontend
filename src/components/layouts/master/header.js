import React from 'react'
import { Row, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { BsBag } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import './header.module.scss';

const header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" style={{ height: '5rem' }}>
            <Container>
                <Navbar.Brand href="/" style={{ fontSize: "32px" }}>MKM Parfum</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="mx-auto">
                        <Nav.Link href="/" style={{ fontSize: "20px", color: "#000" }}>Home</Nav.Link>
                        <Nav.Link href="/about" style={{ fontSize: "20px", color: "#000" }}>About Us</Nav.Link>
                        <Nav.Link href="/blog" style={{ fontSize: "20px", color: "#000" }}>Blog</Nav.Link>
                        <Nav.Link href="/contact" style={{ fontSize: "20px", color: "#000" }}>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav className='nav-crtSec'>
                    <Nav.Link href="/cart"> <BsBag size={24} /></Nav.Link>
                    <Nav.Link ><IoSearchOutline size={24} /></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default header