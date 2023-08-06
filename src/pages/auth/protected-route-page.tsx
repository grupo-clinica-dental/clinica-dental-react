import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRoutesProps {
  isAllowed: boolean;
  children: ReactNode;
}

export const ProtectedRoute = ({ isAllowed, children }: ProtectedRoutesProps) => {
  if (!isAllowed) return <Navigate to={'/login'} />;
  return <>{children}</>;
};
