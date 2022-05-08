import { Navigate, useLocation } from 'react-router-dom';
import { Authentication } from 'controllers/authentication/Authentication';
import React from "react";
export default function PrivateRoutes({ children }) {
    const location = useLocation();
    if (Authentication.isLoggedIn()) {
        return children;
    }
    return (React.createElement(Navigate, { to: "/Login", replace: true, state: { from: location } }));
}
//# sourceMappingURL=PrivateRoutes.js.map