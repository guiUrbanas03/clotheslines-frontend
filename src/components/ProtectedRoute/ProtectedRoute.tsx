import React, { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ProtectedRouteProps } from './ProtectedRoutes.types';

const ProtectedRoute: FC<ProtectedRouteProps> = ({
  hasAccess, redirectTo
}): JSX.Element => {
  if (!hasAccess) {
    return <Navigate to={redirectTo} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
