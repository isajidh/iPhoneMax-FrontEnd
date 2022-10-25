import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ApplicationPaths } from '../constants';
import companyLogo from "../Assets/Images/Logo/logo.png";

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  render() {
    return (
      <header>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/"><img src={companyLogo} alt="iPhoneMax Inc. logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                {/* <Nav.Link as={Link} to={ApplicationPaths.CartPath}>Cart</Nav.Link> */}
                <Nav.Link as={Link} to={ApplicationPaths.AboutPath}>About Us</Nav.Link>
                <Nav.Link as={Link} to={ApplicationPaths.LoginPath}>Login</Nav.Link>
                <Nav.Link as={Link} to={ApplicationPaths.SignUpPath}>SignUp</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
