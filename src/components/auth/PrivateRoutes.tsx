import { Navigate, useLocation } from 'react-router-dom';
import { Authentication } from 'controllers/authentication/Authentication';
import React from "react";

export default function PrivateRoutes ({ children }: { children: JSX.Element }) {
  const location = useLocation();
  if(Authentication.isLoggedIn()){
    return children;

  }
  return (<Navigate to="/Login" replace state={{ from: location }} />);
}
