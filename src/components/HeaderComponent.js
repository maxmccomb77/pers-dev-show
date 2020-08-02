import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/home">Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/resume">Resum&eacute;</Nav.Link>
          <NavDropdown title="Programming Examples" id="basic-nav-dropdown">
            <NavDropdown.Item href="/resume">Example1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Example2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Example3</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    );
  }
}

export default Header;
