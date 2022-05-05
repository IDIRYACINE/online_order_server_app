import React from "react"
import {Container, Nav,Navbar} from "react-bootstrap"
import styles from 'styles/SideNavBar.module.css'

export default function NavigationBar(){
    return (
    <Container fluid>
      <Navbar className={styles.NavBar} id="NavBar" bg="dark" variant="dark"  >
      <Nav className="flex-column">
      <Nav.Link >Orders</Nav.Link>
      <Nav.Link  >Catalogue</Nav.Link>
      <Nav.Link  >Settings</Nav.Link>
      </Nav>
      </Navbar>
    </Container>
      
    );
}