import React from 'react';
import useAuth from '../../hooks/useAuth/useAuth';
import { Navigate } from 'react-router-dom';
import { Spinner } from '@material-tailwind/react';
const ProtectedRoute = ({ children }) => {
  const { user, lodging } = useAuth();
  if (lodging) {
    return (
      <>
        <Spinner className="h-8 w-8 mx-auto mt-10" />
      </>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={'/login'}></Navigate>;
};

export default ProtectedRoute;
