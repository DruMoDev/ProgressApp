import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import PreAuthLayout from "../components/layouts/PreAuthLayout";
import PostAuthLayout from "../components/layouts/PostAuthLayout";
import LandingPage from "../pages/LandingPage";
import ProfileDataInput from "../pages/ProfileDataInputPage";
import DashboardPage from "../pages/DashboardPage";
import { LoadingScreen } from "../components/LoadingScreen";
import useUserProfile from "../hooks/useUserProfile";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { authenticated } = useUserProfile();
  if (!authenticated) return <Navigate to="/" replace />;
  return <>{children}</>;
};

const PublicOnlyRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { authenticated, profile, isLoading } = useUserProfile();
  if (isLoading) return <LoadingScreen />;
  if (authenticated && !profile?.weight)
    return <Navigate to="/create-profile" replace />;
  if (authenticated && profile?.weight)
    return <Navigate to="/dashboard" replace />;
  return <>{children}</>;
};

export const router = createBrowserRouter([
  {
    element: (
      <PublicOnlyRoute>
        <PreAuthLayout />
      </PublicOnlyRoute>
    ),
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
  {
    element: (
      <ProtectedRoute>
        <PostAuthLayout />
      </ProtectedRoute>
    ),
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
]);
