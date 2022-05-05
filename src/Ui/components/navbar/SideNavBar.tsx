import React from "react"
import {Container, Nav,Navbar} from "react-bootstrap"
import { Link } from "react-router-dom";
import '../../styles/SideNavBar.css'

export default function NavigationBar(){
    return (
    <Container fluid>
      <Navbar id="NavBar" bg="dark" variant="dark"  >
      <Nav className="flex-column">
      <Nav.Link as={Link} to="/Orders">Orders</Nav.Link>
      <Nav.Link as={Link} to="/Catalogue">Catalogue</Nav.Link>
      <Nav.Link as={Link} to="/Settings">Settings</Nav.Link>
      </Nav>
      </Navbar>
    </Container>
      
    );
}