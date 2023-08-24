import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore2 } from '../../store/auth';
import { ROLES } from '../../constants/roles';

interface ProtectedRoutesProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRoutesProps) => {
  const isAllowed = useAuthStore2((state) => state.isAuth);
  const user = useAuthStore2((state) => state.profile);

  const acceptedRoles = [ROLES.ADMIN, ROLES.DOCTOR];

  if (user && !acceptedRoles.includes(user?.rol)) {
    return <Navigate to={'/login'} />;
  }

  if (!isAllowed) {
    return <Navigate to={'/login'} />;
  }
  return <>{children}</>;
};
