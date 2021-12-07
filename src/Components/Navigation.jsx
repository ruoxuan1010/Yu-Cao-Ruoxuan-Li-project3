import React from 'react';
// import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';


export function Navigation() {
    return (<Navbar bg="light" expand="lg">
        <Container>
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/search">Search</Nav.Link>
                <Nav.Link href="/create">Create New Job</Nav.Link>
                <Nav.Link href="/favorites">Favorites</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="/registration">Register</Nav.Link>
                <Nav.Link href="/signin">Sign In</Nav.Link>
            </Nav>
        </Container>
    </Navbar>);
}