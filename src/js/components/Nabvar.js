import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default (props) => {
    return (
        <>
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand class="navlinker" href="/">StoryTime</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link ><Link class="navlinker" to="/">Write A Story</Link></Nav.Link>
                        <Nav.Link ><Link class="navlinker" to="/mywords">My Words</Link></Nav.Link>
                        <Nav.Link ><Link class="navlinker" to="/mystories">My Stories</Link></Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <br />
            {/* allows other components to appear below */}
            {props.children}
        </>
    )
}
