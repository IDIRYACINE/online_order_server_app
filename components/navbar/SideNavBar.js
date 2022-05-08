import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from 'styles/SideNavBar.module.scss';
export default function NavigationBar() {
    return (React.createElement("div", { className: "justfiy-content-center" },
        React.createElement(Navbar, { className: styles['side-nav-bar'], bg: "dark", variant: "dark" },
            React.createElement(Nav, { className: "flex-column" },
                React.createElement(Nav.Link, { className: styles['nav-link'], as: Link, to: "/Orders" }, "Orders"),
                React.createElement(Nav.Link, { className: styles['nav-link'], as: Link, to: "/Catalogue" }, "Catalogue"),
                React.createElement(Nav.Link, { className: styles['nav-link'], as: Link, to: "/Settings" }, "Settings")))));
}
//# sourceMappingURL=SideNavBar.js.map