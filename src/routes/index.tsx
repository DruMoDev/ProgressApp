import React from "react";
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import ProfileDataInput from "../pages/ProfileDataInputPage";
import DashboardPage from "../pages/DashboardPage";
import { LoadingScreen } from "../components/LoadingScreen";
import useUserProfile from "../hooks/useUserProfile";
import Layout from "../components/layouts/Layout";

const ProtectedRoute: React.FC = () => {
  const { authenticated } = useUserProfile();

  if (!authenticated) return <Navigate to="/" replace />;

  return <Outlet />;
};

const PublicOnlyRoute: React.FC = () => {
  const { authenticated, profile, isLoading } = useUserProfile();

  if (isLoading) return <LoadingScreen />;

  if (authenticated && !profile?.weight)
    return <Navigate to="/create-profile" replace />;

  if (authenticated && profile?.weight)
    return <Navigate to="/dashboard" replace />;

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
    ],
  },
]);
