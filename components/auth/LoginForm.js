import React from "react";
import { Card, Col } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";
import 'styles/LoginForm.module.scss';
export default function LoginForm(props) {
    let username = '';
    let password = '';
    function updateUsername(value) {
        username = value;
    }
    function updatePassword(value) {
        password = value;
    }
    return (React.createElement(Container, null,
        React.createElement(Row, null,
            React.createElement(Col, { className: "col-sm-9 col-md-7 col-lg-5 mx-auto" },
                React.createElement(Card, { className: "border-0 shadow rounded-3 my-5" },
                    React.createElement(Card.Body, { className: "card-body p-4 p-sm-5" },
                        React.createElement(Card.Title, { className: "card-title text-center mb-5 fw-light fs-5" }, "Sign In"),
                        React.createElement(Form, null,
                            React.createElement(Form.Floating, { className: "mb-3" },
                                React.createElement(Form.Control, { type: "text", onChange: (e) => updateUsername(e.target.value), id: "floatingInput", placeholder: "Username" }),
                                React.createElement("label", { htmlFor: "floatingInput" }, "Username")),
                            React.createElement(Form.Floating, { className: "mb-3" },
                                React.createElement(Form.Control, { type: "password", onChange: (e) => updatePassword(e.target.value), id: "floatingPassword", placeholder: "Password" }),
                                React.createElement("label", { htmlFor: "floatingPassword" }, "Password")),
                            React.createElement("div", { className: "d-grid" },
                                React.createElement(Button, { className: "btn btn-primary btn-login text-uppercase fw-bold", onClick: () => props.login(username, password) }, "Signin")))))))));
}
//# sourceMappingURL=LoginForm.js.map