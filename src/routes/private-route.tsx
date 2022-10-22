import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/use-auth';

const PrivateRoutes: React.FC = () => {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Navigate to='/auth/login' />;
};

export default PrivateRoutes;
