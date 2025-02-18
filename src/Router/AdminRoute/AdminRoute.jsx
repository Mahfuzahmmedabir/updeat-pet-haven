import React from 'react';
import useAdmin from '../../hooks/useAdmin/useAdmin';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth';

const AdminRoute = ({ children }) => {
  const { user, lodging } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const navigat = useNavigate();
  if (lodging || isAdminLoading) {
    return (
      <>
        <h2>Lodging....</h2>
      </>
    );
  }
  if (user && isAdmin) {
    return children
  }
  navigat('/')


 

 
  
  
  return (
    <div>
      
    </div>
  );
};

export default AdminRoute;