import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore2 } from '../../store/auth';
import { ROLES } from '../../constants/roles';

interface ProtectedRoutesProps {
  children: ReactNode;
}

// Asume que esto es tu tienda Zustand

export const ProtectedRoute = ({ children }: ProtectedRoutesProps) => {
  // Obtener ambos estados en una sola llamada
  const { isAuth, profile } = useAuthStore2((state) => ({ isAuth: state.isAuth, profile: state.profile }));

  const acceptedRoles = [ROLES.ADMIN, ROLES.DOCTOR];

  // Verificar si el usuario tiene un rol aceptado
  if (profile && !acceptedRoles.includes(profile?.rol)) {
    return <Navigate to={'/unauthorized'} />;
  }

  // Verificar si el usuario está autenticado
  if (!isAuth) {
    return <Navigate to={'/login'} />;
  }

  return <>{children}</>;
};
