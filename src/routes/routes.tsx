import { Navigate, useRoutes } from 'react-router-dom';
import HomePage from '../pages/home/home-page';
import LoginPage from '../pages/auth/login-page';
import RegisterUser from '../pages/auth/register-page';
import PatientsPage from '../pages/patients/patients-page';
import SettingsPage from '../pages/settings/settings-page';
import AppointmentsPage from '../pages/appointments/appointments-page';
import DashBoardLayout from '../pages/layouts/dashboard-layout';
import Page404 from '../pages/errors/error-404-page';
import SimpleLayout from '../pages/layouts/SimpleLayout';
import { ProtectedRoute } from '../pages/auth/protected-route-page';
import { useAuthStore } from '../store/auth';

export default function Router() {
  const isAuth = useAuthStore((state) => state.isAuth);

  const routes = useRoutes([
    {
      path: '/dashboard',
      element: (
        <ProtectedRoute isAllowed={isAuth}>
          <DashBoardLayout />
        </ProtectedRoute>
      ),
      children: [
        { element: <Navigate to="/dashboard/inicio" />, index: true },
        { path: 'inicio', element: <HomePage /> },
        { path: 'usuarios', element: <RegisterUser /> },
        { path: 'citas', element: <AppointmentsPage /> },
        { path: 'pacientes', element: <PatientsPage /> },
        { path: 'ajustes', element: <SettingsPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/login" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
