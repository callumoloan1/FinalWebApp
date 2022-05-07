import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';


// Login Navigation Bar
const NavBar = () => {
  return (
    <div>
<ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<ReactBootStrap.Navbar.Brand href=""> HeadHealth</ReactBootStrap.Navbar.Brand>
<ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
<ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
  <ReactBootStrap.Nav className="me-auto">
  <ReactBootStrap.Nav.Link href="./Welcome">Welcome</ReactBootStrap.Nav.Link>
  <ReactBootStrap.NavDropdown title="Health and COVID-19" id="collasible-nav-dropdown">
      <ReactBootStrap.NavDropdown.Item href="Health">My Mental Health</ReactBootStrap.NavDropdown.Item>
      <ReactBootStrap.NavDropdown.Item href="covid-19">COVID-19 Restrictions</ReactBootStrap.NavDropdown.Item>
    </ReactBootStrap.NavDropdown>
    <ReactBootStrap.NavDropdown title="My Board" id="collasible-nav-dropdown">
    <ReactBootStrap.NavDropdown.Item href="Activities">Activities</ReactBootStrap.NavDropdown.Item>
      <ReactBootStrap.NavDropdown.Item href="Post">Diary Journal & Mood Board</ReactBootStrap.NavDropdown.Item>
    </ReactBootStrap.NavDropdown>
  </ReactBootStrap.Nav>
  <ReactBootStrap.Nav>
    <ReactBootStrap.Nav.Link eventKey={2} href="Profile">
      Profile
    </ReactBootStrap.Nav.Link>
    <ReactBootStrap.Nav.Link eventKey={2} href="Contact">
      Contact
    </ReactBootStrap.Nav.Link>
  </ReactBootStrap.Nav>
</ReactBootStrap.Navbar.Collapse> 
</ReactBootStrap.Navbar>
    </div>
  )
}

export default NavBar