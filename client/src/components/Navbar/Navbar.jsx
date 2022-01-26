import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AppNavbar() {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Workout Your Way</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to="/home">Home</Link>
          <Link to="/profile">Profile</Link>
          <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">My Workout Plans</NavDropdown.Item>
            <NavDropdown.Item href="/workout-log">Workout Log</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Calendar</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Workouts</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Create Your Own Workout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default AppNavbar;

