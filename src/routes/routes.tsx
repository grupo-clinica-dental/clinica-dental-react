import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import MainLayout from '../pages/layouts/dashboard-layout';
import SimpleLayout from '../pages/layouts/SimpleLayout';
import { ProtectedRoute } from '../pages/auth/protected-route-page';
import { Suspense, lazy } from 'react';
import AppointmentsLayout from '../pages/layouts/appointments/appointmentsLayOut';
import AppointmentById from '../pages/appointments/appointments-by-id-page';

const HomePage = lazy(() => import('../pages/home/home-page'));
const PatientsPage = lazy(() => import('../pages/patients/patients-page'));
const SettingsPage = lazy(() => import('../pages/settings/settings-page'));
const AppointmentsPage = lazy(() => import('../pages/appointments/appointments-page'));
const LoginPage = lazy(() => import('../pages/auth/login-page'));
const Page404 = lazy(() => import('../pages/errors/error-404-page'));

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      ),
      children: [
        { element: <Navigate to="/login" />, index: true },
        {
          path: 'home',
          element: (
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'appointments',
          element: (
            <ProtectedRoute>
              <AppointmentsLayout></AppointmentsLayout>
            </ProtectedRoute>
          ),
          children: [
            {
              element: (
                <ProtectedRoute>
                  <AppointmentsPage />
                </ProtectedRoute>
              ),
              index: true,
            },
            {
              path: 'new',
              element: (
                <ProtectedRoute>
                  <div>Create new Appointment</div>
                </ProtectedRoute>
              ),
            },
            {
              path: ':id',
              element: (
                <ProtectedRoute>
                  <AppointmentById></AppointmentById>
                </ProtectedRoute>
              ),
            },
          ],
        },
        {
          path: 'patients',
          element: (
            <ProtectedRoute>
              <PatientsPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'settings',
          element: (
            <ProtectedRoute>
              <SettingsPage />
            </ProtectedRoute>
          ),
        },
      ],
    },

    {
      path: 'login',
      element: (
        <Suspense>
          <LoginPage />
        </Suspense>
      ),
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

  return <Suspense fallback={<div className="text-7xl font-bold text-black">Cargando...</div>}>{routes}</Suspense>;
}
