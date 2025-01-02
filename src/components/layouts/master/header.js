import React from 'react'
import { Row, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { BsBag } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import styles from './header.module.scss';

const header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" style={{ height: '5rem' }}>
            <Container>
                <Navbar.Brand href="/"className={styles.hname}>MKM Parfum</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="mx-auto">
                        <Nav.Link href="/" className={styles.menulst}>Home</Nav.Link>
                        <Nav.Link href="/about" className={styles.menulst}>About Us</Nav.Link>
                        <Nav.Link href="/shop" className={styles.menulst}>Shop</Nav.Link>
                        <Nav.Link href="/blog" className={styles.menulst} >Blog</Nav.Link>
                        <Nav.Link href="/contact" className={styles.menulst}>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav className={styles.navcrtSec}>
                    <Nav.Link href="/cart" className={styles.navcrtmenu}> <BsBag size={24} /></Nav.Link>
                    <Nav.Link className={styles.navcrtmenu} ><IoSearchOutline size={24} /></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default header