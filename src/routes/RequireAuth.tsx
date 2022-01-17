import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function RequireAuth({ children }: { children: JSX.Element }): JSX.Element {
  const auth = useAuth();

  if (!auth.user.id) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default RequireAuth;
