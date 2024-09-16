import React from "react";
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import ProfileDataInput from "../pages/ProfileDataInputPage";
import DashboardPage from "../pages/DashboardPage";
import { LoadingScreen } from "../components/LoadingScreen";
import useUserProfile from "../hooks/useUserProfile";
import Layout from "../components/layouts/Layout";
import ErrorPage from "../pages/ErrorPage";

const ProtectedRoute: React.FC = () => {
  const { authenticated, profile, isLoading } = useUserProfile();

  if (isLoading) return <LoadingScreen />; // Mientras carga, muestra pantalla de carga

  // Si no está autenticado, redirige a la landing page
  if (!authenticated) return <Navigate to="/" replace />;

  // Si está autenticado pero no tiene perfil completo, redirige a la página de creación de perfil
  if (authenticated && !profile?.weight) return <Navigate to="/create-profile" replace />;

  // Si todo está en orden, renderiza el contenido de las rutas protegidas
  return <Outlet />;
};

const PublicOnlyRoute: React.FC = () => {
  const { authenticated, profile, isLoading } = useUserProfile();

  if (isLoading) return <LoadingScreen />; // Mientras carga, muestra pantalla de carga

  // Si está autenticado y ya tiene perfil, redirige al dashboard
  if (authenticated && profile?.weight) return <Navigate to="/dashboard" replace />;

  // Si está autenticado pero no tiene perfil, redirige a la página de creación de perfil
  if (authenticated && !profile?.weight) return <Navigate to="/create-profile" replace />;

  // Si no está autenticado, renderiza el contenido de las rutas públicas
  return <Outlet />;
};

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <PublicOnlyRoute />,
        children: [
          {
            path: "/",
            element: <LandingPage />,
          },
        ],
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "dashboard",
            element: <DashboardPage />,
          },
          {
            path: "create-profile",
            element: <ProfileDataInput />,
          },
        ],
      },
      {
        path: "*",
        element: <ErrorPage />,
      }
    ],
  },
]);
