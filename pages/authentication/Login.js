import React from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import LoginForm from 'components/auth/LoginForm';
import { Authentication } from 'controllers/authentication/Authentication';
export default function Login() {
    let navigate = useNavigate();
    function connect(username, password) {
        Authentication.setOnConnectAction(onConnectCallback);
        Authentication.loginWithUsernameAndPassword(username, password);
    }
    function onConnectCallback() {
        navigate('/Orders', { replace: true });
    }
    return (React.createElement(Container, null,
        React.createElement(LoginForm, { login: connect })));
}
//# sourceMappingURL=Login.js.map