import React from "react"
import { Nav,Navbar} from "react-bootstrap"
import { Link } from "react-router-dom";
import styles from 'Ui/styles/SideNavBar.module.scss'

export default function NavigationBar(){
    return (
    <div className="justfiy-content-center">
      <Navbar className={styles['side-nav-bar']} bg="dark" variant="dark"  >
      <Nav className="flex-column">
      <Nav.Link className={styles['nav-link']} as={Link} to="/Orders">Orders</Nav.Link>
      <Nav.Link className={styles['nav-link']} as={Link} to="/Catalogue">Catalogue</Nav.Link>
      <Nav.Link className={styles['nav-link']} as={Link} to="/Settings">Settings</Nav.Link>
      </Nav>
      </Navbar>
    </div>
      
    );
}