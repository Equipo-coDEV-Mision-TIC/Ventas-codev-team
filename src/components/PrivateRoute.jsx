import { useUser } from 'context/userContext';
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ roleList, children }) => {
  const {isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return<div className='text-9xl text-red-500 '>Loading...</div>;

  return isAuthenticated ? <>{children}</> : <div className='text-9xl text-red-500 '>No estás autorizado para ver este sitio.</div>;
  } 
export default PrivateRoute;